import { T } from "../lang-provider";
import { Reveal } from "../reveal";
import { SignupForm } from "../signup-form";

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
          <h2 className="h2" style={{ maxWidth: "20ch" }}>
            <T k="cta_h2" />
          </h2>
          <p className="lede" style={{ maxWidth: "48ch" }}>
            <T k="cta_lede" />
          </p>
          <SignupForm />
        </Reveal>
      </div>
    </section>
  );
}
