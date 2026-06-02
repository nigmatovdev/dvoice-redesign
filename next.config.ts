import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Surface React issues during development.
  reactStrictMode: true,
  // Drop the `X-Powered-By: Next.js` header.
  poweredByHeader: false,
  // Emit clean, trailing-slash-free URLs (consistent canonicals for SEO).
  trailingSlash: false,
  // Compress responses.
  compress: true,
  images: {
    // Modern formats for better Core Web Vitals (LCP).
    formats: ["image/avif", "image/webp"],
    // Add remote image hosts here when you use next/image with external URLs:
    // remotePatterns: [{ protocol: "https", hostname: "images.example.com" }],
  },
};

export default nextConfig;
