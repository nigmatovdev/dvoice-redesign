/**
 * Route-level loading fallback. Shown during navigation / Suspense while a route
 * segment streams in. The metrixme ribbon fills left→right then drains — one
 * continuous wipe (loader 18). Pure SMIL + CSS, so it animates before any JS
 * hydrates. Both theme variants render; CSS shows the one matching [data-theme].
 */
const RIBBON =
  "M5 71 C16 32 37 24 52 42 C62 55 78 52 91 30 C82 62 60 76 46 58 C36 46 17 52 5 71 Z";

export default function Loading() {
  return (
    <div className="route-loader" role="status" aria-live="polite" aria-label="Loading">
      {/* Light theme: black → navy ribbon */}
      <svg className="rl rl-light" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rl-gl" x1="5" y1="71" x2="91" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0A0A0A" />
            <stop offset="0.45" stopColor="#101C3D" />
            <stop offset="1" stopColor="#1E3A8A" />
          </linearGradient>
          <clipPath id="rl-wl">
            <rect y="0" height="96">
              <animate attributeName="x" values="0;0;96" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" />
              <animate attributeName="width" values="0;96;0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" />
            </rect>
          </clipPath>
        </defs>
        <path d={RIBBON} fill="url(#rl-gl)" opacity="0.14" />
        <path d={RIBBON} fill="url(#rl-gl)" clipPath="url(#rl-wl)" />
      </svg>
      {/* Dark theme: paper → blue ribbon */}
      <svg className="rl rl-dark" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rl-gd" x1="5" y1="71" x2="91" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FAFAF7" />
            <stop offset="1" stopColor="#93C5FD" />
          </linearGradient>
          <clipPath id="rl-wd">
            <rect y="0" height="96">
              <animate attributeName="x" values="0;0;96" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" />
              <animate attributeName="width" values="0;96;0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" />
            </rect>
          </clipPath>
        </defs>
        <path d={RIBBON} fill="url(#rl-gd)" opacity="0.14" />
        <path d={RIBBON} fill="url(#rl-gd)" clipPath="url(#rl-wd)" />
      </svg>
    </div>
  );
}
