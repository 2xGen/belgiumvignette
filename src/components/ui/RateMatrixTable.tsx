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
            <th scope="col">{matrix.dayHeader}</th>
            <th scope="col">{matrix.tenDaysHeader}</th>
            <th scope="col">{matrix.monthHeader}</th>
            <th scope="col">{matrix.twoMonthsHeader}</th>
            <th scope="col">{matrix.yearHeader}</th>
          </tr>
        </thead>
        <tbody>
          {matrix.rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.day}</td>
              <td>{row.tenDays}</td>
              <td>{row.month}</td>
              <td>{row.twoMonths}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
