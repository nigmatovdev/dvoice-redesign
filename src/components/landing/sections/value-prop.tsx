import { Fragment } from "react";

import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

interface Step {
  bg: string;
  fg: string;
  icon: React.ReactNode;
  title: DictKey;
  desc: DictKey;
}

const steps: Step[] = [
  {
    bg: "var(--blueSoft)",
    fg: "var(--blue)",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
    title: "vp_c1_t",
    desc: "vp_c1_d",
  },
  {
    bg: "var(--violetSoft)",
    fg: "var(--violet)",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M17 7h4v4" />
      </>
    ),
    title: "vp_c2_t",
    desc: "vp_c2_d",
  },
  {
    bg: "var(--greenSoft)",
    fg: "var(--green)",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 14l3-3 3 3 5-6" />
      </>
    ),
    title: "vp_c3_t",
    desc: "vp_c3_d",
  },
];

const Arrow = () => (
  <div className="vp-conn" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  </div>
);

export function ValueProp() {
  return (
    <section className="section vp" id="value" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            <span>
              <T k="vp_eyebrow" />
            </span>
          </span>
          <h2 className="h2">
            <T k="vp_h2" />
          </h2>
          <p className="lede">
            <T k="vp_lede" />
          </p>
        </Reveal>
        <Reveal className="vp-card">
          <div className="vp-flow">
            {steps.map((s, i) => (
              <Fragment key={s.title}>
                <div className="vp-step">
                  <div className="vi" style={{ background: s.bg, color: s.fg }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {s.icon}
                    </svg>
                  </div>
                  <div className="vt">
                    <T k={s.title} />
                  </div>
                  <div className="vd">
                    <T k={s.desc} />
                  </div>
                </div>
                {i < steps.length - 1 && <Arrow />}
              </Fragment>
            ))}
          </div>
          <div className="vp-result">
            <span className="rn">
              <T k="vp_result_n" />
            </span>
            <span className="rl">
              <T k="vp_result_l" />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
