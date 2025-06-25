import Link from "next/link";
import React from "react";
import "@/components/Blog/Blog.css";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

export const revalidate = 0;


const CATEGORY_QUERY = `*[_type == "blogCategory"] | order(title asc){
  _id,
  title,
  slug
}`;

export default async function BlogCategories() {
  const categories = await client.fetch<SanityDocument[]>(CATEGORY_QUERY);

  return (
    <div className="blogCategories-container">
      <ul>
        <h2>Categories</h2>
        <li>
          <Link href={"/blog"}>All</Link>
        </li>
        {categories
          .filter((category) => category.slug && category.slug.current)
          .map((category) => (
            <li key={category._id}>
              <Link href={`/category/${category.slug.current}`}>
                {category.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
