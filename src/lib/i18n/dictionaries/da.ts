import type { BaseDictionary } from "../types";

const dictionary: BaseDictionary = {
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
      title: "Belgisk vignet 2027: har du brug for et vignet til Belgien?",
      description:
        "Belgien planlægger at indføre et digitalt vejvignet fra 1. maj 2027. Find ud af, om du har brug for et, hvad det koster, hvem der er fritaget og hvornår salget starter.",
    },
    prices: {
      title: "Belgisk vignet priser 2027 — dag, måned & årlige takster",
      description:
        "Planlagte vignetpriser for Belgien: €100/år, kortvarige fra €9/dag. Euro-emissionsnorm forklaret enkelt.",
    },
    foreign: {
      title: "Har udenlandske biler brug for et belgisk vignet i 2027?",
      description:
        "Ja — ifølge de nuværende planer skal udenlandske personbiler have et belgisk vignet fra 1. maj 2027 på dækkede veje. Guide til bilister fra Nederlandene, Tyskland og Frankrig.",
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
      title: "Køb belgisk vignet — salg forventes 1. marts 2027",
      description:
        "Ifølge de aktuelle planer forventes onlinesalget af den belgiske vejvignette at starte 1. marts 2027. Obligatorisk fra 1. maj 2027. Officiel kilde: den flamske regering.",
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
    lastUpdatedDate: "14 August 2026",
    lastUpdatedIso: "2026-08-14",
    readMore: "Læs mere",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — uafhængig information om belgiske vejafgifter",
    backToHome: "Tilbage til forsiden",
    plannedNotice:
      "Planer præsenteret i March 2026 kan stadig ændres. Vi følger officielle kilder og opdaterer denne side, når der kommer nyt.",
    independentSite: "Info belgisk vejvignette",
    contactLabel: "Kontakt",
    cookieSettings: "Cookieindstillinger",
    tableCategory: "Kategori",
    tablePrice: "Pris",
    lastChecked: "Sidst tjekket",
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
      eyebrow: "Planlagt fra 1. maj 2027",
      title: "Belgisk vignet 2027: har du brug for et vignet til Belgien?",
      subtitle:
        "Belgien planlægger at indføre et digitalt vejvignet fra 1. maj 2027. Find ud af, om du har brug for et, hvad det koster, hvem der er fritaget og hvornår salget starter.",
      ctaPrimary: "Tjek om du har brug for et vignet",
      ctaSecondary: "Få besked når salget åbner",
    },
    decisionTree: {
      title: "Har du brug for et vignet?",
      options: [
        { label: "Belgisk bil", href: "prices" },
        { label: "Hollandsk bil", href: "foreign", anchor: "netherlands" },
        { label: "Tysk bil", href: "foreign", anchor: "germany" },
        { label: "Fransk bil", href: "foreign", anchor: "france" },
        { label: "Autocamper / varevogn", href: "exemptions" },
      ],
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
          "Ifølge de aktuelle planer forventes onlinesalg fra 1. marts 2027. Vignetten ville blive obligatorisk fra 1. maj 2027. De endelige vilkår kan stadig ændre sig.",
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
    vignettePagesTitle: "Efter vignettype",
    faqs: [
      {
        question: "Kan erhvervsvarebiler fradrages?",
        answer: "Ifølge planerne kan vignetudgiften for erhvervsvarebiler være fuldt fradragsberettiget som driftsomkostning.",
      },
    ],
  },
  foreign: {
    title: "Har udenlandske biler brug for et belgisk vignet?",
    intro:
      "Ja, ifølge de nuværende planer. Udenlandske personbiler skal have et belgisk vignet fra 1. maj 2027, når de bruger dækkede belgiske veje. Det planlagte system skelner ikke mellem belgiske og udenlandske nummerplader — en bil registreret i Nederlandene, Frankrig, Tyskland eller et andet land forventes at kræve det samme digitale vignet som et belgisk køretøj. De endelige regler kan stadig ændre sig, indtil systemet officielt godkendes og lanceres.",
    sections: [
      {
        id: "eu-rules",
        title: "Lige behandling",
        paragraphs: [
          "Belgiske bilister betaler også — EU-regler forhindrer kun at opkræve udlændinge. Din udenlandske nummerplade er dækket af det samme planlagte system.",
          "Anslået 30 millioner udenlandske personbiler passerer gennem Belgien hvert år.",
        ],
      },
      {
        id: "digital",
        title: "Digitalt system",
        paragraphs: [
          "Intet fysisk vignet at købe eller vise. Systemet planlægges at bruge automatisk nummerpladegenkendelse (ANPR). Køb inden du kører på dækkede veje.",
        ],
      },
      {
        id: "history",
        title: "Historisk kontekst",
        paragraphs: [
          "Belgien forsøgte et vignet i 2007, men trak det tilbage efter nederlandske protester. Nederlandske ministre har igen udtrykt bekymring — og der er endnu ikke annonceret et særligt grænseregime for nabolande i de nuværende planer.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Nederlandene",
        tips: [
          "Ja — personbiler registreret i Nederlandene forventes at skulle have et belgisk vignet fra 1. maj 2027 på dækkede belgiske veje.",
          "Dette gælder almindelige ruter som Nederlandene → Antwerpen, Nederlandene → Bruxelles og transit Nederlandene → Luxembourg/Frankrig.",
          "Der er i øjeblikket ikke annonceret nogen fritagelse for nederlandske grænseregioner.",
        ],
      },
      {
        id: "germany",
        country: "Tyskland",
        tips: [
          "Ja — personbiler registreret i Tyskland forventes at skulle have et belgisk vignet fra 1. maj 2027 på dækkede belgiske veje.",
          "Dette omfatter almindelige transitruter som Aachen → Liège og Tyskland → Frankrig gennem Belgien.",
          "Kortvarige muligheder (1–10 dage) i planerne kan passe til gennemkørende trafik.",
        ],
      },
      {
        id: "france",
        country: "Frankrig",
        tips: [
          "Ja — personbiler registreret i Frankrig forventes at skulle have et belgisk vignet fra 1. maj 2027 på dækkede belgiske veje.",
          "Dette er især relevant for ture fra det nordlige Frankrig til Belgien og transitruter Frankrig → Nederlandene/Tyskland.",
          "Dækkede veje omfatter motorveje og planlagte regionale hovedveje — ikke kun langdistance-transit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Skal jeg have et vignet, hvis jeg bare kører igennem?",
        answer:
          "Ja — ifølge de nuværende planer kræves et vignet fra 1. maj 2027 for brug af dækkede belgiske hovedveje uanset destination. De endelige regler kan stadig ændre sig før lanceringen.",
      },
      {
        question: "Betaler udenlandske biler det samme som belgiske?",
        answer:
          "Ja. Det planlagte system anvender det samme digitale vignet på belgiske og udenlandske nummerplader. EU's regler om lige behandling er grunden til, at udlændinge ikke kan opkræves alene.",
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
    title: "Hvornår kan jeg købe et belgisk vignet?",
    intro:
      "Ifølge de aktuelle planer forventes onlinesalg fra 1. marts 2027. Vejvignetten ville blive obligatorisk fra 1. maj 2027. De endelige vilkår og den officielle salgsportal kan stadig ændre sig.",
    sections: [
      {
        id: "when",
        title: "Hvornår åbner salget?",
        paragraphs: [
          "Den flamske regering oplyser, at du kan købe vignetten online fra 1. marts 2027 — via den officielle hjemmeside eller en godkendt partner.",
          "Der er ingen salgsportal i dag: du kan ikke reservere eller betale endnu. Sider, der allerede tilbyder det, er ikke den officielle kanal.",
        ],
      },
      {
        id: "expected",
        title: "Hvad der forventes",
        paragraphs: [
          "Vignetten bliver digital og knyttet til nummerpladen — intet klistermærke i forruden.",
          "Ifølge planerne vælger du en varighed på 1 dag, 10 dage, 1 måned, 2 måneder eller 1 år.",
        ],
      },
    ],
    statusBadge: "Salg forventes 1. marts 2027",
    officialSourceLabel: "Officiel kilde",
    steps: [
      {
        title: "Vent på det officielle salg",
        description: "Onlinekøb forventes fra 1. marts 2027 ifølge den flamske regering.",
      },
      { title: "Registrer din nummerplade", description: "Digitalt system — intet klistermærke i forruden." },
      { title: "Vælg varighed", description: "Dag, 10 dage, måned, 2 måneder eller årligt." },
      { title: "Kør med gyldigt vignet", description: "Kameraer kontrollerer automatisk fra 1. maj 2027." },
    ],
    faqs: [
      {
        question: "Kan jeg forudbestille nu?",
        answer:
          "Nej. Ifølge de aktuelle planer starter onlinesalget 1. marts 2027. Tilmeld dig nyhedsbrevet for at få den officielle kanal, når den offentliggøres.",
      },
      {
        question: "Hvornår bliver vignetten obligatorisk?",
        answer:
          "Ifølge planerne fra 1. maj 2027 på belgiske motorveje og regionale veje. En toleranceperiode er planlagt fra 1. maj til 1. juli 2027.",
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
          "Opbevaring: indtil du rydder lagringen eller vi opdaterer denne politik (version 2026-08-04).",
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
    lastUpdated: "4 August 2026",
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
    title: "Få besked først, når det belgiske vignet bliver tilgængeligt",
    description: "",
    benefitsIntro: "",
    benefits: [
      "Officielt salg starter",
      "Endelige priser bekræftet",
      "Nye regler offentliggjort",
      "Købslink tilgængeligt",
    ],
    emailPlaceholder: "E-mailadresse",
    consentLabel: "Jeg accepterer at modtage opdateringer og har læst privatlivspolitikken.",
    submit: "Giv mig besked",
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
    {
      title: "Den flamske regering — Vejvignette fra 1. maj 2027",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Officiel side om pligt, takster og køb fra 1. marts 2027",
    },
    {
      title: "Viapass — kilometerafgift for lastbiler",
      url: "https://www.viapass.be",
      description: "Eksisterende system for køretøjer over 3,5 tons (ikke personvognsvignetten)",
    },
    {
      title: "Europa-Kommissionen — vejafgifter",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "EU-ramme for vejafgifter og ikke-diskrimination",
    },
  ],
};

export default dictionary;
