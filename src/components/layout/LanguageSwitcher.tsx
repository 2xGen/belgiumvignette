"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeLabels, localeNames, type Locale } from "@/lib/i18n/config";
import { getAlternatePathForPathname } from "@/lib/routes";

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();

  return (
    <details className="group relative text-sm text-text-muted">
      <summary className="cursor-pointer list-none font-semibold text-text [&::-webkit-details-marker]:hidden">
        {localeLabels[currentLocale]}
        <span className="ml-1 text-text-muted" aria-hidden>
          ▾
        </span>
      </summary>
      <ul
        className="absolute right-0 z-20 mt-1 min-w-[9rem] border border-border bg-bg-surface py-1 shadow-sm"
        role="list"
      >
        {locales.map((locale) => (
          <li key={locale}>
            {locale === currentLocale ? (
              <span
                className="block px-3 py-1 font-semibold text-text"
                aria-current="page"
              >
                {localeLabels[locale]} — {localeNames[locale]}
              </span>
            ) : (
              <Link
                href={getAlternatePathForPathname(pathname, currentLocale, locale)}
                className="block px-3 py-1 text-link no-underline hover:bg-bg-header hover:underline"
              >
                {localeLabels[locale]} — {localeNames[locale]}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}
