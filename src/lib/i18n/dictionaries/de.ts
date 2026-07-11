import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  locale: "de",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Alles über Belgiens digitale Straßenvignette — für Einheimische und Grenzpendler.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Startseite",
    prices: "Preise",
    foreign: "Ausländische Fahrer",
    exemptions: "Befreiungen",
    fines: "Bußgelder",
    buy: "Kaufen",
    privacy: "Datenschutz",
  },
  meta: {
    home: {
      title: "Vignette Belgien 2027 — Preise, Regeln & Info für Ausländer",
      description:
        "Unabhängiger Leitfaden zur geplanten digitalen Vignette in Belgien ab 1. Mai 2027. Preise, Befreiungen, Bußgelder und Tipps für deutsche und andere Grenzfahrer.",
    },
    prices: {
      title: "Vignette Belgien Preise 2027 — Tag, Monat & Jahresgebühr",
      description:
        "Geplante Vignettenpreise für Belgien: 100 €/Jahr, Kurzzeiträume ab 9 €/Tag. Euro-Norm einfach erklärt.",
    },
    foreign: {
      title: "Vignette Belgien für Ausländer & Grenzverkehr",
      description:
        "Praktischer Leitfaden für Fahrer aus den Niederlanden, Deutschland und Frankreich. Was Sie laut Plänen wissen müssen.",
    },
    exemptions: {
      title: "Vignette Belgien Befreiungen — Motorräder, LKW & mehr",
      description:
        "Wer ist laut Plänen befreit? Motorräder, LKW, Rettungsdienste und weitere Kategorien erklärt.",
    },
    fines: {
      title: "Bußgelder Vignette Belgien — Kontrollen & Übergangsfrist",
      description:
        "Geplante Bußgelder bis 210 €, ANPR-Kontrollen und Toleranz bis 1. Juli 2027.",
    },
    buy: {
      title: "Vignette Belgien kaufen — wann & wie (digital erwartet)",
      description:
        "Noch nicht erhältlich. Was erwartet wird: digitales System, an Ihr Kennzeichen gebunden.",
    },
    privacy: {
      title: "Datenschutzerklärung — BelgiumVignette.be",
      description:
        "Wie BelgiumVignette.be Cookies, Analytics, Newsletter-Daten und Ihre DSGVO-Rechte behandelt.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be ist eine unabhängige Informationsseite. Wir sind nicht mit der belgischen Regierung, Flandern, der Wallonie oder Brüssel verbunden.",
    lastUpdated: "Zuletzt aktualisiert",
    lastUpdatedDate: "11. Juli 2026",
    lastUpdatedIso: "2026-07-11",
    readMore: "Mehr erfahren",
    relatedSite: "https://tolls.be/de",
    relatedSiteLabel: "Tolls.be — unabhängige Maut-Informationen für Belgien",
    backToHome: "Zurück zur Startseite",
    plannedNotice:
      "Die im März 2026 vorgestellten Pläne können sich noch ändern. Wir verfolgen offizielle Quellen und aktualisieren diese Seite bei Neuigkeiten.",
    independentSite: "Unabhängige Informationsseite",
    contactLabel: "Kontakt",
    cookieSettings: "Cookie-Einstellungen",
    tableCategory: "Kategorie",
    tablePrice: "Preis",
  },
  home: {
    hero: {
      eyebrow: "Geplant ab 1. Mai 2027",
      title: "Belgiens digitale Vignette — verständlich erklärt",
      subtitle:
        "Ab Mai 2027 planen Flandern, die Wallonie und Brüssel, dass Autofahrer für Hauptstraßen zahlen. Kein Windschutzscheiben-Aufkleber — eine digitale Vignette, gebunden an Ihr Kennzeichen.",
      ctaPrimary: "Preise ansehen",
      ctaSecondary: "Info für Ausländer",
    },
    quickAnswers: [
      {
        title: "Wer muss zahlen?",
        summary:
          "Pkw bis 3,5 Tonnen, einschließlich ausländischer Fahrzeuge — auch bei Durchreise.",
        href: "foreign",
      },
      {
        title: "Wer ist befreit?",
        summary:
          "Motorräder, LKW (Kilometerabgabe), Traktoren, Reisebusse, Rettungsdienste und Polizei.",
        href: "exemptions",
      },
      {
        title: "Was kostet es?",
        summary:
          "Jahresvignette ab 90 € (Elektro) bis 125 € (ältere Autos). Kurzzeiträume ab 9 €/Tag.",
        href: "prices",
      },
    ],
    pricingTitle: "Geplante Tarife auf einen Blick",
    pricingSubtitle:
      "Basierend auf veröffentlichten Plänen (März 2026). Endgültige Beträge können sich ändern.",
    annualTableTitle: "Jahresvignette",
    shortTermTableTitle: "Kurzzeiträume",
    annualPricing: [
      { label: "Euro 4 und höher", value: "100 € / Jahr", note: "97 %+ der flämischen Autos" },
      { label: "Elektro / Wasserstoff", value: "90 € / Jahr" },
      { label: "Ältere Autos (bis Euro 3)", value: "125 € / Jahr" },
    ],
    shortTermPricing: [
      { label: "1 Tag", value: "9 €" },
      { label: "10 Tage", value: "12 €" },
      { label: "1 Monat", value: "19 €" },
      { label: "2 Monate", value: "30 €" },
    ],
    timelineTitle: "Wichtige Termine (laut Plänen)",
    timeline: [
      {
        date: "März 2026",
        title: "Pläne vorgestellt",
        description:
          "Flämische Regierung präsentiert Vorschlag. Zustimmung Wallonie, Brüssel und EU-Kommission ausstehend.",
      },
      {
        date: "1. Mai 2027",
        title: "Vignette Pflicht",
        description:
          "Digitale Vignettenpflicht auf Autobahnen und regionalen Hauptstraßen.",
      },
      {
        date: "1. Juli 2027",
        title: "Bußgelder wirksam",
        description:
          "Übergangsfrist endet. Kontrollen via ANPR-Kameras und mobile Einheiten.",
      },
    ],
    faqTitle: "Häufige Fragen",
    faqs: [
      {
        question: "Ist es ein physischer Aufkleber?",
        answer:
          "Nein. Laut Plänen ist es eine digitale Vignette, die an Ihr Kennzeichen gebunden wird.",
      },
      {
        question: "Gilt das für ausländische Autos?",
        answer:
          "Ja. EU-Regeln verlangen Gleichbehandlung. Belgische und ausländische Fahrer müssen zahlen.",
      },
      {
        question: "Müssen Motorradfahrer zahlen?",
        answer:
          "Nein. Motorräder sind laut Ministers Weyts und Desquesnes ausdrücklich befreit.",
      },
      {
        question: "Wann kann ich kaufen?",
        answer:
          "Noch kein offizieller Verkaufskanal. Newsletter abonnieren für Updates.",
      },
    ],
    sourcesTitle: "Offizielle Quellen",
  },
  prices: {
    title: "Preise & Laufzeiten",
    intro:
      "Übersicht der geplanten Vignettenpreise nach Euro-Abgasnorm. Basierend auf Ankündigungen März 2026.",
    sections: [
      {
        id: "annual",
        title: "Jahresvignette",
        paragraphs: [
          "Für regelmäßige Nutzer belgischer Hauptstraßen. Preis abhängig von der Euro-Norm.",
        ],
      },
      {
        id: "short",
        title: "Kurzzeiträume",
        paragraphs: [
          "Für Gelegenheitsfahrten — Urlaub, Wochenende — sind kürzere Vignetten geplant.",
        ],
      },
      {
        id: "road-tax",
        title: "Verkehrssteuer (Flandern)",
        paragraphs: [
          "Flandern reformiert gleichzeitig die Kfz-Steuer. Etwa die Hälfte der flämischen Autofahrer könnte netto mehr zahlen.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 und höher", value: "100 €", note: "Jahr" },
      { label: "Elektro / Wasserstoff", value: "90 €", note: "Jahr" },
      { label: "Bis Euro 3", value: "125 €", note: "Jahr" },
    ],
    shortTermTable: [
      { label: "1 Tag", value: "9 €" },
      { label: "10 Tage", value: "12 €" },
      { label: "1 Monat", value: "19 €" },
      { label: "2 Monate", value: "30 €" },
    ],
    euroNormTitle: "Euro-Normen kurz erklärt",
    euroNormCategoryHeader: "Norm",
    euroNormDescriptionHeader: "Beschreibung",
    euroNormItems: [
      { norm: "Euro 4+", description: "Fahrzeuge ab ca. 2005–2006. Die Mehrheit auf der Straße." },
      { norm: "Elektro / H₂", description: "Emissionsfrei. Niedrigster geplanter Tarif." },
      { norm: "Euro 3 und niedriger", description: "Ältere, stärker verschmutzende Fahrzeuge." },
    ],
    faqs: [
      {
        question: "Sind Transporter absetzbar?",
        answer: "Laut Plänen könnte die Vignettenkosten für gewerbliche Transporter voll absetzbar sein.",
      },
    ],
  },
  foreign: {
    title: "Ausländische Fahrer",
    intro:
      "Mehr als die Hälfte der Kilometer auf belgischen Straßen wird laut Schätzungen von ausländischen Autofahrern gefahren. Was Sie aus den Niederlanden, Deutschland oder Frankreich wissen sollten.",
    sections: [
      {
        id: "eu-rules",
        title: "Gleichbehandlung",
        paragraphs: [
          "Belgische Fahrer zahlen ebenfalls — EU-Regeln erlauben keine Bevorzugung. Ihr ausländisches Kennzeichen ist betroffen.",
        ],
      },
      {
        id: "digital",
        title: "Digital, kein Aufkleber",
        paragraphs: [
          "Keine physische Vignette. Das System nutzt automatische Kennzeichenerkennung (ANPR).",
        ],
      },
      {
        id: "history",
        title: "Historischer Kontext",
        paragraphs: [
          "2007 scheiterte ein Vignettenversuch nach niederländischen Protesten. Keine Sonderregelung für Grenzregionen in aktuellen Plänen.",
        ],
      },
    ],
    countryTips: [
      {
        country: "🇳🇱 Niederlande",
        tips: [
          "Beliebte Routen über E19, E40 und E314 betroffen.",
          "Keine Sonderregelung für Süd-Niederland laut aktuellen Plänen.",
        ],
      },
      {
        country: "🇩🇪 Deutschland",
        tips: [
          "Transit über Aachen–Lüttich oder Richtung Frankreich: Vignette voraussichtlich nötig.",
          "Kurzzeiträume (1–10 Tage) für Durchreisende.",
        ],
      },
      {
        country: "🇫🇷 Frankreich",
        tips: [
          "Fahrer aus Nordfrankreich und Wallonien: prüfen Sie, ob Ihre Route belgische Hauptstraßen nutzt.",
        ],
      },
    ],
    faqs: [
      {
        question: "Brauche ich eine Vignette bei Durchreise?",
        answer: "Ja — laut Plänen gilt die Pflicht auf Hauptstraßen unabhängig vom Reiseziel.",
      },
    ],
  },
  exemptions: {
    title: "Befreiungen",
    intro: "Nicht jedes Fahrzeug zahlt laut Plänen. Wer ist betroffen und wer nicht.",
    sections: [
      {
        id: "motorcycles",
        title: "Motorräder befreit",
        paragraphs: ["Motorräder ausdrücklich ausgenommen laut Ministers Weyts und Desquesnes."],
      },
      {
        id: "trucks",
        title: "LKW",
        paragraphs: ["Schwere Fahrzeuge nutzen das Kilometerabgabesystem (Viapass)."],
      },
    ],
    exemptTableTitle: "Befreit",
    requiredTableTitle: "Vignette Pflicht",
    exemptTable: [
      { label: "Motorräder & Mopeds", value: "Befreit" },
      { label: "LKW (>3,5t)", value: "Befreit — km-Abgabe" },
      { label: "Traktoren", value: "Befreit" },
      { label: "Reisebusse", value: "Befreit" },
      { label: "Rettung & Polizei", value: "Befreit" },
      { label: "Verteidigung", value: "Befreit" },
    ],
    notExemptTable: [
      { label: "Pkw (≤3,5t)", value: "Vignette Pflicht" },
      { label: "Ausländische Autos", value: "Vignette Pflicht" },
      { label: "Transporter", value: "Vignette Pflicht" },
      { label: "Elektroautos", value: "Pflicht (90 €/Jahr geplant)" },
    ],
    faqs: [
      {
        question: "Ist mein Wohnmobil befreit?",
        answer: "Als Pkw ≤3,5t registriert — laut Plänen vignettenpflichtig.",
      },
    ],
  },
  fines: {
    title: "Bußgelder & Kontrollen",
    intro: "Kontrollen via ANPR und mobile Teams. Übergangsfrist vor den ersten Bußgeldern geplant.",
    sections: [
      {
        id: "tolerance",
        title: "Übergangsfrist",
        paragraphs: ["1. Mai bis 1. Juli 2027 — laut Plänen keine Bußgelder. Ab 1. Juli Strafen."],
      },
      {
        id: "anpr",
        title: "ANPR-Kontrollen",
        paragraphs: ["Kameras auf Autobahnen und Hauptstraßen prüfen die Vignettengültigkeit."],
      },
    ],
    fineTable: [
      { label: "1. Verstoß", value: "70 €" },
      { label: "2. Verstoß", value: "140 €" },
      { label: "3. und weitere", value: "210 €" },
    ],
    faqs: [
      {
        question: "Bußgeld bei vergessener Vignette?",
        answer: "Während der Übergangsfrist (Mai–Juni 2027) nicht. Danach ja — auch für ausländische Kennzeichen.",
      },
    ],
  },
  buy: {
    title: "Vignette kaufen",
    intro:
      "Noch kein offizieller Verkaufskanal. Digitales System erwartet, Details unbekannt.",
    sections: [
      {
        id: "status",
        title: "Aktueller Stand",
        paragraphs: [
          "Pläne brauchen noch Zustimmung von Wallonie, Brüssel und EU-Kommission.",
        ],
      },
      {
        id: "expected",
        title: "Was erwartet wird",
        paragraphs: ["Online-Registrierung Ihres Kennzeichens. Kein physischer Aufkleber."],
      },
    ],
    statusBadge: "Noch nicht verfügbar",
    steps: [
      { title: "Auf offiziellen Start warten", description: "Verkauf erwartet vor 1. Mai 2027." },
      { title: "Kennzeichen registrieren", description: "Digitales System — kein Aufkleber." },
      { title: "Laufzeit wählen", description: "Tag, 10 Tage, Monat, 2 Monate oder Jahr." },
      { title: "Mit gültiger Vignette fahren", description: "Kameras prüfen automatisch." },
    ],
    faqs: [
      {
        question: "Kann ich jetzt vorbestellen?",
        answer: "Nein. Newsletter abonnieren für Updates.",
      },
    ],
  },
  privacy: {
    title: "Datenschutzerklärung",
    intro: "BelgiumVignette.be respektiert Ihre Privatsphäre.",
    sections: [
      {
        id: "controller",
        title: "Verantwortlicher",
        paragraphs: ["BelgiumVignette.be — Kontakt: info@tolls.be."],
      },
      {
        id: "newsletter",
        title: "Newsletter",
        paragraphs: [
          "E-Mail, Sprache und Einwilligungszeitpunkt in Supabase (EU-Hosting) gespeichert.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies, Analytics & Einwilligung",
        paragraphs: [
          "Essenziell: Speicherung Ihrer Cookie-Einstellung in localStorage. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) und/oder Einwilligung.",
          "Analytics (optional): Vercel Analytics erfasst anonyme Seitenaufrufe. Wird nur nach Einwilligung geladen. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Widerruf über Cookie-Einstellungen in der Fußzeile.",
          "Google Search Console & Bing Webmaster Tools: Verifizierungs-Meta-Tags ohne Tracking-Cookies.",
          "Speicherdauer: bis Sie den Speicher löschen oder wir die Richtlinie aktualisieren (Version 2026-07-11).",
        ],
      },
      {
        id: "rights",
        title: "Ihre Rechte (DSGVO)",
        paragraphs: ["Auskunft, Berichtigung, Löschung, Widerspruch — info@tolls.be."],
      },
    ],
    lastUpdated: "11. Juli 2026",
  },
  newsletter: {
    title: "Informiert bleiben",
    description: "Benachrichtigung, wenn der offizielle Verkauf startet und bei wichtigen Updates.",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    consentLabel: "Ich stimme Updates zu und habe die Datenschutzerklärung gelesen.",
    submit: "Anmelden",
    success: "Danke! Sie sind angemeldet.",
    error: "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
    privacyLink: "Datenschutz",
  },
  cookieBanner: {
    title: "Cookies & Datenschutz",
    description:
      "Essenzielle Speicherung für Ihre Cookie-Wahl. Optional: Vercel Analytics (anonyme Seitenaufrufe). Keine Analytics vor Ihrer Entscheidung.",
    essentialTitle: "Essenziell",
    essentialDescription: "Speichert Ihre Cookie-Präferenz in localStorage.",
    alwaysOn: "Immer aktiv — erforderlich, um Ihre Wahl zu speichern.",
    analyticsTitle: "Analytics (Vercel Analytics)",
    analyticsDescription: "Anonyme Seitenstatistiken. Nur nach Einwilligung aktiv.",
    acceptAll: "Alle akzeptieren",
    rejectAll: "Alle ablehnen",
    savePreferences: "Speichern",
    manageSettings: "Einstellungen",
    closeSettings: "Schließen",
    privacyLink: "Datenschutz",
  },
  sources: [
    { title: "Flämische Regierung", url: "https://www.vlaanderen.be", description: "Offizielle Ankündigungen" },
    { title: "Viapass", url: "https://www.viapass.be", description: "LKW-Kilometerabgabe" },
    { title: "EU-Kommission", url: "https://ec.europa.eu", description: "Prüfung der Abkommen" },
  ],
};

export default dictionary;
