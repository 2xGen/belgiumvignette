import type { Dictionary } from "../types";

export const frTolls: Dictionary["tolls"] = {
  title: "Péages en Belgique : autoroutes payantes et vignette en 2027",
  intro:
    "Vous partez en Belgique en voiture ? Découvrez si les autoroutes belges sont payantes, comment fonctionnera la vignette routière prévue pour 2027 et quels tarifs pourraient s'appliquer à votre véhicule.",
  blocks: [
    {
      type: "section",
      id: "autoroutes-payantes",
      title: "Les autoroutes sont-elles payantes en Belgique ?",
      paragraphs: [
        "Pour les voitures particulières, la Belgique ne fonctionne actuellement pas avec une vignette autoroutière générale comme l'Autriche ou la Suisse.",
        "Cette situation devrait toutefois changer en 2027.",
        "La Belgique prévoit d'introduire une vignette routière numérique à partir du 1er mai 2027 pour les véhicules concernés circulant sur les autoroutes et routes régionales. Le système s'appliquerait aux véhicules belges comme aux véhicules immatriculés à l'étranger.",
        "Si vous prévoyez de vous rendre en Belgique après cette date, consultez notre guide complet sur la [[home|vignette Belgique 2027]].",
      ],
    },
    {
      type: "summary",
      title: "En bref",
      items: [
        {
          label: "Actuellement",
          value: "Pas de vignette routière générale pour les voitures particulières.",
        },
        {
          label: "À partir du 1er mai 2027",
          value: "Introduction prévue d'une vignette numérique.",
        },
        {
          label: "Véhicules concernés",
          value:
            "Véhicules motorisés d'au moins quatre roues jusqu'à 3,5 tonnes.",
        },
        {
          label: "Voitures étrangères",
          value: "Concernées également.",
        },
        {
          label: "Motos",
          value:
            "Non concernées par cette obligation telle qu'elle est actuellement prévue.",
        },
        {
          label: "Achat",
          value:
            "En ligne, avec une ouverture des ventes prévue à partir du 1er mars 2027.",
        },
      ],
    },
    {
      type: "section",
      id: "peage-ou-vignette",
      title: "Péage ou vignette : comment fonctionnera le système belge ?",
      paragraphs: [
        "Le système prévu en Belgique n'est pas un péage classique où vous payez à chaque passage.",
        "Il s'agit d'une vignette routière donnant accès aux routes concernées pendant une période déterminée.",
        "Contrairement à une vignette autocollante à placer sur le pare-brise, la vignette belge sera numérique. Elle sera associée à la plaque d'immatriculation du véhicule.",
        "Il sera donc possible de circuler sans autocollant physique. Lors de l'achat, il faudra notamment enregistrer correctement la plaque d'immatriculation du véhicule.",
        "Pour comprendre le fonctionnement du nouveau système, consultez notre guide sur la [[home|vignette routière en Belgique]].",
      ],
    },
    {
      type: "section",
      id: "routes-concernees",
      title: "Quelles routes seront payantes en Belgique en 2027 ?",
      paragraphs: [
        "La vignette est prévue pour l'utilisation des autoroutes et routes régionales belges concernées.",
        "Les conducteurs qui circulent uniquement sur des routes locales ne devraient pas avoir besoin de vignette.",
        "Cela signifie qu'un conducteur qui traverse la Belgique par autoroute, par exemple pour rejoindre la France, les Pays-Bas, l'Allemagne ou le Luxembourg, devra tenir compte de la nouvelle obligation à partir de son entrée en vigueur.",
        "Les modalités pratiques et le réseau routier exact restent susceptibles d'être précisés avant le lancement définitif du système.",
      ],
    },
    {
      type: "pricing",
      id: "prix",
      title: "Quel sera le prix des péages en Belgique ?",
      paragraphs: [
        "Il ne devrait pas exister un prix unique par trajet. Le conducteur achètera une vignette valable pendant une durée déterminée.",
        "Les tarifs actuellement publiés dépendent de la norme Euro du véhicule et de la durée choisie.",
      ],
      durationHeader: "Durée",
      priceHeader: "Tarif",
      tables: [
        {
          title: "Tarifs prévus pour les véhicules Euro 4 et plus",
          rows: [
            { label: "1 jour", value: "9 €" },
            { label: "10 jours", value: "12 €" },
            { label: "1 mois", value: "19 €" },
            { label: "2 mois", value: "30 €" },
            { label: "1 an", value: "100 €" },
          ],
        },
        {
          title: "Tarifs prévus pour les véhicules Euro 0 à Euro 3",
          rows: [
            { label: "1 jour", value: "11,25 €" },
            { label: "10 jours", value: "15 €" },
            { label: "1 mois", value: "23,75 €" },
            { label: "2 mois", value: "37,50 €" },
            { label: "1 an", value: "125 €" },
          ],
        },
        {
          title: "Tarifs prévus pour les véhicules sans émissions",
          rows: [
            { label: "1 jour", value: "8,10 €" },
            { label: "10 jours", value: "10,80 €" },
            { label: "1 mois", value: "17,10 €" },
            { label: "2 mois", value: "27 €" },
            { label: "1 an", value: "90 €" },
          ],
        },
      ],
      linkParagraph:
        "Vous trouverez les montants, catégories de véhicules et dernières mises à jour sur notre page [[prices|prix et tarifs de la vignette Belgique]].",
      notice:
        "Attention : le système doit encore passer les dernières étapes du processus législatif. Les modalités peuvent donc encore évoluer avant son entrée en vigueur.",
    },
    {
      type: "section",
      id: "traverser",
      title: "Faut-il payer pour traverser la Belgique en voiture ?",
      paragraphs: [
        "À partir du 1er mai 2027, si le système entre en vigueur comme prévu, les conducteurs utilisant les autoroutes ou routes régionales concernées devront disposer d'une vignette valide.",
        "Cela concernera également les conducteurs qui ne font que traverser la Belgique pour rejoindre un autre pays.",
        "Par exemple, une voiture immatriculée en France, aux Pays-Bas ou en Allemagne ne sera pas automatiquement exemptée parce que son conducteur ne réside pas en Belgique.",
        "La vignette est prévue pour les véhicules concernés utilisant le réseau routier, indépendamment du pays d'immatriculation.",
        "Consultez notre guide pour les [[foreign|conducteurs étrangers en Belgique]] afin de vérifier les règles applicables aux véhicules étrangers.",
      ],
    },
    {
      type: "section",
      id: "voitures-francaises",
      title: "Les voitures françaises devront-elles payer les autoroutes en Belgique ?",
      paragraphs: [
        "Les voitures françaises seront soumises aux mêmes règles de vignette que les autres voitures étrangères lorsqu'elles circulent sur les routes concernées.",
        "Un automobiliste français qui utilise une autoroute belge à partir du 1er mai 2027 devra donc, selon les règles actuellement prévues, disposer d'une vignette valide.",
        "Pour un court séjour ou un simple transit, il ne sera pas nécessaire d'acheter automatiquement une vignette annuelle. Des durées de 1 jour, 10 jours, 1 mois et 2 mois sont également prévues.",
      ],
    },
    {
      type: "section",
      id: "voitures-etrangeres",
      title: "Les voitures étrangères devront-elles payer ?",
      paragraphs: [
        "Oui. Le projet prévoit explicitement que la vignette s'applique aussi aux utilisateurs étrangers des autoroutes et routes régionales concernées.",
        "Cela concerne notamment les véhicules venant de :",
      ],
      list: [
        "France",
        "Pays-Bas",
        "Allemagne",
        "Luxembourg",
        "Royaume-Uni",
        "autres pays européens ou non européens",
      ],
    },
    {
      type: "section",
      id: "motos",
      title: "Les motos devront-elles payer un péage en Belgique ?",
      paragraphs: [
        "La vignette prévue concerne les véhicules motorisés d'au moins quatre roues et dont la masse maximale techniquement admissible ne dépasse pas 3,5 tonnes.",
        "Les motos ne sont donc pas concernées par cette obligation telle qu'elle est actuellement prévue.",
        "D'autres catégories de véhicules peuvent également relever de règles différentes. Consultez la liste complète des [[exemptions|exemptions de la vignette belge]] avant votre trajet.",
      ],
    },
    {
      type: "section",
      id: "camping-cars",
      title: "Camping-cars et fourgons : faut-il une vignette ?",
      paragraphs: [
        "Les camping-cars et certains fourgons jusqu'à 3,5 tonnes entrent dans le champ du système prévu lorsqu'ils utilisent les autoroutes et routes régionales concernées.",
        "Le critère important est notamment la catégorie du véhicule et sa masse maximale techniquement admissible.",
        "Les véhicules de plus de 3,5 tonnes peuvent être soumis à un autre système de tarification routière.",
      ],
    },
    {
      type: "section",
      id: "poids-lourds",
      title: "Et les poids lourds de plus de 3,5 tonnes ?",
      paragraphs: [
        "La nouvelle vignette destinée aux véhicules jusqu'à 3,5 tonnes ne remplace pas le système belge existant pour les poids lourds.",
        "La Belgique dispose déjà d'une taxe kilométrique pour les poids lourds gérée dans le cadre du système Viapass.",
        "Il faut donc distinguer :",
      ],
      list: [
        "Voitures, camionnettes et certains camping-cars jusqu'à 3,5 t → vignette routière prévue à partir de 2027.",
        "Poids lourds concernés de plus de 3,5 t → système de tarification kilométrique existant.",
      ],
    },
    {
      type: "section",
      id: "acheter",
      title: "Où acheter la vignette pour les autoroutes belges ?",
      paragraphs: [
        "La vignette n'est pas encore en vente.",
        "Selon les informations officielles actuellement publiées, l'achat devrait devenir possible à partir du 1er mars 2027, avant l'entrée en vigueur prévue le 1er mai.",
        "La vignette pourra être achetée en ligne via le site officiel ou auprès d'une organisation partenaire reconnue.",
        "Évitez d'acheter une prétendue vignette belge 2027 sur un site non vérifié avant l'ouverture officielle des ventes.",
        "Nous suivons l'ouverture des ventes et publierons le lien lorsqu'il sera disponible. Consultez [[buy|où acheter la vignette Belgique]] pour les dernières informations.",
      ],
    },
    {
      type: "section",
      id: "controles",
      title: "Comment la vignette sera-t-elle contrôlée ?",
      paragraphs: [
        "La vignette sera entièrement numérique et associée à la plaque d'immatriculation du véhicule.",
        "Il ne sera donc pas nécessaire de coller une vignette physique sur le pare-brise.",
        "Il sera particulièrement important de saisir correctement la plaque d'immatriculation lors de l'achat. Circuler sur une route soumise à la vignette sans vignette valide pourra entraîner une sanction une fois le système de contrôle pleinement appliqué.",
        "Consultez notre page sur les [[fines|amendes liées à la vignette Belgique]] pour connaître les dernières règles de contrôle et de sanction.",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "Belgique 2027 : péage, vignette ou autoroutes gratuites ?",
      paragraphs: [
        "Le changement peut prêter à confusion, car les termes péage Belgique, autoroute payante Belgique et vignette Belgique sont souvent utilisés pour parler du même changement.",
        "En pratique, le système prévu n'est pas un péage traditionnel calculé selon la distance parcourue pour les voitures particulières.",
        "Il s'agit d'une vignette numérique valable pendant une période déterminée.",
        "Vous pourrez choisir la durée correspondant à votre voyage : un jour pour un passage très court, 10 jours pour un séjour, un ou deux mois pour une période plus longue ou une vignette annuelle pour une utilisation régulière.",
      ],
    },
  ],
  faqTitle: "Questions fréquentes sur les péages en Belgique",
  faqs: [
    {
      question: "Y a-t-il des péages en Belgique ?",
      answer:
        "Pour les voitures particulières, il n'existe actuellement pas de vignette routière générale comparable aux systèmes de certains autres pays européens. Une vignette numérique est toutefois prévue à partir du 1er mai 2027 pour l'utilisation des autoroutes et routes régionales concernées.",
    },
    {
      question: "Les autoroutes belges seront-elles payantes en 2027 ?",
      answer:
        "L'utilisation des autoroutes et routes régionales concernées nécessitera une vignette pour les véhicules soumis au nouveau système si celui-ci entre en vigueur comme prévu le 1er mai 2027.",
    },
    {
      question: "Combien coûtera l'autoroute en Belgique ?",
      answer:
        "Le prix ne sera pas calculé par kilomètre pour les voitures concernées. Pour un véhicule Euro 4 ou plus, les tarifs actuellement publiés vont de 9 € pour 1 jour à 100 € pour 1 an. Les véhicules plus anciens et les véhicules sans émissions ont des tarifs différents.",
    },
    {
      question: "Faut-il une vignette pour aller en Belgique ?",
      answer:
        "Cela dépend de la date et des routes empruntées. La vignette est prévue à partir du 1er mai 2027 pour les véhicules concernés utilisant les autoroutes et routes régionales. Si vous circulez uniquement sur des routes locales, la vignette ne devrait pas être nécessaire.",
    },
    {
      question: "Où acheter la vignette autoroute Belgique ?",
      answer:
        "Les ventes ne sont pas encore ouvertes. Elles devraient débuter le 1er mars 2027 via le site officiel et des organisations partenaires reconnues. Consultez notre page Acheter la vignette Belgique pour suivre l'ouverture des ventes.",
    },
    {
      question: "Les motos doivent-elles payer les autoroutes en Belgique ?",
      answer:
        "La vignette prévue s'applique aux véhicules motorisés d'au moins quatre roues jusqu'à 3,5 tonnes. Les motos ne sont donc pas concernées par cette obligation telle qu'elle est actuellement prévue.",
    },
  ],
  closing: {
    title: "Préparez votre trajet en Belgique",
    paragraphs: [
      "Le système belge doit entrer en vigueur le 1er mai 2027, mais plusieurs modalités restent susceptibles d'évoluer avant son lancement définitif.",
      "Avant votre départ, vérifiez :",
    ],
    checklist: [
      "si votre véhicule est concerné ;",
      "quelles routes vous allez emprunter ;",
      "la durée de vignette dont vous avez besoin ;",
      "le tarif applicable à votre véhicule ;",
      "que vous achetez votre vignette auprès d'un canal reconnu.",
    ],
    links: [
      { href: "home", label: "Vignette Belgique 2027" },
      { href: "prices", label: "Tarifs de la vignette" },
      { href: "buy", label: "Acheter la vignette belge" },
    ],
  },
};
