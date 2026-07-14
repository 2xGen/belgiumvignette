import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  locale: "da",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Alt om Belgiens digitale vejafgift — for lokale og grænseoverskridende bilister.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Forside",
    prices: "Priser",
    foreign: "Udenlandske bilister",
    exemptions: "Fritagelser",
    fines: "Bøder",
    buy: "Sådan køber du",
    news: "Nyheder og opdateringer",
    privacy: "Privatliv",
  },
  meta: {
    home: {
      title: "Belgisk vignet 2027 — priser, regler & guide til udenlandske bilister",
      description:
        "Uafhængig guide til Belgiens planlagte digitale vejafgift fra 1 May 2027. Priser, fritagelser, bøder og praktiske tips til nederlandske, tyske og andre grænseoverskridende bilister.",
    },
    prices: {
      title: "Belgisk vignet priser 2027 — dag, måned & årlige takster",
      description:
        "Planlagte vignetpriser for Belgien: €100/år, kortvarige fra €9/dag. Euro-emissionsnorm forklaret enkelt.",
    },
    foreign: {
      title: "Belgisk vignet for udenlandske biler & grænseoverskridende bilister",
      description:
        "Praktisk guide til bilister fra Nederlandene, Tyskland og Frankrig, der kører gennem Belgien. Det, du skal vide ifølge de nuværende planer.",
    },
    exemptions: {
      title: "Belgisk vignet fritagelser — motorcykler, lastbiler & mere",
      description:
        "Hvem er fritaget ifølge planerne? Motorcykler, lastbiler, redningstjenester og andre kategorier forklaret.",
    },
    fines: {
      title: "Belgisk vignet bøder — kontrol & toleranceperiode",
      description:
        "Planlagte bøder op til €210, ANPR-kontrol og tolerance indtil 1 July 2027.",
    },
    buy: {
      title: "Køb belgisk vignet — hvornår & hvordan (digitalt system forventes)",
      description:
        "Endnu ikke til salg. Hvad du kan forvente ifølge planerne: et digitalt system knyttet til nummerpladen, ingen klistermærke i forruden.",
    },
    news: {
      title: "Nyheder om belgisk vignet — pålidelige kilder forklaret",
      description:
        "Uafhængige opsummeringer af officielle nyheder om den belgiske vignet med vores redaktionelle syn. Links til originale kilder.",
    },
    privacy: {
      title: "Privatlivspolitik — BelgiumVignette.be",
      description:
        "Hvordan BelgiumVignette.be håndterer cookies, analyse, nyhedsbrevsdata og dine GDPR-rettigheder.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be er et uafhængigt informationssite. Vi er ikke tilknyttet den belgiske regering, Flandern, Vallonien eller Bruxelles.",
    lastUpdated: "Sidst opdateret",
    lastUpdatedDate: "14 July 2026",
    lastUpdatedIso: "2026-07-14",
    readMore: "Læs mere",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — uafhængig information om belgiske vejafgifter",
    backToHome: "Tilbage til forsiden",
    plannedNotice:
      "Planer præsenteret i March 2026 kan stadig ændres. Vi følger officielle kilder og opdaterer denne side, når der kommer nyt.",
    independentSite: "Uafhængigt informationssite",
    contactLabel: "Kontakt",
    cookieSettings: "Cookieindstillinger",
    tableCategory: "Kategori",
    tablePrice: "Pris",
  },
  notFound: {
    title: "Siden blev ikke fundet",
    description:
      "Denne side findes ikke eller er blevet flyttet. Gå tilbage til forsiden eller læs vores seneste nyheder om det belgiske vignet.",
    homeLink: "Til forsiden",
    newsLink: "Nyheder og opdateringer",
  },
  home: {
    hero: {
      eyebrow: "Planlagt fra 1 May 2027",
      title: "Belgiens digitale vignet, forklaret tydeligt",
      subtitle:
        "Fra May 2027 planlægger Flandern, Vallonien og Bruxelles at opkræve vejafgift for brug af hovedveje. Intet klistermærke i forruden — et digitalt vignet knyttet til din nummerplade.",
      ctaPrimary: "Se priser",
      ctaSecondary: "Info til udenlandske bilister",
    },
    quickAnswers: [
      {
        title: "Hvem skal have det?",
        summary:
          "Personbiler op til 3,5 ton, inklusive udenlandske køretøjer — også hvis du kun kører igennem.",
        href: "foreign",
      },
      {
        title: "Hvem er fritaget?",
        summary:
          "Motorcykler, lastbiler (km-afgift), traktorer, turistbusser, redningstjenester og politi.",
        href: "exemptions",
      },
      {
        title: "Hvad koster det?",
        summary:
          "Årligt vignet fra €90 (elbil) til €125 (ældre biler). Kortvarigt fra €9/dag.",
        href: "prices",
      },
    ],
    pricingTitle: "Planlagte takster på et øjeblik",
    pricingSubtitle:
      "Baseret på offentliggjorte planer (March 2026). De endelige beløb kan stadig ændres.",
    annualTableTitle: "Årligt vignet",
    shortTermTableTitle: "Kortvarigt",
    annualPricing: [
      { label: "Euro 4 og højere", value: "€100 / year", note: "97 %+ af flamske biler" },
      { label: "El / brint", value: "€90 / year" },
      { label: "Ældre biler (op til Euro 3)", value: "€125 / year" },
    ],
    shortTermPricing: [
      { label: "1 dag", value: "€9" },
      { label: "10 dage", value: "€12" },
      { label: "1 måned", value: "€19" },
      { label: "2 måneder", value: "€30" },
    ],
    timelineTitle: "Vigtige datoer (ifølge planerne)",
    timeline: [
      {
        date: "March 2026",
        title: "Planer præsenteret",
        description:
          "Den flamske regering præsenterer forslag. Vallonien, Bruxelles og EU-Kommissionens godkendelse afventes stadig.",
      },
      {
        date: "1 May 2027",
        title: "Vignet obligatorisk",
        description:
          "Digitalt vignet kræves på motorveje og regionale hovedveje.",
      },
      {
        date: "1 July 2027",
        title: "Bøder håndhæves",
        description:
          "Toleranceperioden slutter. ANPR-kameraer og mobile enheder begynder kontrol.",
      },
    ],
    faqTitle: "Ofte stillede spørgsmål",
    faqs: [
      {
        question: "Er det et fysisk klistermærke?",
        answer:
          "Nej. Ifølge planerne er det et digitalt vignet knyttet til din nummerplade. Intet klistermærke i forruden.",
      },
      {
        question: "Gælder det for udenlandske biler?",
        answer:
          "Ja. EU-regler kræver lige behandling. Belgiske og udenlandske bilister skal begge betale.",
      },
      {
        question: "Skal motorcyklister betale?",
        answer:
          "Nej. Motorcykler er udtrykkeligt fritaget ifølge meddelelser fra ministrene Weyts (Flandern) og Desquesnes (Vallonien).",
      },
      {
        question: "Hvornår kan jeg købe?",
        answer:
          "Der findes endnu ingen officiel salgskanal. Tilmeld dig vores nyhedsbrev for opdateringer om lanceringen.",
      },
    ],
    sourcesTitle: "Officielle kilder",
  },
  prices: {
    title: "Priser & varigheder",
    intro:
      "Oversigt over planlagte vignetpriser efter Euro-emissionsnorm. Baseret på meddelelser fra March 2026 — detaljer kan ændres.",
    sections: [
      {
        id: "annual",
        title: "Årligt vignet",
        paragraphs: [
          "Til regelmæssige brugere af Belgiens hovedveje. Prisen afhænger af bilens Euro-emissionsklasse.",
        ],
      },
      {
        id: "short",
        title: "Kortvarige muligheder",
        paragraphs: [
          "Til lejlighedsvise ture — ferier, weekender — er kortere vignetter planlagt.",
          "Ældre, mere forurenende biler (op til Euro 3) betaler lidt højere takster.",
        ],
      },
      {
        id: "road-tax",
        title: "Samspil med vejafgift (Flandern)",
        paragraphs: [
          "Flandern reformerer samtidig den årlige vejafgift. Omtrent halvdelen af flamske bilister kan betale mere samlet — op til €100/år ekstra.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 og højere", value: "€100", note: "Year" },
      { label: "El / brint", value: "€90", note: "Year" },
      { label: "Op til Euro 3", value: "€125", note: "Year" },
    ],
    shortTermTable: [
      { label: "1 dag", value: "€9" },
      { label: "10 dage", value: "€12" },
      { label: "1 måned", value: "€19" },
      { label: "2 måneder", value: "€30" },
    ],
    euroNormTitle: "Euro-normer forklaret",
    euroNormCategoryHeader: "Norm",
    euroNormDescriptionHeader: "Beskrivelse",
    euroNormItems: [
      { norm: "Euro 4+", description: "Biler fra ca. 2005–2006 og frem. De fleste køretøjer på vejene." },
      { norm: "El / H₂", description: "Nulemission. Laveste planlagte takst." },
      { norm: "Euro 3 og derunder", description: "Ældre, mere forurenende køretøjer." },
    ],
    faqs: [
      {
        question: "Kan erhvervsvarebiler fradrages?",
        answer: "Ifølge planerne kan vignetudgiften for erhvervsvarebiler være fuldt fradragsberettiget som driftsomkostning.",
      },
    ],
  },
  foreign: {
    title: "Udenlandske bilister",
    intro:
      "Mere end halvdelen af kilometrene på belgiske veje køres angiveligt af udenlandske bilister. Hvis du kommer fra Nederlandene, Tyskland, Frankrig eller andre steder, er her hvad planerne betyder for dig.",
    sections: [
      {
        id: "eu-rules",
        title: "Lige behandling",
        paragraphs: [
          "Belgiske bilister betaler også — EU-regler forhindrer kun at opkræve udlændinge. Din udenlandske nummerplade er dækket.",
          "Anslået 30 millioner udenlandske personbiler passerer gennem Belgien hvert år.",
        ],
      },
      {
        id: "digital",
        title: "Digitalt, intet klistermærke",
        paragraphs: [
          "Intet fysisk vignet at købe eller vise. Systemet bruger automatisk nummerpladegenkendelse (ANPR). Køb inden du kører.",
        ],
      },
      {
        id: "history",
        title: "Historisk kontekst",
        paragraphs: [
          "Belgien forsøgte et vignet i 2007, men trak det tilbage efter nederlandske protester. Nederlandske ministre har igen udtrykt skuffelse — ingen særlig grænseregime i de nuværende planer.",
        ],
      },
    ],
    countryTips: [
      {
        country: "🇳🇱 Netherlands",
        tips: [
          "Populære ruter via E19 (Antwerpen), E40 (Bruxelles) og E314 (Liège) er omfattet.",
          "Ingen særlig ordning for bilister ved den sydlige nederlandske grænse i de nuværende planer.",
        ],
      },
      {
        country: "🇩🇪 Germany",
        tips: [
          "Transit via Aachen–Liège eller ruter mod Frankrig kræver sandsynligvis et vignet.",
          "Kortvarige muligheder (1–10 dage) passer til gennemkørende trafik.",
        ],
      },
      {
        country: "🇫🇷 France",
        tips: [
          "Bilister fra det nordlige Frankrig og Vallonien: tjek om din rute bruger belgiske regionale hovedveje.",
        ],
      },
    ],
    faqs: [
      {
        question: "Skal jeg have et vignet, hvis jeg bare kører igennem?",
        answer: "Ja — ifølge planerne kræves et vignet for brug af hovedveje uanset destination.",
      },
    ],
  },
  exemptions: {
    title: "Fritagelser",
    intro: "Ikke alle køretøjer betaler ifølge planerne. Her er hvem der er omfattet og hvem der ikke er.",
    sections: [
      {
        id: "motorcycles",
        title: "Motorcykler fritaget",
        paragraphs: ["Motorcykler er udtrykkeligt undtaget ifølge ministrene Weyts og Desquesnes."],
      },
      {
        id: "trucks",
        title: "Lastbiler",
        paragraphs: ["Tunge køretøjer bruger det eksisterende km-afgiftssystem (Viapass), ikke vignet."],
      },
    ],
    exemptTableTitle: "Fritaget",
    requiredTableTitle: "Vignet påkrævet",
    exemptTable: [
      { label: "Motorcykler & knallerter", value: "Fritaget" },
      { label: "Lastbiler (>3,5 t)", value: "Fritaget — km-afgift" },
      { label: "Traktorer", value: "Fritaget" },
      { label: "Turistbusser", value: "Fritaget" },
      { label: "Redning & politi", value: "Fritaget" },
      { label: "Forsvar", value: "Fritaget" },
    ],
    notExemptTable: [
      { label: "Personbiler (≤3,5 t)", value: "Vignet påkrævet" },
      { label: "Udenlandske biler", value: "Vignet påkrævet" },
      { label: "Varebiler", value: "Vignet påkrævet" },
      { label: "Elbiler", value: "Påkrævet (€90/år planlagt)" },
    ],
    faqs: [
      {
        question: "Er min autocamper fritaget?",
        answer: "Hvis den er registreret som personbil ≤3,5 t, er den omfattet ifølge planerne.",
      },
    ],
  },
  fines: {
    title: "Bøder & kontrol",
    intro: "Kontrol via ANPR-kameraer og mobile enheder. En toleranceperiode er planlagt, før bøder begynder.",
    sections: [
      {
        id: "tolerance",
        title: "Toleranceperiode",
        paragraphs: ["1 May til 1 July 2027 — ingen bøder ifølge planerne. Straffe fra 1 July og frem.",
        ],
      },
      {
        id: "anpr",
        title: "ANPR-kontrol",
        paragraphs: ["Kameraer på motorveje og regionale hovedveje kontrollerer vignets gyldighed."],
      },
    ],
    fineTable: [
      { label: "1. overtrædelse", value: "€70" },
      { label: "2. overtrædelse", value: "€140" },
      { label: "3. og flere", value: "€210" },
    ],
    faqs: [
      {
        question: "Bøde hvis jeg glemmer vignet?",
        answer: "Ikke under tolerance (May–June 2027). Derefter ja — også for udenlandske nummerplader.",
      },
    ],
  },
  buy: {
    title: "Sådan køber du",
    intro:
      "Der findes endnu ingen officiel salgskanal. Et digitalt system forventes, men detaljer om hjemmeside/app er ukendte.",
    sections: [
      {
        id: "status",
        title: "Nuværende status",
        paragraphs: [
          "Planerne skal stadig godkendes af Vallonien, Bruxelles og EU-Kommissionen, før salget kan åbne.",
        ],
      },
      {
        id: "expected",
        title: "Hvad der forventes",
        paragraphs: ["Online registrering af din nummerplade. Intet fysisk klistermærke nødvendigt."],
      },
    ],
    statusBadge: "Endnu ikke tilgængeligt",
    steps: [
      { title: "Vent på officiel lancering", description: "Salg forventes inden 1 May 2027." },
      { title: "Registrer din nummerplade", description: "Digitalt system — intet klistermærke i forruden." },
      { title: "Vælg varighed", description: "Dag, 10 dage, måned, 2 måneder eller årligt." },
      { title: "Kør med gyldigt vignet", description: "Kameraer kontrollerer automatisk." },
    ],
    faqs: [
      {
        question: "Kan jeg forudbestille nu?",
        answer: "Nej. Tilmeld dig vores nyhedsbrev for at holde dig orienteret.",
      },
    ],
  },
  privacy: {
    title: "Privatlivspolitik",
    intro: "BelgiumVignette.be respekterer dit privatliv. Sådan håndterer vi dine data.",
    sections: [
      {
        id: "controller",
        title: "Dataansvarlig",
        paragraphs: ["BelgiumVignette.be — kontakt: info@tolls.be."],
      },
      {
        id: "newsletter",
        title: "Nyhedsbrev",
        paragraphs: [
          "E-mail, sprog og samtykketidspunkt gemmes i Supabase (EU-hosting). Bruges kun til vignetopdateringer.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies, analyse & samtykke",
        paragraphs: [
          "Nødvendig lagring: vi gemmer dit cookievalg i localStorage. Retsgrundlag: legitim interesse (art. 6(1)(f) GDPR) og/eller samtykke, hvor det kræves.",
          "Analyse (valgfrit): Vercel Analytics indsamler anonyme sidevisninger. Indlæses kun efter samtykke via banneret. Retsgrundlag: samtykke (art. 6(1)(a) GDPR). Tilbagekald via Cookieindstillinger i footeren.",
          "Google Search Console & Bing Webmaster Tools: kun meta-tags til ejerskabsverifikation — ingen sporingscookies.",
          "Opbevaring: indtil du rydder lagringen eller vi opdaterer denne politik (version 2026-07-14).",
        ],
      },
      {
        id: "news-editorial",
        title: "Nyheder, resuméer & redaktionelt indhold",
        paragraphs: [
          "Vores nyhedssektion udgiver uafhængige resuméer af offentligt tilgængelig rapportering om det belgiske vignet. Disse sider er ikke reproduktioner af de originale artikler.",
          "Resuméer og oversættelser kan udarbejdes med AI og kan afvige i formulering fra kilden. Vi linker altid til den oprindelige udgiver. Vores redaktionelle kommentar («Vores syn») er skrevet uafhængigt og repræsenterer ikke den oprindelige udgiver eller de belgiske myndigheder.",
          "Billeder i nyhedsartikler kan stamme fra den linkede originalartikel eller press bureauer, med credits hvor relevant. Sådant materiale forbliver ejendom hos de respektive rettighedshavere. Vi viser det i god tro som reference sammen med et link til kilden. Hvis du mener, at dit indhold bruges forkert, kontakt info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Dine rettigheder (GDPR)",
        paragraphs: ["Indsigt, berigtigelse, sletning, indsigelse — info@tolls.be."],
      },
    ],
    lastUpdated: "14 July 2026",
  },
  news: {
    title: "Nyheder og opdateringer",
    intro:
      "Vi følger pålidelige officielle og mediekilder om Belgiens planlagte vignet. Hver artikel opsummerer den oprindelige rapportering og tilføjer vores uafhængige syn — med et direkte link til kilden.",
    latestArticles: "Seneste artikler",
    summaryTitle: "Opsummering",
    summaryFromSource: "fra originalkilde:",
    ourTakeTitle: "Vores syn",
    sourceTitle: "Originalkilde",
    readArticle: "Læs artikel",
    backToNews: "Tilbage til nyheder",
    publishedOn: "Udgivet",
    sourceLabel: "Kilde",
    sourceDisclaimer:
      "Vi opsummerer pålidelige kilder og linker til den oprindelige artikel. Vores syn er uafhængig redaktionel kommentar, ikke officiel regeringsinformation.",
    translationDisclaimer:
      "Resuméet og oversættelsen på denne side er udarbejdet med AI på baggrund af den originale artikel. Se altid kilden nedenfor for den officielle formulering.",
    articleAttributionTitle: "Uafhængigt resumé — ikke den originale artikel",
    articleAttributionIndependence:
      "BelgiumVignette.be er et uafhængigt informationssite. Vi er ikke tilknyttet, godkendt af eller handler på vegne af den oprindelige udgiver. Denne side opsummerer offentligt tilgængelig rapportering og tilføjer vores egen redaktionelle kommentar. Det er ikke en gengivelse af den originale artikel.",
    articleAttributionAi:
      "Resuméet og oversættelsen er udarbejdet med AI og kan afvige i formulering fra originalen. Se altid kilden linket nedenfor for den officielle tekst.",
    articleAttributionReadOriginal: "Læs den originale artikel hos",
    articleAttributionCopyright:
      "Den originale artikel, billeder og andet medie forbliver ejendom af de respektive rettighedshavere. Vi linker til kilden i god tro som reference. Billedkreditering er angivet ovenfor hvor relevant.",
    tableOfContents: "På denne side",
    relatedArticles: "Flere nyheder og opdateringer",
    noArticles: "Ingen artikler publiceret endnu. Tjek tilbage snart.",
  },
  newsletter: {
    title: "Hold dig orienteret",
    description: "Få besked, når det officielle salg starter, og når vigtige opdateringer offentliggøres.",
    emailPlaceholder: "Din e-mailadresse",
    consentLabel: "Jeg accepterer at modtage opdateringer og har læst privatlivspolitikken.",
    submit: "Tilmeld",
    success: "Tak! Du er tilmeldt.",
    error: "Noget gik galt. Prøv igen.",
    privacyLink: "Privatlivspolitik",
  },
  cookieBanner: {
    title: "Cookies & privatliv",
    description:
      "Nødvendig lagring af dit cookievalg. Valgfrit: Vercel Analytics (anonyme sidevisninger). Ingen analyse, før du har truffet et valg.",
    essentialTitle: "Nødvendige",
    essentialDescription: "Gemmer dit cookievalg i localStorage.",
    alwaysOn: "Altid aktiv — nødvendigt for at huske dit valg.",
    analyticsTitle: "Analyse (Vercel Analytics)",
    analyticsDescription: "Anonyme statistikker over sidevisninger. Aktiv kun efter samtykke.",
    acceptAll: "Acceptér alle",
    rejectAll: "Afvis alle",
    savePreferences: "Gem indstillinger",
    manageSettings: "Indstillinger",
    closeSettings: "Luk",
    privacyLink: "Privatlivspolitik",
  },
  sources: [
    { title: "Flemish government", url: "https://www.vlaanderen.be", description: "Officielle meddelelser" },
    { title: "Viapass", url: "https://www.viapass.be", description: "Km-afgiftssystem for lastbiler" },
    { title: "European Commission", url: "https://ec.europa.eu", description: "Gennemgang af aftalen" },
  ],
};

export default dictionary;
