import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Preview } from "../preview";
import { Reveal } from "../reveal";

const checks: DictKey[] = ["sc_l1", "sc_l2", "sc_l3", "sc_l4"];

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4 4L19 7" />
  </svg>
);

export function Showcase() {
  return (
    <section className="section showcase" id="showcase">
      <div className="wrap showcase-grid">
        <Reveal>
          <span className="eyebrow">
            <span className="dot" style={{ background: "var(--green)" }} />
            <span>
              <T k="sc_eyebrow" />
            </span>
          </span>
          <h2 className="h2" style={{ marginTop: 14 }}>
            <T k="sc_h2" />
          </h2>
          <p className="lede" style={{ marginTop: 14 }}>
            <T k="sc_lede" />
          </p>
          <ul className="showcase-list">
            {checks.map((k) => (
              <li key={k}>
                <span className="ck">{CheckIcon}</span>
                <span>
                  <T k={k} />
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          {/* Recreated dashboard in place of a static screenshot. */}
          <Preview className="flat" />
        </Reveal>
      </div>
    </section>
  );
}
