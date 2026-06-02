"use client";

import { useEffect, useState } from "react";

import { LANGS } from "@/lib/i18n";

import { useLang } from "./lang-provider";

const THEME_KEY = "sales-landing-theme";
type Theme = "light" | "dark";

/** Language segmented control (UZ / EN). */
export function LangSeg() {
  const { lang, setLang } = useLang();
  return (
    <div className="seg lang-seg" role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l}
          data-lang={l}
          className={lang === l ? "active" : undefined}
          aria-pressed={lang === l}
          aria-label={l === "uz" ? "O‘zbekcha" : "English"}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

const SunIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </svg>
);

/**
 * Theme segmented control (light / dark). The active theme lives as the
 * `data-theme` attribute on <html> (applied pre-paint by the inline script in
 * the root layout), so here we only read/sync that attribute + persist it.
 */
export function ThemeSeg() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  const apply = (next: Theme) => {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="seg theme-seg" role="group" aria-label="Theme">
      <button
        data-theme="light"
        aria-label="Light"
        className={theme === "light" ? "active" : undefined}
        aria-pressed={theme === "light"}
        onClick={() => apply("light")}
      >
        {SunIcon}
      </button>
      <button
        data-theme="dark"
        aria-label="Dark"
        className={theme === "dark" ? "active" : undefined}
        aria-pressed={theme === "dark"}
        onClick={() => apply("dark")}
      >
        {MoonIcon}
      </button>
    </div>
  );
}
