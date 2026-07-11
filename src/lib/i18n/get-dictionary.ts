import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  nl: () => import("./dictionaries/nl").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  de: () => import("./dictionaries/de").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
