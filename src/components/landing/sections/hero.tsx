import { AccessButton } from "../contact-modal";
import { T } from "../lang-provider";
import { Preview } from "../preview";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" />
            <span>
              <T k="hero_eyebrow" />
            </span>
          </span>
          <h1 className="h-display">
            <T k="hero_title" />
          </h1>
          <p className="lede">
            <T k="hero_sub" />
          </p>
          <div className="hero-cta">
            <AccessButton k="cta_get_access" className="btn btn-primary btn-lg" />
          </div>
          <div className="hero-note">
            <span>
              <T k="hero_note1" />
            </span>
            <span className="sep">·</span>
            <span>
              <T k="hero_note2" />
            </span>
            <span className="sep">·</span>
            <span>
              <T k="hero_note3" />
            </span>
          </div>
          <div className="hero-ticks">
            <div className="tick">
              <div className="n mono">1 742</div>
              <div className="l">
                <T k="tick1_l" />
              </div>
            </div>
            <div className="tick">
              <div className="n mono">62.4</div>
              <div className="l">
                <T k="tick2_l" />
              </div>
            </div>
            <div className="tick">
              <div className="n mono" style={{ color: "var(--green)" }}>
                +18%
              </div>
              <div className="l">
                <T k="tick3_l" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <Preview />
        </div>
      </div>
    </section>
  );
}
