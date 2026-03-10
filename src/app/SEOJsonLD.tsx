// src/app/SEOJsonLD.tsx
import { siteConfig } from "@/config/site";

/**
 * JSON-LD Structured Data
 *
 * Fully dynamic for any client.
 */
export function SEOJsonLD() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`, // fully dynamic
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        contactType: "customer service",
      },
    ],
    sameAs: Object.values(siteConfig.social), // dynamically get all social links
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd, null, 2),
      }}
    />
  );
}
