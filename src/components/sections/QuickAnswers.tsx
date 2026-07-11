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
    <section className="py-8">
      <dl className="grid gap-6 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="panel-muted p-4">
            <dt className="font-serif font-bold text-text">{item.title}</dt>
            <dd className="mt-2 text-sm text-text">{item.summary}</dd>
            {item.href && (
              <dd className="mt-2 text-sm">
                <Link href={getLocalizedPath(locale, item.href)} className="text-link">
                  {readMore}
                </Link>
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}
