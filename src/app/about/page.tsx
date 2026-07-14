import type { Metadata } from "next";

import { AboutPageView } from "@/components/landing/about-page-view";
import { buildMetadata } from "@/lib/seo";

// SEO metadata for the About page (its own canonical URL + breadcrumb-friendly).
export const metadata: Metadata = buildMetadata({
  title: "Biz haqimizda",
  description:
    "metrixme — O‘zbekistondagi sotuv jamoalari uchun AI nutq tahlili platformasini yaratayotgan jamoa. Jamoamiz a’zolari bilan tanishing.",
  path: "/about",
});

// Server Component: content is server-rendered for SEO; the client view hydrates
// the nav toggles, modal and scroll-reveal on top.
export default function AboutPage() {
  return <AboutPageView />;
}
