export type CountryCode =
  | "AT"
  | "BE"
  | "BG"
  | "CH"
  | "CZ"
  | "DE"
  | "ES"
  | "FR"
  | "HU"
  | "IT"
  | "LU"
  | "MD"
  | "NL"
  | "PL"
  | "PT"
  | "RO"
  | "SI"
  | "SK"
  | "HR";

export type RoadChargeType =
  | "vignette"
  | "distance_toll"
  | "no_general_vignette"
  | "planned";

export type AppliesTo =
  | "designated_motorways"
  | "road_network"
  | "route_specific"
  | "none"
  | "planned_motorways";

export interface CountryDef {
  code: CountryCode;
  roadChargeType: RoadChargeType;
  appliesTo: AppliesTo;
  vehicleClass: "car_under_3_5t";
  /** Awin affiliate URL when Vintrica sells for this country; otherwise null. */
  affiliateUrl: string | null;
  lastVerified: string | null;
  /** Shown in the reference vignette table. */
  inVignetteTable: boolean;
  /** Selectable as From / To in the MVP. */
  selectable: boolean;
}

const AWIN_MID = "63928";
const AWIN_AFF = "3108448";

function awin(destinationUrl: string): string {
  return `https://www.awin1.com/cread.php?awinmid=${AWIN_MID}&awinaffid=${AWIN_AFF}&ued=${encodeURIComponent(destinationUrl)}`;
}

export const countries: Record<CountryCode, CountryDef> = {
  AT: {
    code: "AT",
    roadChargeType: "vignette",
    appliesTo: "designated_motorways",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: null,
    lastVerified: null,
    inVignetteTable: true,
    selectable: true,
  },
  BE: {
    code: "BE",
    roadChargeType: "planned",
    appliesTo: "planned_motorways",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: null,
    lastVerified: null,
    inVignetteTable: true,
    selectable: true,
  },
  BG: {
    code: "BG",
    roadChargeType: "vignette",
    appliesTo: "designated_motorways",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/e-vignette/bulgaria/"),
    lastVerified: null,
    inVignetteTable: true,
    selectable: true,
  },
  CH: {
    code: "CH",
    roadChargeType: "vignette",
    appliesTo: "designated_motorways",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/e-vignette/switzerland/"),
    lastVerified: null,
    inVignetteTable: true,
    selectable: true,
  },
  CZ: {
    code: "CZ",
    roadChargeType: "vignette",
    appliesTo: "designated_motorways",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/e-vignette/czech-republic/"),
    lastVerified: null,
    inVignetteTable: true,
    selectable: true,
  },
  DE: {
    code: "DE",
    roadChargeType: "no_general_vignette",
    appliesTo: "none",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: null,
    lastVerified: null,
    inVignetteTable: false,
    selectable: true,
  },
  ES: {
    code: "ES",
    roadChargeType: "distance_toll",
    appliesTo: "route_specific",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/tollbox/spain/"),
    lastVerified: null,
    inVignetteTable: false,
    selectable: true,
  },
  FR: {
    code: "FR",
    roadChargeType: "distance_toll",
    appliesTo: "route_specific",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/tollbox/france/"),
    lastVerified: null,
    inVignetteTable: false,
    selectable: true,
  },
  HU: {
    code: "HU",
    roadChargeType: "vignette",
    appliesTo: "designated_motorways",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/e-vignette/hungary/"),
    lastVerified: null,
    inVignetteTable: true,
    selectable: true,
  },
  IT: {
    code: "IT",
    roadChargeType: "distance_toll",
    appliesTo: "route_specific",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/tollbox/italy/"),
    lastVerified: null,
    inVignetteTable: false,
    selectable: true,
  },
  LU: {
    code: "LU",
    roadChargeType: "no_general_vignette",
    appliesTo: "none",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: null,
    lastVerified: null,
    inVignetteTable: false,
    selectable: true,
  },
  MD: {
    code: "MD",
    roadChargeType: "vignette",
    appliesTo: "designated_motorways",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: null,
    lastVerified: null,
    inVignetteTable: true,
    selectable: false,
  },
  NL: {
    code: "NL",
    roadChargeType: "no_general_vignette",
    appliesTo: "none",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: null,
    lastVerified: null,
    inVignetteTable: false,
    selectable: true,
  },
  PL: {
    code: "PL",
    roadChargeType: "distance_toll",
    appliesTo: "route_specific",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: null,
    lastVerified: null,
    inVignetteTable: false,
    selectable: true,
  },
  PT: {
    code: "PT",
    roadChargeType: "distance_toll",
    appliesTo: "route_specific",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/tollbox/portugal/"),
    lastVerified: null,
    inVignetteTable: false,
    selectable: false,
  },
  RO: {
    code: "RO",
    roadChargeType: "vignette",
    appliesTo: "road_network",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/e-vignette/romania/"),
    lastVerified: null,
    inVignetteTable: true,
    selectable: true,
  },
  SI: {
    code: "SI",
    roadChargeType: "vignette",
    appliesTo: "designated_motorways",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/e-vignette/slovenia/"),
    lastVerified: null,
    inVignetteTable: true,
    selectable: true,
  },
  SK: {
    code: "SK",
    roadChargeType: "vignette",
    appliesTo: "designated_motorways",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/e-vignette/slovakia/"),
    lastVerified: null,
    inVignetteTable: true,
    selectable: true,
  },
  HR: {
    code: "HR",
    roadChargeType: "distance_toll",
    appliesTo: "route_specific",
    vehicleClass: "car_under_3_5t",
    affiliateUrl: awin("https://www.vintrica.com/en/tollbox/croatia/"),
    lastVerified: null,
    inVignetteTable: false,
    selectable: false,
  },
};

/** Selectable From/To countries for the MVP. */
export const selectableCountries = (
  Object.values(countries) as CountryDef[]
).filter((c) => c.selectable);

/** Countries shown in the vignette-systems reference table. */
export const vignetteTableCountries = (
  Object.values(countries) as CountryDef[]
).filter((c) => c.inVignetteTable);

/**
 * Curated typical corridors involving Belgium.
 * Keys are `FROM-TO` in ISO order of the journey.
 */
const curatedRoutes: Record<string, CountryCode[]> = {
  // France ↔ Central / East via Belgium
  "FR-CZ": ["FR", "BE", "DE", "CZ"],
  "FR-AT": ["FR", "BE", "DE", "AT"],
  "FR-HU": ["FR", "BE", "DE", "AT", "HU"],
  "FR-SK": ["FR", "BE", "DE", "AT", "SK"],
  "FR-SI": ["FR", "BE", "DE", "AT", "SI"],
  "FR-RO": ["FR", "BE", "DE", "AT", "HU", "RO"],
  "FR-BG": ["FR", "BE", "DE", "AT", "HU", "RO", "BG"],
  "FR-PL": ["FR", "BE", "DE", "PL"],
  "FR-CH": ["FR", "BE", "DE", "CH"],
  "FR-IT": ["FR", "BE", "DE", "AT", "IT"],
  "FR-ES": ["FR", "ES"],
  "FR-NL": ["FR", "BE", "NL"],
  "FR-DE": ["FR", "BE", "DE"],
  "FR-LU": ["FR", "BE", "LU"],
  "FR-BE": ["FR", "BE"],

  // Netherlands
  "NL-CZ": ["NL", "BE", "DE", "CZ"],
  "NL-AT": ["NL", "BE", "DE", "AT"],
  "NL-HU": ["NL", "BE", "DE", "AT", "HU"],
  "NL-SK": ["NL", "BE", "DE", "AT", "SK"],
  "NL-SI": ["NL", "BE", "DE", "AT", "SI"],
  "NL-RO": ["NL", "BE", "DE", "AT", "HU", "RO"],
  "NL-BG": ["NL", "BE", "DE", "AT", "HU", "RO", "BG"],
  "NL-PL": ["NL", "DE", "PL"],
  "NL-CH": ["NL", "BE", "DE", "CH"],
  "NL-IT": ["NL", "BE", "DE", "AT", "IT"],
  "NL-ES": ["NL", "BE", "FR", "ES"],
  "NL-FR": ["NL", "BE", "FR"],
  "NL-DE": ["NL", "DE"],
  "NL-LU": ["NL", "BE", "LU"],
  "NL-BE": ["NL", "BE"],

  // Germany
  "DE-CZ": ["DE", "CZ"],
  "DE-AT": ["DE", "AT"],
  "DE-HU": ["DE", "AT", "HU"],
  "DE-SK": ["DE", "AT", "SK"],
  "DE-SI": ["DE", "AT", "SI"],
  "DE-RO": ["DE", "AT", "HU", "RO"],
  "DE-BG": ["DE", "AT", "HU", "RO", "BG"],
  "DE-PL": ["DE", "PL"],
  "DE-CH": ["DE", "CH"],
  "DE-IT": ["DE", "AT", "IT"],
  "DE-ES": ["DE", "BE", "FR", "ES"],
  "DE-FR": ["DE", "BE", "FR"],
  "DE-NL": ["DE", "NL"],
  "DE-LU": ["DE", "LU"],
  "DE-BE": ["DE", "BE"],

  // Luxembourg
  "LU-CZ": ["LU", "DE", "CZ"],
  "LU-AT": ["LU", "DE", "AT"],
  "LU-HU": ["LU", "DE", "AT", "HU"],
  "LU-CH": ["LU", "DE", "CH"],
  "LU-IT": ["LU", "DE", "AT", "IT"],
  "LU-ES": ["LU", "BE", "FR", "ES"],
  "LU-FR": ["LU", "BE", "FR"],
  "LU-NL": ["LU", "BE", "NL"],
  "LU-DE": ["LU", "DE"],
  "LU-BE": ["LU", "BE"],
  "LU-PL": ["LU", "DE", "PL"],

  // Belgium outbound
  "BE-FR": ["BE", "FR"],
  "BE-NL": ["BE", "NL"],
  "BE-DE": ["BE", "DE"],
  "BE-LU": ["BE", "LU"],
  "BE-CH": ["BE", "DE", "CH"],
  "BE-AT": ["BE", "DE", "AT"],
  "BE-CZ": ["BE", "DE", "CZ"],
  "BE-SK": ["BE", "DE", "AT", "SK"],
  "BE-SI": ["BE", "DE", "AT", "SI"],
  "BE-HU": ["BE", "DE", "AT", "HU"],
  "BE-IT": ["BE", "DE", "AT", "IT"],
  "BE-ES": ["BE", "FR", "ES"],
  "BE-PL": ["BE", "DE", "PL"],
  "BE-RO": ["BE", "DE", "AT", "HU", "RO"],
  "BE-BG": ["BE", "DE", "AT", "HU", "RO", "BG"],

  // Switzerland / Austria / East ↔ West via Belgium when relevant
  "CH-FR": ["CH", "FR"],
  "CH-NL": ["CH", "DE", "BE", "NL"],
  "CH-BE": ["CH", "DE", "BE"],
  "CH-ES": ["CH", "FR", "ES"],
  "AT-FR": ["AT", "DE", "BE", "FR"],
  "AT-NL": ["AT", "DE", "BE", "NL"],
  "AT-BE": ["AT", "DE", "BE"],
  "AT-ES": ["AT", "DE", "BE", "FR", "ES"],
  "CZ-FR": ["CZ", "DE", "BE", "FR"],
  "CZ-NL": ["CZ", "DE", "BE", "NL"],
  "CZ-BE": ["CZ", "DE", "BE"],
  "CZ-ES": ["CZ", "DE", "BE", "FR", "ES"],
  "HU-FR": ["HU", "AT", "DE", "BE", "FR"],
  "HU-NL": ["HU", "AT", "DE", "BE", "NL"],
  "HU-BE": ["HU", "AT", "DE", "BE"],
  "SK-BE": ["SK", "AT", "DE", "BE"],
  "SI-BE": ["SI", "AT", "DE", "BE"],
  "RO-BE": ["RO", "HU", "AT", "DE", "BE"],
  "BG-BE": ["BG", "RO", "HU", "AT", "DE", "BE"],
  "PL-BE": ["PL", "DE", "BE"],
  "PL-FR": ["PL", "DE", "BE", "FR"],
  "PL-NL": ["PL", "DE", "NL"],
  "IT-BE": ["IT", "AT", "DE", "BE"],
  "IT-FR": ["IT", "FR"],
  "IT-NL": ["IT", "AT", "DE", "BE", "NL"],
  "ES-BE": ["ES", "FR", "BE"],
  "ES-NL": ["ES", "FR", "BE", "NL"],
  "ES-DE": ["ES", "FR", "BE", "DE"],
};

export function resolveRoute(
  from: CountryCode,
  to: CountryCode,
): { path: CountryCode[]; curated: boolean } {
  if (from === to) {
    return { path: [from], curated: true };
  }

  const forward = curatedRoutes[`${from}-${to}`];
  if (forward) return { path: forward, curated: true };

  const reverse = curatedRoutes[`${to}-${from}`];
  if (reverse) return { path: [...reverse].reverse(), curated: true };

  // Fallback: insert Belgium when neither end is Belgium.
  if (from !== "BE" && to !== "BE") {
    return { path: [from, "BE", to], curated: false };
  }

  return { path: [from, to], curated: false };
}

export function affiliateCountriesOnRoute(path: CountryCode[]): CountryDef[] {
  return path
    .map((code) => countries[code])
    .filter((c) => c.affiliateUrl !== null);
}
