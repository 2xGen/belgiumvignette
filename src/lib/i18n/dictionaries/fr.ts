import type { BaseDictionary } from "../types";

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
    news: "Actualités & mises à jour",
    privacy: "Confidentialité",
  },
  meta: {
    home: {
      title: "Vignette Belgique 2027 : avez-vous besoin d'une vignette pour la Belgique ?",
      description:
        "La Belgique prévoit d'introduire une vignette routière numérique dès le 1er mai 2027. Découvrez si vous en avez besoin, combien elle coûte, qui est exempté et quand les ventes débutent.",
    },
    prices: {
      title: "Tarifs vignette Belgique 2027 — jour, mois & annuel",
      description:
        "Aperçu des tarifs prévus pour la vignette belge : 100 €/an, courtes durées dès 9 €/jour. Explication par norme Euro.",
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
      title: "Acheter la vignette belge — quand & comment (numérique)",
      description:
        "La vignette n'est pas encore en vente. Découvrez ce qui est prévu : système numérique lié à votre plaque d'immatriculation.",
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
    lastUpdatedDate: "4 août 2026",
    lastUpdatedIso: "2026-08-04",
    readMore: "En savoir plus",
    relatedSite: "https://tolls.be/fr",
    relatedSiteLabel: "Tolls.be — informations indépendantes sur les péages en Belgique",
    backToHome: "Retour à l'accueil",
    plannedNotice:
      "Les plans présentés en mars 2026 peuvent encore évoluer. Nous suivons les sources officielles et mettons à jour cette page dès que de nouvelles informations sont disponibles.",
    independentSite: "Info vignette routière belge",
    contactLabel: "Contact",
    cookieSettings: "Préférences cookies",
    tableCategory: "Catégorie",
    tablePrice: "Tarif",
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
        title: "Qui doit payer ?",
        summary:
          "Voitures particulières jusqu'à 3,5 tonnes, y compris les véhicules étrangers en transit.",
        href: "foreign",
      },
      {
        title: "Qui est exempté ?",
        summary:
          "Motos, camions (taxe au kilomètre), tracteurs, autocars, services d'urgence et police.",
        href: "exemptions",
      },
      {
        title: "Combien ça coûte ?",
        summary:
          "Vignette annuelle de 90 € (électrique) à 125 € (véhicules anciens). Courtes durées dès 9 €/jour.",
        href: "prices",
      },
    ],
    pricingTitle: "Tarifs prévus en un coup d'œil",
    pricingSubtitle:
      "Basé sur les plans publiés (mars 2026). Les montants définitifs peuvent encore changer.",
    annualTableTitle: "Vignette annuelle",
    shortTermTableTitle: "Courtes durées",
    annualPricing: [
      { label: "Euro 4 et plus", value: "100 € / an", note: "97 %+ des voitures flamandes" },
      { label: "Électrique / hydrogène", value: "90 € / an" },
      { label: "Véhicules anciens (jusqu'à Euro 3)", value: "125 € / an" },
    ],
    shortTermPricing: [
      { label: "1 jour", value: "9 €" },
      { label: "10 jours", value: "12 €" },
      { label: "1 mois", value: "19 €" },
      { label: "2 mois", value: "30 €" },
    ],
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
        question: "Les Néerlandais doivent-ils payer ?",
        answer:
          "Oui. Les règles de l'UE exigent un traitement égal. Même en transit, vous devrez probablement une vignette.",
      },
      {
        question: "Les motards paient-ils ?",
        answer:
          "Non. Les motos sont explicitement exemptées selon les annonces des ministres Weyts (Flandre) et Desquesnes (Wallonie).",
      },
      {
        question: "Quand pourrai-je acheter ?",
        answer:
          "Aucun canal officiel n'est encore ouvert. Inscrivez-vous à notre newsletter pour être informé.",
      },
    ],
    sourcesTitle: "Sources officielles",
  },
  prices: {
    title: "Tarifs & durées",
    intro:
      "Voici un aperçu des tarifs prévus selon la norme d'émission Euro. Basé sur les annonces de mars 2026 — les montants peuvent encore évoluer.",
    sections: [
      {
        id: "annual",
        title: "Vignette annuelle",
        paragraphs: [
          "Destinée aux usagers réguliers des routes principales belges. Le prix dépend de la norme Euro de votre véhicule.",
        ],
      },
      {
        id: "short",
        title: "Courtes durées",
        paragraphs: [
          "Pour les trajets occasionnels — vacances, week-end — des vignettes courtes sont prévues.",
          "Les véhicules plus polluants (jusqu'à Euro 3) paieront un tarif légèrement supérieur.",
        ],
      },
      {
        id: "road-tax",
        title: "Interaction avec la taxe de circulation (Flandre)",
        paragraphs: [
          "La Flandre réforme simultanément la taxe de circulation annuelle. Environ la moitié des automobilistes flamands pourraient payer plus net — jusqu'à 100 € de plus par an.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 et plus", value: "100 €", note: "An" },
      { label: "Électrique / hydrogène", value: "90 €", note: "An" },
      { label: "Jusqu'à Euro 3", value: "125 €", note: "An" },
    ],
    shortTermTable: [
      { label: "1 jour", value: "9 €" },
      { label: "10 jours", value: "12 €" },
      { label: "1 mois", value: "19 €" },
      { label: "2 mois", value: "30 €" },
    ],
    euroNormTitle: "Normes Euro en bref",
    euroNormCategoryHeader: "Norme",
    euroNormDescriptionHeader: "Description",
    euroNormItems: [
      { norm: "Euro 4+", description: "Véhicules à partir de ~2005–2006. La majorité du parc." },
      { norm: "Électrique / H₂", description: "Zéro émission. Tarif le plus bas prévu." },
      { norm: "Euro 3 et moins", description: "Véhicules plus anciens et polluants." },
    ],
    vignettePagesTitle: "Par type de vignette",
    faqs: [
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
    title: "Acheter la vignette",
    intro:
      "Aucun canal de vente officiel n'est encore disponible. Un système numérique est prévu, mais les détails restent inconnus.",
    sections: [
      {
        id: "status",
        title: "Statut actuel",
        paragraphs: [
          "Les plans doivent encore être approuvés par la Wallonie, Bruxelles et la Commission européenne.",
        ],
      },
      {
        id: "expected",
        title: "Ce qui est attendu",
        paragraphs: [
          "Enregistrement en ligne de votre plaque. Pas d'autocollant physique.",
        ],
      },
    ],
    statusBadge: "Pas encore disponible",
    steps: [
      { title: "Attendre le lancement officiel", description: "Vente attendue avant le 1er mai 2027." },
      { title: "Enregistrer votre plaque", description: "Système numérique — pas de sticker." },
      { title: "Choisir la durée", description: "Jour, 10 jours, mois, 2 mois ou annuel." },
      { title: "Circuler en règle", description: "Contrôles automatiques par caméras." },
    ],
    faqs: [
      {
        question: "Puis-je réserver maintenant ?",
        answer: "Non. Inscrivez-vous à notre newsletter pour rester informé.",
      },
    ],
  },
  privacy: {
    title: "Politique de confidentialité",
    intro: "BelgiumVignette.be respecte votre vie privée. Voici comment nous traitons vos données.",
    sections: [
      {
        id: "controller",
        title: "Responsable",
        paragraphs: ["BelgiumVignette.be — contact : info@tolls.be."],
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
    title: "Soyez informé en premier lorsque la vignette belge sera disponible",
    description: "",
    benefitsIntro: "",
    benefits: [
      "Début des ventes officielles",
      "Prix définitifs confirmés",
      "Nouvelles règles publiées",
      "Lien d'achat disponible",
    ],
    emailPlaceholder: "Adresse e-mail",
    consentLabel: "J'accepte de recevoir des mises à jour et j'ai lu la politique de confidentialité.",
    submit: "Me prévenir",
    success: "Merci ! Vous êtes inscrit.",
    error: "Une erreur est survenue. Réessayez.",
    privacyLink: "Confidentialité",
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
    { title: "Gouvernement flamand", url: "https://www.vlaanderen.be", description: "Annonces officielles" },
    { title: "Viapass", url: "https://www.viapass.be", description: "Taxe kilométrique poids lourds" },
    { title: "Commission européenne", url: "https://ec.europa.eu", description: "Examen des accords" },
  ],
};

export default dictionary;
