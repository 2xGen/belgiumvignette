import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getLocalizedPath, pageKeys } from "@/lib/routes";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const navItems = pageKeys.filter((key) => key !== "home");

  return (
    <header className="border-b border-border bg-bg-header">
      <div className="site-wrap py-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <Link href={getLocalizedPath(locale, "home")} className="no-underline hover:no-underline">
            <span className="font-serif text-xl font-bold text-text">
              {dict.site.domain}
            </span>
          </Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>
        <p className="mt-1 text-sm text-text-muted">{dict.common.independentSite}</p>
      </div>

      <div className="h-0.5 bg-[linear-gradient(to_right,#000_33%,#FDDA24_33%,#FDDA24_66%,#EF3340_66%)]" aria-hidden />

      <nav className="site-wrap border-t border-border-light py-2" aria-label="Main">
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {navItems.map((key) => (
            <li key={key}>
              <Link
                href={getLocalizedPath(locale, key)}
                className="text-link no-underline hover:underline"
              >
                {dict.nav[key]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
