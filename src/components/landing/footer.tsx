import Link from "next/link";

import { type DictKey } from "@/lib/i18n";

import { LangToggle, ThemeToggle } from "./controls";
import { T } from "./lang-provider";

const columns: { heading: DictKey; links: { href: string; k: DictKey }[] }[] = [
  {
    heading: "ft_product",
    links: [
      { href: "/#features", k: "ft_features" },
      { href: "/#pricing", k: "ft_pricing" },
      { href: "/#integrations", k: "ft_integr" },
      { href: "/#", k: "ft_changelog" },
    ],
  },
  {
    heading: "ft_company",
    links: [
      { href: "/about", k: "ft_about" },
      { href: "/#", k: "ft_blog" },
      { href: "/#", k: "ft_careers" },
      { href: "/#cta", k: "ft_contact" },
    ],
  },
  {
    heading: "ft_legal",
    links: [
      { href: "/#", k: "ft_privacy" },
      { href: "/#", k: "ft_terms" },
      { href: "/#", k: "ft_security" },
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
              <div className="brand-mark">S.</div>
              <div>
                <div className="brand-name">Sales</div>
                <div className="brand-tag">Speech analytics</div>
              </div>
            </Link>
            <p className="blurb">
              <T k="ft_blurb" />
            </p>
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
          <div style={{ display: "flex", gap: 10 }}>
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
