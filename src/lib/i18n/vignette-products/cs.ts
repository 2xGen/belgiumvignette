import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Denní dálniční známka Belgie 2027",
    intro:
      "Denní známka je určena pro krátké jízdy po belgických hlavních silnicích — například jednodenní výlet, tranzit nebo víkend. Níže uvedené sazby vycházejí z publikovaných plánů (březen 2026) a mohou se ještě změnit před zavedením 1. května 2027.",
    metaTitle: "Denní dálniční známka Belgie 2027 — cena €9 za den (koncept)",
    metaDescription:
      "Plánovaná denní známka pro Belgii od €9 za den. Pro krátké jízdy po dálnicích a krajských silnicích. Konceptuální ceny podle plánů z března 2026 — konečné sazby se mohou ještě změnit.",
    navLabel: "Denní známka",
    sections: [
      {
        id: "what-is-daily",
        title: "Co je denní známka?",
        paragraphs: [
          "Podle plánů denní známka poskytuje 24hodinový přístup k belgické síti známek: dálnicím, dálničním obchvatům a krajským silnicím s rychlostním limitem 70 km/h nebo vyšším.",
          "Systém bude digitální a propojený s registrační značkou — na čelní sklo se nebude lepit fyzická nálepka.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Pro koho je denní známka určena?",
        paragraphs: [
          "Denní známka se hodí pro příležitostné uživatele: turisty, tranzitní řidiče, jednorázové služební cesty nebo nákupy přes hranice.",
          "Pokud jezdíte Belgii častěji, podle plánů se vyplatí 10denní, měsíční nebo roční známka.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptuální ceny — ještě ne konečné sazby",
        paragraphs: [
          "Všechny částky na této stránce vycházejí z oznámení z března 2026. Konečné sazby budou stanoveny až po schválení regiony a Evropskou komisí.",
          "Před cestou v květnu 2027 vždy ověřte oficiální zdroje.",
        ],
      },
    ],
    priceTableTitle: "Plánovaná denní sazba",
    priceTable: [{ label: "1 den", value: "€9" }],
    compareTableTitle: "Jiná krátká období (pro srovnání)",
    compareTable: [
      { label: "10 dní", value: "€12" },
      { label: "1 měsíc", value: "€19" },
      { label: "2 měsíce", value: "€30" },
    ],
    relatedPagesTitle: "Jiné typy známek",
    faqs: [
      {
        question: "Platí denní známka pro jeden kalendářní den?",
        answer:
          "Podle plánů kupujete známku na zvolené období 24 hodin nebo jeden kalendářní den — přesná pravidla budou oznámena při spuštění prodejního systému.",
      },
      {
        question: "Musí cizinci také koupit denní známku?",
        answer:
          "Ano. Pravidla EU vyžadují rovné zacházení. Podle plánů musí mít platnou známku i vozidla se zahraničními registračními značkami na belgických hlavních silnicích.",
      },
      {
        question: "Je €9 už konečná cena?",
        answer:
          "Ne. €9 je plánovaná konceptuální sazba z března 2026. Konečné ceny se mohou ještě upravit.",
      },
    ],
  },
  monthlyVignette: {
    title: "Měsíční dálniční známka Belgie 2027",
    intro:
      "Měsíční známka je plánována pro řidiče, kteří několik týdnů jezdí po belgických hlavních silnicích — například při dočasné práci, dovolené nebo delším pobytu. Sazby jsou konceptuální ceny podle plánů z března 2026.",
    metaTitle: "Měsíční dálniční známka Belgie 2027 — od €19 měsíčně (koncept)",
    metaDescription:
      "Plánovaná měsíční známka Belgie od €19 měsíčně, 2 měsíce €30. Konceptuální ceny pro dálnice a krajské silnice od 1. května 2027.",
    navLabel: "Měsíční známka",
    sections: [
      {
        id: "what-is-monthly",
        title: "Co je měsíční známka?",
        paragraphs: [
          "Podle plánů měsíční známka poskytuje přístup k belgické síti známek po dobu přibližně jednoho kalendářního měsíce.",
          "Plánuje se také dvouměsíční sazba (€30) pro o něco delší pobyty bez okamžitého nákupu roční známky.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Pro koho se měsíční známka vyplatí?",
        paragraphs: [
          "Dojíždějící dočasně pracující v Belgii, expati na krátkém nasazení nebo dovolenkáři strávící měsíc v zemi mohou využít měsíční nebo dvouměsíční známku.",
          "Pro příležitostné použití je levnější denní nebo 10denní známka; pro trvalé použití se vyplatí roční známka.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptuální ceny",
        paragraphs: [
          "Níže uvedené částky jsou plánované sazby, nikoli konečná legislativa. Mohou se ještě změnit před spuštěním v květnu 2027.",
        ],
      },
    ],
    priceTableTitle: "Plánované měsíční sazby",
    priceTable: [
      { label: "1 měsíc", value: "€19" },
      { label: "2 měsíce", value: "€30" },
    ],
    compareTableTitle: "Jiná období platnosti (pro srovnání)",
    compareTable: [
      { label: "1 den", value: "€9" },
      { label: "10 dní", value: "€12" },
    ],
    relatedPagesTitle: "Jiné typy známek",
    faqs: [
      {
        question: "Jaký je rozdíl mezi 1 měsícem a 2 měsíci?",
        answer:
          "Podle plánů si můžete vybrat měsíční známku (€19) nebo dvouměsíční známku (€30). Dvouměsíční sazba je výhodnější na den, pokud zůstáváte déle.",
      },
      {
        question: "Existuje samostatná sazba podle emisní normy pro krátké známky?",
        answer:
          "Pro krátká období (den, měsíc) jsou podle současných plánů plánovány pevné částky. Roční známka naopak závisí na emisní normě Euro vozidla.",
      },
      {
        question: "Jsou tyto ceny konečné?",
        answer:
          "Ne. Jsou to konceptuální ceny založené na plánech z března 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Roční dálniční známka Belgie 2027",
    intro:
      "Roční známka je určena pro pravidelné uživatele belgických hlavních silnic. Cena závisí na emisní normě vozidla. Níže uvedené sazby jsou konceptuální ceny podle plánů z března 2026.",
    metaTitle: "Roční dálniční známka Belgie 2027 — €90–€125 ročně (koncept)",
    metaDescription:
      "Plánovaná roční známka Belgie: €100 pro Euro 4+, €90 elektrické, €125 starší auta. Konceptuální ceny podle emisní normy od 1. května 2027.",
    navLabel: "Roční známka",
    sections: [
      {
        id: "what-is-annual",
        title: "Co je roční známka?",
        paragraphs: [
          "Podle plánů roční známka poskytuje 12 měsíců přístupu k dálnicím, dálničním obchvatům a krajským silnicím v Belgii.",
          "Ve Flandrech více než 97 % osobních automobilů splňuje alespoň Euro 4 — pro ně je plánována sazba €100 ročně.",
        ],
      },
      {
        id: "emission-bands",
        title: "Ceny podle emisní normy",
        paragraphs: [
          "Na rozdíl od krátkých známek se podle plánů roční sazba liší podle emisní normy Euro vozidla.",
          "Plně elektrická a vodíková vozidla mají nejnižší sazbu (€90). Starší vozidla do Euro 3 platí nejvyšší částku (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptuální ceny",
        paragraphs: [
          "Tyto sazby vycházejí z oznámení z března 2026 a mohou se ještě upravit. Konečné částky budou zveřejněny po schválení regiony a Evropou.",
        ],
      },
    ],
    priceTableTitle: "Roční známka",
    priceTable: [
      { label: "Euro 4 a vyšší", value: "€100 / rok", note: "97 %+ flanderských aut" },
      { label: "Elektrické / vodíkové", value: "€90 / rok" },
      { label: "Starší auta (do Euro 3)", value: "€125 / rok" },
    ],
    compareTableTitle: "Krátká období (pro srovnání)",
    compareTable: [
      { label: "1 den", value: "€9" },
      { label: "10 dní", value: "€12" },
      { label: "1 měsíc", value: "€19" },
      { label: "2 měsíce", value: "€30" },
    ],
    relatedPagesTitle: "Jiné typy známek",
    faqs: [
      {
        question: "Musí Belgičané také koupit roční známku?",
        answer:
          "Ano. Pravidla EU zakazují známku pouze pro cizince. Belgičané také platí, ale Flandry plánují kompenzaci prostřednictvím reformy silniční daně.",
      },
      {
        question: "Platí €100 pro všechna auta?",
        answer:
          "Ne. Pouze vozidla s alespoň Euro 4. Podle plánů elektrická auta platí €90; starší auta do Euro 3 €125.",
      },
      {
        question: "Jsou to konečné ceny?",
        answer:
          "Ne. Jsou to plánované konceptuální sazby, které se mohou ještě změnit.",
      },
    ],
  },
  electricVignette: {
    title: "Elektrická dálniční známka Belgie 2027",
    intro:
      "Majitelé plně elektrických a vodíkových vozidel podle plánů platí nejnižší roční sazbu: €90. Jedná se o konceptuální cenu založenou na oznámeních z března 2026 — nikoli konečnou sazbu.",
    metaTitle: "Elektrická dálniční známka Belgie 2027 — €90 ročně (koncept)",
    metaDescription:
      "Plánovaná známka pro elektrická auta v Belgii: €90 ročně, nejnižší roční sazba. Konceptuální cena podle plánů z března 2026. Porovnejte s jinými emisními normami.",
    navLabel: "Elektrická známka",
    sections: [
      {
        id: "ev-rate",
        title: "Nejnižší roční sazba pro EV",
        paragraphs: [
          "Plně elektrická a vodíková vozidla podle plánů dostávají nejnižší roční známku: €90 ročně.",
          "To je o €10 méně než většina aut Euro 4+ (€100) a o €35 méně než starší vozidla (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "Proč EV řidiči také platí?",
        paragraphs: [
          "Elektrická vozidla zatěžují silnice stejně jako jiná auta. Nižší sazba odměňuje nižší emise, ale podle plánů zůstává známka povinná.",
          "Flamandský ministr Ben Weyts zdůraznil, že €90 je výrazně méně než u jiných kategorií — ale ne nula.",
        ],
      },
      {
        id: "concept-prices",
        title: "Konceptuální ceny",
        paragraphs: [
          "€90 je plánovaná konceptuální sazba. Konečné ceny a případné změny budou oznámeny před spuštěním v květnu 2027.",
        ],
      },
    ],
    priceTableTitle: "Elektrické / vodíkové — roční známka",
    priceTable: [{ label: "Elektrické / vodíkové", value: "€90 / rok" }],
    compareTableTitle: "Jiné roční sazby (pro srovnání)",
    compareTable: [
      { label: "Euro 4 a vyšší", value: "€100 / rok", note: "97 %+ flanderských aut" },
      { label: "Starší auta (do Euro 3)", value: "€125 / rok" },
    ],
    relatedPagesTitle: "Jiné typy známek",
    faqs: [
      {
        question: "Platí €90 i pro plug-in hybridy?",
        answer:
          "Ne. Podle plánů sazba pro EV platí pro plně elektrická a vodíková vozidla. Plug-in hybridy spadají pod emisní normu spalovacího motoru.",
      },
      {
        question: "Existuje sleva pro EV na krátkých známkách?",
        answer:
          "Pro denní, měsíční a krátké známky jsou podle současných plánů plánovány pevné částky bez ohledu na pohon. Nižší sazba pro EV platí pro roční známku.",
      },
      {
        question: "Je €90 konečné?",
        answer:
          "Ne. Je to konceptuální cena založená na plánech z března 2026.",
      },
    ],
  },
};

export default pages;
