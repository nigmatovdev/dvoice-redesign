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
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 36, opacity: 0.7, marginTop: 24 }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
