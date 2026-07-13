import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { Article } from "@/lib/content/articles/types";
import { ArticleListingItem } from "@/components/ui/ArticleListingItem";

export function NewsIndexContent({
  articles,
  locale,
  dict,
}: {
  articles: Article[];
  locale: Locale;
  dict: Dictionary;
}) {
  if (!articles.length) {
    return <p className="text-text-muted">{dict.news.noArticles}</p>;
  }

  return (
    <section>
      <h2 className="section-heading">{dict.news.latestArticles}</h2>
      <ul className="mt-4 space-y-8">
        {articles.map((article) => (
          <li key={article.id} className="border-b border-border-light pb-8 last:border-b-0">
            <ArticleListingItem article={article} locale={locale} dict={dict} />
          </li>
        ))}
      </ul>
    </section>
  );
}
