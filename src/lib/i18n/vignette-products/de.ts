import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Tagesvignette Belgien 2027",
    intro:
      "Die Tagesvignette ist für kurze Fahrten auf belgischen Hauptstraßen vorgesehen — zum Beispiel ein Tagesausflug, eine Durchfahrt oder ein Wochenende. Die untenstehenden Tarife basieren auf veröffentlichten Plänen (März 2026) und können sich vor der Einführung am 1. Mai 2027 noch ändern.",
    metaTitle: "Tagesvignette Belgien 2027 — Preis €9 pro Tag (Konzept)",
    metaDescription:
      "Geplante Tagesvignette für Belgien ab €9 pro Tag. Für kurze Fahrten auf Autobahnen und Regionalstraßen. Konzeptpreise gemäß Plänen März 2026 — endgültige Tarife können sich noch ändern.",
    navLabel: "Tagesvignette",
    sections: [
      {
        id: "what-is-daily",
        title: "Was ist die Tagesvignette?",
        paragraphs: [
          "Die Tagesvignette gewährt laut den Plänen 24 Stunden Zugang zum belgischen Vignettennetz: Autobahnen, Autobahnringe und Regionalstraßen, auf denen 70 km/h oder mehr gilt.",
          "Das System wird digital sein und an Ihr Kennzeichen gebunden — es gibt keinen physischen Aufkleber auf der Windschutzscheibe.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Für wen ist eine Tagesvignette gedacht?",
        paragraphs: [
          "Eine Tagesvignette eignet sich für gelegentliche Nutzer: Touristen, Durchreisende, eine einzelne Geschäftsfahrt oder ein Einkaufstag jenseits der Grenze.",
          "Fahren Sie häufiger durch Belgien, ist laut den Plänen eine 10-Tage-, Monats- oder Jahresvignette günstiger.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konzeptpreise — noch keine endgültigen Tarife",
        paragraphs: [
          "Alle Beträge auf dieser Seite basieren auf Ankündigungen aus März 2026. Die endgültigen Tarife werden erst nach Genehmigung durch die Regionen und die Europäische Kommission festgelegt.",
          "Prüfen Sie vor Ihrer Reise im Mai 2027 stets offizielle Quellen.",
        ],
      },
    ],
    priceTableTitle: "Geplanter Tagestarif",
    priceTable: [{ label: "1 Tag", value: "€9" }],
    compareTableTitle: "Andere kurze Zeiträume (zum Vergleich)",
    compareTable: [
      { label: "10 Tage", value: "€12" },
      { label: "1 Monat", value: "€19" },
      { label: "2 Monate", value: "€30" },
    ],
    relatedPagesTitle: "Andere Vignettentypen",
    faqs: [
      {
        question: "Gilt die Tagesvignette für einen Kalendertag?",
        answer:
          "Laut den Plänen kaufen Sie eine Vignette für einen gewählten Zeitraum von 24 Stunden oder einen Kalendertag — die genauen Regeln werden beim Start des Verkaufssystems bekannt gegeben.",
      },
      {
        question: "Müssen Ausländer auch eine Tagesvignette kaufen?",
        answer:
          "Ja. EU-Regeln verlangen gleiche Behandlung. Auch ausländische Kennzeichen müssen laut den Plänen eine gültige Vignette auf belgischen Hauptstraßen haben.",
      },
      {
        question: "Ist €9 bereits endgültig?",
        answer:
          "Nein. €9 ist der geplante Konzepttarif aus März 2026. Endgültige Preise können noch angepasst werden.",
      },
    ],
  },
  monthlyVignette: {
    title: "Monatsvignette Belgien 2027",
    intro:
      "Die Monatsvignette ist für Fahrer geplant, die mehrere Wochen auf belgischen Hauptstraßen unterwegs sind — zum Beispiel bei vorübergehender Arbeit, im Urlaub oder bei einem längeren Aufenthalt. Die Tarife sind Konzeptpreise gemäß Plänen März 2026.",
    metaTitle: "Monatsvignette Belgien 2027 — ab €19 pro Monat (Konzept)",
    metaDescription:
      "Geplante Monatsvignette Belgien ab €19 pro Monat, 2 Monate €30. Konzeptpreise für Autobahnen und Regionalstraßen ab 1. Mai 2027.",
    navLabel: "Monatsvignette",
    sections: [
      {
        id: "what-is-monthly",
        title: "Was ist die Monatsvignette?",
        paragraphs: [
          "Die Monatsvignette bietet laut den Plänen Zugang zum belgischen Vignettennetz für etwa einen Kalendermonat.",
          "Es ist auch ein Zweimonatstarif (€30) geplant für etwas längere Aufenthalte, ohne direkt eine Jahresvignette zu kaufen.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Für wen lohnt sich eine Monatsvignette?",
        paragraphs: [
          "Pendler, die vorübergehend in Belgien arbeiten, Expats mit einem kurzen Einsatz oder Urlauber, die einen Monat im Land verbringen, können von einer Monats- oder Zweimonatsvignette profitieren.",
          "Bei gelegentlicher Nutzung ist eine Tages- oder 10-Tage-Vignette günstiger; bei dauerhafter Nutzung ist die Jahresvignette vorteilhafter.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konzeptpreise",
        paragraphs: [
          "Die untenstehenden Beträge sind geplante Tarife, keine endgültige Gesetzgebung. Sie können sich vor dem Start im Mai 2027 noch ändern.",
        ],
      },
    ],
    priceTableTitle: "Geplante Monatstarife",
    priceTable: [
      { label: "1 Monat", value: "€19" },
      { label: "2 Monate", value: "€30" },
    ],
    compareTableTitle: "Andere Laufzeiten (zum Vergleich)",
    compareTable: [
      { label: "1 Tag", value: "€9" },
      { label: "10 Tage", value: "€12" },
    ],
    relatedPagesTitle: "Andere Vignettentypen",
    faqs: [
      {
        question: "Was ist der Unterschied zwischen 1 Monat und 2 Monaten?",
        answer:
          "Laut den Plänen können Sie zwischen einer Monatsvignette (€19) und einer Zweimonatsvignette (€30) wählen. Der Zweimonatstarif ist pro Tag günstiger, wenn Sie länger bleiben.",
      },
      {
        question: "Gibt es einen separaten Tarif je Emissionsnorm für kurze Vignetten?",
        answer:
          "Für kurze Zeiträume (Tag, Monat) sind laut den aktuellen Plänen feste Beträge vorgesehen. Die Jahresvignette hängt hingegen von der Euro-Emissionsnorm Ihres Fahrzeugs ab.",
      },
      {
        question: "Sind diese Preise endgültig?",
        answer:
          "Nein. Es handelt sich um Konzeptpreise auf Basis der Pläne aus März 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Jahresvignette Belgien 2027",
    intro:
      "Die Jahresvignette ist für regelmäßige Nutzer belgischer Hauptstraßen vorgesehen. Der Preis hängt von der Emissionsnorm Ihres Fahrzeugs ab. Die untenstehenden Tarife sind Konzeptpreise gemäß Plänen März 2026.",
    metaTitle: "Jahresvignette Belgien 2027 — €90–€125 pro Jahr (Konzept)",
    metaDescription:
      "Geplante Jahresvignette Belgien: €100 für Euro 4+, €90 elektrisch, €125 für ältere Autos. Konzeptpreise je Emissionsnorm ab 1. Mai 2027.",
    navLabel: "Jahresvignette",
    sections: [
      {
        id: "what-is-annual",
        title: "Was ist die Jahresvignette?",
        paragraphs: [
          "Die Jahresvignette gewährt laut den Plänen 12 Monate Zugang zu Autobahnen, Autobahnringen und Regionalstraßen in Belgien.",
          "In Flandern fahren mehr als 97 % der Personenwagen mindestens Euro 4 — für sie sind €100 pro Jahr geplant.",
        ],
      },
      {
        id: "emission-bands",
        title: "Preise je Emissionsnorm",
        paragraphs: [
          "Anders als bei kurzen Vignetten variiert der Jahrestarif laut den Plänen je nach Euro-Emissionsnorm Ihres Fahrzeugs.",
          "Vollständig elektrische und Wasserstofffahrzeuge erhalten den niedrigsten Tarif (€90). Ältere Fahrzeuge bis Euro 3 zahlen den höchsten Betrag (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Konzeptpreise",
        paragraphs: [
          "Diese Tarife basieren auf Ankündigungen aus März 2026 und können noch angepasst werden. Endgültige Beträge folgen nach Genehmigung durch die Regionen und Europa.",
        ],
      },
    ],
    priceTableTitle: "Jahresvignette",
    priceTable: [
      { label: "Euro 4 und höher", value: "€100 / Jahr", note: "97 %+ der flämischen Autos" },
      { label: "Elektrisch / Wasserstoff", value: "€90 / Jahr" },
      { label: "Ältere Autos (bis Euro 3)", value: "€125 / Jahr" },
    ],
    compareTableTitle: "Kurze Zeiträume (zum Vergleich)",
    compareTable: [
      { label: "1 Tag", value: "€9" },
      { label: "10 Tage", value: "€12" },
      { label: "1 Monat", value: "€19" },
      { label: "2 Monate", value: "€30" },
    ],
    relatedPagesTitle: "Andere Vignettentypen",
    faqs: [
      {
        question: "Müssen Belgier auch eine Jahresvignette kaufen?",
        answer:
          "Ja. EU-Regeln verbieten eine Vignette nur für Ausländer. Belgier zahlen ebenfalls, aber Flandern plant eine Kompensation durch Reform der Verkehrssteuer.",
      },
      {
        question: "Gilt €100 für alle Autos?",
        answer:
          "Nein. Nur Fahrzeuge mit mindestens Euro 4. Elektroautos zahlen laut den Plänen €90; ältere Autos bis Euro 3 zahlen €125.",
      },
      {
        question: "Sind das endgültige Preise?",
        answer:
          "Nein. Es sind geplante Konzepttarife, die sich noch ändern können.",
      },
    ],
  },
  electricVignette: {
    title: "Elektro-Vignette Belgien 2027",
    intro:
      "Besitzer vollständig elektrischer und Wasserstofffahrzeuge zahlen laut den Plänen den niedrigsten Jahrestarif: €90. Dies ist ein Konzeptpreis auf Basis von Ankündigungen aus März 2026 — kein endgültiger Tarif.",
    metaTitle: "Elektro-Vignette Belgien 2027 — €90 pro Jahr (Konzept)",
    metaDescription:
      "Geplante Vignette für Elektroautos in Belgien: €90 pro Jahr, der niedrigste Jahrestarif. Konzeptpreis gemäß Plänen März 2026. Vergleich mit anderen Emissionsnormen.",
    navLabel: "Elektro-Vignette",
    sections: [
      {
        id: "ev-rate",
        title: "Niedrigster Jahrestarif für E-Fahrzeuge",
        paragraphs: [
          "Vollständig elektrische und Wasserstofffahrzeuge erhalten laut den Plänen die günstigste Jahresvignette: €90 pro Jahr.",
          "Das sind €10 weniger als die meisten Euro-4+-Autos (€100) und €35 weniger als ältere Fahrzeuge (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "Warum zahlen E-Fahrer trotzdem?",
        paragraphs: [
          "Elektrofahrzeuge belasten die Straßen wie andere Autos. Der niedrigere Tarif belohnt die geringeren Emissionen, aber die Vignette bleibt laut den Plänen Pflicht.",
          "Der flämische Minister Ben Weyts betonte, dass €90 deutlich weniger ist als andere Kategorien — aber nicht null.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konzeptpreise",
        paragraphs: [
          "€90 ist ein geplanter Konzepttarif. Endgültige Preise und mögliche Änderungen werden erst vor dem Start im Mai 2027 bekannt gegeben.",
        ],
      },
    ],
    priceTableTitle: "Elektrisch / Wasserstoff — Jahresvignette",
    priceTable: [{ label: "Elektrisch / Wasserstoff", value: "€90 / Jahr" }],
    compareTableTitle: "Andere Jahrestarife (zum Vergleich)",
    compareTable: [
      { label: "Euro 4 und höher", value: "€100 / Jahr", note: "97 %+ der flämischen Autos" },
      { label: "Ältere Autos (bis Euro 3)", value: "€125 / Jahr" },
    ],
    relatedPagesTitle: "Andere Vignettentypen",
    faqs: [
      {
        question: "Gilt €90 auch für Plug-in-Hybride?",
        answer:
          "Nein. Laut den Plänen gilt der E-Fahrzeug-Tarif für vollständig elektrische und Wasserstofffahrzeuge. Plug-in-Hybride fallen unter die Emissionsnorm ihres Verbrennungsmotors.",
      },
      {
        question: "Gibt es E-Fahrzeug-Rabatt bei kurzen Vignetten?",
        answer:
          "Für Tages-, Monats- und kurze Vignetten sind laut den aktuellen Plänen feste Beträge vorgesehen, unabhängig vom Antrieb. Der niedrigere E-Fahrzeug-Tarif gilt für die Jahresvignette.",
      },
      {
        question: "Ist €90 endgültig?",
        answer:
          "Nein. Es ist ein Konzeptpreis auf Basis der Pläne aus März 2026.",
      },
    ],
  },
};

export default pages;
