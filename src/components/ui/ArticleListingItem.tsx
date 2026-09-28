import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { Article } from "@/lib/content/articles/types";
import { getArticleContent, getArticleSlug } from "@/lib/content/articles";
import { getArticlePath } from "@/lib/routes";

function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function ArticleListingItem({
  article,
  locale,
  dict,
  headingLevel = "h3",
}: {
  article: Article;
  locale: Locale;
  dict: Dictionary;
  headingLevel?: "h2" | "h3";
}) {
  const content = getArticleContent(article, locale);
  const path = getArticlePath(locale, getArticleSlug(article, locale));
  const Heading = headingLevel;

  return (
    <article>
      <p className="text-sm text-text-muted">
        {dict.news.publishedOn}: {formatDate(article.publishedAt, locale)}
        <span className="mx-2" aria-hidden>
          ·
        </span>
        {dict.news.sourceLabel}: {article.source.name}
      </p>
      <Heading className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
        <Link href={path} className="text-link no-underline hover:underline">
          {content.title}
        </Link>
      </Heading>
      <p className="mt-2 text-text">{content.excerpt}</p>
      <p className="mt-3 text-sm">
        <Link href={path} className="text-link">
          {dict.news.readArticle} →
        </Link>
      </p>
    </article>
  );
}
