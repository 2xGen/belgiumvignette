import type { FaqItem } from "@/lib/i18n/types";

export default function FAQ({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="py-12">
      <h2 className="section-heading">{title}</h2>
      <div className="mt-6 overflow-hidden rounded-[14px] border border-border-light bg-bg-surface shadow-[var(--shadow-soft)]">
        {items.map((item, index) => (
          <details
            key={item.question}
            className={`group ${index > 0 ? "border-t border-border-light" : ""}`}
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-ink marker:content-none transition-colors hover:bg-bg-muted [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bg-muted text-sm text-text-muted transition group-open:bg-accent group-open:text-ink"
                  aria-hidden
                >
                  +
                </span>
              </span>
            </summary>
            <div className="border-t border-border-light bg-bg-muted/70 px-5 py-4 text-sm leading-relaxed text-text">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
