import type { RateMatrix } from "@/lib/i18n/types";

/** Official published rates (Vlaanderen). Same numbers in every locale. */
export const RATE_VALUES = {
  euro03: {
    day: "€11,25",
    tenDays: "€15",
    month: "€23,75",
    twoMonths: "€37,50",
    year: "€125",
  },
  euro4: {
    day: "€9",
    tenDays: "€12",
    month: "€19",
    twoMonths: "€30",
    year: "€100",
  },
  zeroEmission: {
    day: "€8,10",
    tenDays: "€10,80",
    month: "€17,10",
    twoMonths: "€27",
    year: "€90",
  },
} as const;

export function buildRateMatrix(labels: {
  vehicleHeader: string;
  dayHeader: string;
  tenDaysHeader: string;
  monthHeader: string;
  twoMonthsHeader: string;
  yearHeader: string;
  euro03: string;
  euro4: string;
  zeroEmission: string;
  title?: string;
}): RateMatrix {
  return {
    title: labels.title,
    vehicleHeader: labels.vehicleHeader,
    dayHeader: labels.dayHeader,
    tenDaysHeader: labels.tenDaysHeader,
    monthHeader: labels.monthHeader,
    twoMonthsHeader: labels.twoMonthsHeader,
    yearHeader: labels.yearHeader,
    rows: [
      { label: labels.euro03, ...RATE_VALUES.euro03 },
      { label: labels.euro4, ...RATE_VALUES.euro4 },
      { label: labels.zeroEmission, ...RATE_VALUES.zeroEmission },
    ],
  };
}
