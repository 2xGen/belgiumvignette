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
    <section className="py-8">
      <h2 className="section-heading">{dict.news.latestArticles}</h2>
      <ul className="mt-4 space-y-6 border border-border-light bg-bg-header p-4">
        {latest.map((article) => (
          <li key={article.id} className="border-b border-border-light pb-6 last:border-b-0 last:pb-0">
            <ArticleListingItem article={article} locale={locale} dict={dict} />
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <Link href={getLocalizedPath(locale, "news")} className="text-link">
          {dict.nav.news} →
        </Link>
      </p>
    </section>
  );
}
