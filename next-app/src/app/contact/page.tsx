import { ContactClient } from "./ContactClient";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Mints Global | Digital Marketing Agency Dubai",
  description: "Get in touch with Mints Global, Dubai’s results-driven digital agency. Discuss SEO, performance marketing, branding & creative projects today.",
  alternates: {
    canonical: "https://www.mintsglobal.ae/contact/",
  },
  openGraph: {
    title: "Contact Mints Global | Digital Marketing Agency Dubai",
    description: "Get in touch with Mints Global, Dubai’s results-driven digital agency. Discuss SEO, performance marketing, branding & creative projects today.",
    images: [{ url: "https://www.mintsglobal.ae/images/og/contact-mints-global.jpg" }],
    url: "https://www.mintsglobal.ae/contact/",
  },
  twitter: {
    title: "Contact Mints Global | Digital Marketing Agency Dubai",
    description: "Get in touch with Mints Global, Dubai’s results-driven digital agency. Discuss SEO, performance marketing, branding & creative projects today.",
    images: ["https://www.mintsglobal.ae/images/og/contact-mints-global.jpg"],
  }
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.mintsglobal.ae/#localbusiness",
      "name": "Mints Global Dubai",
      "url": "https://www.mintsglobal.ae",
      "logo": "https://www.mintsglobal.ae/logo-07.webp",
      "image": "https://www.mintsglobal.ae/images/hero-digital-agency-dubai.webp",
      "description": "Dubai's leading digital marketing agency, enterprise software development firm, and cybersecurity consultancy.",
      "telephone": "+971502943916",
      "email": "info@mintsglobal.ae",
      "priceRange": "$$",
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971502943916",
          "contactType": "customer service",
          "areaServed": "AE",
          "availableLanguage": ["en", "ar"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+447899727950",
          "contactType": "customer service",
          "areaServed": "GB",
          "availableLanguage": ["en"]
        }
      ],
      "sameAs": [
        "https://www.instagram.com/mints.global/",
        "https://www.linkedin.com/company/mints-dubai",
        "https://www.facebook.com/mintsglobal"
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.mintsglobal.ae/contact#webpage",
      "url": "https://www.mintsglobal.ae/contact",
      "name": "Contact Mints Global | Digital Marketing Agency Dubai",
      "isPartOf": {
        "@id": "https://www.mintsglobal.ae/#website"
      },
      "about": {
        "@id": "https://www.mintsglobal.ae/#localbusiness"
      },
      "description": "Get in touch with Mints Global, Dubai’s results-driven digital agency. Discuss SEO, performance marketing, software engineering, and cybersecurity."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.mintsglobal.ae/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://www.mintsglobal.ae/contact"
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="contact-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} strategy="beforeInteractive" />
      <ContactClient />
    </>
  );
}
