export const siteConfig = {
  // -------------------------
  // Basic site info
  // -------------------------
  name: "Agency Template",
  description: "Professional website for your business",
  url: "https://example.com", // Base URL
  logo: "/logo.png", // Relative path to logo used in JSON-LD
  defaultLocale: "nl",
  locales: ["en", "nl"], // Supported locales

  // -------------------------
  // don't change the font name, it's used in CSS variable for client font
  font: "ClientFont",

  geo: "NL", // Geographical region for SEO
  // -------------------------
  // Navigation
  // -------------------------
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // -------------------------
  // Social links
  // -------------------------
  social: {
    twitter: "https://twitter.com/handle",
    twitterhandle: "@handle",
    instagram: "https://instagram.com/handle",
    linkedin: "https://linkedin.com/company/handle",
  },

  // -------------------------
  // Contact info
  // -------------------------
  contact: {
    email: "hello@example.com",
    phone: "+1 (555) 000-0000",
    address: "123 Main St, City, Country",
  },

  // -------------------------
  // Favicon / manifest
  // -------------------------
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "icon",
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#2563eb" },
    ],
  },
  manifest: "/site.webmanifest",

  // -------------------------
  // SEO alternates (multi-locale)
  // -------------------------
  get alternates() {
    const languages: Record<string, string> = {};
    this.locales.forEach((locale) => {
      languages[locale] = `${this.url}/${locale}`;
    });
    return {
      canonical: this.url,
      languages,
    };
  },
} as const;
