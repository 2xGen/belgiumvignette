import type { BaseDictionary } from "../types";
import { csTolls } from "../tolls/cs";
import { buildRateMatrix } from "../rate-matrix";

const csRateMatrix = buildRateMatrix({
  vehicleHeader: "Vozidlo",
  dayHeader: "1 den",
  tenDaysHeader: "10 dní",
  monthHeader: "1 měsíc",
  twoMonthsHeader: "2 měsíce",
  yearHeader: "1 rok",
  euro03: "Euro 0 až 3",
  euro4: "Euro 4 a vyšší",
  zeroEmission: "Bez emisí",
});

const dictionary: BaseDictionary = {
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
    tolls: "Mýtné",
    news: "Novinky",
    privacy: "Ochrana soukromí",
  },
  meta: {
    home: {
      title: "Belgická dálniční známka 2027: ceny, dálnice a jak koupit",
      description:
        "Belgie plánuje digitální silniční známku od května 2027. Podívejte se na plánované ceny, kdo ji potřebuje, osvobození motocyklů a kde koupit.",
    },
    prices: {
      title: "Ceny belgické dálniční známky 2027: sazby podle normy Euro a doby platnosti",
      description:
        "Úplná cenová tabulka belgické silniční známky 2027 podle normy Euro a doby platnosti — od €8,10/den (bez emisí) do €125/rok (Euro 0–3).",
    },
    foreign: {
      title: "Potřebují zahraniční auta v roce 2027 belgickou dálniční známku?",
      description:
        "Ano — podle současných plánů budou zahraniční osobní automobily od 1. května 2027 potřebovat belgickou dálniční známku na zahrnutých silnicích. Průvodce pro řidiče z Nizozemska, Německa a Francie.",
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
      title: "Koupit belgickou dálniční známku — prodej očekáván od 1. března 2027",
      description:
        "Podle současných plánů má online prodej belgické dálniční známky začít 1. března 2027. Povinná od 1. května 2027. Oficiální zdroj: vlámská vláda.",
    },
    tolls: {
      title: "Mýtné v Belgii 2027: dálnice, známka a sazby",
      description:
        "Jsou dálnice v Belgii placené? Zjistěte mýtné, plánovanou známku od května 2027, sazby a pravidla pro zahraniční auta.",
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
    lastUpdatedDate: "28 September 2026",
    lastUpdatedIso: "2026-09-28",
    readMore: "Číst více",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — nezávislé informace o mýtném v Belgii",
    backToHome: "Zpět na úvod",
    plannedNotice:
      "Plány představené v březnu 2026 se mohou ještě změnit. Sledujeme oficiální zdroje a tuto stránku aktualizujeme, jakmile se objeví novinky.",
    independentSite: "Info belgická silniční známka",
    contactLabel: "Kontakt",
    cookieSettings: "Nastavení cookies",
    tableCategory: "Kategorie",
    tablePrice: "Cena",
    lastChecked: "Naposledy ověřeno",
  },
  notFound: {
    title: "Stránka nenalezena",
    description:
      "Tato stránka neexistuje nebo byla přesunuta. Vraťte se na domovskou stránku nebo si prohlédněte nejnovější zprávy o belgické známce.",
    homeLink: "Domovská stránka",
    newsLink: "Novinky a aktualizace",
  },
  home: {
    hero: {
      eyebrow: "Plánováno od 1. května 2027",
      title: "Belgická dálniční známka 2027: potřebujete známku pro Belgii?",
      subtitle:
        "Belgie plánuje zavedení digitální silniční známky od 1. května 2027. Zjistěte, zda ji potřebujete, kolik stojí, kdo je osvobozen a kdy začne prodej.",
      ctaPrimary: "Zjistěte, zda potřebujete známku",
      ctaSecondary: "Upozornění při zahájení prodeje",
    },
    decisionTree: {
      title: "Potřebujete známku?",
      options: [
        { label: "Belgické auto", href: "prices" },
        { label: "Nizozemské auto", href: "foreign", anchor: "netherlands" },
        { label: "Německé auto", href: "foreign", anchor: "germany" },
        { label: "Francouzské auto", href: "foreign", anchor: "france" },
        { label: "Obytný vůz / dodávka", href: "exemptions" },
      ],
    },
    quickAnswers: [
      {
        title: "Kdo musí koupit belgickou dálniční známku?",
        summary:
          "Osobní automobily do 3,5 tuny, včetně zahraničních vozidel v tranzitu na zahrnutých silnicích.",
        href: "foreign",
        linkLabel: "Průvodce pro zahraniční řidiče",
      },
      {
        title: "Kdo je osvobozen od belgické dálniční známky?",
        summary:
          "Motocykly, nákladní vozy (kilometrové mýtné), traktory, autobusy, záchranné služby a policie — podle současných plánů.",
        href: "exemptions",
        linkLabel: "Zobrazit všechna osvobození",
      },
      {
        title: "Jaká je cena belgické dálniční známky v roce 2027?",
        summary:
          "Cena závisí na normě Euro a době platnosti: od €8,10/den (bez emisí) a €9/den (Euro 4+), až do €90–€125 ročně.",
        href: "prices",
        linkLabel: "Kompletní průvodce cenami",
      },
    ],
    overview: {
      title: "Belgická silniční známka: co je plánováno na 2027",
      paragraphs: [
        "Belgie plánuje zavedení digitální silniční známky od 1. května 2027. Belgická známka by se vztahovala na osobní automobily do 3,5 tuny na dálnicích a některých regionálních hlavních silnicích.",
        "Zahraniční auta by byla zahrnuta. Řidiči z Francie, Nizozemska, Německa a dalších zemí by potřebovali známku pro použití zahrnutých belgických silnic.",
        "Nebyla by to nálepka na čelní sklo. Belgická dálniční známka by byla digitální a vázaná na registrační značku, s kontrolami včetně kamer ANPR.",
        "Podle sazeb zveřejněných vlámskou vládou závisí cena na normě Euro a době platnosti: od €8,10 denně pro vozidla bez emisí a €9 denně pro Euro 4+, až do €90–€125 ročně. Plánovány jsou také 10 dní, 1 měsíc a 2 měsíce.",
        "Motocykly by byly osvobozeny podle současných plánů. Konečné částky a pravidla ještě musí být potvrzeny před vstupem systému v platnost.",
      ],
    },
    intentSections: [
      {
        id: "dalnice",
        title: "Potřebujete známku na dálnice v Belgii?",
        paragraphs: [
          "Podle současných plánů by se digitální silniční známka stala povinnou na belgických dálnicích a některých regionálních hlavních silnicích od 1. května 2027.",
          "Dnes zůstává většina belgických dálnic pro osobní auta zdarma. Projekt známky by to změnil: přístup na dálnice a část rychlejší regionální sítě by vyžadoval známku vázanou na registrační značku.",
          "Pokud používáte pouze místní silnice, známka by podle zveřejněných informací nebyla vyžadována. V praxi je úplné vyhýbání se dálnicím a regionálním hlavním silnicím při meziměstských nebo tranzitních cestách často obtížné.",
        ],
        link: {
          href: "tolls",
          label: "Mýtné a dálnice v Belgii",
        },
      },
      {
        id: "motocykly",
        title: "Potřebují motocykly belgickou dálniční známku?",
        paragraphs: [
          "Ne. Podle vládních oznámení by motocykly byly výslovně osvobozeny od belgické známky.",
          "Povinnost by se týkala motorových vozidel s nejméně čtyřmi koly do 3,5 tuny — včetně aut, některých lehkých dodávek a obytných vozů. Nákladní vozy zůstávají pod kilometrovým mýtným Viapass.",
        ],
        link: {
          href: "exemptions",
          label: "Zobrazit podrobnosti o osvobození",
        },
      },
      {
        id: "koupit",
        title: "Kde koupit belgickou dálniční známku?",
        paragraphs: [
          "Oficiální prodej ještě nezačal. Podle současných plánů by byl online nákup možný od 1. března 2027 přes oficiální web nebo autorizovaného partnera.",
          "Dnes neexistuje oficiální prodejní portál. Stránky, které již nabízejí rezervaci nebo platbu, nejsou oficiálním kanálem.",
        ],
        link: {
          href: "buy",
          label: "Koupit belgickou známku: data a oficiální kanály",
        },
      },
    ],
    pricingTitle: "Jaká je cena belgické dálniční známky v roce 2027?",
    pricingParagraphs: [
      "Cena belgické silniční známky závisí na normě Euro vozidla a době platnosti. Pro auta Euro 4 nebo vyšší začínají plánované sazby na €9 za 1 den a €100 za 1 rok. Starší vozidla platí více, zatímco vozidla bez emisí mají nižší sazbu.",
    ],
    pricingLinkLabel: "Zobrazit všechny ceny belgické známky",
    pricingLinkSecondaryLabel: "Kompletní průvodce cenami",
    pricingMatrixTitle: "Plánované sazby",
    rateMatrix: csRateMatrix,
    pricingNote:
      "Toto jsou aktuálně zveřejněné sazby vlámské vlády. Zavedení stále podléhá konečnému schválení.",
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
        question: "Potřebujete známku na dálnice v Belgii?",
        answer:
          "Podle současných plánů ano od 1. května 2027 na belgických dálnicích a některých regionálních hlavních silnicích. Místní silnice by zůstaly mimo povinnost.",
      },
      {
        question: "Potřebují motocykly belgickou dálniční známku?",
        answer:
          "Ne. Motocykly jsou podle oznámení ministrů Weyts (Flandry) a Desquesnes (Valonsko) výslovně osvobozeny.",
      },
      {
        question: "Platí to i pro zahraniční auta?",
        answer:
          "Ano. Pravidla EU vyžadují rovné zacházení. Belgičtí i zahraniční řidiči musí platit na zahrnutých silnicích.",
      },
      {
        question: "Kde koupit belgickou dálniční známku?",
        answer:
          "Oficiální prodej ještě nezačal. Podle plánů je online nákup očekáván od 1. března 2027 přes oficiální kanál nebo autorizovaného partnera.",
      },
    ],
    sourcesTitle: "Oficiální zdroje",
  },
  prices: {
    title: "Ceny belgické dálniční známky 2027: sazby podle normy Euro a doby platnosti",
    intro:
      "Plánovaná cena belgické silniční známky závisí na dvou faktorech: normě Euro vozidla a době platnosti známky. Vlámská vláda zveřejnila sazby pro 1 den, 10 dní, 1 měsíc, 2 měsíce a 1 rok.",
    leadParagraphs: [
      "Pro auto Euro 4 nebo vyšší stojí belgická známka podle současných sazeb €9 za 1 den, €12 za 10 dní a €100 za rok. Vozidla bez emisí platí méně a vozidla Euro 0 až Euro 3 platí více.",
      "Známka je plánována od 1. května 2027. Nákup by měl být možný od 1. března 2027. Zavedení stále podléhá konečnému schválení.",
    ],
    matrixTitle: "Ceny belgické silniční známky 2027",
    rateMatrix: csRateMatrix,
    matrixNote:
      "Tyto sazby zveřejnila vlámská vláda. Cena tedy nezávisí jen na tom, jak dlouho známku potřebujete, ale také na normě Euro vašeho vozidla.",
    buyLinkParagraph:
      "[[buy|Podívejte se, kde a kdy můžete koupit belgickou známku]].",
    categorySections: [
      {
        id: "euro-4",
        title: "Kolik stojí belgická známka pro Euro 4 a vyšší?",
        paragraphs: [
          "Pro vozidla Euro 4 nebo vyšší platí podle zveřejněných sazeb:",
        ],
        list: [
          "1 den: €9",
          "10 dní: €12",
          "1 měsíc: €19",
          "2 měsíce: €30",
          "1 rok: €100",
        ],
        linkParagraph:
          "Do této kategorie spadá velká část současného vozového parku. Pro krátký průjezd Belgií může stačit denní nebo 10denní známka. Kdo pravidelně používá belgické krajské a dálniční silnice, může porovnat roční známku s kratšími dobami platnosti. Více o [[dailyVignette|denní známce]] nebo se podívejte na [[annualVignette|roční známku]].",
      },
      {
        id: "euro-0-3",
        title: "Kolik stojí belgická známka pro Euro 0 až Euro 3?",
        paragraphs: [
          "Starší vozidla s Euro 0, Euro 1, Euro 2 nebo Euro 3 spadají do nejdražší sazební kategorie.",
          "Plánované ceny jdou od €11,25 za jeden den do €125 za rok.",
        ],
        tableTitle: "Cena Euro 0–3",
        table: [
          { label: "1 den", value: "€11,25" },
          { label: "10 dní", value: "€15" },
          { label: "1 měsíc", value: "€23,75" },
          { label: "2 měsíce", value: "€37,50" },
          { label: "1 rok", value: "€125" },
        ],
      },
      {
        id: "elektro",
        title: "Kolik stojí známka pro elektromobil?",
        paragraphs: [
          "Pro vozidlo bez emisí platí nejnižší sazba. Podle současné cenové tabulky stojí známka €8,10 za jeden den a €90 za celý rok.",
        ],
        tableTitle: "Cena bez emisí",
        table: [
          { label: "1 den", value: "€8,10" },
          { label: "10 dní", value: "€10,80" },
          { label: "1 měsíc", value: "€17,10" },
          { label: "2 měsíce", value: "€27" },
          { label: "1 rok", value: "€90" },
        ],
        linkParagraph:
          "[[electricVignette|Více o belgické známce pro elektromobily]].",
      },
    ],
    durationSection: {
      id: "doba",
      title: "Jakou dobu platnosti potřebuji?",
      paragraphs: [
        "Podle současných plánů můžete volit z pěti období platnosti:",
        "Nejlepší doba závisí na tom, jak často a jak dlouho používáte silnice, na nichž bude známka povinná.",
        "Podívejte se na samostatné vysvětlení [[dailyVignette|denní známky]], [[monthlyVignette|měsíční známky]] a [[annualVignette|roční známky]].",
      ],
      list: [
        "1 den — pro krátký průjezd nebo jednodenní výlet.",
        "10 dní — například na dovolenou nebo delší návštěvu.",
        "1 měsíc — pro více jízd během několika týdnů.",
        "2 měsíce — pro delší pobyt nebo pravidelné dočasné používání.",
        "1 rok — pro řidiče, kteří pravidelně jezdí po belgických krajských a dálničních silnicích.",
      ],
    },
    whenSection: {
      id: "kdy",
      title: "Kdy platí tyto ceny?",
      paragraphs: [
        "Digitální silniční známka je plánována od 1. května 2027. Podle současných oficiálních informací by bylo možné známku koupit online od 1. března 2027.",
        "Praktické provedení stále probíhá a zavedení podléhá konečnému schválení.",
        "Chcete vědět, jak bude nákup fungovat? Podívejte se na [[buy|Koupit belgickou známku]]. Pro všechna pravidla, vozidla a klíčová data přejděte na našeho kompletního průvodce [[home|belgickou silniční známkou 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Vztah k silniční dani (Flandry)",
        paragraphs: [
          "Flandry zároveň reformují roční silniční daň. Podle odhadů může asi polovina flámských motoristů neto platit více — až €100 navíc ročně.",
          "Snížení silniční daně podle plánů nekompenzuje každému plně náklady na známku. Toto je kontextová informace; výše uvedené sazby známky platí nezávisle na této reformě.",
        ],
      },
    ],
    euroNormTitle: "Normy Euro ve zkratce",
    euroNormCategoryHeader: "Norma",
    euroNormDescriptionHeader: "Popis",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Auta od cca 2005–2006. Většina vozidel na silnicích. Denní sazba €9, roční €100.",
      },
      {
        norm: "Bez emisí",
        description: "Úplně bez emisí (elektro / vodík). Nejnižší sazba: od €8,10/den, €90/rok.",
      },
      {
        norm: "Euro 3 a nižší",
        description: "Starší, více znečišťující vozidla. Nejvyšší sazba: od €11,25/den, €125/rok.",
      },
    ],
    vignettePagesTitle: "Podle typu známky",
    faqs: [
      {
        question: "Jaká je nejnižší plánovaná denní cena?",
        answer:
          "Podle vlámské vlády je nejnižší denní sazba €8,10 pro vozidla bez emisí. Pro Euro 4 a vyšší je to €9; pro Euro 0 až 3 je to €11,25.",
      },
      {
        question: "Platí krátká období pro všechny emisní třídy?",
        answer:
          "Ano. Každá doba platnosti (1 den, 10 dní, 1 měsíc, 2 měsíce, 1 rok) má vlastní sazbu podle kategorie normy Euro. Částky se liší podle kategorie.",
      },
      {
        question: "Lze si u dodávek odečíst náklady?",
        answer:
          "Podle plánů lze náklady na známku u profesionálních dodávek plně odečíst jako firemní výdaj.",
      },
    ],
  },
  foreign: {
    title: "Potřebují zahraniční auta belgickou dálniční známku?",
    intro:
      "Ano, podle současných plánů. Zahraniční osobní automobily budou od 1. května 2027 potřebovat belgickou dálniční známku při používání zahrnutých belgických silnic. Plánovaný systém nerozlišuje mezi belgickými a zahraničními registračními značkami — auto registrované v Nizozemsku, Francii, Německu nebo jiné zemi by mělo vyžadovat stejnou digitální známku jako belgické vozidlo. Konečná pravidla se mohou ještě změnit, dokud nebude systém oficiálně schválen a spuštěn.",
    sections: [
      {
        id: "eu-rules",
        title: "Rovné zacházení",
        paragraphs: [
          "Platí i belgičtí řidiči — pravidla EU brání účtování pouze cizincům. Vaše zahraniční značka spadá pod stejný plánovaný systém.",
          "Odhaduje se, že Belgii ročně projede asi 30 milionů zahraničních osobních aut.",
        ],
      },
      {
        id: "digital",
        title: "Digitální systém",
        paragraphs: [
          "Žádná fyzická známka ke koupi ani vystavení. Systém má využívat automatické rozpoznávání registračních značek (ANPR). Kupujte před jízdou po zahrnutých silnicích.",
        ],
      },
      {
        id: "history",
        title: "Historický kontext",
        paragraphs: [
          "Belgie zkoušela dálniční známku v roce 2007, ale po protestech Nizozemců ji zrušila. Nizozemští ministři znovu vyjádřili obavy — a v současných plánech zatím není oznámen žádný speciální režim u hranic pro sousední země.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Nizozemsko",
        tips: [
          "Ano — osobní auta s nizozemskou registrací by od 1. května 2027 měla potřebovat belgickou dálniční známku na zahrnutých belgických silnicích.",
          "Týká se to běžných tras, jako Nizozemsko → Antverpy, Nizozemsko → Brusel a tranzit Nizozemsko → Lucembursko/Francie.",
          "V současnosti není oznámeno žádné osvobození pro nizozemské pohraniční regiony.",
        ],
      },
      {
        id: "germany",
        country: "Německo",
        tips: [
          "Ano — osobní auta s německou registrací by od 1. května 2027 měla potřebovat belgickou dálniční známku na zahrnutých belgických silnicích.",
          "Zahrnuje to běžné tranzitní trasy, jako Aachen → Lutych a Německo → Francie přes Belgii.",
          "Krátkodobé možnosti (1–10 dní) v plánech mohou vyhovovat průjezdní dopravě.",
        ],
      },
      {
        id: "france",
        country: "Francie",
        tips: [
          "Ano — osobní auta s francouzskou registrací by od 1. května 2027 měla potřebovat belgickou dálniční známku na zahrnutých belgických silnicích.",
          "To je zvláště relevantní pro cesty ze severní Francie do Belgie a tranzitní trasy Francie → Nizozemsko/Německo.",
          "Zahrnuté silnice zahrnují dálnice a plánované regionální hlavní silnice — nejen dlouhý tranzit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Potřebuji známku, když jen projíždím?",
        answer:
          "Ano — podle současných plánů od 1. května 2027 vyžaduje použití zahrnutých belgických hlavních silnic známku bez ohledu na cíl cesty. Konečná pravidla se mohou ještě změnit před spuštěním.",
      },
      {
        question: "Platí zahraniční auta stejně jako belgická?",
        answer:
          "Ano. Plánovaný systém uplatňuje stejnou digitální známku na belgické i zahraniční značky. Pravidla EU o rovném zacházení vysvětlují, proč nelze účtovat pouze cizincům.",
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
    title: "Kdy mohu koupit belgickou dálniční známku?",
    intro:
      "Podle současných plánů je online prodej očekáván od 1. března 2027. Dálniční známka by byla povinná od 1. května 2027. Konečné podmínky a oficiální prodejní portál se ještě mohou změnit.",
    sections: [
      {
        id: "when",
        title: "Kdy začíná prodej?",
        paragraphs: [
          "Vlámská vláda uvádí, že známku budete moci koupit online od 1. března 2027 — na oficiálním webu nebo u autorizovaného partnera.",
          "Dnes neexistuje prodejní portál: zatím nelze rezervovat ani platit. Stránky, které to již nabízejí, nejsou oficiálním kanálem.",
        ],
      },
      {
        id: "expected",
        title: "Co se očekává",
        paragraphs: [
          "Známka bude digitální a vázaná na registrační značku — bez nálepky na čelním skle.",
          "Podle plánů zvolíte dobu platnosti 1 den, 10 dní, 1 měsíc, 2 měsíce nebo 1 rok.",
        ],
      },
    ],
    statusBadge: "Prodej očekáván od 1. března 2027",
    officialSourceLabel: "Oficiální zdroj",
    steps: [
      {
        title: "Počkejte na oficiální prodej",
        description: "Online nákup očekáván od 1. března 2027 podle vlámské vlády.",
      },
      { title: "Zaregistrujte svou značku", description: "Digitální systém — bez nálepky na čelním skle." },
      { title: "Vyberte dobu platnosti", description: "Den, 10 dní, měsíc, 2 měsíce nebo roční." },
      { title: "Jeďte s platnou známkou", description: "Kamery kontrolují automaticky od 1. května 2027." },
    ],
    faqs: [
      {
        question: "Mohu si ji předobjednat?",
        answer:
          "Ne. Podle současných plánů začíná online prodej 1. března 2027. Přihlaste se k newsletteru, abyste dostali oficiální kanál, až bude oznámen.",
      },
      {
        question: "Kdy je známka povinná?",
        answer:
          "Podle plánů od 1. května 2027 na belgických dálnicích a regionálních silnicích. Období tolerance je plánováno od 1. května do 1. července 2027.",
      },
    ],
  },
  tolls: csTolls,
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
          "Uchovávání: dokud nevymažete úložiště nebo neaktualizujeme tyto zásady (verze 2026-08-04).",
        ],
      },
      {
        id: "news-editorial",
        title: "Zprávy, shrnutí a redakční obsah",
        paragraphs: [
          "Naše sekce novinek publikuje nezávislá shrnutí veřejně dostupných zpráv o belgické známce. Tyto stránky nejsou reprodukcí původních článků.",
          "Shrnutí a překlady mohou být vytvořeny s pomocí AI a mohou se ve formulaci lišit od zdroje. Vždy odkazujeme na původního vydavatele. Náš redakční komentář („Náš pohled“) je psán nezávisle a nereprezentuje původního vydavatele ani belgické úřady.",
          "Obrázky v novinkových článcích mohou pocházet z propojeného původního článku nebo tiskových agentur, s uvedením autorství kde je to relevantní. Takový obsah zůstává majetkem příslušných držitelů práv. Zobrazujeme jej v dobré víře jako referenci spolu s odkazem na zdroj. Pokud se domníváte, že váš obsah je použit nesprávně, kontaktujte info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Vaše práva (GDPR)",
        paragraphs: ["Přístup, oprava, výmaz, námitka — info@tolls.be."],
      },
    ],
    lastUpdated: "4 August 2026",
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
    emailPlaceholder: "E-mailová adresa",
    consentLabel: "Souhlasím se zasíláním aktualizací a přečetl(a) jsem",
    success: "Děkujeme! Jste přihlášeni k odběru.",
    error: "Něco se pokazilo. Zkuste to prosím znovu.",
    privacyLink: "zásady ochrany soukromí",
    sticky: {
      teaser: "Známka ještě není v prodeji — získejte odkaz na nákup",
      cta: "Přihlásit se →",
      closeLabel: "Zavřít",
    },
    intents: {
      home: {
        title:
          "Získejte oficiální odkaz na nákup, jakmile bude belgická známka dostupná",
        description:
          "Prodej je plánován od 1. března 2027. Zanechte e-mailovou adresu a dostanete upozornění, jakmile bude oficiální nákup možný.",
        benefits: [
          "Oficiální odkaz na nákup, jakmile bude dostupný",
          "Aktualizace při změnách cen nebo pravidel",
          "Žádné zbytečné e-maily",
        ],
        submit: "Pošlete mi odkaz na nákup",
      },
      prices: {
        title: "Dostávejte upozornění, jakmile budou známé konečné ceny známky",
        description:
          "Aktuální sazby jsou zveřejněny, ale zavedení ještě musí být definitivně schváleno. Sledujeme oficiální informace za vás.",
        benefitsIntro: "Dostanete jeden e-mail, jakmile:",
        benefits: [
          "budou potvrzeny konečné ceny;",
          "začne oficiální prodej;",
          "bude dostupný oficiální odkaz na nákup.",
        ],
        submit: "Informujte mě",
      },
      buy: {
        title: "Dejte mi vědět, jakmile bude belgická známka v prodeji",
        description:
          "Oficiální prodej ještě nezačal. Podle současného plánu můžete belgickou známku koupit od 1. března 2027. Zanechte e-mailovou adresu a dostanete upozornění, jakmile bude oficiální nákup možný.",
        benefits: [],
        submit: "Pošlete mi odkaz na nákup",
      },
      foreign: {
        title:
          "Dejte mi vědět, kdy budou moci zahraniční auta registrovat známku",
        description:
          "Podle plánů budou zahraniční řidiči také potřebovat belgickou známku. Dostanete upozornění, jakmile bude registrace a nákup oficiálně možné.",
        benefits: [
          "Začátek oficiálního prodeje",
          "Pravidla pro zahraniční registrační značky",
          "Oficiální odkaz na nákup",
        ],
        submit: "Informujte mě",
      },
      news: {
        title: "Dostávejte důležité aktualizace o belgické známce",
        description:
          "Krátká, relevantní upozornění, když se objeví oficiální zprávy o cenách, pravidlech nebo začátku prodeje.",
        benefits: [
          "Důležité oficiální aktualizace",
          "Žádný denní spam",
          "Odkaz na nákup, jakmile bude dostupný",
        ],
        submit: "Dostávat aktualizace",
      },
      default: {
        title:
          "Získejte oficiální odkaz na nákup, jakmile bude belgická známka dostupná",
        description:
          "Prodej podle plánu začíná 1. března 2027. Pošleme vám jedno upozornění, jakmile budete moci oficiálně koupit.",
        benefits: [
          "Oficiální odkaz na nákup",
          "Aktualizace o cenách a pravidlech",
          "Žádné zbytečné e-maily",
        ],
        submit: "Pošlete mi odkaz na nákup",
      },
    },
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
    {
      title: "Vlámská vláda — Dálniční známka od 1. května 2027",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Oficiální stránka o povinnosti, tarifech a nákupu od 1. března 2027",
    },
    {
      title: "Viapass — kilometrové mýtné pro nákladní vozy",
      url: "https://www.viapass.be",
      description: "Stávající systém pro vozidla nad 3,5 tuny (ne osobní známka)",
    },
    {
      title: "Evropská komise — zpoplatnění silnic",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "Rámec EU pro mýtné a nediskriminaci",
    },
  ],
};

export default dictionary;
