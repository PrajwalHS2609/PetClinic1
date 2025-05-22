import { MetadataRoute } from "next";
import { SITEMAP_QUERY } from "../../sanity/lib/queries";
import { client } from "@/sanity/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const paths = await client.fetch(SITEMAP_QUERY);

    const baseUrl =
      process.env.VERCEL && process.env.VERCEL_ENV === "production"
        ? "https://petclinics.co.in/"
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000";

    const dynamicPaths = paths.map(
      (path: { href: string; _updatedAt: string }) => ({
        url: new URL(path.href!, baseUrl).toString(),
        lastModified: new Date(path._updatedAt),
        changeFrequency: "weekly",
        priority: 1,
      })
    );

    const oldUrls = [
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
      lastModified: new Date("2024-12-31"), // or best guess
      changeFrequency: "monthly",
      priority: 0.8,
    }));

    return [...dynamicPaths, ...oldUrls];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
