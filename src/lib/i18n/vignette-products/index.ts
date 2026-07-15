import type { Locale } from "../config";
import type { VignetteProductPages } from "./types";

const loaders: Record<Locale, () => Promise<{ default: VignetteProductPages }>> = {
  nl: () => import("./nl"),
  fr: () => import("./fr"),
  en: () => import("./en"),
  de: () => import("./de"),
  es: () => import("./es"),
  pl: () => import("./pl"),
  cs: () => import("./cs"),
  it: () => import("./it"),
  sv: () => import("./sv"),
  da: () => import("./da"),
  ro: () => import("./ro"),
};

export async function getVignetteProductPages(
  locale: Locale,
): Promise<VignetteProductPages> {
  const mod = await loaders[locale]();
  return mod.default;
}
