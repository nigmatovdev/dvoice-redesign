"use client";

import { ContactModalProvider } from "./contact-modal";
import { Footer } from "./footer";
import { LangProvider } from "./lang-provider";
import { MouseGlow } from "./mouse-glow";
import { Nav } from "./nav";
import { Terms } from "./sections/terms";

/**
 * Client root for the Terms page. Reuses the same providers, nav, glow and
 * footer as the landing page so the look + behaviour stay consistent.
 */
export function TermsPageView() {
  return (
    <LangProvider>
      <ContactModalProvider>
        <MouseGlow />
        <Nav />
        <main id="top">
          <Terms />
        </main>
        <Footer />
      </ContactModalProvider>
    </LangProvider>
  );
}
