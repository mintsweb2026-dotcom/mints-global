export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = ["United Arab Emirates", "Germany", "United Kingdom", "Global"],
  offers,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
  offers?: { name: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "serviceType": serviceType,
    "description": description,
    "url": `https://mintsglobal.ae${url}`,
    "provider": { "@id": "https://mintsglobal.ae/#organization" },
    "areaServed": areaServed,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "AED"
      }
    },
    ...(offers && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "itemListElement": offers.map(o => ({
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": o.name, "description": o.description }
        }))
      }
    })
  };
}

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  };
}

export function buildBreadcrumbSchema(crumbs: { name: string; url: string }[]) {
  if (!crumbs || crumbs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": crumb.name,
      "item": `https://mintsglobal.ae${crumb.url}`
    }))
  };
}
