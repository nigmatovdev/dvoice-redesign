/**
 * metrixme ribbon mark. Renders both theme variants inline; CSS (.bm-light /
 * .bm-dark under [data-theme]) shows the right one, so it swaps with the theme
 * toggle without any JS. `idSuffix` keeps the gradient ids unique per instance
 * (nav + footer render this on the same page).
 *
 * Light theme: black → navy ribbon. Dark theme: paper → blue ribbon.
 * Cropped viewBox (0 20 96 60) trims the mark's whitespace for a tight lockup.
 */
const RIBBON =
  "M5 71 C16 32 37 24 52 42 C62 55 78 52 91 30 C82 62 60 76 46 58 C36 46 17 52 5 71 Z";

export function BrandMark({ idSuffix }: { idSuffix: string }) {
  const lid = `bm-l-${idSuffix}`;
  const did = `bm-d-${idSuffix}`;
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg className="bm bm-light" viewBox="0 20 96 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={lid} x1="5" y1="71" x2="91" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0A0A0A" />
            <stop offset="0.45" stopColor="#101C3D" />
            <stop offset="1" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
        <path d={RIBBON} fill={`url(#${lid})`} />
      </svg>
      <svg className="bm bm-dark" viewBox="0 20 96 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={did} x1="5" y1="71" x2="91" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FAFAF7" />
            <stop offset="1" stopColor="#93C5FD" />
          </linearGradient>
        </defs>
        <path d={RIBBON} fill={`url(#${did})`} />
      </svg>
    </span>
  );
}
