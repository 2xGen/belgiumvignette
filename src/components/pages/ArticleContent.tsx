import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { Article, ArticleContentSection } from "@/lib/content/articles/types";
import { getArticleContent } from "@/lib/content/articles";
import { getLocalizedPath } from "@/lib/routes";
import { ArticleImage } from "@/components/ui/ArticleImage";
import { RelatedArticles } from "@/components/sections/RelatedArticles";

function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

function ArticleSections({
  sections,
  headingLevel,
}: {
  sections: ArticleContentSection[];
  headingLevel: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-6">
          <Heading className="font-serif text-xl font-bold">{section.heading}</Heading>
          <div className="prose-content mt-3 space-y-3">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function ArticlePageContent({
  article,
  locale,
  dict,
}: {
  article: Article;
  locale: Locale;
  dict: Dictionary;
}) {
  const content = getArticleContent(article, locale);

  const tocEntries = [
    ...content.summarySections.map((section) => ({
      id: section.id,
      label: section.heading,
    })),
    { id: "our-view", label: dict.news.ourTakeTitle },
    ...content.ourTakeSections.map((section) => ({
      id: section.id,
      label: section.heading,
    })),
  ];

  return (
    <article>
      <p className="text-sm text-text-muted">
        {dict.news.publishedOn}: {formatDate(article.publishedAt, locale)}
      </p>

      <p className="mt-3 text-xs text-text-muted">{dict.news.translationDisclaimer}</p>

      {article.image && (
        <figure className="mt-6">
          <ArticleImage
            src={article.image.url}
            alt={content.imageAlt ?? content.title}
            className="h-auto w-full border border-border-light"
          />
          {article.image.credit && (
            <figcaption className="mt-2 text-xs text-text-muted">
              © {article.image.credit}
            </figcaption>
          )}
        </figure>
      )}

      <nav
        className="notice-box mt-8 text-sm"
        aria-label={dict.news.tableOfContents}
      >
        <p className="font-semibold text-text">{dict.news.tableOfContents}</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          {tocEntries.map((entry) => (
            <li key={entry.id}>
              <a href={`#${entry.id}`} className="text-link">
                {entry.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10">
        <div className="mb-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-text-muted">
            {dict.news.summaryTitle}
          </p>
          <span className="text-sm text-text-muted" aria-hidden>
            ·
          </span>
          <p className="text-sm text-text-muted">
            {dict.news.summaryFromSource}{" "}
            <a
              href={article.source.url}
              className="text-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {article.source.name} ↗
            </a>
          </p>
        </div>
        <p className="mb-6 text-xs text-text-muted">{dict.news.sourceDisclaimer}</p>
        <ArticleSections sections={content.summarySections} headingLevel="h2" />
      </div>

      <section id="our-view" className="mt-12 scroll-mt-6 border-t border-border-light pt-10">
        <h2 className="font-serif text-xl font-bold">{dict.news.ourTakeTitle}</h2>
        <div className="notice-box mt-4">
          <ArticleSections sections={content.ourTakeSections} headingLevel="h3" />
        </div>
      </section>

      <aside
        className="notice-box mt-12 text-sm"
        aria-label={dict.news.articleAttributionTitle}
      >
        <p className="font-semibold text-text">{dict.news.articleAttributionTitle}</p>
        <p className="mt-3 text-text-muted">{dict.news.articleAttributionIndependence}</p>
        <p className="mt-3 text-text-muted">{dict.news.articleAttributionAi}</p>
        <p className="mt-4">
          <span className="text-text-muted">{dict.news.articleAttributionReadOriginal} </span>
          <a
            href={article.source.url}
            className="font-semibold text-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            {article.source.name} ↗
          </a>
        </p>
        <p className="mt-3 text-xs text-text-muted">{dict.news.articleAttributionCopyright}</p>
      </aside>

      <RelatedArticles article={article} locale={locale} dict={dict} />

      <p className="mt-10 text-sm">
        <Link href={getLocalizedPath(locale, "news")} className="text-link">
          ← {dict.news.backToNews}
        </Link>
      </p>
    </article>
  );
}
