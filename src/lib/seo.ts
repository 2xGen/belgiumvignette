import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import type { PageKey } from "@/lib/routes";
import { getAlternatePaths } from "@/lib/routes";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://belgiumvignette.be";

/** BCP 47 hreflang codes for Belgium-focused locales */
export const hreflangCodes: Record<Locale, string> = {
  nl: "nl-BE",
  fr: "fr-BE",
  en: "en",
  de: "de",
};

/** Open Graph locale format (underscore) */
export const openGraphLocales: Record<Locale, string> = {
  nl: "nl_BE",
  fr: "fr_BE",
  en: "en_GB",
  de: "de_DE",
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
