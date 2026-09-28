import type { BaseDictionary } from "../types";
import { nlTolls } from "../tolls/nl";
import { buildRateMatrix } from "../rate-matrix";

const nlRateMatrix = buildRateMatrix({
  vehicleHeader: "Voertuig",
  dayHeader: "1 dag",
  tenDaysHeader: "10 dagen",
  monthHeader: "1 maand",
  twoMonthsHeader: "2 maanden",
  yearHeader: "1 jaar",
  euro03: "Euro 0 t/m 3",
  euro4: "Euro 4 en hoger",
  zeroEmission: "Emissievrij",
});

const dictionary: BaseDictionary = {
  locale: "nl",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Alles over het Belgische digitale vignet — voor locals en grensoverschrijdende bestuurders.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Home",
    prices: "Prijzen",
    foreign: "Buitenlandse bestuurders",
    exemptions: "Vrijstellingen",
    fines: "Boetes",
    buy: "Kopen",
    tolls: "Tol",
    news: "Nieuws & updates",
    privacy: "Privacy",
  },
  meta: {
    home: {
      title: "Belgisch vignet 2027: prijzen, snelwegen & kopen",
      description:
        "België plant een digitaal wegenvignet vanaf mei 2027. Bekijk de geplande prijzen, wie een vignet nodig heeft, vrijstellingen voor motoren en waar u kunt kopen.",
    },
    prices: {
      title: "Belgisch vignet prijzen 2027: tarieven per Euronorm en looptijd",
      description:
        "Volledige prijstabel van het Belgische wegenvignet 2027 per Euronorm en looptijd — van €8,10/dag (emissievrij) tot €125/jaar (Euro 0–3).",
    },
    foreign: {
      title: "Hebben buitenlandse auto's een Belgisch vignet nodig in 2027?",
      description:
        "Ja — volgens de huidige plannen hebben buitenlandse personenauto's vanaf 1 mei 2027 een Belgisch vignet nodig op gedekte wegen. Gids voor Nederlandse, Duitse en Franse bestuurders.",
    },
    exemptions: {
      title: "Vrijstellingen Belgisch vignet — motoren, vrachtwagens & meer",
      description:
        "Wie hoeft volgens de plannen géén vignet te betalen? Motoren, vrachtwagens, hulpdiensten en andere vrijstellingen uitgelegd.",
    },
    fines: {
      title: "Boetes Belgisch vignet — handhaving & tolerantieperiode",
      description:
        "Geplande boetes tot €210, ANPR-controles en tolerantie tot 1 juli 2027. Alles over handhaving van het Belgische vignet.",
    },
    buy: {
      title: "Belgisch vignet kopen — verkoop verwacht 1 maart 2027",
      description:
        "Volgens de huidige plannen start de online verkoop van het Belgische wegenvignet op 1 maart 2027. Verplicht vanaf 1 mei 2027. Officiële bron: Vlaamse overheid.",
    },
    tolls: {
      title: "Tol in België 2027: snelwegen, vignet en tarieven",
      description:
        "Zijn Belgische snelwegen tolplichtig? Ontdek tol, het geplande vignet vanaf mei 2027, tarieven en regels voor buitenlandse auto's.",
    },
    news: {
      title: "Belgisch vignet nieuws & updates — betrouwbare bronnen uitgelegd",
      description:
        "Onafhankelijke samenvattingen van officieel nieuws over het Belgische vignet met onze redactionele visie. Links naar de originele bronnen.",
    },
    privacy: {
      title: "Privacybeleid — BelgiumVignette.be",
      description:
        "Hoe BelgiumVignette.be omgaat met cookies, analytics, nieuwsbriefgegevens en uw privacy volgens de AVG.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be is een onafhankelijke informatiesite. Wij zijn niet verbonden met de Belgische overheid, Vlaanderen, Wallonië of Brussel.",
    lastUpdated: "Laatst bijgewerkt",
    lastUpdatedDate: "28 september 2026",
    lastUpdatedIso: "2026-09-28",
    readMore: "Lees meer",
    relatedSite: "https://tolls.be/nl",
    relatedSiteLabel: "Tolls.be — onafhankelijke tol-informatie voor België",
    ownedManagedBy: "Eigendom van en beheerd door",
    operatorName: "2xGen",
    operatorUrl: "https://2xgen.com/about",
    backToHome: "Terug naar home",
    plannedNotice:
      "De plannen zijn gepresenteerd in maart 2026 en kunnen nog wijzigen. Wij volgen officiële bronnen en passen deze pagina aan zodra er nieuws is.",
    independentSite: "Info Belgisch wegenvignet",
    contactLabel: "Contact",
    cookieSettings: "Cookievoorkeuren",
    tableCategory: "Categorie",
    tablePrice: "Prijs",
    lastChecked: "Laatst gecontroleerd",
  },
  notFound: {
    title: "Pagina niet gevonden",
    description:
      "Deze pagina bestaat niet of is verplaatst. Ga terug naar de homepage of bekijk ons laatste nieuws over het Belgische vignet.",
    homeLink: "Naar homepage",
    newsLink: "Nieuws & updates",
  },
  home: {
    hero: {
      eyebrow: "Gepland vanaf 1 mei 2027",
      title: "Belgisch vignet 2027: hebt u een vignet nodig voor België?",
      subtitle:
        "België plant vanaf 1 mei 2027 een digitaal wegenvignet. Ontdek of u een vignet nodig heeft, wat het kost, wie vrijgesteld is en wanneer de verkoop start.",
      ctaPrimary: "Check of u een vignet nodig hebt",
      ctaSecondary: "Ontvang een melding bij start verkoop",
    },
    decisionTree: {
      title: "Heeft u een vignet nodig?",
      options: [
        { label: "Belgische auto", href: "prices" },
        { label: "Nederlandse auto", href: "foreign", anchor: "netherlands" },
        { label: "Duitse auto", href: "foreign", anchor: "germany" },
        { label: "Franse auto", href: "foreign", anchor: "france" },
        { label: "Camper / busje", href: "exemptions" },
      ],
    },
    quickAnswers: [
      {
        title: "Wie moet een vignet in België kopen?",
        summary:
          "Personenauto's tot 3,5 ton, inclusief buitenlandse voertuigen op de gedekte wegen — ook bij doorreis.",
        href: "foreign",
        linkLabel: "Gids voor buitenlandse bestuurders",
      },
      {
        title: "Wie is vrijgesteld van het Belgische vignet?",
        summary:
          "Motoren, vrachtwagens (kilometerheffing), tractoren, touringcars, hulpdiensten en politie — volgens de huidige plannen.",
        href: "exemptions",
        linkLabel: "Alle vrijstellingen bekijken",
      },
      {
        title: "Wat is de prijs van het Belgische vignet in 2027?",
        summary:
          "De prijs hangt af van Euronorm en looptijd: vanaf €8,10/dag (emissievrij) en €9/dag (Euro 4+), tot €90–€125 per jaar.",
        href: "prices",
        linkLabel: "Volledige prijsgids",
      },
    ],
    overview: {
      title: "Wegenvignet in België: wat is gepland voor 2027",
      paragraphs: [
        "België plant vanaf 1 mei 2027 een digitaal wegenvignet. Het Belgische vignet zou gelden voor personenauto's tot 3,5 ton op snelwegen en bepaalde regionale hoofdwegen.",
        "Ook buitenlandse auto's vallen eronder. Bestuurders uit Nederland, Frankrijk, Duitsland en andere landen zouden een vignet nodig hebben om op de gedekte Belgische wegen te rijden.",
        "Het wordt geen sticker op de voorruit. Het Belgische snelwegvignet zou digitaal zijn en gekoppeld aan de nummerplaat, met controles via onder meer ANPR-camera's.",
        "Volgens de door de Vlaamse overheid gepubliceerde tarieven hangt de prijs af van Euronorm en looptijd: vanaf €8,10 per dag voor emissievrije voertuigen en €9 per dag voor Euro 4+, tot €90–€125 per jaar. Ook 10 dagen, 1 maand en 2 maanden zijn gepland.",
        "Motoren zouden volgens de huidige plannen vrijgesteld zijn. Definitieve bedragen en regels moeten nog worden bevestigd vóór de inwerkingtreding.",
      ],
    },
    intentSections: [
      {
        id: "snelwegen",
        title: "Hebt u een vignet nodig voor snelwegen in België?",
        paragraphs: [
          "Volgens de huidige plannen wordt een digitaal wegenvignet vanaf 1 mei 2027 verplicht op Belgische snelwegen en bepaalde regionale hoofdwegen.",
          "Vandaag zijn de meeste Belgische snelwegen gratis voor personenauto's. Het vignetvoorstel zou dat veranderen: toegang tot snelwegen en een deel van het snellere regionale netwerk zou een kentekengerelateerd vignet vereisen.",
          "Als u alleen lokale wegen gebruikt, zou volgens de gepubliceerde informatie geen vignet nodig zijn. In de praktijk is het vaak moeilijk om snelwegen en regionale hoofdwegen volledig te vermijden bij interstedelijke of doorreistritten.",
        ],
        link: {
          href: "tolls",
          label: "Tol en snelwegen in België",
        },
      },
      {
        id: "motoren",
        title: "Hebben motoren een Belgisch vignet nodig?",
        paragraphs: [
          "Nee. Volgens de aankondigingen van de overheden zouden motoren expliciet vrijgesteld zijn van het Belgische vignet.",
          "De verplichting zou gelden voor motorvoertuigen met minstens vier wielen tot 3,5 ton — onder meer auto's, sommige lichte bestelwagens en campers. Vrachtwagens blijven onder de kilometerheffing van Viapass.",
        ],
        link: {
          href: "exemptions",
          label: "Details over vrijstellingen bekijken",
        },
      },
      {
        id: "kopen",
        title: "Waar kunt u het Belgische vignet kopen?",
        paragraphs: [
          "De officiële verkoop is nog niet gestart. Volgens de huidige plannen zou online aankoop vanaf 1 maart 2027 mogelijk zijn via de officiële website of een erkende partner.",
          "Er is vandaag geen officieel verkoopportaal. Sites die nu al reserveren of betalen aanbieden, zijn niet het officiële kanaal.",
        ],
        link: {
          href: "buy",
          label: "Belgisch vignet kopen: data en officiële kanalen",
        },
      },
    ],
    pricingTitle: "Wat is de prijs van het Belgische vignet in 2027?",
    pricingParagraphs: [
      "De prijs van het Belgische wegenvignet hangt af van de Euronorm van uw voertuig en de geldigheidsduur. Voor auto's met Euro 4 of hoger beginnen de geplande tarieven bij €9 voor 1 dag en €100 voor 1 jaar. Oudere voertuigen betalen meer, terwijl emissievrije voertuigen een lager tarief krijgen.",
    ],
    pricingLinkLabel: "Bekijk alle prijzen van het Belgische vignet",
    pricingLinkSecondaryLabel: "Volledige prijsgids",
    pricingMatrixTitle: "Geplande tarieven",
    rateMatrix: nlRateMatrix,
    pricingNote:
      "Dit zijn de momenteel door de Vlaamse overheid gepubliceerde tarieven. De invoering is nog onder voorbehoud van definitieve goedkeuring.",
    timelineTitle: "Belangrijke data (volgens plannen)",
    timeline: [
      {
        date: "Maart 2026",
        title: "Plannen gepresenteerd",
        description:
          "Vlaamse regering presenteert vignetvoorstel. Goedkeuring Wallonië, Brussel en Europese Commissie volgt nog.",
      },
      {
        date: "1 mei 2027",
        title: "Vignet verplicht",
        description:
          "Digitale vignetplicht voor personenauto's op snelwegen en regionale hoofdwegen.",
      },
      {
        date: "1 juli 2027",
        title: "Boetes van kracht",
        description:
          "Tolerantieperiode eindigt. Handhaving via ANPR-camera's en mobiele controles.",
      },
    ],
    faqTitle: "Veelgestelde vragen",
    faqs: [
      {
        question: "Is het een fysieke sticker?",
        answer:
          "Nee. Volgens de plannen is het een digitaal vignet dat aan uw kentekenplaat gekoppeld wordt. Er komt geen sticker op uw voorruit.",
      },
      {
        question: "Hebt u een vignet nodig voor snelwegen in België?",
        answer:
          "Volgens de huidige plannen wel vanaf 1 mei 2027 op Belgische snelwegen en bepaalde regionale hoofdwegen. Lokale wegen zouden buiten de verplichting vallen.",
      },
      {
        question: "Hebben motoren een Belgisch vignet nodig?",
        answer:
          "Nee. Motoren zijn volgens de aankondiging van ministers Weyts (Vlaanderen) en Desquesnes (Wallonië) expliciet vrijgesteld.",
      },
      {
        question: "Geldt dit ook voor Nederlanders?",
        answer:
          "Ja. EU-regels vereisen gelijke behandeling. Ook bij doorreis zou u volgens de plannen een vignet nodig hebben op de gedekte wegen.",
      },
      {
        question: "Waar kunt u het Belgische vignet kopen?",
        answer:
          "De officiële verkoop is nog niet gestart. Volgens de plannen is online aankoop voorzien vanaf 1 maart 2027 via het officiële kanaal of een erkende partner.",
      },
    ],
    sourcesTitle: "Officiële bronnen & achtergrond",
  },
  prices: {
    title: "Belgisch vignet prijzen 2027: tarieven per Euronorm en looptijd",
    intro:
      "De geplande prijs van het Belgische wegenvignet hangt af van twee factoren: de Euronorm van uw voertuig en de geldigheidsduur van het vignet. De Vlaamse overheid heeft tarieven gepubliceerd voor 1 dag, 10 dagen, 1 maand, 2 maanden en 1 jaar.",
    leadParagraphs: [
      "Voor een auto met Euro 4 of hoger kost het Belgische vignet volgens de huidige tarieven €9 voor 1 dag, €12 voor 10 dagen en €100 voor een jaar. Emissievrije voertuigen betalen minder en voertuigen met Euro 0 tot en met Euro 3 betalen meer.",
      "De vignette is gepland vanaf 1 mei 2027. Aankoop zou vanaf 1 maart 2027 mogelijk worden. De invoering is nog onder voorbehoud van definitieve goedkeuring.",
    ],
    matrixTitle: "Prijzen Belgisch wegenvignet 2027",
    rateMatrix: nlRateMatrix,
    matrixNote:
      "Deze tarieven zijn gepubliceerd door de Vlaamse overheid. De prijs wordt dus niet alleen bepaald door hoe lang u het vignet nodig hebt, maar ook door de Euronorm van uw voertuig.",
    buyLinkParagraph:
      "[[buy|Bekijk waar en wanneer u het Belgische vignet kunt kopen]].",
    categorySections: [
      {
        id: "euro-4",
        title: "Wat kost een Belgisch vignet voor Euro 4 en hoger?",
        paragraphs: [
          "Voor voertuigen met Euro 4 of hoger gelden volgens de gepubliceerde tarieven:",
        ],
        list: [
          "1 dag: €9",
          "10 dagen: €12",
          "1 maand: €19",
          "2 maanden: €30",
          "1 jaar: €100",
        ],
        linkParagraph:
          "Dit is de categorie waarin een groot deel van het huidige wagenpark valt. Voor een korte doorreis door België kan een dag- of 10-dagenvignet daardoor voldoende zijn. Wie regelmatig gebruikmaakt van Belgische gewest- en snelwegen kan het jaarvignet vergelijken met de kortere looptijden. Lees meer over het [[dailyVignette|dagvignet]] of bekijk het [[annualVignette|jaarvignet]].",
      },
      {
        id: "euro-0-3",
        title: "Wat kost een Belgisch vignet voor Euro 0 tot en met Euro 3?",
        paragraphs: [
          "Oudere voertuigen met Euro 0, Euro 1, Euro 2 of Euro 3 vallen in de duurste tariefcategorie.",
          "De geplande prijzen lopen van €11,25 voor één dag tot €125 voor een jaar.",
        ],
        tableTitle: "Prijs Euro 0–3",
        table: [
          { label: "1 dag", value: "€11,25" },
          { label: "10 dagen", value: "€15" },
          { label: "1 maand", value: "€23,75" },
          { label: "2 maanden", value: "€37,50" },
          { label: "1 jaar", value: "€125" },
        ],
      },
      {
        id: "elektrisch",
        title: "Wat kost het vignet voor een elektrische auto?",
        paragraphs: [
          "Voor een emissievrij voertuig geldt het laagste tarief. Volgens de huidige prijstabel kost het vignet €8,10 voor één dag en €90 voor een volledig jaar.",
        ],
        tableTitle: "Prijs emissievrij",
        table: [
          { label: "1 dag", value: "€8,10" },
          { label: "10 dagen", value: "€10,80" },
          { label: "1 maand", value: "€17,10" },
          { label: "2 maanden", value: "€27" },
          { label: "1 jaar", value: "€90" },
        ],
        linkParagraph:
          "[[electricVignette|Lees meer over het Belgische vignet voor elektrische auto's]].",
      },
    ],
    durationSection: {
      id: "looptijd",
      title: "Welke looptijd heb ik nodig?",
      paragraphs: [
        "U kunt volgens de huidige plannen kiezen uit vijf geldigheidsperiodes:",
        "De beste looptijd hangt af van hoe vaak en hoe lang u gebruikmaakt van de wegen waarop het vignet verplicht wordt.",
        "Bekijk de afzonderlijke uitleg over het [[dailyVignette|dagvignet]], [[monthlyVignette|maandvignet]] en [[annualVignette|jaarvignet]].",
      ],
      list: [
        "1 dag — voor een korte doorreis of dagtrip.",
        "10 dagen — bijvoorbeeld voor een vakantie of langer bezoek.",
        "1 maand — voor meerdere ritten gedurende enkele weken.",
        "2 maanden — voor een langer verblijf of regelmatig tijdelijk gebruik.",
        "1 jaar — voor bestuurders die regelmatig op Belgische gewest- en snelwegen rijden.",
      ],
    },
    whenSection: {
      id: "wanneer",
      title: "Wanneer gelden deze prijzen?",
      paragraphs: [
        "Het digitale wegenvignet is gepland vanaf 1 mei 2027. Volgens de huidige officiële informatie zou het vignet vanaf 1 maart 2027 online gekocht kunnen worden.",
        "De praktische uitwerking loopt nog en de invoering is nog onder voorbehoud van definitieve goedkeuring.",
        "Wilt u weten hoe de aankoop straks werkt? Bekijk dan [[buy|Belgisch vignet kopen]]. Voor alle regels, voertuigen en belangrijke data gaat u naar onze complete gids over het [[home|Belgische wegenvignet 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Interactie met verkeersbelasting (Vlaanderen)",
        paragraphs: [
          "Vlaanderen hervormt tegelijk de jaarlijkse verkeersbelasting. Volgens schattingen kan ongeveer de helft van de Vlaamse automobilisten netto meer betalen — tot €100 extra per jaar.",
          "De verlaging van de verkeersbelasting compenseert volgens de plannen niet iedereen volledig voor de vignetkosten. Dit is achtergrondinformatie; de vignettarieven hierboven gelden onafhankelijk van die hervorming.",
        ],
      },
    ],
    euroNormTitle: "Euro-normen in het kort",
    euroNormCategoryHeader: "Norm",
    euroNormDescriptionHeader: "Omschrijving",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Auto's vanaf circa 2005–2006. Meeste voertuigen op de weg. Dagtarief €9, jaar €100.",
      },
      {
        norm: "Emissievrij",
        description: "Volledig emissievrij (elektrisch / waterstof). Laagste tarief: vanaf €8,10/dag, €90/jaar.",
      },
      {
        norm: "Euro 3 en lager",
        description: "Oudere, meer vervuilende voertuigen. Hoogste tarief: vanaf €11,25/dag, €125/jaar.",
      },
    ],
    vignettePagesTitle: "Per vignettype",
    faqs: [
      {
        question: "Wat is de laagste geplande dagprijs?",
        answer:
          "Volgens de Vlaamse overheid is het laagste dagtarief €8,10 voor emissievrije voertuigen. Voor Euro 4 en hoger is dat €9; voor Euro 0 tot en met 3 is dat €11,25.",
      },
      {
        question: "Gelden de korte periodes voor alle emissieklassen?",
        answer:
          "Ja. Elke looptijd (1 dag, 10 dagen, 1 maand, 2 maanden, 1 jaar) heeft een eigen tarief per Euronorm-categorie. De bedragen verschillen per categorie.",
      },
      {
        question: "Zijn bedrijfsvans aftrekbaar?",
        answer:
          "Volgens de plannen kan de vignetkost voor professionele bestelwagens volledig als beroepskost worden afgetrokken.",
      },
    ],
  },
  foreign: {
    title: "Hebben buitenlandse auto's een Belgisch vignet nodig?",
    intro:
      "Ja, volgens de huidige plannen. Buitenlandse personenauto's zullen vanaf 1 mei 2027 een Belgisch vignet nodig hebben bij gebruik van gedekte Belgische wegen. Het geplande systeem maakt geen onderscheid tussen Belgische en buitenlandse kentekens — een auto met Nederlands, Frans, Duits of ander buitenlands kenteken zal naar verwachting hetzelfde digitale vignet nodig hebben als een Belgisch voertuig. Definitieve regels kunnen nog wijzigen tot het systeem officieel is goedgekeurd en ingevoerd.",
    sections: [
      {
        id: "eu-rules",
        title: "Gelijke behandeling",
        paragraphs: [
          "Belgische bestuurders moeten ook betalen — EU-regels laten niet toe om alleen buitenlanders te belasten. Ook uw buitenlandse kenteken valt onder hetzelfde geplande systeem.",
          "Jaarlijks passeren naar schatting zo'n 30 miljoen buitenlandse personenauto's België.",
        ],
      },
      {
        id: "digital",
        title: "Digitaal systeem",
        paragraphs: [
          "Geen fysiek vignet om te kopen of op te plakken. Het systeem zou automatische kentekenherkenning (ANPR) gebruiken. Koop uw vignet vóór u op gedekte wegen rijdt.",
        ],
      },
      {
        id: "history",
        title: "Historische context",
        paragraphs: [
          "België probeerde al in 2007 een vignet in te voeren, maar trok het plan in na protesten uit Nederland. Nederlandse ministers hebben opnieuw bezorgdheid geuit — en in de huidige plannen is nog geen speciale grensregeling aangekondigd voor buurlanden.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Nederland",
        tips: [
          "Ja — personenauto's met een Nederlands kenteken zullen naar verwachting vanaf 1 mei 2027 een Belgisch vignet nodig hebben op gedekte Belgische wegen.",
          "Dit geldt voor veelgebruikte routes zoals Nederland → Antwerpen, Nederland → Brussel en doorgaand verkeer Nederland → Luxemburg/Frankrijk.",
          "Er is momenteel geen aangekondigde vrijstelling voor Nederlandse grensregio's.",
        ],
      },
      {
        id: "germany",
        country: "Duitsland",
        tips: [
          "Ja — personenauto's met een Duits kenteken zullen naar verwachting vanaf 1 mei 2027 een Belgisch vignet nodig hebben op gedekte Belgische wegen.",
          "Dit geldt onder meer voor veelgebruikte transitroutes zoals Aken → Luik en Duitsland → Frankrijk via België.",
          "Korte periodes (1–10 dagen) in de plannen kunnen geschikt zijn voor doorgaand verkeer.",
        ],
      },
      {
        id: "france",
        country: "Frankrijk",
        tips: [
          "Ja — personenauto's met een Frans kenteken zullen naar verwachting vanaf 1 mei 2027 een Belgisch vignet nodig hebben op gedekte Belgische wegen.",
          "Dit is vooral relevant voor ritten Noord-Frankrijk → België en transitroutes Frankrijk → Nederland/Duitsland.",
          "Gedekte wegen omvatten snelwegen en geplande regionale hoofdwegen — niet alleen lang doorgaand verkeer.",
        ],
      },
    ],
    faqs: [
      {
        question: "Heb ik een vignet nodig als ik alleen door België rijd?",
        answer:
          "Ja — volgens de huidige plannen is vanaf 1 mei 2027 een vignet verplicht op gedekte Belgische hoofdwegen, ongeacht uw bestemming. Definitieve regels kunnen nog wijzigen vóór de invoering.",
      },
      {
        question: "Betalen buitenlandse auto's hetzelfde als Belgische auto's?",
        answer:
          "Ja. Het geplande systeem past dezelfde digitale vignet toe op Belgische en buitenlandse kentekens. EU-regels over gelijke behandeling zijn de reden dat alleen buitenlanders niet kunnen worden belast.",
      },
    ],
  },
  exemptions: {
    title: "Vrijstellingen",
    intro:
      "Niet elk voertuig hoeft volgens de plannen een vignet te betalen. Hier is een overzicht van wie wel en niet onder de regeling valt.",
    sections: [
      {
        id: "motorcycles",
        title: "Motoren vrijgesteld",
        paragraphs: [
          "Motoren en bromfietsen zijn volgens expliciete aankondigingen van Vlaams minister Ben Weyts en Waals minister François Desquesnes uitgesloten van het vignet.",
        ],
      },
      {
        id: "trucks",
        title: "Vrachtwagens",
        paragraphs: [
          "Zware voertuigen vallen niet onder het vignet. Zij betalen al via het bestaande kilometerheffingssysteem (Viapass).",
        ],
      },
    ],
    exemptTableTitle: "Vrijgesteld",
    requiredTableTitle: "Vignet verplicht",
    exemptTable: [
      { label: "Motoren & bromfietsen", value: "Vrijgesteld" },
      { label: "Vrachtwagens (>3,5t)", value: "Vrijgesteld — kilometerheffing" },
      { label: "Tractoren", value: "Vrijgesteld" },
      { label: "Touringcars", value: "Vrijgesteld" },
      { label: "Hulpdiensten & politie", value: "Vrijgesteld" },
      { label: "Defensievoertuigen", value: "Vrijgesteld" },
    ],
    notExemptTable: [
      { label: "Personenauto's (≤3,5t)", value: "Vignet verplicht" },
      { label: "Buitenlandse auto's", value: "Vignet verplicht" },
      { label: "Bestelwagens", value: "Vignet verplicht" },
      { label: "Elektrische auto's", value: "Vignet verplicht (€90/jaar gepland)" },
    ],
    faqs: [
      {
        question: "Is mijn camper vrijgesteld?",
        answer:
          "Als uw camper als personenauto tot 3,5 ton geregistreerd staat, valt u volgens de plannen onder het vignet.",
      },
    ],
  },
  fines: {
    title: "Boetes & handhaving",
    intro:
      "Handhaving wordt volgens de plannen uitgevoerd via automatische kentekenherkenning (ANPR) en mobiele controleteams. Er komt een tolerantieperiode vóór de eerste boetes.",
    sections: [
      {
        id: "tolerance",
        title: "Tolerantieperiode",
        paragraphs: [
          "Van 1 mei tot 1 juli 2027 is volgens de plannen een overgangsperiode gepland. Vanaf 1 juli worden boetes uitgeschreven.",
        ],
      },
      {
        id: "anpr",
        title: "ANPR-controles",
        paragraphs: [
          "Camera's langs snelwegen en regionale hoofdwegen scannen kentekens en controleren of een geldig vignet geregistreerd staat.",
        ],
      },
    ],
    fineTable: [
      { label: "1e overtreding", value: "€70" },
      { label: "2e overtreding", value: "€140" },
      { label: "3e en volgende", value: "€210" },
    ],
    faqs: [
      {
        question: "Krijg ik een boete als ik per ongeluk zonder vignet rijd?",
        answer:
          "Tijdens de tolerantieperiode (mei–juni 2027) worden volgens de plannen nog geen boetes uitgeschreven. Daarna wel — ook voor buitenlandse kentekens.",
      },
    ],
  },
  buy: {
    title: "Wanneer kan ik een Belgisch vignet kopen?",
    intro:
      "Volgens de huidige plannen wordt de online verkoop op 1 maart 2027 verwacht. Het wegenvignet zou vanaf 1 mei 2027 verplicht worden. Definitieve voorwaarden en het officiële verkoopportaal kunnen nog wijzigen.",
    independenceNotice:
      "BelgiumVignette.be is een onafhankelijke informatiesite en is geen officiële website van de Belgische overheid, noch een erkende verkoper van het wegenvignet.",
    sections: [
      {
        id: "when",
        title: "Wanneer opent de verkoop?",
        paragraphs: [
          "De Vlaamse overheid geeft aan dat u het wegenvignet vanaf 1 maart 2027 online kunt kopen, via de officiële website of een erkende partner.",
          "Er is vandaag nog geen verkoopportaal en u kunt nog niet reserveren of betalen. Sites die dat nu al aanbieden, zijn niet het officiële kanaal.",
        ],
      },
      {
        id: "expected",
        title: "Wat u kunt verwachten",
        paragraphs: [
          "Het vignet wordt digitaal en gekoppeld aan de nummerplaat — geen sticker op de voorruit.",
          "Volgens de plannen kiest u een looptijd van 1 dag, 10 dagen, 1 maand, 2 maanden of 1 jaar.",
        ],
      },
    ],
    statusBadge: "Verkoop verwacht 1 maart 2027",
    officialSourceLabel: "Officiële bron",
    steps: [
      {
        title: "Wacht op de geautoriseerde verkoop",
        description: "Online aankoop verwacht vanaf 1 maart 2027 via de officiële website of een erkende partner, volgens de Vlaamse overheid.",
      },
      {
        title: "Registreer uw kenteken",
        description: "Digitaal systeem — geen sticker op uw voorruit.",
      },
      {
        title: "Kies looptijd",
        description: "Dag, 10 dagen, maand, 2 maanden of jaarvignet.",
      },
      {
        title: "Rij met geldig vignet",
        description: "ANPR-camera's controleren automatisch vanaf 1 mei 2027.",
      },
    ],
    faqs: [
      {
        question: "Kan ik nu al reserveren?",
        answer:
          "Nee. Volgens de huidige plannen start de online verkoop op 1 maart 2027. Schrijf u in voor updates om een melding te ontvangen wanneer geautoriseerde verkoop beschikbaar wordt.",
      },
      {
        question: "Wanneer is het vignet verplicht?",
        answer:
          "Volgens de plannen vanaf 1 mei 2027 op Belgische snelwegen en gewestwegen. Tussen 1 mei en 1 juli 2027 is een tolerantieperiode gepland.",
      },
    ],
  },
  tolls: nlTolls,
  privacy: {
    title: "Privacybeleid",
    intro:
      "BelgiumVignette.be respecteert uw privacy. Dit beleid legt uit welke gegevens wij verzamelen en waarom.",
    sections: [
      {
        id: "controller",
        title: "Verantwoordelijke",
        paragraphs: [
          "BelgiumVignette.be is een onafhankelijke informatiesite over het geplande Belgische wegenvignet. Wij zijn niet gelieerd aan de Belgische overheid, Vlaanderen, Wallonië of Brussel, en verkopen geen vignetten.",
          "De site wordt beheerd in samenhang met Tolls.be (onafhankelijke informatie over tol in België). Contact: info@tolls.be.",
        ],
      },
      {
        id: "newsletter",
        title: "Nieuwsbrief",
        paragraphs: [
          "Als u zich inschrijft, slaan wij uw e-mailadres, taalvoorkeur en tijdstip van toestemming op in Supabase (EU-hosting). Wij gebruiken dit uitsluitend om u te informeren over het Belgische vignet.",
          "U kunt zich op elk moment uitschrijven via info@tolls.be.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies, analytics & toestemming",
        paragraphs: [
          "Essentiële opslag: wij bewaren uw cookievoorkeur in localStorage op uw apparaat. Dit is nodig om uw keuze te onthouden. Rechtsgrond: gerechtvaardigd belang (Art. 6 lid 1 onder f AVG) en/or uw toestemming waar vereist.",
          "Analytics (optioneel): Vercel Analytics verzamelt anonieme paginaweergaven (geen cookies geplaatst door ons voor analytics). Vercel kan technische gegevens zoals pagina-URL, referrer en apparaattype verwerken. Analytics wordt uitsluitend geladen nadat u via de cookiebanner toestemming geeft. Rechtsgrond: toestemming (Art. 6 lid 1 onder a AVG). U kunt toestemming intrekken via Cookievoorkeuren in de footer.",
          "Google Search Console & Bing Webmaster Tools: wij kunnen een verificatiemeta-tag op de site plaatsen om eigendom te bewijzen bij zoekmachines. Deze tags stellen geen trackingcookies in en verzamelen geen bezoekersdata.",
          "Bewaartermijn cookievoorkeur: tot u deze wist of wijziging van het beleid (versie 2026-08-04) u opnieuw om toestemming vraagt.",
        ],
      },
      {
        id: "news-editorial",
        title: "Nieuws, samenvattingen & redactionele inhoud",
        paragraphs: [
          "Onze nieuwsrubriek publiceert onafhankelijke samenvattingen van openbaar beschikbare berichtgeving over het Belgische vignet. Deze pagina's zijn geen reproductie van de originele artikelen.",
          "Samenvattingen en vertalingen kunnen met behulp van AI worden gemaakt en kunnen in formulering afwijken van de bron. Wij linken altijd naar de oorspronkelijke uitgever. Ons redactioneel commentaar ('Onze visie') is onafhankelijk geschreven en vertegenwoordigt niet de oorspronkelijke uitgever of de Belgische overheid.",
          "Afbeeldingen op nieuwsartikelen kunnen afkomstig zijn van het gelinkte originele artikel of persbureaus, met credits waar van toepassing. Dergelijk materiaal blijft eigendom van de respectievelijke rechthebbenden. Wij tonen het te goeder trouw ter referentie, naast een link naar de bron. Als u meent dat uw content onjuist wordt gebruikt, neem contact op via info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Uw rechten (AVG)",
        paragraphs: [
          "U heeft recht op inzage, correctie, verwijdering en bezwaar. Neem contact op via info@tolls.be.",
        ],
      },
    ],
    lastUpdated: "4 augustus 2026",
  },
  news: {
    title: "Nieuws & updates",
    intro:
      "We volgen betrouwbare officiële en mediabronnen over het geplande Belgische vignet. Elk artikel vat de oorspronkelijke berichtgeving samen en voegt onze onafhankelijke visie toe — met een directe link naar de bron.",
    latestArticles: "Laatste artikelen",
    summaryTitle: "Samenvatting",
    summaryFromSource: "van originele bron:",
    ourTakeTitle: "Onze visie",
    sourceTitle: "Originele bron",
    readArticle: "Artikel lezen",
    backToNews: "Terug naar nieuws",
    publishedOn: "Gepubliceerd",
    sourceLabel: "Bron",
    sourceDisclaimer:
      "We vatten betrouwbare bronnen samen en linken naar het originele artikel. Onze visie is onafhankelijk redactioneel commentaar, geen officiële overheidsinformatie.",
    translationDisclaimer:
      "De samenvatting en vertaling op deze pagina zijn met behulp van AI gemaakt op basis van het oorspronkelijke artikel. Raadpleeg altijd de bron hieronder voor de officiële formulering.",
    articleAttributionTitle: "Onafhankelijke samenvatting — niet het originele artikel",
    articleAttributionIndependence:
      "BelgiumVignette.be is een onafhankelijke informatiesite. Wij zijn niet verbonden met, goedgekeurd door of optredend namens de oorspronkelijke uitgever. Deze pagina vat openbaar beschikbare berichtgeving samen en voegt ons eigen redactioneel commentaar toe. Het is geen reproductie van het originele artikel.",
    articleAttributionAi:
      "De samenvatting en vertaling zijn met behulp van AI gemaakt en kunnen in formulering afwijken van het origineel. Raadpleeg altijd de onderstaande bron voor de officiële tekst.",
    articleAttributionReadOriginal: "Lees het originele artikel bij",
    articleAttributionCopyright:
      "Het originele artikel, afbeeldingen en overige media blijven eigendom van de respectievelijke rechthebbenden. Wij linken te goeder trouw naar de bron ter referentie. Fotocredits staan hierboven vermeld waar van toepassing.",
    tableOfContents: "Op deze pagina",
    relatedArticles: "Meer nieuws & updates",
    noArticles: "Nog geen artikelen gepubliceerd. Kom binnenkort terug.",
  },
  newsletter: {
    emailPlaceholder: "E-mailadres",
    consentLabel: "Ik ga akkoord met updates en heb het",
    success: "Bedankt! U bent ingeschreven.",
    error: "Er ging iets mis. Probeer het opnieuw.",
    privacyLink: "privacybeleid gelezen",
    independenceNote:
      "BelgiumVignette.be is een onafhankelijke informatiedienst en is niet gelieerd aan de Belgische overheid. Wij verkopen momenteel geen Belgisch wegenvignet.",
    sticky: {
      teaser: "Vignet nog niet te koop — ontvang een melding bij start verkoop",
      cta: "Aanmelden →",
      closeLabel: "Sluiten",
    },
    intents: {
      home: {
        title:
          "Ontvang de aankooplink zodra het Belgische vignet te koop is",
        description:
          "De verkoop is gepland vanaf 1 maart 2027. Laat uw e-mailadres achter en ontvang één melding wanneer geautoriseerde verkoop beschikbaar wordt.",
        benefits: [
          "Link naar een geautoriseerd aankoopkanaal zodra bekend",
          "Updates bij wijzigingen in prijzen of regels",
          "Geen onnodige e-mails",
        ],
        submit: "Stuur mij de aankooplink",
      },
      prices: {
        title: "Ontvang een melding zodra de definitieve vignetprijzen bekend zijn",
        description:
          "De huidige tarieven zijn gepubliceerd, maar de invoering moet nog definitief worden goedgekeurd. Wij houden de officiële informatie voor u bij.",
        benefitsIntro: "Ontvang één e-mail zodra:",
        benefits: [
          "de definitieve prijzen zijn bevestigd;",
          "geautoriseerde verkoop start;",
          "een link naar een erkend aankoopkanaal beschikbaar is.",
        ],
        submit: "Houd mij op de hoogte",
      },
      buy: {
        title: "Laat het mij weten zodra het Belgische vignet te koop is",
        description:
          "De geautoriseerde verkoop is nog niet gestart. Volgens de huidige planning kunt u het Belgische vignet vanaf 1 maart 2027 kopen via de officiële website of een erkende partner. Laat uw e-mailadres achter en ontvang een melding wanneer geautoriseerde verkoop beschikbaar wordt.",
        benefits: [],
        submit: "Stuur mij de aankooplink",
      },
      foreign: {
        title:
          "Laat mij weten wanneer buitenlandse auto's hun vignet kunnen registreren",
        description:
          "Buitenlandse bestuurders hebben volgens de plannen ook een Belgisch vignet nodig. Ontvang een melding zodra registratie en aankoop via een erkend kanaal mogelijk zijn.",
        benefits: [
          "Start van de geautoriseerde verkoop",
          "Regels voor buitenlandse kentekens",
          "Link naar een erkend aankoopkanaal",
        ],
        submit: "Houd mij op de hoogte",
      },
      news: {
        title: "Ontvang belangrijke updates over het Belgische vignet",
        description:
          "Korte, relevante meldingen wanneer er nieuws is over prijzen, regels of de start van de verkoop.",
        benefits: [
          "Belangrijke updates over het vignet",
          "Geen dagelijkse spam",
          "Aankooplink zodra een erkend kanaal beschikbaar is",
        ],
        submit: "Ontvang updates",
      },
      default: {
        title:
          "Ontvang de aankooplink zodra het Belgische vignet te koop is",
        description:
          "De verkoop start volgens de planning op 1 maart 2027. Wij sturen u één melding wanneer geautoriseerde verkoop beschikbaar wordt.",
        benefits: [
          "Link naar een geautoriseerd aankoopkanaal",
          "Updates over prijzen en regels",
          "Geen onnodige e-mails",
        ],
        submit: "Stuur mij de aankooplink",
      },
    },
  },
  cookieBanner: {
    title: "Cookies & privacy",
    description:
      "Wij gebruiken essentiële opslag voor uw cookievoorkeur. Optioneel: Vercel Analytics (anonieme paginaweergaven). Geen analytics vóór uw keuze. Accepteer, weiger of kies zelf per categorie.",
    essentialTitle: "Essentieel",
    essentialDescription:
      "Opslaan van uw cookievoorkeur in localStorage, zodat wij uw keuze onthouden.",
    alwaysOn: "Altijd actief — vereist om uw voorkeur te onthouden.",
    analyticsTitle: "Analytics (Vercel Analytics)",
    analyticsDescription:
      "Anonieme statistieken over paginaweergaven om de site te verbeteren. Alleen actief na toestemming.",
    acceptAll: "Alles accepteren",
    rejectAll: "Alles weigeren",
    savePreferences: "Voorkeuren opslaan",
    manageSettings: "Instellingen",
    closeSettings: "Sluiten",
    privacyLink: "Privacybeleid",
  },
  sources: [
    {
      title: "Vlaamse overheid — Wegenvignet vanaf 1 mei 2027",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Officiële pagina over verplichting, tarieven en aankoop vanaf 1 maart 2027",
    },
    {
      title: "Viapass — kilometerheffing voor vrachtwagens",
      url: "https://www.viapass.be",
      description: "Bestaand systeem voor voertuigen boven 3,5 ton (geen personenwagenvignet)",
    },
    {
      title: "Europese Commissie — heffingen op het wegvervoer",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "EU-kader voor wegentol en non-discriminatie",
    },
  ],
};

export default dictionary;
