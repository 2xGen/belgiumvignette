import type { Locale } from "./config";
import type { PageKey } from "@/lib/routes";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TableRow {
  label: string;
  value: string;
  note?: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface SourceLink {
  title: string;
  url: string;
  description?: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface QuickAnswer {
  title: string;
  summary: string;
  href?: PageKey;
}

export interface ContentSection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface Dictionary {
  locale: Locale;
  site: {
    name: string;
    domain: string;
    tagline: string;
    contactEmail: string;
  };
  nav: Record<PageKey, string>;
  meta: Record<PageKey, PageMeta>;
  common: {
    disclaimer: string;
    lastUpdated: string;
    lastUpdatedDate: string;
    lastUpdatedIso: string;
    readMore: string;
    relatedSite: string;
    relatedSiteLabel: string;
    backToHome: string;
    plannedNotice: string;
    independentSite: string;
    contactLabel: string;
    cookieSettings: string;
    tableCategory: string;
    tablePrice: string;
  };
  notFound: {
    title: string;
    description: string;
    homeLink: string;
    newsLink: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    quickAnswers: QuickAnswer[];
    pricingTitle: string;
    pricingSubtitle: string;
    annualTableTitle: string;
    shortTermTableTitle: string;
    annualPricing: TableRow[];
    shortTermPricing: TableRow[];
    timelineTitle: string;
    timeline: TimelineItem[];
    faqTitle: string;
    faqs: FaqItem[];
    sourcesTitle: string;
  };
  prices: {
    title: string;
    intro: string;
    sections: ContentSection[];
    annualTable: TableRow[];
    shortTermTable: TableRow[];
    euroNormTitle: string;
    euroNormCategoryHeader: string;
    euroNormDescriptionHeader: string;
    euroNormItems: { norm: string; description: string }[];
    faqs: FaqItem[];
  };
  foreign: {
    title: string;
    intro: string;
    sections: ContentSection[];
    countryTips: { country: string; tips: string[] }[];
    faqs: FaqItem[];
  };
  exemptions: {
    title: string;
    intro: string;
    sections: ContentSection[];
    exemptTableTitle: string;
    requiredTableTitle: string;
    exemptTable: TableRow[];
    notExemptTable: TableRow[];
    faqs: FaqItem[];
  };
  fines: {
    title: string;
    intro: string;
    sections: ContentSection[];
    fineTable: TableRow[];
    faqs: FaqItem[];
  };
  buy: {
    title: string;
    intro: string;
    sections: ContentSection[];
    statusBadge: string;
    steps: { title: string; description: string }[];
    faqs: FaqItem[];
  };
  privacy: {
    title: string;
    intro: string;
    sections: ContentSection[];
    lastUpdated: string;
  };
  news: {
    title: string;
    intro: string;
    latestArticles: string;
    summaryTitle: string;
    summaryFromSource: string;
    ourTakeTitle: string;
    sourceTitle: string;
    readArticle: string;
    backToNews: string;
    publishedOn: string;
    sourceLabel: string;
    sourceDisclaimer: string;
    translationDisclaimer: string;
    articleAttributionTitle: string;
    articleAttributionIndependence: string;
    articleAttributionAi: string;
    articleAttributionReadOriginal: string;
    articleAttributionCopyright: string;
    tableOfContents: string;
    relatedArticles: string;
    noArticles: string;
  };
  newsletter: {
    title: string;
    description: string;
    emailPlaceholder: string;
    consentLabel: string;
    submit: string;
    success: string;
    error: string;
    privacyLink: string;
  };
  cookieBanner: {
    title: string;
    description: string;
    essentialTitle: string;
    essentialDescription: string;
    alwaysOn: string;
    analyticsTitle: string;
    analyticsDescription: string;
    acceptAll: string;
    rejectAll: string;
    savePreferences: string;
    manageSettings: string;
    closeSettings: string;
    privacyLink: string;
  };
  sources: SourceLink[];
}
