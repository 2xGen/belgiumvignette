import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Dagvignet België 2027",
    intro:
      "Het dagvignet is bedoeld voor korte ritten op Belgische hoofdwegen — bijvoorbeeld een dagtrip, doorreis of weekend. Onderstaande tarieven zijn gebaseerd op gepubliceerde plannen (maart 2026) en kunnen nog wijzigen vóór invoering op 1 mei 2027.",
    metaTitle: "Dagvignet België 2027 — prijs €9 per dag (concept)",
    metaDescription:
      "Gepland dagvignet voor België vanaf €9 per dag. Voor korte ritten op snelwegen en gewestwegen. Conceptprijzen volgens plannen maart 2026 — definitieve tarieven kunnen nog wijzigen.",
    navLabel: "Dagvignet",
    sections: [
      {
        id: "what-is-daily",
        title: "Wat is het dagvignet?",
        paragraphs: [
          "Het dagvignet geeft volgens de plannen 24 uur toegang tot het Belgische vignetnetwerk: autosnelwegen, autosnelwegringen en gewestwegen waar 70 km/u of meer geldt.",
          "Het systeem wordt digitaal en gekoppeld aan uw kenteken — er komt geen fysieke sticker op de voorruit.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Voor wie is een dagvignet bedoeld?",
        paragraphs: [
          "Een dagvignet past bij occasionele gebruikers: toeristen, doorrijders, een enkele zakelijke rit of een dagje shoppen over de grens.",
          "Rijdt u vaker door België, dan is een 10-dagen-, maand- of jaarvignet volgens de plannen voordeliger.",
        ],
      },
      {
        id: "concept-prices",
        title: "Conceptprijzen — nog geen definitieve tarieven",
        paragraphs: [
          "Alle bedragen op deze pagina zijn gebaseerd op aankondigingen uit maart 2026. De definitieve tarieven worden pas vastgelegd na goedkeuring door de gewesten en de Europese Commissie.",
          "Controleer altijd officiële bronnen vóór uw reis in mei 2027.",
        ],
      },
    ],
    priceTableTitle: "Gepland dagtarief",
    priceTable: [{ label: "1 dag", value: "€9" }],
    compareTableTitle: "Andere korte periodes (ter vergelijking)",
    compareTable: [
      { label: "10 dagen", value: "€12" },
      { label: "1 maand", value: "€19" },
      { label: "2 maanden", value: "€30" },
    ],
    relatedPagesTitle: "Andere vignettypes",
    faqs: [
      {
        question: "Geldt het dagvignet voor één kalenderdag?",
        answer:
          "Volgens de plannen koopt u een vignet voor een gekozen periode van 24 uur of een kalenderdag — de exacte regels worden nog bekendgemaakt bij lancering van het verkoopsysteem.",
      },
      {
        question: "Moeten buitenlanders ook een dagvignet kopen?",
        answer:
          "Ja. EU-regels vereisen gelijke behandeling. Ook buitenlandse kentekens moeten volgens de plannen een geldig vignet hebben op Belgische hoofdwegen.",
      },
      {
        question: "Is €9 al definitief?",
        answer:
          "Nee. €9 is het geplande concepttarief uit maart 2026. Definitieve prijzen kunnen nog worden aangepast.",
      },
    ],
  },
  monthlyVignette: {
    title: "Maandvignet België 2027",
    intro:
      "Het maandvignet is gepland voor bestuurders die enkele weken op Belgische hoofdwegen rijden — bijvoorbeeld tijdelijke werkzaamheden, vakantie of een langere verblijfperiode. Tarieven zijn conceptprijzen volgens plannen maart 2026.",
    metaTitle: "Maandvignet België 2027 — vanaf €19 per maand (concept)",
    metaDescription:
      "Gepland maandvignet België vanaf €19 per maand, 2 maanden €30. Conceptprijzen voor snelwegen en gewestwegen vanaf 1 mei 2027.",
    navLabel: "Maandvignet",
    sections: [
      {
        id: "what-is-monthly",
        title: "Wat is het maandvignet?",
        paragraphs: [
          "Het maandvignet biedt volgens de plannen toegang tot het Belgische vignetnetwerk gedurende ongeveer één kalendermaand.",
          "Er is ook een tweemaandentarief gepland (€30) voor iets langere verblijven zonder direct een jaarvignet te kopen.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Voor wie loont een maandvignet?",
        paragraphs: [
          "Pendelaars die tijdelijk in België werken, expats met een korte opdracht of vakantiegangers die een maand in het land verblijven kunnen baat hebben bij een maand- of tweemaandenvignet.",
          "Voor incidenteel gebruik is een dag- of 10-dagenvignet goedkoper; voor permanent gebruik is het jaarvignet voordeliger.",
        ],
      },
      {
        id: "concept-prices",
        title: "Conceptprijzen",
        paragraphs: [
          "De bedragen hieronder zijn geplande tarieven, geen definitieve wetgeving. Ze kunnen nog wijzigen vóór de start in mei 2027.",
        ],
      },
    ],
    priceTableTitle: "Geplande maandtarieven",
    priceTable: [
      { label: "1 maand", value: "€19" },
      { label: "2 maanden", value: "€30" },
    ],
    compareTableTitle: "Andere looptijden (ter vergelijking)",
    compareTable: [
      { label: "1 dag", value: "€9" },
      { label: "10 dagen", value: "€12" },
    ],
    relatedPagesTitle: "Andere vignettypes",
    faqs: [
      {
        question: "Wat is het verschil tussen 1 maand en 2 maanden?",
        answer:
          "Volgens de plannen kunt u kiezen tussen een maandvignet (€19) en een tweemaandenvignet (€30). Het tweemaandentarief is voordeliger per dag als u langer blijft.",
      },
      {
        question: "Is er een apart tarief per emissienorm voor korte vignetten?",
        answer:
          "Voor korte periodes (dag, maand) zijn volgens de huidige plannen vaste bedragen gepland. Het jaarvignet hangt wél af van de Euro-emissienorm van uw voertuig.",
      },
      {
        question: "Zijn deze prijzen definitief?",
        answer:
          "Nee. Het zijn conceptprijzen op basis van plannen uit maart 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Jaarvignet België 2027",
    intro:
      "Het jaarvignet is bedoeld voor regelmatige gebruikers van Belgische hoofdwegen. De prijs hangt af van de emissienorm van uw voertuig. Onderstaande tarieven zijn conceptprijzen volgens plannen maart 2026.",
    metaTitle: "Jaarvignet België 2027 — €90–€125 per jaar (concept)",
    metaDescription:
      "Gepland jaarvignet België: €100 voor Euro 4+, €90 elektrisch, €125 oudere auto's. Conceptprijzen per emissienorm vanaf 1 mei 2027.",
    navLabel: "Jaarvignet",
    sections: [
      {
        id: "what-is-annual",
        title: "Wat is het jaarvignet?",
        paragraphs: [
          "Het jaarvignet geeft volgens de plannen 12 maanden toegang tot autosnelwegen, autosnelwegringen en gewestwegen in België.",
          "In Vlaanderen rijdt meer dan 97% van de personenauto's minstens Euro 4 — voor hen is €100 per jaar gepland.",
        ],
      },
      {
        id: "emission-bands",
        title: "Prijzen per emissienorm",
        paragraphs: [
          "Anders dan korte vignetten, varieert het jaartarief volgens de plannen op basis van de Euro-emissienorm van uw voertuig.",
          "Volledig elektrische en waterstofvoertuigen krijgen het laagste tarief (€90). Oudere voertuigen tot Euro 3 betalen het hoogste bedrag (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Conceptprijzen",
        paragraphs: [
          "Deze tarieven zijn gebaseerd op aankondigingen uit maart 2026 en kunnen nog worden aangepast. Definitieve bedragen volgen na goedkeuring door de gewesten en Europa.",
        ],
      },
    ],
    priceTableTitle: "Jaarvignet",
    priceTable: [
      { label: "Euro 4 en hoger", value: "€100 / jaar", note: "97%+ van Vlaamse auto's" },
      { label: "Elektrisch / waterstof", value: "€90 / jaar" },
      { label: "Oudere auto's (tot Euro 3)", value: "€125 / jaar" },
    ],
    compareTableTitle: "Korte periodes (ter vergelijking)",
    compareTable: [
      { label: "1 dag", value: "€9" },
      { label: "10 dagen", value: "€12" },
      { label: "1 maand", value: "€19" },
      { label: "2 maanden", value: "€30" },
    ],
    relatedPagesTitle: "Andere vignettypes",
    faqs: [
      {
        question: "Moeten Belgen ook een jaarvignet kopen?",
        answer:
          "Ja. EU-regels verbieden een vignet enkel voor buitenlanders. Belgen betalen ook, maar Vlaanderen plant compensatie via hervorming van de verkeersbelasting.",
      },
      {
        question: "Geldt €100 voor alle auto's?",
        answer:
          "Nee. Alleen voertuigen met minstens Euro 4. Elektrische auto's betalen volgens de plannen €90; oudere auto's tot Euro 3 €125.",
      },
      {
        question: "Zijn dit definitieve prijzen?",
        answer:
          "Nee. Het zijn geplande concepttarieven die nog kunnen wijzigen.",
      },
    ],
  },
  electricVignette: {
    title: "Elektrisch vignet België 2027",
    intro:
      "Eigenaren van volledig elektrische en waterstofvoertuigen betalen volgens de plannen het laagste jaartarief: €90. Dit is een conceptprijs op basis van aankondigingen uit maart 2026 — geen definitief tarief.",
    metaTitle: "Elektrisch vignet België 2027 — €90 per jaar (concept)",
    metaDescription:
      "Gepland vignet voor elektrische auto's in België: €90 per jaar, het laagste jaartarief. Conceptprijs volgens plannen maart 2026. Vergelijk met andere emissienormen.",
    navLabel: "Elektrisch vignet",
    sections: [
      {
        id: "ev-rate",
        title: "Laagste jaartarief voor EV's",
        paragraphs: [
          "Volledig elektrische en waterstofvoertuigen krijgen volgens de plannen het laagste jaarvignet: €90 per jaar.",
          "Dat is €10 minder dan de meeste Euro 4+-auto's (€100) en €35 minder dan oudere voertuigen (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "Waarom betalen EV-rijders wél?",
        paragraphs: [
          "Elektrische voertuigen belasten de wegen net als andere auto's. Het lagere tarief beloont de lagere uitstoot, maar het vignet blijft volgens de plannen verplicht.",
          "Vlaams minister Ben Weyts benadrukte dat €90 aanzienlijk minder is dan andere categorieën — maar niet nul.",
        ],
      },
      {
        id: "concept-prices",
        title: "Conceptprijzen",
        paragraphs: [
          "€90 is een gepland concepttarief. Definitieve prijzen en eventuele wijzigingen worden pas bekendgemaakt vóór de start in mei 2027.",
        ],
      },
    ],
    priceTableTitle: "Elektrisch / waterstof — jaarvignet",
    priceTable: [{ label: "Elektrisch / waterstof", value: "€90 / jaar" }],
    compareTableTitle: "Andere jaartarieven (ter vergelijking)",
    compareTable: [
      { label: "Euro 4 en hoger", value: "€100 / jaar", note: "97%+ van Vlaamse auto's" },
      { label: "Oudere auto's (tot Euro 3)", value: "€125 / jaar" },
    ],
    relatedPagesTitle: "Andere vignettypes",
    faqs: [
      {
        question: "Geldt €90 ook voor plug-in hybrides?",
        answer:
          "Nee. Volgens de plannen geldt het EV-tarief voor volledig elektrische en waterstofvoertuigen. Plug-in hybrides vallen onder de emissienorm van hun verbrandingsmotor.",
      },
      {
        question: "Is er korting voor EV's op korte vignetten?",
        answer:
          "Voor dag-, maand- en korte vignetten zijn volgens de huidige plannen vaste bedragen gepland, ongeacht aandrijving. Het lagere EV-tarief geldt voor het jaarvignet.",
      },
      {
        question: "Is €90 definitief?",
        answer:
          "Nee. Het is een conceptprijs op basis van plannen uit maart 2026.",
      },
    ],
  },
};

export default pages;
