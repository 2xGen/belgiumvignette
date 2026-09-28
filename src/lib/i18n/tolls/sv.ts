import type { Dictionary } from "../types";

export const svTolls: Dictionary["tolls"] = {
  title: "Vägtullar i Belgien: betalmotorvägar och vinjetten 2027",
  intro:
    "Ska du köra till Belgien? Ta reda på om belgiska motorvägar är avgiftsbelagda, hur den planerade vägvinjetten 2027 fungerar och vilka tariffer som kan gälla för ditt fordon.",
  blocks: [
    {
      type: "section",
      id: "autoroutes-payantes",
      title: "Är motorvägarna avgiftsbelagda i Belgien?",
      paragraphs: [
        "För personbilar använder Belgien för närvarande inte ett allmänt motorvägsvinjettsystem som Österrike eller Schweiz.",
        "Det förväntas förändras 2027.",
        "Belgien planerar att införa en digital vägvinjett från 1 maj 2027 för fordon som använder motorvägar och regionala vägar som omfattas av systemet. Det skulle gälla både belgiska och utlandsregistrerade fordon.",
        "Om du planerar att köra i Belgien efter det datumet, se vår fullständiga guide om [[home|Belgisk vignett 2027]].",
      ],
    },
    {
      type: "summary",
      title: "Kort sagt",
      items: [
        {
          label: "Idag",
          value: "Ingen allmän vägvinjett för personbilar.",
        },
        {
          label: "Från 1 maj 2027",
          value: "En digital vignett planeras.",
        },
        {
          label: "Berörda fordon",
          value: "Motorfordon med minst fyra hjul upp till 3,5 ton.",
        },
        {
          label: "Utländska bilar",
          value: "Omfattas också.",
        },
        {
          label: "Motorcyklar",
          value: "Omfattas inte av skyldigheten enligt nuvarande planer.",
        },
        {
          label: "Köp",
          value: "Online, med försäljning som väntas öppna från 1 mars 2027.",
        },
      ],
    },
    {
      type: "section",
      id: "peage-ou-vignette",
      title: "Tull eller vignett: hur fungerar det belgiska systemet?",
      paragraphs: [
        "Det planerade belgiska systemet är inte en klassisk vägtull där du betalar vid varje bom.",
        "Det är en vägvinjett som ger tillträde till täckta vägar under en bestämd period.",
        "Till skillnad från ett klistermärke i vindrutan blir den belgiska vignetten digital och kopplad till fordonets registreringsskylt.",
        "Du behöver alltså inget fysiskt klistermärke. Vid köp måste skylten anges korrekt.",
        "För hur det nya systemet fungerar, se vår guide om [[home|vägvinjetten i Belgien]].",
      ],
    },
    {
      type: "section",
      id: "routes-concernees",
      title: "Vilka vägar blir avgiftsbelagda i Belgien 2027?",
      paragraphs: [
        "Vinjetten planeras för användning av belgiska motorvägar och täckta regionala vägar.",
        "Förare som bara kör på lokala vägar bör inte behöva en vignett.",
        "Det betyder att den som korsar Belgien via motorväg — till exempel mot Frankrike, Nederländerna, Tyskland eller Luxemburg — måste ta hänsyn till den nya skyldigheten när den träder i kraft.",
        "Praktiska detaljer och det exakta vägnätet kan fortfarande preciseras före lanseringen.",
      ],
    },
    {
      type: "pricing",
      id: "prix",
      title: "Vad kostar vägtullarna i Belgien?",
      paragraphs: [
        "Det bör inte finnas ett enda pris per resa. Föraren köper en vignett som gäller under en vald period.",
        "Publicerade tariffer beror på fordonets Euro-utsläppsnorm och den valda giltighetstiden.",
      ],
      durationHeader: "Giltighetstid",
      priceHeader: "Tariff",
      tables: [
        {
          title: "Planerade tariffer för fordon Euro 4 och högre",
          rows: [
            { label: "1 dag", value: "€9" },
            { label: "10 dagar", value: "€12" },
            { label: "1 månad", value: "€19" },
            { label: "2 månader", value: "€30" },
            { label: "1 år", value: "€100" },
          ],
        },
        {
          title: "Planerade tariffer för fordon Euro 0 till Euro 3",
          rows: [
            { label: "1 dag", value: "€11.25" },
            { label: "10 dagar", value: "€15" },
            { label: "1 månad", value: "€23.75" },
            { label: "2 månader", value: "€37.50" },
            { label: "1 år", value: "€125" },
          ],
        },
        {
          title: "Planerade tariffer för utsläppsfria fordon",
          rows: [
            { label: "1 dag", value: "€8.10" },
            { label: "10 dagar", value: "€10.80" },
            { label: "1 månad", value: "€17.10" },
            { label: "2 månader", value: "€27" },
            { label: "1 år", value: "€90" },
          ],
        },
      ],
      linkParagraph:
        "Du hittar belopp, fordonskategorier och senaste uppdateringar på vår sida om [[prices|priser och tariffer för belgisk vignett]].",
      notice:
        "Obs: systemet måste fortfarande genomgå de sista lagstiftningsstegen. Reglerna kan därför ändras innan det träder i kraft.",
    },
    {
      type: "section",
      id: "traverser",
      title: "Måste man betala för att köra genom Belgien?",
      paragraphs: [
        "Från 1 maj 2027, om systemet träder i kraft som planerat, behöver förare som använder täckta motorvägar eller regionala vägar en giltig vignett.",
        "Det gäller även förare som bara passerar Belgien för att nå ett annat land.",
        "En bil registrerad i Frankrike, Nederländerna eller Tyskland undantas inte automatiskt bara för att föraren inte bor i Belgien.",
        "Vinjetten planeras för berörda fordon som använder vägnätet, oavsett registreringsland.",
        "Se vår guide för [[foreign|utländska förare i Belgien]] för regler som gäller utländska fordon.",
      ],
    },
    {
      type: "section",
      id: "voitures-francaises",
      title: "Måste franska bilar betala på belgiska motorvägar?",
      paragraphs: [
        "Franska bilar omfattas av samma vignettregler som andra utländska bilar på täckta vägar.",
        "En fransk bilist på en belgisk motorväg från 1 maj 2027 ska enligt nuvarande planer ha en giltig vignett.",
        "För ett kort vistelse eller enkel transit behövs inte automatiskt en årsvignett. Giltighetstider på 1 dag, 10 dagar, 1 månad och 2 månader planeras också.",
      ],
    },
    {
      type: "section",
      id: "voitures-etrangeres",
      title: "Måste utländska bilar betala?",
      paragraphs: [
        "Ja. Planerna anger uttryckligen att vinjetten även gäller utländska användare av täckta motorvägar och regionala vägar.",
        "Det gäller bland annat fordon från:",
      ],
      list: [
        "Frankrike",
        "Nederländerna",
        "Tyskland",
        "Luxemburg",
        "Storbritannien",
        "andra europeiska och utomeuropeiska länder",
      ],
    },
    {
      type: "section",
      id: "motos",
      title: "Måste motorcyklar betala vägtull i Belgien?",
      paragraphs: [
        "Den planerade vinjetten gäller motorfordon med minst fyra hjul och en högsta tekniskt tillåtna massa på högst 3,5 ton.",
        "Motorcyklar omfattas därför inte av denna skyldighet enligt nuvarande planer.",
        "Andra fordonskategorier kan ha andra regler. Kontrollera den fullständiga listan över [[exemptions|undantag från den belgiska vignetten]] före resan.",
      ],
    },
    {
      type: "section",
      id: "camping-cars",
      title: "Husbilar och skåpbilar: behövs en vignett?",
      paragraphs: [
        "Husbilar och vissa skåpbilar upp till 3,5 ton omfattas av det planerade systemet när de använder täckta motorvägar och regionala vägar.",
        "Viktiga kriterier är framför allt fordonskategori och högsta tekniskt tillåtna massa.",
        "Fordon över 3,5 ton kan omfattas av ett annat vägavgiftssystem.",
      ],
    },
    {
      type: "section",
      id: "poids-lourds",
      title: "Hur är det med lastbilar över 3,5 ton?",
      paragraphs: [
        "Den nya vinjetten för fordon upp till 3,5 ton ersätter inte Belgiens befintliga system för tunga godsfordon.",
        "Belgien har redan en kilometeravgift för lastbilar inom Viapass-systemet.",
        "Skillnaden är alltså:",
      ],
      list: [
        "Bilar, lätta skåpbilar och vissa husbilar upp till 3,5 t → vägvinjett planerad från 2027.",
        "Berörda tunga godsfordon över 3,5 t → befintlig kilometeravgift.",
      ],
    },
    {
      type: "section",
      id: "acheter",
      title: "Var köper man vinjetten för belgiska motorvägar?",
      paragraphs: [
        "Vinjetten är ännu inte till försäljning.",
        "Enligt för närvarande publicerad officiell information bör köp bli möjligt från 1 mars 2027, före det planerade ikraftträdandet den 1 maj.",
        "Vinjetten ska kunna köpas online via den officiella webbplatsen eller en erkänd partnerorganisation.",
        "Undvik att köpa en påstådd belgisk vignett 2027 från en overifierad webbplats innan den officiella försäljningen öppnar.",
        "Vi följer öppningen av försäljningen och publicerar länken när den finns. Se [[buy|var man köper den belgiska vignetten]] för senaste information.",
      ],
    },
    {
      type: "section",
      id: "controles",
      title: "Hur kontrolleras vinjetten?",
      paragraphs: [
        "Vinjetten blir helt digital och kopplad till fordonets registreringsskylt.",
        "Du behöver alltså inte sätta ett fysiskt klistermärke på vindrutan.",
        "Det är särskilt viktigt att ange skylten korrekt vid köp. Att köra på en vignettbelagd väg utan giltig vignett kan leda till en sanktion när kontrollsystemet är fullt aktivt.",
        "Se vår sida om [[fines|böter kopplade till den belgiska vignetten]] för senaste regler om kontroll och sanktioner.",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "Belgien 2027: vägtull, vignett eller gratis motorvägar?",
      paragraphs: [
        "Förändringen kan skapa förvirring eftersom termer som vägtull Belgien, avgiftsbelagd motorväg Belgien och belgisk vignett ofta används om samma förändring.",
        "I praktiken är det planerade systemet inte en traditionell avståndsbaserad vägtull för personbilar.",
        "Det är en digital vignett som gäller under en vald period.",
        "Du kan välja den giltighetstid som passar din resa: en dag för en mycket kort passage, 10 dagar för en vistelse, en eller två månader för en längre period, eller en årsvignett för regelbunden användning.",
      ],
    },
  ],
  faqTitle: "Vanliga frågor om vägtullar i Belgien",
  faqs: [
    {
      question: "Finns det vägtullar i Belgien?",
      answer:
        "För personbilar finns det för närvarande ingen allmän vägvinjett jämförbar med systemen i vissa andra europeiska länder. En digital vignett planeras dock från 1 maj 2027 för användning av täckta motorvägar och regionala vägar.",
    },
    {
      question: "Blir belgiska motorvägar avgiftsbelagda 2027?",
      answer:
        "Användning av täckta motorvägar och regionala vägar kommer att kräva en vignett för fordon under det nya systemet om det träder i kraft som planerat den 1 maj 2027.",
    },
    {
      question: "Hur mycket kostar motorvägen i Belgien?",
      answer:
        "Priset beräknas inte per kilometer för berörda bilar. För ett fordon Euro 4 eller högre går publicerade tariffer för närvarande från €9 för 1 dag till €100 för 1 år. Äldre fordon och utsläppsfria fordon har andra tariffer.",
    },
    {
      question: "Behöver man en vignett för att åka till Belgien?",
      answer:
        "Det beror på datum och vilka vägar du använder. Vinjetten planeras från 1 maj 2027 för berörda fordon på motorvägar och regionala vägar. Om du bara kör på lokala vägar bör en vignett inte behövas.",
    },
    {
      question: "Var köper man motorvägsvinjetten för Belgien?",
      answer:
        "Försäljningen är ännu inte öppen. Den väntas starta 1 mars 2027 via den officiella webbplatsen och erkända partnerorganisationer. Se vår sida Så köper du för uppdateringar om öppningen.",
    },
    {
      question: "Måste motorcyklar betala på belgiska motorvägar?",
      answer:
        "Den planerade vinjetten gäller motorfordon med minst fyra hjul upp till 3,5 ton. Motorcyklar omfattas därför inte av denna skyldighet enligt nuvarande planer.",
    },
  ],
  closing: {
    title: "Förbered din resa till Belgien",
    paragraphs: [
      "Det belgiska systemet ska träda i kraft den 1 maj 2027, men flera detaljer kan fortfarande ändras före den slutliga lanseringen.",
      "Innan du åker, kontrollera:",
    ],
    checklist: [
      "om ditt fordon omfattas;",
      "vilka vägar du ska använda;",
      "vilken vignettgiltighetstid du behöver;",
      "tariffen för ditt fordon;",
      "att du köper via en erkänd kanal.",
    ],
    links: [
      { href: "home", label: "Belgisk vignett 2027" },
      { href: "prices", label: "Vinjettpriser" },
      { href: "buy", label: "Köp den belgiska vignetten" },
    ],
  },
};
