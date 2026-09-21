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

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mints Global",
  "alternateName": "Mints Global Digital Agency",
  "url": "https://www.mintsglobal.ae/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.mintsglobal.ae/images/mints-global-logo.png",
    "width": 180,
    "height": 50
  },
  "description": "Mints Global is Dubai's best digital marketing agency offering ROI-driven marketing, enterprise software development, and military-grade cybersecurity solutions for global brands.",
  "foundingLocation": {
    "@type": "Place",
    "name": "Dubai, United Arab Emirates"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "Country",
      "name": "European Union"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "AE",
    "availableLanguage": ["English", "Arabic"]
  },
  "sameAs": [
    "https://twitter.com/mintsglobal",
    "https://www.linkedin.com/company/mintsglobal",
    "https://www.facebook.com/mintsglobal",
    "https://www.instagram.com/mintsglobal"
  ]
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Mints Global — Best Digital Marketing Agency Dubai",
  "@id": "https://www.mintsglobal.ae/#professionalservice",
  "url": "https://www.mintsglobal.ae/",
  "image": "https://www.mintsglobal.ae/images/og-mintsglobal-1200x630.jpg",
  "description": "Dubai-based premium digital agency bridging Middle Eastern and European markets with ROI-driven marketing, enterprise software, and cybersecurity.",
  "serviceType": [
    "Digital Marketing",
    "Search Engine Optimisation",
    "Social Media Marketing",
    "Pay-Per-Click Advertising",
    "Enterprise Software Development",
    "Mobile App Development",
    "Cybersecurity Consulting",
    "Content Marketing"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Agency Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing Services Dubai",
          "url": "https://www.mintsglobal.ae/digital-marketing/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services Dubai",
          "url": "https://www.mintsglobal.ae/seo-services/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise Software Development Dubai",
          "url": "https://www.mintsglobal.ae/software-development/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cybersecurity Solutions Dubai",
          "url": "https://www.mintsglobal.ae/cybersecurity/"
        }
      }
    ]
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mints Global",
  "image": "https://www.mintsglobal.ae/images/og-mintsglobal-1200x630.jpg",
  "@id": "https://www.mintsglobal.ae/#localbusiness",
  "url": "https://www.mintsglobal.ae/",
  "description": "Best digital marketing agency in Dubai offering SEO, paid ads, social media marketing, software development, and cybersecurity services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
    "addressLocality": "Bur Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2631,
    "longitude": 55.3006
  },
  "telephone": "+971502943916",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+971502943916",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+447899727950",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    }
  ],
  "email": "info@mintsglobal.ae",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "AED, USD, EUR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer"
};

