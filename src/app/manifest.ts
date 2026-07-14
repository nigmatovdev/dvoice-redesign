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
      // metrixme app tile (rounded square + ribbon). The padded tile doubles as
      // a maskable icon on Android.
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
