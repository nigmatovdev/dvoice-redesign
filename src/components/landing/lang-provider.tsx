"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { type DictKey, type Lang, LANGS, translate } from "@/lib/i18n";

const STORAGE_KEY = "metrixme-landing-lang";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: DictKey) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

/**
 * Holds the active language. Server renders `initialLang` (default "en") so the
 * initial HTML is fully populated for crawlers and English is the site default;
 * after mount we restore the visitor's saved explicit choice if any, otherwise
 * keep the English default. Switching is live, no reload, and persists.
 *
 * `locked` freezes the language to `initialLang` and skips localStorage
 * restoration — used by the `/en` route so an English reviewer gets English
 * content in the raw server HTML (readable without JavaScript).
 */
export function LangProvider({
  children,
  initialLang = "en",
  locked = false,
}: {
  children: React.ReactNode;
  initialLang?: Lang;
  locked?: boolean;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // After mount: a saved explicit choice wins; otherwise keep the English
  // default (no browser-language auto-switch). Skipped when locked.
  useEffect(() => {
    if (locked) return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (LANGS as string[]).includes(saved)) {
        setLangState(saved as Lang);
      }
    } catch {
      /* localStorage unavailable */
    }
  }, [locked]);

  // Keep <html lang> in sync for accessibility / SEO.
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback((key: DictKey) => translate(key, lang), [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LangProvider>");
  return ctx;
}

/** Convenience: render a translated string by key. */
export function T({ k }: { k: DictKey }) {
  const { t } = useLang();
  return <>{t(k)}</>;
}
