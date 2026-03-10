import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"; // Vercel analytics
import { SpeedInsights } from "@vercel/speed-insights/next"; // Vercel performance insights
import { siteConfig } from "@/config/site"; // Client/site-specific config
import { SEOJsonLD } from "./SEOJsonLD"; // JSON-LD structured data for SEO
import "./globals.css";

// -------------------------
// Metadata for SEO / Social
// -------------------------
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  robots: { index: true, follow: true },
  other: {
    "geo.region": siteConfig.geo,
    google: "notranslate",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.social.twitterhandle, // Twitter handle from config
  },
  alternates: siteConfig.alternates,
};

// -------------------------
// Root layout for the app
// -------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.defaultLocale}>
      <body style={{ "--client-font": siteConfig.font } as React.CSSProperties}>
        <SEOJsonLD />
        {children}
        {/* Vercel analytics and performance insights components */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
