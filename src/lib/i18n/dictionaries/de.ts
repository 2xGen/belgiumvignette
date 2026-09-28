import type { BaseDictionary } from "../types";
import { deTolls } from "../tolls/de";
import { buildRateMatrix } from "../rate-matrix";

const deRateMatrix = buildRateMatrix({
  vehicleHeader: "Fahrzeug",
  dayHeader: "1 Tag",
  tenDaysHeader: "10 Tage",
  monthHeader: "1 Monat",
  twoMonthsHeader: "2 Monate",
  yearHeader: "1 Jahr",
  euro03: "Euro 0 bis 3",
  euro4: "Euro 4 und höher",
  zeroEmission: "Emissionsfrei",
});

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
    tolls: "Maut",
    news: "Nachrichten & Updates",
    privacy: "Datenschutz",
  },
  meta: {
    home: {
      title: "Vignette Belgien 2027: Preise, Autobahnen & Kauf",
      description:
        "Belgien plant eine digitale Straßenvignette ab Mai 2027. Geplante Preise, wer sie braucht, Motorrad-Befreiungen und wo Sie kaufen können.",
    },
    prices: {
      title: "Vignette Belgien Preise 2027: Tarife nach Euro-Norm und Laufzeit",
      description:
        "Vollständige Preistabelle der belgischen Straßenvignette 2027 nach Euro-Norm und Laufzeit — von 8,10 €/Tag (emissionsfrei) bis 125 €/Jahr (Euro 0–3).",
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
    tolls: {
      title: "Maut in Belgien 2027: Autobahnen, Vignette und Tarife",
      description:
        "Sind belgische Autobahnen mautpflichtig? Erfahren Sie mehr zu Maut, der geplanten Vignette ab Mai 2027, Tarifen und Regeln für ausländische Autos.",
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
    lastUpdatedDate: "28. September 2026",
    lastUpdatedIso: "2026-09-28",
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
        title: "Wer muss eine Vignette in Belgien kaufen?",
        summary:
          "Pkw bis 3,5 Tonnen, einschließlich ausländischer Fahrzeuge auf den betroffenen Straßen — auch bei Durchreise.",
        href: "foreign",
        linkLabel: "Leitfaden für ausländische Fahrer",
      },
      {
        title: "Wer ist von der belgischen Vignette befreit?",
        summary:
          "Motorräder, LKW (Kilometerabgabe), Traktoren, Reisebusse, Rettungsdienste und Polizei — laut aktuellen Plänen.",
        href: "exemptions",
        linkLabel: "Alle Befreiungen ansehen",
      },
      {
        title: "Was kostet die Vignette Belgien 2027?",
        summary:
          "Der Preis hängt von Euro-Norm und Laufzeit ab: ab 8,10 €/Tag (emissionsfrei) und 9 €/Tag (Euro 4+), bis 90–125 € pro Jahr.",
        href: "prices",
        linkLabel: "Vollständiger Preisüberblick",
      },
    ],
    overview: {
      title: "Straßenvignette in Belgien: was für 2027 geplant ist",
      paragraphs: [
        "Belgien plant ab dem 1. Mai 2027 eine digitale Straßenvignette. Die belgische Vignette würde für Pkw bis 3,5 Tonnen auf Autobahnen und bestimmten regionalen Hauptstraßen gelten.",
        "Auch ausländische Autos wären betroffen. Fahrer aus Frankreich, den Niederlanden, Deutschland und anderen Ländern bräuchten eine Vignette für die betroffenen belgischen Straßen.",
        "Es wäre kein Aufkleber an der Windschutzscheibe. Die belgische Autobahnvignette wäre digital und an das Kennzeichen gebunden, mit Kontrollen unter anderem durch ANPR-Kameras.",
        "Nach den von der flämischen Regierung veröffentlichten Tarifen hängt der Preis von Euro-Norm und Laufzeit ab: ab 8,10 € pro Tag für emissionsfreie Fahrzeuge und 9 € pro Tag für Euro 4+, bis 90–125 € pro Jahr. Auch 10 Tage, 1 Monat und 2 Monate sind geplant.",
        "Motorräder wären laut aktuellen Plänen befreit. Endgültige Beträge und Regeln müssen vor dem Inkrafttreten noch bestätigt werden.",
      ],
    },
    intentSections: [
      {
        id: "autobahnen",
        title: "Braucht man eine Vignette für Autobahnen in Belgien?",
        paragraphs: [
          "Nach aktuellen Plänen würde eine digitale Straßenvignette ab dem 1. Mai 2027 auf belgischen Autobahnen und bestimmten regionalen Hauptstraßen Pflicht.",
          "Heute sind die meisten belgischen Autobahnen für Pkw kostenlos. Das Vignettenprojekt würde das ändern: Zugang zu Autobahnen und einem Teil des schnelleren regionalen Netzes würde eine kennzeichengebundene Vignette erfordern.",
          "Wenn Sie nur lokale Straßen nutzen, wäre laut veröffentlichten Informationen keine Vignette nötig. In der Praxis ist es oft schwer, Autobahnen und regionale Hauptstraßen bei Überland- oder Transitfahrten vollständig zu vermeiden.",
        ],
        link: {
          href: "tolls",
          label: "Maut und Autobahnen in Belgien",
        },
      },
      {
        id: "motorrader",
        title: "Brauchen Motorräder eine belgische Vignette?",
        paragraphs: [
          "Nein. Laut Ankündigungen der Behörden wären Motorräder ausdrücklich von der belgischen Vignette befreit.",
          "Die Pflicht würde Kraftfahrzeuge mit mindestens vier Rädern bis 3,5 Tonnen betreffen — insbesondere Pkw, manche leichte Transporter und Wohnmobile. Lkw bleiben unter der Viapass-Kilometerabgabe.",
        ],
        link: {
          href: "exemptions",
          label: "Details zu den Befreiungen",
        },
      },
      {
        id: "kaufen",
        title: "Wo kann man die Vignette Belgien kaufen?",
        paragraphs: [
          "Der offizielle Verkauf hat noch nicht begonnen. Nach aktuellen Plänen wäre der Online-Kauf ab dem 1. März 2027 über die offizielle Website oder einen zugelassenen Partner möglich.",
          "Es gibt heute kein offizielles Verkaufsportal. Seiten, die bereits Reservierung oder Zahlung anbieten, sind nicht der offizielle Kanal.",
        ],
        link: {
          href: "buy",
          label: "Vignette Belgien kaufen: Termine und offizielle Kanäle",
        },
      },
    ],
    pricingTitle: "Was kostet die Vignette Belgien 2027?",
    pricingParagraphs: [
      "Der Preis der belgischen Straßenvignette hängt von der Euro-Norm Ihres Fahrzeugs und der Gültigkeitsdauer ab. Für Autos mit Euro 4 oder höher beginnen die geplanten Tarife bei 9 € für 1 Tag und 100 € für 1 Jahr. Ältere Fahrzeuge zahlen mehr, emissionsfreie Fahrzeuge erhalten einen niedrigeren Tarif.",
    ],
    pricingLinkLabel: "Alle Preise der belgischen Vignette ansehen",
    pricingLinkSecondaryLabel: "Vollständiger Preisüberblick",
    pricingMatrixTitle: "Geplante Tarife",
    rateMatrix: deRateMatrix,
    pricingNote:
      "Dies sind die derzeit von der flämischen Regierung veröffentlichten Tarife. Die Einführung steht noch unter dem Vorbehalt der endgültigen Genehmigung.",
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
        question: "Braucht man eine Vignette für Autobahnen in Belgien?",
        answer:
          "Nach aktuellen Plänen ja ab dem 1. Mai 2027 auf belgischen Autobahnen und bestimmten regionalen Hauptstraßen. Lokale Straßen würden außerhalb der Pflicht bleiben.",
      },
      {
        question: "Brauchen Motorräder eine belgische Vignette?",
        answer:
          "Nein. Motorräder sind laut Ministers Weyts und Desquesnes ausdrücklich befreit.",
      },
      {
        question: "Gilt das für ausländische Autos?",
        answer:
          "Ja. EU-Regeln verlangen Gleichbehandlung. Belgische und ausländische Fahrer müssen auf den betroffenen Straßen zahlen.",
      },
      {
        question: "Wo kann man die Vignette Belgien kaufen?",
        answer:
          "Der offizielle Verkauf hat noch nicht begonnen. Nach den Plänen ist der Online-Kauf ab dem 1. März 2027 über den offiziellen Kanal oder einen zugelassenen Partner vorgesehen.",
      },
    ],
    sourcesTitle: "Offizielle Quellen",
  },
  prices: {
    title: "Vignette Belgien Preise 2027: Tarife nach Euro-Norm und Laufzeit",
    intro:
      "Der geplante Preis der belgischen Straßenvignette hängt von zwei Faktoren ab: der Euro-Norm Ihres Fahrzeugs und der Gültigkeitsdauer der Vignette. Die flämische Regierung hat Tarife für 1 Tag, 10 Tage, 1 Monat, 2 Monate und 1 Jahr veröffentlicht.",
    leadParagraphs: [
      "Für ein Auto mit Euro 4 oder höher kostet die belgische Vignette laut aktuellen Tarifen 9 € für 1 Tag, 12 € für 10 Tage und 100 € für ein Jahr. Emissionsfreie Fahrzeuge zahlen weniger, Fahrzeuge mit Euro 0 bis Euro 3 zahlen mehr.",
      "Die Vignette ist ab dem 1. Mai 2027 geplant. Der Kauf soll ab dem 1. März 2027 möglich werden. Die Einführung steht noch unter dem Vorbehalt der endgültigen Genehmigung.",
    ],
    matrixTitle: "Preise belgische Straßenvignette 2027",
    rateMatrix: deRateMatrix,
    matrixNote:
      "Diese Tarife wurden von der flämischen Regierung veröffentlicht. Der Preis hängt also nicht nur davon ab, wie lange Sie die Vignette brauchen, sondern auch von der Euro-Norm Ihres Fahrzeugs.",
    buyLinkParagraph:
      "[[buy|Sehen Sie, wo und wann Sie die belgische Vignette kaufen können]].",
    categorySections: [
      {
        id: "euro-4",
        title: "Was kostet eine belgische Vignette für Euro 4 und höher?",
        paragraphs: [
          "Für Fahrzeuge mit Euro 4 oder höher gelten laut veröffentlichten Tarifen:",
        ],
        list: [
          "1 Tag: 9 €",
          "10 Tage: 12 €",
          "1 Monat: 19 €",
          "2 Monate: 30 €",
          "1 Jahr: 100 €",
        ],
        linkParagraph:
          "Das ist die Kategorie, in die ein großer Teil des heutigen Fuhrparks fällt. Für eine kurze Durchreise durch Belgien kann daher eine Tages- oder 10-Tage-Vignette ausreichen. Wer regelmäßig belgische Regional- und Autobahnstrecken nutzt, kann die Jahresvignette mit kürzeren Laufzeiten vergleichen. Mehr zur [[dailyVignette|Tagesvignette]] oder zur [[annualVignette|Jahresvignette]].",
      },
      {
        id: "euro-0-3",
        title: "Was kostet eine belgische Vignette für Euro 0 bis Euro 3?",
        paragraphs: [
          "Ältere Fahrzeuge mit Euro 0, Euro 1, Euro 2 oder Euro 3 fallen in die teuerste Tarifkategorie.",
          "Die geplanten Preise reichen von 11,25 € für einen Tag bis 125 € für ein Jahr.",
        ],
        tableTitle: "Preis Euro 0–3",
        table: [
          { label: "1 Tag", value: "11,25 €" },
          { label: "10 Tage", value: "15 €" },
          { label: "1 Monat", value: "23,75 €" },
          { label: "2 Monate", value: "37,50 €" },
          { label: "1 Jahr", value: "125 €" },
        ],
      },
      {
        id: "elektro",
        title: "Was kostet die Vignette für ein Elektroauto?",
        paragraphs: [
          "Für emissionsfreie Fahrzeuge gilt der niedrigste Tarif. Laut aktueller Preistabelle kostet die Vignette 8,10 € für einen Tag und 90 € für ein volles Jahr.",
        ],
        tableTitle: "Preis emissionsfrei",
        table: [
          { label: "1 Tag", value: "8,10 €" },
          { label: "10 Tage", value: "10,80 €" },
          { label: "1 Monat", value: "17,10 €" },
          { label: "2 Monate", value: "27 €" },
          { label: "1 Jahr", value: "90 €" },
        ],
        linkParagraph:
          "[[electricVignette|Mehr zur belgischen Vignette für Elektroautos]].",
      },
    ],
    durationSection: {
      id: "laufzeit",
      title: "Welche Laufzeit brauche ich?",
      paragraphs: [
        "Laut aktuellen Plänen können Sie aus fünf Gültigkeitszeiträumen wählen:",
        "Die beste Laufzeit hängt davon ab, wie oft und wie lange Sie die Straßen nutzen, auf denen die Vignette Pflicht wird.",
        "Siehe die separate Erklärung zur [[dailyVignette|Tagesvignette]], [[monthlyVignette|Monatsvignette]] und [[annualVignette|Jahresvignette]].",
      ],
      list: [
        "1 Tag — für eine kurze Durchreise oder einen Tagesausflug.",
        "10 Tage — beispielsweise für Urlaub oder einen längeren Besuch.",
        "1 Monat — für mehrere Fahrten über einige Wochen.",
        "2 Monate — für einen längeren Aufenthalt oder regelmäßigen vorübergehenden Gebrauch.",
        "1 Jahr — für Fahrer, die regelmäßig auf belgischen Regional- und Autobahnstrecken unterwegs sind.",
      ],
    },
    whenSection: {
      id: "wann",
      title: "Wann gelten diese Preise?",
      paragraphs: [
        "Die digitale Straßenvignette ist ab dem 1. Mai 2027 geplant. Laut aktueller offizieller Information könnte die Vignette ab dem 1. März 2027 online gekauft werden.",
        "Die praktische Umsetzung läuft noch und die Einführung steht unter dem Vorbehalt der endgültigen Genehmigung.",
        "Möchten Sie wissen, wie der Kauf funktionieren wird? Siehe [[buy|Vignette Belgien kaufen]]. Für alle Regeln, Fahrzeuge und wichtige Termine finden Sie unseren kompletten Leitfaden zur [[home|belgischen Straßenvignette 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Wechselwirkung mit der Verkehrssteuer (Flandern)",
        paragraphs: [
          "Flandern reformiert gleichzeitig die jährliche Kfz-Steuer. Schätzungen zufolge könnte etwa die Hälfte der flämischen Autofahrer netto mehr zahlen — bis zu 100 € extra pro Jahr.",
          "Die Senkung der Verkehrssteuer gleicht laut den Plänen nicht für jeden die Vignettenkosten vollständig aus. Dies ist Hintergrundinformation; die Vignettenpreise oben gelten unabhängig von dieser Reform.",
        ],
      },
    ],
    euroNormTitle: "Euro-Normen kurz erklärt",
    euroNormCategoryHeader: "Norm",
    euroNormDescriptionHeader: "Beschreibung",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Fahrzeuge ab ca. 2005–2006. Die Mehrheit auf der Straße. Tagestarif 9 €, Jahr 100 €.",
      },
      {
        norm: "Emissionsfrei",
        description: "Vollständig emissionsfrei (Elektro / Wasserstoff). Niedrigster Tarif: ab 8,10 €/Tag, 90 €/Jahr.",
      },
      {
        norm: "Euro 3 und niedriger",
        description: "Ältere, stärker verschmutzende Fahrzeuge. Höchster Tarif: ab 11,25 €/Tag, 125 €/Jahr.",
      },
    ],
    vignettePagesTitle: "Nach Vignettenart",
    faqs: [
      {
        question: "Was ist der niedrigste geplante Tagespreis?",
        answer:
          "Laut flämischer Regierung beträgt der niedrigste Tagestarif 8,10 € für emissionsfreie Fahrzeuge. Für Euro 4 und höher sind es 9 €; für Euro 0 bis 3 sind es 11,25 €.",
      },
      {
        question: "Gelten die kurzen Zeiträume für alle Emissionsklassen?",
        answer:
          "Ja. Jede Laufzeit (1 Tag, 10 Tage, 1 Monat, 2 Monate, 1 Jahr) hat einen eigenen Tarif pro Euro-Norm-Kategorie. Die Beträge unterscheiden sich je Kategorie.",
      },
      {
        question: "Sind Transporter absetzbar?",
        answer:
          "Laut Plänen könnten die Vignettenkosten für gewerbliche Transporter voll als Betriebsausgabe absetzbar sein.",
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
  tolls: deTolls,
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
    emailPlaceholder: "E-Mail-Adresse",
    consentLabel: "Ich stimme dem Erhalt von Updates zu und habe die",
    success: "Danke! Sie sind angemeldet.",
    error: "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
    privacyLink: "Datenschutzerklärung gelesen.",
    sticky: {
      teaser: "Vignette noch nicht erhältlich — Kauf-Link sichern",
      cta: "Anmelden →",
      closeLabel: "Schließen",
    },
    intents: {
      home: {
        title:
          "Erhalten Sie den offiziellen Kauf-Link, sobald die belgische Vignette verfügbar ist",
        description:
          "Der Verkauf ist ab dem 1. März 2027 geplant. Hinterlassen Sie Ihre E-Mail-Adresse und erhalten Sie eine Benachrichtigung, sobald der offizielle Kauf möglich ist.",
        benefits: [
          "Offizieller Kauf-Link, sobald er verfügbar ist",
          "Updates bei Änderungen von Preisen oder Regeln",
          "Keine unnötigen E-Mails",
        ],
        submit: "Kauf-Link an mich senden",
      },
      prices: {
        title: "Benachrichtigung, sobald die endgültigen Vignettenpreise bestätigt sind",
        description:
          "Die aktuellen Tarife wurden veröffentlicht, die Einführung muss jedoch noch endgültig genehmigt werden. Wir verfolgen die offiziellen Informationen für Sie.",
        benefitsIntro: "Erhalten Sie eine E-Mail, sobald:",
        benefits: [
          "die endgültigen Preise bestätigt sind;",
          "der offizielle Verkauf startet;",
          "der offizielle Kauf-Link verfügbar ist.",
        ],
        submit: "Auf dem Laufenden halten",
      },
      buy: {
        title: "Benachrichtigen Sie mich, sobald die belgische Vignette zu kaufen ist",
        description:
          "Der offizielle Verkauf hat noch nicht begonnen. Nach der aktuellen Planung können Sie die belgische Vignette ab dem 1. März 2027 kaufen. Hinterlassen Sie Ihre E-Mail-Adresse und erhalten Sie eine Benachrichtigung, sobald der offizielle Kauf möglich ist.",
        benefits: [],
        submit: "Kauf-Link an mich senden",
      },
      foreign: {
        title:
          "Benachrichtigen Sie mich, wenn ausländische Autos ihre Vignette registrieren können",
        description:
          "Nach den Plänen benötigen auch ausländische Fahrer eine belgische Vignette. Erhalten Sie eine Benachrichtigung, sobald Registrierung und Kauf offiziell möglich sind.",
        benefits: [
          "Start des offiziellen Verkaufs",
          "Regeln für ausländische Kennzeichen",
          "Offizieller Kauf-Link",
        ],
        submit: "Auf dem Laufenden halten",
      },
      news: {
        title: "Wichtige Updates zur belgischen Vignette erhalten",
        description:
          "Kurze, relevante Meldungen, wenn es offizielle Neuigkeiten zu Preisen, Regeln oder dem Verkaufsstart gibt.",
        benefits: [
          "Wichtige offizielle Updates",
          "Kein täglicher Spam",
          "Kauf-Link, sobald verfügbar",
        ],
        submit: "Updates erhalten",
      },
      default: {
        title:
          "Erhalten Sie den offiziellen Kauf-Link, sobald die belgische Vignette verfügbar ist",
        description:
          "Der Verkauf soll am 1. März 2027 starten. Wir senden Ihnen eine Benachrichtigung, sobald Sie offiziell kaufen können.",
        benefits: [
          "Offizieller Kauf-Link",
          "Updates zu Preisen und Regeln",
          "Keine unnötigen E-Mails",
        ],
        submit: "Kauf-Link an mich senden",
      },
    },
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
