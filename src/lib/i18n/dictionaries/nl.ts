import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  locale: "nl",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Alles over het Belgische digitale vignet — voor locals en grensoverschrijdende bestuurders.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Home",
    prices: "Prijzen",
    foreign: "Buitenlandse bestuurders",
    exemptions: "Vrijstellingen",
    fines: "Boetes",
    buy: "Kopen",
    news: "Nieuws & updates",
    privacy: "Privacy",
  },
  meta: {
    home: {
      title: "Belgisch vignet 2027 — prijzen, regels & tips voor buitenlanders",
      description:
        "Onafhankelijke gids over het geplande Belgische digitale vignet vanaf 1 mei 2027. Prijzen, vrijstellingen, boetes en praktische info voor Nederlanders en andere buitenlandse bestuurders.",
    },
    prices: {
      title: "Belgisch vignet prijzen 2027 — dag, maand & jaartarief",
      description:
        "Overzicht van geplande vignetprijzen voor België: €100/jaar, korte periodes vanaf €9/dag. Uitleg per Euro-norm en emissieklasse.",
    },
    foreign: {
      title: "Belgisch vignet voor Nederlanders & buitenlandse auto's",
      description:
        "Praktische gids voor bestuurders uit Nederland, Duitsland en Frankrijk die door België rijden. Wat u volgens de plannen moet weten over het digitale vignet.",
    },
    exemptions: {
      title: "Vrijstellingen Belgisch vignet — motoren, vrachtwagens & meer",
      description:
        "Wie hoeft volgens de plannen géén vignet te betalen? Motoren, vrachtwagens, hulpdiensten en andere vrijstellingen uitgelegd.",
    },
    fines: {
      title: "Boetes Belgisch vignet — handhaving & tolerantieperiode",
      description:
        "Geplande boetes tot €210, ANPR-controles en tolerantie tot 1 juli 2027. Alles over handhaving van het Belgische vignet.",
    },
    buy: {
      title: "Belgisch vignet kopen — wanneer & hoe (verwacht digitaal)",
      description:
        "Het vignet is nog niet te koop. Lees wat er volgens de plannen verwacht wordt: digitaal systeem gekoppeld aan uw kenteken.",
    },
    news: {
      title: "Belgisch vignet nieuws & updates — betrouwbare bronnen uitgelegd",
      description:
        "Onafhankelijke samenvattingen van officieel nieuws over het Belgische vignet met onze redactionele visie. Links naar de originele bronnen.",
    },
    privacy: {
      title: "Privacybeleid — BelgiumVignette.be",
      description:
        "Hoe BelgiumVignette.be omgaat met cookies, analytics, nieuwsbriefgegevens en uw privacy volgens de AVG.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be is een onafhankelijke informatiesite. Wij zijn niet verbonden met de Belgische overheid, Vlaanderen, Wallonië of Brussel.",
    lastUpdated: "Laatst bijgewerkt",
    lastUpdatedDate: "14 juli 2026",
    lastUpdatedIso: "2026-07-14",
    readMore: "Lees meer",
    relatedSite: "https://tolls.be/nl",
    relatedSiteLabel: "Tolls.be — onafhankelijke tol-informatie voor België",
    backToHome: "Terug naar home",
    plannedNotice:
      "De plannen zijn gepresenteerd in maart 2026 en kunnen nog wijzigen. Wij volgen officiële bronnen en passen deze pagina aan zodra er nieuws is.",
    independentSite: "Onafhankelijke informatiesite",
    contactLabel: "Contact",
    cookieSettings: "Cookievoorkeuren",
    tableCategory: "Categorie",
    tablePrice: "Prijs",
  },
  notFound: {
    title: "Pagina niet gevonden",
    description:
      "Deze pagina bestaat niet of is verplaatst. Ga terug naar de homepage of bekijk ons laatste nieuws over het Belgische vignet.",
    homeLink: "Naar homepage",
    newsLink: "Nieuws & updates",
  },
  home: {
    hero: {
      eyebrow: "Gepland vanaf 1 mei 2027",
      title: "Het Belgische digitale vignet, helder uitgelegd",
      subtitle:
        "Vanaf mei 2027 willen Vlaanderen, Wallonië en Brussel dat bestuurders betalen voor het gebruik van hoofdwegen. Geen sticker op uw voorruit — wel een digitaal vignet gekoppeld aan uw kenteken.",
      ctaPrimary: "Bekijk prijzen",
      ctaSecondary: "Info voor buitenlanders",
    },
    quickAnswers: [
      {
        title: "Wie moet betalen?",
        summary:
          "Personenauto's tot 3,5 ton, inclusief buitenlandse voertuigen. Ook als u alleen door België rijdt.",
        href: "foreign",
      },
      {
        title: "Wie is vrijgesteld?",
        summary:
          "Motoren, vrachtwagens (kilometerheffing), tractoren, touringcars, hulpdiensten en politie.",
        href: "exemptions",
      },
      {
        title: "Wat kost het?",
        summary:
          "Jaarvignet vanaf €90 (elektrisch) tot €125 (oudere auto's). Korte periodes vanaf €9 per dag.",
        href: "prices",
      },
    ],
    pricingTitle: "Geplande tarieven in één oogopslag",
    pricingSubtitle:
      "Prijzen gebaseerd op gepubliceerde plannen (maart 2026). Definitieve bedragen kunnen nog wijzigen.",
    annualTableTitle: "Jaarvignet",
    shortTermTableTitle: "Korte periodes",
    annualPricing: [
      { label: "Euro 4 en hoger", value: "€100 / jaar", note: "97%+ van Vlaamse auto's" },
      { label: "Elektrisch / waterstof", value: "€90 / jaar" },
      { label: "Oudere auto's (tot Euro 3)", value: "€125 / jaar" },
    ],
    shortTermPricing: [
      { label: "1 dag", value: "€9" },
      { label: "10 dagen", value: "€12" },
      { label: "1 maand", value: "€19" },
      { label: "2 maanden", value: "€30" },
    ],
    timelineTitle: "Belangrijke data (volgens plannen)",
    timeline: [
      {
        date: "Maart 2026",
        title: "Plannen gepresenteerd",
        description:
          "Vlaamse regering presenteert vignetvoorstel. Goedkeuring Wallonië, Brussel en Europese Commissie volgt nog.",
      },
      {
        date: "1 mei 2027",
        title: "Vignet verplicht",
        description:
          "Digitale vignetplicht voor personenauto's op snelwegen en regionale hoofdwegen.",
      },
      {
        date: "1 juli 2027",
        title: "Boetes van kracht",
        description:
          "Tolerantieperiode eindigt. Handhaving via ANPR-camera's en mobiele controles.",
      },
    ],
    faqTitle: "Veelgestelde vragen",
    faqs: [
      {
        question: "Is het een fysieke sticker?",
        answer:
          "Nee. Volgens de plannen is het een digitaal vignet dat aan uw kentekenplaat gekoppeld wordt. Er komt geen sticker op uw voorruit.",
      },
      {
        question: "Geldt dit ook voor Nederlanders?",
        answer:
          "Ja. EU-regels vereisen dat buitenlandse en Belgische bestuurders gelijk behandeld worden. Ook als u alleen door België rijdt, zult u volgens de plannen een vignet nodig hebben.",
      },
      {
        question: "Moeten motorrijders betalen?",
        answer:
          "Nee. Motoren zijn volgens de aankondiging van ministers Weyts (Vlaanderen) en Desquesnes (Wallonië) expliciet vrijgesteld.",
      },
      {
        question: "Wanneer kan ik een vignet kopen?",
        answer:
          "Er is nog geen officieel verkoopkanaal. Volgens de plannen wordt een digitaal systeem verwacht. Schrijf u in voor updates via onze nieuwsbrief.",
      },
    ],
    sourcesTitle: "Officiële bronnen & achtergrond",
  },
  prices: {
    title: "Prijzen & looptijden",
    intro:
      "Hieronder vindt u een overzicht van de geplande vignetprijzen per emissienorm. De tarieven zijn gebaseerd op aankondigingen uit maart 2026 en kunnen nog worden aangepast.",
    sections: [
      {
        id: "annual",
        title: "Jaarvignet",
        paragraphs: [
          "Het jaarvignet is bedoeld voor regelmatige gebruikers van Belgische hoofdwegen. De prijs hangt af van de Euro-emissienorm van uw voertuig.",
          "In Vlaanderen rijdt meer dan 97% van de personenauto's minstens Euro 4 — voor hen is €100 per jaar gepland.",
        ],
      },
      {
        id: "short",
        title: "Korte periodes",
        paragraphs: [
          "Voor occasionele ritten — bijvoorbeeld vakantieverkeer of een weekendje Antwerpen — zijn kortere vignetten gepland.",
          "Oudere, meer vervuilende auto's (tot Euro 3) betalen volgens de plannen iets hogere bedragen.",
        ],
      },
      {
        id: "road-tax",
        title: "Interactie met verkeersbelasting (Vlaanderen)",
        paragraphs: [
          "Vlaanderen hervormt tegelijk de jaarlijkse verkeersbelasting. Volgens schattingen kan ongeveer de helft van de Vlaamse automobilisten netto meer betalen — tot €100 extra per jaar.",
          "De verlaging van de verkeersbelasting compenseert volgens de plannen niet iedereen volledig voor de vignetkosten.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 en hoger", value: "€100", note: "Jaar" },
      { label: "Elektrisch / waterstof", value: "€90", note: "Jaar" },
      { label: "Tot Euro 3 (ouder)", value: "€125", note: "Jaar" },
    ],
    shortTermTable: [
      { label: "1 dag", value: "€9" },
      { label: "10 dagen", value: "€12" },
      { label: "1 maand", value: "€19" },
      { label: "2 maanden", value: "€30" },
    ],
    euroNormTitle: "Euro-normen in het kort",
    euroNormCategoryHeader: "Norm",
    euroNormDescriptionHeader: "Omschrijving",
    euroNormItems: [
      { norm: "Euro 4+", description: "Auto's vanaf circa 2005–2006. Meeste voertuigen op de weg." },
      { norm: "Elektrisch / H₂", description: "Volledig emissievrij. Laagste tarief gepland." },
      { norm: "Euro 3 en lager", description: "Oudere, meer vervuilende voertuigen. Hoogste tarief." },
    ],
    faqs: [
      {
        question: "Zijn bedrijfsvans aftrekbaar?",
        answer:
          "Volgens de plannen kan de vignetkost voor professionele bestelwagens volledig als beroepskost worden afgetrokken.",
      },
      {
        question: "Gelden de korte periodes voor alle emissieklassen?",
        answer:
          "De bedragen hierboven gelden voor Euro 4 en hoger. Oudere auto's betalen volgens de plannen een iets hoger tarief.",
      },
    ],
  },
  foreign: {
    title: "Buitenlandse bestuurders",
    intro:
      "Meer dan de helft van de kilometers op Belgische wegen wordt volgens schattingen gereden door buitenlandse automobilisten. Als u uit Nederland, Duitsland, Frankrijk of elders komt, is dit wat u volgens de plannen moet weten.",
    sections: [
      {
        id: "eu-rules",
        title: "Gelijke behandeling",
        paragraphs: [
          "Belgische bestuurders moeten ook betalen — EU-regels laten niet toe om alleen buitenlanders te belasten. Dat betekent: ook uw buitenlandse kenteken valt onder het systeem.",
          "Jaarlijks passeren naar schatting zo'n 30 miljoen buitenlandse personenauto's België, vaak zonder significante bijdrage aan wegonderhoud.",
        ],
      },
      {
        id: "digital",
        title: "Digitaal, geen sticker",
        paragraphs: [
          "U hoeft geen fysiek vignet aan te schaffen of op te plakken. Het systeem werkt via kentekenherkenning (ANPR). Zorg dat u vóór vertrek een geldig digitaal vignet hebt.",
        ],
      },
      {
        id: "history",
        title: "Historische context",
        paragraphs: [
          "België probeerde al in 2007 een vignet in te voeren, maar trok het plan in na protesten uit Nederland. Nederlandse ministers hebben ook nu kritiek geuit — er is volgens de huidige plannen geen speciale regeling voor grensregio's.",
        ],
      },
    ],
    countryTips: [
      {
        country: "🇳🇱 Nederland",
        tips: [
          "Populaire routes via E19 (Antwerpen), E40 (Brussel) en E314 (Luik) vallen onder de plannen.",
          "Geen speciale grensregeling voor Zuid-Nederland volgens huidige plannen.",
          "Plan uw vignet vóór vertrek zodra verkoop opent — handhaving via camera's.",
        ],
      },
      {
        country: "🇩🇪 Duitsland",
        tips: [
          "Transit via Aachen–Luik of routes richting Frankrijk vereisen volgens de plannen een vignet.",
          "Korte periodes (1–10 dagen) kunnen interessant zijn voor doorgaand verkeer.",
        ],
      },
      {
        country: "🇫🇷 Frankrijk",
        tips: [
          "Bestuurders uit Wallonië en Noord-Frankrijk rijden regelmatig Belgische regional roads.",
          "Controleer of uw route door België gaat — ook regionale hoofdwegen zijn gepland te vallen onder het vignet.",
        ],
      },
    ],
    faqs: [
      {
        question: "Heb ik een vignet nodig als ik alleen door België rijd?",
        answer:
          "Ja, volgens de plannen geldt het vignet voor gebruik van hoofdwegen, ongeacht of België uw bestemming is of doorgangsland.",
      },
      {
        question: "Wat als mijn kenteken uit een niet-EU-land komt?",
        answer:
          "Details voor niet-EU-kentekens zijn nog niet volledig bekend. Volg officiële aankondigingen zodra het verkoopkanaal opent.",
      },
    ],
  },
  exemptions: {
    title: "Vrijstellingen",
    intro:
      "Niet elk voertuig hoeft volgens de plannen een vignet te betalen. Hier is een overzicht van wie wel en niet onder de regeling valt.",
    sections: [
      {
        id: "motorcycles",
        title: "Motoren vrijgesteld",
        paragraphs: [
          "Motoren en bromfietsen zijn volgens expliciete aankondigingen van Vlaams minister Ben Weyts en Waals minister François Desquesnes uitgesloten van het vignet.",
        ],
      },
      {
        id: "trucks",
        title: "Vrachtwagens",
        paragraphs: [
          "Zware voertuigen vallen niet onder het vignet. Zij betalen al via het bestaande kilometerheffingssysteem (Viapass).",
        ],
      },
    ],
    exemptTableTitle: "Vrijgesteld",
    requiredTableTitle: "Vignet verplicht",
    exemptTable: [
      { label: "Motoren & bromfietsen", value: "Vrijgesteld" },
      { label: "Vrachtwagens (>3,5t)", value: "Vrijgesteld — kilometerheffing" },
      { label: "Tractoren", value: "Vrijgesteld" },
      { label: "Touringcars", value: "Vrijgesteld" },
      { label: "Hulpdiensten & politie", value: "Vrijgesteld" },
      { label: "Defensievoertuigen", value: "Vrijgesteld" },
    ],
    notExemptTable: [
      { label: "Personenauto's (≤3,5t)", value: "Vignet verplicht" },
      { label: "Buitenlandse auto's", value: "Vignet verplicht" },
      { label: "Bestelwagens", value: "Vignet verplicht" },
      { label: "Elektrische auto's", value: "Vignet verplicht (€90/jaar gepland)" },
    ],
    faqs: [
      {
        question: "Is mijn camper vrijgesteld?",
        answer:
          "Als uw camper als personenauto tot 3,5 ton geregistreerd staat, valt u volgens de plannen onder het vignet.",
      },
    ],
  },
  fines: {
    title: "Boetes & handhaving",
    intro:
      "Handhaving wordt volgens de plannen uitgevoerd via automatische kentekenherkenning (ANPR) en mobiele controleteams. Er komt een tolerantieperiode vóór de eerste boetes.",
    sections: [
      {
        id: "tolerance",
        title: "Tolerantieperiode",
        paragraphs: [
          "Van 1 mei tot 1 juli 2027 is volgens de plannen een overgangsperiode gepland. Vanaf 1 juli worden boetes uitgeschreven.",
        ],
      },
      {
        id: "anpr",
        title: "ANPR-controles",
        paragraphs: [
          "Camera's langs snelwegen en regionale hoofdwegen scannen kentekens en controleren of een geldig vignet geregistreerd staat.",
        ],
      },
    ],
    fineTable: [
      { label: "1e overtreding", value: "€70" },
      { label: "2e overtreding", value: "€140" },
      { label: "3e en volgende", value: "€210" },
    ],
    faqs: [
      {
        question: "Krijg ik een boete als ik per ongeluk zonder vignet rijd?",
        answer:
          "Tijdens de tolerantieperiode (mei–juni 2027) worden volgens de plannen nog geen boetes uitgeschreven. Daarna wel — ook voor buitenlandse kentekens.",
      },
    ],
  },
  buy: {
    title: "Vignet kopen",
    intro:
      "Op dit moment is er nog geen officieel verkoopkanaal voor het Belgische vignet. De plannen voorzien in een digitaal systeem, maar details over de website of app zijn nog niet bekend.",
    sections: [
      {
        id: "status",
        title: "Huidige status",
        paragraphs: [
          "De plannen moeten nog worden goedgekeurd door Wallonië, Brussel en de Europese Commissie. Pas daarna wordt het verkoopproces verwacht.",
          "Wij updaten deze pagina zodra er officiële informatie is over waar en hoe u een vignet kunt aanschaffen.",
        ],
      },
      {
        id: "expected",
        title: "Wat wordt verwacht",
        paragraphs: [
          "U registreert uw kenteken online. Het vignet wordt digitaal gekoppeld — geen fysieke sticker nodig.",
          "Korte periodes (dag, week, maand) en jaarvignetten worden volgens de plannen aangeboden.",
        ],
      },
    ],
    statusBadge: "Nog niet beschikbaar",
    steps: [
      {
        title: "Wacht op officiële lancering",
        description: "Verkoop start naar verwachting vóór 1 mei 2027.",
      },
      {
        title: "Registreer uw kenteken",
        description: "Digitaal systeem — geen sticker op uw voorruit.",
      },
      {
        title: "Kies looptijd",
        description: "Dag, 10 dagen, maand, 2 maanden of jaarvignet.",
      },
      {
        title: "Rij met geldig vignet",
        description: "ANPR-camera's controleren automatisch.",
      },
    ],
    faqs: [
      {
        question: "Kan ik nu al reserveren?",
        answer: "Nee. Er is nog geen reserveringssysteem. Schrijf u in voor onze nieuwsbrief om op de hoogte te blijven.",
      },
    ],
  },
  privacy: {
    title: "Privacybeleid",
    intro:
      "BelgiumVignette.be respecteert uw privacy. Dit beleid legt uit welke gegevens wij verzamelen en waarom.",
    sections: [
      {
        id: "controller",
        title: "Verantwoordelijke",
        paragraphs: [
          "BelgiumVignette.be is een onafhankelijke informatiesite. Voor privacyvragen: info@tolls.be.",
        ],
      },
      {
        id: "newsletter",
        title: "Nieuwsbrief",
        paragraphs: [
          "Als u zich inschrijft, slaan wij uw e-mailadres, taalvoorkeur en tijdstip van toestemming op in Supabase (EU-hosting). Wij gebruiken dit uitsluitend om u te informeren over het Belgische vignet.",
          "U kunt zich op elk moment uitschrijven via info@tolls.be.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies, analytics & toestemming",
        paragraphs: [
          "Essentiële opslag: wij bewaren uw cookievoorkeur in localStorage op uw apparaat. Dit is nodig om uw keuze te onthouden. Rechtsgrond: gerechtvaardigd belang (Art. 6 lid 1 onder f AVG) en/or uw toestemming waar vereist.",
          "Analytics (optioneel): Vercel Analytics verzamelt anonieme paginaweergaven (geen cookies geplaatst door ons voor analytics). Vercel kan technische gegevens zoals pagina-URL, referrer en apparaattype verwerken. Analytics wordt uitsluitend geladen nadat u via de cookiebanner toestemming geeft. Rechtsgrond: toestemming (Art. 6 lid 1 onder a AVG). U kunt toestemming intrekken via Cookievoorkeuren in de footer.",
          "Google Search Console & Bing Webmaster Tools: wij kunnen een verificatiemeta-tag op de site plaatsen om eigendom te bewijzen bij zoekmachines. Deze tags stellen geen trackingcookies in en verzamelen geen bezoekersdata.",
          "Bewaartermijn cookievoorkeur: tot u deze wist of wijziging van het beleid (versie 2026-07-14) u opnieuw om toestemming vraagt.",
        ],
      },
      {
        id: "news-editorial",
        title: "Nieuws, samenvattingen & redactionele inhoud",
        paragraphs: [
          "Onze nieuwsrubriek publiceert onafhankelijke samenvattingen van openbaar beschikbare berichtgeving over het Belgische vignet. Deze pagina's zijn geen reproductie van de originele artikelen.",
          "Samenvattingen en vertalingen kunnen met behulp van AI worden gemaakt en kunnen in formulering afwijken van de bron. Wij linken altijd naar de oorspronkelijke uitgever. Ons redactioneel commentaar ('Onze visie') is onafhankelijk geschreven en vertegenwoordigt niet de oorspronkelijke uitgever of de Belgische overheid.",
          "Afbeeldingen op nieuwsartikelen kunnen afkomstig zijn van het gelinkte originele artikel of persbureaus, met credits waar van toepassing. Dergelijk materiaal blijft eigendom van de respectievelijke rechthebbenden. Wij tonen het te goeder trouw ter referentie, naast een link naar de bron. Als u meent dat uw content onjuist wordt gebruikt, neem contact op via info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Uw rechten (AVG)",
        paragraphs: [
          "U heeft recht op inzage, correctie, verwijdering en bezwaar. Neem contact op via info@tolls.be.",
        ],
      },
    ],
    lastUpdated: "14 juli 2026",
  },
  news: {
    title: "Nieuws & updates",
    intro:
      "We volgen betrouwbare officiële en mediabronnen over het geplande Belgische vignet. Elk artikel vat de oorspronkelijke berichtgeving samen en voegt onze onafhankelijke visie toe — met een directe link naar de bron.",
    latestArticles: "Laatste artikelen",
    summaryTitle: "Samenvatting",
    summaryFromSource: "van originele bron:",
    ourTakeTitle: "Onze visie",
    sourceTitle: "Originele bron",
    readArticle: "Artikel lezen",
    backToNews: "Terug naar nieuws",
    publishedOn: "Gepubliceerd",
    sourceLabel: "Bron",
    sourceDisclaimer:
      "We vatten betrouwbare bronnen samen en linken naar het originele artikel. Onze visie is onafhankelijk redactioneel commentaar, geen officiële overheidsinformatie.",
    translationDisclaimer:
      "De samenvatting en vertaling op deze pagina zijn met behulp van AI gemaakt op basis van het oorspronkelijke artikel. Raadpleeg altijd de bron hieronder voor de officiële formulering.",
    articleAttributionTitle: "Onafhankelijke samenvatting — niet het originele artikel",
    articleAttributionIndependence:
      "BelgiumVignette.be is een onafhankelijke informatiesite. Wij zijn niet verbonden met, goedgekeurd door of optredend namens de oorspronkelijke uitgever. Deze pagina vat openbaar beschikbare berichtgeving samen en voegt ons eigen redactioneel commentaar toe. Het is geen reproductie van het originele artikel.",
    articleAttributionAi:
      "De samenvatting en vertaling zijn met behulp van AI gemaakt en kunnen in formulering afwijken van het origineel. Raadpleeg altijd de onderstaande bron voor de officiële tekst.",
    articleAttributionReadOriginal: "Lees het originele artikel bij",
    articleAttributionCopyright:
      "Het originele artikel, afbeeldingen en overige media blijven eigendom van de respectievelijke rechthebbenden. Wij linken te goeder trouw naar de bron ter referentie. Fotocredits staan hierboven vermeld waar van toepassing.",
    tableOfContents: "Op deze pagina",
    relatedArticles: "Meer nieuws & updates",
    noArticles: "Nog geen artikelen gepubliceerd. Kom binnenkort terug.",
  },
  newsletter: {
    title: "Blijf op de hoogte",
    description:
      "Ontvang een melding wanneer het officiële verkoopkanaal live gaat en wanneer er belangrijke updates zijn.",
    emailPlaceholder: "Uw e-mailadres",
    consentLabel:
      "Ik ga akkoord met het ontvangen van updates en heb het privacybeleid gelezen.",
    submit: "Inschrijven",
    success: "Bedankt! U bent ingeschreven.",
    error: "Er ging iets mis. Probeer het opnieuw.",
    privacyLink: "Privacybeleid",
  },
  cookieBanner: {
    title: "Cookies & privacy",
    description:
      "Wij gebruiken essentiële opslag voor uw cookievoorkeur. Optioneel: Vercel Analytics (anonieme paginaweergaven). Geen analytics vóór uw keuze. Accepteer, weiger of kies zelf per categorie.",
    essentialTitle: "Essentieel",
    essentialDescription:
      "Opslaan van uw cookievoorkeur in localStorage, zodat wij uw keuze onthouden.",
    alwaysOn: "Altijd actief — vereist om uw voorkeur te onthouden.",
    analyticsTitle: "Analytics (Vercel Analytics)",
    analyticsDescription:
      "Anonieme statistieken over paginaweergaven om de site te verbeteren. Alleen actief na toestemming.",
    acceptAll: "Alles accepteren",
    rejectAll: "Alles weigeren",
    savePreferences: "Voorkeuren opslaan",
    manageSettings: "Instellingen",
    closeSettings: "Sluiten",
    privacyLink: "Privacybeleid",
  },
  sources: [
    {
      title: "Vlaamse regering — vignetvoorstel",
      url: "https://www.vlaanderen.be",
      description: "Officiële aankondigingen Vlaanderen",
    },
    {
      title: "Viapass — kilometerheffing vrachtwagens",
      url: "https://www.viapass.be",
      description: "Bestaand systeem voor zware voertuigen",
    },
    {
      title: "Europese Commissie — staatssteun",
      url: "https://ec.europa.eu",
      description: "Beoordeling interregionale akkoorden",
    },
  ],
};

export default dictionary;
