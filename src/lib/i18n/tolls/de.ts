import type { Dictionary } from "../types";

export const deTolls: Dictionary["tolls"] = {
  title: "Maut in Belgien: gebührenpflichtige Autobahnen und Vignette 2027",
  intro:
    "Fahren Sie mit dem Auto nach Belgien? Erfahren Sie, ob belgische Autobahnen mautpflichtig sind, wie die geplante Straßenvignette ab 2027 funktioniert und welche Tarife für Ihr Fahrzeug gelten können.",
  blocks: [
    {
      type: "section",
      id: "autoroutes-payantes",
      title: "Sind die Autobahnen in Belgien mautpflichtig?",
      paragraphs: [
        "Für Personenkraftwagen gibt es in Belgien derzeit kein allgemeines Autobahnvignetten-System wie in Österreich oder der Schweiz.",
        "Das soll sich 2027 ändern.",
        "Belgien plant ab dem 1. Mai 2027 eine digitale Straßenvignette für betroffene Fahrzeuge auf Autobahnen und Regionalstraßen. Das System würde für belgische und im Ausland zugelassene Fahrzeuge gelten.",
        "Wenn Sie nach diesem Datum nach Belgien fahren möchten, lesen Sie unseren vollständigen Leitfaden zur [[home|Vignette Belgien 2027]].",
      ],
    },
    {
      type: "summary",
      title: "Kurz gesagt",
      items: [
        {
          label: "Derzeit",
          value: "Keine allgemeine Straßenvignette für Personenkraftwagen.",
        },
        {
          label: "Ab 1. Mai 2027",
          value: "Einführung einer digitalen Vignette geplant.",
        },
        {
          label: "Betroffene Fahrzeuge",
          value:
            "Kraftfahrzeuge mit mindestens vier Rädern bis 3,5 Tonnen.",
        },
        {
          label: "Ausländische Autos",
          value: "Ebenfalls betroffen.",
        },
        {
          label: "Motorräder",
          value:
            "Nicht von dieser Pflicht betroffen, wie derzeit vorgesehen.",
        },
        {
          label: "Kauf",
          value:
            "Online, mit Verkaufsstart voraussichtlich ab dem 1. März 2027.",
        },
      ],
    },
    {
      type: "section",
      id: "peage-ou-vignette",
      title: "Maut oder Vignette: wie funktioniert das belgische System?",
      paragraphs: [
        "Das geplante belgische System ist keine klassische Maut, bei der Sie an jeder Schranke zahlen.",
        "Es handelt sich um eine Straßenvignette, die für einen bestimmten Zeitraum Zugang zu den betroffenen Straßen gewährt.",
        "Im Gegensatz zu einem Aufkleber an der Windschutzscheibe wird die belgische Vignette digital sein. Sie wird mit dem Kennzeichen des Fahrzeugs verknüpft.",
        "Sie können also ohne physischen Aufkleber fahren. Beim Kauf müssen Sie insbesondere das Kennzeichen korrekt erfassen.",
        "Wie das neue System funktioniert, erklären wir in unserem Leitfaden zur [[home|Straßenvignette in Belgien]].",
      ],
    },
    {
      type: "section",
      id: "routes-concernees",
      title: "Welche Straßen werden 2027 in Belgien mautpflichtig?",
      paragraphs: [
        "Die Vignette ist für die Nutzung belgischer Autobahnen und betroffener Regionalstraßen vorgesehen.",
        "Fahrer, die nur auf lokalen Straßen unterwegs sind, sollten keine Vignette benötigen.",
        "Wer Belgien also über die Autobahn durchquert — etwa Richtung Frankreich, Niederlande, Deutschland oder Luxemburg — muss die neue Pflicht ab dem Inkrafttreten berücksichtigen.",
        "Praktische Modalitäten und das genaue Straßennetz können vor dem endgültigen Start noch präzisiert werden.",
      ],
    },
    {
      type: "pricing",
      id: "prix",
      title: "Was kostet die Maut in Belgien?",
      paragraphs: [
        "Es sollte keinen Einheitspreis pro Fahrt geben. Der Fahrer kauft eine Vignette, die für einen bestimmten Zeitraum gültig ist.",
        "Die derzeit veröffentlichten Tarife hängen von der Euro-Norm des Fahrzeugs und der gewählten Laufzeit ab.",
      ],
      durationHeader: "Laufzeit",
      priceHeader: "Tarif",
      tables: [
        {
          title: "Geplante Tarife für Fahrzeuge Euro 4 und höher",
          rows: [
            { label: "1 Tag", value: "9 €" },
            { label: "10 Tage", value: "12 €" },
            { label: "1 Monat", value: "19 €" },
            { label: "2 Monate", value: "30 €" },
            { label: "1 Jahr", value: "100 €" },
          ],
        },
        {
          title: "Geplante Tarife für Fahrzeuge Euro 0 bis Euro 3",
          rows: [
            { label: "1 Tag", value: "11,25 €" },
            { label: "10 Tage", value: "15 €" },
            { label: "1 Monat", value: "23,75 €" },
            { label: "2 Monate", value: "37,50 €" },
            { label: "1 Jahr", value: "125 €" },
          ],
        },
        {
          title: "Geplante Tarife für emissionsfreie Fahrzeuge",
          rows: [
            { label: "1 Tag", value: "8,10 €" },
            { label: "10 Tage", value: "10,80 €" },
            { label: "1 Monat", value: "17,10 €" },
            { label: "2 Monate", value: "27 €" },
            { label: "1 Jahr", value: "90 €" },
          ],
        },
      ],
      linkParagraph:
        "Beträge, Fahrzeugkategorien und aktuelle Updates finden Sie auf unserer Seite [[prices|Preise und Tarife der Vignette Belgien]].",
      notice:
        "Achtung: Das System muss noch die letzten Schritte des Gesetzgebungsverfahrens durchlaufen. Die Modalitäten können sich vor dem Inkrafttreten noch ändern.",
    },
    {
      type: "section",
      id: "traverser",
      title: "Muss man zahlen, um Belgien mit dem Auto zu durchqueren?",
      paragraphs: [
        "Ab dem 1. Mai 2027 müssen Fahrer, die betroffene Autobahnen oder Regionalstraßen nutzen, über eine gültige Vignette verfügen — sofern das System wie geplant in Kraft tritt.",
        "Das gilt auch für Fahrer, die Belgien nur durchqueren, um ein anderes Land zu erreichen.",
        "Ein in Frankreich, den Niederlanden oder Deutschland zugelassenes Auto ist beispielsweise nicht automatisch befreit, weil der Fahrer nicht in Belgien wohnt.",
        "Die Vignette ist für betroffene Fahrzeuge vorgesehen, die das Straßennetz nutzen — unabhängig vom Zulassungsland.",
        "Lesen Sie unseren Leitfaden für [[foreign|ausländische Fahrer in Belgien]], um die Regeln für ausländische Fahrzeuge zu prüfen.",
      ],
    },
    {
      type: "section",
      id: "voitures-francaises",
      title: "Müssen französische Autos auf belgischen Autobahnen zahlen?",
      paragraphs: [
        "Französische Autos unterliegen denselben Vignettenregeln wie andere ausländische Autos auf den betroffenen Straßen.",
        "Ein französischer Autofahrer, der ab dem 1. Mai 2027 eine belgische Autobahn nutzt, braucht nach den derzeit vorgesehenen Regeln daher eine gültige Vignette.",
        "Für einen kurzen Aufenthalt oder reine Durchreise ist nicht automatisch eine Jahresvignette nötig. Auch Laufzeiten von 1 Tag, 10 Tagen, 1 Monat und 2 Monaten sind vorgesehen.",
      ],
    },
    {
      type: "section",
      id: "voitures-etrangeres",
      title: "Müssen ausländische Autos zahlen?",
      paragraphs: [
        "Ja. Das Projekt sieht ausdrücklich vor, dass die Vignette auch für ausländische Nutzer der betroffenen Autobahnen und Regionalstraßen gilt.",
        "Das betrifft insbesondere Fahrzeuge aus:",
      ],
      list: [
        "Frankreich",
        "Niederlande",
        "Deutschland",
        "Luxemburg",
        "Vereinigtes Königreich",
        "anderen europäischen oder außereuropäischen Ländern",
      ],
    },
    {
      type: "section",
      id: "motos",
      title: "Müssen Motorräder in Belgien eine Maut zahlen?",
      paragraphs: [
        "Die geplante Vignette betrifft Kraftfahrzeuge mit mindestens vier Rädern und einer technisch zulässigen Gesamtmasse von höchstens 3,5 Tonnen.",
        "Motorräder sind daher von dieser Pflicht nicht betroffen, wie sie derzeit vorgesehen ist.",
        "Andere Fahrzeugkategorien können anderen Regeln unterliegen. Prüfen Sie vor Ihrer Fahrt die vollständige Liste der [[exemptions|Befreiungen von der belgischen Vignette]].",
      ],
    },
    {
      type: "section",
      id: "camping-cars",
      title: "Wohnmobile und Transporter: braucht man eine Vignette?",
      paragraphs: [
        "Wohnmobile und manche Transporter bis 3,5 Tonnen fallen unter das geplante System, wenn sie betroffene Autobahnen und Regionalstraßen nutzen.",
        "Wichtige Kriterien sind insbesondere die Fahrzeugkategorie und die technisch zulässige Gesamtmasse.",
        "Fahrzeuge über 3,5 Tonnen können einem anderen Straßennutzungsgebührensystem unterliegen.",
      ],
    },
    {
      type: "section",
      id: "poids-lourds",
      title: "Und Lkw über 3,5 Tonnen?",
      paragraphs: [
        "Die neue Vignette für Fahrzeuge bis 3,5 Tonnen ersetzt nicht das bestehende belgische System für schwere Nutzfahrzeuge.",
        "Belgien hat bereits eine Kilometerabgabe für Lkw im Rahmen des Viapass-Systems.",
        "Zu unterscheiden ist daher:",
      ],
      list: [
        "Pkw, Transporter und manche Wohnmobile bis 3,5 t → Straßenvignette geplant ab 2027.",
        "Betroffene Lkw über 3,5 t → bestehendes Kilometerabgabesystem.",
      ],
    },
    {
      type: "section",
      id: "acheter",
      title: "Wo kann man die Vignette für belgische Autobahnen kaufen?",
      paragraphs: [
        "Die Vignette ist noch nicht im Verkauf.",
        "Nach derzeit veröffentlichten offiziellen Informationen sollte der Kauf ab dem 1. März 2027 möglich werden — vor dem geplanten Inkrafttreten am 1. Mai.",
        "Die Vignette kann online über die offizielle Website oder bei einer anerkannten Partnerorganisation gekauft werden.",
        "Kaufen Sie vor der offiziellen Verkaufseröffnung keine angebliche Vignette Belgien 2027 auf einer nicht geprüften Website.",
        "Wir verfolgen die Verkaufseröffnung und veröffentlichen den Link, sobald er verfügbar ist. Siehe [[buy|wo die Vignette Belgien kaufen]] für die neuesten Informationen.",
      ],
    },
    {
      type: "section",
      id: "controles",
      title: "Wie wird die Vignette kontrolliert?",
      paragraphs: [
        "Die Vignette wird vollständig digital und mit dem Kennzeichen des Fahrzeugs verknüpft.",
        "Es ist daher nicht nötig, eine physische Vignette an die Windschutzscheibe zu kleben.",
        "Besonders wichtig ist die korrekte Eingabe des Kennzeichens beim Kauf. Fahren auf einer vignettenpflichtigen Straße ohne gültige Vignette kann zu einer Sanktion führen, sobald das Kontrollsystem vollständig angewendet wird.",
        "Lesen Sie unsere Seite zu [[fines|Bußgeldern im Zusammenhang mit der Vignette Belgien]] für die aktuellen Kontroll- und Sanktionsregeln.",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "Belgien 2027: Maut, Vignette oder kostenlose Autobahnen?",
      paragraphs: [
        "Die Änderung kann verwirrend sein, weil Begriffe wie Maut Belgien, gebührenpflichtige Autobahn Belgien und Vignette Belgien oft für dieselbe Veränderung verwendet werden.",
        "In der Praxis ist das geplante System keine traditionelle distanzbasierte Maut für Personenkraftwagen.",
        "Es handelt sich um eine digitale Vignette, die für einen bestimmten Zeitraum gültig ist.",
        "Sie können die Laufzeit wählen, die zu Ihrer Reise passt: einen Tag für eine sehr kurze Durchfahrt, 10 Tage für einen Aufenthalt, ein oder zwei Monate für einen längeren Zeitraum oder eine Jahresvignette für die regelmäßige Nutzung.",
      ],
    },
  ],
  faqTitle: "Häufige Fragen zur Maut in Belgien",
  faqs: [
    {
      question: "Gibt es Maut in Belgien?",
      answer:
        "Für Personenkraftwagen gibt es derzeit keine allgemeine Straßenvignette vergleichbar mit Systemen in manchen anderen europäischen Ländern. Eine digitale Vignette ist jedoch ab dem 1. Mai 2027 für die Nutzung betroffener Autobahnen und Regionalstraßen geplant.",
    },
    {
      question: "Werden belgische Autobahnen 2027 mautpflichtig?",
      answer:
        "Die Nutzung betroffener Autobahnen und Regionalstraßen erfordert eine Vignette für Fahrzeuge unter dem neuen System, sofern dieses wie geplant am 1. Mai 2027 in Kraft tritt.",
    },
    {
      question: "Was kostet die Autobahn in Belgien?",
      answer:
        "Der Preis wird für betroffene Autos nicht pro Kilometer berechnet. Für ein Fahrzeug Euro 4 oder höher reichen die derzeit veröffentlichten Tarife von 9 € für 1 Tag bis 100 € für 1 Jahr. Ältere und emissionsfreie Fahrzeuge haben andere Tarife.",
    },
    {
      question: "Braucht man eine Vignette, um nach Belgien zu fahren?",
      answer:
        "Das hängt vom Datum und den genutzten Straßen ab. Die Vignette ist ab dem 1. Mai 2027 für betroffene Fahrzeuge auf Autobahnen und Regionalstraßen vorgesehen. Wenn Sie nur lokale Straßen nutzen, sollte keine Vignette nötig sein.",
    },
    {
      question: "Wo kann man die Autobahnvignette Belgien kaufen?",
      answer:
        "Der Verkauf ist noch nicht geöffnet. Er soll am 1. März 2027 über die offizielle Website und anerkannte Partnerorganisationen starten. Siehe unsere Seite Vignette Belgien kaufen, um den Verkaufsstart zu verfolgen.",
    },
    {
      question: "Müssen Motorräder auf belgischen Autobahnen zahlen?",
      answer:
        "Die geplante Vignette gilt für Kraftfahrzeuge mit mindestens vier Rädern bis 3,5 Tonnen. Motorräder sind daher von dieser Pflicht nicht betroffen, wie sie derzeit vorgesehen ist.",
    },
  ],
  closing: {
    title: "Bereiten Sie Ihre Fahrt in Belgien vor",
    paragraphs: [
      "Das belgische System soll am 1. Mai 2027 in Kraft treten, aber mehrere Modalitäten können sich vor dem endgültigen Start noch ändern.",
      "Prüfen Sie vor der Abreise:",
    ],
    checklist: [
      "ob Ihr Fahrzeug betroffen ist;",
      "welche Straßen Sie nutzen werden;",
      "welche Vignettenlaufzeit Sie brauchen;",
      "den Tarif für Ihr Fahrzeug;",
      "dass Sie Ihre Vignette über einen anerkannten Kanal kaufen.",
    ],
    links: [
      { href: "home", label: "Vignette Belgien 2027" },
      { href: "prices", label: "Tarife der Vignette" },
      { href: "buy", label: "Belgische Vignette kaufen" },
    ],
  },
};
