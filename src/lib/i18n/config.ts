export const locales = [
  "nl",
  "fr",
  "en",
  "de",
  "es",
  "pl",
  "cs",
  "it",
  "sv",
  "da",
  "ro",
] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

export const localeNames: Record<Locale, string> = {
  nl: "Nederlands",
  fr: "Français",
  en: "English",
  de: "Deutsch",
  es: "Español",
  pl: "Polski",
  cs: "Čeština",
  it: "Italiano",
  sv: "Svenska",
  da: "Dansk",
  ro: "Română",
};

export const localeLabels: Record<Locale, string> = {
  nl: "NL",
  fr: "FR",
  en: "EN",
  de: "DE",
  es: "ES",
  pl: "PL",
  cs: "CS",
  it: "IT",
  sv: "SV",
  da: "DA",
  ro: "RO",
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
