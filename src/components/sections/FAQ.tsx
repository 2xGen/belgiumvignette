import type { FaqItem } from "@/lib/i18n/types";

export default function FAQ({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="py-8">
      <h2 className="section-heading">{title}</h2>
      <div className="divide-y divide-border-light border border-border">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-text marker:content-none [&::-webkit-details-marker]:hidden">
              {item.question}
            </summary>
            <div className="border-t border-border-light bg-bg-muted px-4 py-3 text-sm text-text">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
