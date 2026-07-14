"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, isValidLocale, type Locale } from "@/lib/i18n/config";
import { getNotFoundCopy } from "@/lib/i18n/get-not-found-copy";
import { getLocalizedPath } from "@/lib/routes";

function resolveLocale(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isValidLocale(segment) ? segment : defaultLocale;
}

export function NotFoundContent() {
  const pathname = usePathname();
  const locale = resolveLocale(pathname);
  const copy = getNotFoundCopy(locale);

  return (
    <div className="page-wrap py-16 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-text-muted">404</p>
      <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">{copy.title}</h1>
      <p className="mt-4 max-w-xl text-text">{copy.description}</p>
      <p className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href={getLocalizedPath(locale, "home")} className="text-link">
          {copy.homeLink} →
        </Link>
        <Link href={getLocalizedPath(locale, "news")} className="text-link">
          {copy.newsLink} →
        </Link>
      </p>
    </div>
  );
}
