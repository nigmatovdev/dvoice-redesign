import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

const before: DictKey[] = ["rop_c1_t", "rop_c2_t", "rop_c3_t"];
const after: DictKey[] = ["rop_a1_t", "rop_a2_t", "rop_a3_t"];

export function Ops() {
  return (
    <section className="section" id="ops" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            <span>
              <T k="rop_eyebrow" />
            </span>
          </span>
          <h2 className="h2">
            <T k="rop_h2" />
          </h2>
          <p className="lede">
            <T k="rop_lede" />
          </p>
        </Reveal>
        <Reveal className="compare">
          <div className="compare-col before">
            <div className="compare-label">
              <span className="cl">
                <T k="rop_before" />
              </span>
              <span className="compare-tag">
                <T k="rop_before_tag" />
              </span>
            </div>
            <ul className="compare-list">
              {before.map((k) => (
                <li key={k}>
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </span>
                  <T k={k} />
                </li>
              ))}
            </ul>
          </div>

          <div className="compare-mid">
            <div className="compare-arrow">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </div>
          </div>

          <div className="compare-col after">
            <div className="compare-label">
              <span className="cl">
                <T k="rop_after" />
              </span>
              <span className="compare-tag">
                <T k="rop_after_tag" />
              </span>
            </div>
            <ul className="compare-list">
              {after.map((k) => (
                <li key={k}>
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7" />
                    </svg>
                  </span>
                  <T k={k} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
