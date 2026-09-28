import type { Dictionary } from "../types";

export const csTolls: Dictionary["tolls"] = {
  title: "Mýtné v Belgii: placené dálnice a dálniční známka 2027",
  intro:
    "Jedete do Belgie autem? Zjistěte, zda jsou belgické dálnice zpoplatněné, jak bude fungovat plánovaná silniční známka od roku 2027 a jaké sazby se mohou vztahovat na vaše vozidlo.",
  blocks: [
    {
      type: "section",
      id: "paid-motorways",
      title: "Jsou dálnice v Belgii placené?",
      paragraphs: [
        "Pro osobní auta Belgie v současnosti nepoužívá obecný systém dálničních známek jako Rakousko nebo Švýcarsko.",
        "To by se mělo v roce 2027 změnit.",
        "Belgie plánuje zavést digitální silniční známku od 1. května 2027 pro vozidla používající dálnice a regionální silnice pokryté systémem. Vztahovala by se na belgická i zahraniční vozidla.",
        "Pokud plánujete jet v Belgii po tomto datu, podívejte se na náš kompletní průvodce [[home|dálniční známkou Belgie 2027]].",
      ],
    },
    {
      type: "summary",
      title: "Stručně",
      items: [
        {
          label: "Dnes",
          value: "Žádná obecná silniční známka pro osobní auta.",
        },
        {
          label: "Od 1. května 2027",
          value: "Je plánována digitální známka.",
        },
        {
          label: "Dotčená vozidla",
          value:
            "Motorová vozidla s nejméně čtyřmi koly do 3,5 tuny.",
        },
        {
          label: "Zahraniční auta",
          value: "Také dotčená.",
        },
        {
          label: "Motocykly",
          value: "Není pokryto touto povinností podle současných plánů.",
        },
        {
          label: "Nákup",
          value:
            "Online, s otevřením prodeje očekávaným od 1. března 2027.",
        },
      ],
    },
    {
      type: "section",
      id: "toll-or-vignette",
      title: "Mýtné, nebo známka: jak bude belgický systém fungovat?",
      paragraphs: [
        "Plánovaný belgický systém není klasické mýtné, kde platíte u každé závory.",
        "Jde o silniční známku, která dává přístup k pokrytým silnicím na stanovené období.",
        "Na rozdíl od samolepky na čelní sklo bude belgická známka digitální a vázaná na registrační značku vozidla.",
        "Fyzickou samolepku nebudete potřebovat. Při nákupu musíte správně zadat registrační značku.",
        "Jak nový systém funguje, se dozvíte v našem průvodci [[home|silniční známkou v Belgii]].",
      ],
    },
    {
      type: "section",
      id: "covered-roads",
      title: "Které silnice budou v Belgii v roce 2027 placené?",
      paragraphs: [
        "Známka je plánována pro používání belgických dálnic a pokrytých regionálních silnic.",
        "Řidiči, kteří jezdí pouze po místních silnicích, by známku neměli potřebovat.",
        "Každý, kdo projíždí Belgií po dálnicích — například do Francie, Nizozemska, Německa nebo Lucemburska — bude muset po nabytí účinnosti zohlednit novou povinnost.",
        "Praktické detaily a přesná silniční síť mohou být před spuštěním ještě upřesněny.",
      ],
    },
    {
      type: "pricing",
      id: "prices",
      title: "Kolik bude stát mýtné v Belgii?",
      paragraphs: [
        "Neměla by existovat jedna cena za jízdu. Řidič si koupí známku platnou po zvolené období.",
        "Zveřejněné sazby závisí na emisní normě Euro vozidla a zvolené délce.",
      ],
      durationHeader: "Doba platnosti",
      priceHeader: "Sazba",
      tables: [
        {
          title: "Plánované sazby pro vozidla Euro 4 a vyšší",
          rows: [
            { label: "1 den", value: "€9" },
            { label: "10 dní", value: "€12" },
            { label: "1 měsíc", value: "€19" },
            { label: "2 měsíce", value: "€30" },
            { label: "1 rok", value: "€100" },
          ],
        },
        {
          title: "Plánované sazby pro vozidla Euro 0 až Euro 3",
          rows: [
            { label: "1 den", value: "€11.25" },
            { label: "10 dní", value: "€15" },
            { label: "1 měsíc", value: "€23.75" },
            { label: "2 měsíce", value: "€37.50" },
            { label: "1 rok", value: "€125" },
          ],
        },
        {
          title: "Plánované sazby pro vozidla s nulovými emisemi",
          rows: [
            { label: "1 den", value: "€8.10" },
            { label: "10 dní", value: "€10.80" },
            { label: "1 měsíc", value: "€17.10" },
            { label: "2 měsíce", value: "€27" },
            { label: "1 rok", value: "€90" },
          ],
        },
      ],
      linkParagraph:
        "Částky, kategorie vozidel a nejnovější aktualizace najdete na stránce [[prices|cen dálniční známky Belgie]].",
      notice:
        "Pozor: systém ještě musí projít posledními legislativními kroky. Pravidla se mohou před nabytím účinnosti změnit.",
    },
    {
      type: "section",
      id: "transit",
      title: "Musíte platit za průjezd Belgií?",
      paragraphs: [
        "Od 1. května 2027, pokud systém startuje podle plánu, budou řidiči používající pokryté dálnice nebo regionální silnice potřebovat platnou známku.",
        "To platí i pro řidiče, kteří Belgií pouze projíždějí do jiné země.",
        "Auto registrované ve Francii, Nizozemsku nebo Německu není automaticky osvobozeno proto, že řidič nebydlí v Belgii.",
        "Známka je plánována pro pokrytá vozidla používající silniční síť bez ohledu na zemi registrace.",
        "Podívejte se na našeho průvodce pro [[foreign|zahraniční řidiče v Belgii]] ohledně pravidel pro zahraniční vozidla.",
      ],
    },
    {
      type: "section",
      id: "french-cars",
      title: "Budou francouzská auta muset platit na belgických dálnicích?",
      paragraphs: [
        "Francouzská auta budou podléhat stejným pravidlům známky jako ostatní zahraniční auta na pokrytých silnicích.",
        "Francouzský řidič na belgické dálnici od 1. května 2027 bude podle současných plánů potřebovat platnou známku.",
        "Na krátký pobyt nebo prostý průjezd není nutné automaticky kupovat roční známku. Plánovány jsou také doby 1 den, 10 dní, 1 měsíc a 2 měsíce.",
      ],
    },
    {
      type: "section",
      id: "foreign-cars",
      title: "Budou zahraniční auta muset platit?",
      paragraphs: [
        "Ano. Plány výslovně vztahují známku na zahraniční uživatele pokrytých dálnic a regionálních silnic.",
        "To zahrnuje vozidla z:",
      ],
      list: [
        "Francie",
        "Nizozemska",
        "Německa",
        "Lucemburska",
        "Spojeného království",
        "dalších evropských i mimoevropských zemí",
      ],
    },
    {
      type: "section",
      id: "motorcycles",
      title: "Budou motocykly muset platit mýtné v Belgii?",
      paragraphs: [
        "Plánovaná známka pokrývá motorová vozidla s nejméně čtyřmi koly a maximální technicky přípustnou hmotností nejvýše 3,5 tuny.",
        "Motocykly tedy nejsou touto povinností podle současných plánů pokryty.",
        "Jiné kategorie vozidel mohou mít jiná pravidla. Před cestou zkontrolujte úplný seznam [[exemptions|osvobození od belgické známky]].",
      ],
    },
    {
      type: "section",
      id: "campervans",
      title: "Obytné vozy a dodávky: potřebují známku?",
      paragraphs: [
        "Obytné vozy a některé dodávky do 3,5 tuny spadají do plánovaného systému, když používají pokryté dálnice a regionální silnice.",
        "Klíčová kritéria jsou kategorie vozidla a maximální technicky přípustná hmotnost.",
        "Vozidla nad 3,5 tuny mohou spadat pod jiný systém silničního zpoplatnění.",
      ],
    },
    {
      type: "section",
      id: "trucks",
      title: "A co nákladní vozy nad 3,5 tuny?",
      paragraphs: [
        "Nová známka pro vozidla do 3,5 tuny nenahrazuje stávající belgický systém pro těžká nákladní vozidla.",
        "Belgie již má kilometrové mýtné pro nákladní vozy v rámci Viapass.",
        "Rozdíl je tedy následující:",
      ],
      list: [
        "Auta, lehké dodávky a některé obytné vozy do 3,5 t → silniční známka plánovaná od roku 2027.",
        "Pokrytá těžká nákladní vozidla nad 3,5 t → stávající kilometrové mýtné.",
      ],
    },
    {
      type: "section",
      id: "buy",
      title: "Kde koupit známku na belgické dálnice?",
      paragraphs: [
        "Známka ještě není v prodeji.",
        "Podle aktuálně zveřejněných oficiálních informací by měl být nákup možný od 1. března 2027, před plánovaným startem 1. května.",
        "Měla by být dostupná online přes oficiální web nebo uznanou partnerskou organizaci.",
        "Nekupujte údajnou známku Belgie 2027 na neověřeném webu před oficiálním otevřením prodeje.",
        "Sledujeme otevření prodeje a odkaz zveřejníme, až bude k dispozici. Nejnovější informace najdete na [[buy|kde koupit dálniční známku Belgie]].",
      ],
    },
    {
      type: "section",
      id: "enforcement",
      title: "Jak bude známka kontrolována?",
      paragraphs: [
        "Známka bude plně digitální a vázaná na registrační značku vozidla.",
        "Fyzickou samolepku na čelní sklo nebudete potřebovat.",
        "Správné zadání registrační značky při nákupu je zásadní. Jízda po silnici se známkou bez platné známky může po plné aktivaci kontroly vést k pokutě.",
        "Nejnovější pravidla kontroly a sankcí najdete na stránce [[fines|pokuty za dálniční známku Belgie]].",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "Belgie 2027: mýtné, známka, nebo volné dálnice?",
      paragraphs: [
        "Změna může mást, protože pojmy jako mýtné Belgie, placená dálnice Belgie a dálniční známka Belgie se často používají pro tutéž změnu.",
        "V praxi plánovaný systém není tradiční vzdálenostní mýtné pro osobní auta.",
        "Jde o digitální známku platnou po zvolené období.",
        "Můžete zvolit délku podle cesty: jeden den na krátký průjezd, 10 dní na pobyt, jeden nebo dva měsíce na delší období, nebo roční známku při pravidelném používání.",
      ],
    },
  ],
  faqTitle: "Často kladené otázky o mýtném v Belgii",
  faqs: [
    {
      question: "Je v Belgii mýtné?",
      answer:
        "Pro osobní auta v současnosti neexistuje obecná silniční známka srovnatelná se systémy v některých jiných evropských zemích. Digitální známka je plánována od 1. května 2027 pro používání pokrytých dálnic a regionálních silnic.",
    },
    {
      question: "Budou belgické dálnice v roce 2027 placené?",
      answer:
        "Používání pokrytých dálnic a regionálních silnic bude vyžadovat známku pro vozidla v novém systému, pokud nabude účinnosti podle plánu 1. května 2027.",
    },
    {
      question: "Kolik bude stát dálnice v Belgii?",
      answer:
        "Cena se u pokrytých aut neúčtuje za kilometr. Pro vozidlo Euro 4 nebo vyšší se zveřejněné sazby aktuálně pohybují od €9 za 1 den do €100 za 1 rok. Starší vozidla a vozidla s nulovými emisemi mají jiné sazby.",
    },
    {
      question: "Potřebuji známku na cestu do Belgie?",
      answer:
        "Záleží na datu a silnicích, které použijete. Známka je plánována od 1. května 2027 pro pokrytá vozidla na dálnicích a regionálních silnicích. Pokud používáte pouze místní silnice, známka by neměla být potřeba.",
    },
    {
      question: "Kde koupit dálniční známku Belgie?",
      answer:
        "Prodej ještě není otevřen. Očekává se start 1. března 2027 přes oficiální web a uznané partnerské organizace. Aktualizace sledujte na naší stránce Jak koupit.",
    },
    {
      question: "Musí motocykly platit na belgických dálnicích?",
      answer:
        "Plánovaná známka se vztahuje na motorová vozidla s nejméně čtyřmi koly do 3,5 tuny. Motocykly tedy nejsou touto povinností podle současných plánů pokryty.",
    },
  ],
  closing: {
    title: "Připravte si cestu do Belgie",
    paragraphs: [
      "Belgický systém má nabýt účinnosti 1. května 2027, ale několik detailů se může před spuštěním ještě změnit.",
      "Před odjezdem zkontrolujte:",
    ],
    checklist: [
      "zda je vaše vozidlo pokryto;",
      "které silnice budete používat;",
      "jakou dobu platnosti známky potřebujete;",
      "sazbu pro vaše vozidlo;",
      "že nakupujete u uznaného kanálu.",
    ],
    links: [
      { href: "home", label: "Dálniční známka Belgie 2027" },
      { href: "prices", label: "Ceny známky" },
      { href: "buy", label: "Jak koupit belgickou známku" },
    ],
  },
};
