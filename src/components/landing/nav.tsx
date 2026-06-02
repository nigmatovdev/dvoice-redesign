import { AccessButton } from "./contact-modal";
import { LangToggle, ThemeToggle } from "./controls";
import { T } from "./lang-provider";

// Max 3 primary links to keep the bar clean.
const links: { href: string; k: "nav_features" | "nav_showcase" | "nav_pricing" }[] = [
  { href: "#features", k: "nav_features" },
  { href: "#showcase", k: "nav_showcase" },
  { href: "#pricing", k: "nav_pricing" },
];

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <div className="brand-mark">S.</div>
          <div>
            <div className="brand-name">Sales</div>
            <div className="brand-tag">Speech analytics</div>
          </div>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              <T k={l.k} />
            </a>
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
