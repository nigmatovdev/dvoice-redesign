import type { Metadata } from "next";

import { LandingPage } from "@/components/landing/landing-page";
import { buildMetadata } from "@/lib/seo";

// English landing page. Renders the full marketing content in English in the
// server HTML (locked, so it stays English without JavaScript) — this is the
// no-JS English entry point for reviewers who don't read Uzbek.
export const metadata: Metadata = buildMetadata({
  title: "metrixme — AI speech analytics for contact centers",
  description:
    "metrixme is an AI speech-analytics platform for contact centers, based in Tashkent, Uzbekistan. Score every sales call 0–100, find the coaching zone and lift conversion.",
  path: "/en",
});

export default function EnglishHomePage() {
  return <LandingPage initialLang="en" locked />;
}
