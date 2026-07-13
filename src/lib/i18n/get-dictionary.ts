import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  nl: () => import("./dictionaries/nl").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  de: () => import("./dictionaries/de").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  pl: () => import("./dictionaries/pl").then((m) => m.default),
  cs: () => import("./dictionaries/cs").then((m) => m.default),
  it: () => import("./dictionaries/it").then((m) => m.default),
  sv: () => import("./dictionaries/sv").then((m) => m.default),
  da: () => import("./dictionaries/da").then((m) => m.default),
  ro: () => import("./dictionaries/ro").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
