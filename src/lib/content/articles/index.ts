/**
 * To add a new article:
 * 1. Create a file in this folder
 * 2. Export an Article with id, slugs (per locale), publishedAt, source, and content
 * 3. Import and add it to the articles array below
 */
import type { Locale } from "@/lib/i18n/config";
import type { Article, ArticleLocaleContent } from "./types";
import vignetteCarsOnly from "./vignette-cars-only-motorcycles-trucks-exempt-july-2026";
import belgiumVignetteRtl from "./belgium-annual-motorway-vignette-from-2027-rtl";
import belgiumRoadVignette2027 from "./belgium-road-vignette-2027-belgians-pay-too";
import belgiumPaidVignetteLuxembourgTimes from "./belgium-paid-vignette-motorways-luxembourg-times";
import benWeytsAnswersWegenvignetQuestions from "./ben-weyts-answers-wegenvignet-questions-hln";

export type { Article, ArticleLocaleContent, ArticleSource } from "./types";

const articles: Article[] = [
  benWeytsAnswersWegenvignetQuestions,
  belgiumRoadVignette2027,
  belgiumVignetteRtl,
  belgiumPaidVignetteLuxembourgTimes,
  vignetteCarsOnly,
];

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getLatestArticles(count: number): Article[] {
  return getAllArticles().slice(0, count);
}

export function getRelatedArticles(article: Article, limit = 4): Article[] {
  return getAllArticles()
    .filter((item) => item.id !== article.id)
    .slice(0, limit);
}

export function getArticleSlug(article: Article, locale: Locale): string {
  return article.slugs[locale];
}

export function getArticleBySlug(locale: Locale, slug: string): Article | undefined {
  return articles.find((article) => article.slugs[locale] === slug);
}

export function getArticleContent(
  article: Article,
  locale: Locale,
): ArticleLocaleContent {
  return article.content[locale];
}
