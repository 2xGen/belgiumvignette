"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeLabels, type Locale } from "@/lib/i18n/config";
import { getLocalizedPath, getPageKeyFromSlug, type PageKey } from "@/lib/routes";

function resolvePageKey(pathname: string, locale: Locale): PageKey {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length <= 1) return "home";
  const slug = parts[1];
  const key = getPageKeyFromSlug(locale, slug);
  return key ?? "home";
}

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();
  const pageKey = resolvePageKey(pathname, currentLocale);

  return (
    <div className="text-sm text-text-muted" aria-label="Language">
      {locales.map((locale, index) => (
        <span key={locale}>
          {index > 0 && <span className="mx-1.5 text-border">|</span>}
          {locale === currentLocale ? (
            <span className="font-semibold text-text" aria-current="page">
              {localeLabels[locale]}
            </span>
          ) : (
            <Link
              href={getLocalizedPath(locale, pageKey)}
              className="text-link no-underline hover:underline"
            >
              {localeLabels[locale]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
