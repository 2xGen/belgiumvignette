import type { Dictionary } from "../types";

const dictionary: Dictionary = {
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
      title: "Belgisk vignett 2027 — priser, regler och guide för utländska förare",
      description:
        "Oberoende guide till Belgiens planerade digitala vägvignett från 1 maj 2027. Priser, undantag, böter och praktiska tips för nederländska, tyska och andra gränsöverskridande förare.",
    },
    prices: {
      title: "Belgiska vignettpriser 2027 — dag, månad och årspriser",
      description:
        "Planerade vignettpriser för Belgien: €100/år, korttidsalternativ från €9/dag. Euro-utsläppsklass förklarad enkelt.",
    },
    foreign: {
      title: "Belgisk vignett för utländska bilar och gränsöverskridande förare",
      description:
        "Praktisk guide för förare från Nederländerna, Tyskland och Frankrike som reser genom Belgien. Det du behöver veta enligt nuvarande planer.",
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
    lastUpdatedDate: "14 July 2026",
    lastUpdatedIso: "2026-07-14",
    readMore: "Läs mer",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — oberoende information om belgiska vägavgifter",
    backToHome: "Tillbaka till startsidan",
    plannedNotice:
      "Planer som presenterades i mars 2026 kan fortfarande ändras. Vi följer officiella källor och uppdaterar denna sida när nyheter kommer.",
    independentSite: "Oberoende informationssajt",
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
      title: "Belgiens digitala vignett, tydligt förklarad",
      subtitle:
        "Från maj 2027 planerar Flandern, Vallonien och Bryssel att ta ut avgift för bilister som använder huvudvägar. Inget vindruteklistermärke — en digital vignett kopplad till din registreringsskylt.",
      ctaPrimary: "Se priser",
      ctaSecondary: "Info för utländska förare",
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
    faqs: [
      {
        question: "Är kommersiella skåpbilar avdragsgilla?",
        answer: "Enligt planerna kan vignettkostnaden för yrkesfordon vara fullt avdragsgill som företagskostnad.",
      },
    ],
  },
  foreign: {
    title: "Utländska förare",
    intro:
      "Mer än hälften av kilometrarna på belgiska vägar körs enligt uppgift av utländska bilister. Om du kommer från Nederländerna, Tyskland, Frankrike eller annorstädes — här är vad planerna innebär för dig.",
    sections: [
      {
        id: "eu-rules",
        title: "Likabehandling",
        paragraphs: [
          "Belgiska förare betalar också — EU-regler förhindrar att endast utlänningar debiteras. Din utländska registreringsskylt omfattas.",
          "Uppskattningsvis 30 miljoner utländska personbilar passerar genom Belgien varje år.",
        ],
      },
      {
        id: "digital",
        title: "Digitalt, inget klistermärke",
        paragraphs: [
          "Ingen fysisk vignett att köpa eller visa upp. Systemet använder automatisk registreringsskyltsigenkänning (ANPR). Köp innan du kör.",
        ],
      },
      {
        id: "history",
        title: "Historisk bakgrund",
        paragraphs: [
          "Belgien införde en vignett 2007 men drog tillbaka den efter nederländska protester. Nederländska ministrar har åter uttryckt besvikelse — inget särskilt gränsregime i nuvarande planer.",
        ],
      },
    ],
    countryTips: [
      {
        country: "🇳🇱 Netherlands",
        tips: [
          "Populära rutter via E19 (Antwerpen), E40 (Bryssel) och E314 (Liège) omfattas.",
          "Inget särskilt avtal för förare vid den södra nederländska gränsen i nuvarande planer.",
        ],
      },
      {
        country: "🇩🇪 Germany",
        tips: [
          "Transit via Aachen–Liège eller rutter mot Frankrike kräver sannolikt vignett.",
          "Korttidsalternativ (1–10 dagar) passar genomfartstrafik.",
        ],
      },
      {
        country: "🇫🇷 France",
        tips: [
          "Förare från norra Frankrike och Vallonien: kontrollera om din rutt använder belgiska regionala huvudvägar.",
        ],
      },
    ],
    faqs: [
      {
        question: "Behöver jag vignett om jag bara passerar genom?",
        answer: "Ja — enligt planerna krävs vignett för att använda huvudvägar oavsett destination.",
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
          "Lagringstid: tills du rensar lagringen eller vi uppdaterar denna policy (version 2026-07-14).",
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
    lastUpdated: "14 July 2026",
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
    title: "Håll dig informerad",
    description: "Få besked när den officiella försäljningen startar och när viktiga uppdateringar publiceras.",
    emailPlaceholder: "Din e-postadress",
    consentLabel: "Jag godkänner att ta emot uppdateringar och har läst integritetspolicyn.",
    submit: "Prenumerera",
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
