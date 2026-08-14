import type { BaseDictionary } from "../types";

const dictionary: BaseDictionary = {
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
    news: "Nachrichten & Updates",
    privacy: "Datenschutz",
  },
  meta: {
    home: {
      title: "Vignette Belgien 2027: Brauchen Sie eine Vignette für Belgien?",
      description:
        "Belgien plant die Einführung einer digitalen Straßenvignette ab dem 1. Mai 2027. Finden Sie heraus, ob Sie eine brauchen, was sie kostet, wer befreit ist und wann der Verkauf startet.",
    },
    prices: {
      title: "Vignette Belgien Preise 2027 — Tag, Monat & Jahresgebühr",
      description:
        "Geplante Vignettenpreise für Belgien: 100 €/Jahr, Kurzzeiträume ab 9 €/Tag. Euro-Norm einfach erklärt.",
    },
    foreign: {
      title: "Brauchen ausländische Autos 2027 eine Vignette für Belgien?",
      description:
        "Ja — laut aktuellen Plänen benötigen ausländische Personenkraftwagen ab dem 1. Mai 2027 eine Vignette für Belgien auf den erfassten Straßen. Leitfaden für niederländische, deutsche und französische Fahrer.",
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
      title: "Vignette Belgien kaufen — Verkauf erwartet ab 1. März 2027",
      description:
        "Nach aktuellen Plänen startet der Online-Verkauf der belgischen Straßenvignette am 1. März 2027. Pflicht ab 1. Mai 2027. Offizielle Quelle: Flämische Regierung.",
    },
    news: {
      title: "Belgische Vignette — Nachrichten & Updates, vertrauenswürdige Quellen erklärt",
      description:
        "Unabhängige Zusammenfassungen offizieller Nachrichten zur belgischen Vignette mit unserer redaktionellen Einschätzung. Links zu den Originalquellen.",
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
    lastUpdatedDate: "14. August 2026",
    lastUpdatedIso: "2026-08-14",
    readMore: "Mehr erfahren",
    relatedSite: "https://tolls.be/de",
    relatedSiteLabel: "Tolls.be — unabhängige Maut-Informationen für Belgien",
    backToHome: "Zurück zur Startseite",
    plannedNotice:
      "Die im März 2026 vorgestellten Pläne können sich noch ändern. Wir verfolgen offizielle Quellen und aktualisieren diese Seite bei Neuigkeiten.",
    independentSite: "Info belgische Straßenvignette",
    contactLabel: "Kontakt",
    cookieSettings: "Cookie-Einstellungen",
    tableCategory: "Kategorie",
    tablePrice: "Preis",
    lastChecked: "Zuletzt geprüft",
  },
  notFound: {
    title: "Seite nicht gefunden",
    description:
      "Diese Seite existiert nicht oder wurde verschoben. Zurück zur Startseite oder zu unseren neuesten Vignette-Nachrichten.",
    homeLink: "Zur Startseite",
    newsLink: "Nachrichten & Updates",
  },
  home: {
    hero: {
      eyebrow: "Geplant ab 1. Mai 2027",
      title: "Vignette Belgien 2027: Brauchen Sie eine Vignette für Belgien?",
      subtitle:
        "Belgien plant die Einführung einer digitalen Straßenvignette ab dem 1. Mai 2027. Finden Sie heraus, ob Sie eine brauchen, was sie kostet, wer befreit ist und wann der Verkauf startet.",
      ctaPrimary: "Prüfen Sie, ob Sie eine Vignette brauchen",
      ctaSecondary: "Benachrichtigung bei Verkaufsstart",
    },
    decisionTree: {
      title: "Brauchen Sie eine Vignette?",
      options: [
        { label: "Belgisches Auto", href: "prices" },
        { label: "Niederländisches Auto", href: "foreign", anchor: "netherlands" },
        { label: "Deutsches Auto", href: "foreign", anchor: "germany" },
        { label: "Französisches Auto", href: "foreign", anchor: "france" },
        { label: "Wohnmobil / Transporter", href: "exemptions" },
      ],
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
          "Nach aktuellen Plänen wird der Online-Verkauf ab dem 1. März 2027 erwartet. Die Vignette würde ab dem 1. Mai 2027 Pflicht. Endgültige Bedingungen können sich noch ändern.",
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
    vignettePagesTitle: "Nach Vignettenart",
    faqs: [
      {
        question: "Sind Transporter absetzbar?",
        answer: "Laut Plänen könnte die Vignettenkosten für gewerbliche Transporter voll absetzbar sein.",
      },
    ],
  },
  foreign: {
    title: "Brauchen ausländische Autos eine Vignette für Belgien?",
    intro:
      "Ja, laut den aktuellen Plänen. Ausländische Personenkraftwagen werden ab dem 1. Mai 2027 eine Vignette für Belgien benötigen, wenn sie erfasste belgische Straßen nutzen. Das geplante System unterscheidet nicht zwischen belgischen und ausländischen Kennzeichen — ein in den Niederlanden, Frankreich, Deutschland oder einem anderen Land zugelassenes Auto soll dieselbe digitale Vignette benötigen wie ein belgisches Fahrzeug. Die endgültigen Regeln können sich bis zur offiziellen Genehmigung und Einführung des Systems noch ändern.",
    sections: [
      {
        id: "eu-rules",
        title: "Gleichbehandlung",
        paragraphs: [
          "Belgische Fahrer zahlen ebenfalls — EU-Regeln verbieten, nur Ausländer zu belasten. Ihr ausländisches Kennzeichen fällt unter dasselbe geplante System.",
          "Schätzungsweise passieren jährlich 30 Millionen ausländische Personenkraftwagen Belgien.",
        ],
      },
      {
        id: "digital",
        title: "Digitales System",
        paragraphs: [
          "Keine physische Vignette zum Kaufen oder Anbringen. Das System soll automatische Kennzeichenerkennung (ANPR) nutzen. Kaufen Sie vor der Fahrt auf erfassten Straßen.",
        ],
      },
      {
        id: "history",
        title: "Historischer Kontext",
        paragraphs: [
          "Belgien versuchte 2007 eine Vignette, zog sie aber nach niederländischen Protesten zurück. Niederländische Minister haben erneut Bedenken geäußert — und in den aktuellen Plänen gibt es noch keine angekündigte Sonderregelung für Nachbarländer an der Grenze.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Niederlande",
        tips: [
          "Ja — in den Niederlanden zugelassene Personenkraftwagen werden ab dem 1. Mai 2027 voraussichtlich eine Vignette für Belgien auf erfassten belgischen Straßen benötigen.",
          "Betroffen sind häufige Routen wie Niederlande → Antwerpen, Niederlande → Brüssel und Durchreise Niederlande → Luxemburg/Frankreich.",
          "Derzeit ist keine Ausnahme für niederländische Grenzregionen angekündigt.",
        ],
      },
      {
        id: "germany",
        country: "Deutschland",
        tips: [
          "Ja — in Deutschland zugelassene Personenkraftwagen werden ab dem 1. Mai 2027 voraussichtlich eine Vignette für Belgien auf erfassten belgischen Straßen benötigen.",
          "Dazu gehören häufige Transitrouten wie Aachen → Lüttich und Deutschland → Frankreich durch Belgien.",
          "Kurzzeiträume (1–10 Tage) in den Plänen können für Durchreisende passen.",
        ],
      },
      {
        id: "france",
        country: "Frankreich",
        tips: [
          "Ja — in Frankreich zugelassene Personenkraftwagen werden ab dem 1. Mai 2027 voraussichtlich eine Vignette für Belgien auf erfassten belgischen Straßen benötigen.",
          "Besonders relevant für Fahrten aus Nordfrankreich nach Belgien und Transitrouten Frankreich → Niederlande/Deutschland.",
          "Erfasste Straßen umfassen Autobahnen und geplante regionale Hauptstraßen — nicht nur Langstreckentransit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Brauche ich eine Vignette bei Durchreise?",
        answer:
          "Ja — laut aktuellen Plänen ist ab dem 1. Mai 2027 auf erfassten belgischen Hauptstraßen eine Vignette erforderlich, unabhängig vom Reiseziel. Die endgültigen Regeln können vor dem Start noch geändert werden.",
      },
      {
        question: "Zahlen ausländische Autos dasselbe wie belgische?",
        answer:
          "Ja. Das geplante System wendet dieselbe digitale Vignette auf belgische und ausländische Kennzeichen an. EU-Gleichbehandlungsregeln sind der Grund, warum nur Ausländer nicht belastet werden können.",
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
    title: "Wann kann ich eine belgische Vignette kaufen?",
    intro:
      "Nach aktuellen Plänen wird der Online-Verkauf ab dem 1. März 2027 erwartet. Die Straßenvignette würde ab dem 1. Mai 2027 Pflicht. Endgültige Bedingungen und das offizielle Verkaufsportal können sich noch ändern.",
    sections: [
      {
        id: "when",
        title: "Wann startet der Verkauf?",
        paragraphs: [
          "Die flämische Regierung gibt an, dass Sie die Vignette ab dem 1. März 2027 online kaufen können — über die offizielle Website oder einen zugelassenen Partner.",
          "Es gibt heute kein Verkaufsportal; Sie können noch nicht reservieren oder zahlen. Seiten, die das bereits anbieten, sind nicht der offizielle Kanal.",
        ],
      },
      {
        id: "expected",
        title: "Was erwartet wird",
        paragraphs: [
          "Die Vignette wird digital und an das Kennzeichen gekoppelt — kein Aufkleber an der Windschutzscheibe.",
          "Nach den Plänen wählen Sie eine Laufzeit von 1 Tag, 10 Tagen, 1 Monat, 2 Monaten oder 1 Jahr.",
        ],
      },
    ],
    statusBadge: "Verkauf erwartet ab 1. März 2027",
    officialSourceLabel: "Offizielle Quelle",
    steps: [
      {
        title: "Auf den offiziellen Verkauf warten",
        description: "Online-Kauf erwartet ab 1. März 2027, laut flämischer Regierung.",
      },
      { title: "Kennzeichen registrieren", description: "Digitales System — kein Aufkleber." },
      { title: "Laufzeit wählen", description: "Tag, 10 Tage, Monat, 2 Monate oder Jahr." },
      { title: "Mit gültiger Vignette fahren", description: "Kameras prüfen automatisch ab 1. Mai 2027." },
    ],
    faqs: [
      {
        question: "Kann ich jetzt vorbestellen?",
        answer:
          "Nein. Nach aktuellen Plänen startet der Online-Verkauf am 1. März 2027. Newsletter abonnieren, um den offiziellen Kanal zu erhalten, sobald er bekannt ist.",
      },
      {
        question: "Wann wird die Vignette Pflicht?",
        answer:
          "Nach den Plänen ab dem 1. Mai 2027 auf belgischen Autobahnen und Regionalstraßen. Eine Übergangsfrist ist vom 1. Mai bis 1. Juli 2027 geplant.",
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
          "Speicherdauer: bis Sie den Speicher löschen oder wir die Richtlinie aktualisieren (Version 2026-08-04).",
        ],
      },
      {
        id: "news-editorial",
        title: "Nachrichten, Zusammenfassungen & redaktionelle Inhalte",
        paragraphs: [
          "Unser Nachrichtenbereich veröffentlicht unabhängige Zusammenfassungen öffentlich zugänglicher Berichterstattung über die belgische Vignette. Diese Seiten sind keine Reproduktionen der Originalartikel.",
          "Zusammenfassungen und Übersetzungen können mit KI-Unterstützung erstellt werden und können im Wortlaut von der Quelle abweichen. Wir verlinken stets auf den Originalverlag. Unser redaktioneller Kommentar („Unsere Einschätzung“) ist unabhängig verfasst und repräsentiert weder den Originalverlag noch die belgischen Behörden.",
          "Bilder in Nachrichtenartikeln können aus dem verlinkten Originalartikel oder von Presseagenturen stammen, mit Credits wo zutreffend. Solche Medien bleiben Eigentum der jeweiligen Rechteinhaber. Wir zeigen sie in gutem Glauben als Referenz neben einem Link zur Quelle. Wenn Sie der Meinung sind, dass Ihre Inhalte falsch verwendet werden, kontaktieren Sie info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Ihre Rechte (DSGVO)",
        paragraphs: ["Auskunft, Berichtigung, Löschung, Widerspruch — info@tolls.be."],
      },
    ],
    lastUpdated: "4. August 2026",
  },
  news: {
    title: "Nachrichten & Updates",
    intro:
      "Wir verfolgen vertrauenswürdige offizielle und Medienquellen zur geplanten belgischen Vignette. Jeder Artikel fasst die Originalberichterstattung zusammen und ergänzt unsere unabhängige Einschätzung — mit direktem Link zur Quelle.",
    latestArticles: "Neueste Artikel",
    summaryTitle: "Zusammenfassung",
    summaryFromSource: "aus Originalquelle:",
    ourTakeTitle: "Unsere Einschätzung",
    sourceTitle: "Originalquelle",
    readArticle: "Artikel lesen",
    backToNews: "Zurück zu Nachrichten",
    publishedOn: "Veröffentlicht",
    sourceLabel: "Quelle",
    sourceDisclaimer:
      "Wir fassen vertrauenswürdige Quellen zusammen und verlinken auf den Originalartikel. Unsere Einschätzung ist unabhängiger redaktioneller Kommentar, keine amtliche Regierungsinformation.",
    translationDisclaimer:
      "Die Zusammenfassung und Übersetzung auf dieser Seite wurden mithilfe von KI auf Grundlage des Originalartikels erstellt. Beziehen Sie sich für die maßgebliche Formulierung immer auf die Quelle unten.",
    articleAttributionTitle: "Unabhängige Zusammenfassung — nicht der Originalartikel",
    articleAttributionIndependence:
      "BelgiumVignette.be ist eine unabhängige Informationsseite. Wir sind nicht mit dem Originalverlag verbunden, von ihm befürwortet oder handeln in dessen Namen. Diese Seite fasst öffentlich zugängliche Berichterstattung zusammen und fügt unseren eigenen redaktionellen Kommentar hinzu. Es handelt sich nicht um eine Reproduktion des Originalartikels.",
    articleAttributionAi:
      "Die Zusammenfassung und Übersetzung wurden mit KI-Unterstützung erstellt und können im Wortlaut vom Original abweichen. Beziehen Sie sich für den maßgeblichen Text immer auf die unten verlinkte Quelle.",
    articleAttributionReadOriginal: "Originalartikel lesen bei",
    articleAttributionCopyright:
      "Der Originalartikel, Bilder und andere Medien bleiben Eigentum der jeweiligen Rechteinhaber. Wir verlinken die Quelle in gutem Glauben zur Referenz. Bildnachweise sind oben angegeben, sofern zutreffend.",
    tableOfContents: "Auf dieser Seite",
    relatedArticles: "Weitere Nachrichten & Updates",
    noArticles: "Noch keine Artikel veröffentlicht. Schauen Sie bald wieder vorbei.",
  },
  newsletter: {
    title: "Als Erste/r informiert werden, wenn die belgische Vignette verfügbar ist",
    description: "",
    benefitsIntro: "",
    benefits: [
      "Offizieller Verkaufsstart",
      "Endgültige Preise bestätigt",
      "Neue Regeln veröffentlicht",
      "Kauf-Link verfügbar",
    ],
    emailPlaceholder: "E-Mail-Adresse",
    consentLabel: "Ich stimme Updates zu und habe die Datenschutzerklärung gelesen.",
    submit: "Benachrichtigen",
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
    {
      title: "Flämische Regierung — Straßenvignette ab 1. Mai 2027",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Offizielle Seite zu Pflicht, Tarifen und Kauf ab 1. März 2027",
    },
    {
      title: "Viapass — Kilometerabgabe für Lkw",
      url: "https://www.viapass.be",
      description: "Bestehendes System für Fahrzeuge über 3,5 Tonnen (keine Pkw-Vignette)",
    },
    {
      title: "Europäische Kommission — Straßennutzungsgebühren",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "EU-Rahmen für Maut und Nichtdiskriminierung",
    },
  ],
};

export default dictionary;
