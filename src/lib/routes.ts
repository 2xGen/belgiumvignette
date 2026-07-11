import type { Locale } from "@/lib/i18n/config";

export const pageKeys = [
  "home",
  "prices",
  "foreign",
  "exemptions",
  "fines",
  "buy",
  "privacy",
] as const;

export type PageKey = (typeof pageKeys)[number];

export const routes: Record<Exclude<PageKey, "home">, Record<Locale, string>> = {
  prices: {
    nl: "prijzen",
    fr: "tarifs",
    en: "prices",
    de: "preise",
  },
  foreign: {
    nl: "buitenlandse-bestuurders",
    fr: "conducteurs-etrangers",
    en: "foreign-drivers",
    de: "auslaendische-fahrer",
  },
  exemptions: {
    nl: "vrijstellingen",
    fr: "exemptions",
    en: "exemptions",
    de: "befreiungen",
  },
  fines: {
    nl: "boetes",
    fr: "amendes",
    en: "fines",
    de: "bussgelder",
  },
  buy: {
    nl: "kopen",
    fr: "acheter",
    en: "how-to-buy",
    de: "kaufen",
  },
  privacy: {
    nl: "privacy",
    fr: "confidentialite",
    en: "privacy",
    de: "datenschutz",
  },
};

export function getLocalizedPath(locale: Locale, pageKey: PageKey): string {
  if (pageKey === "home") return `/${locale}`;
  return `/${locale}/${routes[pageKey][locale]}`;
}

export function getPageKeyFromSlug(
  locale: Locale,
  slug: string,
): Exclude<PageKey, "home"> | null {
  for (const key of pageKeys) {
    if (key === "home") continue;
    if (routes[key][locale] === slug) return key;
  }
  return null;
}

export function getAlternatePaths(pageKey: PageKey): Record<Locale, string> {
  const paths = {} as Record<Locale, string>;
  for (const locale of ["nl", "fr", "en", "de"] as Locale[]) {
    paths[locale] = getLocalizedPath(locale, pageKey);
  }
  return paths;
}
