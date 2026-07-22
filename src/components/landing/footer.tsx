import Link from "next/link";

import { type DictKey } from "@/lib/i18n";

import { BrandMark } from "./brand-mark";
import { FooterLangs, ThemeToggle } from "./controls";
import { T } from "./lang-provider";

// Legal links, data-driven so a future link can be added the same way.
const legalLinks: { href: string; k: DictKey }[] = [
  { href: "/privacy", k: "ft_privacy" },
  { href: "/terms", k: "ft_terms" },
];

// Handles/addresses are identical across languages, so — like before — these
// stay literal rather than routed through the dict. Icon-only in the slim
// bar; ariaLabel doubles as the hover title.
const socialLinks: {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
}[] = [
  {
    href: "https://t.me/metrixme",
    ariaLabel: "Telegram @metrixme",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.95 4.36 18.7 19.71c-.24 1.08-.88 1.35-1.79.84l-4.95-3.65-2.39 2.3c-.26.26-.49.49-1 .49l.36-5.09 9.26-8.37c.4-.36-.09-.56-.62-.2L6.13 13.1l-4.93-1.54c-1.07-.34-1.09-1.07.23-1.59l19.27-7.43c.9-.33 1.68.2 1.38 1.42Z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/metrixme/",
    ariaLabel: "LinkedIn metrixme",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21H9z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/metrixme",
    ariaLabel: "Instagram @metrixme",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "mailto:info@metrixme.com",
    ariaLabel: "Email info@metrixme.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-row1">
          <div className="footer-brand-social">
            <Link className="brand" href="/">
              <BrandMark idSuffix="ft" />
              <div className="brand-name">metrixme</div>
            </Link>
            <div className="footer-socials">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  className="footer-social"
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.ariaLabel}
                  title={s.ariaLabel}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-legal">
            {legalLinks.map((link) => (
              <Link key={link.k} href={link.href}>
                <T k={link.k} />
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-row2">
          <span className="cr">
            <T k="ft_cr" />
          </span>
          <div className="footer-row2-controls">
            <FooterLangs />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
