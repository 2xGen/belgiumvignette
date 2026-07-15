import { locales, type Locale } from "@/lib/i18n/config";
import { getArticleBySlug } from "@/lib/content/articles";
import type { Article } from "@/lib/content/articles/types";

export const vignetteProductPageKeys = [
  "dailyVignette",
  "monthlyVignette",
  "annualVignette",
  "electricVignette",
] as const;

export type VignetteProductPageKey = (typeof vignetteProductPageKeys)[number];

export const pageKeys = [
  "home",
  "prices",
  ...vignetteProductPageKeys,
  "foreign",
  "exemptions",
  "fines",
  "buy",
  "news",
  "privacy",
] as const;

export type PageKey = (typeof pageKeys)[number];

export const mainNavPageKeys = pageKeys.filter(
  (key) =>
    key !== "home" &&
    !(vignetteProductPageKeys as readonly string[]).includes(key),
);

export const routes: Record<Exclude<PageKey, "home">, Record<Locale, string>> = {
  prices: {
    nl: "prijzen",
    fr: "tarifs",
    en: "prices",
    de: "preise",
    es: "precios",
    pl: "ceny",
    cs: "ceny",
    it: "prezzi",
    sv: "priser",
    da: "priser",
    ro: "preturi",
  },
  dailyVignette: {
    nl: "dagvignet",
    fr: "vignette-journaliere",
    en: "daily-vignette",
    de: "tagesvignette",
    es: "vignette-diaria",
    pl: "dzienna-wineta",
    cs: "denni-znamka",
    it: "vignetta-giornaliera",
    sv: "daglig-vignett",
    da: "dagsvignet",
    ro: "vinieta-zilnica",
  },
  monthlyVignette: {
    nl: "maandvignet",
    fr: "vignette-mensuelle",
    en: "monthly-vignette",
    de: "monatsvignette",
    es: "vignette-mensual",
    pl: "miesieczna-wineta",
    cs: "mesicni-znamka",
    it: "vignetta-mensile",
    sv: "manadsvignett",
    da: "maanedsvignet",
    ro: "vinieta-lunara",
  },
  annualVignette: {
    nl: "jaarvignet",
    fr: "vignette-annuelle",
    en: "annual-vignette",
    de: "jahresvignette",
    es: "vignette-anual",
    pl: "roczna-wineta",
    cs: "rocni-znamka",
    it: "vignetta-annuale",
    sv: "arsvignett",
    da: "arsvignet",
    ro: "vinieta-anuala",
  },
  electricVignette: {
    nl: "elektrisch-vignet",
    fr: "vignette-voiture-electrique",
    en: "electric-vehicle-vignette",
    de: "e-auto-vignette",
    es: "vignette-coche-electrico",
    pl: "wineta-samochod-elektryczny",
    cs: "elektricke-vozidlo-znamka",
    it: "vignetta-auto-elettrica",
    sv: "elbil-vignett",
    da: "elbil-vignet",
    ro: "vinieta-masina-electrica",
  },
  foreign: {
    nl: "buitenlandse-bestuurders",
    fr: "conducteurs-etrangers",
    en: "foreign-drivers",
    de: "auslaendische-fahrer",
    es: "conductores-extranjeros",
    pl: "kierowcy-zagraniczni",
    cs: "zahranicni-ridici",
    it: "guidatori-stranieri",
    sv: "utlandska-forare",
    da: "udenlandske-bilister",
    ro: "soferi-straini",
  },
  exemptions: {
    nl: "vrijstellingen",
    fr: "exemptions",
    en: "exemptions",
    de: "befreiungen",
    es: "exenciones",
    pl: "zwolnienia",
    cs: "vyjimky",
    it: "esenzioni",
    sv: "undantag",
    da: "fritagelser",
    ro: "scutiri",
  },
  fines: {
    nl: "boetes",
    fr: "amendes",
    en: "fines",
    de: "bussgelder",
    es: "multas",
    pl: "mandaty",
    cs: "pokuty",
    it: "multe",
    sv: "boter",
    da: "boeder",
    ro: "amenzi",
  },
  buy: {
    nl: "kopen",
    fr: "acheter",
    en: "how-to-buy",
    de: "kaufen",
    es: "como-comprar",
    pl: "jak-kupic",
    cs: "jak-koupit",
    it: "come-acquistare",
    sv: "kop",
    da: "saadan-koeber-du",
    ro: "cum-cumpari",
  },
  news: {
    nl: "nieuws",
    fr: "actualites",
    en: "news",
    de: "nachrichten",
    es: "noticias",
    pl: "aktualnosci",
    cs: "novinky",
    it: "notizie",
    sv: "nyheter",
    da: "nyheder",
    ro: "stiri",
  },
  privacy: {
    nl: "privacy",
    fr: "confidentialite",
    en: "privacy",
    de: "datenschutz",
    es: "privacidad",
    pl: "prywatnosc",
    cs: "soukromi",
    it: "privacy",
    sv: "integritet",
    da: "privatliv",
    ro: "confidentialitate",
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
  for (const locale of locales) {
    paths[locale] = getLocalizedPath(locale, pageKey);
  }
  return paths;
}

export function getArticlePath(locale: Locale, articleSlug: string): string {
  return `/${locale}/${routes.news[locale]}/${articleSlug}`;
}

export function isNewsIndexSlug(locale: Locale, slug: string): boolean {
  return routes.news[locale] === slug;
}

export function getArticleAlternatePaths(article: Article): Record<Locale, string> {
  const paths = {} as Record<Locale, string>;
  for (const locale of locales) {
    paths[locale] = getArticlePath(locale, article.slugs[locale]);
  }
  return paths;
}

/** Map the current pathname to the equivalent page in another locale. */
export function getAlternatePathForPathname(
  pathname: string,
  fromLocale: Locale,
  toLocale: Locale,
): string {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length <= 1) {
    return getLocalizedPath(toLocale, "home");
  }

  const slug = parts[1];
  const pageKey = getPageKeyFromSlug(fromLocale, slug);

  if (!pageKey) {
    return getLocalizedPath(toLocale, "home");
  }

  if (parts.length >= 3 && pageKey === "news") {
    const article = getArticleBySlug(fromLocale, parts[2]);
    if (article) {
      return getArticlePath(toLocale, article.slugs[toLocale]);
    }
    return getLocalizedPath(toLocale, "news");
  }

  return getLocalizedPath(toLocale, pageKey);
}
