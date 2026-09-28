import type { BaseDictionary } from "../types";
import { frTolls } from "../tolls/fr";
import { buildRateMatrix } from "../rate-matrix";

const frRateMatrix = buildRateMatrix({
  vehicleHeader: "Véhicule",
  dayHeader: "1 jour",
  tenDaysHeader: "10 jours",
  monthHeader: "1 mois",
  twoMonthsHeader: "2 mois",
  yearHeader: "1 an",
  euro03: "Euro 0 à 3",
  euro4: "Euro 4 et plus",
  zeroEmission: "Zéro émission",
});

const dictionary: BaseDictionary = {
  locale: "fr",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Tout sur la vignette routière numérique belge — pour les résidents et les automobilistes étrangers.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Accueil",
    prices: "Tarifs",
    foreign: "Conducteurs étrangers",
    exemptions: "Exemptions",
    fines: "Amendes",
    buy: "Acheter",
    tolls: "Péages",
    news: "Actualités & mises à jour",
    privacy: "Confidentialité",
  },
  meta: {
    home: {
      title: "Vignette Belgique 2027 : prix, autoroutes & achat",
      description:
        "La Belgique prévoit une vignette routière dès mai 2027. Découvrez le prix, les véhicules concernés, les exemptions et où acheter la vignette belge.",
    },
    prices: {
      title: "Tarifs vignette Belgique 2027 : prix par norme Euro et durée",
      description:
        "Tableau complet des tarifs de la vignette routière belge 2027 par norme Euro et durée — de 8,10 €/jour (zéro émission) à 125 €/an (Euro 0–3).",
    },
    foreign: {
      title: "Les voitures étrangères ont-elles besoin d'une vignette belge en 2027 ?",
      description:
        "Oui — selon les plans actuels, les voitures de tourisme étrangères auront besoin d'une vignette belge dès le 1er mai 2027 sur les routes couvertes. Guide pour les conducteurs néerlandais, allemands et français.",
    },
    exemptions: {
      title: "Exemptions vignette Belgique — motos, camions & plus",
      description:
        "Qui est exempté selon les plans ? Motos, poids lourds, services d'urgence et autres catégories expliquées.",
    },
    fines: {
      title: "Amendes vignette Belgique — contrôles & période de tolérance",
      description:
        "Amendes prévues jusqu'à 210 €, contrôles ANPR et tolérance jusqu'au 1er juillet 2027.",
    },
    buy: {
      title: "Acheter la vignette belge — vente prévue le 1er mars 2027",
      description:
        "Selon les plans actuels, la vente en ligne de la vignette routière belge est prévue à partir du 1er mars 2027. Obligatoire dès le 1er mai 2027. Source officielle : autorités flamandes.",
    },
    tolls: {
      title: "Péages en Belgique 2027 : autoroutes, vignette et tarifs",
      description:
        "Les autoroutes sont-elles payantes en Belgique ? Découvrez les péages, la vignette prévue dès mai 2027, les tarifs et les règles pour voitures étrangères.",
    },
    news: {
      title: "Actualités vignette Belgique — sources fiables expliquées",
      description:
        "Résumés indépendants des actualités officielles sur la vignette belge avec notre point de vue éditorial. Liens vers les sources originales.",
    },
    privacy: {
      title: "Politique de confidentialité — BelgiumVignette.be",
      description:
        "Comment BelgiumVignette.be gère les cookies, l'analytique, la newsletter et vos données personnelles (RGPD).",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be est un site d'information indépendant. Nous ne sommes pas affiliés au gouvernement belge, à la Flandre, à la Wallonie ou à Bruxelles.",
    lastUpdated: "Dernière mise à jour",
    lastUpdatedDate: "28 septembre 2026",
    lastUpdatedIso: "2026-09-28",
    readMore: "En savoir plus",
    relatedSite: "https://tolls.be/fr",
    relatedSiteLabel: "Tolls.be — informations indépendantes sur les péages en Belgique",
    ownedManagedBy: "Détenu et géré par",
    operatorName: "2xGen",
    operatorUrl: "https://2xgen.com/about",
    backToHome: "Retour à l'accueil",
    plannedNotice:
      "Les plans présentés en mars 2026 peuvent encore évoluer. Nous suivons les sources officielles et mettons à jour cette page dès que de nouvelles informations sont disponibles.",
    independentSite: "Info vignette routière belge",
    contactLabel: "Contact",
    cookieSettings: "Préférences cookies",
    tableCategory: "Catégorie",
    tablePrice: "Tarif",
    lastChecked: "Dernière vérification",
  },
  notFound: {
    title: "Page introuvable",
    description:
      "Cette page n'existe pas ou a été déplacée. Retournez à l'accueil ou consultez nos dernières actualités sur la vignette belge.",
    homeLink: "Accueil",
    newsLink: "Actualités & mises à jour",
  },
  home: {
    hero: {
      eyebrow: "Prévu dès le 1er mai 2027",
      title: "Vignette Belgique 2027 : avez-vous besoin d'une vignette pour la Belgique ?",
      subtitle:
        "La Belgique prévoit d'introduire une vignette routière numérique dès le 1er mai 2027. Découvrez si vous en avez besoin, combien elle coûte, qui est exempté et quand les ventes débutent.",
      ctaPrimary: "Vérifiez si vous avez besoin d'une vignette",
      ctaSecondary: "Soyez averti à l'ouverture des ventes",
    },
    decisionTree: {
      title: "Avez-vous besoin d'une vignette ?",
      options: [
        { label: "Voiture belge", href: "prices" },
        { label: "Voiture néerlandaise", href: "foreign", anchor: "netherlands" },
        { label: "Voiture allemande", href: "foreign", anchor: "germany" },
        { label: "Voiture française", href: "foreign", anchor: "france" },
        { label: "Camping-car / fourgon", href: "exemptions" },
      ],
    },
    quickAnswers: [
      {
        title: "Qui doit acheter une vignette en Belgique ?",
        summary:
          "Voitures particulières jusqu'à 3,5 tonnes, y compris les véhicules étrangers en transit sur les routes concernées.",
        href: "foreign",
        linkLabel: "Guide pour les conducteurs étrangers",
      },
      {
        title: "Qui est exempté de la vignette belge ?",
        summary:
          "Motos, camions (taxe au kilomètre), tracteurs, autocars, services d'urgence et police — selon les plans actuels.",
        href: "exemptions",
        linkLabel: "Voir toutes les exemptions",
      },
      {
        title: "Quel est le prix de la vignette Belgique en 2027 ?",
        summary:
          "Le prix dépend de la norme Euro et de la durée : dès 8,10 €/jour (zéro émission) et 9 €/jour (Euro 4+), jusqu'à 90–125 € par an.",
        href: "prices",
        linkLabel: "Guide complet des tarifs",
      },
    ],
    overview: {
      title: "Vignette routière en Belgique : ce qui est prévu pour 2027",
      paragraphs: [
        "La Belgique prévoit d'introduire une vignette routière numérique à partir du 1er mai 2027. La vignette belge concernerait les voitures particulières jusqu'à 3,5 tonnes circulant sur les autoroutes et certaines routes régionales principales.",
        "Le système concernerait aussi les voitures étrangères. Les automobilistes français, néerlandais, allemands et les autres conducteurs étrangers devraient donc acheter une vignette pour circuler sur les routes concernées en Belgique.",
        "Il ne s'agirait pas d'un autocollant à placer sur le pare-brise. La vignette autoroutière belge serait numérique et liée à la plaque d'immatriculation, avec des contrôles notamment effectués par caméras ANPR.",
        "Selon les tarifs publiés par les autorités flamandes, le prix dépend de la norme Euro et de la durée : dès 8,10 € par jour pour les véhicules zéro émission et 9 € par jour pour Euro 4+, jusqu'à 90–125 € par an. Des options de 10 jours, 1 mois et 2 mois sont également prévues.",
        "Les motos seraient exemptées selon les plans actuels. Les montants et modalités définitifs doivent toutefois encore être confirmés avant l'entrée en vigueur.",
      ],
    },
    intentSections: [
      {
        id: "autoroutes",
        title: "Faut-il une vignette pour les autoroutes en Belgique ?",
        paragraphs: [
          "Selon les plans actuels, une vignette routière numérique deviendrait obligatoire sur les autoroutes belges et certaines routes régionales principales à partir du 1er mai 2027.",
          "Aujourd'hui, la plupart des autoroutes belges restent gratuites pour les voitures particulières. Le projet de vignette changerait cette situation : l'accès aux autoroutes et à une partie du réseau régional à vitesse élevée serait soumis à une vignette liée à la plaque d'immatriculation.",
          "Si vous circulez uniquement sur des routes locales, une vignette ne serait pas nécessaire selon les informations publiées. En pratique, éviter entièrement les autoroutes et routes régionales principales est souvent difficile pour un trajet interurbain ou un transit.",
        ],
        link: {
          href: "tolls",
          label: "Péages et autoroutes en Belgique",
        },
      },
      {
        id: "motos",
        title: "Les motos ont-elles besoin d'une vignette en Belgique ?",
        paragraphs: [
          "Non. Selon les annonces des autorités, les motos seraient explicitement exemptées de la vignette belge.",
          "L'obligation viserait les véhicules à moteur d'au moins quatre roues jusqu'à 3,5 tonnes — notamment les voitures, certains utilitaires légers et les camping-cars. Les poids lourds restent couverts par le système de taxe au kilomètre Viapass.",
        ],
        link: {
          href: "exemptions",
          label: "Voir le détail des exemptions",
        },
      },
      {
        id: "acheter",
        title: "Où acheter la vignette Belgique ?",
        paragraphs: [
          "La vente officielle n'a pas encore commencé. Selon les plans actuels, l'achat en ligne serait possible à partir du 1er mars 2027, via le site officiel ou un partenaire agréé.",
          "Il n'existe aujourd'hui aucun portail de vente officiel. Les sites qui proposent déjà une réservation ou un paiement ne sont pas le canal officiel.",
        ],
        link: {
          href: "buy",
          label: "Acheter la vignette Belgique : dates et canaux officiels",
        },
      },
    ],
    pricingTitle: "Quel est le prix de la vignette Belgique en 2027 ?",
    pricingParagraphs: [
      "Le prix de la vignette routière belge dépend de la norme Euro de votre véhicule et de la durée de validité. Pour les voitures Euro 4 ou plus, les tarifs prévus commencent à 9 € pour 1 jour et 100 € pour 1 an. Les véhicules plus anciens paient davantage, tandis que les véhicules zéro émission bénéficient d'un tarif plus bas.",
    ],
    pricingLinkLabel: "Voir tous les tarifs de la vignette belge",
    pricingLinkSecondaryLabel: "Guide complet des tarifs",
    pricingMatrixTitle: "Tarifs prévus",
    rateMatrix: frRateMatrix,
    pricingNote:
      "Ce sont les tarifs actuellement publiés par les autorités flamandes. L'introduction reste soumise à une approbation définitive.",
    timelineTitle: "Dates clés (selon les plans)",
    timeline: [
      {
        date: "Mars 2026",
        title: "Plans présentés",
        description:
          "Le gouvernement flamand présente sa proposition. Approbation wallonne, bruxelloise et de la Commission européenne en attente.",
      },
      {
        date: "1er mai 2027",
        title: "Vignette obligatoire",
        description:
          "Obligation de vignette numérique sur autoroutes et routes régionales principales.",
      },
      {
        date: "1er juillet 2027",
        title: "Amendes appliquées",
        description:
          "Fin de la période de tolérance. Contrôles via caméras ANPR et unités mobiles.",
      },
    ],
    faqTitle: "Questions fréquentes",
    faqs: [
      {
        question: "S'agit-il d'un autocollant ?",
        answer:
          "Non. Selon les plans, il s'agit d'une vignette numérique liée à votre plaque. Aucun sticker sur le pare-brise.",
      },
      {
        question: "Faut-il une vignette pour les autoroutes en Belgique ?",
        answer:
          "Selon les plans actuels, oui à partir du 1er mai 2027 sur les autoroutes belges et certaines routes régionales principales. Les routes locales resteraient hors obligation.",
      },
      {
        question: "Les motos ont-elles besoin d'une vignette en Belgique ?",
        answer:
          "Non. Les motos sont explicitement exemptées selon les annonces des ministres Weyts (Flandre) et Desquesnes (Wallonie).",
      },
      {
        question: "Les voitures françaises doivent-elles payer ?",
        answer:
          "Oui. Les règles de l'UE exigent un traitement égal. Même en transit, les conducteurs français devraient disposer d'une vignette sur les routes concernées.",
      },
      {
        question: "Où acheter la vignette Belgique ?",
        answer:
          "La vente officielle n'a pas encore commencé. Selon les plans, l'achat en ligne est prévu à partir du 1er mars 2027 via le canal officiel ou un partenaire agréé.",
      },
    ],
    sourcesTitle: "Sources officielles",
  },
  prices: {
    title: "Tarifs vignette Belgique 2027 : prix par norme Euro et durée",
    intro:
      "Le prix prévu de la vignette routière belge dépend de deux facteurs : la norme Euro de votre véhicule et la durée de validité de la vignette. Les autorités flamandes ont publié des tarifs pour 1 jour, 10 jours, 1 mois, 2 mois et 1 an.",
    leadParagraphs: [
      "Pour une voiture Euro 4 ou plus, la vignette belge coûte selon les tarifs actuels 9 € pour 1 jour, 12 € pour 10 jours et 100 € pour un an. Les véhicules zéro émission paient moins et les véhicules Euro 0 à Euro 3 paient davantage.",
      "La vignette est prévue dès le 1er mai 2027. L'achat devrait être possible à partir du 1er mars 2027. L'introduction reste soumise à une approbation définitive.",
    ],
    matrixTitle: "Tarifs vignette routière belge 2027",
    rateMatrix: frRateMatrix,
    matrixNote:
      "Ces tarifs sont publiés par les autorités flamandes. Le prix ne dépend donc pas seulement de la durée dont vous avez besoin, mais aussi de la norme Euro de votre véhicule.",
    buyLinkParagraph:
      "[[buy|Voir où et quand acheter la vignette belge]].",
    categorySections: [
      {
        id: "euro-4",
        title: "Combien coûte une vignette belge pour Euro 4 et plus ?",
        paragraphs: [
          "Pour les véhicules Euro 4 ou plus, les tarifs publiés sont :",
        ],
        list: [
          "1 jour : 9 €",
          "10 jours : 12 €",
          "1 mois : 19 €",
          "2 mois : 30 €",
          "1 an : 100 €",
        ],
        linkParagraph:
          "C'est la catégorie dans laquelle se situe une grande partie du parc actuel. Pour un court transit en Belgique, une vignette d'un jour ou de 10 jours peut donc suffire. Qui utilise régulièrement les routes régionales et autoroutes belges peut comparer la vignette annuelle aux durées plus courtes. En savoir plus sur la [[dailyVignette|vignette journalière]] ou consulter la [[annualVignette|vignette annuelle]].",
      },
      {
        id: "euro-0-3",
        title: "Combien coûte une vignette belge pour Euro 0 à Euro 3 ?",
        paragraphs: [
          "Les véhicules plus anciens Euro 0, Euro 1, Euro 2 ou Euro 3 relèvent de la catégorie tarifaire la plus élevée.",
          "Les prix prévus vont de 11,25 € pour un jour à 125 € pour un an.",
        ],
        tableTitle: "Tarif Euro 0–3",
        table: [
          { label: "1 jour", value: "11,25 €" },
          { label: "10 jours", value: "15 €" },
          { label: "1 mois", value: "23,75 €" },
          { label: "2 mois", value: "37,50 €" },
          { label: "1 an", value: "125 €" },
        ],
      },
      {
        id: "electrique",
        title: "Combien coûte la vignette pour une voiture électrique ?",
        paragraphs: [
          "Pour un véhicule zéro émission, le tarif le plus bas s'applique. Selon le tableau actuel, la vignette coûte 8,10 € pour un jour et 90 € pour une année complète.",
        ],
        tableTitle: "Tarif zéro émission",
        table: [
          { label: "1 jour", value: "8,10 €" },
          { label: "10 jours", value: "10,80 €" },
          { label: "1 mois", value: "17,10 €" },
          { label: "2 mois", value: "27 €" },
          { label: "1 an", value: "90 €" },
        ],
        linkParagraph:
          "[[electricVignette|En savoir plus sur la vignette belge pour voitures électriques]].",
      },
    ],
    durationSection: {
      id: "duree",
      title: "Quelle durée me faut-il ?",
      paragraphs: [
        "Selon les plans actuels, vous pouvez choisir parmi cinq périodes de validité :",
        "La meilleure durée dépend de la fréquence et de la durée d'utilisation des routes où la vignette sera obligatoire.",
        "Consultez les explications distinctes sur la [[dailyVignette|vignette journalière]], la [[monthlyVignette|vignette mensuelle]] et la [[annualVignette|vignette annuelle]].",
      ],
      list: [
        "1 jour — pour un court transit ou une excursion d'une journée.",
        "10 jours — par exemple pour des vacances ou une visite plus longue.",
        "1 mois — pour plusieurs trajets sur quelques semaines.",
        "2 mois — pour un séjour plus long ou un usage temporaire régulier.",
        "1 an — pour les conducteurs qui circulent régulièrement sur les routes régionales et autoroutes belges.",
      ],
    },
    whenSection: {
      id: "quand",
      title: "Quand ces tarifs s'appliquent-ils ?",
      paragraphs: [
        "La vignette routière numérique est prévue dès le 1er mai 2027. Selon les informations officielles actuelles, elle pourrait être achetée en ligne dès le 1er mars 2027.",
        "La mise en œuvre pratique se poursuit et l'introduction reste soumise à une approbation définitive.",
        "Vous voulez savoir comment l'achat fonctionnera ? Consultez [[buy|Acheter la vignette belge]]. Pour toutes les règles, véhicules et dates importantes, voir notre guide complet sur la [[home|vignette routière belge 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Interaction avec la taxe de circulation (Flandre)",
        paragraphs: [
          "La Flandre réforme simultanément la taxe de circulation annuelle. Selon les estimations, environ la moitié des automobilistes flamands pourraient payer plus net — jusqu'à 100 € de plus par an.",
          "La baisse de la taxe de circulation ne compense pas entièrement les coûts de vignette pour tout le monde selon les plans. Ceci est une information de contexte ; les tarifs de vignette ci-dessus s'appliquent indépendamment de cette réforme.",
        ],
      },
    ],
    euroNormTitle: "Normes Euro en bref",
    euroNormCategoryHeader: "Norme",
    euroNormDescriptionHeader: "Description",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Véhicules à partir de ~2005–2006. La majorité du parc. Tarif jour 9 €, an 100 €.",
      },
      {
        norm: "Zéro émission",
        description: "Entièrement zéro émission (électrique / hydrogène). Tarif le plus bas : dès 8,10 €/jour, 90 €/an.",
      },
      {
        norm: "Euro 3 et moins",
        description: "Véhicules plus anciens et polluants. Tarif le plus élevé : dès 11,25 €/jour, 125 €/an.",
      },
    ],
    vignettePagesTitle: "Par type de vignette",
    faqs: [
      {
        question: "Quel est le tarif journalier le plus bas prévu ?",
        answer:
          "Selon les autorités flamandes, le tarif journalier le plus bas est de 8,10 € pour les véhicules zéro émission. Pour Euro 4 et plus, c'est 9 € ; pour Euro 0 à 3, c'est 11,25 €.",
      },
      {
        question: "Les courtes durées s'appliquent-elles à toutes les classes d'émission ?",
        answer:
          "Oui. Chaque durée (1 jour, 10 jours, 1 mois, 2 mois, 1 an) a son propre tarif par catégorie de norme Euro. Les montants diffèrent selon la catégorie.",
      },
      {
        question: "Les camionnettes professionnelles sont-elles déductibles ?",
        answer:
          "Selon les plans, le coût de la vignette pour les utilitaires professionnels pourrait être entièrement déductible.",
      },
    ],
  },
  foreign: {
    title: "Les voitures étrangères ont-elles besoin d'une vignette belge ?",
    intro:
      "Oui, selon les plans actuels. Les voitures de tourisme immatriculées à l'étranger auront besoin d'une vignette belge dès le 1er mai 2027 lorsqu'elles empruntent les routes belges couvertes. Le système prévu ne distingue pas les plaques belges des plaques étrangères — une voiture immatriculée aux Pays-Bas, en France, en Allemagne ou dans un autre pays devrait nécessiter la même vignette numérique qu'un véhicule belge. Les règles définitives pourront encore évoluer jusqu'à l'approbation et le lancement officiels du système.",
    sections: [
      {
        id: "eu-rules",
        title: "Traitement égal",
        paragraphs: [
          "Les Belges paieront aussi — les règles de l'UE interdisent de taxer uniquement les étrangers. Votre plaque étrangère est couverte par le même système prévu.",
          "On estime à 30 millions le nombre de voitures de tourisme étrangères qui traversent la Belgique chaque année.",
        ],
      },
      {
        id: "digital",
        title: "Système numérique",
        paragraphs: [
          "Pas de vignette physique à acheter ou à afficher. Le système devrait utiliser la reconnaissance automatique des plaques (ANPR). Achetez-la avant de rouler sur les routes couvertes.",
        ],
      },
      {
        id: "history",
        title: "Contexte historique",
        paragraphs: [
          "La Belgique avait tenté une vignette en 2007, abandonnée après les protestes néerlandais. Des ministres néerlandais ont de nouveau exprimé leur inquiétude — et aucun régime frontalier spécial pour les pays voisins n'a encore été annoncé dans les plans actuels.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Pays-Bas",
        tips: [
          "Oui — les voitures de tourisme immatriculées aux Pays-Bas devraient avoir besoin d'une vignette belge dès le 1er mai 2027 sur les routes belges couvertes.",
          "Cela concerne des itinéraires fréquents comme Pays-Bas → Anvers, Pays-Bas → Bruxelles et le transit Pays-Bas → Luxembourg/France.",
          "Aucune exemption n'est actuellement annoncée pour les régions frontalières néerlandaises.",
        ],
      },
      {
        id: "germany",
        country: "Allemagne",
        tips: [
          "Oui — les voitures de tourisme immatriculées en Allemagne devraient avoir besoin d'une vignette belge dès le 1er mai 2027 sur les routes belges couvertes.",
          "Cela inclut des itinéraires de transit courants comme Aix-la-Chapelle → Liège et Allemagne → France via la Belgique.",
          "Les options à court terme (1–10 jours) prévues dans les plans peuvent convenir au trafic de passage.",
        ],
      },
      {
        id: "france",
        country: "France",
        tips: [
          "Oui — les voitures de tourisme immatriculées en France devraient avoir besoin d'une vignette belge dès le 1er mai 2027 sur les routes belges couvertes.",
          "C'est particulièrement pertinent pour les trajets Nord de la France → Belgique et les itinéraires de transit France → Pays-Bas/Allemagne.",
          "Les routes couvertes comprennent les autoroutes et les routes principales régionales prévues — pas seulement le transit longue distance.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ai-je besoin d'une vignette en simple transit ?",
        answer:
          "Oui — selon les plans actuels, dès le 1er mai 2027 l'utilisation des routes principales belges couvertes nécessite une vignette, quelle que soit la destination. Les règles définitives pourront encore changer avant le lancement.",
      },
      {
        question: "Les voitures étrangères paient-elles comme les voitures belges ?",
        answer:
          "Oui. Le système prévu applique la même vignette numérique aux plaques belges et étrangères. Les règles européennes d'égalité de traitement expliquent pourquoi les étrangers ne peuvent pas être taxés seuls.",
      },
    ],
  },
  exemptions: {
    title: "Exemptions",
    intro: "Tous les véhicules ne paieront pas selon les plans. Voici qui est concerné et qui ne l'est pas.",
    sections: [
      {
        id: "motorcycles",
        title: "Motos exemptées",
        paragraphs: [
          "Motos et cyclomoteurs explicitement exclus selon les ministres Weyts et Desquesnes.",
        ],
      },
      {
        id: "trucks",
        title: "Poids lourds",
        paragraphs: [
          "Les camions ne sont pas visés — ils paient déjà via le système de taxe kilométrique (Viapass).",
        ],
      },
    ],
    exemptTableTitle: "Exempté",
    requiredTableTitle: "Vignette obligatoire",
    exemptTable: [
      { label: "Motos & cyclomoteurs", value: "Exempté" },
      { label: "Poids lourds (>3,5t)", value: "Exempté — taxe km" },
      { label: "Tracteurs", value: "Exempté" },
      { label: "Autocars", value: "Exempté" },
      { label: "Urgences & police", value: "Exempté" },
      { label: "Défense", value: "Exempté" },
    ],
    notExemptTable: [
      { label: "Voitures (≤3,5t)", value: "Vignette obligatoire" },
      { label: "Véhicules étrangers", value: "Vignette obligatoire" },
      { label: "Utilitaires", value: "Vignette obligatoire" },
      { label: "Véhicules électriques", value: "Obligatoire (90 €/an prévu)" },
    ],
    faqs: [
      {
        question: "Mon camping-car est-il exempté ?",
        answer: "S'il est immatriculé comme voiture ≤3,5t, il est concerné selon les plans.",
      },
    ],
  },
  fines: {
    title: "Amendes & contrôles",
    intro:
      "Contrôles par ANPR et équipes mobiles. Période de tolérance prévue avant les premières amendes.",
    sections: [
      {
        id: "tolerance",
        title: "Période de tolérance",
        paragraphs: [
          "Du 1er mai au 1er juillet 2027, tolérance prévue. Amendes à partir du 1er juillet.",
        ],
      },
      {
        id: "anpr",
        title: "Contrôles ANPR",
        paragraphs: [
          "Caméras le long des autoroutes et routes principales vérifient la validité de la vignette.",
        ],
      },
    ],
    fineTable: [
      { label: "1re infraction", value: "70 €" },
      { label: "2e infraction", value: "140 €" },
      { label: "3e et suivantes", value: "210 €" },
    ],
    faqs: [
      {
        question: "Amende si j'oublie la vignette ?",
        answer: "Pas d'amende pendant la tolérance (mai–juin 2027). Ensuite oui, y compris pour plaques étrangères.",
      },
    ],
  },
  buy: {
    title: "Quand puis-je acheter une vignette belge ?",
    intro:
      "Selon les plans actuels, la vente en ligne est prévue à partir du 1er mars 2027. La vignette routière deviendrait obligatoire dès le 1er mai 2027. Les conditions définitives et le portail de vente officiel peuvent encore changer.",
    independenceNotice:
      "BelgiumVignette.be est un site d'information indépendant et n'est ni un site officiel du gouvernement belge, ni un vendeur agréé de la vignette routière.",
    sections: [
      {
        id: "when",
        title: "Quand la vente ouvre-t-elle ?",
        paragraphs: [
          "Les autorités flamandes indiquent que vous pourrez acheter la vignette en ligne à partir du 1er mars 2027, via le site officiel ou un partenaire agréé.",
          "Il n'existe pas encore de portail de vente : vous ne pouvez ni réserver ni payer aujourd'hui. Les sites qui le proposent déjà ne sont pas le canal officiel.",
        ],
      },
      {
        id: "expected",
        title: "Ce qui est attendu",
        paragraphs: [
          "La vignette sera numérique et liée à la plaque d'immatriculation — pas d'autocollant sur le pare-brise.",
          "Selon les plans, vous choisissez une durée de 1 jour, 10 jours, 1 mois, 2 mois ou 1 an.",
        ],
      },
    ],
    statusBadge: "Vente prévue le 1er mars 2027",
    officialSourceLabel: "Source officielle",
    steps: [
      {
        title: "Attendre la vente autorisée",
        description:
          "Achat en ligne prévu à partir du 1er mars 2027 via le site officiel ou un partenaire agréé, selon les autorités flamandes.",
      },
      { title: "Enregistrer votre plaque", description: "Système numérique — pas de sticker." },
      { title: "Choisir la durée", description: "Jour, 10 jours, mois, 2 mois ou annuel." },
      { title: "Circuler en règle", description: "Contrôles automatiques par caméras dès le 1er mai 2027." },
    ],
    faqs: [
      {
        question: "Puis-je réserver maintenant ?",
        answer:
          "Non. Selon les plans actuels, la vente en ligne commence le 1er mars 2027. Inscrivez-vous pour être prévenu lorsque la vente autorisée sera disponible.",
      },
      {
        question: "Quand la vignette devient-elle obligatoire ?",
        answer:
          "Selon les plans, dès le 1er mai 2027 sur les autoroutes et routes régionales belges. Une période de tolérance est prévue du 1er mai au 1er juillet 2027.",
      },
    ],
  },
  tolls: frTolls,
  privacy: {
    title: "Politique de confidentialité",
    intro: "BelgiumVignette.be respecte votre vie privée. Voici comment nous traitons vos données.",
    sections: [
      {
        id: "controller",
        title: "Responsable",
        paragraphs: [
          "BelgiumVignette.be est un site d'information indépendant sur la vignette routière belge prévue. Nous ne sommes pas affiliés au gouvernement belge, à la Flandre, à la Wallonie ou à Bruxelles, et nous ne vendons pas de vignettes.",
          "Le site est géré en lien avec Tolls.be (information indépendante sur les péages en Belgique). Contact : info@tolls.be.",
        ],
      },
      {
        id: "newsletter",
        title: "Newsletter",
        paragraphs: [
          "E-mail, langue et horodatage du consentement stockés dans Supabase (hébergement UE). Utilisation limitée aux mises à jour sur la vignette.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies, analytique & consentement",
        paragraphs: [
          "Stockage essentiel : nous enregistrons votre choix de cookies dans le localStorage. Base légale : intérêt légitime (Art. 6(1)(f) RGPD) et/ou consentement le cas échéant.",
          "Analytique (optionnel) : Vercel Analytics collecte des pages vues anonymes. Chargé uniquement après consentement via la bannière. Base légale : consentement (Art. 6(1)(a) RGPD). Retrait via Préférences cookies dans le pied de page.",
          "Google Search Console & Bing Webmaster Tools : balises meta de vérification de propriété, sans cookies de suivi.",
          "Durée de conservation du choix : jusqu'à suppression ou mise à jour de la politique (version 2026-08-04).",
        ],
      },
      {
        id: "news-editorial",
        title: "Actualités, résumés & contenu éditorial",
        paragraphs: [
          "Notre rubrique actualités publie des résumés indépendants de reportages accessibles au public sur la vignette belge. Ces pages ne sont pas des reproductions des articles originaux.",
          "Les résumés et traductions peuvent être produits avec l'aide de l'IA et peuvent différer dans la formulation de la source. Nous lions toujours vers l'éditeur original. Notre commentaire éditorial (« Notre point de vue ») est rédigé indépendamment et ne représente pas l'éditeur original ni les autorités belges.",
          "Les images sur les articles d'actualité peuvent provenir de l'article original lié ou d'agences de presse, avec crédits le cas échéant. Ces contenus restent la propriété de leurs titulaires de droits respectifs. Nous les affichons de bonne foi à titre de référence, avec un lien vers la source. Si vous estimez que votre contenu est utilisé de manière incorrecte, contactez info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Vos droits (RGPD)",
        paragraphs: ["Accès, rectification, suppression, opposition — info@tolls.be."],
      },
    ],
    lastUpdated: "4 août 2026",
  },
  news: {
    title: "Actualités & mises à jour",
    intro:
      "Nous suivons des sources officielles et médias fiables sur la vignette belge prévue. Chaque article résume le reportage original et ajoute notre point de vue indépendant — avec un lien direct vers la source.",
    latestArticles: "Derniers articles",
    summaryTitle: "Résumé",
    summaryFromSource: "d'après la source originale :",
    ourTakeTitle: "Notre point de vue",
    sourceTitle: "Source originale",
    readArticle: "Lire l'article",
    backToNews: "Retour aux actualités",
    publishedOn: "Publié",
    sourceLabel: "Source",
    sourceDisclaimer:
      "Nous résumons des sources fiables et renvoyons vers l'article original. Notre point de vue est un commentaire éditorial indépendant, pas une information officielle du gouvernement.",
    translationDisclaimer:
      "Le résumé et la traduction de cette page ont été produits avec l'aide de l'IA à partir de l'article original. Consultez toujours la source ci-dessous pour la formulation officielle.",
    articleAttributionTitle: "Résumé indépendant — pas l'article original",
    articleAttributionIndependence:
      "BelgiumVignette.be est un site d'information indépendant. Nous ne sommes pas affiliés à, approuvés par ou agissons au nom de l'éditeur original. Cette page résume un reportage accessible au public et ajoute notre propre commentaire éditorial. Il ne s'agit pas d'une reproduction de l'article original.",
    articleAttributionAi:
      "Le résumé et la traduction ont été produits avec l'aide de l'IA et peuvent différer dans la formulation de l'original. Consultez toujours la source liée ci-dessous pour le texte faisant foi.",
    articleAttributionReadOriginal: "Lire l'article original sur",
    articleAttributionCopyright:
      "L'article original, les images et autres médias restent la propriété de leurs titulaires de droits respectifs. Nous lions la source de bonne foi pour référence. Les crédits photo sont indiqués ci-dessus le cas échéant.",
    tableOfContents: "Sur cette page",
    relatedArticles: "Plus d'actualités & mises à jour",
    noArticles: "Aucun article publié pour l'instant. Revenez bientôt.",
  },
  newsletter: {
    emailPlaceholder: "Adresse e-mail",
    consentLabel: "J'accepte de recevoir des mises à jour et j'ai lu la",
    success: "Merci ! Vous êtes inscrit.",
    error: "Une erreur est survenue. Réessayez.",
    privacyLink: "politique de confidentialité.",
    independenceNote:
      "BelgiumVignette.be est un service d'information indépendant et n'est pas affilié au gouvernement belge. Nous ne vendons actuellement pas la vignette routière belge.",
    sticky: {
      teaser: "Vignette pas encore en vente — soyez prévenu au démarrage des ventes",
      cta: "S'inscrire →",
      closeLabel: "Fermer",
    },
    intents: {
      home: {
        title:
          "Recevez le lien d'achat lorsque la vignette belge sera en vente",
        description:
          "La vente est prévue à partir du 1er mars 2027. Laissez votre adresse e-mail et recevez une seule notification lorsque la vente autorisée sera disponible.",
        benefits: [
          "Lien vers un canal d'achat autorisé dès qu'il est connu",
          "Mises à jour en cas de changement de prix ou de règles",
          "Pas d'e-mails inutiles",
        ],
        submit: "Envoyez-moi le lien d'achat",
      },
      prices: {
        title: "Recevez une notification lorsque les prix définitifs de la vignette seront confirmés",
        description:
          "Les tarifs actuels ont été publiés, mais l'introduction doit encore être définitivement approuvée. Nous suivons les informations officielles pour vous.",
        benefitsIntro: "Recevez un e-mail dès que :",
        benefits: [
          "les prix définitifs sont confirmés ;",
          "la vente autorisée démarre ;",
          "un lien vers un canal d'achat reconnu est disponible.",
        ],
        submit: "Tenez-moi informé",
      },
      buy: {
        title: "Prévenez-moi dès que la vignette belge sera en vente",
        description:
          "La vente autorisée n'a pas encore commencé. Selon le planning actuel, vous pourrez acheter la vignette belge à partir du 1er mars 2027 via le site officiel ou un partenaire agréé. Laissez votre adresse e-mail et recevez une notification lorsque la vente autorisée sera disponible.",
        benefits: [],
        submit: "Envoyez-moi le lien d'achat",
      },
      foreign: {
        title:
          "Prévenez-moi lorsque les voitures étrangères pourront enregistrer leur vignette",
        description:
          "Selon les plans, les conducteurs étrangers auront également besoin d'une vignette belge. Recevez une notification dès que l'enregistrement et l'achat via un canal reconnu seront possibles.",
        benefits: [
          "Début de la vente autorisée",
          "Règles pour les plaques étrangères",
          "Lien vers un canal d'achat reconnu",
        ],
        submit: "Tenez-moi informé",
      },
      news: {
        title: "Recevez les mises à jour importantes sur la vignette belge",
        description:
          "Des alertes courtes et pertinentes dès qu'il y a des nouvelles sur les prix, les règles ou le début des ventes.",
        benefits: [
          "Mises à jour importantes sur la vignette",
          "Pas de spam quotidien",
          "Lien d'achat dès qu'un canal reconnu est disponible",
        ],
        submit: "Recevoir les mises à jour",
      },
      default: {
        title:
          "Recevez le lien d'achat lorsque la vignette belge sera en vente",
        description:
          "La vente devrait démarrer le 1er mars 2027. Nous vous enverrons une seule notification lorsque la vente autorisée sera disponible.",
        benefits: [
          "Lien vers un canal d'achat autorisé",
          "Mises à jour sur les prix et les règles",
          "Pas d'e-mails inutiles",
        ],
        submit: "Envoyez-moi le lien d'achat",
      },
    },
  },
  cookieBanner: {
    title: "Cookies & confidentialité",
    description:
      "Stockage essentiel pour votre choix. Optionnel : Vercel Analytics (pages vues anonymes). Aucune analytique avant votre décision.",
    essentialTitle: "Essentiel",
    essentialDescription: "Enregistrement de votre préférence cookies dans le localStorage.",
    alwaysOn: "Toujours actif — requis pour mémoriser votre choix.",
    analyticsTitle: "Analytique (Vercel Analytics)",
    analyticsDescription: "Statistiques anonymes de pages vues. Actif uniquement après consentement.",
    acceptAll: "Tout accepter",
    rejectAll: "Tout refuser",
    savePreferences: "Enregistrer",
    manageSettings: "Paramètres",
    closeSettings: "Fermer",
    privacyLink: "Confidentialité",
  },
  sources: [
    {
      title: "Autorités flamandes — Vignette routière à partir du 1er mai 2027",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Page officielle sur l'obligation, les tarifs et l'achat à partir du 1er mars 2027",
    },
    {
      title: "Viapass — taxe kilométrique poids lourds",
      url: "https://www.viapass.be",
      description: "Système existant pour les véhicules de plus de 3,5 tonnes (pas la vignette voiture)",
    },
    {
      title: "Commission européenne — tarification routière",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "Cadre UE pour les péages et la non-discrimination",
    },
  ],
};

export default dictionary;
