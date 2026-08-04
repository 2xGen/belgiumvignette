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
import LatestNews from "@/components/sections/LatestNews";

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
    buildBreadcrumbJsonLd([{ name: dict.nav.home, url: buildCanonical(path) }]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="hero-band">
        <div className="page-wrap py-12 sm:py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="eyebrow animate-rise text-accent">
                <span className="eyebrow-dot" aria-hidden />
                {dict.home.hero.eyebrow}
              </p>

              <h1
                className="animate-rise animate-rise-delay-1 mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
                style={{ color: "#ffffff" }}
              >
                {dict.home.hero.title}
              </h1>

              <p className="animate-rise animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {dict.home.hero.subtitle}
              </p>

              <div className="animate-rise animate-rise-delay-3 mt-8">
                <Link href={getLocalizedPath(lang, "foreign")} className="btn-primary">
                  {dict.home.hero.ctaPrimary}
                </Link>
              </div>

              <div className="animate-rise animate-rise-delay-3 mt-8">
                <p className="text-sm font-semibold text-white/80">
                  {dict.home.decisionTree.title}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {dict.home.decisionTree.options.map((option) => {
                    const href = option.anchor
                      ? `${getLocalizedPath(lang, option.href)}#${option.anchor}`
                      : getLocalizedPath(lang, option.href);
                    return (
                      <li key={option.label}>
                        <Link
                          href={href}
                          className="inline-flex rounded-full border border-white/25 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white no-underline transition hover:border-accent hover:bg-accent hover:text-ink hover:no-underline"
                        >
                          {option.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <Newsletter locale={lang} dict={dict} variant="hero" />
          </div>
        </div>
      </section>

      <div className="page-wrap py-10 sm:py-14">
        <QuickAnswers
          items={dict.home.quickAnswers}
          locale={lang}
          readMore={dict.common.readMore}
        />

        <section className="py-12">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-heading">{dict.home.pricingTitle}</h2>
            <p className="text-text-muted">{dict.home.pricingSubtitle}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="panel-muted p-6">
              <h3 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
                {dict.home.annualTableTitle}
              </h3>
              <PricingTable
                rows={dict.home.annualPricing}
                caption={dict.home.annualTableTitle}
                categoryHeader={dict.common.tableCategory}
                valueHeader={dict.common.tablePrice}
              />
            </div>
            <div className="panel-muted p-6">
              <h3 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
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
        <LatestNews locale={lang} dict={dict} />
        <FAQ title={dict.home.faqTitle} items={dict.home.faqs} />

        <p className="mt-10 notice-box max-w-3xl text-sm">{dict.common.disclaimer}</p>

        <Sources title={dict.home.sourcesTitle} links={dict.sources} />
      </div>
    </>
  );
}
