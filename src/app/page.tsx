import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

// Per-page metadata. The home page is the canonical root "/".
export const metadata: Metadata = buildMetadata({
  path: "/",
  description: siteConfig.description,
});

// This page is a Server Component by default -> fully server-rendered HTML,
// which is exactly what search engines index.
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-xl text-lg opacity-70">{siteConfig.description}</p>
        <p className="text-sm opacity-50">
          Server-rendered with Next.js App Router · SEO-ready out of the box.
        </p>
      </main>
      <Footer />
    </>
  );
}
