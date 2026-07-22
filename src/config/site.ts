/**
 * Central site configuration.
 * Single source of truth for metadata, SEO defaults, and branding.
 * Update these values once and they propagate everywhere (metadata, sitemap,
 * robots, manifest, structured data).
 */

export const siteConfig = {
  name: "metrixme",
  // Short name used in the PWA manifest.
  shortName: "metrixme",
  description:
    "AI-powered speech analytics for contact centers — score every sales call, find the coaching zone, lift conversion.",
  // Descriptive default <title> and OG title (never just the bare brand name).
  titleDefault: "metrixme — AI speech analytics for contact centers",
  // Production URL. Used to build absolute URLs for canonical tags, OG images,
  // sitemaps, etc. Pulled from env so it differs per environment.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://metrixme.com",
  // Default Open Graph / Twitter share image (relative to /public or a route).
  ogImage: "/opengraph-image",
  // Default UI locale. The landing renders Uzbek by default with an EN toggle.
  locale: "uz_UZ",
  // Used for <html lang="...">.
  lang: "uz",
  themeColor: "#0B0B0E",
  // Organization / author info for structured data.
  author: {
    name: "metrixme — Speech analytics",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://metrixme.com",
  },
  // Social handles (used in Twitter card metadata). Leave empty if unused.
  twitter: {
    handle: "@metrixme",
    site: "@metrixme",
  },
  // Default keywords. Prefer per-page keywords where it matters.
  keywords: [
    "speech analytics",
    "call scoring",
    "amoCRM",
    "sales coaching",
    "contact center",
    "AI nutq tahlili",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
