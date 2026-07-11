import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getLocalizedPath, pageKeys } from "@/lib/routes";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const navItems = pageKeys.filter((key) => key !== "home");

  return (
    <footer className="mt-auto border-t border-border bg-bg-footer text-sm">
      <div className="site-wrap py-8">
        <p className="leading-relaxed text-text-muted">{dict.common.disclaimer}</p>

        <p className="mt-4 text-text-muted">
          {dict.common.contactLabel}:{" "}
          <a href={`mailto:${dict.site.contactEmail}`} className="text-link">
            {dict.site.contactEmail}
          </a>{" "}
          (
          <a href="https://tolls.be" className="text-link" rel="noopener noreferrer">
            Tolls.be
          </a>
          )
        </p>

        <p className="mt-4">
          <a
            href={dict.common.relatedSite}
            className="text-link"
            rel="noopener noreferrer"
          >
            {dict.common.relatedSiteLabel}
          </a>
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
          {navItems.map((key) => (
            <li key={key}>
              <Link href={getLocalizedPath(locale, key)} className="text-link">
                {dict.nav[key]}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 border-t border-border-light pt-4 text-xs text-text-muted">
          © {new Date().getFullYear()} {dict.site.domain}. {dict.common.lastUpdated}:{" "}
          {dict.common.lastUpdatedDate}.
        </p>
      </div>
    </footer>
  );
}
