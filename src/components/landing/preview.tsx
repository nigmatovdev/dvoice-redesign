"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import { useLang } from "./lang-provider";

// Call-score histogram bars: height (%) + quality-zone colour.
const BARS: { h: number; color: string }[] = [
  { h: 8, color: "var(--red)" },
  { h: 14, color: "var(--red)" },
  { h: 22, color: "var(--red)" },
  { h: 32, color: "var(--red)" },
  { h: 45, color: "var(--red)" },
  { h: 54, color: "var(--red)" },
  { h: 64, color: "var(--red)" },
  { h: 76, color: "var(--red)" },
  { h: 90, color: "var(--amber)" },
  { h: 100, color: "var(--amber)" },
  { h: 96, color: "var(--amber)" },
  { h: 78, color: "var(--amber)" },
  { h: 60, color: "var(--blue)" },
  { h: 48, color: "var(--blue)" },
  { h: 35, color: "var(--blue)" },
  { h: 27, color: "var(--blue)" },
  { h: 20, color: "var(--green)" },
  { h: 15, color: "var(--green)" },
  { h: 11, color: "var(--green)" },
  { h: 7, color: "var(--green)" },
];

/**
 * Recreated mini operations dashboard used in the hero (and showcase frame).
 * The histogram bars grow once they scroll into view.
 */
export function Preview({ className }: { className?: string } = {}) {
  const { t } = useLang();
  const barsRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setAnimated(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`preview${className ? ` ${className}` : ""}`}>
      <div className="preview-bar">
        <div className="dots">
          <i />
          <i />
          <i />
        </div>
        <span className="addr mono">{t("pv_addr")}</span>
      </div>
      <div className="preview-body">
        <div className="preview-head">
          <div>
            <div className="t">{t("pv_title")}</div>
            <div className="s">{t("pv_sub")}</div>
          </div>
          <div className="mini-pills">
            <span className="mini-pill">KUN</span>
            <span
              className="mini-pill"
              style={{ background: "var(--brand)", color: "var(--brandInk)", borderColor: "var(--brand)" }}
            >
              HAFTA
            </span>
            <span className="mini-pill">OY</span>
          </div>
        </div>

        <div className="mini-kpis">
          <div className="mini-kpi">
            <div className="lab">
              <span className="d" style={{ background: "var(--amber)" }} />
              <span>{t("pv_k1")}</span>
            </div>
            <div className="val">
              62.4<span className="u">/100</span>
            </div>
          </div>
          <div className="mini-kpi">
            <div className="lab">
              <span className="d" style={{ background: "var(--blue)" }} />
              <span>{t("pv_k2")}</span>
            </div>
            <div className="val">
              60<span className="u">%</span>
            </div>
          </div>
          <div className="mini-kpi">
            <div className="lab">
              <span className="d" style={{ background: "var(--green)" }} />
              <span>{t("pv_k3")}</span>
            </div>
            <div className="val">
              8.4<span className="u">%</span>
            </div>
          </div>
        </div>

        <div className="histo">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
            <span
              className="mono"
              style={{ fontSize: 9, fontWeight: 700, color: "var(--ink3)", textTransform: "uppercase", letterSpacing: ".5px" }}
            >
              {t("pv_hist")}
            </span>
          </div>
          <div className="histo-legend">
            <span>
              <i style={{ background: "var(--red)" }} />
              <span>{t("lg_crit")}</span>
            </span>
            <span>
              <i style={{ background: "var(--amber)" }} />
              <span>{t("lg_coach")}</span>
            </span>
            <span>
              <i style={{ background: "var(--blue)" }} />
              <span>{t("lg_good")}</span>
            </span>
            <span>
              <i style={{ background: "var(--green)" }} />
              <span>{t("lg_great")}</span>
            </span>
          </div>
          <div ref={barsRef} className={`bars${animated ? " in" : ""}`}>
            {BARS.map((bar, i) => (
              <div
                key={i}
                className="bar"
                style={{ "--bar-h": `${bar.h}%`, background: bar.color } as CSSProperties}
              />
            ))}
          </div>
          <div className="histo-foot">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
