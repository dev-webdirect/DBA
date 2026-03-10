// Next.js configuration file
// This file sets up security headers, image formats, typed routes, and other global settings for the app.
// Content Security Policy (CSP)
// Restricts sources for scripts, styles, images, fonts, etc. to improve security.
// Array of HTTP security headers applied to all routes
// Main Next.js configuration object
// Enables React Strict Mode for highlighting potential problems
// Removes the "X-Powered-By: Next.js" header for security
// Enables gzip compression for responses
// Enables type-safe routing (App Router only)
// Image optimization settings
// Supported image formats for optimization
// Function to apply custom headers to all routes
// Applies security headers to every route
// Export the configuration for Next.js to use
import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://*.vercel-insights.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https:;
  font-src 'self' data:;
  connect-src 'self' https:;
  frame-ancestors 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // 👇 Move typedRoutes out of `experimental`
  typedRoutes: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
