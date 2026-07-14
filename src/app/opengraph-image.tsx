import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

// Route segment config — prerendered at build time as a static image.
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default Open Graph image, generated dynamically. Each route can override this
 * by adding its own `opengraph-image.tsx`.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0E",
          color: "#FAFAF7",
          fontFamily: "sans-serif",
        }}
      >
        {/* metrixme ribbon mark (paper → blue, on dark). */}
        <svg width="220" height="220" viewBox="0 0 96 96" style={{ marginBottom: 12 }}>
          <defs>
            <linearGradient id="rb" x1="5" y1="71" x2="91" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FAFAF7" />
              <stop offset="1" stopColor="#93C5FD" />
            </linearGradient>
          </defs>
          <path
            d="M5 71 C16 32 37 24 52 42 C62 55 78 52 91 30 C82 62 60 76 46 58 C36 46 17 52 5 71 Z"
            fill="url(#rb)"
          />
        </svg>
        <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: -2 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 34, opacity: 0.65, marginTop: 20, maxWidth: 900, textAlign: "center" }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
