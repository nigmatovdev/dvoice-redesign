import { siteConfig } from "@/config/site";
import { dict, type DictKey } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";

/**
 * Renders a JSON-LD <script> for structured data (rich results in search).
 * Server component — the markup is part of the SSR HTML, exactly what crawlers
 * want.
 *
 * Usage:
 *   <JsonLd data={organizationSchema()} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is generated server-side from trusted config, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** schema.org Organization — good default for the site root. */
export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/icon.png"),
    description: siteConfig.description,
    // Verified profiles — helps Google connect the brand across the web.
    sameAs: [
      "https://www.linkedin.com/company/metrixme/",
      "https://www.instagram.com/metrixme",
      "https://t.me/metrixme",
    ],
  };
}

/**
 * schema.org SoftwareApplication — tells search engines exactly what metrixme
 * is (a web-based business app: AI speech / call analytics), which helps it
 * surface for relevant product queries.
 */
export function softwareApplicationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    description: siteConfig.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteConfig.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "14-day free trial",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

/**
 * schema.org FAQPage — built from the on-page FAQ (English, matching the default
 * server-rendered content). Eligible for FAQ rich results and reinforces topic
 * relevance. Pass the same list the FAQ section renders so the two never drift.
 */
export function faqPageSchema(items: { q: DictKey; a: DictKey }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: dict[q].en,
      acceptedAnswer: { "@type": "Answer", text: dict[a].en },
    })),
  };
}

/** schema.org WebSite with a SearchAction (enables the sitelinks search box). */
export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Breadcrumb trail for a page. Pass ordered [name, path] items. */
export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
