import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

/**
 * Generates /robots.txt at build/request time.
 * Disallows internal/API paths and points crawlers at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
