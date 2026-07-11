import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { pageKeys, getLocalizedPath } from "@/lib/routes";
import { getSiteUrl, buildHreflangLanguages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return pageKeys.flatMap((pageKey) =>
    locales.map((locale) => {
      const path = getLocalizedPath(locale, pageKey);
      const languages = buildHreflangLanguages(pageKey);

      return {
        url: `${siteUrl}${path}`,
        lastModified: new Date("2026-07-11"),
        changeFrequency: pageKey === "home" ? ("weekly" as const) : ("monthly" as const),
        priority: pageKey === "home" ? 1 : 0.8,
        alternates: {
          languages,
        },
      };
    }),
  );
}
