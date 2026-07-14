import type { Dictionary } from "../types";

const dictionary: Dictionary = {
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
      title: "Vignetta Belgio 2027 — tariffe, regole e guida per automobilisti stranieri",
      description:
        "Guida indipendente sulla vignetta stradale digitale belga prevista dal 1 May 2027. Tariffe, esenzioni, sanzioni e consigli pratici per automobilisti olandesi, tedeschi e altri conducenti transfrontalieri.",
    },
    prices: {
      title: "Tariffe vignetta Belgio 2027 — giornaliera, mensile e annuale",
      description:
        "Tariffe previste per la vignetta belga: €100/anno, brevi periodi da €9/giorno. Spiegazione semplice della norma Euro sulle emissioni.",
    },
    foreign: {
      title: "Vignetta Belgio per auto straniere e automobilisti transfrontalieri",
      description:
        "Guida pratica per automobilisti dai Paesi Bassi, dalla Germania e dalla Francia in transito in Belgio. Cosa sapere secondo i piani attuali.",
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
      title: "Acquistare la vignetta belga — quando e come (sistema digitale previsto)",
      description:
        "Non ancora in vendita. Cosa aspettarsi secondo i piani: un sistema digitale collegato alla targa, senza adesivo sul parabrezza.",
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
    lastUpdatedDate: "14 luglio 2026",
    lastUpdatedIso: "2026-07-14",
    readMore: "Scopri di più",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — informazioni indipendenti sui pedaggi in Belgio",
    backToHome: "Torna alla home",
    plannedNotice:
      "I piani presentati a March 2026 potrebbero ancora cambiare. Seguiamo le fonti ufficiali e aggiorniamo questa pagina non appena ci sono novità.",
    independentSite: "Sito informativo indipendente",
    contactLabel: "Contatto",
    cookieSettings: "Impostazioni cookie",
    tableCategory: "Categoria",
    tablePrice: "Prezzo",
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
      eyebrow: "Previsto dal 1 May 2027",
      title: "La vignetta digitale belga, spiegata in modo chiaro",
      subtitle:
        "Da May 2027, Fiandre, Vallonia e Bruxelles prevedono di far pagare agli automobilisti l'uso delle strade principali. Nessun adesivo sul parabrezza — una vignetta digitale collegata alla targa.",
      ctaPrimary: "Vedi le tariffe",
      ctaSecondary: "Info per automobilisti stranieri",
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
          "Non esiste ancora un canale di vendita ufficiale. Iscriviti alla nostra newsletter per ricevere aggiornamenti sul lancio.",
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
    faqs: [
      {
        question: "I furgoni commerciali sono deducibili?",
        answer: "Secondo i piani, il costo della vignetta per i furgoni professionali potrebbe essere interamente deducibile come spesa aziendale.",
      },
    ],
  },
  foreign: {
    title: "Automobilisti stranieri",
    intro:
      "Si stima che oltre la metà dei chilometri percorsi sulle strade belghe sia guidata da automobilisti stranieri. Se venite dai Paesi Bassi, dalla Germania, dalla Francia o da altrove, ecco cosa significano i piani per voi.",
    sections: [
      {
        id: "eu-rules",
        title: "Trattamento uguale",
        paragraphs: [
          "Anche gli automobilisti belgi pagano — le norme UE impediscono di addebitare solo agli stranieri. Anche la targa estera è coperta.",
          "Si stima che circa 30 milioni di autovetture straniere attraversino il Belgio ogni anno.",
        ],
      },
      {
        id: "digital",
        title: "Digitale, senza adesivo",
        paragraphs: [
          "Nessuna vignetta fisica da acquistare o esporre. Il sistema utilizza il riconoscimento automatico delle targhe (ANPR). Acquistate prima di mettervi in viaggio.",
        ],
      },
      {
        id: "history",
        title: "Contesto storico",
        paragraphs: [
          "Il Belgio aveva tentato una vignetta nel 2007, ma la ritirò dopo le proteste olandesi. I ministri olandesi hanno espresso nuovamente delusione — nessun regime speciale di frontiera nei piani attuali.",
        ],
      },
    ],
    countryTips: [
      {
        country: "🇳🇱 Paesi Bassi",
        tips: [
          "Le rotte popolari via E19 (Anversa), E40 (Bruxelles) e E314 (Liegi) sono coperte.",
          "Nessun accordo speciale per gli automobilisti del sud dei Paesi Bassi secondo i piani attuali.",
        ],
      },
      {
        country: "🇩🇪 Germania",
        tips: [
          "Il transito via Aachen–Liegi o verso la Francia probabilmente richiede una vignetta.",
          "Le opzioni a breve periodo (1–10 giorni) sono adatte al traffico di transito.",
        ],
      },
      {
        country: "🇫🇷 Francia",
        tips: [
          "Automobilisti del nord della Francia e della Vallonia: verificate se il vostro itinerario utilizza le strade principali regionali belghe.",
        ],
      },
    ],
    faqs: [
      {
        question: "Serve la vignetta se attraverso solo il paese?",
        answer: "Sì — secondo i piani, l'uso delle strade principali richiede una vignetta indipendentemente dalla destinazione.",
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
    title: "Come acquistare",
    intro:
      "Non esiste ancora un canale di vendita ufficiale. È previsto un sistema digitale, ma i dettagli su sito web e app non sono noti.",
    sections: [
      {
        id: "status",
        title: "Stato attuale",
        paragraphs: [
          "I piani devono ancora ottenere l'approvazione della Vallonia, di Bruxelles e della Commissione europea prima che le vendite possano iniziare.",
        ],
      },
      {
        id: "expected",
        title: "Cosa è previsto",
        paragraphs: ["Registrazione online della targa. Nessun adesivo fisico necessario."],
      },
    ],
    statusBadge: "Non ancora disponibile",
    steps: [
      { title: "Attendere il lancio ufficiale", description: "Vendite previste prima del 1 May 2027." },
      { title: "Registrare la targa", description: "Sistema digitale — nessun adesivo sul parabrezza." },
      { title: "Scegliere la durata", description: "Giorno, 10 giorni, mese, 2 mesi o annuale." },
      { title: "Guidare con vignetta valida", description: "Le telecamere controllano automaticamente." },
    ],
    faqs: [
      {
        question: "Posso preordinare ora?",
        answer: "No. Iscriviti alla nostra newsletter per restare informato.",
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
          "Conservazione: fino a quando non cancelli la memorizzazione o aggiorniamo questa informativa (versione 2026-07-14).",
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
    lastUpdated: "14 luglio 2026",
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
    title: "Resta informato",
    description: "Ricevi una notifica quando le vendite ufficiali saranno attive e quando verranno pubblicati aggiornamenti importanti.",
    emailPlaceholder: "Il tuo indirizzo email",
    consentLabel: "Accetto di ricevere aggiornamenti e ho letto l'informativa sulla privacy.",
    submit: "Iscriviti",
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
    { title: "Governo fiammingo", url: "https://www.vlaanderen.be", description: "Annunci ufficiali" },
    { title: "Viapass", url: "https://www.viapass.be", description: "Sistema di tassa al km per camion" },
    { title: "Commissione europea", url: "https://ec.europa.eu", description: "Revisione dell'accordo" },
  ],
};

export default dictionary;
