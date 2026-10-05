import type { BaseDictionary } from "../types";
import { getAcquisitionContent } from "../acquisition";
import { daTolls } from "../tolls/da";
import { buildRateMatrix } from "../rate-matrix";

const daRateMatrix = buildRateMatrix({
  vehicleHeader: "Køretøj",
  dayHeader: "1 dag",
  tenDaysHeader: "10 dage",
  monthHeader: "1 måned",
  twoMonthsHeader: "2 måneder",
  yearHeader: "1 år",
  euro03: "Euro 0 til 3",
  euro4: "Euro 4 og højere",
  zeroEmission: "Emissionsfri",
});

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
    tolls: "Vejafgifter",
    news: "Nyheder og opdateringer",
    privacy: "Privatliv",
    acquisition: "Erhvervelse",
  },
  meta: {
    home: {
      title: "Belgisk vignet 2027: priser, motorveje og hvordan man køber",
      description:
        "Belgien planlægger et digitalt vejvignet fra maj 2027. Se planlagte priser, hvem der har brug for det, fritagelser for motorcykler og hvor du køber.",
    },
    prices: {
      title: "Belgiske vignetpriser 2027: takster pr. Euronorm og varighed",
      description:
        "Fuld prisoversigt for Belgiens vejvignette 2027 pr. Euronorm og varighed — fra €8,10/dag (emissionsfri) til €125/år (Euro 0–3).",
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
    tolls: {
      title: "Vejafgifter i Belgien 2027: motorveje, vignet og priser",
      description:
        "Er motorvejene betalingsbelagte i Belgien? Se vejafgifter, det planlagte vignet fra maj 2027, takster og regler for udenlandske biler.",
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
    acquisition: {
      title: "BelgiumVignette.be til salg | Website & domæneportefølje",
      description:
        "BelgiumVignette.be er tilgængelig til erhvervelse, inkl. flersproget website, Google-rankinger og en portefølje af belgiske vignetdomæner.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be er et uafhængigt informationssite. Vi er ikke tilknyttet den belgiske regering, Flandern, Vallonien eller Bruxelles.",
    lastUpdated: "Sidst opdateret",
    lastUpdatedDate: "28 September 2026",
    lastUpdatedIso: "2026-09-28",
    readMore: "Læs mere",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — uafhængig information om belgiske vejafgifter",
    ownedManagedBy: "Ejet og administreret af",
    operatorName: "2xGen",
    operatorUrl: "https://2xgen.com/about",
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
        title: "Hvem skal købe et belgisk vignet?",
        summary:
          "Personbiler op til 3,5 ton, inklusive udenlandske køretøjer i transit på dækkede veje.",
        href: "foreign",
        linkLabel: "Guide til udenlandske bilister",
      },
      {
        title: "Hvem er fritaget for det belgiske vignet?",
        summary:
          "Motorcykler, lastbiler (km-afgift), traktorer, turistbusser, redningstjenester og politi — ifølge de nuværende planer.",
        href: "exemptions",
        linkLabel: "Se alle fritagelser",
      },
      {
        title: "Hvad er prisen på det belgiske vignet i 2027?",
        summary:
          "Prisen afhænger af Euronorm og varighed: fra €8,10/dag (emissionsfri) og €9/dag (Euro 4+), til €90–€125 om året.",
        href: "prices",
        linkLabel: "Fuld prisguide",
      },
    ],
    overview: {
      title: "Belgisk vejvignette: hvad er planlagt for 2027",
      paragraphs: [
        "Belgien planlægger at indføre et digitalt vejvignet fra 1. maj 2027. Det belgiske vignet ville gælde for personbiler op til 3,5 ton på motorveje og visse regionale hovedveje.",
        "Udenlandske biler ville være omfattet. Bilister fra Frankrig, Nederlandene, Tyskland og andre lande ville have brug for et vignet for at bruge de dækkede belgiske veje.",
        "Det ville ikke være et klistermærke i forruden. Det belgiske motorvejsvignet ville være digitalt og knyttet til nummerpladen, med kontrol blandt andet via ANPR-kameraer.",
        "Ifølge de af den flamske regering offentliggjorte takster afhænger prisen af Euronorm og varighed: fra €8,10 pr. dag for emissionsfri køretøjer og €9 pr. dag for Euro 4+, til €90–€125 om året. Også 10 dage, 1 måned og 2 måneder er planlagt.",
        "Motorcykler ville være fritaget ifølge de nuværende planer. Endelige beløb og regler skal stadig bekræftes, før systemet træder i kraft.",
      ],
    },
    intentSections: [
      {
        id: "motorveje",
        title: "Har du brug for et vignet til motorveje i Belgien?",
        paragraphs: [
          "Ifølge de nuværende planer ville et digitalt vejvignet blive obligatorisk på belgiske motorveje og visse regionale hovedveje fra 1. maj 2027.",
          "I dag er de fleste belgiske motorveje stadig gratis for personbiler. Vignetprojektet ville ændre det: adgang til motorveje og en del af det hurtigere regionale net ville kræve et nummerpladetilknyttet vignet.",
          "Hvis du kun bruger lokale veje, ville et vignet ikke være påkrævet ifølge offentliggjort information. I praksis er det ofte svært helt at undgå motorveje og regionale hovedveje på intercity- eller transitrejser.",
        ],
        link: {
          href: "tolls",
          label: "Vejafgifter og motorveje i Belgien",
        },
      },
      {
        id: "motorcykler",
        title: "Har motorcykler brug for et belgisk vignet?",
        paragraphs: [
          "Nej. Ifølge myndighedsmeddelelser ville motorcykler være udtrykkeligt fritaget for det belgiske vignet.",
          "Forpligtelsen ville gælde motorkøretøjer med mindst fire hjul op til 3,5 ton — herunder biler, nogle lette varevogne og autocampere. Lastbiler forbliver under Viapass kilometerafgift.",
        ],
        link: {
          href: "exemptions",
          label: "Se fritagelsesdetaljer",
        },
      },
      {
        id: "kobe",
        title: "Hvor kan man købe det belgiske vignet?",
        paragraphs: [
          "Det officielle salg er endnu ikke startet. Ifølge de nuværende planer ville onlinekøb være muligt fra 1. marts 2027 via den officielle hjemmeside eller en autoriseret partner.",
          "Der findes i dag ingen officiel salgsportal. Sider, der allerede tilbyder booking eller betaling, er ikke den officielle kanal.",
        ],
        link: {
          href: "buy",
          label: "Køb belgisk vignet: datoer og officielle kanaler",
        },
      },
    ],
    pricingTitle: "Hvad er prisen på det belgiske vignet i 2027?",
    pricingParagraphs: [
      "Prisen på Belgiens vejvignette afhænger af køretøjets Euronorm og vignetens gyldighedsperiode. For biler med Euro 4 eller højere starter de planlagte takster ved €9 for 1 dag og €100 for 1 år. Ældre køretøjer betaler mere, mens emissionsfri køretøjer får en lavere takst.",
    ],
    pricingLinkLabel: "Se alle priser for det belgiske vignet",
    pricingLinkSecondaryLabel: "Fuld prisguide",
    pricingMatrixTitle: "Planlagte takster",
    rateMatrix: daRateMatrix,
    pricingNote:
      "Dette er de takster, der i øjeblikket er offentliggjort af den flamske regering. Indførelsen er stadig under forbehold af endelig godkendelse.",
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
        question: "Har du brug for et vignet til motorveje i Belgien?",
        answer:
          "Ifølge de nuværende planer ja fra 1. maj 2027 på belgiske motorveje og visse regionale hovedveje. Lokale veje ville ligge uden for forpligtelsen.",
      },
      {
        question: "Har motorcykler brug for et belgisk vignet?",
        answer:
          "Nej. Motorcykler er udtrykkeligt fritaget ifølge meddelelser fra ministrene Weyts (Flandern) og Desquesnes (Vallonien).",
      },
      {
        question: "Gælder det for udenlandske biler?",
        answer:
          "Ja. EU-regler kræver lige behandling. Belgiske og udenlandske bilister skal begge betale på dækkede veje.",
      },
      {
        question: "Hvor kan man købe det belgiske vignet?",
        answer:
          "Det officielle salg er endnu ikke startet. Ifølge planerne forventes onlinekøb fra 1. marts 2027 via den officielle kanal eller en autoriseret partner.",
      },
    ],
    sourcesTitle: "Officielle kilder",
  },
  prices: {
    title: "Belgiske vignetpriser 2027: takster pr. Euronorm og varighed",
    intro:
      "Den planlagte pris på Belgiens vejvignette afhænger af to faktorer: køretøjets Euronorm og vignetens gyldighedsperiode. Den flamske regering har offentliggjort takster for 1 dag, 10 dage, 1 måned, 2 måneder og 1 år.",
    leadParagraphs: [
      "For en bil med Euro 4 eller højere koster det belgiske vignet ifølge de nuværende takster €9 for 1 dag, €12 for 10 dage og €100 for et år. Emissionsfri køretøjer betaler mindre, og køretøjer med Euro 0 til og med Euro 3 betaler mere.",
      "Vignetten er planlagt fra 1. maj 2027. Køb skulle blive muligt fra 1. marts 2027. Indførelsen er stadig under forbehold af endelig godkendelse.",
    ],
    matrixTitle: "Priser belgisk vejvignette 2027",
    rateMatrix: daRateMatrix,
    matrixNote:
      "Disse takster er offentliggjort af den flamske regering. Prisen bestemmes altså ikke kun af, hvor længe du har brug for vignetten, men også af køretøjets Euronorm.",
    buyLinkParagraph:
      "[[buy|Se hvor og hvornår du kan købe det belgiske vignet]].",
    categorySections: [
      {
        id: "euro-4",
        title: "Hvad koster et belgisk vignet for Euro 4 og højere?",
        paragraphs: [
          "For køretøjer med Euro 4 eller højere gælder ifølge de offentliggjorte takster:",
        ],
        list: [
          "1 dag: €9",
          "10 dage: €12",
          "1 måned: €19",
          "2 måneder: €30",
          "1 år: €100",
        ],
        linkParagraph:
          "Dette er kategorien, som en stor del af den nuværende bilpark falder ind under. Til en kort gennemkørsel gennem Belgien kan et dags- eller 10-dagesvignet derfor være tilstrækkeligt. Den, der regelmæssigt bruger belgiske regions- og motorveje, kan sammenligne årsvignetten med de kortere varigheder. Læs mere om [[dailyVignette|dagsvignetten]] eller se [[annualVignette|årsvignetten]].",
      },
      {
        id: "euro-0-3",
        title: "Hvad koster et belgisk vignet for Euro 0 til og med Euro 3?",
        paragraphs: [
          "Ældre køretøjer med Euro 0, Euro 1, Euro 2 eller Euro 3 falder ind under den dyreste takstkategori.",
          "De planlagte priser går fra €11,25 for én dag til €125 for et år.",
        ],
        tableTitle: "Pris Euro 0–3",
        table: [
          { label: "1 dag", value: "€11,25" },
          { label: "10 dage", value: "€15" },
          { label: "1 måned", value: "€23,75" },
          { label: "2 måneder", value: "€37,50" },
          { label: "1 år", value: "€125" },
        ],
      },
      {
        id: "elektrisk",
        title: "Hvad koster vignetten for en elbil?",
        paragraphs: [
          "For et emissionsfrit køretøj gælder den laveste takst. Ifølge den aktuelle prisoversigt koster vignetten €8,10 for én dag og €90 for et helt år.",
        ],
        tableTitle: "Pris emissionsfri",
        table: [
          { label: "1 dag", value: "€8,10" },
          { label: "10 dage", value: "€10,80" },
          { label: "1 måned", value: "€17,10" },
          { label: "2 måneder", value: "€27" },
          { label: "1 år", value: "€90" },
        ],
        linkParagraph:
          "[[electricVignette|Læs mere om det belgiske vignet til elbiler]].",
      },
    ],
    durationSection: {
      id: "varighed",
      title: "Hvilken varighed har jeg brug for?",
      paragraphs: [
        "Ifølge de nuværende planer kan du vælge mellem fem gyldighedsperioder:",
        "Den bedste varighed afhænger af, hvor ofte og hvor længe du bruger de veje, hvor vignetten bliver obligatorisk.",
        "Se den separate forklaring om [[dailyVignette|dagsvignet]], [[monthlyVignette|månedsvignet]] og [[annualVignette|årsvignet]].",
      ],
      list: [
        "1 dag — til en kort gennemkørsel eller dagstur.",
        "10 dage — for eksempel til ferie eller et længere besøg.",
        "1 måned — til flere ture over nogle uger.",
        "2 måneder — til et længere ophold eller regelmæssig midlertidig brug.",
        "1 år — til bilister, der regelmæssigt kører på belgiske regions- og motorveje.",
      ],
    },
    whenSection: {
      id: "naar",
      title: "Hvornår gælder disse priser?",
      paragraphs: [
        "Det digitale vejvignet er planlagt fra 1. maj 2027. Ifølge den aktuelle officielle information skulle vignetten kunne købes online fra 1. marts 2027.",
        "Den praktiske udmøntning er stadig i gang, og indførelsen er under forbehold af endelig godkendelse.",
        "Vil du vide, hvordan købet fungerer? Se så [[buy|Køb belgisk vignet]]. For alle regler, køretøjer og vigtige datoer går du til vores komplette guide om [[home|Belgiens vejvignette 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Samspil med vejafgift (Flandern)",
        paragraphs: [
          "Flandern reformerer samtidig den årlige vejafgift. Ifølge skøn kan cirka halvdelen af de flamske bilister betale mere samlet — op til €100 ekstra om året.",
          "Nedsættelsen af vejafgiften kompenserer ifølge planerne ikke alle fuldt ud for vignetudgifterne. Dette er baggrundsinformation; vignetttaksterne ovenfor gælder uafhængigt af den reform.",
        ],
      },
    ],
    euroNormTitle: "Euro-normer i korthed",
    euroNormCategoryHeader: "Norm",
    euroNormDescriptionHeader: "Beskrivelse",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Biler fra ca. 2005–2006. De fleste køretøjer på vejene. Dagstakst €9, år €100.",
      },
      {
        norm: "Emissionsfri",
        description: "Helt emissionsfri (el / brint). Laveste takst: fra €8,10/dag, €90/år.",
      },
      {
        norm: "Euro 3 og derunder",
        description: "Ældre, mere forurenende køretøjer. Højeste takst: fra €11,25/dag, €125/år.",
      },
    ],
    vignettePagesTitle: "Efter vignettype",
    faqs: [
      {
        question: "Hvad er den laveste planlagte dagspris?",
        answer:
          "Ifølge den flamske regering er den laveste dagstakst €8,10 for emissionsfri køretøjer. For Euro 4 og højere er den €9; for Euro 0 til og med 3 er den €11,25.",
      },
      {
        question: "Gælder de korte perioder for alle emissionsklasser?",
        answer:
          "Ja. Hver varighed (1 dag, 10 dage, 1 måned, 2 måneder, 1 år) har sin egen takst pr. Euronorm-kategori. Beløbene adskiller sig pr. kategori.",
      },
      {
        question: "Kan erhvervsvarebiler fradrages?",
        answer:
          "Ifølge planerne kan vignetudgiften for erhvervsvarebiler være fuldt fradragsberettiget som driftsomkostning.",
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
    independenceNotice:
      "BelgiumVignette.be er et uafhængigt informationssite og er hverken en officiel hjemmeside for den belgiske stat eller en godkendt sælger af vejvignetten.",
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
        title: "Vent på det autoriserede salg",
        description:
          "Onlinekøb forventes fra 1. marts 2027 via den officielle hjemmeside eller en godkendt partner, ifølge den flamske regering.",
      },
      { title: "Registrer din nummerplade", description: "Digitalt system — intet klistermærke i forruden." },
      { title: "Vælg varighed", description: "Dag, 10 dage, måned, 2 måneder eller årligt." },
      { title: "Kør med gyldigt vignet", description: "Kameraer kontrollerer automatisk fra 1. maj 2027." },
    ],
    faqs: [
      {
        question: "Kan jeg forudbestille nu?",
        answer:
          "Nej. Ifølge de aktuelle planer starter onlinesalget 1. marts 2027. Tilmeld dig opdateringer for at få besked, når autoriseret salg bliver tilgængeligt.",
      },
      {
        question: "Hvornår bliver vignetten obligatorisk?",
        answer:
          "Ifølge planerne fra 1. maj 2027 på belgiske motorveje og regionale veje. En toleranceperiode er planlagt fra 1. maj til 1. juli 2027.",
      },
    ],
  },
  tolls: daTolls,
  privacy: {
    title: "Privatlivspolitik",
    intro: "BelgiumVignette.be respekterer dit privatliv. Sådan håndterer vi dine data.",
    sections: [
      {
        id: "controller",
        title: "Dataansvarlig",
        paragraphs: [
          "BelgiumVignette.be er et uafhængigt informationssite om det planlagte belgiske vejvignet. Vi er ikke tilknyttet den belgiske stat, Flandern, Vallonien eller Bruxelles, og sælger ikke vignetter.",
          "Sitet drives i sammenhæng med Tolls.be (uafhængig information om vejafgifter i Belgien). Kontakt: info@tolls.be.",
        ],
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
  acquisition: getAcquisitionContent("da"),
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
    emailPlaceholder: "E-mailadresse",
    consentLabel: "Jeg accepterer at modtage opdateringer og har læst",
    success: "Tak! Du er tilmeldt.",
    error: "Noget gik galt. Prøv igen.",
    privacyLink: "privatlivspolitikken.",
    independenceNote:
      "BelgiumVignette.be er en uafhængig informationstjeneste og er ikke tilknyttet den belgiske stat. Vi sælger i øjeblikket ikke belgiske vejvignetter.",
    sticky: {
      teaser: "Vignetten er endnu ikke til salg — få købslinket",
      cta: "Tilmeld dig →",
      closeLabel: "Luk",
    },
    intents: {
      home: {
        title:
          "Få købslinket, så snart det belgiske vignet er tilgængeligt",
        description:
          "Salget er planlagt fra 1. marts 2027. Efterlad din e-mail og få én besked, når autoriseret salg bliver tilgængeligt.",
        benefits: [
          "Link til en autoriseret købskanal, så snart den er kendt",
          "Opdateringer, når priser eller regler ændres",
          "Ingen unødvendige e-mails",
        ],
        submit: "Send mig købslinket",
      },
      prices: {
        title: "Få besked, når de endelige vignetpriser er bekræftet",
        description:
          "De aktuelle takster er offentliggjort, men indførelsen skal stadig godkendes endeligt. Vi følger den officielle information for dig.",
        benefitsIntro: "Få én e-mail, når:",
        benefits: [
          "de endelige priser er bekræftet;",
          "autoriseret salg starter;",
          "et link til en anerkendt købskanal er tilgængeligt.",
        ],
        submit: "Hold mig opdateret",
      },
      buy: {
        title: "Giv mig besked, når det belgiske vignet kommer til salg",
        description:
          "Det autoriserede salg er endnu ikke startet. Ifølge den aktuelle plan kan du købe det belgiske vignet fra 1. marts 2027 via den officielle hjemmeside eller en godkendt partner. Efterlad din e-mail og få besked, når autoriseret salg bliver tilgængeligt.",
        benefits: [],
        submit: "Send mig købslinket",
      },
      foreign: {
        title:
          "Giv mig besked, når udenlandske biler kan registrere deres vignet",
        description:
          "Udenlandske bilister forventes også at skulle have et belgisk vignet. Få besked, når registrering og køb via en anerkendt kanal er muligt.",
        benefits: [
          "Start af autoriseret salg",
          "Regler for udenlandske nummerplader",
          "Link til en anerkendt købskanal",
        ],
        submit: "Hold mig opdateret",
      },
      news: {
        title: "Få vigtige opdateringer om det belgiske vignet",
        description:
          "Korte, relevante beskeder, når der er nyheder om priser, regler eller salgsstarten.",
        benefits: [
          "Vigtige opdateringer om vignetten",
          "Ingen daglig spam",
          "Købslink, så snart en anerkendt kanal er tilgængelig",
        ],
        submit: "Få opdateringer",
      },
      default: {
        title:
          "Få købslinket, så snart det belgiske vignet er tilgængeligt",
        description:
          "Salget er planlagt til at starte den 1. marts 2027. Vi sender dig én besked, når autoriseret salg bliver tilgængeligt.",
        benefits: [
          "Link til en autoriseret købskanal",
          "Opdateringer om priser og regler",
          "Ingen unødvendige e-mails",
        ],
        submit: "Send mig købslinket",
      },
    },
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
