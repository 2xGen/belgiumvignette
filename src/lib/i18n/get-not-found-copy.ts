import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import type { BaseDictionary } from "@/lib/i18n/types";
import nl from "@/lib/i18n/dictionaries/nl";
import fr from "@/lib/i18n/dictionaries/fr";
import en from "@/lib/i18n/dictionaries/en";
import de from "@/lib/i18n/dictionaries/de";
import es from "@/lib/i18n/dictionaries/es";
import pl from "@/lib/i18n/dictionaries/pl";
import cs from "@/lib/i18n/dictionaries/cs";
import it from "@/lib/i18n/dictionaries/it";
import sv from "@/lib/i18n/dictionaries/sv";
import da from "@/lib/i18n/dictionaries/da";
import ro from "@/lib/i18n/dictionaries/ro";

const dictionaries: Record<Locale, BaseDictionary> = {
  nl,
  fr,
  en,
  de,
  es,
  pl,
  cs,
  it,
  sv,
  da,
  ro,
};

export function getNotFoundCopy(locale: Locale) {
  return dictionaries[locale].notFound;
}

export function getAllNotFoundLocales(): Locale[] {
  return [...locales];
}
