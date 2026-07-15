import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Dagvignett Belgien 2027",
    intro:
      "Dagvignetten är avsedd för korta resor på belgiska huvudvägar — till exempel en dagsutflykt, genomfart eller helg. Priserna nedan baseras på publicerade planer (mars 2026) och kan fortfarande ändras före införandet den 1 maj 2027.",
    metaTitle: "Dagvignett Belgien 2027 — €9 per dag (konceptpris)",
    metaDescription:
      "Planerad dagvignett för Belgien från €9 per dag. För korta resor på motorvägar och regionala huvudvägar. Konceptpriser enligt planer mars 2026 — slutliga priser kan fortfarande ändras.",
    navLabel: "Dagvignett",
    sections: [
      {
        id: "what-is-daily",
        title: "Vad är dagvignetten?",
        paragraphs: [
          "Enligt planerna ger dagvignetten 24 timmars tillgång till det belgiska vignettnätverket: motorvägar, motorvägsringar och regionala huvudvägar där 70 km/h eller mer gäller.",
          "Systemet blir digitalt och kopplat till din registreringsskylt — det kommer ingen fysisk dekal på vindrutan.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Vem passar dagvignetten för?",
        paragraphs: [
          "Dagvignetten passar tillfälliga användare: turister, genomresande, en enskild affärsresa eller en dag med shopping över gränsen.",
          "Kör du oftare genom Belgien är en 10-dagars-, månads- eller årsvignett enligt planerna mer kostnadseffektiv.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptpriser — inte slutliga priser",
        paragraphs: [
          "Alla belopp på denna sida baseras på tillkännagivanden från mars 2026. Slutliga priser fastställs först efter godkännande av regionerna och Europeiska kommissionen.",
          "Kontrollera alltid officiella källor före din resa i maj 2027.",
        ],
      },
    ],
    priceTableTitle: "Planerat dagspris",
    priceTable: [{ label: "1 dag", value: "€9" }],
    compareTableTitle: "Andra korta perioder (jämförelse)",
    compareTable: [
      { label: "10 dagar", value: "€12" },
      { label: "1 månad", value: "€19" },
      { label: "2 månader", value: "€30" },
    ],
    relatedPagesTitle: "Andra vignettyper",
    faqs: [
      {
        question: "Gäller dagvignetten en kalenderdag?",
        answer:
          "Enligt planerna köper du en vignett för en vald period på 24 timmar eller en kalenderdag — de exakta reglerna meddelas när försäljningssystemet lanseras.",
      },
      {
        question: "Behöver utländska förare också dagvignett?",
        answer:
          "Ja. EU-regler kräver likabehandling. Även utländska registreringsskyltar måste enligt planerna ha en giltig vignett på belgiska huvudvägar.",
      },
      {
        question: "Är €9 redan slutgiltigt?",
        answer:
          "Nej. €9 är det planerade konceptpriset från mars 2026. Slutliga priser kan fortfarande justeras.",
      },
    ],
  },
  monthlyVignette: {
    title: "Månadsvignett Belgien 2027",
    intro:
      "Månadsvignetten planeras för förare som använder belgiska huvudvägar i flera veckor — till exempel tillfälligt arbete, semester eller ett längre vistelse. Priserna är konceptpriser enligt planer mars 2026.",
    metaTitle: "Månadsvignett Belgien 2027 — från €19 per månad (koncept)",
    metaDescription:
      "Planerad månadsvignett Belgien från €19 per månad, 2 månader €30. Konceptpriser för motorvägar och regionala huvudvägar från 1 maj 2027.",
    navLabel: "Månadsvignett",
    sections: [
      {
        id: "what-is-monthly",
        title: "Vad är månadsvignetten?",
        paragraphs: [
          "Enligt planerna ger månadsvignetten tillgång till det belgiska vignettnätverket under ungefär en kalendermånad.",
          "Ett tvåmånaderspris (€30) planeras också för något längre vistelser utan att köpa en årsvignett direkt.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Vem har nytta av månadsvignett?",
        paragraphs: [
          "Pendlare som tillfälligt arbetar i Belgien, expats på kort uppdrag eller semesterbesökare som stannar i landet en månad kan ha nytta av en månads- eller tvåmånadsvignett.",
          "För tillfälligt bruk är dag- eller 10-dagarsvignett billigare; för permanent bruk är årsvignetten mer ekonomisk.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptpriser",
        paragraphs: [
          "Beloppen nedan är planerade priser, inte slutlig lagstiftning. De kan fortfarande ändras före starten i maj 2027.",
        ],
      },
    ],
    priceTableTitle: "Planerade månadspriser",
    priceTable: [
      { label: "1 månad", value: "€19" },
      { label: "2 månader", value: "€30" },
    ],
    compareTableTitle: "Andra perioder (jämförelse)",
    compareTable: [
      { label: "1 dag", value: "€9" },
      { label: "10 dagar", value: "€12" },
    ],
    relatedPagesTitle: "Andra vignettyper",
    faqs: [
      {
        question: "Vad är skillnaden mellan 1 månad och 2 månader?",
        answer:
          "Enligt planerna kan du välja mellan månadsvignett (€19) och tvåmånadsvignett (€30). Tvåmånaderspriset är mer kostnadseffektivt per dag om du stannar längre.",
      },
      {
        question: "Finns det separat pris per utsläppsklass för korta vignetter?",
        answer:
          "För korta perioder (dag, månad) planeras fasta belopp enligt nuvarande planer. Årsvignetten beror däremot på din bils Euro-utsläppsklass.",
      },
      {
        question: "Är dessa priser slutgiltiga?",
        answer:
          "Nej. Det är konceptpriser baserade på planer från mars 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Årsvignett Belgien 2027",
    intro:
      "Årsvignetten är avsedd för regelbundna användare av belgiska huvudvägar. Priset beror på din bils utsläppsklass. Priserna nedan är konceptpriser enligt planer mars 2026.",
    metaTitle: "Årsvignett Belgien 2027 — €90–€125 per år (koncept)",
    metaDescription:
      "Planerad årsvignett Belgien: €100 för Euro 4+, €90 elbil, €125 äldre bilar. Konceptpriser per utsläppsklass från 1 maj 2027.",
    navLabel: "Årsvignett",
    sections: [
      {
        id: "what-is-annual",
        title: "Vad är årsvignetten?",
        paragraphs: [
          "Enligt planerna ger årsvignetten 12 månaders tillgång till motorvägar, motorvägsringar och regionala huvudvägar i Belgien.",
          "I Flandern är mer än 97 % av personbilarna minst Euro 4 — för dem planeras €100 per år.",
        ],
      },
      {
        id: "emission-bands",
        title: "Priser per utsläppsklass",
        paragraphs: [
          "Till skillnad från korta vignetter planeras årspriset variera baserat på din bils Euro-utsläppsklass.",
          "Helt eldrivna och vätgasfordon får det lägsta priset (€90). Äldre fordon upp till Euro 3 betalar det högsta beloppet (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptpriser",
        paragraphs: [
          "Dessa priser baseras på tillkännagivanden från mars 2026 och kan fortfarande justeras. Slutliga belopp följer efter godkännande av regionerna och Europa.",
        ],
      },
    ],
    priceTableTitle: "Årsvignett",
    priceTable: [
      { label: "Euro 4 och högre", value: "€100 / år", note: "97 %+ av flamländska bilar" },
      { label: "Elbil / vätgas", value: "€90 / år" },
      { label: "Äldre bilar (upp till Euro 3)", value: "€125 / år" },
    ],
    compareTableTitle: "Korta perioder (jämförelse)",
    compareTable: [
      { label: "1 dag", value: "€9" },
      { label: "10 dagar", value: "€12" },
      { label: "1 månad", value: "€19" },
      { label: "2 månader", value: "€30" },
    ],
    relatedPagesTitle: "Andra vignettyper",
    faqs: [
      {
        question: "Måste belgare också köpa årsvignett?",
        answer:
          "Ja. EU-regler förbjuder vignett enbart för utlänningar. Belgare betalar också, men Flandern planerar kompensation genom reform av fordonskatt.",
      },
      {
        question: "Gäller €100 för alla bilar?",
        answer:
          "Nej. Endast fordon med minst Euro 4. Elbilar betalar €90 enligt planerna; äldre bilar upp till Euro 3 betalar €125.",
      },
      {
        question: "Är detta slutgiltiga priser?",
        answer:
          "Nej. Det är planerade konceptpriser som fortfarande kan ändras.",
      },
    ],
  },
  electricVignette: {
    title: "Elbilsvignett Belgien 2027",
    intro:
      "Ägare av helt eldrivna och vätgasfordon betalar enligt planerna det lägsta årspriset: €90. Detta är ett konceptpris baserat på tillkännagivanden från mars 2026 — inte ett slutgiltigt pris.",
    metaTitle: "Elbilsvignett Belgien 2027 — €90 per år (koncept)",
    metaDescription:
      "Planerad vignett för elbilar i Belgien: €90 per år, det lägsta årspriset. Konceptpris enligt planer mars 2026. Jämför med andra utsläppsklasser.",
    navLabel: "Elbilsvignett",
    sections: [
      {
        id: "ev-rate",
        title: "Lägsta årspris för elbilar",
        paragraphs: [
          "Helt eldrivna och vätgasfordon får enligt planerna den lägsta årsvignetten: €90 per år.",
          "Det är €10 mindre än de flesta Euro 4+-bilar (€100) och €35 mindre än äldre fordon (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "Varför betalar elbilsförare ändå?",
        paragraphs: [
          "Elbilar belastar vägarna precis som andra bilar. Det lägre priset belönar lägre utsläpp, men vignetten förblir enligt planerna obligatorisk.",
          "Flamländska ministern Ben Weyts betonade att €90 är betydligt mindre än andra kategorier — men inte noll.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptpriser",
        paragraphs: [
          "€90 är ett planerat konceptpris. Slutliga priser och eventuella ändringar meddelas först före starten i maj 2027.",
        ],
      },
    ],
    priceTableTitle: "Elbil / vätgas — årsvignett",
    priceTable: [{ label: "Elbil / vätgas", value: "€90 / år" }],
    compareTableTitle: "Andra årspriser (jämförelse)",
    compareTable: [
      { label: "Euro 4 och högre", value: "€100 / år", note: "97 %+ av flamländska bilar" },
      { label: "Äldre bilar (upp till Euro 3)", value: "€125 / år" },
    ],
    relatedPagesTitle: "Andra vignettyper",
    faqs: [
      {
        question: "Gäller €90 även för laddhybrider?",
        answer:
          "Nej. Enligt planerna gäller elbilpriset för helt eldrivna och vätgasfordon. Laddhybrider faller under utsläppsklassen för sin förbränningsmotor.",
      },
      {
        question: "Finns det rabatt för elbilar på korta vignetter?",
        answer:
          "För dag-, månads- och korta vignetter planeras fasta belopp enligt nuvarande planer, oavsett drivlina. Det lägre elbilpriset gäller årsvignetten.",
      },
      {
        question: "Är €90 slutgiltigt?",
        answer:
          "Nej. Det är ett konceptpris baserat på planer från mars 2026.",
      },
    ],
  },
};

export default pages;
