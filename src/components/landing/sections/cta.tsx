import { AccessButton } from "../contact-modal";
import { T } from "../lang-provider";
import { Reveal } from "../reveal";

export function Cta() {
  return (
    <section className="section cta" id="cta">
      <div className="wrap">
        <Reveal className="cta-card">
          <span className="eyebrow" style={{ background: "var(--blueSoft)", color: "var(--blue)" }}>
            <span>
              <T k="cta_eyebrow" />
            </span>
          </span>
          <h2 className="h2" style={{ maxWidth: "26ch" }}>
            <T k="cta_h2" />
          </h2>
          <p className="lede" style={{ maxWidth: "48ch" }}>
            <T k="cta_lede" />
          </p>
          <div className="cta-actions">
            <AccessButton k="cta_get_access" className="btn btn-primary btn-lg" />
            <AccessButton k="cta_partner" className="btn btn-ghost btn-lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
