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

/** Best-match supported language from the browser's preferences (uz/en/ru). */
function detectBrowserLang(): Lang {
  try {
    const cands =
      typeof navigator !== "undefined" && navigator.languages?.length
        ? navigator.languages
        : [typeof navigator !== "undefined" ? navigator.language : ""];
    for (const c of cands) {
      const code = (c || "").toLowerCase().slice(0, 2);
      if ((LANGS as string[]).includes(code)) return code as Lang;
    }
  } catch {
    /* navigator unavailable */
  }
  return "uz"; // primary market fallback
}

/**
 * Holds the active language. Server renders the default ("uz") so the initial
 * HTML is fully populated for crawlers; after mount we use the saved choice if
 * any, otherwise fall back to the browser's language. Switching is live, no reload.
 */
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  // After mount: saved explicit choice wins; otherwise match the browser.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (LANGS as string[]).includes(saved)) {
        setLangState(saved as Lang);
        return;
      }
    } catch {
      /* localStorage unavailable */
    }
    setLangState(detectBrowserLang());
  }, []);

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
