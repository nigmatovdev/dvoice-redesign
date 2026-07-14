import { T } from "../lang-provider";

const logos = ["metrixme.com", "EduTech", "CallPro", "Maktab+", "VoronkaX"];

export function Trust() {
  return (
    <section className="trust">
      <div className="wrap trust-inner">
        <span className="trust-label">
          <T k="trust_label" />
        </span>
        <div className="trust-marquee" aria-label="Partners">
          {/* Duplicated set so the track can loop seamlessly. */}
          <div className="trust-track">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} aria-hidden={i >= logos.length || undefined}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
