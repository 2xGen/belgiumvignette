import type { ContentSection, FaqItem, TableRow } from "../types";

export type VignetteProductPageKey =
  | "dailyVignette"
  | "monthlyVignette"
  | "annualVignette"
  | "electricVignette";

export interface VignetteProductPage {
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  navLabel: string;
  sections: ContentSection[];
  priceTableTitle: string;
  priceTable: TableRow[];
  compareTableTitle?: string;
  compareTable?: TableRow[];
  relatedPagesTitle: string;
  faqs: FaqItem[];
}

export type VignetteProductPages = Record<
  VignetteProductPageKey,
  VignetteProductPage
>;
