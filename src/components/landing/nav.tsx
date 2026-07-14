"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { type DictKey } from "@/lib/i18n";

import { BrandMark } from "./brand-mark";
import { AccessButton } from "./contact-modal";
import { LangToggle, ThemeToggle } from "./controls";
import { T } from "./lang-provider";

// Section links point at the home page (work from any route).
const links: { href: string; k: DictKey }[] = [
  { href: "/#showcase", k: "nav_showcase" },
  { href: "/#integrations", k: "ft_integr" },
  { href: "/#faq", k: "nav_faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape, and lock body scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Smooth-scroll same-page anchors ourselves. The default Link hash jump is
  // unreliable here: it can fire while the menu's scroll-lock is still active
  // (landing on the wrong section), and it doesn't wait for layout. We close
  // the menu first, then scrollIntoView (which respects scroll-margin-top).
  const goToHash = (e: React.MouseEvent, href: string) => {
    const id = href.startsWith("/#") ? href.slice(2) : "";
    const el = id ? document.getElementById(id) : null;
    if (!el) return; // let the link navigate normally
    e.preventDefault();
    setOpen(false);
    // Release the menu's scroll-lock NOW. The useEffect cleanup that normally
    // restores it runs after paint — too late, a scroll fired before then would
    // run against a still-locked body and land short (on the wrong section).
    document.body.style.removeProperty("overflow");
    // Re-align across several frames. A single smooth scroll aims at the target's
    // position at call time, but reveal animations / font + lazy content above
    // FAQ shift it mid-flight — so we keep re-aiming until it settles, then snap
    // exactly. scrollIntoView respects scroll-margin-top (clears the sticky nav).
    let tries = 0;
    const align = () => {
      tries += 1;
      el.scrollIntoView({ behavior: tries >= 6 ? "auto" : "smooth" });
      if (tries < 6) setTimeout(align, 110);
    };
    requestAnimationFrame(align);
  };

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <BrandMark idSuffix="nav" />
          <div className="brand-name">metrixme</div>
        </Link>
        <nav className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={(e) => goToHash(e, l.href)}>
              <T k={l.k} />
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <LangToggle />
          <ThemeToggle />
          <AccessButton k="cta_get_access" className="btn btn-primary btn-sm nav-cta" />
          <button
            type="button"
            className="nav-burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu — only rendered/visible below the nav breakpoint. */}
      {open && (
        <div className="nav-menu">
          <div className="wrap">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={(e) => goToHash(e, l.href)}>
                <T k={l.k} />
              </Link>
            ))}
            <div className="nav-menu-toggles">
              <LangToggle />
              <ThemeToggle />
            </div>
            <AccessButton k="cta_get_access" className="btn btn-primary btn-lg nav-menu-cta" />
          </div>
        </div>
      )}
    </header>
  );
}
