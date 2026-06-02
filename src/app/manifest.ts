import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Generates /manifest.webmanifest for PWA / installability and mobile polish.
 * Add real icon files under /public and reference them in `icons`.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.themeColor,
    theme_color: siteConfig.themeColor,
    icons: [
      // Provide these in /public (placeholders for now):
      // { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      // { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
