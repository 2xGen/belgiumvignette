import type { TimelineItem } from "@/lib/i18n/types";

export default function Timeline({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) {
  return (
    <section className="py-8">
      <h2 className="section-heading">{title}</h2>
      <ol className="list-none space-y-4 pl-0">
        {items.map((item) => (
          <li key={item.date} className="border-l-2 border-border pl-4">
            <p className="text-sm font-semibold text-text">
              <time dateTime={item.date}>{item.date}</time>
              {" — "}
              {item.title}
            </p>
            <p className="mt-1 text-sm text-text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
