import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

/**
 * Absolute URL helper. Joins a path onto the configured site URL so canonical
 * tags and OG images are always fully-qualified (required by crawlers).
 */
export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
}

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  /** Path relative to the site root, e.g. "/about". Drives canonical + OG url. */
  path?: string;
  /** Absolute or root-relative image URL. Falls back to the site default. */
  image?: string;
  keywords?: string[];
  /** Set true on pages that should not be indexed (e.g. drafts, dashboards). */
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Builds a complete, SEO-friendly Metadata object for a page.
 *
 * Use in any `page.tsx` / `layout.tsx`:
 *   export const metadata = buildMetadata({ title: "About", path: "/about" });
 * or inside `generateMetadata` for dynamic routes.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  keywords = [...siteConfig.keywords],
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: BuildMetadataOptions = {}): Metadata {
  const canonical = absoluteUrl(path);
  const ogImageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    // Only emit `title` when a page provides one. Returning `title: undefined`
    // would override the root layout's `title.default`, leaving the page with no
    // <title> at all. Omitting the key lets the layout default/template apply.
    ...(title !== undefined && { title }),
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: canonical,
      title: title ?? siteConfig.name,
      description,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title ?? siteConfig.name }],
      ...(type === "article" && { publishedTime, modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter.site,
      creator: siteConfig.twitter.handle,
      title: title ?? siteConfig.name,
      description,
      images: [ogImageUrl],
    },
  };
}
