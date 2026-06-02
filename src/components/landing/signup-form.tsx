"use client";

import { useRef, useState } from "react";

import { useLang } from "./lang-provider";

/**
 * Email capture form. No backend yet — on submit it shows a brief ✓ confirmation
 * and resets, mirroring the original landing.js behaviour. Wire `onSubmit` to a
 * server action or API route when the backend exists.
 */
export function SignupForm() {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setDone(false), 1600);
    e.currentTarget.reset();
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <input type="email" required placeholder={t("cta_input")} aria-label="Email" />
      <button type="submit" className="btn btn-primary btn-lg">
        {done ? "✓" : t("cta_btn")}
      </button>
    </form>
  );
}
