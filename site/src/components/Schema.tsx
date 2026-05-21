/**
 * JSON-LD schema components. Render as <Schema data={...} /> inside the page
 * or layout to emit a <script type="application/ld+json"> tag.
 */

import type { Service } from "@/data/services";

const SITE_URL = "https://xpertdairysystems.vercel.app";
const BRAND = "XPERT Dairy Systems Inc.";
const PHONE = "+15599466131";
const PHONE_DISPLAY = "(559) 946-6131";
const EMAIL = "Xpertdairy@gmail.com";
const STREET = "377 S. Oakmore St.";
const CITY = "Tulare";
const STATE = "CA";
const ZIP = "93274";
const LATITUDE = 36.2077;       // Tulare, CA approximate
const LONGITUDE = -119.3473;
const AREA_SERVED = ["California's Central Valley", "Tulare County, CA", "Kings County, CA", "Fresno County, CA", "Kern County, CA"];

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND,
    alternateName: "XDS",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/xds-mark-512.png`,
      width: 512,
      height: 512,
    },
    description:
      "Tulare based dairy equipment service company. Pump repair, separator maintenance, agitator service, fabrication, installation, and emergency support across California's Central Valley.",
    email: EMAIL,
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET,
      addressLocality: CITY,
      addressRegion: STATE,
      postalCode: ZIP,
      addressCountry: "US",
    },
    foundingLocation: {
      "@type": "Place",
      name: "Tulare, California",
    },
  };
  return <JsonLd data={data} />;
}

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BRAND,
    image: `${SITE_URL}/images/xds-mark-512.png`,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET,
      addressLocality: CITY,
      addressRegion: STATE,
      postalCode: ZIP,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    areaServed: AREA_SERVED.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "customer service",
        areaServed: "US-CA",
        availableLanguage: ["English", "Spanish"],
      },
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "emergency",
        areaServed: "US-CA",
      },
    ],
    sameAs: [],
  };
  return <JsonLd data={data} />;
}

export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
  return <JsonLd data={data} />;
}

export function ServiceSchema({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}/#service`,
    name: service.title,
    serviceType: service.shortTitle,
    description: service.intro,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: AREA_SERVED.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Dairy operators and equipment manufacturers",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.shortTitle} scope`,
      itemListElement: service.whatsIncluded.slice(0, 6).map((item, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      })),
    },
  };
  return <JsonLd data={data} />;
}

export function FaqSchema({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
  return <JsonLd data={data} />;
}
