import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { HomeIntentSection } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/routes";

export function HomeOverview({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="py-10 sm:py-12">
      <h2 className="section-heading max-w-4xl">{title}</h2>
      <div className="prose-content mt-5 grid gap-4 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export function HomeIntentSections({
  sections,
  locale,
}: {
  sections: HomeIntentSection[];
  locale: Locale;
}) {
  if (!sections.length) return null;

  return (
    <div className="grid gap-10 py-4 sm:py-6 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="min-w-0">
          <h2 className="section-heading">{section.title}</h2>
          <div className="prose-content mt-4 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          {section.link ? (
            <p className="mt-4">
              <Link
                href={getLocalizedPath(locale, section.link.href)}
                className="text-sm font-bold text-ink no-underline hover:text-accent-deep hover:underline"
              >
                {section.link.label} →
              </Link>
            </p>
          ) : null}
        </section>
      ))}
    </div>
  );
}
