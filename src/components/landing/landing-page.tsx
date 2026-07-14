"use client";

import { ContactModalProvider } from "./contact-modal";
import { Footer } from "./footer";
import { LangProvider } from "./lang-provider";
import { MouseGlow } from "./mouse-glow";
import { Nav } from "./nav";
import { Ceo } from "./sections/ceo";
import { Cta } from "./sections/cta";
import { Experts } from "./sections/experts";
import { Faq } from "./sections/faq";
import { Features } from "./sections/features";
import { Hero } from "./sections/hero";
import { How } from "./sections/how";
import { Integrations } from "./sections/integrations";
import { Ops } from "./sections/ops";
import { Pricing } from "./sections/pricing";
import { Problem } from "./sections/problem";
import { Results } from "./sections/results";
import { Showcase } from "./sections/showcase";
import { Testimonials } from "./sections/testimonials";
import { Trust } from "./sections/trust";
import { ValueProp } from "./sections/value-prop";

/**
 * Client root for the marketing landing page. Wraps everything in the language
 * provider so the UZ/EN toggle works live. All content is still server-rendered
 * for SEO (Next.js renders client components on the server for the initial HTML).
 */
export function LandingPage() {
  return (
    <LangProvider>
      <ContactModalProvider>
        <MouseGlow />
        <Nav />
        <main id="top">
          <Problem />
          <Ceo />
          <Ops />
          {/* <ValueProp /> */}
          <Hero />
          {/* <Trust /> */}
          {/* <Features /> */}
          {/* <How /> */}
          <Showcase />
          <Results />
          <Integrations />
          {/* <Pricing /> */}
          {/* <Testimonials /> */}
          {/* <Experts /> */}
          <Faq />
          <Cta />
        </main>
        <Footer />
      </ContactModalProvider>
    </LangProvider>
  );
}
