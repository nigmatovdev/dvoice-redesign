import { T } from "../lang-provider";

const logos = ["Sales.uz", "EduTech", "CallPro", "Maktab+", "VoronkaX"];

export function Trust() {
  return (
    <section className="trust">
      <div className="wrap trust-inner">
        <span className="trust-label">
          <T k="trust_label" />
        </span>
        <div className="trust-logos">
          {logos.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
