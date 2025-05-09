import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import "@/components/Blog/Blog.css";
import BlogHeader from "@/components/Blog/BlogHeader";
import { FaTags } from "react-icons/fa6";

const POSTS_QUERY = `*[
    _type == "post" && defined(slug.current)
  ]|order(publishedAt desc)[0...100]{
    _id,
    title,
    slug,
    description,
    mainImage{
      ...,
      asset->{
        _id,
        url
      }
    }
  }`;

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {});

  return (
    <div className="main-container">
      <BlogHeader />
      {posts.map((post) => (
        <div className="blogCard-content" key={post._id}>
          <div className="blogCard-imgContent">
          {post.mainImage?.asset?.url && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={550}
                  height={310}
                />
              )}
          </div>
          <div className="blogCard-tag">
            <FaTags className="blogCard-tagIcon" />
            <Link href="">CAT</Link>
            <Link href="">DOG</Link>
            <Link href="">TOYS</Link>
            <Link href="">FOOD</Link>
            <Link href="">BIRDS</Link>
          </div>
          <div className="blogCard-headContainer">
            <h3>
              <Link href={`/${post.slug.current}`}>{post.title}</Link>
            </h3>
          </div>
          <div className="blogCard-paraContainer">
            <p>{post.description}</p>
          </div>
          <div className="blogCard-buttonContainer">
            <Link href={`/${post.slug.current}`}>
              {" "}
              <button>READ MORE</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
