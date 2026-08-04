import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { getLatestArticles } from "@/lib/content/articles";
import { getLocalizedPath } from "@/lib/routes";
import { ArticleListingItem } from "@/components/ui/ArticleListingItem";

export default function LatestNews({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const latest = getLatestArticles(3);
  if (!latest.length) return null;

  return (
    <section className="py-12">
      <h2 className="section-heading">{dict.news.latestArticles}</h2>
      <ul className="mt-6 space-y-0 overflow-hidden rounded-[14px] border border-border-light bg-bg-surface shadow-[var(--shadow-soft)]">
        {latest.map((article) => (
          <li
            key={article.id}
            className="border-b border-border-light p-5 last:border-b-0 sm:p-6"
          >
            <ArticleListingItem article={article} locale={locale} dict={dict} />
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm">
        <Link
          href={getLocalizedPath(locale, "news")}
          className="font-bold text-ink no-underline hover:text-accent-deep hover:underline"
        >
          {dict.nav.news} →
        </Link>
      </p>
    </section>
  );
}
