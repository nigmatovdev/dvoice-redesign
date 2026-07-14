"use client";

import { useEffect, useState } from "react";

import { LANGS } from "@/lib/i18n";

import { useLang } from "./lang-provider";

const THEME_KEY = "metrixme-landing-theme";
type Theme = "light" | "dark";

const GlobeIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
);

/** Single button that cycles the language UZ → EN → RU. Shows the current code. */
export function LangToggle() {
  const { lang, setLang } = useLang();
  const next = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
  return (
    <button
      type="button"
      className="toggle-btn"
      onClick={() => setLang(next)}
      aria-label={`Switch language to ${next.toUpperCase()}`}
      title={`Switch to ${next.toUpperCase()}`}
    >
      {GlobeIcon}
      <span>{lang.toUpperCase()}</span>
    </button>
  );
}

const SunIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </svg>
);

/**
 * Single button that toggles light ⇄ dark. The active theme lives on
 * <html data-theme> (applied pre-paint by the inline script in the root layout),
 * so we only read/sync that attribute + persist it. Shows the icon of the
 * theme you'd switch *to*.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const el = document.documentElement;
    const sync = () => {
      const current = el.getAttribute("data-theme");
      if (current === "light" || current === "dark") setTheme(current);
    };
    sync(); // adopt the pre-paint theme on mount
    // Every ThemeToggle instance (nav + footer) mirrors the same
    // <html data-theme>. Observe it so toggling one keeps the others in sync
    // instead of each holding its own stale copy.
    const observer = new MutationObserver(sync);
    observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next); // instant feedback for this button; observer syncs the rest
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      className="toggle-btn toggle-icon"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? SunIcon : MoonIcon}
    </button>
  );
}
