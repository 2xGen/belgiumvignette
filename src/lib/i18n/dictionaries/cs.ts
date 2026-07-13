import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  locale: "cs",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Vše o belgické digitální dálniční známce — pro místní i řidiče překračující hranice.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Domů",
    prices: "Ceny",
    foreign: "Zahraniční řidiči",
    exemptions: "Osvobození",
    fines: "Pokuty",
    buy: "Jak koupit",
    news: "Novinky",
    privacy: "Ochrana soukromí",
  },
  meta: {
    home: {
      title: "Belgická dálniční známka 2027 — ceny, pravidla a průvodce pro zahraniční řidiče",
      description:
        "Nezávislý průvodce plánovanou digitální dálniční známkou v Belgii od 1. května 2027. Ceny, osvobození, pokuty a praktické tipy pro řidiče z Nizozemska, Německa a dalších zemí.",
    },
    prices: {
      title: "Ceny belgické dálniční známky 2027 — denní, měsíční a roční sazby",
      description:
        "Plánované ceny dálniční známky v Belgii: €100/rok, krátkodobé od €9/den. Euro emisní norma jednoduše vysvětlena.",
    },
    foreign: {
      title: "Belgická dálniční známka pro zahraniční auta a přeshraniční řidiče",
      description:
        "Praktický průvodce pro řidiče z Nizozemska, Německa a Francie cestující přes Belgii. Co potřebujete vědět podle současných plánů.",
    },
    exemptions: {
      title: "Osvobození od belgické dálniční známky — motocykly, nákladní vozy a další",
      description:
        "Kdo je podle plánů osvobozen? Motocykly, nákladní vozy, záchranné služby a další kategorie vysvětleny.",
    },
    fines: {
      title: "Pokuty za belgickou dálniční známku — kontroly a tolerance",
      description:
        "Plánované pokuty až €210, kontroly ANPR a tolerance do 1. července 2027.",
    },
    buy: {
      title: "Koupit belgickou dálniční známku — kdy a jak (očekává se digitální systém)",
      description:
        "Zatím není v prodeji. Co lze podle plánů očekávat: digitální systém vázaný na registrační značku, bez nálepky na čelním skle.",
    },
    news: {
      title: "Novinky o belgické dálniční známce — vysvětlení důvěryhodných zdrojů",
      description:
        "Nezávislé shrnutí oficiálních zpráv o belgické dálniční známce s naším redakčním pohledem. Odkazy na původní zdroje.",
    },
    privacy: {
      title: "Zásady ochrany soukromí — BelgiumVignette.be",
      description:
        "Jak BelgiumVignette.be zachází s cookies, analytikou, údaji z newsletteru a vašimi právy podle GDPR.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be je nezávislý informační web. Nejsme spojeni s belgickou vládou, Flandremi, Valonskem ani Bruselem.",
    lastUpdated: "Naposledy aktualizováno",
    lastUpdatedDate: "11 July 2026",
    lastUpdatedIso: "2026-07-11",
    readMore: "Číst více",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — nezávislé informace o mýtném v Belgii",
    backToHome: "Zpět na úvod",
    plannedNotice:
      "Plány představené v březnu 2026 se mohou ještě změnit. Sledujeme oficiální zdroje a tuto stránku aktualizujeme, jakmile se objeví novinky.",
    independentSite: "Nezávislý informační web",
    contactLabel: "Kontakt",
    cookieSettings: "Nastavení cookies",
    tableCategory: "Kategorie",
    tablePrice: "Cena",
  },
  home: {
    hero: {
      eyebrow: "Plánováno od 1. května 2027",
      title: "Belgická digitální dálniční známka, jasně vysvětlena",
      subtitle:
        "Od května 2027 plánují Flandry, Valonsko a Brusel účtovat motoristům poplatky za používání hlavních silnic. Žádná nálepka na čelním skle — digitální známka vázaná na vaši registrační značku.",
      ctaPrimary: "Zobrazit ceny",
      ctaSecondary: "Info pro zahraniční řidiče",
    },
    quickAnswers: [
      {
        title: "Kdo ji potřebuje?",
        summary:
          "Osobní automobily do 3,5 tuny, včetně zahraničních vozidel — i když jen projíždíte.",
        href: "foreign",
      },
      {
        title: "Kdo je osvobozen?",
        summary:
          "Motocykly, nákladní vozy (kilometrové mýtné), traktory, autobusy, záchranné služby a policie.",
        href: "exemptions",
      },
      {
        title: "Kolik to stojí?",
        summary:
          "Roční známka od €90 (elektromobily) do €125 (starší auta). Krátkodobé od €9/den.",
        href: "prices",
      },
    ],
    pricingTitle: "Plánované sazby na první pohled",
    pricingSubtitle:
      "Na základě zveřejněných plánů (březen 2026). Konečné částky se mohou ještě změnit.",
    annualTableTitle: "Roční známka",
    shortTermTableTitle: "Krátkodobé",
    annualPricing: [
      { label: "Euro 4 a vyšší", value: "€100 / year", note: "97 %+ flámských aut" },
      { label: "Elektro / vodík", value: "€90 / year" },
      { label: "Starší auta (do Euro 3)", value: "€125 / year" },
    ],
    shortTermPricing: [
      { label: "1 den", value: "€9" },
      { label: "10 dní", value: "€12" },
      { label: "1 měsíc", value: "€19" },
      { label: "2 měsíce", value: "€30" },
    ],
    timelineTitle: "Klíčová data (podle plánů)",
    timeline: [
      {
        date: "March 2026",
        title: "Představení plánů",
        description:
          "Flámská vláda představila návrh. Schválení Valonskem, Bruselem a Evropskou komisí stále čeká.",
      },
      {
        date: "1 May 2027",
        title: "Známka povinná",
        description:
          "Digitální známka vyžadována na dálnicích a regionálních hlavních silnicích.",
      },
      {
        date: "1 July 2027",
        title: "Začínají pokuty",
        description:
          "Tolerance končí. Kamery ANPR a mobilní jednotky zahajují vymáhání.",
      },
    ],
    faqTitle: "Často kladené otázky",
    faqs: [
      {
        question: "Je to fyzická nálepka?",
        answer:
          "Ne. Podle plánů jde o digitální známku vázanou na vaši registrační značku. Žádná nálepka na čelním skle.",
      },
      {
        question: "Platí to i pro zahraniční auta?",
        answer:
          "Ano. Pravidla EU vyžadují rovné zacházení. Belgičtí i zahraniční řidiči musí platit.",
      },
      {
        question: "Platí motocyklisté?",
        answer:
          "Ne. Motocykly jsou podle oznámení ministrů Weyts (Flandry) a Desquesnes (Valonsko) výslovně osvobozeny.",
      },
      {
        question: "Kdy ji mohu koupit?",
        answer:
          "Zatím neexistuje oficiální prodejní kanál. Přihlaste se k odběru newsletteru pro informace o spuštění.",
      },
    ],
    sourcesTitle: "Oficiální zdroje",
  },
  prices: {
    title: "Ceny a doby platnosti",
    intro:
      "Přehled plánovaných cen dálniční známky podle emisní normy Euro. Na základě oznámení z března 2026 — podrobnosti se mohou změnit.",
    sections: [
      {
        id: "annual",
        title: "Roční známka",
        paragraphs: [
          "Pro pravidelné uživatele belgických hlavních silnic. Cena závisí na emisní třídě Euro vašeho vozidla.",
        ],
      },
      {
        id: "short",
        title: "Krátkodobé možnosti",
        paragraphs: [
          "Pro příležitostné cesty — dovolené, víkendy — jsou plánovány kratší známky.",
          "Starší, více znečišťující auta (do Euro 3) platí mírně vyšší sazby.",
        ],
      },
      {
        id: "road-tax",
        title: "Vztah k silniční dani (Flandry)",
        paragraphs: [
          "Flandry současně reformují roční silniční daň. Přibližně polovina flámských motoristů může celkově platit více — až €100/rok navíc.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 a vyšší", value: "€100", note: "Rok" },
      { label: "Elektro / vodík", value: "€90", note: "Rok" },
      { label: "Do Euro 3", value: "€125", note: "Rok" },
    ],
    shortTermTable: [
      { label: "1 den", value: "€9" },
      { label: "10 dní", value: "€12" },
      { label: "1 měsíc", value: "€19" },
      { label: "2 měsíce", value: "€30" },
    ],
    euroNormTitle: "Emisní normy Euro vysvětleny",
    euroNormCategoryHeader: "Norma",
    euroNormDescriptionHeader: "Popis",
    euroNormItems: [
      { norm: "Euro 4+", description: "Auta od cca 2005–2006. Většina vozidel na silnicích." },
      { norm: "Elektro / H₂", description: "Nulové emise. Nejnižší plánovaná sazba." },
      { norm: "Euro 3 a nižší", description: "Starší, více znečišťující vozidla." },
    ],
    faqs: [
      {
        question: "Lze si u dodávek odečíst náklady?",
        answer: "Podle plánů lze náklady na známku u profesionálních dodávek plně odečíst jako firemní výdaj.",
      },
    ],
  },
  foreign: {
    title: "Zahraniční řidiči",
    intro:
      "Údajně více než polovina kilometrů na belgických silnicích je ujetá zahraničními motoristy. Pokud přijíždíte z Nizozemska, Německa, Francie nebo jinam, zde je to, co pro vás plány znamenají.",
    sections: [
      {
        id: "eu-rules",
        title: "Rovné zacházení",
        paragraphs: [
          "Platí i belgičtí řidiči — pravidla EU brání účtování pouze cizincům. Vaše zahraniční značka je pokryta.",
          "Odhaduje se, že Belgii ročně projede asi 30 milionů zahraničních osobních aut.",
        ],
      },
      {
        id: "digital",
        title: "Digitální, bez nálepky",
        paragraphs: [
          "Žádná fyzická známka ke koupi ani vystavení. Systém využívá automatické rozpoznávání registračních značek (ANPR). Kupujte před jízdou.",
        ],
      },
      {
        id: "history",
        title: "Historický kontext",
        paragraphs: [
          "Belgie zkoušela dálniční známku v roce 2007, ale po protestech Nizozemců ji zrušila. Nizozemští ministři znovu vyjádřili zklamání — v současných plánech není žádný speciální režim u hranic.",
        ],
      },
    ],
    countryTips: [
      {
        country: "🇳🇱 Netherlands",
        tips: [
          "Oblíbené trasy přes E19 (Antverpy), E40 (Brusel) a E314 (Lutych) jsou pokryty.",
          "V současných plánech není žádná zvláštní dohoda pro řidiče z jižního Nizozemska u hranic.",
        ],
      },
      {
        country: "🇩🇪 Germany",
        tips: [
          "Tranzit přes Aachen–Lutych nebo trasy směrem do Francie pravděpodobně vyžaduje známku.",
          "Krátkodobé možnosti (1–10 dní) vyhovují průjezdní dopravě.",
        ],
      },
      {
        country: "🇫🇷 France",
        tips: [
          "Řidiči ze severní Francie a Valonska: zkontrolujte, zda vaše trasa vede po belgických regionálních hlavních silnicích.",
        ],
      },
    ],
    faqs: [
      {
        question: "Potřebuji známku, když jen projíždím?",
        answer: "Ano — podle plánů vyžaduje použití hlavních silnic známku bez ohledu na cíl cesty.",
      },
    ],
  },
  exemptions: {
    title: "Osvobození",
    intro: "Ne každé vozidlo podle plánů platí. Zde je přehled, kdo platí a kdo ne.",
    sections: [
      {
        id: "motorcycles",
        title: "Motocykly osvobozeny",
        paragraphs: ["Motocykly jsou podle ministrů Weyts a Desquesnes výslovně vyloučeny."],
      },
      {
        id: "trucks",
        title: "Nákladní vozy",
        paragraphs: ["Těžká vozidla využívají stávající systém kilometrového mýtného (Viapass), nikoli dálniční známku."],
      },
    ],
    exemptTableTitle: "Osvobozeno",
    requiredTableTitle: "Známka povinná",
    exemptTable: [
      { label: "Motocykly a mopedy", value: "Osvobozeno" },
      { label: "Nákladní vozy (>3,5 t)", value: "Osvobozeno — km mýtné" },
      { label: "Traktory", value: "Osvobozeno" },
      { label: "Autobusy", value: "Osvobozeno" },
      { label: "Záchranné služby a policie", value: "Osvobozeno" },
      { label: "Armáda", value: "Osvobozeno" },
    ],
    notExemptTable: [
      { label: "Osobní auta (≤3,5 t)", value: "Známka povinná" },
      { label: "Zahraniční auta", value: "Známka povinná" },
      { label: "Dodávky", value: "Známka povinná" },
      { label: "Elektromobily", value: "Povinné (plánováno €90/rok)" },
    ],
    faqs: [
      {
        question: "Je můj obytný vůz osvobozen?",
        answer: "Pokud je registrován jako osobní vozidlo ≤3,5 t, podle plánů spadá do povinnosti.",
      },
    ],
  },
  fines: {
    title: "Pokuty a vymáhání",
    intro: "Vymáhání prostřednictvím kamer ANPR a mobilních jednotek. Před zahájením pokut je plánováno období tolerance.",
    sections: [
      {
        id: "tolerance",
        title: "Období tolerance",
        paragraphs: ["1. května až 1. července 2027 — podle plánů žádné pokuty. Sankce od 1. července."],
      },
      {
        id: "anpr",
        title: "Kontroly ANPR",
        paragraphs: ["Kamery na dálnicích a regionálních hlavních silnicích ověřují platnost známky."],
      },
    ],
    fineTable: [
      { label: "1. přestupek", value: "€70" },
      { label: "2. přestupek", value: "€140" },
      { label: "3. a další", value: "€210" },
    ],
    faqs: [
      {
        question: "Pokuta, když zapomenu známku?",
        answer: "Ne během tolerance (květen–červen 2027). Poté ano — včetně zahraničních značek.",
      },
    ],
  },
  buy: {
    title: "Jak koupit",
    intro:
      "Zatím neexistuje oficiální prodejní kanál. Očekává se digitální systém, ale podrobnosti o webu/aplikaci nejsou známy.",
    sections: [
      {
        id: "status",
        title: "Aktuální stav",
        paragraphs: [
          "Plány stále potřebují schválení Valonskem, Bruselem a Evropskou komisí, než může začít prodej.",
        ],
      },
      {
        id: "expected",
        title: "Co se očekává",
        paragraphs: ["Online registrace vaší značky. Fyzická nálepka není potřeba."],
      },
    ],
    statusBadge: "Zatím nedostupné",
    steps: [
      { title: "Počkejte na oficiální spuštění", description: "Prodej očekáván před 1. květnem 2027." },
      { title: "Zaregistrujte svou značku", description: "Digitální systém — bez nálepky na čelním skle." },
      { title: "Vyberte dobu platnosti", description: "Den, 10 dní, měsíc, 2 měsíce nebo roční." },
      { title: "Jeďte s platnou známkou", description: "Kamery kontrolují automaticky." },
    ],
    faqs: [
      {
        question: "Mohu si ji předobjednat?",
        answer: "Ne. Přihlaste se k odběru newsletteru, abyste zůstali informováni.",
      },
    ],
  },
  privacy: {
    title: "Zásady ochrany soukromí",
    intro: "BelgiumVignette.be respektuje vaše soukromí. Zde je, jak nakládáme s vašimi údaji.",
    sections: [
      {
        id: "controller",
        title: "Správce údajů",
        paragraphs: ["BelgiumVignette.be — kontakt: info@tolls.be."],
      },
      {
        id: "newsletter",
        title: "Newsletter",
        paragraphs: [
          "E-mail, jazyk a čas souhlasu uloženy v Supabase (hosting v EU). Používáno pouze pro aktualizace o dálniční známce.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies, analytika a souhlas",
        paragraphs: [
          "Nezbytné úložiště: ukládáme vaši volbu cookies v localStorage. Právní základ: oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR) a/nebo souhlas, kde je vyžadován.",
          "Analytika (volitelné): Vercel Analytics shromažďuje anonymní zobrazení stránek. Načítá se až po souhlasu v banneru. Právní základ: souhlas (čl. 6 odst. 1 písm. a) GDPR). Odvolání přes Nastavení cookies v patičce.",
          "Google Search Console a Bing Webmaster Tools: pouze meta tagy pro ověření vlastnictví — žádné sledovací cookies.",
          "Uchovávání: dokud nevymažete úložiště nebo neaktualizujeme tyto zásady (verze 2026-07-11).",
        ],
      },
      {
        id: "rights",
        title: "Vaše práva (GDPR)",
        paragraphs: ["Přístup, oprava, výmaz, námitka — info@tolls.be."],
      },
    ],
    lastUpdated: "11 July 2026",
  },
  news: {
    title: "Novinky",
    intro:
      "Sledujeme důvěryhodné oficiální a mediální zdroje o plánované belgické dálniční známce. Každý článek shrnuje původní zpravodajství a přidává náš nezávislý pohled — s přímým odkazem na zdroj.",
    latestArticles: "Nejnovější články",
    summaryTitle: "Shrnutí",
    summaryFromSource: "z původního zdroje:",
    ourTakeTitle: "Náš pohled",
    sourceTitle: "Původní zdroj",
    readArticle: "Číst článek",
    backToNews: "Zpět na novinky",
    publishedOn: "Publikováno",
    sourceLabel: "Zdroj",
    sourceDisclaimer:
      "Shrnujeme důvěryhodné zdroje a odkazujeme na původní článek. Náš pohled je nezávislý redakční komentář, nikoli oficiální vládní informace.",
    translationDisclaimer:
      "Shrnutí a překlad na této stránce byly vytvořeny s pomocí AI na základě původního článku. Pro závazné znění vždy odkazujte na zdroj níže.",
    articleAttributionTitle: "Nezávislé shrnutí — nikoli původní článek",
    articleAttributionIndependence:
      "BelgiumVignette.be je nezávislý informační web. Nejsme spojeni s původním vydavatelem, nejsme jím schváleni ani v jeho jménu nejednáme. Tato stránka shrnuje veřejně dostupné zpravodajství a přidává náš vlastní redakční komentář. Nejde o reprodukci původního článku.",
    articleAttributionAi:
      "Shrnutí a překlad byly vytvořeny s pomocí AI a mohou se ve formulaci lišit od originálu. Pro závazný text vždy odkazujte na zdroj uvedený níže.",
    articleAttributionReadOriginal: "Přečtěte si původní článek na",
    articleAttributionCopyright:
      "Původní článek, obrázky a další média zůstávají majetkem příslušných držitelů práv. Na zdroj odkazujeme v dobré víře pro referenci. Autorské popisky obrázků jsou uvedeny výše, pokud je to relevantní.",
    tableOfContents: "Na této stránce",
    relatedArticles: "Další novinky a aktualizace",
    noArticles: "Zatím nejsou publikovány žádné články. Zkuste to brzy znovu.",
  },
  newsletter: {
    title: "Zůstaňte informováni",
    description: "Dostávejte upozornění, až začne oficiální prodej a budou zveřejněny důležité aktualizace.",
    emailPlaceholder: "Vaše e-mailová adresa",
    consentLabel: "Souhlasím se zasíláním aktualizací a přečetl(a) jsem zásady ochrany soukromí.",
    submit: "Odebírat",
    success: "Děkujeme! Jste přihlášeni k odběru.",
    error: "Něco se pokazilo. Zkuste to prosím znovu.",
    privacyLink: "Zásady ochrany soukromí",
  },
  cookieBanner: {
    title: "Cookies a soukromí",
    description:
      "Nezbytné úložiště pro vaši volbu cookies. Volitelné: Vercel Analytics (anonymní zobrazení stránek). Žádná analytika, dokud se nerozhodnete.",
    essentialTitle: "Nezbytné",
    essentialDescription: "Ukládá vaši volbu cookies v localStorage.",
    alwaysOn: "Vždy zapnuto — nutné pro zapamatování vaší volby.",
    analyticsTitle: "Analytika (Vercel Analytics)",
    analyticsDescription: "Anonymní statistiky zobrazení stránek. Aktivní pouze po souhlasu.",
    acceptAll: "Přijmout vše",
    rejectAll: "Odmítnout vše",
    savePreferences: "Uložit preference",
    manageSettings: "Nastavení",
    closeSettings: "Zavřít",
    privacyLink: "Zásady ochrany soukromí",
  },
  sources: [
    { title: "Flámská vláda", url: "https://www.vlaanderen.be", description: "Oficiální oznámení" },
    { title: "Viapass", url: "https://www.viapass.be", description: "Systém kilometrového mýtného pro nákladní vozy" },
    { title: "Evropská komise", url: "https://ec.europa.eu", description: "Posouzení dohody" },
  ],
};

export default dictionary;
