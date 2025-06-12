import Link from "next/link";
import React from "react";
import "@/components/Blog/Blog.css";

const BlogCategories = () => {
  return (
    <div className="blogCategories-container">
      <ul>
        <h2>Categories</h2>
        <li>
          <Link href={"/blog"}>All</Link>
        </li>
        <li>
          <Link href={"/category/dogs "}>Dogs</Link>
        </li>
        <li>
          <Link href={"/category/cats"}>Cats</Link>
        </li>
        <li>
          <Link href={"/category/tips"}>Tips</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogCategories;
