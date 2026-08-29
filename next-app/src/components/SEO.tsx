import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    section: string;
  };
  noindex?: boolean;
  geoTarget?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;
  twitterCreator?: string;
  rawTitle?: boolean;
}

const BASE_URL = 'https://www.mintsglobal.ae';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-mintsglobal-1200x630.jpg`;

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  article,
  noindex = false,
  geoTarget = false,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterSite,
  twitterCreator,
  rawTitle = false,
}: SEOProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language; // 'en' | 'ar' | 'de'

  const cleanCanonical = canonical && canonical !== '/' 
    ? (canonical.startsWith('/') ? canonical : `/${canonical}`) 
    : '';
  const langQuery = lang && lang !== 'en' ? `?lang=${lang}` : '';
  const canonicalUrl = `${BASE_URL}${cleanCanonical}${langQuery}`;

  const fullTitle = rawTitle
    ? title
    : (title?.includes('Mints Global')
        ? title
        : `${title || 'Mints Global'} | Mints Global`);

  return (
    <Helmet>
      {/* ── Core ── */}
      <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* ── hreflang — tells Google which language version to show ── */}
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}${cleanCanonical}`} />
      <link rel="alternate" hrefLang="ar" href={`${BASE_URL}${cleanCanonical}?lang=ar`} />
      <link rel="alternate" hrefLang="de" href={`${BASE_URL}${cleanCanonical}?lang=de`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${cleanCanonical}`} />

      {/* ── Open Graph ── */}
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Mints Global" />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title || 'Mints Global'} - Mints Global`} />
      <meta property="og:locale" content={lang === 'ar' ? 'ar_AE' : lang === 'de' ? 'de_DE' : 'en_US'} />
      {lang !== 'en' && <meta property="og:locale:alternate" content="en_US" />}
      {lang !== 'ar' && <meta property="og:locale:alternate" content="ar_AE" />}
      {lang !== 'de' && <meta property="og:locale:alternate" content="de_DE" />}

      {/* ── Twitter / X Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterSite || "@mintsglobal"} />
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      <meta name="twitter:title" content={twitterTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      <meta name="twitter:image:alt" content={`${title || 'Mints Global'} - Mints Global`} />

      {/* ── Article-specific ── */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
        </>
      )}

      {/* ── Geo targeting ── */}
      {geoTarget && (
        <>
          <meta name="geo.region" content="AE-DU" />
          <meta name="geo.placename" content="Dubai" />
          <meta name="geo.position" content="25.2048;55.2708" />
          <meta name="ICBM" content="25.2048, 55.2708" />
        </>
      )}
    </Helmet>
  );
}
