import type { Dictionary } from "../types";

const dictionary: Dictionary = {
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
    privacy: "Privacy",
  },
  meta: {
    home: {
      title: "Belgium vignette 2027 — prices, rules & foreign driver guide",
      description:
        "Independent guide to Belgium's planned digital road vignette from 1 May 2027. Pricing, exemptions, fines and practical tips for Dutch, German and other cross-border drivers.",
    },
    prices: {
      title: "Belgium vignette prices 2027 — daily, monthly & annual rates",
      description:
        "Planned vignette pricing for Belgium: €100/year, short-term from €9/day. Euro emission standard explained simply.",
    },
    foreign: {
      title: "Belgium vignette for foreign cars & cross-border drivers",
      description:
        "Practical guide for drivers from the Netherlands, Germany and France travelling through Belgium. What you need to know according to current plans.",
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
      title: "Buy Belgium vignette — when & how (digital system expected)",
      description:
        "Not yet on sale. What to expect according to plans: a digital plate-linked system, no windshield sticker.",
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
    lastUpdatedDate: "11 July 2026",
    lastUpdatedIso: "2026-07-11",
    readMore: "Read more",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — independent Belgium toll information",
    backToHome: "Back to home",
    plannedNotice:
      "Plans presented in March 2026 may still change. We track official sources and update this page when news breaks.",
    independentSite: "Independent information site",
    contactLabel: "Contact",
  },
  home: {
    hero: {
      eyebrow: "Planned from 1 May 2027",
      title: "Belgium's digital vignette, explained clearly",
      subtitle:
        "From May 2027, Flanders, Wallonia and Brussels plan to charge motorists for using main roads. No windshield sticker — a digital vignette linked to your licence plate.",
      ctaPrimary: "View prices",
      ctaSecondary: "Foreign driver info",
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
          "No official sales channel yet. Sign up to our newsletter for launch updates.",
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
    euroNormItems: [
      { norm: "Euro 4+", description: "Cars from ~2005–2006 onward. Most vehicles on the road." },
      { norm: "Electric / H₂", description: "Zero emission. Lowest planned rate." },
      { norm: "Euro 3 and below", description: "Older, more polluting vehicles." },
    ],
    faqs: [
      {
        question: "Are commercial vans deductible?",
        answer: "According to plans, vignette cost for professional vans may be fully deductible as a business expense.",
      },
    ],
  },
  foreign: {
    title: "Foreign drivers",
    intro:
      "More than half of kilometres on Belgian roads are reportedly driven by foreign motorists. If you're coming from the Netherlands, Germany, France or elsewhere, here's what the plans mean for you.",
    sections: [
      {
        id: "eu-rules",
        title: "Equal treatment",
        paragraphs: [
          "Belgian drivers pay too — EU rules prevent charging foreigners only. Your foreign plate is covered.",
          "An estimated 30 million foreign passenger cars pass through Belgium each year.",
        ],
      },
      {
        id: "digital",
        title: "Digital, no sticker",
        paragraphs: [
          "No physical vignette to buy or display. The system uses automatic plate recognition (ANPR). Purchase before you drive.",
        ],
      },
      {
        id: "history",
        title: "Historical context",
        paragraphs: [
          "Belgium tried a vignette in 2007 but withdrew after Dutch protests. Dutch ministers have expressed disappointment again — no special border regime in current plans.",
        ],
      },
    ],
    countryTips: [
      {
        country: "🇳🇱 Netherlands",
        tips: [
          "Popular routes via E19 (Antwerp), E40 (Brussels) and E314 (Liège) are covered.",
          "No special deal for southern NL border drivers in current plans.",
        ],
      },
      {
        country: "🇩🇪 Germany",
        tips: [
          "Transit via Aachen–Liège or routes toward France likely require a vignette.",
          "Short-term options (1–10 days) suit through traffic.",
        ],
      },
      {
        country: "🇫🇷 France",
        tips: [
          "Drivers from northern France and Wallonia: check if your route uses Belgian regional main roads.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a vignette if I'm just passing through?",
        answer: "Yes — according to plans, using main roads requires a vignette regardless of destination.",
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
    title: "How to buy",
    intro:
      "No official sales channel exists yet. A digital system is expected, but website/app details are unknown.",
    sections: [
      {
        id: "status",
        title: "Current status",
        paragraphs: [
          "Plans still need Wallonia, Brussels and EU Commission approval before sales can open.",
        ],
      },
      {
        id: "expected",
        title: "What's expected",
        paragraphs: ["Online registration of your plate. No physical sticker needed."],
      },
    ],
    statusBadge: "Not yet available",
    steps: [
      { title: "Wait for official launch", description: "Sales expected before 1 May 2027." },
      { title: "Register your plate", description: "Digital system — no windshield sticker." },
      { title: "Choose duration", description: "Day, 10 days, month, 2 months or annual." },
      { title: "Drive with valid vignette", description: "Cameras check automatically." },
    ],
    faqs: [
      {
        question: "Can I pre-order now?",
        answer: "No. Subscribe to our newsletter to stay informed.",
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
        title: "Cookies & analytics",
        paragraphs: [
          "Vercel Analytics loaded only after consent. Preferences stored in localStorage.",
        ],
      },
      {
        id: "rights",
        title: "Your rights (GDPR)",
        paragraphs: ["Access, rectification, deletion, objection — info@tolls.be."],
      },
    ],
    lastUpdated: "11 July 2026",
  },
  newsletter: {
    title: "Stay informed",
    description: "Get notified when official sales go live and when important updates are published.",
    emailPlaceholder: "Your email address",
    consentLabel: "I agree to receive updates and have read the privacy policy.",
    submit: "Subscribe",
    success: "Thank you! You're subscribed.",
    error: "Something went wrong. Please try again.",
    privacyLink: "Privacy policy",
  },
  cookieBanner: {
    title: "Cookies & privacy",
    description: "We use optional analytics cookies to improve our site. Your choice.",
    accept: "Accept",
    reject: "Decline",
    privacyLink: "Privacy policy",
  },
  sources: [
    { title: "Flemish government", url: "https://www.vlaanderen.be", description: "Official announcements" },
    { title: "Viapass", url: "https://www.viapass.be", description: "Truck km-charge system" },
    { title: "European Commission", url: "https://ec.europa.eu", description: "Agreement review" },
  ],
};

export default dictionary;
