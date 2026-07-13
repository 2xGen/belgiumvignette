import type { FaqItem } from "@/lib/i18n/types";
import { locales } from "@/lib/i18n/config";
import { hreflangCodes } from "@/lib/seo";

export function buildFaqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildWebsiteJsonLd({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    inLanguage: locales.map((locale) => hreflangCodes[locale]),
    publisher: {
      "@type": "Organization",
      name: "Tolls.be",
      url: "https://tolls.be",
    },
  };
}

export function buildNewsArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  inLanguage,
  sourceName,
  sourceUrl,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  inLanguage: string;
  sourceName: string;
  sourceUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    inLanguage,
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: "BelgiumVignette.be",
      url: "https://belgiumvignette.be",
    },
    publisher: {
      "@type": "Organization",
      name: "BelgiumVignette.be",
      url: "https://belgiumvignette.be",
    },
    citation: {
      "@type": "CreativeWork",
      name: sourceName,
      url: sourceUrl,
    },
  };
}

export function buildWebPageJsonLd({
  name,
  description,
  url,
  dateModified,
  inLanguage,
  siteUrl,
}: {
  name: string;
  description: string;
  url: string;
  dateModified: string;
  inLanguage: string;
  siteUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    dateModified,
    inLanguage,
    isPartOf: {
      "@type": "WebSite",
      name: "Belgium Vignette",
      url: siteUrl,
    },
  };
}
