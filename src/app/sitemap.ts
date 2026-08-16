import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guides";
import { absoluteUrl } from "@/lib/seo";
import { listedDigitalProducts, productPath } from "@/lib/store";

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getAllGuides();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/guides"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/video"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/work-with-me"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/links"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/kits"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...listedDigitalProducts().map((product) => ({
      url: absoluteUrl(productPath(product)),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: new Date(guide.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
