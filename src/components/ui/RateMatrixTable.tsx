import type { RateMatrix } from "@/lib/i18n/types";

export function RateMatrixTable({
  matrix,
  caption,
}: {
  matrix: RateMatrix;
  caption?: string;
}) {
  return (
    <div className="table-wrap">
      <table className="content-table rate-matrix-table">
        {(caption || matrix.title) && (
          <caption className="sr-only">{caption ?? matrix.title}</caption>
        )}
        <thead>
          <tr>
            <th scope="col">{matrix.vehicleHeader}</th>
            <th scope="col" className="text-right">
              {matrix.dayHeader}
            </th>
            <th scope="col" className="text-right">
              {matrix.tenDaysHeader}
            </th>
            <th scope="col" className="text-right">
              {matrix.monthHeader}
            </th>
            <th scope="col" className="text-right">
              {matrix.twoMonthsHeader}
            </th>
            <th scope="col" className="text-right">
              {matrix.yearHeader}
            </th>
          </tr>
        </thead>
        <tbody>
          {matrix.rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className="font-semibold text-ink">
                {row.label}
              </th>
              <td className="text-right font-[family-name:var(--font-display)] font-bold text-ink">
                {row.day}
              </td>
              <td className="text-right font-[family-name:var(--font-display)] font-bold text-ink">
                {row.tenDays}
              </td>
              <td className="text-right font-[family-name:var(--font-display)] font-bold text-ink">
                {row.month}
              </td>
              <td className="text-right font-[family-name:var(--font-display)] font-bold text-ink">
                {row.twoMonths}
              </td>
              <td className="text-right font-[family-name:var(--font-display)] font-bold text-ink">
                {row.year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
