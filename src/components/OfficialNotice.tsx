import type { Dictionary } from "@/lib/i18n/types";

export default function OfficialNotice({
  dict,
  className = "",
}: {
  dict: Dictionary;
  className?: string;
}) {
  const notice = dict.common.officialNotice;
  return (
    <aside
      className={`rounded-[16px] border border-border-light bg-bg-surface p-5 shadow-[var(--shadow-soft)] sm:p-6 [border-left:4px_solid_var(--accent)] ${className}`.trim()}
      aria-labelledby="official-notice-title"
    >
      <h2
        id="official-notice-title"
        className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-ink sm:text-lg"
      >
        {notice.title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-text-muted">
        <p className="font-semibold text-ink">{notice.provisionalNote}</p>
        {notice.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <a
            href={notice.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-2 hover:text-accent-deep"
          >
            {notice.sourceLabel}
          </a>
        </p>
      </div>
    </aside>
  );
}
