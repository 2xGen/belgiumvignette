import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Dagsvignet Belgien 2027",
    intro:
      "Dagsvignetten er beregnet til korte ture på belgiske hovedveje — for eksempel en dagstur, gennemkørsel eller weekend. Priserne nedenfor er baseret på offentliggjorte planer (marts 2026) og kan stadig ændres før indførelsen den 1. maj 2027.",
    metaTitle: "Dagsvignet Belgien 2027 — €9 pr. dag (konceptpris)",
    metaDescription:
      "Planlagt dagsvignet for Belgien fra €9 pr. dag. Til korte ture på motorveje og regionale hovedveje. Konceptpriser ifølge planer marts 2026 — endelige takster kan stadig ændres.",
    navLabel: "Dagsvignet",
    sections: [
      {
        id: "what-is-daily",
        title: "Hvad er dagsvignetten?",
        paragraphs: [
          "Ifølge planerne giver dagsvignetten 24 timers adgang til det belgiske vignetnetværk: motorveje, motorvejsringe og regionale hovedveje, hvor 70 km/t eller mere gælder.",
          "Systemet bliver digitalt og knyttet til din nummerplade — der kommer ingen fysisk klistermærke i forruden.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Hvem er dagsvignetten til?",
        paragraphs: [
          "Dagsvignetten passer til lejlighedsvise brugere: turister, gennemkørende, en enkelt forretningstur eller en dag med indkøb over grænsen.",
          "Kører du oftere gennem Belgien, er et 10-dages-, måneds- eller årligt vignet ifølge planerne mere omkostningseffektivt.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptpriser — ikke endelige takster",
        paragraphs: [
          "Alle beløb på denne side er baseret på meddelelser fra marts 2026. Endelige takster fastsættes først efter godkendelse af regionerne og Europa-Kommissionen.",
          "Tjek altid officielle kilder før din rejse i maj 2027.",
        ],
      },
    ],
    priceTableTitle: "Planlagt dagstakst",
    priceTable: [{ label: "1 dag", value: "€9" }],
    compareTableTitle: "Andre korte perioder (sammenligning)",
    compareTable: [
      { label: "10 dage", value: "€12" },
      { label: "1 måned", value: "€19" },
      { label: "2 måneder", value: "€30" },
    ],
    relatedPagesTitle: "Andre vignettyper",
    faqs: [
      {
        question: "Dækker dagsvignetten én kalenderdag?",
        answer:
          "Ifølge planerne køber du et vignet for en valgt periode på 24 timer eller én kalenderdag — de præcise regler meddeles, når salgssystemet lanceres.",
      },
      {
        question: "Skal udenlandske bilister også have dagsvignet?",
        answer:
          "Ja. EU-regler kræver lige behandling. Også udenlandske nummerplader skal ifølge planerne have et gyldigt vignet på belgiske hovedveje.",
      },
      {
        question: "Er €9 allerede endeligt?",
        answer:
          "Nej. €9 er den planlagte koncepttakst fra marts 2026. Endelige priser kan stadig justeres.",
      },
    ],
  },
  monthlyVignette: {
    title: "Månedsvignet Belgien 2027",
    intro:
      "Månedsvignetten er planlagt til bilister, der bruger belgiske hovedveje i flere uger — for eksempel midlertidigt arbejde, ferie eller et længere ophold. Priserne er konceptpriser ifølge planer marts 2026.",
    metaTitle: "Månedsvignet Belgien 2027 — fra €19 pr. måned (koncept)",
    metaDescription:
      "Planlagt månedsvignet Belgien fra €19 pr. måned, 2 måneder €30. Konceptpriser for motorveje og regionale hovedveje fra 1. maj 2027.",
    navLabel: "Månedsvignet",
    sections: [
      {
        id: "what-is-monthly",
        title: "Hvad er månedsvignetten?",
        paragraphs: [
          "Ifølge planerne giver månedsvignetten adgang til det belgiske vignetnetværk i cirka én kalendermåned.",
          "En to-måneders takst (€30) er også planlagt til lidt længere ophold uden straks at købe et årligt vignet.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Hvem har gavn af månedsvignet?",
        paragraphs: [
          "Pendlere, der midlertidigt arbejder i Belgien, expats på kort opgave eller feriegæster, der opholder sig i landet en måned, kan have gavn af et måneds- eller to-måneders vignet.",
          "Til lejlighedsvis brug er dags- eller 10-dagesvignet billigere; til permanent brug er det årlige vignet mere økonomisk.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptpriser",
        paragraphs: [
          "Beløbene nedenfor er planlagte takster, ikke endelig lovgivning. De kan stadig ændres før starten i maj 2027.",
        ],
      },
    ],
    priceTableTitle: "Planlagte månedstakster",
    priceTable: [
      { label: "1 måned", value: "€19" },
      { label: "2 måneder", value: "€30" },
    ],
    compareTableTitle: "Andre varigheder (sammenligning)",
    compareTable: [
      { label: "1 dag", value: "€9" },
      { label: "10 dage", value: "€12" },
    ],
    relatedPagesTitle: "Andre vignettyper",
    faqs: [
      {
        question: "Hvad er forskellen mellem 1 måned og 2 måneder?",
        answer:
          "Ifølge planerne kan du vælge mellem månedsvignet (€19) og to-måneders vignet (€30). To-måneders taksten er mere omkostningseffektiv pr. dag, hvis du bliver længere.",
      },
      {
        question: "Er der separat takst pr. emissionsnorm for korte vignetter?",
        answer:
          "For korte perioder (dag, måned) er faste beløb planlagt ifølge nuværende planer. Det årlige vignet afhænger derimod af din bils Euro-emissionsnorm.",
      },
      {
        question: "Er disse priser endelige?",
        answer:
          "Nej. Det er konceptpriser baseret på planer fra marts 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Årligt vignet Belgien 2027",
    intro:
      "Det årlige vignet er beregnet til regelmæssige brugere af belgiske hovedveje. Prisen afhænger af din bils emissionsnorm. Priserne nedenfor er konceptpriser ifølge planer marts 2026.",
    metaTitle: "Årligt vignet Belgien 2027 — €90–€125 pr. år (koncept)",
    metaDescription:
      "Planlagt årligt vignet Belgien: €100 for Euro 4+, €90 elbil, €125 ældre biler. Konceptpriser efter emissionsnorm fra 1. maj 2027.",
    navLabel: "Årligt vignet",
    sections: [
      {
        id: "what-is-annual",
        title: "Hvad er det årlige vignet?",
        paragraphs: [
          "Ifølge planerne giver det årlige vignet 12 måneders adgang til motorveje, motorvejsringe og regionale hovedveje i Belgien.",
          "I Flandern er mere end 97 % af personbilerne mindst Euro 4 — for dem er €100 pr. år planlagt.",
        ],
      },
      {
        id: "emission-bands",
        title: "Priser efter emissionsnorm",
        paragraphs: [
          "I modsætning til korte vignetter planlægges årstaksten at variere baseret på din bils Euro-emissionsnorm.",
          "Fuldt elektriske og brintbiler får den laveste takst (€90). Ældre køretøjer op til Euro 3 betaler det højeste beløb (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptpriser",
        paragraphs: [
          "Disse takster er baseret på meddelelser fra marts 2026 og kan stadig justeres. Endelige beløb følger efter godkendelse af regionerne og Europa.",
        ],
      },
    ],
    priceTableTitle: "Årligt vignet",
    priceTable: [
      { label: "Euro 4 og højere", value: "€100 / år", note: "97 %+ af flamske biler" },
      { label: "Elbil / brint", value: "€90 / år" },
      { label: "Ældre biler (op til Euro 3)", value: "€125 / år" },
    ],
    compareTableTitle: "Korte perioder (sammenligning)",
    compareTable: [
      { label: "1 dag", value: "€9" },
      { label: "10 dage", value: "€12" },
      { label: "1 måned", value: "€19" },
      { label: "2 måneder", value: "€30" },
    ],
    relatedPagesTitle: "Andre vignettyper",
    faqs: [
      {
        question: "Skal belgiere også købe årligt vignet?",
        answer:
          "Ja. EU-regler forbyder vignet kun for udlændinge. Belgierne betaler også, men Flandern planlægger kompensation gennem reform af bilafgift.",
      },
      {
        question: "Gælder €100 for alle biler?",
        answer:
          "Nej. Kun køretøjer med mindst Euro 4. Elbiler betaler €90 ifølge planerne; ældre biler op til Euro 3 betaler €125.",
      },
      {
        question: "Er dette endelige priser?",
        answer:
          "Nej. Det er planlagte koncepttakster, der stadig kan ændres.",
      },
    ],
  },
  electricVignette: {
    title: "Elbilsvignet Belgien 2027",
    intro:
      "Ejere af fuldt elektriske og brintbiler betaler ifølge planerne den laveste årstakst: €90. Dette er en konceptpris baseret på meddelelser fra marts 2026 — ikke en endelig takst.",
    metaTitle: "Elbilsvignet Belgien 2027 — €90 pr. år (koncept)",
    metaDescription:
      "Planlagt vignet for elbiler i Belgien: €90 pr. år, den laveste årstakst. Konceptpris ifølge planer marts 2026. Sammenlign med andre emissionsnormer.",
    navLabel: "Elbilsvignet",
    sections: [
      {
        id: "ev-rate",
        title: "Laveste årstakst for elbiler",
        paragraphs: [
          "Fuldt elektriske og brintbiler får ifølge planerne det laveste årlige vignet: €90 pr. år.",
          "Det er €10 mindre end de fleste Euro 4+-biler (€100) og €35 mindre end ældre køretøjer (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "Hvorfor betaler elbilister stadig?",
        paragraphs: [
          "Elbiler belaster vejene ligesom andre biler. Den lavere takst belønner lavere udledning, men vignetten forbliver ifølge planerne obligatorisk.",
          "Den flamske minister Ben Weyts understregede, at €90 er betydeligt mindre end andre kategorier — men ikke nul.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptpriser",
        paragraphs: [
          "€90 er en planlagt koncepttakst. Endelige priser og eventuelle ændringer meddeles først før starten i maj 2027.",
        ],
      },
    ],
    priceTableTitle: "Elbil / brint — årligt vignet",
    priceTable: [{ label: "Elbil / brint", value: "€90 / år" }],
    compareTableTitle: "Andre årstakster (sammenligning)",
    compareTable: [
      { label: "Euro 4 og højere", value: "€100 / år", note: "97 %+ af flamske biler" },
      { label: "Ældre biler (op til Euro 3)", value: "€125 / år" },
    ],
    relatedPagesTitle: "Andre vignettyper",
    faqs: [
      {
        question: "Gælder €90 også for plug-in hybrider?",
        answer:
          "Nej. Ifølge planerne gælder elbiltaksten for fuldt elektriske og brintbiler. Plug-in hybrider falder under emissionsnormen for deres forbrændingsmotor.",
      },
      {
        question: "Er der rabat for elbiler på korte vignetter?",
        answer:
          "For dags-, måneds- og korte vignetter er faste beløb planlagt ifølge nuværende planer, uanset drivlinje. Den lavere elbiltakst gælder det årlige vignet.",
      },
      {
        question: "Er €90 endeligt?",
        answer:
          "Nej. Det er en konceptpris baseret på planer fra marts 2026.",
      },
    ],
  },
};

export default pages;
