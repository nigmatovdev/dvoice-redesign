import { LangSeg, ThemeSeg } from "./controls";
import { T } from "./lang-provider";

const links: { href: string; k: "nav_features" | "nav_how" | "nav_showcase" | "nav_pricing" | "nav_faq" }[] = [
  { href: "#features", k: "nav_features" },
  { href: "#how", k: "nav_how" },
  { href: "#showcase", k: "nav_showcase" },
  { href: "#pricing", k: "nav_pricing" },
  { href: "#faq", k: "nav_faq" },
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
          <LangSeg />
          <ThemeSeg />
          <a className="btn btn-ghost btn-sm" href="#">
            <T k="nav_login" />
          </a>
          <a className="btn btn-primary btn-sm" href="#cta">
            <T k="nav_cta" />
          </a>
        </div>
      </div>
    </header>
  );
}
