// src/app/sitemap.ts

import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Generates the sitemap.xml file for the website.
 *
 * Next.js automatically serves this file at:
 * /sitemap.xml
 *
 * Search engines like Google use the sitemap to
 * discover and index pages more efficiently.
 *
 * You can extend this later to include:
 * - blog posts
 * - CMS pages
 * - dynamic routes
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
