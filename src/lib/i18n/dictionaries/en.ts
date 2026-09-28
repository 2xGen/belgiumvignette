import type { BaseDictionary } from "../types";
import { enTolls } from "../tolls/en";
import { buildRateMatrix } from "../rate-matrix";

const enRateMatrix = buildRateMatrix({
  vehicleHeader: "Vehicle",
  dayHeader: "1 day",
  tenDaysHeader: "10 days",
  monthHeader: "1 month",
  twoMonthsHeader: "2 months",
  yearHeader: "1 year",
  euro03: "Euro 0 to 3",
  euro4: "Euro 4 and higher",
  zeroEmission: "Zero emission",
});

const dictionary: BaseDictionary = {
  locale: "en",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Everything about Belgium's digital road vignette — for locals and cross-border drivers.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Home",
    prices: "Prices",
    foreign: "Foreign drivers",
    exemptions: "Exemptions",
    fines: "Fines",
    buy: "How to buy",
    tolls: "Tolls",
    news: "News & updates",
    privacy: "Privacy",
  },
  meta: {
    home: {
      title: "Belgium vignette 2027: prices, motorways & how to buy",
      description:
        "Belgium plans a digital road vignette from May 2027. See planned prices, who needs one, motorcycle exemptions and where to buy.",
    },
    prices: {
      title: "Belgium vignette prices 2027: rates by Euro standard and duration",
      description:
        "Full Belgium road vignette 2027 price table by Euro standard and duration — from €8.10/day (zero emission) to €125/year (Euro 0–3).",
    },
    foreign: {
      title: "Do foreign cars need a Belgium vignette in 2027?",
      description:
        "Yes — according to current plans, foreign passenger cars need a Belgium vignette from 1 May 2027 on covered roads. Guide for Dutch, German and French drivers.",
    },
    exemptions: {
      title: "Belgium vignette exemptions — motorcycles, trucks & more",
      description:
        "Who is exempt under the plans? Motorcycles, trucks, emergency services and other categories explained.",
    },
    fines: {
      title: "Belgium vignette fines — enforcement & tolerance period",
      description:
        "Planned fines up to €210, ANPR checks and tolerance until 1 July 2027.",
    },
    buy: {
      title: "Buy Belgium vignette — sales expected 1 March 2027",
      description:
        "According to current plans, online sales of the Belgium road vignette are expected from 1 March 2027. Mandatory from 1 May 2027. Official source: Flemish government.",
    },
    tolls: {
      title: "Tolls in Belgium 2027: motorways, vignette and prices",
      description:
        "Are motorways paid in Belgium? See tolls, the vignette planned from May 2027, prices and rules for foreign cars.",
    },
    news: {
      title: "Belgium vignette news & updates — trusted sources explained",
      description:
        "Independent summaries of official Belgium vignette news with our editorial view. Links to original sources.",
    },
    privacy: {
      title: "Privacy policy — BelgiumVignette.be",
      description:
        "How BelgiumVignette.be handles cookies, analytics, newsletter data and your GDPR rights.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be is an independent information site. We are not affiliated with the Belgian government, Flanders, Wallonia or Brussels.",
    lastUpdated: "Last updated",
    lastUpdatedDate: "28 September 2026",
    lastUpdatedIso: "2026-09-28",
    readMore: "Read more",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — independent Belgium toll information",
    backToHome: "Back to home",
    plannedNotice:
      "Plans presented in March 2026 may still change. We track official sources and update this page when news breaks.",
    independentSite: "Belgium road vignette info",
    contactLabel: "Contact",
    cookieSettings: "Cookie settings",
    tableCategory: "Category",
    tablePrice: "Price",
    lastChecked: "Last checked",
  },
  notFound: {
    title: "Page not found",
    description:
      "This page does not exist or has been moved. Return to the homepage or browse our latest vignette news.",
    homeLink: "Go to homepage",
    newsLink: "News & updates",
  },
  home: {
    hero: {
      eyebrow: "Planned from 1 May 2027",
      title: "Belgium vignette 2027: do you need a vignette for Belgium?",
      subtitle:
        "Belgium plans to introduce a digital road vignette from 1 May 2027. Find out whether you need one, what it costs, who is exempt and when sales start.",
      ctaPrimary: "Check if you need a vignette",
      ctaSecondary: "Get notified when sales open",
    },
    decisionTree: {
      title: "Do you need a vignette?",
      options: [
        { label: "Belgian car", href: "prices" },
        { label: "Dutch car", href: "foreign", anchor: "netherlands" },
        { label: "German car", href: "foreign", anchor: "germany" },
        { label: "French car", href: "foreign", anchor: "france" },
        { label: "Camper / van", href: "exemptions" },
      ],
    },
    quickAnswers: [
      {
        title: "Who must buy a Belgium vignette?",
        summary:
          "Passenger cars up to 3.5 tonnes, including foreign vehicles in transit on covered roads.",
        href: "foreign",
        linkLabel: "Guide for foreign drivers",
      },
      {
        title: "Who is exempt from the Belgium vignette?",
        summary:
          "Motorcycles, trucks (km tax), tractors, coaches, emergency services and police — according to current plans.",
        href: "exemptions",
        linkLabel: "See all exemptions",
      },
      {
        title: "What is the Belgium vignette price in 2027?",
        summary:
          "The price depends on Euro standard and duration: from €8.10/day (zero emission) and €9/day (Euro 4+), up to €90–€125 per year.",
        href: "prices",
        linkLabel: "Full prices guide",
      },
    ],
    overview: {
      title: "Belgium road vignette: what is planned for 2027",
      paragraphs: [
        "Belgium plans to introduce a digital road vignette from 1 May 2027. The Belgium vignette would apply to passenger cars up to 3.5 tonnes on motorways and certain main regional roads.",
        "Foreign cars would be included. Drivers from France, the Netherlands, Germany and other countries would need a vignette to use the covered Belgian roads.",
        "It would not be a windshield sticker. The Belgian motorway vignette would be digital and linked to the number plate, with checks including ANPR cameras.",
        "According to rates published by the Flemish government, the price depends on Euro standard and duration: from €8.10 per day for zero-emission vehicles and €9 per day for Euro 4+, up to €90–€125 per year. Options of 10 days, 1 month and 2 months are also planned.",
        "Motorcycles would be exempt under current plans. Final amounts and rules still need confirmation before the system enters into force.",
      ],
    },
    intentSections: [
      {
        id: "motorways",
        title: "Do you need a vignette for motorways in Belgium?",
        paragraphs: [
          "According to current plans, a digital road vignette would become mandatory on Belgian motorways and certain main regional roads from 1 May 2027.",
          "Today most Belgian motorways remain free for passenger cars. The vignette project would change that: access to motorways and part of the higher-speed regional network would require a plate-linked vignette.",
          "If you only use local roads, a vignette would not be required under published information. In practice, fully avoiding motorways and main regional roads is often difficult for intercity or transit trips.",
        ],
        link: {
          href: "tolls",
          label: "Tolls and motorways in Belgium",
        },
      },
      {
        id: "motorcycles",
        title: "Do motorcycles need a Belgium vignette?",
        paragraphs: [
          "No. According to government announcements, motorcycles would be explicitly exempt from the Belgium vignette.",
          "The obligation would target motor vehicles with at least four wheels up to 3.5 tonnes — including cars, some light vans and campers. Trucks remain under the Viapass kilometre charge.",
        ],
        link: {
          href: "exemptions",
          label: "See exemption details",
        },
      },
      {
        id: "buy",
        title: "Where to buy the Belgium vignette?",
        paragraphs: [
          "Official sales have not started yet. According to current plans, online purchase would be possible from 1 March 2027 via the official website or an authorised partner.",
          "There is no official sales portal today. Sites that already offer booking or payment are not the official channel.",
        ],
        link: {
          href: "buy",
          label: "Buy Belgium vignette: dates and official channels",
        },
      },
    ],
    pricingTitle: "What is the Belgium vignette price in 2027?",
    pricingParagraphs: [
      "The price of the Belgium road vignette depends on your vehicle's Euro standard and the validity period. For cars with Euro 4 or higher, planned rates start at €9 for 1 day and €100 for 1 year. Older vehicles pay more, while zero-emission vehicles get a lower rate.",
    ],
    pricingLinkLabel: "See all Belgium vignette prices",
    pricingLinkSecondaryLabel: "Full prices guide",
    pricingMatrixTitle: "Planned rates",
    rateMatrix: enRateMatrix,
    pricingNote:
      "These are the rates currently published by the Flemish government. Introduction is still subject to final approval.",
    timelineTitle: "Key dates (according to plans)",
    timeline: [
      {
        date: "March 2026",
        title: "Plans presented",
        description:
          "Flemish government presents proposal. Wallonia, Brussels and EU Commission approval still pending.",
      },
      {
        date: "1 May 2027",
        title: "Vignette mandatory",
        description:
          "Digital vignette required on motorways and regional main roads.",
      },
      {
        date: "1 July 2027",
        title: "Fines enforced",
        description:
          "Tolerance period ends. ANPR cameras and mobile units begin enforcement.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "Is it a physical sticker?",
        answer:
          "No. According to plans, it's a digital vignette tied to your licence plate. No sticker on your windshield.",
      },
      {
        question: "Do you need a vignette for motorways in Belgium?",
        answer:
          "According to current plans, yes from 1 May 2027 on Belgian motorways and certain main regional roads. Local roads would remain outside the obligation.",
      },
      {
        question: "Do motorcycles need a Belgium vignette?",
        answer:
          "No. Motorcycles are explicitly exempt per announcements by ministers Weyts (Flanders) and Desquesnes (Wallonia).",
      },
      {
        question: "Does this apply to foreign cars?",
        answer:
          "Yes. EU rules require equal treatment. Belgian and foreign drivers must both pay on covered roads.",
      },
      {
        question: "Where to buy the Belgium vignette?",
        answer:
          "Official sales have not started. According to plans, online purchase is expected from 1 March 2027 via the official channel or an authorised partner.",
      },
    ],
    sourcesTitle: "Official sources",
  },
  prices: {
    title: "Belgium vignette prices 2027: rates by Euro standard and duration",
    intro:
      "The planned price of the Belgium road vignette depends on two factors: your vehicle's Euro standard and the vignette validity period. The Flemish government has published rates for 1 day, 10 days, 1 month, 2 months and 1 year.",
    leadParagraphs: [
      "For a car with Euro 4 or higher, the Belgium vignette costs €9 for 1 day, €12 for 10 days and €100 for a year according to current rates. Zero-emission vehicles pay less, and vehicles with Euro 0 through Euro 3 pay more.",
      "The vignette is planned from 1 May 2027. Purchase would become possible from 1 March 2027. Introduction is still subject to final approval.",
    ],
    matrixTitle: "Belgium road vignette prices 2027",
    rateMatrix: enRateMatrix,
    matrixNote:
      "These rates are published by the Flemish government. The price is therefore determined not only by how long you need the vignette, but also by your vehicle's Euro standard.",
    buyLinkParagraph:
      "[[buy|See where and when you can buy the Belgium vignette]].",
    categorySections: [
      {
        id: "euro-4",
        title: "What does a Belgium vignette cost for Euro 4 and higher?",
        paragraphs: [
          "For vehicles with Euro 4 or higher, published rates are:",
        ],
        list: [
          "1 day: €9",
          "10 days: €12",
          "1 month: €19",
          "2 months: €30",
          "1 year: €100",
        ],
        linkParagraph:
          "This is the category covering a large share of today's car fleet. For a short transit through Belgium, a day or 10-day vignette may therefore be enough. Drivers who regularly use Belgian regional and motorway roads can compare the annual vignette with shorter durations. Read more about the [[dailyVignette|daily vignette]] or see the [[annualVignette|annual vignette]].",
      },
      {
        id: "euro-0-3",
        title: "What does a Belgium vignette cost for Euro 0 through Euro 3?",
        paragraphs: [
          "Older vehicles with Euro 0, Euro 1, Euro 2 or Euro 3 fall into the highest rate category.",
          "Planned prices range from €11.25 for one day to €125 for a year.",
        ],
        tableTitle: "Price Euro 0–3",
        table: [
          { label: "1 day", value: "€11.25" },
          { label: "10 days", value: "€15" },
          { label: "1 month", value: "€23.75" },
          { label: "2 months", value: "€37.50" },
          { label: "1 year", value: "€125" },
        ],
      },
      {
        id: "electric",
        title: "What does the vignette cost for an electric car?",
        paragraphs: [
          "Zero-emission vehicles get the lowest rate. According to the current price table, the vignette costs €8.10 for one day and €90 for a full year.",
        ],
        tableTitle: "Price zero emission",
        table: [
          { label: "1 day", value: "€8.10" },
          { label: "10 days", value: "€10.80" },
          { label: "1 month", value: "€17.10" },
          { label: "2 months", value: "€27" },
          { label: "1 year", value: "€90" },
        ],
        linkParagraph:
          "[[electricVignette|Read more about the Belgium vignette for electric cars]].",
      },
    ],
    durationSection: {
      id: "duration",
      title: "Which duration do I need?",
      paragraphs: [
        "According to current plans you can choose from five validity periods:",
        "The best duration depends on how often and how long you use the roads where the vignette will be required.",
        "See the separate guides for the [[dailyVignette|daily vignette]], [[monthlyVignette|monthly vignette]] and [[annualVignette|annual vignette]].",
      ],
      list: [
        "1 day — for a short transit or day trip.",
        "10 days — for example a holiday or longer visit.",
        "1 month — for several trips over a few weeks.",
        "2 months — for a longer stay or regular temporary use.",
        "1 year — for drivers who regularly use Belgian regional and motorway roads.",
      ],
    },
    whenSection: {
      id: "when",
      title: "When do these prices apply?",
      paragraphs: [
        "The digital road vignette is planned from 1 May 2027. According to current official information, the vignette could be bought online from 1 March 2027.",
        "Practical details are still being worked out and introduction remains subject to final approval.",
        "Want to know how purchase will work? See [[buy|Buy Belgium vignette]]. For all rules, vehicles and key dates, go to our complete guide on the [[home|Belgium road vignette 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Road tax interaction (Flanders)",
        paragraphs: [
          "Flanders is reforming annual road tax at the same time. According to estimates, roughly half of Flemish motorists may pay more overall — up to €100 extra per year.",
          "The road-tax reduction does not fully offset vignette costs for everyone under the plans. This is background information; the vignette rates above apply independently of that reform.",
        ],
      },
    ],
    euroNormTitle: "Euro standards in brief",
    euroNormCategoryHeader: "Standard",
    euroNormDescriptionHeader: "Description",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Cars from about 2005–2006 onward. Most vehicles on the road. Day rate €9, year €100.",
      },
      {
        norm: "Zero emission",
        description: "Fully zero emission (electric / hydrogen). Lowest rate: from €8.10/day, €90/year.",
      },
      {
        norm: "Euro 3 and below",
        description: "Older, more polluting vehicles. Highest rate: from €11.25/day, €125/year.",
      },
    ],
    vignettePagesTitle: "By vignette type",
    faqs: [
      {
        question: "What is the lowest planned daily price?",
        answer:
          "According to the Flemish government, the lowest daily rate is €8.10 for zero-emission vehicles. For Euro 4 and higher it is €9; for Euro 0 through 3 it is €11.25.",
      },
      {
        question: "Do short periods apply to all emission classes?",
        answer:
          "Yes. Each duration (1 day, 10 days, 1 month, 2 months, 1 year) has its own rate per Euro-standard category. Amounts differ by category.",
      },
      {
        question: "Are commercial vans deductible?",
        answer:
          "According to plans, vignette cost for professional vans may be fully deductible as a business expense.",
      },
    ],
  },
  foreign: {
    title: "Do foreign cars need a Belgium vignette?",
    intro:
      "According to the current plans, yes. Foreign passenger cars will need a Belgium vignette from 1 May 2027 when using covered Belgian roads. The planned system does not distinguish between Belgian and foreign licence plates — a car registered in the Netherlands, France, Germany or another country is expected to require the same digital vignette as a Belgian vehicle. Final rules may still change until the system is officially approved and launched.",
    sections: [
      {
        id: "eu-rules",
        title: "Equal treatment",
        paragraphs: [
          "Belgian drivers pay too — EU rules prevent charging foreigners only. Your foreign plate is covered under the same planned system.",
          "An estimated 30 million foreign passenger cars pass through Belgium each year.",
        ],
      },
      {
        id: "digital",
        title: "Digital system",
        paragraphs: [
          "No physical vignette to buy or display. The system is planned to use automatic plate recognition (ANPR). Purchase before you drive on covered roads.",
        ],
      },
      {
        id: "history",
        title: "Historical context",
        paragraphs: [
          "Belgium tried a vignette in 2007 but withdrew after Dutch protests. Dutch ministers have again expressed concern — and there is still no announced special border regime for neighbouring countries in the current plans.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Netherlands",
        tips: [
          "Yes — Dutch-registered passenger cars are expected to need a Belgium vignette from 1 May 2027 when using covered Belgian roads.",
          "This affects common routes such as Netherlands → Antwerp, Netherlands → Brussels, and Netherlands → Luxembourg/France transit.",
          "There is currently no announced exemption for Dutch border regions.",
        ],
      },
      {
        id: "germany",
        country: "Germany",
        tips: [
          "Yes — German-registered passenger cars are expected to need a Belgium vignette when driving on covered Belgian roads from 1 May 2027.",
          "This includes common transit routes such as Aachen → Liège and Germany → France through Belgium.",
          "Short-term options (1–10 days) in the plans may suit through traffic.",
        ],
      },
      {
        id: "france",
        country: "France",
        tips: [
          "Yes — French-registered passenger cars are expected to need a Belgium vignette when using covered Belgian roads from 1 May 2027.",
          "This is especially relevant for Northern France → Belgium trips and France → Netherlands/Germany transit routes.",
          "Covered roads include motorways and planned regional main roads — not only long-distance transit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a vignette if I'm just passing through?",
        answer:
          "Yes — according to current plans, from 1 May 2027 using covered Belgian main roads requires a vignette regardless of destination. Final rules may still change before launch.",
      },
      {
        question: "Do foreign cars pay the same as Belgian cars?",
        answer:
          "Yes. The planned system applies the same digital vignette to Belgian and foreign plates. EU equal-treatment rules are why foreigners cannot be charged alone.",
      },
    ],
  },
  exemptions: {
    title: "Exemptions",
    intro: "Not every vehicle pays under the plans. Here's who is in and who is out.",
    sections: [
      {
        id: "motorcycles",
        title: "Motorcycles exempt",
        paragraphs: ["Motorcycles explicitly excluded per ministers Weyts and Desquesnes."],
      },
      {
        id: "trucks",
        title: "Trucks",
        paragraphs: ["Heavy vehicles use the existing km-charge system (Viapass), not the vignette."],
      },
    ],
    exemptTableTitle: "Exempt",
    requiredTableTitle: "Vignette required",
    exemptTable: [
      { label: "Motorcycles & mopeds", value: "Exempt" },
      { label: "Trucks (>3.5t)", value: "Exempt — km tax" },
      { label: "Tractors", value: "Exempt" },
      { label: "Coaches", value: "Exempt" },
      { label: "Emergency & police", value: "Exempt" },
      { label: "Defence", value: "Exempt" },
    ],
    notExemptTable: [
      { label: "Passenger cars (≤3.5t)", value: "Vignette required" },
      { label: "Foreign cars", value: "Vignette required" },
      { label: "Vans", value: "Vignette required" },
      { label: "Electric cars", value: "Required (€90/year planned)" },
    ],
    faqs: [
      {
        question: "Is my motorhome exempt?",
        answer: "If registered as a passenger vehicle ≤3.5t, it's covered under the plans.",
      },
    ],
  },
  fines: {
    title: "Fines & enforcement",
    intro: "Enforcement via ANPR cameras and mobile units. A tolerance period is planned before fines begin.",
    sections: [
      {
        id: "tolerance",
        title: "Tolerance period",
        paragraphs: ["1 May to 1 July 2027 — no fines according to plans. Penalties from 1 July onward."],
      },
      {
        id: "anpr",
        title: "ANPR checks",
        paragraphs: ["Cameras on motorways and regional main roads verify vignette validity."],
      },
    ],
    fineTable: [
      { label: "1st offence", value: "€70" },
      { label: "2nd offence", value: "€140" },
      { label: "3rd and further", value: "€210" },
    ],
    faqs: [
      {
        question: "Fine if I forget the vignette?",
        answer: "Not during tolerance (May–June 2027). After that, yes — including foreign plates.",
      },
    ],
  },
  buy: {
    title: "When can I buy a Belgium vignette?",
    intro:
      "According to current plans, online sales are expected from 1 March 2027. The road vignette would become mandatory from 1 May 2027. Final conditions and the official sales portal may still change.",
    sections: [
      {
        id: "when",
        title: "When do sales open?",
        paragraphs: [
          "The Flemish government states that you will be able to buy the vignette online from 1 March 2027, via the official website or an authorised partner.",
          "There is no sales portal today, and you cannot reserve or pay yet. Sites that already offer that are not the official channel.",
        ],
      },
      {
        id: "expected",
        title: "What to expect",
        paragraphs: [
          "The vignette will be digital and linked to the number plate — no windshield sticker.",
          "According to the plans you choose a duration of 1 day, 10 days, 1 month, 2 months or 1 year.",
        ],
      },
    ],
    statusBadge: "Sales expected 1 March 2027",
    officialSourceLabel: "Official source",
    steps: [
      {
        title: "Wait for official sales",
        description: "Online purchase expected from 1 March 2027, according to the Flemish government.",
      },
      { title: "Register your plate", description: "Digital system — no windshield sticker." },
      { title: "Choose duration", description: "Day, 10 days, month, 2 months or annual." },
      { title: "Drive with valid vignette", description: "Cameras check automatically from 1 May 2027." },
    ],
    faqs: [
      {
        question: "Can I pre-order now?",
        answer:
          "No. According to current plans, online sales start on 1 March 2027. Subscribe to the newsletter to get the official channel when it is announced.",
      },
      {
        question: "When does the vignette become mandatory?",
        answer:
          "According to the plans, from 1 May 2027 on Belgian motorways and regional roads. A tolerance period is planned from 1 May to 1 July 2027.",
      },
    ],
  },
  tolls: enTolls,
  privacy: {
    title: "Privacy policy",
    intro: "BelgiumVignette.be respects your privacy. Here's how we handle your data.",
    sections: [
      {
        id: "controller",
        title: "Data controller",
        paragraphs: ["BelgiumVignette.be — contact: info@tolls.be."],
      },
      {
        id: "newsletter",
        title: "Newsletter",
        paragraphs: [
          "Email, locale and consent timestamp stored in Supabase (EU hosting). Used only for vignette updates.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies, analytics & consent",
        paragraphs: [
          "Essential storage: we save your cookie preference in localStorage. Legal basis: legitimate interest (Art. 6(1)(f) GDPR) and/or consent where required.",
          "Analytics (optional): Vercel Analytics collects anonymous page views. Loaded only after banner consent. Legal basis: consent (Art. 6(1)(a) GDPR). Withdraw via Cookie settings in the footer.",
          "Google Search Console & Bing Webmaster Tools: ownership verification meta tags only — no tracking cookies.",
          "Retention: until you clear storage or we update this policy (version 2026-08-04).",
        ],
      },
      {
        id: "news-editorial",
        title: "News summaries & editorial content",
        paragraphs: [
          "Our news section publishes independent summaries of publicly available reporting about the Belgium vignette. These pages are not reproductions of the original articles.",
          "Summaries and translations may be produced with AI assistance and can differ in wording from the source. We always link to the original publisher. Our editorial commentary ('Our view') is written independently and does not represent the original publisher or Belgian authorities.",
          "Images on news articles may be sourced from the linked original article or press agencies, with credits shown where applicable. Such media remains the property of the respective rights holders. We display it in good faith for reference alongside a link to the source. If you believe your content is used incorrectly, contact info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Your rights (GDPR)",
        paragraphs: ["Access, rectification, deletion, objection — info@tolls.be."],
      },
    ],
    lastUpdated: "4 August 2026",
  },
  news: {
    title: "News & updates",
    intro:
      "We track trusted official and media sources on Belgium's planned vignette. Each article summarises the original reporting and adds our independent view — with a direct link to the source.",
    latestArticles: "Latest articles",
    summaryTitle: "Summary",
    summaryFromSource: "from original source:",
    ourTakeTitle: "Our view",
    sourceTitle: "Original source",
    readArticle: "Read article",
    backToNews: "Back to news",
    publishedOn: "Published",
    sourceLabel: "Source",
    sourceDisclaimer:
      "We summarise trusted sources and link to the original article. Our view is independent editorial commentary, not official government information.",
    translationDisclaimer:
      "The summary and translation on this page were produced with AI assistance from the original article. Always refer to the source below for the authoritative wording.",
    articleAttributionTitle: "Independent summary — not the original article",
    articleAttributionIndependence:
      "BelgiumVignette.be is an independent information site. We are not affiliated with, endorsed by, or acting on behalf of the original publisher. This page summarises publicly available reporting and adds our own editorial commentary. It is not a reproduction of the original article.",
    articleAttributionAi:
      "The summary and translation were produced with AI assistance and may differ in wording from the original. Always consult the source linked below for the authoritative text.",
    articleAttributionReadOriginal: "Read the original article at",
    articleAttributionCopyright:
      "The original article, images and other media remain the property of their respective rights holders. We link to the source in good faith for reference. Image credits are shown above where applicable.",
    tableOfContents: "On this page",
    relatedArticles: "More news & updates",
    noArticles: "No articles published yet. Check back soon.",
  },
  newsletter: {
    emailPlaceholder: "Email address",
    consentLabel: "I agree to receive updates and have read the",
    success: "Thank you! You're subscribed.",
    error: "Something went wrong. Please try again.",
    privacyLink: "privacy policy.",
    sticky: {
      teaser: "Vignette not for sale yet — get the buy link",
      cta: "Sign up →",
      closeLabel: "Close",
    },
    intents: {
      home: {
        title:
          "Get the official buy link as soon as the Belgian vignette is available",
        description:
          "Sales are planned from 1 March 2027. Leave your email and we'll notify you once the official purchase option is available.",
        benefits: [
          "Official buy link as soon as it's available",
          "Updates when prices or rules change",
          "No unnecessary emails",
        ],
        submit: "Send me the buy link",
      },
      prices: {
        title: "Get notified when final vignette prices are confirmed",
        description:
          "Current rates have been published, but introduction still needs final approval. We'll track the official information for you.",
        benefitsIntro: "Get one email when:",
        benefits: [
          "final prices are confirmed;",
          "official sales start;",
          "the official buy link is available.",
        ],
        submit: "Keep me updated",
      },
      buy: {
        title: "Let me know when the Belgian vignette goes on sale",
        description:
          "Official sales have not started yet. Under the current plan, you can buy the Belgian vignette from 1 March 2027. Leave your email and we'll notify you once the official purchase option is available.",
        benefits: [],
        submit: "Send me the buy link",
      },
      foreign: {
        title:
          "Let me know when foreign cars can register their vignette",
        description:
          "Foreign drivers are also expected to need a Belgian vignette. Get notified once registration and purchase are officially possible.",
        benefits: [
          "Start of official sales",
          "Rules for foreign plates",
          "Official buy link",
        ],
        submit: "Keep me updated",
      },
      news: {
        title: "Get important updates on the Belgian vignette",
        description:
          "Short, relevant alerts when there is official news on prices, rules, or the start of sales.",
        benefits: [
          "Important official updates",
          "No daily spam",
          "Buy link as soon as available",
        ],
        submit: "Get updates",
      },
      default: {
        title:
          "Get the official buy link as soon as the Belgian vignette is available",
        description:
          "Sales are planned to start on 1 March 2027. We'll send you one notification once you can buy officially.",
        benefits: [
          "Official buy link",
          "Updates on prices and rules",
          "No unnecessary emails",
        ],
        submit: "Send me the buy link",
      },
    },
  },
  cookieBanner: {
    title: "Cookies & privacy",
    description:
      "Essential storage for your cookie choice. Optional: Vercel Analytics (anonymous page views). No analytics before you decide.",
    essentialTitle: "Essential",
    essentialDescription: "Stores your cookie preference in localStorage.",
    alwaysOn: "Always on — required to remember your choice.",
    analyticsTitle: "Analytics (Vercel Analytics)",
    analyticsDescription: "Anonymous page view statistics. Active only after consent.",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    savePreferences: "Save preferences",
    manageSettings: "Settings",
    closeSettings: "Close",
    privacyLink: "Privacy policy",
  },
  sources: [
    {
      title: "Flemish government — Road vignette from 1 May 2027",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Official page on the obligation, rates and purchase from 1 March 2027",
    },
    {
      title: "Viapass — kilometre charge for trucks",
      url: "https://www.viapass.be",
      description: "Existing system for vehicles over 3.5 tonnes (not the car vignette)",
    },
    {
      title: "European Commission — road charging",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "EU framework for road tolls and non-discrimination",
    },
  ],
};

export default dictionary;
