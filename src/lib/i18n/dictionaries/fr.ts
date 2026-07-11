import type { Dictionary } from "../types";

const dictionary: Dictionary = {
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
    privacy: "Confidentialité",
  },
  meta: {
    home: {
      title: "Vignette Belgique 2027 — tarifs, règles & info transfrontalière",
      description:
        "Guide indépendant sur la vignette numérique belge prévue dès le 1er mai 2027. Tarifs, exemptions, amendes et conseils pratiques pour les conducteurs étrangers.",
    },
    prices: {
      title: "Tarifs vignette Belgique 2027 — jour, mois & annuel",
      description:
        "Aperçu des tarifs prévus pour la vignette belge : 100 €/an, courtes durées dès 9 €/jour. Explication par norme Euro.",
    },
    foreign: {
      title: "Vignette Belgique pour conducteurs étrangers",
      description:
        "Guide pratique pour les automobilistes néerlandais, allemands et français traversant la Belgique. Ce qu'il faut savoir selon les plans actuels.",
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
    lastUpdatedDate: "11 juillet 2026",
    lastUpdatedIso: "2026-07-11",
    readMore: "En savoir plus",
    relatedSite: "https://tolls.be/fr",
    relatedSiteLabel: "Tolls.be — informations indépendantes sur les péages en Belgique",
    backToHome: "Retour à l'accueil",
    plannedNotice:
      "Les plans présentés en mars 2026 peuvent encore évoluer. Nous suivons les sources officielles et mettons à jour cette page dès que de nouvelles informations sont disponibles.",
    independentSite: "Site d'information indépendant",
    contactLabel: "Contact",
    cookieSettings: "Préférences cookies",
    tableCategory: "Catégorie",
    tablePrice: "Tarif",
  },
  home: {
    hero: {
      eyebrow: "Prévu dès le 1er mai 2027",
      title: "La vignette numérique belge, expliquée simplement",
      subtitle:
        "À partir de mai 2027, la Flandre, la Wallonie et Bruxelles prévoient une contribution pour l'usage des routes principales. Pas d'autocollant sur le pare-brise — une vignette numérique liée à votre plaque.",
      ctaPrimary: "Voir les tarifs",
      ctaSecondary: "Info conducteurs étrangers",
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
    faqs: [
      {
        question: "Les camionnettes professionnelles sont-elles déductibles ?",
        answer:
          "Selon les plans, le coût de la vignette pour les utilitaires professionnels pourrait être entièrement déductible.",
      },
    ],
  },
  foreign: {
    title: "Conducteurs étrangers",
    intro:
      "Plus de la moitié des kilomètres parcourus en Belgique le seraient par des automobilistes étrangers. Si vous venez des Pays-Bas, d'Allemagne, de France ou d'ailleurs, voici l'essentiel.",
    sections: [
      {
        id: "eu-rules",
        title: "Traitement égal",
        paragraphs: [
          "Les Belges paieront aussi — l'UE n'autorise pas de taxer uniquement les étrangers. Votre plaque étrangère est donc concernée.",
        ],
      },
      {
        id: "digital",
        title: "Numérique, sans autocollant",
        paragraphs: [
          "Pas de vignette physique. Le système fonctionne par reconnaissance de plaques (ANPR). Achetez votre vignette avant le départ.",
        ],
      },
      {
        id: "history",
        title: "Contexte historique",
        paragraphs: [
          "La Belgique avait tenté une vignette en 2007, abandonnée après les protestes néerlandais. Aujourd'hui, aucun régime spécial pour les régions frontalières n'est prévu.",
        ],
      },
    ],
    countryTips: [
      {
        country: "🇳🇱 Pays-Bas",
        tips: [
          "Routes populaires via E19, E40 et E314 concernées.",
          "Pas de régime spécial pour le sud des Pays-Bas selon les plans actuels.",
        ],
      },
      {
        country: "🇩🇪 Allemagne",
        tips: [
          "Transit via Aachen–Liège ou vers la France : vignette probablement requise.",
          "Courtes durées intéressantes pour le trafic de passage.",
        ],
      },
      {
        country: "🇫🇷 France",
        tips: [
          "Conducteurs du nord de la France et de Wallonie : vérifiez si votre itinéraire emprunte des routes régionales belges.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ai-je besoin d'une vignette en simple transit ?",
        answer: "Oui, selon les plans, l'usage des routes principales nécessite une vignette, même en transit.",
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
          "Durée de conservation du choix : jusqu'à suppression ou mise à jour de la politique (version 2026-07-11).",
        ],
      },
      {
        id: "rights",
        title: "Vos droits (RGPD)",
        paragraphs: ["Accès, rectification, suppression, opposition — info@tolls.be."],
      },
    ],
    lastUpdated: "11 juillet 2026",
  },
  newsletter: {
    title: "Restez informé",
    description: "Recevez une alerte quand la vente officielle ouvre et lors des mises à jour importantes.",
    emailPlaceholder: "Votre adresse e-mail",
    consentLabel: "J'accepte de recevoir des mises à jour et j'ai lu la politique de confidentialité.",
    submit: "S'inscrire",
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
