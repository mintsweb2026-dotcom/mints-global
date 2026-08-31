import { AboutClient } from "./AboutClient";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Mints Global | Digital Agency in Dubai, UAE",
  description: "Mints Global is a Dubai-based digital agency offering cybersecurity, performance marketing, and enterprise software solutions. Explore our story and team.",
  alternates: {
    canonical: "https://www.mintsglobal.ae/about/",
  },
  openGraph: {
    title: "About Mints Global | Digital Agency in Dubai, UAE",
    description: "Mints Global is a Dubai-based digital agency delivering cyber security, performance marketing, and enterprise software development.",
    images: [{ url: "https://www.mintsglobal.ae/images/og/about-mints-global.jpg" }],
    url: "https://www.mintsglobal.ae/about/",
  },
  twitter: {
    title: "About Mints Global | Digital Agency in Dubai, UAE",
    description: "Dubai-based digital agency delivering cyber security, performance marketing, and enterprise software development.",
    images: ["https://www.mintsglobal.ae/images/og/about-mints-global.jpg"],
  }
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.mintsglobal.ae/#organization",
      "name": "Mints Global",
      "url": "https://www.mintsglobal.ae/",
      "logo": "https://www.mintsglobal.ae/images/logo.png",
      "description": "Mints Global is a Dubai-based digital agency delivering cyber security, ROI-driven digital marketing, and enterprise software development for businesses across the UAE and Europe.",
      "foundingLocation": {
        "@type": "Place",
        "address": "Dubai, United Arab Emirates"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "sameAs": [
        "https://www.linkedin.com/company/mintsglobal",
        "https://www.instagram.com/mintsglobal",
        "https://www.facebook.com/mintsglobal"
      ],
      "knowsAbout": [
        "Cyber Security",
        "Digital Marketing",
        "Performance Marketing",
        "Search Engine Optimization",
        "Enterprise Software Development",
        "Branding and Graphic Design"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.mintsglobal.ae/about#webpage",
      "url": "https://www.mintsglobal.ae/about",
      "name": "About Mints Global | Digital Agency in Dubai",
      "isPartOf": { "@id": "https://www.mintsglobal.ae/#website" },
      "about": { "@id": "https://www.mintsglobal.ae/#organization" },
      "description": "Learn about Mints Global, a Dubai-based digital agency bridging Middle Eastern and European markets through cyber security, digital marketing, and software development.",
      "inLanguage": "en-AE",
      "breadcrumb": { "@id": "https://www.mintsglobal.ae/about#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.mintsglobal.ae/about#breadcrumb",
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
          "name": "About Us",
          "item": "https://www.mintsglobal.ae/about"
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="about-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} strategy="beforeInteractive" />
      <AboutClient />
    </>
  );
}
