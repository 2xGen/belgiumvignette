import type { Dictionary } from "../types";

export const nlTolls: Dictionary["tolls"] = {
  title: "Tol in België: betalende snelwegen en het vignet in 2027",
  intro:
    "Gaat u met de auto naar België? Ontdek of Belgische snelwegen tolplichtig zijn, hoe het geplande wegenvignet vanaf 2027 werkt en welke tarieven op uw voertuig kunnen gelden.",
  blocks: [
    {
      type: "section",
      id: "autoroutes-payantes",
      title: "Zijn de snelwegen in België tolplichtig?",
      paragraphs: [
        "Voor personenauto's werkt België momenteel niet met een algemeen snelwegvignet zoals Oostenrijk of Zwitserland.",
        "Die situatie zou in 2027 moeten veranderen.",
        "België plant vanaf 1 mei 2027 een digitaal wegenvignet in voor betrokken voertuigen op snelwegen en regionale wegen. Het systeem zou gelden voor Belgische én in het buitenland ingeschreven voertuigen.",
        "Plant u na die datum naar België te rijden, raadpleeg dan onze volledige gids over het [[home|Belgisch vignet 2027]].",
      ],
    },
    {
      type: "summary",
      title: "In het kort",
      items: [
        {
          label: "Momenteel",
          value: "Geen algemeen wegenvignet voor personenauto's.",
        },
        {
          label: "Vanaf 1 mei 2027",
          value: "Invoering van een digitaal vignet gepland.",
        },
        {
          label: "Betrokken voertuigen",
          value:
            "Gemotoriseerde voertuigen met minstens vier wielen tot 3,5 ton.",
        },
        {
          label: "Buitenlandse auto's",
          value: "Ook betrokken.",
        },
        {
          label: "Motoren",
          value:
            "Niet betrokken bij deze verplichting zoals die nu is voorzien.",
        },
        {
          label: "Aankoop",
          value:
            "Online, met opening van de verkoop voorzien vanaf 1 maart 2027.",
        },
      ],
    },
    {
      type: "section",
      id: "peage-ou-vignette",
      title: "Tol of vignet: hoe werkt het Belgische systeem?",
      paragraphs: [
        "Het geplande Belgische systeem is geen klassieke tol waarbij u bij elke passage betaalt.",
        "Het gaat om een wegenvignet dat toegang geeft tot de betrokken wegen voor een bepaalde periode.",
        "In tegenstelling tot een sticker op de voorruit wordt het Belgische vignet digitaal. Het wordt gekoppeld aan de nummerplaat van het voertuig.",
        "U kunt dus rijden zonder fysieke sticker. Bij aankoop moet u onder meer de nummerplaat correct registreren.",
        "Voor uitleg over het nieuwe systeem, zie onze gids over het [[home|wegenvignet in België]].",
      ],
    },
    {
      type: "section",
      id: "routes-concernees",
      title: "Welke wegen worden in 2027 tolplichtig in België?",
      paragraphs: [
        "Het vignet is voorzien voor gebruik van Belgische snelwegen en betrokken regionale wegen.",
        "Bestuurders die alleen op lokale wegen rijden, zouden geen vignet nodig moeten hebben.",
        "Dat betekent dat wie België via de snelweg doorkruist — bijvoorbeeld naar Frankrijk, Nederland, Duitsland of Luxemburg — rekening moet houden met de nieuwe verplichting vanaf de inwerkingtreding.",
        "Praktische modaliteiten en het exacte wegennet kunnen nog worden verfijnd vóór de definitieve lancering.",
      ],
    },
    {
      type: "pricing",
      id: "prix",
      title: "Wat kost de tol in België?",
      paragraphs: [
        "Er zou geen unieke prijs per rit bestaan. De bestuurder koopt een vignet dat geldig is voor een bepaalde periode.",
        "De momenteel gepubliceerde tarieven hangen af van de Euro-norm van het voertuig en de gekozen looptijd.",
      ],
      durationHeader: "Looptijd",
      priceHeader: "Tarief",
      tables: [
        {
          title: "Geplande tarieven voor voertuigen Euro 4 en hoger",
          rows: [
            { label: "1 dag", value: "€9" },
            { label: "10 dagen", value: "€12" },
            { label: "1 maand", value: "€19" },
            { label: "2 maanden", value: "€30" },
            { label: "1 jaar", value: "€100" },
          ],
        },
        {
          title: "Geplande tarieven voor voertuigen Euro 0 tot Euro 3",
          rows: [
            { label: "1 dag", value: "€11,25" },
            { label: "10 dagen", value: "€15" },
            { label: "1 maand", value: "€23,75" },
            { label: "2 maanden", value: "€37,50" },
            { label: "1 jaar", value: "€125" },
          ],
        },
        {
          title: "Geplande tarieven voor emissievrije voertuigen",
          rows: [
            { label: "1 dag", value: "€8,10" },
            { label: "10 dagen", value: "€10,80" },
            { label: "1 maand", value: "€17,10" },
            { label: "2 maanden", value: "€27" },
            { label: "1 jaar", value: "€90" },
          ],
        },
      ],
      linkParagraph:
        "Bedragen, voertuigcategorieën en laatste updates vindt u op onze pagina [[prices|prijzen en tarieven van het Belgisch vignet]].",
      notice:
        "Let op: het systeem moet nog de laatste stappen van het wetgevingsproces doorlopen. De modaliteiten kunnen dus nog wijzigen vóór de inwerkingtreding.",
    },
    {
      type: "section",
      id: "traverser",
      title: "Moet u betalen om met de auto door België te rijden?",
      paragraphs: [
        "Vanaf 1 mei 2027, als het systeem zoals gepland in werking treedt, moeten bestuurders die de betrokken snelwegen of regionale wegen gebruiken over een geldig vignet beschikken.",
        "Dat geldt ook voor bestuurders die België alleen doorkruisen om een ander land te bereiken.",
        "Een auto met Frans, Nederlands of Duits kenteken is bijvoorbeeld niet automatisch vrijgesteld omdat de bestuurder niet in België woont.",
        "Het vignet is voorzien voor betrokken voertuigen die het wegennet gebruiken, ongeacht het land van inschrijving.",
        "Raadpleeg onze gids voor [[foreign|buitenlandse bestuurders in België]] om de regels voor buitenlandse voertuigen te controleren.",
      ],
    },
    {
      type: "section",
      id: "voitures-francaises",
      title: "Moeten Franse auto's betalen op Belgische snelwegen?",
      paragraphs: [
        "Franse auto's vallen onder dezelfde vignetregels als andere buitenlandse auto's wanneer zij op de betrokken wegen rijden.",
        "Een Franse automobilist die vanaf 1 mei 2027 een Belgische snelweg gebruikt, moet volgens de nu voorziene regels dus over een geldig vignet beschikken.",
        "Voor een kort verblijf of eenvoudige doorreis is het niet nodig automatisch een jaarvignet te kopen. Ook looptijden van 1 dag, 10 dagen, 1 maand en 2 maanden zijn voorzien.",
      ],
    },
    {
      type: "section",
      id: "voitures-etrangeres",
      title: "Moeten buitenlandse auto's betalen?",
      paragraphs: [
        "Ja. Het project voorziet expliciet dat het vignet ook geldt voor buitenlandse gebruikers van de betrokken snelwegen en regionale wegen.",
        "Dat betreft onder meer voertuigen uit:",
      ],
      list: [
        "Frankrijk",
        "Nederland",
        "Duitsland",
        "Luxemburg",
        "Verenigd Koninkrijk",
        "andere Europese of niet-Europese landen",
      ],
    },
    {
      type: "section",
      id: "motos",
      title: "Moeten motoren tol betalen in België?",
      paragraphs: [
        "Het voorziene vignet geldt voor gemotoriseerde voertuigen met minstens vier wielen waarvan de technisch toelaatbare maximummassa niet hoger is dan 3,5 ton.",
        "Motoren vallen dus niet onder deze verplichting zoals die nu is voorzien.",
        "Andere voertuigcategorieën kunnen onder andere regels vallen. Raadpleeg de volledige lijst van [[exemptions|vrijstellingen van het Belgisch vignet]] vóór uw rit.",
      ],
    },
    {
      type: "section",
      id: "camping-cars",
      title: "Campers en bestelwagens: is een vignet nodig?",
      paragraphs: [
        "Campers en sommige bestelwagens tot 3,5 ton vallen onder het voorziene systeem wanneer zij de betrokken snelwegen en regionale wegen gebruiken.",
        "Belangrijke criteria zijn onder meer de voertuigcategorie en de technisch toelaatbare maximummassa.",
        "Voertuigen van meer dan 3,5 ton kunnen onder een ander systeem van wegentol vallen.",
      ],
    },
    {
      type: "section",
      id: "poids-lourds",
      title: "En vrachtwagens van meer dan 3,5 ton?",
      paragraphs: [
        "Het nieuwe vignet voor voertuigen tot 3,5 ton vervangt niet het bestaande Belgische systeem voor zware vrachtwagens.",
        "België heeft al een kilometerheffing voor vrachtwagens in het kader van het Viapass-systeem.",
        "U moet dus onderscheid maken tussen:",
      ],
      list: [
        "Auto's, bestelwagens en sommige campers tot 3,5 t → wegenvignet voorzien vanaf 2027.",
        "Betrokken vrachtwagens van meer dan 3,5 t → bestaand kilometerheffingssysteem.",
      ],
    },
    {
      type: "section",
      id: "acheter",
      title: "Waar kunt u het vignet voor Belgische snelwegen kopen?",
      paragraphs: [
        "Het vignet is nog niet te koop.",
        "Volgens de momenteel gepubliceerde officiële informatie zou aankoop mogelijk moeten worden vanaf 1 maart 2027, vóór de voorziene inwerkingtreding op 1 mei.",
        "Het vignet kan online worden gekocht via de officiële website of bij een erkende partnerorganisatie.",
        "Koop geen zogenaamd Belgisch vignet 2027 op een niet-geverifieerde site vóór de officiële opening van de verkoop.",
        "Wij volgen de opening van de verkoop en publiceren de link zodra die beschikbaar is. Raadpleeg [[buy|waar het Belgisch vignet kopen]] voor de laatste informatie.",
      ],
    },
    {
      type: "section",
      id: "controles",
      title: "Hoe wordt het vignet gecontroleerd?",
      paragraphs: [
        "Het vignet wordt volledig digitaal en gekoppeld aan de nummerplaat van het voertuig.",
        "Het is dus niet nodig een fysiek vignet op de voorruit te plakken.",
        "Het is bijzonder belangrijk de nummerplaat correct in te voeren bij aankoop. Rijden op een vignetplichtige weg zonder geldig vignet kan tot een sanctie leiden zodra het controlesysteem volledig actief is.",
        "Raadpleeg onze pagina over [[fines|boetes rond het Belgisch vignet]] voor de laatste controle- en sanctieregels.",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "België 2027: tol, vignet of gratis snelwegen?",
      paragraphs: [
        "De wijziging kan verwarrend zijn, omdat termen als tol België, betalende snelweg België en Belgisch vignet vaak voor dezelfde verandering worden gebruikt.",
        "In de praktijk is het voorziene systeem geen traditionele afstandstol voor personenauto's.",
        "Het gaat om een digitaal vignet dat geldig is voor een bepaalde periode.",
        "U kunt de looptijd kiezen die bij uw reis past: één dag voor een zeer korte doorgang, 10 dagen voor een verblijf, één of twee maanden voor een langere periode, of een jaarvignet voor regelmatig gebruik.",
      ],
    },
  ],
  faqTitle: "Veelgestelde vragen over tol in België",
  faqs: [
    {
      question: "Zijn er tolwegen in België?",
      answer:
        "Voor personenauto's bestaat er momenteel geen algemeen wegenvignet vergelijkbaar met systemen in sommige andere Europese landen. Een digitaal vignet is echter voorzien vanaf 1 mei 2027 voor gebruik van de betrokken snelwegen en regionale wegen.",
    },
    {
      question: "Worden Belgische snelwegen in 2027 tolplichtig?",
      answer:
        "Gebruik van de betrokken snelwegen en regionale wegen vereist een vignet voor voertuigen onder het nieuwe systeem als dat zoals gepland op 1 mei 2027 in werking treedt.",
    },
    {
      question: "Hoeveel kost de snelweg in België?",
      answer:
        "De prijs wordt voor betrokken auto's niet per kilometer berekend. Voor een voertuig Euro 4 of hoger lopen de momenteel gepubliceerde tarieven van €9 voor 1 dag tot €100 voor 1 jaar. Oudere voertuigen en emissievrije voertuigen hebben andere tarieven.",
    },
    {
      question: "Hebt u een vignet nodig om naar België te gaan?",
      answer:
        "Dat hangt af van de datum en de wegen die u gebruikt. Het vignet is voorzien vanaf 1 mei 2027 voor betrokken voertuigen op snelwegen en regionale wegen. Als u alleen op lokale wegen rijdt, zou een vignet niet nodig moeten zijn.",
    },
    {
      question: "Waar kunt u het Belgische snelwegvignet kopen?",
      answer:
        "De verkoop is nog niet geopend. Die zou op 1 maart 2027 moeten starten via de officiële website en erkende partnerorganisaties. Raadpleeg onze pagina Belgisch vignet kopen om de opening van de verkoop te volgen.",
    },
    {
      question: "Moeten motoren betalen op Belgische snelwegen?",
      answer:
        "Het voorziene vignet geldt voor gemotoriseerde voertuigen met minstens vier wielen tot 3,5 ton. Motoren vallen dus niet onder deze verplichting zoals die nu is voorzien.",
    },
  ],
  closing: {
    title: "Bereid uw rit in België voor",
    paragraphs: [
      "Het Belgische systeem moet op 1 mei 2027 in werking treden, maar verschillende modaliteiten kunnen nog wijzigen vóór de definitieve lancering.",
      "Controleer vóór vertrek:",
    ],
    checklist: [
      "of uw voertuig betrokken is;",
      "welke wegen u gaat gebruiken;",
      "welke vignetlooptijd u nodig hebt;",
      "het tarief dat voor uw voertuig geldt;",
      "dat u uw vignet koopt via een erkend kanaal.",
    ],
    links: [
      { href: "home", label: "Belgisch vignet 2027" },
      { href: "prices", label: "Tarieven van het vignet" },
      { href: "buy", label: "Belgisch vignet kopen" },
    ],
  },
};
