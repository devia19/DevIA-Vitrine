import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return [
    { url: `${site}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${site}/fonctionnalites`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site}/tarifs`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site}/mentions-legales`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site}/politique-de-confidentialite`, changeFrequency: "yearly", priority: 0.3 },
  ];
}

