"use client";

import { ContactModalProvider } from "./contact-modal";
import { Footer } from "./footer";
import { LangProvider } from "./lang-provider";
import { MouseGlow } from "./mouse-glow";
import { Nav } from "./nav";
import { About } from "./sections/about";

/**
 * Client root for the About page. Reuses the same providers, nav, glow and
 * footer as the landing page so the look + behaviour stay consistent.
 */
export function AboutPageView() {
  return (
    <LangProvider>
      <ContactModalProvider>
        <MouseGlow />
        <Nav />
        <main id="top">
          <About />
        </main>
        <Footer />
      </ContactModalProvider>
    </LangProvider>
  );
}
