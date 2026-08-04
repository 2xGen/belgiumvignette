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
    <details className="group relative text-sm">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-border bg-bg-surface px-3 py-1.5 font-semibold text-ink shadow-sm [&::-webkit-details-marker]:hidden">
        {localeLabels[currentLocale]}
        <span className="text-text-muted" aria-hidden>
          ▾
        </span>
      </summary>
      <ul
        className="absolute right-0 z-20 mt-2 min-w-[11rem] overflow-hidden rounded-xl border border-border bg-bg-surface py-1 shadow-[var(--shadow-lift)]"
        role="list"
      >
        {locales.map((locale) => (
          <li key={locale}>
            {locale === currentLocale ? (
              <span
                className="block bg-bg-muted px-3 py-2 font-semibold text-ink"
                aria-current="page"
              >
                {localeLabels[locale]} — {localeNames[locale]}
              </span>
            ) : (
              <Link
                href={getAlternatePathForPathname(pathname, currentLocale, locale)}
                className="block px-3 py-2 text-text no-underline hover:bg-bg-muted hover:text-ink"
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
