import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import type { PageKey } from "@/lib/routes";
import { getAlternatePaths, getArticleAlternatePaths } from "@/lib/routes";
import type { Article } from "@/lib/content/articles/types";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://belgiumvignette.be";

/** BCP 47 hreflang codes */
export const hreflangCodes: Record<Locale, string> = {
  nl: "nl-BE",
  fr: "fr-BE",
  en: "en",
  de: "de",
  es: "es",
  pl: "pl",
  cs: "cs",
  it: "it",
  sv: "sv",
  da: "da",
  ro: "ro",
};

/** Open Graph locale format (underscore) */
export const openGraphLocales: Record<Locale, string> = {
  nl: "nl_BE",
  fr: "fr_BE",
  en: "en_GB",
  de: "de_DE",
  es: "es_ES",
  pl: "pl_PL",
  cs: "cs_CZ",
  it: "it_IT",
  sv: "sv_SE",
  da: "da_DK",
  ro: "ro_RO",
};

export function getSiteUrl(): string {
  return SITE_URL.replace(/\/$/, "");
}

export function buildCanonical(path: string): string {
  return `${getSiteUrl()}${path}`;
}

export function buildHreflangLanguages(pageKey: PageKey): Record<string, string> {
  const paths = getAlternatePaths(pageKey);
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[hreflangCodes[locale]] = buildCanonical(paths[locale]);
  }

  languages["x-default"] = buildCanonical(paths.nl);

  return languages;
}

export function buildAlternates(pageKey: PageKey) {
  return { languages: buildHreflangLanguages(pageKey) };
}

export function buildArticleHreflangLanguages(article: Article): Record<string, string> {
  const paths = getArticleAlternatePaths(article);
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[hreflangCodes[locale]] = buildCanonical(paths[locale]);
  }

  languages["x-default"] = buildCanonical(paths.nl);

  return languages;
}

export function buildArticleMetadata({
  locale,
  article,
  title,
  description,
  path,
  publishedAt,
  imageUrl,
}: {
  locale: Locale;
  article: Article;
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  imageUrl?: string;
}): import("next").Metadata {
  const canonical = buildCanonical(path);
  const languages = buildArticleHreflangLanguages(article);
  const ogLocale = openGraphLocales[locale];
  const alternateLocales = locales
    .filter((l) => l !== locale)
    .map((l) => openGraphLocales[l]);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Belgium Vignette",
      locale: ogLocale,
      alternateLocale: alternateLocales,
      type: "article",
      publishedTime: publishedAt,
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildPageMetadata({
  locale,
  pageKey,
  title,
  description,
  path,
}: {
  locale: Locale;
  pageKey: PageKey;
  title: string;
  description: string;
  path: string;
}): import("next").Metadata {
  const canonical = buildCanonical(path);
  const languages = buildHreflangLanguages(pageKey);
  const ogLocale = openGraphLocales[locale];
  const alternateLocales = locales
    .filter((l) => l !== locale)
    .map((l) => openGraphLocales[l]);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Belgium Vignette",
      locale: ogLocale,
      alternateLocale: alternateLocales,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
