import type { Locale } from "./config";
import type { PageKey } from "@/lib/routes";
import type {
  VignetteProductPage,
  VignetteProductPageKey,
} from "./vignette-products/types";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TableRow {
  label: string;
  value: string;
  note?: string;
}

export interface RateMatrixRow {
  label: string;
  day: string;
  tenDays: string;
  month: string;
  twoMonths: string;
  year: string;
}

export interface RateMatrix {
  title?: string;
  vehicleHeader: string;
  dayHeader: string;
  tenDaysHeader: string;
  monthHeader: string;
  twoMonthsHeader: string;
  yearHeader: string;
  rows: RateMatrixRow[];
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

export interface NewsletterIntentCopy {
  title: string;
  description: string;
  benefitsIntro?: string;
  benefits: string[];
  submit: string;
}

export type NewsletterIntentKey =
  | "home"
  | "prices"
  | "buy"
  | "foreign"
  | "news"
  | "default";

export interface PageMeta {
  title: string;
  description: string;
}

export interface QuickAnswer {
  title: string;
  summary: string;
  href?: PageKey;
  linkLabel?: string;
}

export interface HomeIntentSection {
  id: string;
  title: string;
  paragraphs: string[];
  link?: {
    href: PageKey;
    label: string;
  };
}

export interface ContentSection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface TollsSummaryItem {
  label: string;
  value: string;
}

/** Paragraphs may include [[pageKey|label]] markers for internal links. */
export type TollsBlock =
  | {
      type: "section";
      id: string;
      title: string;
      paragraphs: string[];
      list?: string[];
    }
  | {
      type: "summary";
      title: string;
      items: TollsSummaryItem[];
    }
  | {
      type: "pricing";
      id: string;
      title: string;
      paragraphs: string[];
      durationHeader: string;
      priceHeader: string;
      tables: { title: string; rows: TableRow[] }[];
      /** Full sentence with [[pageKey|label]] markers. */
      linkParagraph: string;
      notice: string;
    };

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
    lastChecked: string;
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
    decisionTree: {
      title: string;
      options: { label: string; href: PageKey; anchor?: string }[];
    };
    quickAnswers: QuickAnswer[];
    overview: {
      title: string;
      paragraphs: string[];
    };
    intentSections: HomeIntentSection[];
    pricingTitle: string;
    pricingParagraphs: string[];
    pricingLinkLabel: string;
    pricingLinkSecondaryLabel: string;
    pricingMatrixTitle: string;
    rateMatrix: RateMatrix;
    pricingNote: string;
    timelineTitle: string;
    timeline: TimelineItem[];
    faqTitle: string;
    faqs: FaqItem[];
    sourcesTitle: string;
  };
  prices: {
    title: string;
    intro: string;
    leadParagraphs: string[];
    matrixTitle: string;
    rateMatrix: RateMatrix;
    matrixNote: string;
    /** Paragraph with [[pageKey|label]] markers. */
    buyLinkParagraph: string;
    categorySections: {
      id: string;
      title: string;
      paragraphs: string[];
      list?: string[];
      tableTitle?: string;
      table?: TableRow[];
      /** Paragraph with [[pageKey|label]] markers. */
      linkParagraph?: string;
    }[];
    durationSection: ContentSection;
    whenSection: ContentSection;
    backgroundSections: ContentSection[];
    euroNormTitle: string;
    euroNormCategoryHeader: string;
    euroNormDescriptionHeader: string;
    euroNormItems: { norm: string; description: string }[];
    vignettePagesTitle: string;
    faqs: FaqItem[];
  };
  dailyVignette: VignetteProductPage;
  monthlyVignette: VignetteProductPage;
  annualVignette: VignetteProductPage;
  electricVignette: VignetteProductPage;
  foreign: {
    title: string;
    intro: string;
    sections: ContentSection[];
    countryTips: { id: string; country: string; tips: string[] }[];
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
    independenceNotice: string;
    sections: ContentSection[];
    statusBadge: string;
    steps: { title: string; description: string }[];
    faqs: FaqItem[];
    officialSourceLabel: string;
  };
  tolls: {
    title: string;
    intro: string;
    blocks: TollsBlock[];
    faqTitle: string;
    faqs: FaqItem[];
    closing: {
      title: string;
      paragraphs: string[];
      checklist: string[];
      links: { href: PageKey; label: string }[];
    };
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
    emailPlaceholder: string;
    consentLabel: string;
    success: string;
    error: string;
    privacyLink: string;
    /** Shown under every signup form. */
    independenceNote: string;
    sticky: {
      teaser: string;
      cta: string;
      closeLabel: string;
    };
    intents: {
      home: NewsletterIntentCopy;
      prices: NewsletterIntentCopy;
      buy: NewsletterIntentCopy;
      foreign: NewsletterIntentCopy;
      news: NewsletterIntentCopy;
      default: NewsletterIntentCopy;
    };
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

export type BaseDictionary = Omit<
  Dictionary,
  VignetteProductPageKey | "nav" | "meta"
> & {
  nav: Omit<Record<PageKey, string>, VignetteProductPageKey>;
  meta: Omit<Record<PageKey, PageMeta>, VignetteProductPageKey>;
};
