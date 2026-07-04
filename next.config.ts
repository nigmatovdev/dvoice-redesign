import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server bundle for containerized deploys (Cloud Run).
  output: "standalone",
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
    // Placeholder team avatars. Swap for local /public/team/*.jpg when you have
    // real photos (local images need no remotePatterns entry).
    remotePatterns: [{ protocol: "https", hostname: "i.pravatar.cc" }],
  },
};

export default nextConfig;
