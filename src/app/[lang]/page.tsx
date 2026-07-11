import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale, isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocalizedPath } from "@/lib/routes";
import { buildPageMetadata, buildCanonical, getSiteUrl } from "@/lib/seo";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebsiteJsonLd,
  buildWebPageJsonLd,
} from "@/lib/json-ld";
import { hreflangCodes } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import QuickAnswers from "@/components/sections/QuickAnswers";
import { PricingTable } from "@/components/ui/PricingTable";
import Timeline from "@/components/sections/Timeline";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import Sources from "@/components/sections/Sources";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = await getDictionary(lang);
  const path = getLocalizedPath(lang, "home");

  return buildPageMetadata({
    locale: lang,
    pageKey: "home",
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    path,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const path = getLocalizedPath(lang, "home");
  const siteUrl = getSiteUrl();

  const jsonLd = [
    buildWebsiteJsonLd({
      name: dict.site.name,
      url: siteUrl,
      description: dict.site.tagline,
    }),
    buildWebPageJsonLd({
      name: dict.meta.home.title,
      description: dict.meta.home.description,
      url: buildCanonical(path),
      dateModified: dict.common.lastUpdatedIso,
      inLanguage: hreflangCodes[lang],
      siteUrl,
    }),
    buildFaqJsonLd(dict.home.faqs),
    buildBreadcrumbJsonLd([
      { name: dict.nav.home, url: buildCanonical(path) },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="page-wrap py-8 sm:py-10">
        <p className="text-sm text-text-muted">{dict.home.hero.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{dict.home.hero.title}</h1>
        <p className="mt-4 max-w-none text-text">{dict.home.hero.subtitle}</p>

        <p className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href={getLocalizedPath(lang, "prices")} className="text-link">
            {dict.home.hero.ctaPrimary}
          </Link>
          <Link href={getLocalizedPath(lang, "foreign")} className="text-link">
            {dict.home.hero.ctaSecondary}
          </Link>
        </p>

        <p className="notice-box mt-6 text-sm text-text-muted">{dict.common.disclaimer}</p>

        <QuickAnswers
          items={dict.home.quickAnswers}
          locale={lang}
          readMore={dict.common.readMore}
        />

        <section className="py-8">
          <h2 className="section-heading">{dict.home.pricingTitle}</h2>
          <p className="mb-4 text-sm text-text-muted">{dict.home.pricingSubtitle}</p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 font-serif text-base font-bold">
                {dict.home.annualTableTitle}
              </h3>
              <PricingTable
                rows={dict.home.annualPricing}
                caption={dict.home.annualTableTitle}
                categoryHeader={dict.common.tableCategory}
                valueHeader={dict.common.tablePrice}
              />
            </div>
            <div>
              <h3 className="mb-2 font-serif text-base font-bold">
                {dict.home.shortTermTableTitle}
              </h3>
              <PricingTable
                rows={dict.home.shortTermPricing}
                caption={dict.home.shortTermTableTitle}
                categoryHeader={dict.common.tableCategory}
                valueHeader={dict.common.tablePrice}
              />
            </div>
          </div>
        </section>

        <Timeline title={dict.home.timelineTitle} items={dict.home.timeline} />
        <FAQ title={dict.home.faqTitle} items={dict.home.faqs} />

        <div className="py-6">
          <Newsletter locale={lang} dict={dict} />
        </div>

        <Sources title={dict.home.sourcesTitle} links={dict.sources} />
      </div>
    </>
  );
}
