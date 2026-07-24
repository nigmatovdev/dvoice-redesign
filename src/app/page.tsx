import type { Metadata } from "next";

import { LandingPage } from "@/components/landing/landing-page";
import { faqs } from "@/components/landing/sections/faq";
import { JsonLd, faqPageSchema, softwareApplicationSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

// Per-page metadata for the landing page (the canonical root "/").
export const metadata: Metadata = buildMetadata({
  path: "/",
  description: siteConfig.description,
});

// Server Component: the landing markup is server-rendered for SEO; small client
// islands (theme, language, scroll reveal, signup) hydrate on top.
export default function HomePage() {
  return (
    <>
      <LandingPage initialLang="en" />
      {/* Homepage-only structured data (Organization + WebSite live in the root
          layout). SoftwareApplication describes the product; FAQPage mirrors the
          on-page FAQ and is eligible for FAQ rich results. */}
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqPageSchema(faqs)} />
    </>
  );
}
