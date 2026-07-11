export const locales = ["nl", "fr", "en", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

export const localeNames: Record<Locale, string> = {
  nl: "Nederlands",
  fr: "Français",
  en: "English",
  de: "Deutsch",
};

export const localeLabels: Record<Locale, string> = {
  nl: "NL",
  fr: "FR",
  en: "EN",
  de: "DE",
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
