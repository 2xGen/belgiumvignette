import type { TableRow } from "@/lib/i18n/types";

export function PricingTable({
  rows,
  caption,
  categoryHeader,
  valueHeader,
}: {
  rows: TableRow[];
  caption?: string;
  categoryHeader: string;
  valueHeader: string;
}) {
  return (
    <table className="content-table">
      {caption && <caption className="sr-only">{caption}</caption>}
      <thead>
        <tr>
          <th scope="col">{categoryHeader}</th>
          <th scope="col">{valueHeader}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <td>{row.label}</td>
            <td>
              {row.value}
              {row.note && (
                <span className="ml-1 text-xs text-text-muted">({row.note})</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ComparisonTable({
  title,
  rows,
  categoryHeader,
  valueHeader,
}: {
  title: string;
  rows: TableRow[];
  categoryHeader: string;
  valueHeader: string;
}) {
  return (
    <div>
      <h3 className="mb-2 font-serif text-lg font-bold text-text">{title}</h3>
      <PricingTable
        rows={rows}
        caption={title}
        categoryHeader={categoryHeader}
        valueHeader={valueHeader}
      />
    </div>
  );
}
