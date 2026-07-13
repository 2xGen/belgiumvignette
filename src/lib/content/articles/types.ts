import type { Locale } from "@/lib/i18n/config";

export interface ArticleSource {
  name: string;
  url: string;
}

export interface ArticleContentSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface ArticleLocaleContent {
  title: string;
  metaDescription: string;
  excerpt: string;
  summarySections: ArticleContentSection[];
  ourTakeSections: ArticleContentSection[];
  imageAlt?: string;
}

export interface Article {
  /** Stable internal id (not used in URLs) */
  id: string;
  /** Localized URL slug per locale */
  slugs: Record<Locale, string>;
  publishedAt: string;
  source: ArticleSource;
  image?: {
    url: string;
    credit?: string;
  };
  content: Record<Locale, ArticleLocaleContent>;
}
