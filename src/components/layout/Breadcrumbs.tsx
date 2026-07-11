import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 && (
                <span className="text-border" aria-hidden>
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-text" : ""}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="text-link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
