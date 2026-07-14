"use client";

import { useEffect, useRef, useState } from "react";

import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import {
  CriteriaShot,
  DealFlowShot,
  HeatmapShot,
  SalesDynamicsShot,
} from "./showcase-visuals";

interface Step {
  title: DictKey;
  desc: DictKey;
  visual: React.ReactNode;
}

const steps: Step[] = [
  { title: "sc_i1_t", desc: "sc_i1_d", visual: <SalesDynamicsShot /> },
  { title: "sc_i2_t", desc: "sc_i2_d", visual: <DealFlowShot /> },
  { title: "sc_i3_t", desc: "sc_i3_d", visual: <CriteriaShot /> },
  { title: "sc_i4_t", desc: "sc_i4_d", visual: <HeatmapShot /> },
];

const N = steps.length;
const SEG = 1 / N;

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4 4L19 7" />
  </svg>
);

export function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const advancedRef = useRef(false);
  const [progress, setProgress] = useState(0);
  // Which visual is active (highlighted) and how many items are checked.
  const [active, setActive] = useState(0);
  const [checked, setChecked] = useState<boolean[]>(() => Array(N).fill(false));
  // On phones the stage is a swipe carousel (see CSS); track that for a11y + taps.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Mobile: the section is un-pinned and the stage is a horizontal swipe
    // carousel (see CSS). Skip the scroll-jack; instead highlight the checklist
    // item for whichever dashboard is currently in view.
    const mobile = !!window.matchMedia?.("(max-width: 760px)").matches;
    setIsMobile(mobile);
    if (mobile) {
      setChecked(Array(N).fill(true));
      const stage = stageRef.current;
      if (!stage) {
        setActive(0);
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              const idx = Number((e.target as HTMLElement).dataset.idx);
              if (!Number.isNaN(idx)) setActive(idx);
            }
          }
        },
        { root: stage, threshold: 0.6 },
      );
      stage.querySelectorAll(".scrolly-visual").forEach((el) => io.observe(el));
      return () => io.disconnect();
    }

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      // 0 before the section pins, 1 once fully scrolled through.
      const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      setProgress(p);

      const activeIdx = Math.min(Math.floor(p / SEG), N - 1);
      setActive(activeIdx);

      // Item i checks a little after entering its band (so all start unchecked).
      const next = steps.map((_, i) => p >= i * SEG + SEG * 0.45);
      setChecked((prev) => (prev.some((v, i) => v !== next[i]) ? next : prev));

      // Once everything is done, glide to the next section — once per pass.
      if (!reduce && p >= 0.985 && !advancedRef.current) {
        advancedRef.current = true;
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (p < 0.9) advancedRef.current = false; // re-arm when scrolled back up
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Tap a checklist item → swipe the carousel to that dashboard (mobile only).
  const goToSlide = (i: number) => {
    if (!isMobile) return;
    const el = stageRef.current?.querySelectorAll<HTMLElement>(".scrolly-visual")[i];
    el?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section className="section showcase scrolly" id="showcase" ref={sectionRef}>
      <div className="scrolly-sticky">
        <div className="wrap scrolly-grid">
          {/* Copy + checklist */}
          <div className="scrolly-copy">
            <span className="eyebrow">
              <span className="dot" />
              <span>
                <T k="sc_eyebrow" />
              </span>
            </span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              <T k="sc_h2" />
            </h2>
            <p className="lede" style={{ marginTop: 12 }}>
              <T k="sc_lede" />
            </p>

            <ul className="scrolly-list">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className={`scrolly-item${i === active ? " active" : ""}${checked[i] ? " done" : ""}`}
                  onClick={() => goToSlide(i)}
                  style={isMobile ? { cursor: "pointer" } : undefined}
                  {...(isMobile
                    ? {
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: (e: React.KeyboardEvent) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            goToSlide(i);
                          }
                        },
                      }
                    : {})}
                >
                  <span className="scrolly-check">{CheckIcon}</span>
                  <span className="scrolly-text">
                    <span className="ti">
                      <T k={s.title} />
                    </span>
                    <span className="de">
                      <T k={s.desc} />
                    </span>
                  </span>
                  <span className="scrolly-idx mono">{String(i + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>

            <div className="scrolly-progress" aria-hidden="true">
              <span style={{ transform: `scaleX(${progress})` }} />
            </div>
          </div>

          {/* Visual stage — crossfading screenshots (desktop) / swipe carousel (mobile) */}
          <div className="scrolly-stage" ref={stageRef}>
            {steps.map((s, i) => (
              <div
                key={i}
                data-idx={i}
                className={`scrolly-visual${i === active ? " active" : ""}`}
                aria-hidden={!isMobile && i !== active}
              >
                {s.visual}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
