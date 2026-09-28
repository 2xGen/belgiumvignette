import Link from "next/link";
import type { ContentSection, Dictionary } from "@/lib/i18n/types";
import type { PageKey, VignetteProductPageKey } from "@/lib/routes";
import {
  getLocalizedPath,
  vignetteProductPageKeys,
} from "@/lib/routes";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import { PricingTable, ComparisonTable } from "@/components/ui/PricingTable";
import { RateMatrixTable } from "@/components/ui/RateMatrixTable";
import { LinkedProse } from "@/components/ui/LinkedProse";
import { NewsIndexContent } from "@/components/pages/NewsContent";
import type { Article } from "@/lib/content/articles/types";
import type { Locale } from "@/lib/i18n/config";

export function PageHero({
  title,
  intro,
  badge,
  dict,
  showSiteNotice = true,
  wide = false,
}: {
  title: string;
  intro: string;
  badge?: string;
  dict: Dictionary;
  showSiteNotice?: boolean;
  wide?: boolean;
}) {
  const measure = wide ? "max-w-none" : "max-w-3xl";
  return (
    <header className="mb-10">
      {badge && (
        <p className="eyebrow mb-3 text-accent-deep">
          <span className="eyebrow-dot" aria-hidden />
          {badge}
        </p>
      )}
      <h1
        className={`${measure} font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-ink sm:text-5xl`}
      >
        {title}
      </h1>
      <p className={`mt-4 ${measure} text-lg leading-relaxed text-text-muted`}>
        {intro}
      </p>
      {showSiteNotice && (
        <>
          <p className="notice-box mt-6 text-sm">{dict.common.plannedNotice}</p>
          <p className="mt-2 text-xs text-text-muted">
            {dict.common.lastUpdated}: {dict.common.lastUpdatedDate}
          </p>
        </>
      )}
    </header>
  );
}

export function ContentSections({
  sections,
}: {
  sections: ContentSection[];
}) {
  return (
    <div className="prose-content space-y-8">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
            {section.title}
          </h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          {section.list && (
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

export function PageFaqSection({
  faqs,
  title,
}: {
  faqs: Dictionary["prices"]["faqs"];
  title?: string;
}) {
  if (!faqs.length) return null;
  return <FAQ title={title ?? "FAQ"} items={faqs} />;
}

export function PricesPageContent({ dict }: { dict: Dictionary }) {
  const content = dict.prices;
  const locale = dict.locale;

  return (
    <>
      <div className="prose-content space-y-4">
        {content.leadParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>
            <LinkedProse text={paragraph} locale={locale} />
          </p>
        ))}
      </div>

      <section className="mt-10 min-w-0" id="tarieven">
        <h2 className="section-heading">{content.matrixTitle}</h2>
        <div className="mt-4">
          <RateMatrixTable matrix={content.rateMatrix} caption={content.matrixTitle} />
        </div>
        <p className="mt-4 text-sm text-text-muted">{content.matrixNote}</p>
        <p className="mt-4">
          <LinkedProse text={content.buyLinkParagraph} locale={locale} />
        </p>
      </section>

      <div className="prose-content mt-10 space-y-10">
        {content.categorySections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>
                <LinkedProse text={paragraph} locale={locale} />
              </p>
            ))}
            {section.list ? (
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {section.list.map((item) => (
                  <li key={item}>
                    <LinkedProse text={item} locale={locale} />
                  </li>
                ))}
              </ul>
            ) : null}
            {section.table && section.tableTitle ? (
              <div className="mt-5 max-w-md">
                <ComparisonTable
                  title={section.tableTitle}
                  rows={section.table}
                  categoryHeader={dict.common.tableCategory}
                  valueHeader={dict.common.tablePrice}
                />
              </div>
            ) : null}
            {section.linkParagraph ? (
              <p className="mt-4">
                <LinkedProse text={section.linkParagraph} locale={locale} />
              </p>
            ) : null}
          </section>
        ))}

        <section id={content.durationSection.id}>
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
            {content.durationSection.title}
          </h2>
          {content.durationSection.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>
              <LinkedProse text={paragraph} locale={locale} />
            </p>
          ))}
          {content.durationSection.list ? (
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {content.durationSection.list.map((item) => (
                <li key={item}>
                  <LinkedProse text={item} locale={locale} />
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <section id={content.whenSection.id}>
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
            {content.whenSection.title}
          </h2>
          {content.whenSection.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>
              <LinkedProse text={paragraph} locale={locale} />
            </p>
          ))}
        </section>
      </div>

      <section className="mt-10 min-w-0">
        <h2 className="section-heading">{content.vignettePagesTitle}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {vignetteProductPageKeys.map((key) => (
            <li key={key}>
              <Link
                href={getLocalizedPath(dict.locale, key)}
                className="panel-muted block p-4 no-underline hover:no-underline"
              >
                <span className="font-[family-name:var(--font-display)] font-bold tracking-tight text-ink">
                  {dict.nav[key]}
                </span>
                <span className="mt-1 block text-sm text-text-muted">
                  {dict[key].intro.slice(0, 120)}…
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 min-w-0">
        <h2 className="section-heading">{content.euroNormTitle}</h2>
        <div className="table-wrap">
          <table className="content-table">
            <thead>
              <tr>
                <th scope="col">{content.euroNormCategoryHeader}</th>
                <th scope="col">{content.euroNormDescriptionHeader}</th>
              </tr>
            </thead>
            <tbody>
              {content.euroNormItems.map((item) => (
                <tr key={item.norm}>
                  <td>{item.norm}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {content.backgroundSections.length > 0 ? (
        <div className="prose-content mt-10 space-y-8">
          <ContentSections sections={content.backgroundSections} />
        </div>
      ) : null}

      <div className="mt-12">
        <Newsletter
          locale={dict.locale}
          dict={dict}
          intent="prices"
          variant="inline"
          id="newsletter-prices"
        />
      </div>

      <PageFaqSection faqs={content.faqs} />
    </>
  );
}

export function ForeignPageContent({ dict }: { dict: Dictionary }) {
  const content = dict.foreign;
  return (
    <>
      <section className="mt-2">
        {content.countryTips.map((tip) => (
          <div
            key={tip.id}
            id={tip.id}
            className="panel-muted mb-6 scroll-mt-28 p-5"
          >
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
              {tip.country}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text">
              {tip.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <div className="mt-10">
        <ContentSections sections={content.sections} />
      </div>
      <div className="mt-12">
        <Newsletter
          locale={dict.locale}
          dict={dict}
          intent="foreign"
          variant="inline"
          id="newsletter-foreign"
        />
      </div>
      <PageFaqSection faqs={content.faqs} />
    </>
  );
}

export function ExemptionsPageContent({ dict }: { dict: Dictionary }) {
  const content = dict.exemptions;
  return (
    <>
      <ContentSections sections={content.sections} />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ComparisonTable
          title={content.exemptTableTitle}
          rows={content.exemptTable}
          categoryHeader={dict.common.tableCategory}
          valueHeader={dict.common.tablePrice}
        />
        <ComparisonTable
          title={content.requiredTableTitle}
          rows={content.notExemptTable}
          categoryHeader={dict.common.tableCategory}
          valueHeader={dict.common.tablePrice}
        />
      </div>
      <PageFaqSection faqs={content.faqs} />
      <div className="mt-12">
        <Newsletter
          locale={dict.locale}
          dict={dict}
          intent="default"
          variant="inline"
          id="newsletter-exemptions"
        />
      </div>
    </>
  );
}

export function FinesPageContent({ dict }: { dict: Dictionary }) {
  const content = dict.fines;
  return (
    <>
      <ContentSections sections={content.sections} />
      <div className="mt-10 max-w-md">
        <PricingTable
          rows={content.fineTable}
          caption={content.sections[0]?.title ?? dict.fines.title}
          categoryHeader={dict.common.tableCategory}
          valueHeader={dict.common.tablePrice}
        />
      </div>
      <PageFaqSection faqs={content.faqs} />
      <div className="mt-12">
        <Newsletter
          locale={dict.locale}
          dict={dict}
          intent="default"
          variant="inline"
          id="newsletter-fines"
        />
      </div>
    </>
  );
}

export function BuyPageContent({ dict }: { dict: Dictionary }) {
  const content = dict.buy;
  const officialSource = dict.sources[0];
  return (
    <>
      <p className="notice-box mb-8 text-sm">{content.independenceNotice}</p>
      <ContentSections sections={content.sections} />
      {officialSource ? (
        <p className="mt-8 text-sm">
          <strong>{content.officialSourceLabel}: </strong>
          <a
            href={officialSource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {officialSource.title}
          </a>
          {officialSource.description ? (
            <span className="text-text-muted"> — {officialSource.description}</span>
          ) : null}
        </p>
      ) : null}
      <p className="mt-2 text-xs text-text-muted">
        {dict.common.lastChecked}: {dict.common.lastUpdatedDate}
      </p>
      <section className="mt-10">
        <ol className="list-decimal space-y-3 pl-5 text-sm">
          {content.steps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              {" — "}
              {step.description}
            </li>
          ))}
        </ol>
      </section>
      <div className="mt-12">
        <Newsletter
          locale={dict.locale}
          dict={dict}
          intent="buy"
          variant="section"
          id="newsletter-buy"
        />
      </div>
      <PageFaqSection faqs={content.faqs} />
    </>
  );
}

export function TollsPageContent({ dict }: { dict: Dictionary }) {
  const content = dict.tolls;
  const locale = dict.locale;
  const summary = content.blocks.find((block) => block.type === "summary");
  const otherBlocks = content.blocks.filter((block) => block.type !== "summary");
  const [leadBlock, ...restBlocks] = otherBlocks;

  function renderBlock(
    block: (typeof otherBlocks)[number],
    spanFull = false,
  ) {
    if (block.type === "pricing") {
      return (
        <section
          key={block.id}
          id={block.id}
          className={spanFull ? "min-w-0 lg:col-span-2" : "min-w-0"}
        >
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
            {block.title}
          </h2>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>
              <LinkedProse text={paragraph} locale={locale} />
            </p>
          ))}
          <div className="mt-6 grid min-w-0 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {block.tables.map((table) => (
              <ComparisonTable
                key={table.title}
                title={table.title}
                rows={table.rows}
                categoryHeader={block.durationHeader}
                valueHeader={block.priceHeader}
              />
            ))}
          </div>
          <p className="mt-5">
            <LinkedProse text={block.linkParagraph} locale={locale} />
          </p>
          <p className="notice-box mt-4 text-sm">{block.notice}</p>
        </section>
      );
    }

    return (
      <section key={block.id} id={block.id} className="min-w-0">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
          {block.title}
        </h2>
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>
            <LinkedProse text={paragraph} locale={locale} />
          </p>
        ))}
        {block.list ? (
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {block.list.map((item) => (
              <li key={item}>
                <LinkedProse text={item} locale={locale} />
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    );
  }

  return (
    <>
      {leadBlock ? (
        <div className="prose-content mb-10 max-w-none">{renderBlock(leadBlock)}</div>
      ) : null}

      {summary && summary.type === "summary" ? (
        <aside className="panel-muted mb-10 border-l-4 border-accent p-5 sm:p-6">
          <p className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-ink">
            {summary.title}
          </p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {summary.items.map((item) => (
              <div key={item.label}>
                <dt className="font-semibold text-ink">{item.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-text-muted">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      ) : null}

      <div className="prose-content grid gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
        {restBlocks.map((block) =>
          renderBlock(block, block.type === "pricing"),
        )}
      </div>

      <div className="mt-12">
        <PageFaqSection faqs={content.faqs} title={content.faqTitle} />
      </div>

      <section className="mt-12">
        <h2 className="section-heading">{content.closing.title}</h2>
        <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            {content.closing.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-4 text-text-muted first:mt-0"
              >
                <LinkedProse text={paragraph} locale={locale} />
              </p>
            ))}
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-text">
              {content.closing.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-col gap-3 self-start rounded-[14px] border border-border-light bg-bg-surface p-5 shadow-[var(--shadow-soft)]">
            {content.closing.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={getLocalizedPath(locale, link.href)}
                  className="text-sm font-bold text-ink no-underline hover:text-accent-deep hover:underline"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-12">
        <Newsletter
          locale={locale}
          dict={dict}
          intent="default"
          variant="inline"
          id="newsletter-tolls"
        />
      </div>
    </>
  );
}

export function PrivacyPageContent({ dict }: { dict: Dictionary }) {
  const content = dict.privacy;
  return (
    <>
      <p className="mb-6 text-sm text-text-muted">
        {dict.common.lastUpdated}: {content.lastUpdated}
      </p>
      <ContentSections sections={content.sections} />
    </>
  );
}

export function VignetteProductPageContent({
  dict,
  pageKey,
}: {
  dict: Dictionary;
  pageKey: VignetteProductPageKey;
}) {
  const content = dict[pageKey];
  const relatedKeys = vignetteProductPageKeys.filter((key) => key !== pageKey);

  return (
    <>
      <ContentSections sections={content.sections} />
      <div className="mt-10 grid min-w-0 gap-8 lg:grid-cols-2">
        <ComparisonTable
          title={content.priceTableTitle}
          rows={content.priceTable}
          categoryHeader={dict.common.tableCategory}
          valueHeader={dict.common.tablePrice}
        />
        {content.compareTable && content.compareTableTitle && (
          <ComparisonTable
            title={content.compareTableTitle}
            rows={content.compareTable}
            categoryHeader={dict.common.tableCategory}
            valueHeader={dict.common.tablePrice}
          />
        )}
      </div>
      <section className="mt-10 min-w-0">
        <h2 className="section-heading">{content.relatedPagesTitle}</h2>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {relatedKeys.map((key) => (
            <li key={key}>
              <Link href={getLocalizedPath(dict.locale, key)} className="text-link">
                {dict.nav[key]} →
              </Link>
            </li>
          ))}
          <li>
            <Link href={getLocalizedPath(dict.locale, "prices")} className="text-link">
              {dict.nav.prices} →
            </Link>
          </li>
        </ul>
      </section>
      <PageFaqSection faqs={content.faqs} />
      <div className="mt-12">
        <Newsletter
          locale={dict.locale}
          dict={dict}
          intent="prices"
          variant="inline"
          id={`newsletter-${pageKey}`}
        />
      </div>
    </>
  );
}

export function NewsPageContent({
  dict,
  articles,
  locale,
}: {
  dict: Dictionary;
  articles: Article[];
  locale: Locale;
}) {
  return (
    <>
      <p className="notice-box mb-8 text-sm text-text-muted">{dict.news.sourceDisclaimer}</p>
      <NewsIndexContent articles={articles} locale={locale} dict={dict} />
      <div className="mt-12">
        <Newsletter
          locale={locale}
          dict={dict}
          intent="news"
          variant="inline"
          id="newsletter-news"
        />
      </div>
    </>
  );
}

function isVignetteProductPage(
  pageKey: PageKey,
): pageKey is VignetteProductPageKey {
  return (vignetteProductPageKeys as readonly string[]).includes(pageKey);
}

export function renderSubpageContent(
  pageKey: PageKey,
  dict: Dictionary,
  options?: { articles?: Article[]; locale?: Locale },
) {
  switch (pageKey) {
    case "prices":
      return <PricesPageContent dict={dict} />;
    case "foreign":
      return <ForeignPageContent dict={dict} />;
    case "exemptions":
      return <ExemptionsPageContent dict={dict} />;
    case "fines":
      return <FinesPageContent dict={dict} />;
    case "buy":
      return <BuyPageContent dict={dict} />;
    case "tolls":
      return <TollsPageContent dict={dict} />;
    case "privacy":
      return <PrivacyPageContent dict={dict} />;
    case "news":
      return (
        <NewsPageContent
          dict={dict}
          articles={options?.articles ?? []}
          locale={options?.locale ?? dict.locale}
        />
      );
    default:
      if (isVignetteProductPage(pageKey)) {
        return <VignetteProductPageContent dict={dict} pageKey={pageKey} />;
      }
      return null;
  }
}

export function getSubpageContent(pageKey: PageKey, dict: Dictionary) {
  if (isVignetteProductPage(pageKey)) {
    return {
      title: dict[pageKey].title,
      intro: dict[pageKey].intro,
      badge: undefined,
    };
  }

  switch (pageKey) {
    case "prices":
      return { title: dict.prices.title, intro: dict.prices.intro, badge: undefined };
    case "foreign":
      return { title: dict.foreign.title, intro: dict.foreign.intro, badge: undefined };
    case "exemptions":
      return { title: dict.exemptions.title, intro: dict.exemptions.intro, badge: undefined };
    case "fines":
      return { title: dict.fines.title, intro: dict.fines.intro, badge: undefined };
    case "buy":
      return { title: dict.buy.title, intro: dict.buy.intro, badge: dict.buy.statusBadge };
    case "tolls":
      return { title: dict.tolls.title, intro: dict.tolls.intro, badge: undefined };
    case "privacy":
      return { title: dict.privacy.title, intro: dict.privacy.intro, badge: undefined };
    case "news":
      return { title: dict.news.title, intro: dict.news.intro, badge: undefined };
    default:
      return null;
  }
}
