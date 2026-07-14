import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

/**
 * Generates /sitemap.xml.
 *
 * Static routes are listed here directly. For dynamic content (blog posts,
 * products, etc.) fetch the slugs and map them into additional entries — this
 * function can be async.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/privacy"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Example for dynamic routes (uncomment + adapt when you have data):
  // const posts = await getPosts();
  // const postRoutes = posts.map((post) => ({
  //   url: absoluteUrl(`/blog/${post.slug}`),
  //   lastModified: post.updatedAt,
  //   changeFrequency: "monthly" as const,
  //   priority: 0.6,
  // }));

  return [...staticRoutes];
}
