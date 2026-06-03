/* Demonstrative product screenshots for the MAHSULOT scrolly section.
   Real PNGs live in /public; shown inside a browser-window frame and crossfaded
   as the user scrolls. */

import Image from "next/image";

function Frame({ addr, src, alt }: { addr: string; src: string; alt: string }) {
  return (
    <div className="preview flat shot">
      <div className="preview-bar">
        <div className="dots">
          <i style={{ background: "var(--red)" }} />
          <i style={{ background: "var(--amber)" }} />
          <i style={{ background: "var(--green)" }} />
        </div>
        <span className="addr mono">{addr}</span>
      </div>
      <div className="shot-img">
        <Image src={src} alt={alt} fill sizes="(max-width: 980px) 92vw, 560px" style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}

/** 1 — Sales dynamics (dynamics.png). */
export function SalesDynamicsShot() {
  return <Frame addr="app.sales.uz/dynamics" src="/dynamics.png" alt="Sotuv dinamikasi — to‘rt ko‘rsatkich" />;
}

/** 2 — Deal flow & revenue (sales.png). */
export function DealFlowShot() {
  return <Frame addr="app.sales.uz/pipeline" src="/sales.png" alt="Bitimlar oqimi va tushum" />;
}

/** 3 — Scoring criteria / manager profile by sales steps (flow.png). */
export function CriteriaShot() {
  return <Frame addr="app.sales.uz/profile" src="/flow.png" alt="Sotuv qadamlari bo‘yicha menejer profili" />;
}

/** 4 — Manager × skill heatmap (heatmap.png). */
export function HeatmapShot() {
  return <Frame addr="app.sales.uz/heatmap" src="/heatmap.png" alt="Menejer × ko‘nikma heatmap" />;
}
