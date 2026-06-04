import Link from "next/link";

import { type DictKey } from "@/lib/i18n";

import { AccessButton } from "./contact-modal";
import { LangToggle, ThemeToggle } from "./controls";
import { T } from "./lang-provider";

// Section links point at the home page (work from any route); "Biz" is a real
// page route.
const links: { href: string; k: DictKey }[] = [
  { href: "/#features", k: "nav_features" },
  { href: "/#showcase", k: "nav_showcase" },
  // { href: "/#pricing", k: "nav_pricing" },
  { href: "/about", k: "nav_about" },
];

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/">
          <div className="brand-mark">S.</div>
          <div>
            <div className="brand-name">Sales</div>
            <div className="brand-tag">Speech analytics</div>
          </div>
        </Link>
        <nav className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <T k={l.k} />
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <LangToggle />
          <ThemeToggle />
          <AccessButton k="cta_get_access" className="btn btn-primary btn-sm" />
        </div>
      </div>
    </header>
  );
}
