import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale, isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  routes,
  getLocalizedPath,
  isNewsIndexSlug,
  getArticlePath,
} from "@/lib/routes";
import {
  buildArticleMetadata,
  buildCanonical,
  getSiteUrl,
  hreflangCodes,
} from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildNewsArticleJsonLd,
} from "@/lib/json-ld";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/pages/SubpageContent";
import { ArticlePageContent } from "@/components/pages/ArticleContent";
import { getAllArticles, getArticleBySlug, getArticleContent, getArticleSlug } from "@/lib/content/articles";

export async function generateStaticParams() {
  const articles = getAllArticles();
  const params: { lang: Locale; slug: string; articleSlug: string }[] = [];

  for (const lang of locales) {
    for (const article of articles) {
      params.push({
        lang,
        slug: routes.news[lang],
        articleSlug: getArticleSlug(article, lang),
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string; articleSlug: string }>;
}): Promise<Metadata> {
  const { lang, slug, articleSlug } = await params;
  if (!isValidLocale(lang)) return {};
  if (!isNewsIndexSlug(lang, slug)) return {};

  const article = getArticleBySlug(lang, articleSlug);
  if (!article) return {};

  const content = getArticleContent(article, lang);
  const path = getArticlePath(lang, getArticleSlug(article, lang));

  return buildArticleMetadata({
    locale: lang,
    article,
    title: content.title,
    description: content.metaDescription,
    path,
    publishedAt: article.publishedAt,
    imageUrl: article.image?.url,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string; articleSlug: string }>;
}) {
  const { lang, slug, articleSlug } = await params;
  if (!isValidLocale(lang)) notFound();
  if (!isNewsIndexSlug(lang, slug)) notFound();

  const article = getArticleBySlug(lang, articleSlug);
  if (!article) notFound();

  const dict = await getDictionary(lang);
  const content = getArticleContent(article, lang);
  const path = getArticlePath(lang, getArticleSlug(article, lang));
  const homePath = getLocalizedPath(lang, "home");
  const newsPath = getLocalizedPath(lang, "news");
  const siteUrl = getSiteUrl();
  const canonical = buildCanonical(path);

  const breadcrumbItems = [
    { name: dict.nav.home, url: buildCanonical(homePath) },
    { name: dict.nav.news, url: buildCanonical(newsPath) },
    { name: content.title, url: canonical },
  ];

  const jsonLd = [
    buildNewsArticleJsonLd({
      headline: content.title,
      description: content.metaDescription,
      url: canonical,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      inLanguage: hreflangCodes[lang],
      sourceName: article.source.name,
      sourceUrl: article.source.url,
    }),
    buildBreadcrumbJsonLd(breadcrumbItems),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="page-wrap py-8 sm:py-10">
        <Breadcrumbs
          items={[
            { label: dict.nav.home, href: homePath },
            { label: dict.nav.news, href: newsPath },
            { label: content.title },
          ]}
        />
        <PageHero title={content.title} intro={content.excerpt} dict={dict} showSiteNotice={false} />
        <ArticlePageContent article={article} locale={lang} dict={dict} />
      </div>
    </>
  );
}
