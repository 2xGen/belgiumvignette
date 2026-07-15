import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Vignette journalière Belgique 2027",
    intro:
      "La vignette journalière est prévue pour les courts trajets sur les routes principales belges — par exemple une excursion d'une journée, un transit ou un week-end. Les tarifs ci-dessous sont basés sur des plans publiés (mars 2026) et peuvent encore changer avant l'entrée en vigueur le 1er mai 2027.",
    metaTitle: "Vignette journalière Belgique 2027 — prix €9 par jour (concept)",
    metaDescription:
      "Vignette journalière prévue pour la Belgique à partir de €9 par jour. Pour les courts trajets sur autoroutes et routes régionales. Tarifs conceptuels selon les plans de mars 2026 — les prix définitifs peuvent encore changer.",
    navLabel: "Vignette journalière",
    sections: [
      {
        id: "what-is-daily",
        title: "Qu'est-ce que la vignette journalière ?",
        paragraphs: [
          "Selon les plans, la vignette journalière donne 24 heures d'accès au réseau vignetté belge : autoroutes, contournements autoroutiers et routes régionales où la limite est de 70 km/h ou plus.",
          "Le système sera numérique et lié à votre plaque d'immatriculation — aucune vignette physique ne sera apposée sur le pare-brise.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Pour qui la vignette journalière est-elle prévue ?",
        paragraphs: [
          "La vignette journalière convient aux utilisateurs occasionnels : touristes, automobilistes en transit, un déplacement professionnel ponctuel ou une journée shopping de l'autre côté de la frontière.",
          "Si vous traversez la Belgique plus souvent, une vignette de 10 jours, mensuelle ou annuelle sera selon les plans plus avantageuse.",
        ],
      },
      {
        id: "concept-prices",
        title: "Tarifs conceptuels — pas encore de prix définitifs",
        paragraphs: [
          "Tous les montants sur cette page sont basés sur les annonces de mars 2026. Les tarifs définitifs ne seront fixés qu'après approbation par les régions et la Commission européenne.",
          "Vérifiez toujours les sources officielles avant votre voyage en mai 2027.",
        ],
      },
    ],
    priceTableTitle: "Tarif journalier prévu",
    priceTable: [{ label: "1 jour", value: "€9" }],
    compareTableTitle: "Autres courtes périodes (à titre de comparaison)",
    compareTable: [
      { label: "10 jours", value: "€12" },
      { label: "1 mois", value: "€19" },
      { label: "2 mois", value: "€30" },
    ],
    relatedPagesTitle: "Autres types de vignettes",
    faqs: [
      {
        question: "La vignette journalière couvre-t-elle un jour calendaire ?",
        answer:
          "Selon les plans, vous achetez une vignette pour une période choisie de 24 heures ou un jour calendaire — les règles exactes seront communiquées au lancement du système de vente.",
      },
      {
        question: "Les étrangers doivent-ils aussi acheter une vignette journalière ?",
        answer:
          "Oui. Les règles de l'UE exigent un traitement égal. Les plaques étrangères devront selon les plans disposer d'une vignette valide sur les routes principales belges.",
      },
      {
        question: "€9 est-il déjà un tarif définitif ?",
        answer:
          "Non. €9 est le tarif conceptuel prévu selon les plans de mars 2026. Les prix définitifs peuvent encore être ajustés.",
      },
    ],
  },
  monthlyVignette: {
    title: "Vignette mensuelle Belgique 2027",
    intro:
      "La vignette mensuelle est prévue pour les conducteurs qui circulent plusieurs semaines sur les routes principales belges — par exemple pour des travaux temporaires, des vacances ou un séjour prolongé. Les tarifs sont des prix conceptuels selon les plans de mars 2026.",
    metaTitle: "Vignette mensuelle Belgique 2027 — à partir de €19 par mois (concept)",
    metaDescription:
      "Vignette mensuelle prévue pour la Belgique à partir de €19 par mois, 2 mois €30. Tarifs conceptuels pour autoroutes et routes régionales à partir du 1er mai 2027.",
    navLabel: "Vignette mensuelle",
    sections: [
      {
        id: "what-is-monthly",
        title: "Qu'est-ce que la vignette mensuelle ?",
        paragraphs: [
          "Selon les plans, la vignette mensuelle donne accès au réseau vignetté belge pendant environ un mois calendaire.",
          "Un tarif de deux mois (€30) est également prévu pour les séjours un peu plus longs sans acheter directement une vignette annuelle.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Pour qui la vignette mensuelle est-elle intéressante ?",
        paragraphs: [
          "Les pendulaires travaillant temporairement en Belgique, les expatriés en mission courte ou les vacanciers restant un mois dans le pays peuvent bénéficier d'une vignette mensuelle ou bimestrielle.",
          "Pour un usage occasionnel, une vignette journalière ou de 10 jours est moins chère ; pour un usage permanent, la vignette annuelle est plus avantageuse.",
        ],
      },
      {
        id: "concept-prices",
        title: "Tarifs conceptuels",
        paragraphs: [
          "Les montants ci-dessous sont des tarifs prévus, et non une législation définitive. Ils peuvent encore changer avant le démarrage en mai 2027.",
        ],
      },
    ],
    priceTableTitle: "Tarifs mensuels prévus",
    priceTable: [
      { label: "1 mois", value: "€19" },
      { label: "2 mois", value: "€30" },
    ],
    compareTableTitle: "Autres durées (à titre de comparaison)",
    compareTable: [
      { label: "1 jour", value: "€9" },
      { label: "10 jours", value: "€12" },
    ],
    relatedPagesTitle: "Autres types de vignettes",
    faqs: [
      {
        question: "Quelle est la différence entre 1 mois et 2 mois ?",
        answer:
          "Selon les plans, vous pouvez choisir entre une vignette mensuelle (€19) et une vignette bimestrielle (€30). Le tarif de deux mois est plus avantageux par jour si vous restez plus longtemps.",
      },
      {
        question: "Existe-t-il un tarif distinct par norme d'émission pour les vignettes courtes ?",
        answer:
          "Pour les courtes périodes (jour, mois), des montants fixes sont prévus selon les plans actuels. La vignette annuelle dépend en revanche de la norme Euro d'émission de votre véhicule.",
      },
      {
        question: "Ces prix sont-ils définitifs ?",
        answer:
          "Non. Ce sont des tarifs conceptuels basés sur les plans de mars 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Vignette annuelle Belgique 2027",
    intro:
      "La vignette annuelle est prévue pour les utilisateurs réguliers des routes principales belges. Le prix dépend de la norme d'émission de votre véhicule. Les tarifs ci-dessous sont des prix conceptuels selon les plans de mars 2026.",
    metaTitle: "Vignette annuelle Belgique 2027 — €90–€125 par an (concept)",
    metaDescription:
      "Vignette annuelle prévue pour la Belgique : €100 pour Euro 4+, €90 électrique, €125 pour les voitures plus anciennes. Tarifs conceptuels par norme d'émission à partir du 1er mai 2027.",
    navLabel: "Vignette annuelle",
    sections: [
      {
        id: "what-is-annual",
        title: "Qu'est-ce que la vignette annuelle ?",
        paragraphs: [
          "Selon les plans, la vignette annuelle donne 12 mois d'accès aux autoroutes, contournements autoroutiers et routes régionales en Belgique.",
          "En Flandre, plus de 97 % des voitures particulières sont au minimum Euro 4 — pour elles, €100 par an est prévu.",
        ],
      },
      {
        id: "emission-bands",
        title: "Prix par norme d'émission",
        paragraphs: [
          "Contrairement aux vignettes courtes, le tarif annuel varie selon les plans en fonction de la norme Euro d'émission de votre véhicule.",
          "Les véhicules entièrement électriques et à hydrogène bénéficient du tarif le plus bas (€90). Les véhicules plus anciens jusqu'à Euro 3 paient le montant le plus élevé (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Tarifs conceptuels",
        paragraphs: [
          "Ces tarifs sont basés sur les annonces de mars 2026 et peuvent encore être ajustés. Les montants définitifs suivront l'approbation par les régions et l'Europe.",
        ],
      },
    ],
    priceTableTitle: "Vignette annuelle",
    priceTable: [
      { label: "Euro 4 et supérieur", value: "€100 / an", note: "97 %+ des voitures flamandes" },
      { label: "Électrique / hydrogène", value: "€90 / an" },
      { label: "Voitures plus anciennes (jusqu'à Euro 3)", value: "€125 / an" },
    ],
    compareTableTitle: "Courtes périodes (à titre de comparaison)",
    compareTable: [
      { label: "1 jour", value: "€9" },
      { label: "10 jours", value: "€12" },
      { label: "1 mois", value: "€19" },
      { label: "2 mois", value: "€30" },
    ],
    relatedPagesTitle: "Autres types de vignettes",
    faqs: [
      {
        question: "Les Belges doivent-ils aussi acheter une vignette annuelle ?",
        answer:
          "Oui. Les règles de l'UE interdisent une vignette réservée aux étrangers. Les Belges paient également, mais la Flandre prévoit une compensation via la réforme de la taxe de circulation.",
      },
      {
        question: "€100 s'applique-t-il à toutes les voitures ?",
        answer:
          "Non. Uniquement aux véhicules d'au moins Euro 4. Les voitures électriques paient selon les plans €90 ; les voitures plus anciennes jusqu'à Euro 3 paient €125.",
      },
      {
        question: "S'agit-il de prix définitifs ?",
        answer:
          "Non. Ce sont des tarifs conceptuels prévus qui peuvent encore changer.",
      },
    ],
  },
  electricVignette: {
    title: "Vignette électrique Belgique 2027",
    intro:
      "Les propriétaires de véhicules entièrement électriques et à hydrogène paieront selon les plans le tarif annuel le plus bas : €90. Il s'agit d'un prix conceptuel basé sur les annonces de mars 2026 — pas d'un tarif définitif.",
    metaTitle: "Vignette électrique Belgique 2027 — €90 par an (concept)",
    metaDescription:
      "Vignette prévue pour voitures électriques en Belgique : €90 par an, le tarif annuel le plus bas. Prix conceptuel selon les plans de mars 2026. Comparez avec les autres normes d'émission.",
    navLabel: "Vignette électrique",
    sections: [
      {
        id: "ev-rate",
        title: "Tarif annuel le plus bas pour les VE",
        paragraphs: [
          "Les véhicules entièrement électriques et à hydrogène bénéficient selon les plans de la vignette annuelle la moins chère : €90 par an.",
          "C'est €10 de moins que la plupart des voitures Euro 4+ (€100) et €35 de moins que les véhicules plus anciens (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "Pourquoi les conducteurs de VE paient-ils quand même ?",
        paragraphs: [
          "Les véhicules électriques sollicitent les routes comme les autres voitures. Le tarif réduit récompense les émissions plus faibles, mais la vignette reste selon les plans obligatoire.",
          "Le ministre flamand Ben Weyts a souligné que €90 est nettement inférieur aux autres catégories — mais pas nul.",
        ],
      },
      {
        id: "concept-prices",
        title: "Tarifs conceptuels",
        paragraphs: [
          "€90 est un tarif conceptuel prévu. Les prix définitifs et d'éventuels ajustements ne seront communiqués qu'avant le démarrage en mai 2027.",
        ],
      },
    ],
    priceTableTitle: "Électrique / hydrogène — vignette annuelle",
    priceTable: [{ label: "Électrique / hydrogène", value: "€90 / an" }],
    compareTableTitle: "Autres tarifs annuels (à titre de comparaison)",
    compareTable: [
      { label: "Euro 4 et supérieur", value: "€100 / an", note: "97 %+ des voitures flamandes" },
      { label: "Voitures plus anciennes (jusqu'à Euro 3)", value: "€125 / an" },
    ],
    relatedPagesTitle: "Autres types de vignettes",
    faqs: [
      {
        question: "€90 s'applique-t-il aussi aux hybrides rechargeables ?",
        answer:
          "Non. Selon les plans, le tarif VE s'applique aux véhicules entièrement électriques et à hydrogène. Les hybrides rechargeables relèvent de la norme d'émission de leur moteur thermique.",
      },
      {
        question: "Y a-t-il une réduction pour les VE sur les vignettes courtes ?",
        answer:
          "Pour les vignettes journalières, mensuelles et courtes, des montants fixes sont prévus selon les plans actuels, quelle que soit la motorisation. Le tarif VE réduit s'applique à la vignette annuelle.",
      },
      {
        question: "€90 est-il définitif ?",
        answer:
          "Non. C'est un prix conceptuel basé sur les plans de mars 2026.",
      },
    ],
  },
};

export default pages;
