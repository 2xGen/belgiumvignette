import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { QuickAnswer } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/routes";

export default function QuickAnswers({
  items,
  locale,
  readMore,
}: {
  items: QuickAnswer[];
  locale: Locale;
  readMore: string;
}) {
  return (
    <section className="py-12">
      <dl className="grid gap-4 sm:grid-cols-3">
        {items.map((item, index) => (
          <div key={item.title} className="panel-muted p-6">
            <dt className="flex items-start justify-between gap-3">
              <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-ink">
                {item.title}
              </span>
              <span className="font-[family-name:var(--font-display)] text-sm font-bold text-accent-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
            </dt>
            <dd className="mt-3 text-sm leading-relaxed text-text-muted">
              {item.summary}
            </dd>
            {item.href && (
              <dd className="mt-4">
                <Link
                  href={getLocalizedPath(locale, item.href)}
                  className="text-sm font-bold text-ink no-underline hover:text-accent-deep hover:underline"
                >
                  {readMore} →
                </Link>
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}
