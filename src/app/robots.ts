// src/app/robots.ts

import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Generates the robots.txt file.
 *
 * This file tells search engine crawlers
 * which parts of the site they are allowed to access.
 *
 * Next.js automatically serves this file at:
 * /robots.txt
 *
 * The sitemap property helps search engines
 * discover the sitemap.xml file faster.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Applies rules to all crawlers
        userAgent: "*",

        // Allow crawling of all pages
        allow: "/",

        // Example:
        // disallow: "/admin"
      },
    ],

    // Link to sitemap for search engines
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
