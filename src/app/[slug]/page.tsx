import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

import PostContent, {
  PostContentType,
} from "@/components/SanityComponents/Post";

import ServiceContent, {
  ServiceContentType,
} from "@/components/SanityComponents/ServiceContent";

export const revalidate = 0;

// ----------------------
// FIXED GROQ QUERIES
// ----------------------

// Return { post: {...}, carouselBlock: {...} }
const POST_QUERY = `{
  "post": *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body,
    mainImage { asset->{ url } },
    youtubeVideoUrl,
    faq[] { question, answer }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[] {
      alt,
      caption,
      link,
      asset->{ url }
    }
  }
}`;

// Return { service: {...}, carouselBlock: {...} }
const SERVICE_QUERY = `{
  "service": *[_type == "ServiceCategory" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body,
    mainImage { asset->{ url } },
    youtubeVideoUrl,
    faq[] { question, answer },
    customTable{title, headers, rows[] {cells}}
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[] {
      alt,
      caption,
      link,
      asset->{ url }
    }
  }
}`;

type SlugParams = { slug: string };

type CarouselImage = {
  alt?: string;
  caption?: string;
  link?: string;
  asset?: { url?: string };
};

type CarouselBlock = {
  title?: string;
  images?: CarouselImage[];
};

// ----------------------
// PAGE COMPONENT
// ----------------------

export default async function SlugPage({
  params: paramsPromise,
}: {
  params: Promise<SlugParams>;
}) {
  const { slug } = await paramsPromise;

  // 1️⃣ Fetch POST
  const postData: {
    post: PostContentType | null;
    carouselBlock: CarouselBlock | null;
  } = await client.fetch(POST_QUERY, { slug });

  if (postData.post) {
    return (
      <PostContent
        content={{
          ...postData.post,
          carouselBlock: postData.carouselBlock ?? undefined,
        }}
      />
    );
  }

  // 2️⃣ Fetch SERVICE
  const serviceData: {
    service: ServiceContentType | null;
    carouselBlock: CarouselBlock | null;
  } = await client.fetch(SERVICE_QUERY, { slug });

  if (serviceData.service) {
    return (
      <ServiceContent
        content={{
          ...serviceData.service,
          carouselBlock: serviceData.carouselBlock ?? undefined,
        }}
      />
    );
  }

  // 3️⃣ Not found
  notFound();
}
