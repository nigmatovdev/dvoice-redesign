import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

// Example of a non-root page with its own canonical URL and metadata.
export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Learn more about this project and how it's built.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ])}
        />
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="mt-4 opacity-70">
          This is a server-rendered page. Its metadata, canonical URL, and
          breadcrumb structured data are all generated on the server, so it is
          fully indexable.
        </p>
      </main>
      <Footer />
    </>
  );
}
