import type { Dictionary } from "../types";

export const enTolls: Dictionary["tolls"] = {
  title: "Tolls in Belgium: paid motorways and the 2027 vignette",
  intro:
    "Driving to Belgium by car? Find out whether Belgian motorways are tolled, how the planned 2027 road vignette will work, and which rates may apply to your vehicle.",
  blocks: [
    {
      type: "section",
      id: "paid-motorways",
      title: "Are motorways paid in Belgium?",
      paragraphs: [
        "For passenger cars, Belgium currently does not use a general motorway vignette system like Austria or Switzerland.",
        "That is expected to change in 2027.",
        "Belgium plans to introduce a digital road vignette from 1 May 2027 for vehicles using motorways and regional roads covered by the scheme. It would apply to Belgian vehicles and foreign-registered vehicles alike.",
        "If you plan to drive in Belgium after that date, see our full guide to the [[home|Belgium vignette 2027]].",
      ],
    },
    {
      type: "summary",
      title: "In brief",
      items: [
        {
          label: "Today",
          value: "No general road vignette for passenger cars.",
        },
        {
          label: "From 1 May 2027",
          value: "A digital vignette is planned.",
        },
        {
          label: "Vehicles covered",
          value: "Motorised vehicles with at least four wheels up to 3.5 tonnes.",
        },
        {
          label: "Foreign cars",
          value: "Also covered.",
        },
        {
          label: "Motorcycles",
          value: "Not covered under the obligation as currently planned.",
        },
        {
          label: "Purchase",
          value: "Online, with sales expected to open from 1 March 2027.",
        },
      ],
    },
    {
      type: "section",
      id: "toll-or-vignette",
      title: "Toll or vignette: how will the Belgian system work?",
      paragraphs: [
        "The planned Belgian system is not a classic toll where you pay at each barrier.",
        "It is a road vignette that grants access to covered roads for a set period.",
        "Unlike a sticker for the windscreen, the Belgian vignette will be digital and linked to the vehicle’s number plate.",
        "You will not need a physical sticker. When buying, you must enter the plate correctly.",
        "For how the new system works, see our guide to the [[home|Belgium road vignette]].",
      ],
    },
    {
      type: "section",
      id: "covered-roads",
      title: "Which roads will be paid in Belgium in 2027?",
      paragraphs: [
        "The vignette is planned for use of Belgian motorways and covered regional roads.",
        "Drivers who stay only on local roads should not need a vignette.",
        "Anyone crossing Belgium on motorways — for example towards France, the Netherlands, Germany or Luxembourg — will need to account for the new obligation once it takes effect.",
        "Practical details and the exact road network may still be clarified before launch.",
      ],
    },
    {
      type: "pricing",
      id: "prices",
      title: "What will Belgian tolls cost?",
      paragraphs: [
        "There should not be a single price per journey. Drivers buy a vignette valid for a chosen period.",
        "Published rates depend on the vehicle’s Euro emission standard and the duration chosen.",
      ],
      durationHeader: "Duration",
      priceHeader: "Rate",
      tables: [
        {
          title: "Planned rates for Euro 4 and above",
          rows: [
            { label: "1 day", value: "€9" },
            { label: "10 days", value: "€12" },
            { label: "1 month", value: "€19" },
            { label: "2 months", value: "€30" },
            { label: "1 year", value: "€100" },
          ],
        },
        {
          title: "Planned rates for Euro 0 to Euro 3",
          rows: [
            { label: "1 day", value: "€11.25" },
            { label: "10 days", value: "€15" },
            { label: "1 month", value: "€23.75" },
            { label: "2 months", value: "€37.50" },
            { label: "1 year", value: "€125" },
          ],
        },
        {
          title: "Planned rates for zero-emission vehicles",
          rows: [
            { label: "1 day", value: "€8.10" },
            { label: "10 days", value: "€10.80" },
            { label: "1 month", value: "€17.10" },
            { label: "2 months", value: "€27" },
            { label: "1 year", value: "€90" },
          ],
        },
      ],
      linkParagraph:
        "See amounts, vehicle categories and the latest updates on our [[prices|Belgium vignette prices]] page.",
      notice:
        "Note: the system still needs final legislative steps. Rules may change before it takes effect.",
    },
    {
      type: "section",
      id: "transit",
      title: "Do you need to pay to drive through Belgium?",
      paragraphs: [
        "From 1 May 2027, if the system launches as planned, drivers using covered motorways or regional roads will need a valid vignette.",
        "That also applies to drivers who are only transiting Belgium to reach another country.",
        "A car registered in France, the Netherlands or Germany is not automatically exempt because the driver does not live in Belgium.",
        "The vignette is planned for covered vehicles using the road network, regardless of registration country.",
        "See our guide for [[foreign|foreign drivers in Belgium]] for rules on foreign vehicles.",
      ],
    },
    {
      type: "section",
      id: "french-cars",
      title: "Will French cars have to pay on Belgian motorways?",
      paragraphs: [
        "French cars will follow the same vignette rules as other foreign cars on covered roads.",
        "A French driver on a Belgian motorway from 1 May 2027 will, under current plans, need a valid vignette.",
        "For a short stay or simple transit, an annual vignette is not required. Durations of 1 day, 10 days, 1 month and 2 months are also planned.",
      ],
    },
    {
      type: "section",
      id: "foreign-cars",
      title: "Will foreign cars have to pay?",
      paragraphs: [
        "Yes. The plans explicitly apply the vignette to foreign users of covered motorways and regional roads.",
        "That includes vehicles from:",
      ],
      list: [
        "France",
        "the Netherlands",
        "Germany",
        "Luxembourg",
        "the United Kingdom",
        "other European and non-European countries",
      ],
    },
    {
      type: "section",
      id: "motorcycles",
      title: "Will motorcycles have to pay a toll in Belgium?",
      paragraphs: [
        "The planned vignette covers motorised vehicles with at least four wheels and a maximum technically permissible mass of no more than 3.5 tonnes.",
        "Motorcycles are therefore not covered by this obligation as currently planned.",
        "Other vehicle categories may follow different rules. Check the full list of [[exemptions|Belgium vignette exemptions]] before you travel.",
      ],
    },
    {
      type: "section",
      id: "campervans",
      title: "Campervans and vans: do they need a vignette?",
      paragraphs: [
        "Campervans and some vans up to 3.5 tonnes fall under the planned system when they use covered motorways and regional roads.",
        "The key criteria are vehicle category and maximum technically permissible mass.",
        "Vehicles over 3.5 tonnes may fall under a different road-charging system.",
      ],
    },
    {
      type: "section",
      id: "trucks",
      title: "What about trucks over 3.5 tonnes?",
      paragraphs: [
        "The new vignette for vehicles up to 3.5 tonnes does not replace Belgium’s existing system for heavy goods vehicles.",
        "Belgium already has a kilometre charge for trucks under the Viapass framework.",
        "So the distinction is:",
      ],
      list: [
        "Cars, light vans and some campervans up to 3.5 t → road vignette planned from 2027.",
        "Covered heavy goods vehicles over 3.5 t → existing kilometre charging.",
      ],
    },
    {
      type: "section",
      id: "buy",
      title: "Where to buy a vignette for Belgian motorways?",
      paragraphs: [
        "The vignette is not on sale yet.",
        "According to currently published official information, purchase should become possible from 1 March 2027, ahead of the planned start on 1 May.",
        "It should be available online via the official site or a recognised partner organisation.",
        "Avoid buying a supposed Belgium vignette 2027 from an unverified site before official sales open.",
        "We track the sales opening and will publish the link when available. See [[buy|where to buy the Belgium vignette]] for the latest information.",
      ],
    },
    {
      type: "section",
      id: "enforcement",
      title: "How will the vignette be checked?",
      paragraphs: [
        "The vignette will be fully digital and linked to the vehicle’s number plate.",
        "You will not need a physical sticker on the windscreen.",
        "Entering the plate correctly at purchase is essential. Driving on a vignette road without a valid vignette may lead to a fine once enforcement is fully active.",
        "See our page on [[fines|Belgium vignette fines]] for the latest enforcement and penalty rules.",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "Belgium 2027: toll, vignette or free motorways?",
      paragraphs: [
        "The change can be confusing because terms like Belgium toll, paid motorway Belgium and Belgium vignette are often used for the same shift.",
        "In practice, the planned system is not a traditional distance-based toll for passenger cars.",
        "It is a digital vignette valid for a chosen period.",
        "You can pick the duration that fits your trip: one day for a short passage, 10 days for a stay, one or two months for a longer period, or an annual vignette for regular use.",
      ],
    },
  ],
  faqTitle: "Frequently asked questions about tolls in Belgium",
  faqs: [
    {
      question: "Are there tolls in Belgium?",
      answer:
        "For passenger cars, there is currently no general road vignette comparable to systems in some other European countries. A digital vignette is planned from 1 May 2027 for use of covered motorways and regional roads.",
    },
    {
      question: "Will Belgian motorways be paid in 2027?",
      answer:
        "Use of covered motorways and regional roads will require a vignette for vehicles under the new system if it takes effect as planned on 1 May 2027.",
    },
    {
      question: "How much will Belgian motorways cost?",
      answer:
        "The price is not charged per kilometre for covered cars. For a Euro 4 or higher vehicle, published rates currently range from €9 for 1 day to €100 for 1 year. Older and zero-emission vehicles have different rates.",
    },
    {
      question: "Do I need a vignette to go to Belgium?",
      answer:
        "It depends on the date and the roads you use. The vignette is planned from 1 May 2027 for covered vehicles on motorways and regional roads. If you only use local roads, a vignette should not be needed.",
    },
    {
      question: "Where to buy a Belgium motorway vignette?",
      answer:
        "Sales are not open yet. They are expected to start on 1 March 2027 via the official site and recognised partner organisations. See our How to buy page for updates.",
    },
    {
      question: "Do motorcycles have to pay on Belgian motorways?",
      answer:
        "The planned vignette applies to motorised vehicles with at least four wheels up to 3.5 tonnes. Motorcycles are therefore not covered under the obligation as currently planned.",
    },
  ],
  closing: {
    title: "Prepare your trip to Belgium",
    paragraphs: [
      "The Belgian system is due to take effect on 1 May 2027, but several details may still change before launch.",
      "Before you leave, check:",
    ],
    checklist: [
      "whether your vehicle is covered;",
      "which roads you will use;",
      "the vignette duration you need;",
      "the rate for your vehicle;",
      "that you buy from a recognised channel.",
    ],
    links: [
      { href: "home", label: "Belgium vignette 2027" },
      { href: "prices", label: "Vignette prices" },
      { href: "buy", label: "How to buy the Belgium vignette" },
    ],
  },
};
