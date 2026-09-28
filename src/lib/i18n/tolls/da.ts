import type { Dictionary } from "../types";

export const daTolls: Dictionary["tolls"] = {
  title: "Vejafgifter i Belgien: betalingsmotorveje og vignetten 2027",
  intro:
    "Skal du køre til Belgien? Find ud af, om belgiske motorveje er betalingsbelagte, hvordan det planlagte vejvignet 2027 fungerer, og hvilke takster der kan gælde for dit køretøj.",
  blocks: [
    {
      type: "section",
      id: "autoroutes-payantes",
      title: "Er motorvejene betalingsbelagte i Belgien?",
      paragraphs: [
        "For personbiler bruger Belgien i øjeblikket ikke et generelt motorvejsvignetsystem som Østrig eller Schweiz.",
        "Det forventes at ændre sig i 2027.",
        "Belgien planlægger at indføre et digitalt vejvignet fra 1. maj 2027 for køretøjer, der bruger motorveje og regionale veje omfattet af ordningen. Det ville gælde både belgiske og udenlandsk registrerede køretøjer.",
        "Hvis du planlægger at køre i Belgien efter den dato, se vores fulde guide til [[home|Belgisk vignet 2027]].",
      ],
    },
    {
      type: "summary",
      title: "Kort fortalt",
      items: [
        {
          label: "I dag",
          value: "Intet generelt vejvignet for personbiler.",
        },
        {
          label: "Fra 1. maj 2027",
          value: "Et digitalt vignet er planlagt.",
        },
        {
          label: "Omfattede køretøjer",
          value: "Motorkøretøjer med mindst fire hjul op til 3,5 ton.",
        },
        {
          label: "Udenlandske biler",
          value: "Også omfattet.",
        },
        {
          label: "Motorcykler",
          value: "Ikke omfattet af forpligtelsen ifølge de nuværende planer.",
        },
        {
          label: "Køb",
          value: "Online, med salg forventet at åbne fra 1. marts 2027.",
        },
      ],
    },
    {
      type: "section",
      id: "peage-ou-vignette",
      title: "Afgift eller vignet: hvordan fungerer det belgiske system?",
      paragraphs: [
        "Det planlagte belgiske system er ikke en klassisk vejafgift, hvor du betaler ved hver bom.",
        "Det er et vejvignet, der giver adgang til dækkede veje i en bestemt periode.",
        "I modsætning til et klistermærke i forruden bliver det belgiske vignet digitalt og knyttet til køretøjets nummerplade.",
        "Du behøver altså ikke et fysisk klistermærke. Ved køb skal nummerpladen angives korrekt.",
        "For hvordan det nye system fungerer, se vores guide til [[home|vejvignetten i Belgien]].",
      ],
    },
    {
      type: "section",
      id: "routes-concernees",
      title: "Hvilke veje bliver betalingsbelagte i Belgien i 2027?",
      paragraphs: [
        "Vignetten er planlagt til brug af belgiske motorveje og dækkede regionale veje.",
        "Bilister, der kun kører på lokale veje, bør ikke have brug for et vignet.",
        "Det betyder, at den, der kører gennem Belgien via motorvej — for eksempel mod Frankrig, Nederlandene, Tyskland eller Luxembourg — skal tage højde for den nye forpligtelse, når den træder i kraft.",
        "Praktiske detaljer og det præcise vejnet kan stadig blive præciseret før lanceringen.",
      ],
    },
    {
      type: "pricing",
      id: "prix",
      title: "Hvad koster vejafgifterne i Belgien?",
      paragraphs: [
        "Der bør ikke være én pris pr. tur. Bilisten køber et vignet, der gælder i en valgt periode.",
        "Offentliggjorte takster afhænger af køretøjets Euro-emissionsnorm og den valgte varighed.",
      ],
      durationHeader: "Varighed",
      priceHeader: "Takst",
      tables: [
        {
          title: "Planlagte takster for køretøjer Euro 4 og derover",
          rows: [
            { label: "1 dag", value: "€9" },
            { label: "10 dage", value: "€12" },
            { label: "1 måned", value: "€19" },
            { label: "2 måneder", value: "€30" },
            { label: "1 år", value: "€100" },
          ],
        },
        {
          title: "Planlagte takster for køretøjer Euro 0 til Euro 3",
          rows: [
            { label: "1 dag", value: "€11.25" },
            { label: "10 dage", value: "€15" },
            { label: "1 måned", value: "€23.75" },
            { label: "2 måneder", value: "€37.50" },
            { label: "1 år", value: "€125" },
          ],
        },
        {
          title: "Planlagte takster for emissionsfrie køretøjer",
          rows: [
            { label: "1 dag", value: "€8.10" },
            { label: "10 dage", value: "€10.80" },
            { label: "1 måned", value: "€17.10" },
            { label: "2 måneder", value: "€27" },
            { label: "1 år", value: "€90" },
          ],
        },
      ],
      linkParagraph:
        "Du finder beløb, køretøjskategorier og seneste opdateringer på vores side om [[prices|priser og takster for belgisk vignet]].",
      notice:
        "Bemærk: systemet skal stadig gennem de sidste lovgivningsmæssige trin. Reglerne kan derfor ændre sig, før det træder i kraft.",
    },
    {
      type: "section",
      id: "traverser",
      title: "Skal man betale for at køre gennem Belgien?",
      paragraphs: [
        "Fra 1. maj 2027, hvis systemet træder i kraft som planlagt, skal bilister, der bruger dækkede motorveje eller regionale veje, have et gyldigt vignet.",
        "Det gælder også bilister, der kun kører gennem Belgien for at nå et andet land.",
        "En bil registreret i Frankrig, Nederlandene eller Tyskland er ikke automatisk fritaget, bare fordi føreren ikke bor i Belgien.",
        "Vignetten er planlagt for omfattede køretøjer, der bruger vejnettet, uanset registreringsland.",
        "Se vores guide for [[foreign|udenlandske bilister i Belgien]] for regler om udenlandske køretøjer.",
      ],
    },
    {
      type: "section",
      id: "voitures-francaises",
      title: "Skal franske biler betale på belgiske motorveje?",
      paragraphs: [
        "Franske biler følger de samme vignetregler som andre udenlandske biler på dækkede veje.",
        "En fransk bilist på en belgisk motorvej fra 1. maj 2027 skal ifølge de nuværende planer have et gyldigt vignet.",
        "Til et kort ophold eller simpel transit er et årsvignet ikke automatisk nødvendigt. Varigheder på 1 dag, 10 dage, 1 måned og 2 måneder er også planlagt.",
      ],
    },
    {
      type: "section",
      id: "voitures-etrangeres",
      title: "Skal udenlandske biler betale?",
      paragraphs: [
        "Ja. Planerne angiver eksplicit, at vignetten også gælder udenlandske brugere af dækkede motorveje og regionale veje.",
        "Det omfatter blandt andet køretøjer fra:",
      ],
      list: [
        "Frankrig",
        "Nederlandene",
        "Tyskland",
        "Luxembourg",
        "Storbritannien",
        "andre europæiske og ikke-europæiske lande",
      ],
    },
    {
      type: "section",
      id: "motos",
      title: "Skal motorcykler betale vejafgift i Belgien?",
      paragraphs: [
        "Det planlagte vignet omfatter motorkøretøjer med mindst fire hjul og en højeste teknisk tilladte masse på højst 3,5 ton.",
        "Motorcykler er derfor ikke omfattet af denne forpligtelse ifølge de nuværende planer.",
        "Andre køretøjskategorier kan følge andre regler. Tjek den fulde liste over [[exemptions|fritagelser fra det belgiske vignet]] før rejsen.",
      ],
    },
    {
      type: "section",
      id: "camping-cars",
      title: "Autocampere og varevogne: er et vignet nødvendigt?",
      paragraphs: [
        "Autocampere og nogle varevogne op til 3,5 ton falder ind under det planlagte system, når de bruger dækkede motorveje og regionale veje.",
        "De vigtige kriterier er især køretøjskategori og højeste teknisk tilladte masse.",
        "Køretøjer over 3,5 ton kan være omfattet af et andet vejafgiftssystem.",
      ],
    },
    {
      type: "section",
      id: "poids-lourds",
      title: "Hvad med lastbiler over 3,5 ton?",
      paragraphs: [
        "Det nye vignet for køretøjer op til 3,5 ton erstatter ikke Belgiens eksisterende system for tunge godskøretøjer.",
        "Belgien har allerede en kilometerafgift for lastbiler under Viapass-systemet.",
        "Forskellen er derfor:",
      ],
      list: [
        "Biler, lette varevogne og nogle autocampere op til 3,5 t → vejvignet planlagt fra 2027.",
        "Omfattede tunge godskøretøjer over 3,5 t → eksisterende kilometerafgift.",
      ],
    },
    {
      type: "section",
      id: "acheter",
      title: "Hvor køber man vignetten til belgiske motorveje?",
      paragraphs: [
        "Vignetten er endnu ikke til salg.",
        "Ifølge aktuelt offentliggjorte officielle oplysninger bør køb blive muligt fra 1. marts 2027, før den planlagte ikrafttræden den 1. maj.",
        "Vignetten skal kunne købes online via den officielle hjemmeside eller en anerkendt partnerorganisation.",
        "Undgå at købe et påstået belgisk vignet 2027 fra en ikke-verificeret side, før det officielle salg åbner.",
        "Vi følger åbningen af salget og publicerer linket, når det er tilgængeligt. Se [[buy|hvor man køber det belgiske vignet]] for seneste information.",
      ],
    },
    {
      type: "section",
      id: "controles",
      title: "Hvordan kontrolleres vignetten?",
      paragraphs: [
        "Vignetten bliver fuldt digital og knyttet til køretøjets nummerplade.",
        "Du behøver altså ikke sætte et fysisk klistermærke på forruden.",
        "Det er særligt vigtigt at angive nummerpladen korrekt ved køb. At køre på en vignetbelagt vej uden gyldigt vignet kan føre til en sanktion, når kontrolsystemet er fuldt aktivt.",
        "Se vores side om [[fines|bøder knyttet til det belgiske vignet]] for seneste regler om kontrol og sanktioner.",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "Belgien 2027: vejafgift, vignet eller gratis motorveje?",
      paragraphs: [
        "Ændringen kan skabe forvirring, fordi begreber som vejafgift Belgien, betalingsmotorvej Belgien og belgisk vignet ofte bruges om den samme ændring.",
        "I praksis er det planlagte system ikke en traditionel afstandbaseret vejafgift for personbiler.",
        "Det er et digitalt vignet, der gælder i en valgt periode.",
        "Du kan vælge den varighed, der passer til din rejse: én dag til en meget kort passage, 10 dage til et ophold, én eller to måneder til en længere periode, eller et årsvignet til regelmæssig brug.",
      ],
    },
  ],
  faqTitle: "Ofte stillede spørgsmål om vejafgifter i Belgien",
  faqs: [
    {
      question: "Er der vejafgifter i Belgien?",
      answer:
        "For personbiler findes der i øjeblikket intet generelt vejvignet sammenligneligt med systemerne i nogle andre europæiske lande. Et digitalt vignet er dog planlagt fra 1. maj 2027 til brug af dækkede motorveje og regionale veje.",
    },
    {
      question: "Bliver belgiske motorveje betalingsbelagte i 2027?",
      answer:
        "Brug af dækkede motorveje og regionale veje vil kræve et vignet for køretøjer under det nye system, hvis det træder i kraft som planlagt den 1. maj 2027.",
    },
    {
      question: "Hvad koster motorvejen i Belgien?",
      answer:
        "Prisen beregnes ikke pr. kilometer for omfattede biler. For et køretøj Euro 4 eller højere går offentliggjorte takster i øjeblikket fra €9 for 1 dag til €100 for 1 år. Ældre køretøjer og emissionsfrie køretøjer har andre takster.",
    },
    {
      question: "Har man brug for et vignet for at køre til Belgien?",
      answer:
        "Det afhænger af datoen og de veje, du bruger. Vignetten er planlagt fra 1. maj 2027 for omfattede køretøjer på motorveje og regionale veje. Hvis du kun kører på lokale veje, bør et vignet ikke være nødvendigt.",
    },
    {
      question: "Hvor køber man motorvejsvignetten til Belgien?",
      answer:
        "Salget er endnu ikke åbent. Det forventes at starte 1. marts 2027 via den officielle hjemmeside og anerkendte partnerorganisationer. Se vores side Sådan køber du for opdateringer om åbningen.",
    },
    {
      question: "Skal motorcykler betale på belgiske motorveje?",
      answer:
        "Det planlagte vignet gælder motorkøretøjer med mindst fire hjul op til 3,5 ton. Motorcykler er derfor ikke omfattet af denne forpligtelse ifølge de nuværende planer.",
    },
  ],
  closing: {
    title: "Forbered din tur til Belgien",
    paragraphs: [
      "Det belgiske system skal træde i kraft den 1. maj 2027, men flere detaljer kan stadig ændre sig før den endelige lancering.",
      "Før du kører, tjek:",
    ],
    checklist: [
      "om dit køretøj er omfattet;",
      "hvilke veje du skal bruge;",
      "hvilken vignetvarighed du har brug for;",
      "taksten for dit køretøj;",
      "at du køber via en anerkendt kanal.",
    ],
    links: [
      { href: "home", label: "Belgisk vignet 2027" },
      { href: "prices", label: "Vignetpriser" },
      { href: "buy", label: "Køb det belgiske vignet" },
    ],
  },
};
