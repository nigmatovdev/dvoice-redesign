import type { Metadata } from "next";

import { TermsPageView } from "@/components/landing/terms-page-view";
import { buildMetadata } from "@/lib/seo";

// SEO metadata for the Terms page (its own canonical URL).
export const metadata: Metadata = buildMetadata({
  title: "Foydalanish shartlari",
  description:
    "metrixme (metrixme.com) platformasidan foydalanish shartlari — xizmat, ma'lumotlar, to‘lovlar va javobgarlik bo‘yicha qoidalar.",
  path: "/terms",
});

// Server Component: content is server-rendered for SEO; the client view hydrates
// the nav toggles, modal and language switch on top.
export default function TermsPage() {
  return <TermsPageView />;
}
