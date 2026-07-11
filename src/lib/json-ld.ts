import type { FaqItem } from "@/lib/i18n/types";

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
    inLanguage: ["nl-BE", "fr-BE", "en", "de"],
    publisher: {
      "@type": "Organization",
      name: "Tolls.be",
      url: "https://tolls.be",
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
