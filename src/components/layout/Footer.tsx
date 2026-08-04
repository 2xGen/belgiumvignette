import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getLocalizedPath, pageKeys } from "@/lib/routes";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { BrandMark } from "@/components/brand/BrandMark";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const navItems = pageKeys.filter((key) => key !== "home");

  return (
    <footer className="mt-auto bg-bg-footer text-sm text-white">
      <div className="h-1 w-full bg-[linear-gradient(90deg,#0b1220_0%,#0b1220_33%,#f5c518_33%,#f5c518_66%,#e11d2e_66%,#e11d2e_100%)]" />
      <div className="site-wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <BrandMark domain={dict.site.domain} tone="light" size="lg" />
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            {dict.common.independentSite}
          </p>
          <p className="mt-5 max-w-sm leading-relaxed text-white/65">
            {dict.common.disclaimer}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
            {dict.site.name}
          </h2>
          <ul className="mt-4 columns-1 gap-x-8 sm:columns-2">
            {navItems.map((key) => (
              <li key={key} className="mb-2 break-inside-avoid">
                <Link
                  href={getLocalizedPath(locale, key)}
                  className="text-white/80 no-underline underline-offset-4 hover:text-accent hover:underline"
                >
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
            {dict.common.contactLabel}
          </h2>
          <p className="mt-4">
            <a
              href={`mailto:${dict.site.contactEmail}`}
              className="text-white/85 no-underline hover:text-accent hover:underline"
            >
              {dict.site.contactEmail}
            </a>
          </p>
          <p className="mt-3">
            <a
              href={dict.common.relatedSite}
              className="text-white/85 no-underline hover:text-accent hover:underline"
              rel="noopener noreferrer"
            >
              {dict.common.relatedSiteLabel}
            </a>
          </p>
          <p className="mt-5">
            <CookieSettingsButton
              label={dict.common.cookieSettings}
              className="text-white/70 underline underline-offset-4 hover:text-accent"
            />
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-wrap flex flex-wrap items-center justify-between gap-2 py-4 text-xs text-white/45">
          <span>
            © {new Date().getFullYear()} {dict.site.domain}
          </span>
          <span>
            {dict.common.lastUpdated}: {dict.common.lastUpdatedDate}
          </span>
        </div>
      </div>
    </footer>
  );
}
