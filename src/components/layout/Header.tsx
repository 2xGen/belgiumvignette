import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getLocalizedPath, mainNavPageKeys } from "@/lib/routes";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { BrandLink } from "@/components/brand/BrandMark";
import Link from "next/link";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const navItems = mainNavPageKeys;

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg-header/90 backdrop-blur-md">
      <div className="site-wrap flex flex-wrap items-center justify-between gap-4 py-3.5">
        <BrandLink
          href={getLocalizedPath(locale, "home")}
          domain={dict.site.domain}
          subtitle={dict.common.independentSite}
        />
        <LanguageSwitcher currentLocale={locale} />
      </div>

      <nav className="border-t border-border/70" aria-label="Main">
        <div className="site-wrap">
          <ul className="-mx-1 flex items-center gap-0.5 overflow-x-auto py-1.5">
            {navItems.map((key) => (
              <li key={key} className="shrink-0">
                <Link
                  href={getLocalizedPath(locale, key)}
                  className="block rounded-full px-3.5 py-2 text-sm font-semibold text-text no-underline transition-colors hover:bg-bg-muted hover:text-ink hover:no-underline"
                >
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
