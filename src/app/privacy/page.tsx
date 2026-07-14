import type { Metadata } from "next";

import { PrivacyPageView } from "@/components/landing/privacy-page-view";
import { buildMetadata } from "@/lib/seo";

// SEO metadata for the Privacy page (its own canonical URL).
export const metadata: Metadata = buildMetadata({
  title: "Maxfiylik siyosati",
  description:
    "metrixme (metrixme.com) platformasi shaxsiy ma'lumotlarni qanday yig'ishi, ishlatishi va himoya qilishini tushuntiruvchi maxfiylik siyosati.",
  path: "/privacy",
});

// Server Component: content is server-rendered for SEO; the client view hydrates
// the nav toggles, modal and language switch on top.
export default function PrivacyPage() {
  return <PrivacyPageView />;
}
