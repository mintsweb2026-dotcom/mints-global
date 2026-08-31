import { DigitalMarketingClient } from "./DigitalMarketingClient";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Dubai, UAE | Mints Global",
  description: "Grow your brand with Mints Global Dubai. ROI-driven SEO, PPC, social media, content marketing & email campaigns for UAE and global brands.",
  alternates: {
    canonical: "https://www.mintsglobal.ae/digital-marketing/",
  },
  openGraph: {
    title: "Digital Marketing Services in Dubai, UAE | Mints Global",
    description: "ROI-driven digital marketing in Dubai — SEO, PPC, social media & content marketing. Mints Global delivers measurable results for UAE and global brands.",
    images: [{ url: "https://www.mintsglobal.ae/images/digital-marketing-og.jpg" }],
    url: "https://www.mintsglobal.ae/digital-marketing/",
    type: "website",
  },
  twitter: {
    title: "Digital Marketing Services in Dubai | Mints Global",
    description: "Mints Global delivers ROI-driven digital marketing for UAE and global brands — SEO, PPC, social media, content & email marketing.",
    images: ["https://www.mintsglobal.ae/images/digital-marketing-og.jpg"],
  }
};

const digitalMarketingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.mintsglobal.ae/digital-marketing#webpage",
      "url": "https://www.mintsglobal.ae/digital-marketing",
      "name": "Digital Marketing Services in Dubai, UAE | Mints Global",
      "description": "ROI-driven digital marketing services in Dubai — SEO, PPC, social media, content marketing and email campaigns for UAE and global brands.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://www.mintsglobal.ae/#website"
      },
      "breadcrumb": {
        "@id": "https://www.mintsglobal.ae/digital-marketing#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://www.mintsglobal.ae/digital-marketing#primaryimage"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-06-01"
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.mintsglobal.ae/digital-marketing#primaryimage",
      "url": "https://www.mintsglobal.ae/images/digital-marketing-og.jpg",
      "width": 1200,
      "height": 630,
      "caption": "Digital marketing services Dubai — Mints Global"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.mintsglobal.ae/digital-marketing#breadcrumb",
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
          "name": "Digital Marketing",
          "item": "https://www.mintsglobal.ae/digital-marketing"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mintsglobal.ae/#website",
      "url": "https://www.mintsglobal.ae/",
      "name": "Mints Global",
      "description": "Premium digital agency in Dubai bridging Middle Eastern and European markets.",
      "publisher": {
        "@id": "https://www.mintsglobal.ae/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.mintsglobal.ae/#organization",
      "name": "Mints Global",
      "url": "https://www.mintsglobal.ae/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mintsglobal.ae/images/mints-global-logo.png",
        "width": 300,
        "height": 60
      },
      "description": "Premium digital agency in Dubai offering digital marketing, SEO, PPC, social media, content marketing, software development, branding and cybersecurity.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
        "addressLocality": "Bur Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
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
      "sameAs": [
        "https://twitter.com/mintsglobal"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.mintsglobal.ae/digital-marketing#service",
      "name": "Digital Marketing Services",
      "description": "Comprehensive digital marketing services in Dubai including SEO, PPC advertising, social media marketing, content marketing and email marketing campaigns.",
      "provider": {
        "@id": "https://www.mintsglobal.ae/#organization"
      },
      "serviceType": "Digital Marketing",
      "areaServed": [
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Engine Optimisation (SEO)",
              "description": "Technical SEO, on-page SEO, link building and local SEO for UAE businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pay-Per-Click Advertising (PPC)",
              "description": "Google Ads, Meta Ads and paid media management for maximum ROI."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing",
              "description": "Brand-building and community management across Instagram, LinkedIn and Facebook."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Marketing",
              "description": "Blog posts, video scripts and brand storytelling that drive organic growth."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Email Marketing",
              "description": "Targeted email sequences and drip campaigns for lead nurturing and retention."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.mintsglobal.ae/digital-marketing#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What digital marketing services does Mints Global offer in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mints Global offers a full suite of digital marketing services in Dubai including SEO, PPC advertising (Google Ads & Meta Ads), social media marketing, content marketing, and email marketing — all tailored to UAE and global brands."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Mints Global located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mints Global is located at Office #315, 3rd Floor, Bank Street Building, Bur Dubai, UAE. We also serve UK-based clients via our London contact."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Mints Global for digital marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach Mints Global by phone at +971 50 294 3916 (UAE) or +44 7899 727950 (UK), or by email at info@mintsglobal.ae."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="digital-marketing-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalMarketingSchema) }} strategy="beforeInteractive" />
      <DigitalMarketingClient />
    </>
  );
}
