import { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { SITEMAP_QUERY } from "../../sanity/lib/queries";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const paths = await client.fetch<{ href: string; _updatedAt: string }[]>(
      SITEMAP_QUERY
    );

    const baseUrl =
      process.env.VERCEL && process.env.VERCEL_ENV === "production"
        ? "https://petclinics.co.in"
        : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const dynamicPaths: MetadataRoute.Sitemap = paths.map((path) => ({
      url: new URL(path.href, baseUrl).toString(),
      lastModified: new Date(path._updatedAt),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 1,
    }));

    const staticUrls = [
      "/services",
      "/pets-boarding-in-bangalore",
      "/pets-training-in-bangalore",
      "/pets-clinic-in-bangalore",
      "/dog-walkers-in-bangalore",
      "/pets-grooming-in-bangalore",
      "/pets-food-in-bangalore",
      "/about-us",
      "/blog",
      "/contact-us",
      "/best-pets-clinic-near-banashankari",
      "/best-pets-clinic-near-bannerghatta-road",
      "/best-pets-clinic-near-cooke-town",
      "/best-pets-clinic-near-frazer-town",
      "/best-pets-clinic-near-jayanagar",
      "/best-pets-clinic-near-malleshwaram",
      "/best-pets-clinic-near-rajajinagar",
      "/best-pets-clinic-near-sadashivanagar",
      "/good-pets-clinic-near-electronic-city",
      "/pets-clinic-near-basavanagudi",
      "/pets-clinic-near-indiranagar",
      "/pets-clinic-near-jp-nagar",
      "/pets-clinic-near-sarjapur-road",
      "/top-pets-clinic-near-btm-layout",
      "/top-pets-clinic-near-koramangala",
      "/top-pets-clinic-near-marathahalli",
      "/top-pets-clinic-near-whitefield",
      "/best-pets-clinic-near-rr-nagar",
      "/top-pets-clinic-near-devanahalli",
      "/pets-clinic-near-bellandur",
      "/best-pets-clinic-near-kr-puram",
    ].map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: new Date("2024-12-31"),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    }));

    return [...dynamicPaths, ...staticUrls];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
