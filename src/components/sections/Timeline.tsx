import type { TimelineItem } from "@/lib/i18n/types";

export default function Timeline({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) {
  return (
    <section className="py-12">
      <h2 className="section-heading">{title}</h2>
      <ol className="relative mt-8 list-none space-y-0 border-l-2 border-border pl-0">
        {items.map((item) => (
          <li key={item.date} className="relative py-4 pl-8">
            <span
              className="absolute -left-[9px] top-6 h-4 w-4 rounded-full border-2 border-ink bg-accent"
              aria-hidden
            />
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-deep">
              <time dateTime={item.date}>{item.date}</time>
            </p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-base font-bold text-ink">
              {item.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
