import Link from "next/link";

import { type DictKey } from "@/lib/i18n";

import { BrandMark } from "./brand-mark";
import { LangToggle, ThemeToggle } from "./controls";
import { T } from "./lang-provider";

const columns: { heading: DictKey; links: { href: string; k: DictKey }[] }[] = [
  {
    heading: "ft_product",
    links: [
      { href: "/#features", k: "ft_features" },
      { href: "/#how", k: "nav_how" },
      { href: "/#showcase", k: "nav_showcase" },
      { href: "/#integrations", k: "ft_integr" },
    ],
  },
  {
    heading: "ft_company",
    links: [{ href: "/#faq", k: "nav_faq" }],
  },
  {
    heading: "ft_legal",
    links: [
      { href: "/privacy", k: "ft_privacy" },
      { href: "/terms", k: "ft_terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/">
              <BrandMark idSuffix="ft" />
              <div className="brand-name">metrixme</div>
            </Link>
            <p className="blurb">
              <T k="ft_blurb" />
            </p>
            <a
              className="footer-tg"
              href="https://t.me/arislanbek9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram @arislanbek9"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.95 4.36 18.7 19.71c-.24 1.08-.88 1.35-1.79.84l-4.95-3.65-2.39 2.3c-.26.26-.49.49-1 .49l.36-5.09 9.26-8.37c.4-.36-.09-.56-.62-.2L6.13 13.1l-4.93-1.54c-1.07-.34-1.09-1.07.23-1.59l19.27-7.43c.9-.33 1.68.2 1.38 1.42Z" />
              </svg>
              <span>Telegram</span>
            </a>
            <a
              className="footer-tg"
              href="mailto:info@metrixme.com"
              aria-label="Email info@metrixme.com"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span>info@metrixme.com</span>
            </a>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h4>
                <T k={col.heading} />
              </h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.k}>
                    <Link href={link.href}>
                      <T k={link.k} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bot">
          <span className="cr">
            <T k="ft_cr" />
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
