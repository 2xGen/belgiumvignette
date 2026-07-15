import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Daily Vignette Belgium 2027",
    intro:
      "The daily vignette is intended for short trips on Belgian main roads — for example a day trip, transit journey, or weekend visit. The rates below are based on published plans (March 2026) and may still change before introduction on 1 May 2027.",
    metaTitle: "Daily Vignette Belgium 2027 — €9 per day (concept price)",
    metaDescription:
      "Planned daily vignette for Belgium from €9 per day. For short trips on motorways and regional roads. Concept prices according to March 2026 plans — final rates may still change.",
    navLabel: "Daily vignette",
    sections: [
      {
        id: "what-is-daily",
        title: "What is the daily vignette?",
        paragraphs: [
          "According to the plans, the daily vignette provides 24 hours of access to the Belgian vignette network: motorways, motorway rings, and regional roads where 70 km/h or more applies.",
          "The system will be digital and linked to your licence plate — there will be no physical sticker on the windscreen.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Who is a daily vignette for?",
        paragraphs: [
          "A daily vignette suits occasional users: tourists, transit drivers, a single business trip, or a day of shopping across the border.",
          "If you drive through Belgium more often, a 10-day, monthly, or annual vignette is planned to be more cost-effective.",
        ],
      },
      {
        id: "concept-prices",
        title: "Concept prices — not final rates",
        paragraphs: [
          "All amounts on this page are based on announcements from March 2026. Final rates will only be set after approval by the regions and the European Commission.",
          "Always check official sources before your trip in May 2027.",
        ],
      },
    ],
    priceTableTitle: "Planned daily rate",
    priceTable: [{ label: "1 day", value: "€9" }],
    compareTableTitle: "Other short periods (for comparison)",
    compareTable: [
      { label: "10 days", value: "€12" },
      { label: "1 month", value: "€19" },
      { label: "2 months", value: "€30" },
    ],
    relatedPagesTitle: "Other vignette types",
    faqs: [
      {
        question: "Does the daily vignette cover one calendar day?",
        answer:
          "According to the plans, you buy a vignette for a chosen period of 24 hours or one calendar day — the exact rules will be announced when the sales system launches.",
      },
      {
        question: "Do foreign drivers also need a daily vignette?",
        answer:
          "Yes. EU rules require equal treatment. Foreign licence plates must also have a valid vignette on Belgian main roads according to the plans.",
      },
      {
        question: "Is €9 already final?",
        answer:
          "No. €9 is the planned concept rate from March 2026. Final prices may still be adjusted.",
      },
    ],
  },
  monthlyVignette: {
    title: "Monthly Vignette Belgium 2027",
    intro:
      "The monthly vignette is planned for drivers who use Belgian main roads for several weeks — for example temporary work, a holiday, or a longer stay. Rates are concept prices according to March 2026 plans.",
    metaTitle: "Monthly Vignette Belgium 2027 — from €19 per month (concept)",
    metaDescription:
      "Planned monthly vignette Belgium from €19 per month, 2 months €30. Concept prices for motorways and regional roads from 1 May 2027.",
    navLabel: "Monthly vignette",
    sections: [
      {
        id: "what-is-monthly",
        title: "What is the monthly vignette?",
        paragraphs: [
          "According to the plans, the monthly vignette provides access to the Belgian vignette network for approximately one calendar month.",
          "A two-month rate (€30) is also planned for slightly longer stays without buying an annual vignette straight away.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Who benefits from a monthly vignette?",
        paragraphs: [
          "Commuters temporarily working in Belgium, expats on a short assignment, or holidaymakers staying in the country for a month may benefit from a monthly or two-month vignette.",
          "For occasional use, a daily or 10-day vignette is cheaper; for permanent use, the annual vignette is more economical.",
        ],
      },
      {
        id: "concept-prices",
        title: "Concept prices",
        paragraphs: [
          "The amounts below are planned rates, not final legislation. They may still change before the start in May 2027.",
        ],
      },
    ],
    priceTableTitle: "Planned monthly rates",
    priceTable: [
      { label: "1 month", value: "€19" },
      { label: "2 months", value: "€30" },
    ],
    compareTableTitle: "Other durations (for comparison)",
    compareTable: [
      { label: "1 day", value: "€9" },
      { label: "10 days", value: "€12" },
    ],
    relatedPagesTitle: "Other vignette types",
    faqs: [
      {
        question: "What is the difference between 1 month and 2 months?",
        answer:
          "According to the plans, you can choose between a monthly vignette (€19) and a two-month vignette (€30). The two-month rate is more cost-effective per day if you stay longer.",
      },
      {
        question: "Is there a separate rate per emission standard for short vignettes?",
        answer:
          "For short periods (daily, monthly), fixed amounts are planned according to current plans. The annual vignette does depend on your vehicle's Euro emission standard.",
      },
      {
        question: "Are these prices final?",
        answer:
          "No. These are concept prices based on plans from March 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Annual Vignette Belgium 2027",
    intro:
      "The annual vignette is intended for regular users of Belgian main roads. The price depends on your vehicle's emission standard. The rates below are concept prices according to March 2026 plans.",
    metaTitle: "Annual Vignette Belgium 2027 — €90–€125 per year (concept)",
    metaDescription:
      "Planned annual vignette Belgium: €100 for Euro 4+, €90 electric, €125 older cars. Concept prices by emission standard from 1 May 2027.",
    navLabel: "Annual vignette",
    sections: [
      {
        id: "what-is-annual",
        title: "What is the annual vignette?",
        paragraphs: [
          "According to the plans, the annual vignette provides 12 months of access to motorways, motorway rings, and regional roads in Belgium.",
          "In Flanders, more than 97% of passenger cars are at least Euro 4 — for them, €100 per year is planned.",
        ],
      },
      {
        id: "emission-bands",
        title: "Prices by emission standard",
        paragraphs: [
          "Unlike short vignettes, the annual rate is planned to vary based on your vehicle's Euro emission standard.",
          "Fully electric and hydrogen vehicles receive the lowest rate (€90). Older vehicles up to Euro 3 pay the highest amount (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Concept prices",
        paragraphs: [
          "These rates are based on announcements from March 2026 and may still be adjusted. Final amounts will follow after approval by the regions and Europe.",
        ],
      },
    ],
    priceTableTitle: "Annual vignette",
    priceTable: [
      { label: "Euro 4 and higher", value: "€100 / year", note: "97%+ of Flemish cars" },
      { label: "Electric / hydrogen", value: "€90 / year" },
      { label: "Older cars (up to Euro 3)", value: "€125 / year" },
    ],
    compareTableTitle: "Short periods (for comparison)",
    compareTable: [
      { label: "1 day", value: "€9" },
      { label: "10 days", value: "€12" },
      { label: "1 month", value: "€19" },
      { label: "2 months", value: "€30" },
    ],
    relatedPagesTitle: "Other vignette types",
    faqs: [
      {
        question: "Do Belgians also need to buy an annual vignette?",
        answer:
          "Yes. EU rules prohibit a vignette only for foreigners. Belgians pay too, but Flanders plans compensation through reform of vehicle tax.",
      },
      {
        question: "Does €100 apply to all cars?",
        answer:
          "No. Only vehicles with at least Euro 4. Electric cars pay €90 according to the plans; older cars up to Euro 3 pay €125.",
      },
      {
        question: "Are these final prices?",
        answer:
          "No. These are planned concept rates that may still change.",
      },
    ],
  },
  electricVignette: {
    title: "Electric Vignette Belgium 2027",
    intro:
      "Owners of fully electric and hydrogen vehicles pay the lowest annual rate according to the plans: €90. This is a concept price based on announcements from March 2026 — not a final rate.",
    metaTitle: "Electric Vignette Belgium 2027 — €90 per year (concept)",
    metaDescription:
      "Planned vignette for electric cars in Belgium: €90 per year, the lowest annual rate. Concept price according to March 2026 plans. Compare with other emission standards.",
    navLabel: "Electric vignette",
    sections: [
      {
        id: "ev-rate",
        title: "Lowest annual rate for EVs",
        paragraphs: [
          "Fully electric and hydrogen vehicles receive the lowest annual vignette according to the plans: €90 per year.",
          "That is €10 less than most Euro 4+ cars (€100) and €35 less than older vehicles (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "Why do EV drivers still pay?",
        paragraphs: [
          "Electric vehicles use the roads just like other cars. The lower rate rewards lower emissions, but the vignette remains mandatory according to the plans.",
          "Flemish minister Ben Weyts emphasised that €90 is significantly less than other categories — but not zero.",
        ],
      },
      {
        id: "concept-prices",
        title: "Concept prices",
        paragraphs: [
          "€90 is a planned concept rate. Final prices and any changes will only be announced before the start in May 2027.",
        ],
      },
    ],
    priceTableTitle: "Electric / hydrogen — annual vignette",
    priceTable: [{ label: "Electric / hydrogen", value: "€90 / year" }],
    compareTableTitle: "Other annual rates (for comparison)",
    compareTable: [
      { label: "Euro 4 and higher", value: "€100 / year", note: "97%+ of Flemish cars" },
      { label: "Older cars (up to Euro 3)", value: "€125 / year" },
    ],
    relatedPagesTitle: "Other vignette types",
    faqs: [
      {
        question: "Does €90 also apply to plug-in hybrids?",
        answer:
          "No. According to the plans, the EV rate applies to fully electric and hydrogen vehicles. Plug-in hybrids fall under the emission standard of their combustion engine.",
      },
      {
        question: "Is there a discount for EVs on short vignettes?",
        answer:
          "For daily, monthly, and short vignettes, fixed amounts are planned according to current plans, regardless of powertrain. The lower EV rate applies to the annual vignette.",
      },
      {
        question: "Is €90 final?",
        answer:
          "No. It is a concept price based on plans from March 2026.",
      },
    ],
  },
};

export default pages;
