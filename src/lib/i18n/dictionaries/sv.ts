import type { BaseDictionary } from "../types";

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
    news: "Nyheter och uppdateringar",
    privacy: "Integritet",
  },
  meta: {
    home: {
      title: "Belgisk vignett 2027: behöver du en vignett för Belgien?",
      description:
        "Belgien planerar att införa en digital vägvignett från 1 maj 2027. Ta reda på om du behöver en, vad den kostar, vem som är undantagen och när försäljningen startar.",
    },
    prices: {
      title: "Belgiska vignettpriser 2027 — dag, månad och årspriser",
      description:
        "Planerade vignettpriser för Belgien: €100/år, korttidsalternativ från €9/dag. Euro-utsläppsklass förklarad enkelt.",
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
      title: "Köp belgisk vignett — när och hur (digitalt system förväntas)",
      description:
        "Inte till salu ännu. Vad som förväntas enligt planerna: ett digitalt system kopplat till registreringsskylten, ingen vindruteklistermärke.",
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
  },
  common: {
    disclaimer:
      "BelgiumVignette.be är en oberoende informationssajt. Vi är inte kopplade till den belgiska staten, Flandern, Vallonien eller Bryssel.",
    lastUpdated: "Senast uppdaterad",
    lastUpdatedDate: "4 August 2026",
    lastUpdatedIso: "2026-08-04",
    readMore: "Läs mer",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — oberoende information om belgiska vägavgifter",
    backToHome: "Tillbaka till startsidan",
    plannedNotice:
      "Planer som presenterades i mars 2026 kan fortfarande ändras. Vi följer officiella källor och uppdaterar denna sida när nyheter kommer.",
    independentSite: "Info belgisk vägvignett",
    contactLabel: "Kontakt",
    cookieSettings: "Cookieinställningar",
    tableCategory: "Kategori",
    tablePrice: "Pris",
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
        title: "Vem behöver den?",
        summary:
          "Personbilar upp till 3,5 ton, inklusive utländska fordon — även om du bara passerar genom.",
        href: "foreign",
      },
      {
        title: "Vem är undantagen?",
        summary:
          "Motorcyklar, lastbilar (kilometeravgift), traktorer, turistbussar, räddningstjänst och polis.",
        href: "exemptions",
      },
      {
        title: "Hur mycket?",
        summary:
          "Årsvignett från €90 (elbil) till €125 (äldre bilar). Korttidsalternativ från €9/dag.",
        href: "prices",
      },
    ],
    pricingTitle: "Planerade priser i korthet",
    pricingSubtitle:
      "Baserat på publicerade planer (mars 2026). Slutliga belopp kan fortfarande ändras.",
    annualTableTitle: "Årsvignett",
    shortTermTableTitle: "Korttidsalternativ",
    annualPricing: [
      { label: "Euro 4 och högre", value: "€100 / year", note: "97 %+ av flamländska bilar" },
      { label: "El / vätgas", value: "€90 / year" },
      { label: "Äldre bilar (upp till Euro 3)", value: "€125 / year" },
    ],
    shortTermPricing: [
      { label: "1 dag", value: "€9" },
      { label: "10 dagar", value: "€12" },
      { label: "1 månad", value: "€19" },
      { label: "2 månader", value: "€30" },
    ],
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
        question: "Gäller detta utländska bilar?",
        answer:
          "Ja. EU-regler kräver likabehandling. Belgiska och utländska förare måste båda betala.",
      },
      {
        question: "Betalar motorcyklister?",
        answer:
          "Nej. Motorcyklar är uttryckligen undantagna enligt tillkännagivanden av ministrarna Weyts (Flandern) och Desquesnes (Vallonien).",
      },
      {
        question: "När kan jag köpa?",
        answer:
          "Ingen officiell försäljningskanal ännu. Anmäl dig till vårt nyhetsbrev för uppdateringar om lanseringen.",
      },
    ],
    sourcesTitle: "Officiella källor",
  },
  prices: {
    title: "Priser och giltighetstider",
    intro:
      "Översikt över planerade vignettpriser per Euro-utsläppsklass. Baserat på tillkännagivanden i mars 2026 — detaljer kan ändras.",
    sections: [
      {
        id: "annual",
        title: "Årsvignett",
        paragraphs: [
          "För regelbundna användare av Belgiens huvudvägar. Priset beror på fordonets Euro-utsläppsklass.",
        ],
      },
      {
        id: "short",
        title: "Korttidsalternativ",
        paragraphs: [
          "För enstaka resor — semester, helger — planeras kortare vignetter.",
          "Äldre, mer förorenande bilar (upp till Euro 3) betalar något högre priser.",
        ],
      },
      {
        id: "road-tax",
        title: "Samband med vägavgift (Flandern)",
        paragraphs: [
          "Flandern reformerar samtidigt den årliga vägavgiften. Ungefär hälften av flamländska bilister kan betala mer totalt — upp till €100/år extra.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 och högre", value: "€100", note: "År" },
      { label: "El / vätgas", value: "€90", note: "År" },
      { label: "Upp till Euro 3", value: "€125", note: "År" },
    ],
    shortTermTable: [
      { label: "1 dag", value: "€9" },
      { label: "10 dagar", value: "€12" },
      { label: "1 månad", value: "€19" },
      { label: "2 månader", value: "€30" },
    ],
    euroNormTitle: "Euro-klasser förklarade",
    euroNormCategoryHeader: "Standard",
    euroNormDescriptionHeader: "Beskrivning",
    euroNormItems: [
      { norm: "Euro 4+", description: "Bilar från cirka 2005–2006 och senare. De flesta fordon på vägarna." },
      { norm: "Electric / H₂", description: "Nollutsläpp. Lägsta planerade pris." },
      { norm: "Euro 3 och lägre", description: "Äldre, mer förorenande fordon." },
    ],
    vignettePagesTitle: "Per vignetttyp",
    faqs: [
      {
        question: "Är kommersiella skåpbilar avdragsgilla?",
        answer: "Enligt planerna kan vignettkostnaden för yrkesfordon vara fullt avdragsgill som företagskostnad.",
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
    title: "Så köper du",
    intro:
      "Ingen officiell försäljningskanal finns ännu. Ett digitalt system förväntas, men detaljer om webbplats och app är okända.",
    sections: [
      {
        id: "status",
        title: "Nuvarande status",
        paragraphs: [
          "Planerna behöver fortfarande godkännande från Vallonien, Bryssel och EU-kommissionen innan försäljningen kan starta.",
        ],
      },
      {
        id: "expected",
        title: "Vad som förväntas",
        paragraphs: ["Online-registrering av din registreringsskylt. Inget fysiskt klistermärke behövs."],
      },
    ],
    statusBadge: "Inte tillgänglig ännu",
    steps: [
      { title: "Vänta på officiell lansering", description: "Försäljning förväntas före 1 maj 2027." },
      { title: "Registrera din registreringsskylt", description: "Digitalt system — inget vindruteklistermärke." },
      { title: "Välj giltighetstid", description: "Dag, 10 dagar, månad, 2 månader eller årsvignett." },
      { title: "Kör med giltig vignett", description: "Kameror kontrollerar automatiskt." },
    ],
    faqs: [
      {
        question: "Kan jag förbeställa nu?",
        answer: "Nej. Prenumerera på vårt nyhetsbrev för att hålla dig informerad.",
      },
    ],
  },
  privacy: {
    title: "Integritetspolicy",
    intro: "BelgiumVignette.be respekterar din integritet. Så här hanterar vi dina uppgifter.",
    sections: [
      {
        id: "controller",
        title: "Personuppgiftsansvarig",
        paragraphs: ["BelgiumVignette.be — kontakt: info@tolls.be."],
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
    title: "Få besked först när den belgiska vignetten blir tillgänglig",
    description: "",
    benefitsIntro: "",
    benefits: [
      "Officiell försäljning startar",
      "Slutliga priser bekräftade",
      "Nya regler publicerade",
      "Köplänk tillgänglig",
    ],
    emailPlaceholder: "E-postadress",
    consentLabel: "Jag godkänner att ta emot uppdateringar och har läst integritetspolicyn.",
    submit: "Meddela mig",
    success: "Tack! Du är prenumererad.",
    error: "Något gick fel. Försök igen.",
    privacyLink: "Integritetspolicy",
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
    { title: "Flemish government", url: "https://www.vlaanderen.be", description: "Officiella tillkännagivanden" },
    { title: "Viapass", url: "https://www.viapass.be", description: "Kilometeravgiftssystem för lastbilar" },
    { title: "European Commission", url: "https://ec.europa.eu", description: "Granskning av avtalet" },
  ],
};

export default dictionary;
