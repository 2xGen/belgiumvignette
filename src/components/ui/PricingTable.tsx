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
    <div className="table-wrap">
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
                  <span className="ml-1 block text-xs text-text-muted sm:inline">
                    ({row.note})
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
    <div className="min-w-0">
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
