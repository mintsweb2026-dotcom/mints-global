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
      "@type": "Organization",
      "@id": "https://www.mintsglobal.ae/#organization",
      "name": "Mints Global",
      "url": "https://www.mintsglobal.ae",
      "logo": "https://www.mintsglobal.ae/images/logo.png",
      "description": "Results-first digital marketing agency in Dubai offering SEO, performance marketing, social media marketing, brand strategy, video production, and photography & graphics.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": " Office #315, 3rd Floor, Bank Street Building ",
        "addressLocality": " Bur Dubai ",
        "addressCountry": "AE"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "[+971502943916]",
          "contactType": "customer service",
          "areaServed": "AE",
          "availableLanguage": ["en", "ar"]
        }
      ],
      "email": "[info@mintsglobal.ae]",
      "sameAs": [
        "https://www.instagram.com/mintsglobal",
        "https://www.linkedin.com/company/mintsglobal",
        "https://www.facebook.com/mintsglobal"
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.mintsglobal.ae/contact#webpage",
      "url": "https://www.mintsglobal.ae/contact",
      "name": "Contact Mints Global",
      "isPartOf": {
        "@id": "https://www.mintsglobal.ae/#website"
      },
      "about": {
        "@id": "https://www.mintsglobal.ae/#organization"
      },
      "description": "Get in touch with Mints Global, Dubai’s results-driven digital agency."
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
