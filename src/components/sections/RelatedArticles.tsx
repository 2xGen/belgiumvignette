import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { Article } from "@/lib/content/articles/types";
import { getRelatedArticles } from "@/lib/content/articles";
import { ArticleListingItem } from "@/components/ui/ArticleListingItem";

export function RelatedArticles({
  article,
  locale,
  dict,
}: {
  article: Article;
  locale: Locale;
  dict: Dictionary;
}) {
  const related = getRelatedArticles(article);
  if (!related.length) return null;

  return (
    <section className="mt-12 border-t border-border-light pt-10">
      <h2 className="section-heading">{dict.news.relatedArticles}</h2>
      <ul className="mt-4 space-y-8">
        {related.map((item) => (
          <li key={item.id} className="border-b border-border-light pb-8 last:border-b-0">
            <ArticleListingItem article={item} locale={locale} dict={dict} />
          </li>
        ))}
      </ul>
    </section>
  );
}
