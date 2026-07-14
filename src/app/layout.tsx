import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono, Sora } from "next/font/google";

import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Brand display face — matches the metrixme wordmark. Used for the logo and
// large headings via --font-display; body/UI text stays on Manrope.
const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * Root metadata. `metadataBase` lets Next resolve all relative metadata URLs
 * (OG images, canonicals) to absolute ones. `title.template` appends the site
 * name to every child page title automatically.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata(),
  title: {
    default: "metrixme — AI nutq tahlili / Speech analytics",
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

// Runs before first paint to apply the saved theme/language and avoid a flash
// of the wrong theme. Mirrors the inline script in the original landing.html.
const noFlashScript = `
try {
  var t = localStorage.getItem('metrixme-landing-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
  var l = localStorage.getItem('metrixme-landing-lang');
  if (!l) {
    var supported = ['uz', 'en', 'ru'];
    var cands = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
    for (var i = 0; i < cands.length; i++) {
      var code = (cands[i] || '').toLowerCase().slice(0, 2);
      if (supported.indexOf(code) !== -1) { l = code; break; }
    }
    l = l || 'uz';
  }
  document.documentElement.setAttribute('lang', l);
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.lang}
      data-theme="dark"
      className={`${manrope.variable} ${sora.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body suppressHydrationWarning>
        {/* Site-wide structured data, rendered in SSR HTML for crawlers. */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        {children}
      </body>
    </html>
  );
}
