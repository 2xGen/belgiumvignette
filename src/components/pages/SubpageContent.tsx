import type { Dictionary } from "@/lib/i18n/types";
import type { PageKey } from "@/lib/routes";
import FAQ from "@/components/sections/FAQ";
import { PricingTable, ComparisonTable } from "@/components/ui/PricingTable";

export function PageHero({
  title,
  intro,
  badge,
  dict,
}: {
  title: string;
  intro: string;
  badge?: string;
  dict: Dictionary;
}) {
  return (
    <header className="mb-8">
      {badge && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">
          {badge}
        </p>
      )}
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-4 text-text">{intro}</p>
      <p className="notice-box mt-4 text-sm">{dict.common.plannedNotice}</p>
      <p className="mt-2 text-xs text-text-muted">
        {dict.common.lastUpdated}: {dict.common.lastUpdatedDate}
      </p>
    </header>
  );
}

export function ContentSections({
  sections,
}: {
  sections: Dictionary["prices"]["sections"];
}) {
  return (
    <div className="prose-content space-y-8">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="mb-3 font-serif text-xl font-bold">{section.title}</h2>
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
  return (
    <>
      <ContentSections sections={content.sections} />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ComparisonTable
          title={content.sections[0]?.title ?? ""}
          rows={content.annualTable}
          categoryHeader={dict.common.tableCategory}
          valueHeader={dict.common.tablePrice}
        />
        <ComparisonTable
          title={content.sections[1]?.title ?? ""}
          rows={content.shortTermTable}
          categoryHeader={dict.common.tableCategory}
          valueHeader={dict.common.tablePrice}
        />
      </div>
      <section className="mt-10">
        <h2 className="section-heading">{content.euroNormTitle}</h2>
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
      </section>
      <PageFaqSection faqs={content.faqs} />
    </>
  );
}

export function ForeignPageContent({ dict }: { dict: Dictionary }) {
  const content = dict.foreign;
  return (
    <>
      <ContentSections sections={content.sections} />
      <section className="mt-10">
        {content.countryTips.map((tip) => (
          <div key={tip.country} className="panel-muted mb-6 p-4">
            <h3 className="font-serif font-bold">{tip.country}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {tip.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
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
    </>
  );
}

export function BuyPageContent({ dict }: { dict: Dictionary }) {
  const content = dict.buy;
  return (
    <>
      <ContentSections sections={content.sections} />
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
      <PageFaqSection faqs={content.faqs} />
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

export function renderSubpageContent(pageKey: PageKey, dict: Dictionary) {
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
    case "privacy":
      return <PrivacyPageContent dict={dict} />;
    default:
      return null;
  }
}

export function getSubpageContent(pageKey: PageKey, dict: Dictionary) {
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
    case "privacy":
      return { title: dict.privacy.title, intro: dict.privacy.intro, badge: undefined };
    default:
      return null;
  }
}
