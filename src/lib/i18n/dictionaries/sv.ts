import type { BaseDictionary } from "../types";
import { getAcquisitionContent } from "../acquisition";
import { svTolls } from "../tolls/sv";
import { buildRateMatrix } from "../rate-matrix";

const svRateMatrix = buildRateMatrix({
  vehicleHeader: "Fordon",
  dayHeader: "1 dag",
  tenDaysHeader: "10 dagar",
  monthHeader: "1 månad",
  twoMonthsHeader: "2 månader",
  yearHeader: "1 år",
  euro03: "Euro 0 till 3",
  euro4: "Euro 4 och högre",
  zeroEmission: "Utsläppsfri",
});

const dictionary: BaseDictionary = {
  locale: "sv",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Allt om Belgiens digitala vägvignett — för lokala och gränsöverskridande förare.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Hem",
    prices: "Priser",
    foreign: "Utländska förare",
    exemptions: "Undantag",
    fines: "Böter",
    buy: "Så köper du",
    tolls: "Vägtullar",
    news: "Nyheter och uppdateringar",
    privacy: "Integritet",
    acquisition: "Förvärv",
  },
  meta: {
    home: {
      title: "Belgisk vignett 2027: priser, motorvägar och hur man köper",
      description:
        "Belgien planerar en digital vägvignett från maj 2027. Se planerade priser, vem som behöver en, undantag för motorcyklar och var du köper.",
    },
    prices: {
      title: "Belgiska vignettpriser 2027: tariffer per Euronorm och giltighetstid",
      description:
        "Fullständig pristabell för Belgiens vägvignett 2027 per Euronorm och giltighetstid — från €8,10/dag (utsläppsfri) till €125/år (Euro 0–3).",
    },
    foreign: {
      title: "Behöver utländska bilar en belgisk vignett 2027?",
      description:
        "Ja — enligt nuvarande planer behöver utländska personbilar en belgisk vignett från 1 maj 2027 på täckta vägar. Guide för förare från Nederländerna, Tyskland och Frankrike.",
    },
    exemptions: {
      title: "Belgiska vignettundantag — motorcyklar, lastbilar med mera",
      description:
        "Vem är undantagen enligt planerna? Motorcyklar, lastbilar, räddningstjänst och andra kategorier förklarade.",
    },
    fines: {
      title: "Belgiska vignettböter — kontroll och toleransperiod",
      description:
        "Planerade böter upp till €210, ANPR-kontroller och tolerans till 1 juli 2027.",
    },
    buy: {
      title: "Köp belgisk vignett — försäljning förväntas 1 mars 2027",
      description:
        "Enligt nuvarande planer väntas onlineförsäljningen av den belgiska vägvinjetten starta 1 mars 2027. Obligatorisk från 1 maj 2027. Officiell källa: flamländska regeringen.",
    },
    tolls: {
      title: "Vägtullar i Belgien 2027: motorvägar, vignett och priser",
      description:
        "Är motorvägarna avgiftsbelagda i Belgien? Se vägtullar, den planerade vinjetten från maj 2027, tariffer och regler för utländska bilar.",
    },
    news: {
      title: "Nyheter om belgisk vignett — pålitliga källor förklarade",
      description:
        "Oberoende sammanfattningar av officiella nyheter om den belgiska vignetten med vår redaktionella syn. Länkar till originalkällor.",
    },
    privacy: {
      title: "Integritetspolicy — BelgiumVignette.be",
      description:
        "Hur BelgiumVignette.be hanterar cookies, analysverktyg, nyhetsbrevsdata och dina GDPR-rättigheter.",
    },
    acquisition: {
      title: "BelgiumVignette.be till salu | Webbplats & domänportfölj",
      description:
        "BelgiumVignette.be är tillgänglig för förvärv, inklusive flerspråkig webbplats, Google-rankingar och en portfölj belgiska vinjettdomäner.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be är en oberoende informationssajt. Vi är inte kopplade till den belgiska staten, Flandern, Vallonien eller Bryssel.",
    lastUpdated: "Senast uppdaterad",
    lastUpdatedDate: "28 September 2026",
    lastUpdatedIso: "2026-09-28",
    readMore: "Läs mer",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — oberoende information om belgiska vägavgifter",
    ownedManagedBy: "Ägs och drivs av",
    operatorName: "2xGen",
    operatorUrl: "https://2xgen.com/about",
    backToHome: "Tillbaka till startsidan",
    plannedNotice:
      "Planer som presenterades i mars 2026 kan fortfarande ändras. Vi följer officiella källor och uppdaterar denna sida när nyheter kommer.",
    independentSite: "Info belgisk vägvignett",
    contactLabel: "Kontakt",
    cookieSettings: "Cookieinställningar",
    tableCategory: "Kategori",
    tablePrice: "Pris",
    lastChecked: "Senast kontrollerad",
  },
  notFound: {
    title: "Sidan hittades inte",
    description:
      "Den här sidan finns inte eller har flyttats. Gå tillbaka till startsidan eller läs våra senaste nyheter om den belgiska vignetten.",
    homeLink: "Till startsidan",
    newsLink: "Nyheter och uppdateringar",
  },
  home: {
    hero: {
      eyebrow: "Planerat från 1 maj 2027",
      title: "Belgisk vignett 2027: behöver du en vignett för Belgien?",
      subtitle:
        "Belgien planerar att införa en digital vägvignett från 1 maj 2027. Ta reda på om du behöver en, vad den kostar, vem som är undantagen och när försäljningen startar.",
      ctaPrimary: "Kontrollera om du behöver en vignett",
      ctaSecondary: "Få besked när försäljningen öppnar",
    },
    decisionTree: {
      title: "Behöver du en vignett?",
      options: [
        { label: "Belgisk bil", href: "prices" },
        { label: "Nederländsk bil", href: "foreign", anchor: "netherlands" },
        { label: "Tysk bil", href: "foreign", anchor: "germany" },
        { label: "Fransk bil", href: "foreign", anchor: "france" },
        { label: "Husbil / skåpbil", href: "exemptions" },
      ],
    },
    quickAnswers: [
      {
        title: "Vem måste köpa en belgisk vignett?",
        summary:
          "Personbilar upp till 3,5 ton, inklusive utländska fordon i transit på täckta vägar.",
        href: "foreign",
        linkLabel: "Guide för utländska förare",
      },
      {
        title: "Vem är undantagen från den belgiska vignetten?",
        summary:
          "Motorcyklar, lastbilar (kilometeravgift), traktorer, turistbussar, räddningstjänst och polis — enligt nuvarande planer.",
        href: "exemptions",
        linkLabel: "Se alla undantag",
      },
      {
        title: "Vad kostar den belgiska vignetten 2027?",
        summary:
          "Priset beror på Euronorm och giltighetstid: från €8,10/dag (utsläppsfri) och €9/dag (Euro 4+), till €90–€125 per år.",
        href: "prices",
        linkLabel: "Fullständig prisguide",
      },
    ],
    overview: {
      title: "Belgisk vägvignett: vad som planeras för 2027",
      paragraphs: [
        "Belgien planerar att införa en digital vägvignett från 1 maj 2027. Den belgiska vignetten skulle gälla personbilar upp till 3,5 ton på motorvägar och vissa regionala huvudvägar.",
        "Utländska bilar skulle omfattas. Förare från Frankrike, Nederländerna, Tyskland och andra länder skulle behöva en vignett för att använda de täckta belgiska vägarna.",
        "Det skulle inte vara ett klistermärke i vindrutan. Den belgiska motorvägsvignetten skulle vara digital och kopplad till registreringsskylten, med kontroller bland annat via ANPR-kameror.",
        "Enligt de av den flamländska regeringen publicerade tarifferna beror priset på Euronorm och giltighetstid: från €8,10 per dag för utsläppsfria fordon och €9 per dag för Euro 4+, till €90–€125 per år. Även 10 dagar, 1 månad och 2 månader är planerade.",
        "Motorcyklar skulle vara undantagna enligt nuvarande planer. Slutliga belopp och regler måste fortfarande bekräftas innan systemet träder i kraft.",
      ],
    },
    intentSections: [
      {
        id: "motorvagar",
        title: "Behöver du en vignett för motorvägar i Belgien?",
        paragraphs: [
          "Enligt nuvarande planer skulle en digital vägvignett bli obligatorisk på belgiska motorvägar och vissa regionala huvudvägar från 1 maj 2027.",
          "Idag är de flesta belgiska motorvägar fortfarande gratis för personbilar. Vignettprojektet skulle ändra det: tillträde till motorvägar och en del av det snabbare regionala nätet skulle kräva en skyltbunden vignett.",
          "Om du bara använder lokala vägar skulle en vignett inte krävas enligt publicerad information. I praktiken är det ofta svårt att helt undvika motorvägar och regionala huvudvägar vid intercity- eller transitresor.",
        ],
        link: {
          href: "tolls",
          label: "Vägtullar och motorvägar i Belgien",
        },
      },
      {
        id: "motorcyklar",
        title: "Behöver motorcyklar en belgisk vignett?",
        paragraphs: [
          "Nej. Enligt myndighetsmeddelanden skulle motorcyklar uttryckligen undantas från den belgiska vignetten.",
          "Skyldigheten skulle gälla motorfordon med minst fyra hjul upp till 3,5 ton — inklusive bilar, vissa lätta skåpbilar och husbilar. Lastbilar förblir under Viapass kilometeravgift.",
        ],
        link: {
          href: "exemptions",
          label: "Se undantagsdetaljer",
        },
      },
      {
        id: "kopa",
        title: "Var kan man köpa den belgiska vignetten?",
        paragraphs: [
          "Den officiella försäljningen har ännu inte startat. Enligt nuvarande planer skulle onlineköp vara möjligt från 1 mars 2027 via den officiella webbplatsen eller en auktoriserad partner.",
          "Det finns idag ingen officiell försäljningsportal. Webbplatser som redan erbjuder bokning eller betalning är inte den officiella kanalen.",
        ],
        link: {
          href: "buy",
          label: "Köp belgisk vignett: datum och officiella kanaler",
        },
      },
    ],
    pricingTitle: "Vad kostar den belgiska vignetten 2027?",
    pricingParagraphs: [
      "Priset på Belgiens vägvignett beror på fordonets Euronorm och vignettens giltighetstid. För bilar med Euro 4 eller högre börjar de planerade tarifferna på €9 för 1 dag och €100 för 1 år. Äldre fordon betalar mer, medan utsläppsfria fordon får en lägre tariff.",
    ],
    pricingLinkLabel: "Se alla priser för den belgiska vignetten",
    pricingLinkSecondaryLabel: "Fullständig prisguide",
    pricingMatrixTitle: "Planerade tariffer",
    rateMatrix: svRateMatrix,
    pricingNote:
      "Detta är de tariffer som för närvarande publicerats av den flamländska regeringen. Införandet är fortfarande beroende av slutligt godkännande.",
    timelineTitle: "Viktiga datum (enligt planerna)",
    timeline: [
      {
        date: "March 2026",
        title: "Planer presenterade",
        description:
          "Flamländska regeringen presenterar förslaget. Godkännande från Vallonien, Bryssel och EU-kommissionen återstår.",
      },
      {
        date: "1 May 2027",
        title: "Vignett obligatorisk",
        description:
          "Digital vignett krävs på motorvägar och regionala huvudvägar.",
      },
      {
        date: "1 July 2027",
        title: "Böter tillämpas",
        description:
          "Toleransperioden upphör. ANPR-kameror och mobila enheter börjar kontrollera.",
      },
    ],
    faqTitle: "Vanliga frågor",
    faqs: [
      {
        question: "Är det en fysisk klistermärke?",
        answer:
          "Nej. Enligt planerna är det en digital vignett kopplad till din registreringsskylt. Inget klistermärke i vindrutan.",
      },
      {
        question: "Behöver du en vignett för motorvägar i Belgien?",
        answer:
          "Enligt nuvarande planer ja från 1 maj 2027 på belgiska motorvägar och vissa regionala huvudvägar. Lokala vägar skulle ligga utanför skyldigheten.",
      },
      {
        question: "Behöver motorcyklar en belgisk vignett?",
        answer:
          "Nej. Motorcyklar är uttryckligen undantagna enligt tillkännagivanden av ministrarna Weyts (Flandern) och Desquesnes (Vallonien).",
      },
      {
        question: "Gäller detta utländska bilar?",
        answer:
          "Ja. EU-regler kräver likabehandling. Belgiska och utländska förare måste båda betala på täckta vägar.",
      },
      {
        question: "Var kan man köpa den belgiska vignetten?",
        answer:
          "Den officiella försäljningen har ännu inte startat. Enligt planerna väntas onlineköp från 1 mars 2027 via den officiella kanalen eller en auktoriserad partner.",
      },
    ],
    sourcesTitle: "Officiella källor",
  },
  prices: {
    title: "Belgiska vignettpriser 2027: tariffer per Euronorm och giltighetstid",
    intro:
      "Det planerade priset för Belgiens vägvignett beror på två faktorer: fordonets Euronorm och vignettens giltighetstid. Den flamländska regeringen har publicerat tariffer för 1 dag, 10 dagar, 1 månad, 2 månader och 1 år.",
    leadParagraphs: [
      "För en bil med Euro 4 eller högre kostar den belgiska vignetten enligt nuvarande tariffer €9 för 1 dag, €12 för 10 dagar och €100 för ett år. Utsläppsfria fordon betalar mindre och fordon med Euro 0 till och med Euro 3 betalar mer.",
      "Vignetten är planerad från 1 maj 2027. Köp skulle bli möjligt från 1 mars 2027. Införandet är fortfarande beroende av slutligt godkännande.",
    ],
    matrixTitle: "Priser belgisk vägvignett 2027",
    rateMatrix: svRateMatrix,
    matrixNote:
      "Dessa tariffer är publicerade av den flamländska regeringen. Priset bestäms alltså inte bara av hur länge du behöver vignetten, utan också av fordonets Euronorm.",
    buyLinkParagraph:
      "[[buy|Se var och när du kan köpa den belgiska vignetten]].",
    categorySections: [
      {
        id: "euro-4",
        title: "Vad kostar en belgisk vignett för Euro 4 och högre?",
        paragraphs: [
          "För fordon med Euro 4 eller högre gäller enligt publicerade tariffer:",
        ],
        list: [
          "1 dag: €9",
          "10 dagar: €12",
          "1 månad: €19",
          "2 månader: €30",
          "1 år: €100",
        ],
        linkParagraph:
          "Detta är kategorin där en stor del av dagens fordonspark ingår. För en kort genomresa genom Belgien kan därför en dag- eller 10-dagarsvignett räcka. Den som regelbundet använder belgiska region- och motorvägar kan jämföra årsvignetten med de kortare giltighetstiderna. Läs mer om [[dailyVignette|dagvignetten]] eller se [[annualVignette|årsvignetten]].",
      },
      {
        id: "euro-0-3",
        title: "Vad kostar en belgisk vignett för Euro 0 till och med Euro 3?",
        paragraphs: [
          "Äldre fordon med Euro 0, Euro 1, Euro 2 eller Euro 3 hör till den dyraste tariffkategorin.",
          "De planerade priserna går från €11,25 för en dag till €125 för ett år.",
        ],
        tableTitle: "Pris Euro 0–3",
        table: [
          { label: "1 dag", value: "€11,25" },
          { label: "10 dagar", value: "€15" },
          { label: "1 månad", value: "€23,75" },
          { label: "2 månader", value: "€37,50" },
          { label: "1 år", value: "€125" },
        ],
      },
      {
        id: "elektrisk",
        title: "Vad kostar vignetten för en elbil?",
        paragraphs: [
          "För ett utsläppsfritt fordon gäller den lägsta tariffen. Enligt den aktuella pristabellen kostar vignetten €8,10 för en dag och €90 för ett helt år.",
        ],
        tableTitle: "Pris utsläppsfri",
        table: [
          { label: "1 dag", value: "€8,10" },
          { label: "10 dagar", value: "€10,80" },
          { label: "1 månad", value: "€17,10" },
          { label: "2 månader", value: "€27" },
          { label: "1 år", value: "€90" },
        ],
        linkParagraph:
          "[[electricVignette|Läs mer om den belgiska vignetten för elbilar]].",
      },
    ],
    durationSection: {
      id: "giltighetstid",
      title: "Vilken giltighetstid behöver jag?",
      paragraphs: [
        "Enligt nuvarande planer kan du välja mellan fem giltighetsperioder:",
        "Den bästa giltighetstiden beror på hur ofta och hur länge du använder de vägar där vignetten blir obligatorisk.",
        "Se den separata informationen om [[dailyVignette|dagvignett]], [[monthlyVignette|månadsvignett]] och [[annualVignette|årsvignett]].",
      ],
      list: [
        "1 dag — för en kort genomresa eller dagstur.",
        "10 dagar — till exempel för semester eller ett längre besök.",
        "1 månad — för flera resor under några veckor.",
        "2 månader — för en längre vistelse eller regelbunden tillfällig användning.",
        "1 år — för förare som regelbundet kör på belgiska region- och motorvägar.",
      ],
    },
    whenSection: {
      id: "nar",
      title: "När gäller dessa priser?",
      paragraphs: [
        "Den digitala vägvignetten är planerad från 1 maj 2027. Enligt aktuell officiell information skulle vignetten kunna köpas online från 1 mars 2027.",
        "Det praktiska genomförandet pågår fortfarande och införandet är beroende av slutligt godkännande.",
        "Vill du veta hur köpet fungerar? Se då [[buy|Köp belgisk vignett]]. För alla regler, fordon och viktiga datum går du till vår kompletta guide om [[home|Belgiens vägvignett 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Samband med vägskatt (Flandern)",
        paragraphs: [
          "Flandern reformerar samtidigt den årliga vägskatten. Enligt uppskattningar kan ungefär hälften av de flamländska bilisterna betala mer totalt — upp till €100 extra per år.",
          "Sänkningen av vägskatten kompenserar enligt planerna inte alla fullt ut för vignettkostnaderna. Detta är bakgrundsinformation; vignettarifferna ovan gäller oberoende av den reformen.",
        ],
      },
    ],
    euroNormTitle: "Euro-normer i korthet",
    euroNormCategoryHeader: "Norm",
    euroNormDescriptionHeader: "Beskrivning",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Bilar från cirka 2005–2006. De flesta fordon på vägarna. Dagtariff €9, år €100.",
      },
      {
        norm: "Utsläppsfri",
        description: "Helt utsläppsfri (el / vätgas). Lägsta tariff: från €8,10/dag, €90/år.",
      },
      {
        norm: "Euro 3 och lägre",
        description: "Äldre, mer förorenande fordon. Högsta tariff: från €11,25/dag, €125/år.",
      },
    ],
    vignettePagesTitle: "Per vignetttyp",
    faqs: [
      {
        question: "Vad är det lägsta planerade dagspriset?",
        answer:
          "Enligt den flamländska regeringen är den lägsta dagsavgiften €8,10 för utsläppsfria fordon. För Euro 4 och högre är den €9; för Euro 0 till och med 3 är den €11,25.",
      },
      {
        question: "Gäller de korta perioderna för alla utsläppsklasser?",
        answer:
          "Ja. Varje giltighetstid (1 dag, 10 dagar, 1 månad, 2 månader, 1 år) har en egen tariff per Euronorm-kategori. Beloppen skiljer sig per kategori.",
      },
      {
        question: "Är kommersiella skåpbilar avdragsgilla?",
        answer:
          "Enligt planerna kan vignettkostnaden för yrkesfordon vara fullt avdragsgill som företagskostnad.",
      },
    ],
  },
  foreign: {
    title: "Behöver utländska bilar en belgisk vignett?",
    intro:
      "Ja, enligt nuvarande planer. Utländska personbilar kommer att behöva en belgisk vignett från 1 maj 2027 när de använder täckta belgiska vägar. Det planerade systemet skiljer inte mellan belgiska och utländska registreringsskyltar — en bil registrerad i Nederländerna, Frankrike, Tyskland eller ett annat land förväntas behöva samma digitala vignett som ett belgiskt fordon. Slutgiltiga regler kan fortfarande ändras tills systemet officiellt godkänns och lanseras.",
    sections: [
      {
        id: "eu-rules",
        title: "Likabehandling",
        paragraphs: [
          "Belgiska förare betalar också — EU-regler förhindrar att endast utlänningar debiteras. Din utländska registreringsskylt omfattas av samma planerade system.",
          "Uppskattningsvis 30 miljoner utländska personbilar passerar genom Belgien varje år.",
        ],
      },
      {
        id: "digital",
        title: "Digitalt system",
        paragraphs: [
          "Ingen fysisk vignett att köpa eller visa upp. Systemet planeras använda automatisk registreringsskyltsigenkänning (ANPR). Köp innan du kör på täckta vägar.",
        ],
      },
      {
        id: "history",
        title: "Historisk bakgrund",
        paragraphs: [
          "Belgien införde en vignett 2007 men drog tillbaka den efter nederländska protester. Nederländska ministrar har åter uttryckt oro — och inget särskilt gränsregime för grannländer har ännu meddelats i de nuvarande planerna.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Nederländerna",
        tips: [
          "Ja — personbilar registrerade i Nederländerna förväntas behöva en belgisk vignett från 1 maj 2027 på täckta belgiska vägar.",
          "Detta gäller vanliga rutter som Nederländerna → Antwerpen, Nederländerna → Bryssel och transit Nederländerna → Luxemburg/Frankrike.",
          "För närvarande har inget undantag meddelats för nederländska gränsregioner.",
        ],
      },
      {
        id: "germany",
        country: "Tyskland",
        tips: [
          "Ja — personbilar registrerade i Tyskland förväntas behöva en belgisk vignett från 1 maj 2027 på täckta belgiska vägar.",
          "Detta inkluderar vanliga transitrutter som Aachen → Liège och Tyskland → Frankrike via Belgien.",
          "Korttidsalternativ (1–10 dagar) i planerna kan passa genomfartstrafik.",
        ],
      },
      {
        id: "france",
        country: "Frankrike",
        tips: [
          "Ja — personbilar registrerade i Frankrike förväntas behöva en belgisk vignett från 1 maj 2027 på täckta belgiska vägar.",
          "Detta är särskilt relevant för resor från norra Frankrike till Belgien och transitrutter Frankrike → Nederländerna/Tyskland.",
          "Täckta vägar omfattar motorvägar och planerade regionala huvudvägar — inte bara långdistans-transit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Behöver jag vignett om jag bara passerar genom?",
        answer:
          "Ja — enligt nuvarande planer krävs från 1 maj 2027 vignett för att använda täckta belgiska huvudvägar oavsett destination. Slutgiltiga regler kan fortfarande ändras före lanseringen.",
      },
      {
        question: "Betalar utländska bilar lika mycket som belgiska?",
        answer:
          "Ja. Det planerade systemet tillämpar samma digitala vignett på belgiska och utländska registreringsskyltar. EU:s regler om likabehandling förklarar varför endast utlänningar inte kan debiteras.",
      },
    ],
  },
  exemptions: {
    title: "Undantag",
    intro: "Inte alla fordon betalar enligt planerna. Här är vem som omfattas och vem som inte gör det.",
    sections: [
      {
        id: "motorcycles",
        title: "Motorcyklar undantagna",
        paragraphs: ["Motorcyklar uttryckligen undantagna enligt ministrarna Weyts och Desquesnes."],
      },
      {
        id: "trucks",
        title: "Lastbilar",
        paragraphs: ["Tunga fordon använder det befintliga kilometeravgiftssystemet (Viapass), inte vignetten."],
      },
    ],
    exemptTableTitle: "Undantagna",
    requiredTableTitle: "Vignett krävs",
    exemptTable: [
      { label: "Motorcyklar och mopeder", value: "Undantagen" },
      { label: "Lastbilar (>3,5 t)", value: "Undantagen — kilometeravgift" },
      { label: "Traktorer", value: "Undantagen" },
      { label: "Turistbussar", value: "Undantagen" },
      { label: "Räddningstjänst och polis", value: "Undantagen" },
      { label: "Försvarsmakten", value: "Undantagen" },
    ],
    notExemptTable: [
      { label: "Personbilar (≤3,5 t)", value: "Vignett krävs" },
      { label: "Utländska bilar", value: "Vignett krävs" },
      { label: "Skåpbilar", value: "Vignett krävs" },
      { label: "Elbilar", value: "Krävs (€90/år planerat)" },
    ],
    faqs: [
      {
        question: "Är min husbil undantagen?",
        answer: "Om den är registrerad som personbil ≤3,5 t omfattas den enligt planerna.",
      },
    ],
  },
  fines: {
    title: "Böter och kontroll",
    intro: "Kontroll via ANPR-kameror och mobila enheter. En toleransperiod planeras innan böter börjar tillämpas.",
    sections: [
      {
        id: "tolerance",
        title: "Toleransperiod",
        paragraphs: ["1 maj till 1 juli 2027 — inga böter enligt planerna. Påföljder från 1 juli och framåt."],
      },
      {
        id: "anpr",
        title: "ANPR-kontroller",
        paragraphs: ["Kameror på motorvägar och regionala huvudvägar verifierar vignettens giltighet."],
      },
    ],
    fineTable: [
      { label: "1:a förseelsen", value: "€70" },
      { label: "2:a förseelsen", value: "€140" },
      { label: "3:e och fler", value: "€210" },
    ],
    faqs: [
      {
        question: "Böter om jag glömmer vignetten?",
        answer: "Inte under toleransperioden (maj–juni 2027). Därefter ja — även för utländska registreringsskyltar.",
      },
    ],
  },
  buy: {
    title: "När kan jag köpa en belgisk vignett?",
    intro:
      "Enligt nuvarande planer väntas onlineförsäljningen från 1 mars 2027. Vägvinjetten skulle bli obligatorisk från 1 maj 2027. De slutliga villkoren och den officiella försäljningsportalen kan fortfarande ändras.",
    independenceNotice:
      "BelgiumVignette.be är en oberoende informationssajt och är varken en officiell webbplats för den belgiska staten eller en auktoriserad säljare av vägvinjetten.",
    sections: [
      {
        id: "when",
        title: "När öppnar försäljningen?",
        paragraphs: [
          "Den flamländska regeringen anger att du kan köpa vinjetten online från 1 mars 2027 — via den officiella webbplatsen eller en auktoriserad partner.",
          "Det finns inget försäljningsportal idag: du kan inte boka eller betala ännu. Sajter som redan erbjuder det är inte den officiella kanalen.",
        ],
      },
      {
        id: "expected",
        title: "Vad som förväntas",
        paragraphs: [
          "Vinjetten blir digital och kopplad till registreringsskylten — inget vindruteklistermärke.",
          "Enligt planerna väljer du giltighetstid: 1 dag, 10 dagar, 1 månad, 2 månader eller 1 år.",
        ],
      },
    ],
    statusBadge: "Försäljning förväntas 1 mars 2027",
    officialSourceLabel: "Officiell källa",
    steps: [
      {
        title: "Vänta på auktoriserad försäljning",
        description:
          "Onlineköp förväntas från 1 mars 2027 via den officiella webbplatsen eller en auktoriserad partner, enligt den flamländska regeringen.",
      },
      { title: "Registrera din registreringsskylt", description: "Digitalt system — inget vindruteklistermärke." },
      { title: "Välj giltighetstid", description: "Dag, 10 dagar, månad, 2 månader eller årsvignett." },
      { title: "Kör med giltig vignett", description: "Kameror kontrollerar automatiskt från 1 maj 2027." },
    ],
    faqs: [
      {
        question: "Kan jag förbeställa nu?",
        answer:
          "Nej. Enligt nuvarande planer startar onlineförsäljningen 1 mars 2027. Anmäl dig för uppdateringar så får du ett meddelande när auktoriserad försäljning blir tillgänglig.",
      },
      {
        question: "När blir vinjetten obligatorisk?",
        answer:
          "Enligt planerna från 1 maj 2027 på belgiska motorvägar och regionala vägar. En toleransperiod planeras från 1 maj till 1 juli 2027.",
      },
    ],
  },
  tolls: svTolls,
  privacy: {
    title: "Integritetspolicy",
    intro: "BelgiumVignette.be respekterar din integritet. Så här hanterar vi dina uppgifter.",
    sections: [
      {
        id: "controller",
        title: "Personuppgiftsansvarig",
        paragraphs: [
          "BelgiumVignette.be är en oberoende informationssajt om den planerade belgiska vägvinjetten. Vi är inte knutna till den belgiska staten, Flandern, Vallonien eller Bryssel, och säljer inga vinjetter.",
          "Sajten drivs i samband med Tolls.be (oberoende information om vägavgifter i Belgien). Kontakt: info@tolls.be.",
        ],
      },
      {
        id: "newsletter",
        title: "Nyhetsbrev",
        paragraphs: [
          "E-post, språk och tidpunkt för samtycke lagras i Supabase (EU-hosting). Används endast för vignettuppdateringar.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies, analysverktyg och samtycke",
        paragraphs: [
          "Nödvändig lagring: vi sparar ditt cookieval i localStorage. Rättslig grund: berättigat intresse (art. 6.1 f GDPR) och/eller samtycke där det krävs.",
          "Analys (valfritt): Vercel Analytics samlar in anonyma sidvisningar. Laddas endast efter samtycke via cookiebannern. Rättslig grund: samtycke (art. 6.1 a GDPR). Återkalla via Cookieinställningar i sidfoten.",
          "Google Search Console och Bing Webmaster Tools: endast verifieringsmetataggar — inga spårningscookies.",
          "Lagringstid: tills du rensar lagringen eller vi uppdaterar denna policy (version 2026-08-04).",
        ],
      },
      {
        id: "news-editorial",
        title: "Nyheter, sammanfattningar & redaktionellt innehåll",
        paragraphs: [
          "Vår nyhetssektion publicerar oberoende sammanfattningar av allmänt tillgänglig rapportering om den belgiska vignetten. Dessa sidor är inte reproduktioner av originalartiklarna.",
          "Sammanfattningar och översättningar kan produceras med AI-stöd och kan skilja sig i formulering från källan. Vi länkar alltid till den ursprungliga utgivaren. Vår redaktionella kommentar («Vår syn») skrivs oberoende och representerar inte den ursprungliga utgivaren eller belgiska myndigheter.",
          "Bilder i nyhetsartiklar kan hämtas från den länkade originalartikeln eller pressbyråer, med credits där tillämpligt. Sådant material förblir egendom hos respektive rättighetsinnehavare. Vi visar det i god tro som referens tillsammans med en länk till källan. Om du anser att ditt innehåll används felaktigt, kontakta info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Dina rättigheter (GDPR)",
        paragraphs: ["Tillgång, rättelse, radering, invändning — info@tolls.be."],
      },
    ],
    lastUpdated: "4 August 2026",
  },
  acquisition: getAcquisitionContent("sv"),
  news: {
    title: "Nyheter och uppdateringar",
    intro:
      "Vi följer pålitliga officiella och mediekällor om Belgiens planerade vignett. Varje artikel sammanfattar den ursprungliga rapporteringen och tillför vår oberoende syn — med en direktlänk till källan.",
    latestArticles: "Senaste artiklar",
    summaryTitle: "Sammanfattning",
    summaryFromSource: "från originalkälla:",
    ourTakeTitle: "Vår syn",
    sourceTitle: "Originalkälla",
    readArticle: "Läs artikel",
    backToNews: "Tillbaka till nyheter",
    publishedOn: "Publicerad",
    sourceLabel: "Källa",
    sourceDisclaimer:
      "Vi sammanfattar pålitliga källor och länkar till originalartikeln. Vår syn är oberoende redaktionell kommentar, inte officiell regeringsinformation.",
    translationDisclaimer:
      "Sammanfattningen och översättningen på denna sida har skapats med AI-stöd baserat på originalartikeln. Se alltid källan nedan för den officiella formuleringen.",
    articleAttributionTitle: "Oberoende sammanfattning — inte originalartikeln",
    articleAttributionIndependence:
      "BelgiumVignette.be är en oberoende informationssajt. Vi är inte knutna till, godkända av eller agerar för den ursprungliga utgivaren. Denna sida sammanfattar allmänt tillgänglig rapportering och lägger till vår egen redaktionella kommentar. Det är inte en reproduktion av originalartikeln.",
    articleAttributionAi:
      "Sammanfattningen och översättningen har skapats med AI-stöd och kan skilja sig i formulering från originalet. Se alltid källan länkad nedan för den officiella texten.",
    articleAttributionReadOriginal: "Läs originalartikeln hos",
    articleAttributionCopyright:
      "Originalartikeln, bilder och annan media förblir egendom hos respektive rättighetsinnehavare. Vi länkar till källan i god tro som referens. Bildkrediter anges ovan där tillämpligt.",
    tableOfContents: "På denna sida",
    relatedArticles: "Fler nyheter och uppdateringar",
    noArticles: "Inga artiklar publicerade ännu. Kom tillbaka snart.",
  },
  newsletter: {
    emailPlaceholder: "E-postadress",
    consentLabel: "Jag godkänner att ta emot uppdateringar och har läst",
    success: "Tack! Du är prenumererad.",
    error: "Något gick fel. Försök igen.",
    privacyLink: "integritetspolicyn.",
    independenceNote:
      "BelgiumVignette.be är en oberoende informationstjänst och är inte knuten till den belgiska staten. Vi säljer för närvarande ingen belgisk vägvinjett.",
    sticky: {
      teaser: "Vignetten säljs ännu inte — få köplänken",
      cta: "Anmäl dig →",
      closeLabel: "Stäng",
    },
    intents: {
      home: {
        title:
          "Få köplänken så snart den belgiska vignetten blir tillgänglig",
        description:
          "Försäljningen planeras från 1 mars 2027. Lämna din e-postadress och få ett meddelande när auktoriserad försäljning blir tillgänglig.",
        benefits: [
          "Länk till en auktoriserad köpkanal så snart den är känd",
          "Uppdateringar när priser eller regler ändras",
          "Inga onödiga e-postmeddelanden",
        ],
        submit: "Skicka köplänken till mig",
      },
      prices: {
        title: "Få besked när de slutliga vignetpriserna är bekräftade",
        description:
          "Nuvarande taxor har publicerats, men införandet måste fortfarande godkännas slutgiltigt. Vi följer den officiella informationen åt dig.",
        benefitsIntro: "Få ett e-postmeddelande när:",
        benefits: [
          "de slutliga priserna är bekräftade;",
          "auktoriserad försäljning startar;",
          "en länk till en godkänd köpkanal är tillgänglig.",
        ],
        submit: "Håll mig uppdaterad",
      },
      buy: {
        title: "Meddela mig när den belgiska vignetten går till försäljning",
        description:
          "Den auktoriserade försäljningen har ännu inte startat. Enligt nuvarande plan kan du köpa den belgiska vignetten från 1 mars 2027 via den officiella webbplatsen eller en auktoriserad partner. Lämna din e-postadress och få ett meddelande när auktoriserad försäljning blir tillgänglig.",
        benefits: [],
        submit: "Skicka köplänken till mig",
      },
      foreign: {
        title:
          "Meddela mig när utländska bilar kan registrera sin vignett",
        description:
          "Utländska förare förväntas också behöva en belgisk vignett. Få besked när registrering och köp via en godkänd kanal är möjliga.",
        benefits: [
          "Start av auktoriserad försäljning",
          "Regler för utländska registreringsskyltar",
          "Länk till en godkänd köpkanal",
        ],
        submit: "Håll mig uppdaterad",
      },
      news: {
        title: "Få viktiga uppdateringar om den belgiska vignetten",
        description:
          "Korta, relevanta aviseringar när det finns nyheter om priser, regler eller försäljningsstarten.",
        benefits: [
          "Viktiga uppdateringar om vignetten",
          "Ingen daglig spam",
          "Köplänk så snart en godkänd kanal är tillgänglig",
        ],
        submit: "Få uppdateringar",
      },
      default: {
        title:
          "Få köplänken så snart den belgiska vignetten blir tillgänglig",
        description:
          "Försäljningen planeras att starta den 1 mars 2027. Vi skickar dig ett meddelande när auktoriserad försäljning blir tillgänglig.",
        benefits: [
          "Länk till en auktoriserad köpkanal",
          "Uppdateringar om priser och regler",
          "Inga onödiga e-postmeddelanden",
        ],
        submit: "Skicka köplänken till mig",
      },
    },
  },
  cookieBanner: {
    title: "Cookies och integritet",
    description:
      "Nödvändig lagring för ditt cookieval. Valfritt: Vercel Analytics (anonyma sidvisningar). Ingen analys innan du bestämt dig.",
    essentialTitle: "Nödvändiga",
    essentialDescription: "Sparar ditt cookieval i localStorage.",
    alwaysOn: "Alltid på — krävs för att komma ihåg ditt val.",
    analyticsTitle: "Analys (Vercel Analytics)",
    analyticsDescription: "Anonym statistik över sidvisningar. Aktiv endast efter samtycke.",
    acceptAll: "Godkänn alla",
    rejectAll: "Avvisa alla",
    savePreferences: "Spara inställningar",
    manageSettings: "Inställningar",
    closeSettings: "Stäng",
    privacyLink: "Integritetspolicy",
  },
  sources: [
    {
      title: "Flamländska regeringen — Vägvinjett från 1 maj 2027",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Officiell sida om skyldighet, priser och köp från 1 mars 2027",
    },
    {
      title: "Viapass — kilometeravgift för lastbilar",
      url: "https://www.viapass.be",
      description: "Befintligt system för fordon över 3,5 ton (inte personbilsvinjetten)",
    },
    {
      title: "Europeiska kommissionen — vägavgifter",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "EU:s ramverk för vägavgifter och icke-diskriminering",
    },
  ],
};

export default dictionary;
