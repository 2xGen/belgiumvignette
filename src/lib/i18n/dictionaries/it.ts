import type { BaseDictionary } from "../types";

const dictionary: BaseDictionary = {
  locale: "it",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Tutto sulla vignetta stradale digitale belga — per residenti e automobilisti stranieri.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Home",
    prices: "Tariffe",
    foreign: "Automobilisti stranieri",
    exemptions: "Esenzioni",
    fines: "Sanzioni",
    buy: "Come acquistare",
    news: "Notizie e aggiornamenti",
    privacy: "Privacy",
  },
  meta: {
    home: {
      title: "Vignetta Belgio 2027: ti serve una vignetta per il Belgio?",
      description:
        "Il Belgio prevede di introdurre una vignetta stradale digitale dal 1 maggio 2027. Scopri se ti serve, quanto costa, chi è esente e quando inizieranno le vendite.",
    },
    prices: {
      title: "Tariffe vignetta Belgio 2027 — giornaliera, mensile e annuale",
      description:
        "Tariffe previste per la vignetta belga: €100/anno, brevi periodi da €9/giorno. Spiegazione semplice della norma Euro sulle emissioni.",
    },
    foreign: {
      title: "Le auto estere hanno bisogno della vignetta belga nel 2027?",
      description:
        "Sì — secondo i piani attuali, le auto passeggeri estere avranno bisogno della vignetta belga dal 1° maggio 2027 sulle strade coperte. Guida per automobilisti olandesi, tedeschi e francesi.",
    },
    exemptions: {
      title: "Esenzioni vignetta Belgio — moto, camion e altro",
      description:
        "Chi è esentato secondo i piani? Moto, camion, servizi di emergenza e altre categorie spiegate.",
    },
    fines: {
      title: "Sanzioni vignetta Belgio — controlli e periodo di tolleranza",
      description:
        "Sanzioni previste fino a €210, controlli ANPR e tolleranza fino al 1 July 2027.",
    },
    buy: {
      title: "Acquistare la vignetta belga — vendita prevista dal 1 marzo 2027",
      description:
        "Secondo i piani attuali, la vendita online della vignetta belga è prevista dal 1 marzo 2027. Obbligatoria dal 1 maggio 2027. Fonte ufficiale: Governo fiammingo.",
    },
    news: {
      title: "Notizie sulla vignetta belga — fonti attendibili spiegate",
      description:
        "Riassunti indipendenti delle notizie ufficiali sulla vignetta belga con la nostra opinione editoriale. Link alle fonti originali.",
    },
    privacy: {
      title: "Informativa sulla privacy — BelgiumVignette.be",
      description:
        "Come BelgiumVignette.be gestisce cookie, analitiche, dati della newsletter e i tuoi diritti GDPR.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be è un sito informativo indipendente. Non siamo affiliati al governo belga, alla Fiandre, alla Vallonia o a Bruxelles.",
    lastUpdated: "Ultimo aggiornamento",
    lastUpdatedDate: "14 agosto 2026",
    lastUpdatedIso: "2026-08-14",
    readMore: "Scopri di più",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — informazioni indipendenti sui pedaggi in Belgio",
    backToHome: "Torna alla home",
    plannedNotice:
      "I piani presentati a March 2026 potrebbero ancora cambiare. Seguiamo le fonti ufficiali e aggiorniamo questa pagina non appena ci sono novità.",
    independentSite: "Info vignetta stradale belga",
    contactLabel: "Contatto",
    cookieSettings: "Impostazioni cookie",
    tableCategory: "Categoria",
    tablePrice: "Prezzo",
    lastChecked: "Ultimo controllo",
  },
  notFound: {
    title: "Pagina non trovata",
    description:
      "Questa pagina non esiste o è stata spostata. Torna alla homepage o consulta le ultime notizie sulla vignetta belga.",
    homeLink: "Vai alla homepage",
    newsLink: "Notizie e aggiornamenti",
  },
  home: {
    hero: {
      eyebrow: "Previsto dal 1 maggio 2027",
      title: "Vignetta Belgio 2027: ti serve una vignetta per il Belgio?",
      subtitle:
        "Il Belgio prevede di introdurre una vignetta stradale digitale dal 1 maggio 2027. Scopri se ti serve, quanto costa, chi è esente e quando inizieranno le vendite.",
      ctaPrimary: "Verifica se ti serve una vignetta",
      ctaSecondary: "Avvisami all'apertura delle vendite",
    },
    decisionTree: {
      title: "Ti serve una vignetta?",
      options: [
        { label: "Auto belga", href: "prices" },
        { label: "Auto olandese", href: "foreign", anchor: "netherlands" },
        { label: "Auto tedesca", href: "foreign", anchor: "germany" },
        { label: "Auto francese", href: "foreign", anchor: "france" },
        { label: "Camper / furgone", href: "exemptions" },
      ],
    },
    quickAnswers: [
      {
        title: "Chi deve acquistarla?",
        summary:
          "Autovetture fino a 3,5 tonnellate, inclusi i veicoli stranieri — anche se attraversate solo il paese.",
        href: "foreign",
      },
      {
        title: "Chi è esentato?",
        summary:
          "Moto, camion (tassa al km), trattori, pullman, servizi di emergenza e polizia.",
        href: "exemptions",
      },
      {
        title: "Quanto costa?",
        summary:
          "Vignetta annuale da €90 (elettrico) a €125 (auto più vecchie). Breve periodo da €9/giorno.",
        href: "prices",
      },
    ],
    pricingTitle: "Tariffe previste a colpo d'occhio",
    pricingSubtitle:
      "Basato sui piani pubblicati (March 2026). Gli importi definitivi potrebbero ancora cambiare.",
    annualTableTitle: "Vignetta annuale",
    shortTermTableTitle: "Breve periodo",
    annualPricing: [
      { label: "Euro 4 e superiori", value: "€100 / year", note: "97%+ delle auto fiamminghe" },
      { label: "Elettrico / idrogeno", value: "€90 / year" },
      { label: "Auto più vecchie (fino a Euro 3)", value: "€125 / year" },
    ],
    shortTermPricing: [
      { label: "1 giorno", value: "€9" },
      { label: "10 giorni", value: "€12" },
      { label: "1 mese", value: "€19" },
      { label: "2 mesi", value: "€30" },
    ],
    timelineTitle: "Date chiave (secondo i piani)",
    timeline: [
      {
        date: "March 2026",
        title: "Piani presentati",
        description:
          "Il governo fiammingo presenta la proposta. Restano da ottenere l'approvazione della Vallonia, di Bruxelles e della Commissione europea.",
      },
      {
        date: "1 May 2027",
        title: "Vignetta obbligatoria",
        description:
          "Vignetta digitale richiesta su autostrade e strade principali regionali.",
      },
      {
        date: "1 July 2027",
        title: "Sanzioni applicate",
        description:
          "Fine del periodo di tolleranza. Telecamere ANPR e unità mobili iniziano i controlli.",
      },
    ],
    faqTitle: "Domande frequenti",
    faqs: [
      {
        question: "È un adesivo fisico?",
        answer:
          "No. Secondo i piani, si tratta di una vignetta digitale collegata alla targa. Nessun adesivo sul parabrezza.",
      },
      {
        question: "Si applica alle auto straniere?",
        answer:
          "Sì. Le norme UE impongono un trattamento uguale. Automobilisti belgi e stranieri devono entrambi pagare.",
      },
      {
        question: "I motociclisti pagano?",
        answer:
          "No. Le moto sono esplicitamente esentate secondo gli annunci dei ministri Weyts (Fiandre) e Desquesnes (Vallonia).",
      },
      {
        question: "Quando posso acquistarla?",
        answer:
          "Secondo i piani attuali, la vendita online è prevista dal 1 marzo 2027. La vignetta diventerebbe obbligatoria dal 1 maggio 2027. Le condizioni definitive possono ancora cambiare.",
      },
    ],
    sourcesTitle: "Fonti ufficiali",
  },
  prices: {
    title: "Tariffe e durate",
    intro:
      "Panoramica delle tariffe previste per la vignetta in base alla norma Euro sulle emissioni. Basato sugli annunci di March 2026 — i dettagli potrebbero cambiare.",
    sections: [
      {
        id: "annual",
        title: "Vignetta annuale",
        paragraphs: [
          "Per chi usa regolarmente le strade principali del Belgio. Il prezzo dipende dalla classe di emissione Euro del veicolo.",
        ],
      },
      {
        id: "short",
        title: "Opzioni a breve periodo",
        paragraphs: [
          "Per viaggi occasionali — vacanze, weekend — sono previste vignette di durata più breve.",
          "Le auto più vecchie e più inquinanti (fino a Euro 3) pagano tariffe leggermente più alte.",
        ],
      },
      {
        id: "road-tax",
        title: "Interazione con la tassa di circolazione (Fiandre)",
        paragraphs: [
          "La Fiandre sta riformando contemporaneamente la tassa di circolazione annuale. Circa la metà degli automobilisti fiamminghi potrebbe pagare di più in totale — fino a €100/anno in più.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 e superiori", value: "€100", note: "Year" },
      { label: "Elettrico / idrogeno", value: "€90", note: "Year" },
      { label: "Fino a Euro 3", value: "€125", note: "Year" },
    ],
    shortTermTable: [
      { label: "1 giorno", value: "€9" },
      { label: "10 giorni", value: "€12" },
      { label: "1 mese", value: "€19" },
      { label: "2 mesi", value: "€30" },
    ],
    euroNormTitle: "Le norme Euro spiegate",
    euroNormCategoryHeader: "Norma",
    euroNormDescriptionHeader: "Descrizione",
    euroNormItems: [
      { norm: "Euro 4+", description: "Auto dal ~2005–2006 in poi. La maggior parte dei veicoli in circolazione." },
      { norm: "Elettrico / H₂", description: "Zero emissioni. Tariffa prevista più bassa." },
      { norm: "Euro 3 e inferiori", description: "Veicoli più vecchi e più inquinanti." },
    ],
    vignettePagesTitle: "Per tipo di vignetta",
    faqs: [
      {
        question: "I furgoni commerciali sono deducibili?",
        answer: "Secondo i piani, il costo della vignetta per i furgoni professionali potrebbe essere interamente deducibile come spesa aziendale.",
      },
    ],
  },
  foreign: {
    title: "Le auto estere hanno bisogno della vignetta belga?",
    intro:
      "Sì, secondo i piani attuali. Le auto passeggeri immatricolate all'estero avranno bisogno della vignetta belga dal 1° maggio 2027 quando utilizzano le strade belghe coperte. Il sistema previsto non distingue tra targhe belghe e estere: un'auto immatricolata nei Paesi Bassi, in Francia, in Germania o in un altro paese dovrebbe richiedere la stessa vignetta digitale di un veicolo belga. Le regole definitive potrebbero ancora cambiare fino all'approvazione e al lancio ufficiale del sistema.",
    sections: [
      {
        id: "eu-rules",
        title: "Trattamento uguale",
        paragraphs: [
          "Anche gli automobilisti belgi pagano — le norme UE impediscono di addebitare solo agli stranieri. Anche la targa estera rientra nello stesso sistema previsto.",
          "Si stima che circa 30 milioni di autovetture straniere attraversino il Belgio ogni anno.",
        ],
      },
      {
        id: "digital",
        title: "Sistema digitale",
        paragraphs: [
          "Nessuna vignetta fisica da acquistare o esporre. Il sistema dovrebbe utilizzare il riconoscimento automatico delle targhe (ANPR). Acquistate prima di circolare sulle strade coperte.",
        ],
      },
      {
        id: "history",
        title: "Contesto storico",
        paragraphs: [
          "Il Belgio aveva tentato una vignetta nel 2007, ma la ritirò dopo le proteste olandesi. I ministri olandesi hanno di nuovo espresso preoccupazione — e nei piani attuali non è ancora stato annunciato un regime speciale di frontiera per i paesi confinanti.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Paesi Bassi",
        tips: [
          "Sì — le autovetture immatricolate nei Paesi Bassi dovrebbero aver bisogno della vignetta belga dal 1° maggio 2027 sulle strade belghe coperte.",
          "Ciò riguarda rotte comuni come Paesi Bassi → Anversa, Paesi Bassi → Bruxelles e transito Paesi Bassi → Lussemburgo/Francia.",
          "Al momento non è stata annunciata alcuna esenzione per le regioni di confine olandesi.",
        ],
      },
      {
        id: "germany",
        country: "Germania",
        tips: [
          "Sì — le autovetture immatricolate in Germania dovrebbero aver bisogno della vignetta belga dal 1° maggio 2027 sulle strade belghe coperte.",
          "Ciò include rotte di transito comuni come Aquisgrana → Liegi e Germania → Francia attraverso il Belgio.",
          "Le opzioni a breve periodo (1–10 giorni) previste nei piani possono essere adatte al traffico di transito.",
        ],
      },
      {
        id: "france",
        country: "Francia",
        tips: [
          "Sì — le autovetture immatricolate in Francia dovrebbero aver bisogno della vignetta belga dal 1° maggio 2027 sulle strade belghe coperte.",
          "È particolarmente rilevante per i viaggi dal nord della Francia al Belgio e per le rotte di transito Francia → Paesi Bassi/Germania.",
          "Le strade coperte includono autostrade e strade principali regionali previste — non solo transito a lunga distanza.",
        ],
      },
    ],
    faqs: [
      {
        question: "Serve la vignetta se attraverso solo il paese?",
        answer:
          "Sì — secondo i piani attuali, dal 1° maggio 2027 l'utilizzo delle strade principali belghe coperte richiede una vignetta indipendentemente dalla destinazione. Le regole definitive potrebbero ancora cambiare prima del lancio.",
      },
      {
        question: "Le auto estere pagano come quelle belghe?",
        answer:
          "Sì. Il sistema previsto applica la stessa vignetta digitale a targhe belghe e estere. Le norme UE sull'uguaglianza di trattamento spiegano perché non si possono addebitare solo gli stranieri.",
      },
    ],
  },
  exemptions: {
    title: "Esenzioni",
    intro: "Non tutti i veicoli pagano secondo i piani. Ecco chi è incluso e chi è escluso.",
    sections: [
      {
        id: "motorcycles",
        title: "Moto esentate",
        paragraphs: ["Le moto sono esplicitamente escluse secondo gli annunci dei ministri Weyts e Desquesnes."],
      },
      {
        id: "trucks",
        title: "Camion",
        paragraphs: ["I veicoli pesanti utilizzano il sistema esistente di tassa al km (Viapass), non la vignetta."],
      },
    ],
    exemptTableTitle: "Esenzione",
    requiredTableTitle: "Vignetta richiesta",
    exemptTable: [
      { label: "Moto e ciclomotori", value: "Esenzione" },
      { label: "Camion (>3,5 t)", value: "Esenzione — tassa al km" },
      { label: "Trattori", value: "Esenzione" },
      { label: "Pullman", value: "Esenzione" },
      { label: "Emergenza e polizia", value: "Esenzione" },
      { label: "Difesa", value: "Esenzione" },
    ],
    notExemptTable: [
      { label: "Autovetture (≤3,5 t)", value: "Vignetta richiesta" },
      { label: "Auto straniere", value: "Vignetta richiesta" },
      { label: "Furgoni", value: "Vignetta richiesta" },
      { label: "Auto elettriche", value: "Richiesta (€90/anno previsto)" },
    ],
    faqs: [
      {
        question: "Il mio camper è esentato?",
        answer: "Se immatricolato come veicolo passeggeri ≤3,5 t, rientra nei piani.",
      },
    ],
  },
  fines: {
    title: "Sanzioni e controlli",
    intro: "Controlli tramite telecamere ANPR e unità mobili. È previsto un periodo di tolleranza prima dell'applicazione delle sanzioni.",
    sections: [
      {
        id: "tolerance",
        title: "Periodo di tolleranza",
        paragraphs: ["1 May to 1 July 2027 — nessuna sanzione secondo i piani. Penali dal 1 July in poi."],
      },
      {
        id: "anpr",
        title: "Controlli ANPR",
        paragraphs: ["Telecamere su autostrade e strade principali regionali verificano la validità della vignetta."],
      },
    ],
    fineTable: [
      { label: "1ª infrazione", value: "€70" },
      { label: "2ª infrazione", value: "€140" },
      { label: "3ª e successive", value: "€210" },
    ],
    faqs: [
      {
        question: "Sanzione se dimentico la vignetta?",
        answer: "No durante la tolleranza (May–June 2027). Dopo, sì — anche per le targhe straniere.",
      },
    ],
  },
  buy: {
    title: "Quando posso comprare una vignetta belga?",
    intro:
      "Secondo i piani attuali, la vendita online è prevista dal 1 marzo 2027. La vignetta stradale diventerebbe obbligatoria dal 1 maggio 2027. Le condizioni definitive e il portale ufficiale di vendita possono ancora cambiare.",
    sections: [
      {
        id: "when",
        title: "Quando partono le vendite?",
        paragraphs: [
          "Il Governo fiammingo indica che potrai acquistare la vignetta online dal 1 marzo 2027, sul sito ufficiale o tramite un partner autorizzato.",
          "Oggi non esiste un portale di vendita: non puoi ancora prenotare o pagare. I siti che lo offrono già non sono il canale ufficiale.",
        ],
      },
      {
        id: "expected",
        title: "Cosa è previsto",
        paragraphs: [
          "La vignetta sarà digitale e collegata alla targa — nessun adesivo sul parabrezza.",
          "Secondo i piani scegli una durata di 1 giorno, 10 giorni, 1 mese, 2 mesi o 1 anno.",
        ],
      },
    ],
    statusBadge: "Vendita prevista dal 1 marzo 2027",
    officialSourceLabel: "Fonte ufficiale",
    steps: [
      {
        title: "Attendi la vendita ufficiale",
        description: "Acquisto online previsto dal 1 marzo 2027, secondo il Governo fiammingo.",
      },
      { title: "Registrare la targa", description: "Sistema digitale — nessun adesivo sul parabrezza." },
      { title: "Scegliere la durata", description: "Giorno, 10 giorni, mese, 2 mesi o annuale." },
      { title: "Guidare con vignetta valida", description: "Le telecamere controllano automaticamente dal 1 maggio 2027." },
    ],
    faqs: [
      {
        question: "Posso preordinare ora?",
        answer:
          "No. Secondo i piani attuali, la vendita online inizia il 1 marzo 2027. Iscriviti alla newsletter per ricevere il canale ufficiale quando sarà annunciato.",
      },
      {
        question: "Quando la vignetta diventa obbligatoria?",
        answer:
          "Secondo i piani, dal 1 maggio 2027 su autostrade e strade regionali belghe. È previsto un periodo di tolleranza dal 1 maggio al 1 luglio 2027.",
      },
    ],
  },
  privacy: {
    title: "Informativa sulla privacy",
    intro: "BelgiumVignette.be rispetta la tua privacy. Ecco come gestiamo i tuoi dati.",
    sections: [
      {
        id: "controller",
        title: "Titolare del trattamento",
        paragraphs: ["BelgiumVignette.be — contatto: info@tolls.be."],
      },
      {
        id: "newsletter",
        title: "Newsletter",
        paragraphs: [
          "Email, lingua e timestamp del consenso archiviati in Supabase (hosting UE). Utilizzati solo per aggiornamenti sulla vignetta.",
        ],
      },
      {
        id: "cookies",
        title: "Cookie, analitiche e consenso",
        paragraphs: [
          "Memorizzazione essenziale: salviamo la tua preferenza sui cookie in localStorage. Base giuridica: legittimo interesse (art. 6(1)(f) GDPR) e/o consenso ove richiesto.",
          "Analitiche (opzionale): Vercel Analytics raccoglie visualizzazioni di pagina anonime. Caricato solo dopo il consenso del banner. Base giuridica: consenso (art. 6(1)(a) GDPR). Revoca tramite Impostazioni cookie nel footer.",
          "Google Search Console e Bing Webmaster Tools: solo meta tag di verifica della proprietà — nessun cookie di tracciamento.",
          "Conservazione: fino a quando non cancelli la memorizzazione o aggiorniamo questa informativa (versione 2026-08-04).",
        ],
      },
      {
        id: "news-editorial",
        title: "Notizie, riepiloghi e contenuti editoriali",
        paragraphs: [
          "La nostra sezione notizie pubblica riepiloghi indipendenti di reportage di pubblico dominio sulla vignetta belga. Queste pagine non sono riproduzioni degli articoli originali.",
          "I riepiloghi e le traduzioni possono essere prodotti con l'assistenza dell'IA e possono differire nella formulazione dalla fonte. Colleghiamo sempre l'editore originale. Il nostro commento editoriale («La nostra opinione») è scritto in modo indipendente e non rappresenta l'editore originale né le autorità belghe.",
          "Le immagini negli articoli possono provenire dall'articolo originale collegato o da agenzie di stampa, con crediti ove applicabile. Tali contenuti restano di proprietà dei rispettivi titolari dei diritti. Li mostriamo in buona fede come riferimento insieme a un link alla fonte. Se ritieni che i tuoi contenuti siano usati in modo errato, contatta info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "I tuoi diritti (GDPR)",
        paragraphs: ["Accesso, rettifica, cancellazione, opposizione — info@tolls.be."],
      },
    ],
    lastUpdated: "4 agosto 2026",
  },
  news: {
    title: "Notizie e aggiornamenti",
    intro:
      "Seguiamo fonti ufficiali e mediatiche attendibili sulla vignetta belga prevista. Ogni articolo riassume il resoconto originale e aggiunge la nostra opinione indipendente — con un link diretto alla fonte.",
    latestArticles: "Ultimi articoli",
    summaryTitle: "Riassunto",
    summaryFromSource: "dalla fonte originale:",
    ourTakeTitle: "La nostra opinione",
    sourceTitle: "Fonte originale",
    readArticle: "Leggi l'articolo",
    backToNews: "Torna alle notizie",
    publishedOn: "Pubblicato",
    sourceLabel: "Fonte",
    sourceDisclaimer:
      "Riassumiamo fonti attendibili e inoltriamo all'articolo originale. La nostra opinione è un commento editoriale indipendente, non informazioni ufficiali del governo.",
    translationDisclaimer:
      "Il riepilogo e la traduzione in questa pagina sono stati prodotti con l'assistenza dell'IA dall'articolo originale. Consultare sempre la fonte qui sotto per la formulazione ufficiale.",
    articleAttributionTitle: "Riepilogo indipendente — non l'articolo originale",
    articleAttributionIndependence:
      "BelgiumVignette.be è un sito informativo indipendente. Non siamo affiliati, approvati o rappresentiamo l'editore originale. Questa pagina riassume reportage di pubblico dominio e aggiunge il nostro commento editoriale. Non è una riproduzione dell'articolo originale.",
    articleAttributionAi:
      "Il riepilogo e la traduzione sono stati prodotti con l'assistenza dell'IA e possono differire nella formulazione dall'originale. Consultare sempre la fonte collegata qui sotto per il testo ufficiale.",
    articleAttributionReadOriginal: "Leggi l'articolo originale su",
    articleAttributionCopyright:
      "L'articolo originale, le immagini e altri media restano di proprietà dei rispettivi titolari dei diritti. Colleghiamo la fonte in buona fede per riferimento. I crediti fotografici sono indicati sopra ove applicabile.",
    tableOfContents: "In questa pagina",
    relatedArticles: "Altre notizie e aggiornamenti",
    noArticles: "Nessun articolo pubblicato ancora. Torna presto.",
  },
  newsletter: {
    title: "Ricevi per primo una notifica quando la vignetta belga sarà disponibile",
    description: "",
    benefitsIntro: "",
    benefits: [
      "Inizio vendite ufficiali",
      "Prezzi definitivi confermati",
      "Nuove regole pubblicate",
      "Link di acquisto disponibile",
    ],
    emailPlaceholder: "Indirizzo email",
    consentLabel: "Accetto di ricevere aggiornamenti e ho letto l'informativa sulla privacy.",
    submit: "Avvisami",
    success: "Grazie! Sei iscritto.",
    error: "Qualcosa è andato storto. Riprova.",
    privacyLink: "Informativa sulla privacy",
  },
  cookieBanner: {
    title: "Cookie e privacy",
    description:
      "Memorizzazione essenziale per la tua scelta sui cookie. Opzionale: Vercel Analytics (visualizzazioni di pagina anonime). Nessuna analitica prima della tua decisione.",
    essentialTitle: "Essenziali",
    essentialDescription: "Memorizza la tua preferenza sui cookie in localStorage.",
    alwaysOn: "Sempre attivi — necessari per ricordare la tua scelta.",
    analyticsTitle: "Analitiche (Vercel Analytics)",
    analyticsDescription: "Statistiche anonime sulle visualizzazioni di pagina. Attive solo dopo il consenso.",
    acceptAll: "Accetta tutto",
    rejectAll: "Rifiuta tutto",
    savePreferences: "Salva preferenze",
    manageSettings: "Impostazioni",
    closeSettings: "Chiudi",
    privacyLink: "Informativa sulla privacy",
  },
  sources: [
    {
      title: "Governo fiammingo — Vignetta stradale dal 1 maggio 2027",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Pagina ufficiale su obbligo, tariffe e acquisto dal 1 marzo 2027",
    },
    {
      title: "Viapass — tassa chilometrica per i camion",
      url: "https://www.viapass.be",
      description: "Sistema esistente per veicoli oltre 3,5 tonnellate (non la vignetta auto)",
    },
    {
      title: "Commissione europea — tariffazione stradale",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "Quadro UE per pedaggi e non discriminazione",
    },
  ],
};

export default dictionary;
