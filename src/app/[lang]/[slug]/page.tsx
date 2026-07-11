import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale, isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  routes,
  getPageKeyFromSlug,
  getLocalizedPath,
  type PageKey,
} from "@/lib/routes";
import { buildPageMetadata, buildCanonical, getSiteUrl, hreflangCodes } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from "@/lib/json-ld";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Newsletter from "@/components/sections/Newsletter";
import {
  PageHero,
  renderSubpageContent,
  getSubpageContent,
} from "@/components/pages/SubpageContent";

const subpageKeys = Object.keys(routes) as Exclude<PageKey, "home">[];

export async function generateStaticParams() {
  const params: { lang: Locale; slug: string }[] = [];
  for (const lang of locales) {
    for (const key of subpageKeys) {
      params.push({ lang, slug: routes[key][lang] });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) return {};

  const pageKey = getPageKeyFromSlug(lang, slug);
  if (!pageKey) return {};

  const dict = await getDictionary(lang);
  const meta = dict.meta[pageKey];
  const path = getLocalizedPath(lang, pageKey);

  return buildPageMetadata({
    locale: lang,
    pageKey,
    title: meta.title,
    description: meta.description,
    path,
  });
}

function getFaqsForPage(dict: Awaited<ReturnType<typeof getDictionary>>, pageKey: PageKey) {
  switch (pageKey) {
    case "prices":
      return dict.prices.faqs;
    case "foreign":
      return dict.foreign.faqs;
    case "exemptions":
      return dict.exemptions.faqs;
    case "fines":
      return dict.fines.faqs;
    case "buy":
      return dict.buy.faqs;
    default:
      return [];
  }
}

export default async function Subpage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const pageKey = getPageKeyFromSlug(lang, slug);
  if (!pageKey) notFound();

  const dict = await getDictionary(lang);
  const content = getSubpageContent(pageKey, dict);
  if (!content) notFound();

  const path = getLocalizedPath(lang, pageKey);
  const homePath = getLocalizedPath(lang, "home");
  const faqs = getFaqsForPage(dict, pageKey);
  const siteUrl = getSiteUrl();
  const canonical = buildCanonical(path);

  const breadcrumbItems = [
    { name: dict.nav.home, url: buildCanonical(homePath) },
    { name: content.title, url: canonical },
  ];

  const jsonLd = [
    buildWebPageJsonLd({
      name: dict.meta[pageKey].title,
      description: dict.meta[pageKey].description,
      url: canonical,
      dateModified: dict.common.lastUpdatedIso,
      inLanguage: hreflangCodes[lang],
      siteUrl,
    }),
    buildBreadcrumbJsonLd(breadcrumbItems),
    ...(faqs.length ? [buildFaqJsonLd(faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="page-wrap py-8 sm:py-10">
        <Breadcrumbs
          items={[
            { label: dict.nav.home, href: homePath },
            { label: content.title },
          ]}
        />
        <PageHero
          title={content.title}
          intro={content.intro}
          badge={content.badge}
          dict={dict}
        />
        {renderSubpageContent(pageKey, dict)}
        {pageKey === "buy" && (
          <div className="mt-12">
            <Newsletter locale={lang} dict={dict} />
          </div>
        )}
      </div>
    </>
  );
}
