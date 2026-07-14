import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { pageKeys, getLocalizedPath, getArticlePath } from "@/lib/routes";
import { getSiteUrl, buildHreflangLanguages, buildArticleHreflangLanguages } from "@/lib/seo";
import { getAllArticles, getArticleSlug } from "@/lib/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const articles = getAllArticles();

  const pageEntries = pageKeys.flatMap((pageKey) =>
    locales.map((locale) => {
      const path = getLocalizedPath(locale, pageKey);
      const languages = buildHreflangLanguages(pageKey);

      return {
        url: `${siteUrl}${path}`,
        lastModified: new Date("2026-07-14"),
        changeFrequency: pageKey === "home" ? ("weekly" as const) : ("monthly" as const),
        priority: pageKey === "home" ? 1 : pageKey === "news" ? 0.9 : 0.8,
        alternates: {
          languages,
        },
      };
    }),
  );

  const articleEntries = articles.flatMap((article) =>
    locales.map((locale) => {
      const path = getArticlePath(locale, getArticleSlug(article, locale));
      const languages = buildArticleHreflangLanguages(article);

      return {
        url: `${siteUrl}${path}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages,
        },
      };
    }),
  );

  return [...pageEntries, ...articleEntries];
}
