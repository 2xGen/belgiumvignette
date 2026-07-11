import type { SourceLink } from "@/lib/i18n/types";

export default function Sources({
  title,
  links,
}: {
  title: string;
  links: SourceLink[];
}) {
  return (
    <section className="py-8">
      <h2 className="section-heading">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {link.title}
            </a>
            {link.description && (
              <span className="text-text-muted"> — {link.description}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
