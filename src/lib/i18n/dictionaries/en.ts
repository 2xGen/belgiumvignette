import type { BaseDictionary } from "../types";

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
    news: "News & updates",
    privacy: "Privacy",
  },
  meta: {
    home: {
      title: "Belgium vignette 2027: do you need a vignette for Belgium?",
      description:
        "Belgium plans to introduce a digital road vignette from 1 May 2027. Find out whether you need one, what it costs, who is exempt and when sales start.",
    },
    prices: {
      title: "Belgium vignette prices 2027 — daily, monthly & annual rates",
      description:
        "Planned vignette pricing for Belgium: €100/year, short-term from €9/day. Euro emission standard explained simply.",
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
    lastUpdatedDate: "14 August 2026",
    lastUpdatedIso: "2026-08-14",
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
        title: "Who needs it?",
        summary:
          "Passenger cars up to 3.5 tonnes, including foreign vehicles — even if you're just passing through.",
        href: "foreign",
      },
      {
        title: "Who is exempt?",
        summary:
          "Motorcycles, trucks (km tax), tractors, coaches, emergency services and police.",
        href: "exemptions",
      },
      {
        title: "How much?",
        summary:
          "Annual vignette from €90 (electric) to €125 (older cars). Short-term from €9/day.",
        href: "prices",
      },
    ],
    pricingTitle: "Planned rates at a glance",
    pricingSubtitle:
      "Based on published plans (March 2026). Final amounts may still change.",
    annualTableTitle: "Annual vignette",
    shortTermTableTitle: "Short-term",
    annualPricing: [
      { label: "Euro 4 and higher", value: "€100 / year", note: "97%+ of Flemish cars" },
      { label: "Electric / hydrogen", value: "€90 / year" },
      { label: "Older cars (up to Euro 3)", value: "€125 / year" },
    ],
    shortTermPricing: [
      { label: "1 day", value: "€9" },
      { label: "10 days", value: "€12" },
      { label: "1 month", value: "€19" },
      { label: "2 months", value: "€30" },
    ],
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
        question: "Does this apply to foreign cars?",
        answer:
          "Yes. EU rules require equal treatment. Belgian and foreign drivers must both pay.",
      },
      {
        question: "Do motorcyclists pay?",
        answer:
          "No. Motorcycles are explicitly exempt per announcements by ministers Weyts (Flanders) and Desquesnes (Wallonia).",
      },
      {
        question: "When can I buy?",
        answer:
          "According to current plans, online sales are expected from 1 March 2027. The vignette would become mandatory from 1 May 2027. Final conditions may still change.",
      },
    ],
    sourcesTitle: "Official sources",
  },
  prices: {
    title: "Prices & durations",
    intro:
      "Overview of planned vignette prices by Euro emission standard. Based on March 2026 announcements — details may change.",
    sections: [
      {
        id: "annual",
        title: "Annual vignette",
        paragraphs: [
          "For regular users of Belgium's main roads. Price depends on your vehicle's Euro emission class.",
        ],
      },
      {
        id: "short",
        title: "Short-term options",
        paragraphs: [
          "For occasional trips — holidays, weekends — shorter vignettes are planned.",
          "Older, more polluting cars (up to Euro 3) pay slightly higher rates.",
        ],
      },
      {
        id: "road-tax",
        title: "Road tax interaction (Flanders)",
        paragraphs: [
          "Flanders is reforming annual road tax simultaneously. Roughly half of Flemish motorists may pay more overall — up to €100/year extra.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 and higher", value: "€100", note: "Year" },
      { label: "Electric / hydrogen", value: "€90", note: "Year" },
      { label: "Up to Euro 3", value: "€125", note: "Year" },
    ],
    shortTermTable: [
      { label: "1 day", value: "€9" },
      { label: "10 days", value: "€12" },
      { label: "1 month", value: "€19" },
      { label: "2 months", value: "€30" },
    ],
    euroNormTitle: "Euro standards explained",
    euroNormCategoryHeader: "Standard",
    euroNormDescriptionHeader: "Description",
    euroNormItems: [
      { norm: "Euro 4+", description: "Cars from ~2005–2006 onward. Most vehicles on the road." },
      { norm: "Electric / H₂", description: "Zero emission. Lowest planned rate." },
      { norm: "Euro 3 and below", description: "Older, more polluting vehicles." },
    ],
    vignettePagesTitle: "By vignette type",
    faqs: [
      {
        question: "Are commercial vans deductible?",
        answer: "According to plans, vignette cost for professional vans may be fully deductible as a business expense.",
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
    title: "Get notified first when the Belgium vignette becomes available",
    description: "",
    benefitsIntro: "",
    benefits: [
      "Official sales start",
      "Final prices confirmed",
      "New rules published",
      "Purchase link available",
    ],
    emailPlaceholder: "Email address",
    consentLabel: "I agree to receive updates and have read the privacy policy.",
    submit: "Notify me",
    success: "Thank you! You're subscribed.",
    error: "Something went wrong. Please try again.",
    privacyLink: "Privacy policy",
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
