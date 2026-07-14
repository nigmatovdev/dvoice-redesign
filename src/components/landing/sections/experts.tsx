"use client";

import { useEffect, useState } from "react";

import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

interface Expert {
  name: DictKey;
  role: DictKey;
  /** YouTube video / Short ID. Paste new IDs here. */
  yt: string;
  fg: string;
}

const experts: Expert[] = [
  { name: "exp1_n", role: "exp1_r", yt: "dQw4w9WgXcQ", fg: "var(--amber)" },
  { name: "exp2_n", role: "exp2_r", yt: "5qap5aO4i9A", fg: "var(--blue)" },
  { name: "exp3_n", role: "exp3_r", yt: "jfKfPfyJRdk", fg: "var(--green)" },
  { name: "exp4_n", role: "exp4_r", yt: "3JZ_D3ELwOQ", fg: "var(--violet)" },
];

const ROTATE_MS = 12000;

const embed = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&modestbranding=1&rel=0`;
const thumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export function Experts() {
  const [active, setActive] = useState(0);
  const n = experts.length;
  const go = (i: number) => setActive((i + n) % n);

  // Auto-rotate (YouTube iframe has no reliable ended event without the JS API).
  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % n), ROTATE_MS);
    return () => clearTimeout(t);
  }, [active, n]);

  return (
    <section className="section experts" id="experts">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            <span>
              <T k="exp_eyebrow" />
            </span>
          </span>
          <h2 className="h2">
            <T k="exp_h2" />
          </h2>
          <p className="lede">
            <T k="exp_lede" />
          </p>
        </Reveal>

        <Reveal className="expert-stage">
          {experts.map((e, i) => {
            let rel = i - active;
            if (rel > n / 2) rel -= n;
            if (rel < -n / 2) rel += n;
            const isActive = rel === 0;
            const visible = Math.abs(rel) <= 1;
            const style: React.CSSProperties = {
              transform: `translateX(${rel * 62}%) scale(${isActive ? 1 : 0.82})`,
              opacity: visible ? (isActive ? 1 : 0.45) : 0,
              zIndex: 10 - Math.abs(rel),
              pointerEvents: visible ? "auto" : "none",
            };
            return (
              <article
                key={e.yt}
                className={`expert-card${isActive ? "" : " side"}`}
                style={style}
                aria-hidden={!isActive}
                onClick={() => !isActive && go(i)}
              >
                <div className="expert-media">
                  {isActive ? (
                    <iframe
                      key={e.yt}
                      src={embed(e.yt)}
                      title={`Expert ${i + 1}`}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={thumb(e.yt)} alt="" />
                  )}
                  <div className="expert-cap">
                    <div className="en" style={{ color: e.fg }}>
                      <T k={e.name} />
                    </div>
                    <div className="er">
                      <T k={e.role} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>

        <div className="carousel-controls">
          <button type="button" className="carousel-arrow" onClick={() => go(active - 1)} aria-label="Previous expert">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <div className="carousel-dots" role="tablist">
            {experts.map((e, i) => (
              <button
                key={e.yt}
                type="button"
                className={`carousel-dot${i === active ? " active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Expert ${i + 1}`}
                aria-selected={i === active}
                role="tab"
              />
            ))}
          </div>
          <button type="button" className="carousel-arrow" onClick={() => go(active + 1)} aria-label="Next expert">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
