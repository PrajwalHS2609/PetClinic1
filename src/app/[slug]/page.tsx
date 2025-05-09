import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// CSS for both post and service
import "@/components/Blog/Blog.css";
import "@/components/Style/style.css";
import ServicesHeader from "@/components/ServicesPage/ServicesHeader/ServicesHeader";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import PetsType from "@/components/HomePage/PetsType/PetsType";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";
import { portableTextComponents } from "@/components/PortableTextComponents";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

const SERVICE_QUERY = `*[_type == "ServiceCategory" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body, 
   metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

// ✅ keep generateMetadata as you wanted
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });
  const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
  const content = post || service;

  if (!content) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  return {
    title: content.metaTitle || content.title || "Default Title",
    description: content.metaDescription || "Default description.",
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });
  const service = !post
    ? await client.fetch<SanityDocument>(SERVICE_QUERY, { slug })
    : null;
  const content = post || service;

  if (!content) notFound();

  const imageUrl = content?.mainImage?.asset?.url || null;
  const isPost = !!post;

  return (
    <div className={isPost ? "blog-container" : "sanityContent-container"}>
      <div className={isPost ? "blog-wrapper1" : "sanityContent-content"}>
        {isPost && imageUrl ? (
          <Image
            src={imageUrl}
            alt={content.title || "Image"}
            width={550}
            height={310}
          />
        ) : isPost ? (
          <p className="image-fallback">Image not available</p>
        ) : null}

        {/* HeaderComponent for service content */}
        {!isPost && (
          <>
            <ServicesHeader />
            <ServiceForYou />
            <HomeService />
            <PetsType />
            <HomeCare />
            <AboutUsKey />
            <AboutUsTakeCare />
            <HomeTestimonial />
            <HomePartners />
          </>
        )}
        <h1 className={isPost ? "blogHead-content" : "subServicesMain-item"}>
          {content.title}
        </h1>
        <div className={isPost ? "blogHead-content" : "subServicesMain-item"}>
          {Array.isArray(content.body) && (
            <PortableText
              value={content.body}
              components={portableTextComponents}
            />
          )}
        </div>
      </div>

      {isPost && (
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      )}
    </div>
  );
}

type SlugType = { slug: { current: string } };

export async function generateStaticParams() {
  const postSlugs = await client.fetch<SlugType[]>(
    `*[_type == "post"]{ slug }`
  );
  const serviceSlugs = await client.fetch<SlugType[]>(
    `*[_type == "ServiceCategory"]{ slug }`
  );

  return [...postSlugs, ...serviceSlugs].map((item) => ({
    slug: item.slug.current,
  }));
}
