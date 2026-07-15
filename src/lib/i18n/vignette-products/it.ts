import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Vignetta giornaliera Belgio 2027",
    intro:
      "La vignetta giornaliera è pensata per brevi tragitti sulle strade principali belghe — ad esempio una gita di un giorno, un transito o un weekend. Le tariffe indicate si basano sui piani pubblicati (marzo 2026) e possono ancora cambiare prima dell'introduzione il 1° maggio 2027.",
    metaTitle: "Vignetta giornaliera Belgio 2027 — prezzo €9 al giorno (concept)",
    metaDescription:
      "Vignetta giornaliera prevista per il Belgio a partire da €9 al giorno. Per brevi tragitti su autostrade e strade regionali. Prezzi concept secondo i piani di marzo 2026 — le tariffe definitive potrebbero ancora cambiare.",
    navLabel: "Vignetta giornaliera",
    sections: [
      {
        id: "what-is-daily",
        title: "Cos'è la vignetta giornaliera?",
        paragraphs: [
          "Secondo i piani, la vignetta giornaliera garantisce 24 ore di accesso alla rete vignettata belga: autostrade, tangenziali autostradali e strade regionali con limite di 70 km/h o superiore.",
          "Il sistema sarà digitale e collegato alla targa — non ci sarà un adesivo fisico sul parabrezza.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Per chi è pensata la vignetta giornaliera?",
        paragraphs: [
          "La vignetta giornaliera conviene agli utenti occasionali: turisti, automobilisti in transito, singoli spostamenti di lavoro o una giornata di shopping oltre confine.",
          "Se attraversi spesso il Belgio, secondo i piani conviene di più una vignetta da 10 giorni, mensile o annuale.",
        ],
      },
      {
        id: "concept-prices",
        title: "Prezzi concept — tariffe non ancora definitive",
        paragraphs: [
          "Tutti gli importi su questa pagina si basano sugli annunci di marzo 2026. Le tariffe definitive saranno fissate solo dopo l'approvazione delle regioni e della Commissione europea.",
          "Prima del viaggio a maggio 2027, verifica sempre le fonti ufficiali.",
        ],
      },
    ],
    priceTableTitle: "Tariffa giornaliera prevista",
    priceTable: [{ label: "1 giorno", value: "€9" }],
    compareTableTitle: "Altri periodi brevi (a confronto)",
    compareTable: [
      { label: "10 giorni", value: "€12" },
      { label: "1 mese", value: "€19" },
      { label: "2 mesi", value: "€30" },
    ],
    relatedPagesTitle: "Altri tipi di vignetta",
    faqs: [
      {
        question: "La vignetta giornaliera vale per un giorno di calendario?",
        answer:
          "Secondo i piani, acquisti una vignetta per un periodo scelto di 24 ore o un giorno di calendario — le regole esatte saranno comunicate al lancio del sistema di vendita.",
      },
      {
        question: "Anche gli stranieri devono acquistare la vignetta giornaliera?",
        answer:
          "Sì. Le norme UE richiedono un trattamento paritario. Secondo i piani, anche i veicoli con targa estera devono avere una vignetta valida sulle strade principali belghe.",
      },
      {
        question: "€9 è già definitivo?",
        answer:
          "No. €9 è la tariffa concept prevista da marzo 2026. I prezzi definitivi potrebbero ancora essere modificati.",
      },
    ],
  },
  monthlyVignette: {
    title: "Vignetta mensile Belgio 2027",
    intro:
      "La vignetta mensile è prevista per chi percorre per alcune settimane le strade principali belghe — ad esempio per un lavoro temporaneo, una vacanza o un soggiorno più lungo. Le tariffe sono prezzi concept secondo i piani di marzo 2026.",
    metaTitle: "Vignetta mensile Belgio 2027 — da €19 al mese (concept)",
    metaDescription:
      "Vignetta mensile prevista per il Belgio da €19 al mese, 2 mesi €30. Prezzi concept per autostrade e strade regionali dal 1° maggio 2027.",
    navLabel: "Vignetta mensile",
    sections: [
      {
        id: "what-is-monthly",
        title: "Cos'è la vignetta mensile?",
        paragraphs: [
          "Secondo i piani, la vignetta mensile garantisce l'accesso alla rete vignettata belga per circa un mese di calendario.",
          "È prevista anche una tariffa bimestrale (€30) per soggiorni leggermente più lunghi senza acquistare subito la vignetta annuale.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Per chi conviene la vignetta mensile?",
        paragraphs: [
          "Pendolari che lavorano temporaneamente in Belgio, expat in missione breve o vacanzieri che trascorrono un mese nel paese possono trarre vantaggio da una vignetta mensile o bimestrale.",
          "Per un uso occasionale, una vignetta giornaliera o da 10 giorni costa meno; per un uso permanente conviene la vignetta annuale.",
        ],
      },
      {
        id: "concept-prices",
        title: "Prezzi concept",
        paragraphs: [
          "Gli importi indicati di seguito sono tariffe previste, non legislazione definitiva. Possono ancora cambiare prima dell'avvio a maggio 2027.",
        ],
      },
    ],
    priceTableTitle: "Tariffe mensili previste",
    priceTable: [
      { label: "1 mese", value: "€19" },
      { label: "2 mesi", value: "€30" },
    ],
    compareTableTitle: "Altri periodi di validità (a confronto)",
    compareTable: [
      { label: "1 giorno", value: "€9" },
      { label: "10 giorni", value: "€12" },
    ],
    relatedPagesTitle: "Altri tipi di vignetta",
    faqs: [
      {
        question: "Qual è la differenza tra 1 mese e 2 mesi?",
        answer:
          "Secondo i piani, puoi scegliere tra una vignetta mensile (€19) e una bimestrale (€30). La tariffa bimestrale conviene di più al giorno se resti più a lungo.",
      },
      {
        question: "Esiste una tariffa separata per norma di emissione per le vignette brevi?",
        answer:
          "Per i periodi brevi (giorno, mese) sono previsti, secondo i piani attuali, importi fissi. La vignetta annuale dipende invece dalla norma Euro di emissione del veicolo.",
      },
      {
        question: "Questi prezzi sono definitivi?",
        answer:
          "No. Sono prezzi concept basati sui piani di marzo 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Vignetta annuale Belgio 2027",
    intro:
      "La vignetta annuale è pensata per chi usa regolarmente le strade principali belghe. Il prezzo dipende dalla norma di emissione del veicolo. Le tariffe indicate sono prezzi concept secondo i piani di marzo 2026.",
    metaTitle: "Vignetta annuale Belgio 2027 — €90–€125 all'anno (concept)",
    metaDescription:
      "Vignetta annuale prevista per il Belgio: €100 per Euro 4+, €90 elettrico, €125 auto più vecchie. Prezzi concept per norma di emissione dal 1° maggio 2027.",
    navLabel: "Vignetta annuale",
    sections: [
      {
        id: "what-is-annual",
        title: "Cos'è la vignetta annuale?",
        paragraphs: [
          "Secondo i piani, la vignetta annuale garantisce 12 mesi di accesso ad autostrade, tangenziali autostradali e strade regionali in Belgio.",
          "In Fiandre, oltre il 97% delle auto private rispetta almeno Euro 4 — per loro è prevista una tariffa di €100 all'anno.",
        ],
      },
      {
        id: "emission-bands",
        title: "Prezzi per norma di emissione",
        paragraphs: [
          "A differenza delle vignette brevi, secondo i piani la tariffa annuale varia in base alla norma Euro di emissione del veicolo.",
          "I veicoli completamente elettrici e a idrogeno hanno la tariffa più bassa (€90). I veicoli più vecchi fino a Euro 3 pagano l'importo più alto (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Prezzi concept",
        paragraphs: [
          "Queste tariffe si basano sugli annunci di marzo 2026 e possono ancora essere modificate. Gli importi definitivi seguiranno l'approvazione delle regioni e dell'Europa.",
        ],
      },
    ],
    priceTableTitle: "Vignetta annuale",
    priceTable: [
      { label: "Euro 4 e superiori", value: "€100 / anno", note: "97%+ delle auto fiamminghe" },
      { label: "Elettrico / idrogeno", value: "€90 / anno" },
      { label: "Auto più vecchie (fino a Euro 3)", value: "€125 / anno" },
    ],
    compareTableTitle: "Periodi brevi (a confronto)",
    compareTable: [
      { label: "1 giorno", value: "€9" },
      { label: "10 giorni", value: "€12" },
      { label: "1 mese", value: "€19" },
      { label: "2 mesi", value: "€30" },
    ],
    relatedPagesTitle: "Altri tipi di vignetta",
    faqs: [
      {
        question: "Anche i belgi devono acquistare la vignetta annuale?",
        answer:
          "Sì. Le norme UE vietano una vignetta riservata solo agli stranieri. Anche i belgi pagano, ma le Fiandre prevedono un compenso tramite la riforma della tassa di circolazione.",
      },
      {
        question: "€100 vale per tutte le auto?",
        answer:
          "No. Solo i veicoli con almeno Euro 4. Secondo i piani, le auto elettriche pagano €90; quelle più vecchie fino a Euro 3 €125.",
      },
      {
        question: "Sono prezzi definitivi?",
        answer:
          "No. Sono tariffe concept previste che possono ancora cambiare.",
      },
    ],
  },
  electricVignette: {
    title: "Vignetta elettrica Belgio 2027",
    intro:
      "I proprietari di veicoli completamente elettrici e a idrogeno pagheranno, secondo i piani, la tariffa annuale più bassa: €90. Si tratta di un prezzo concept basato sugli annunci di marzo 2026 — non di una tariffa definitiva.",
    metaTitle: "Vignetta elettrica Belgio 2027 — €90 all'anno (concept)",
    metaDescription:
      "Vignetta prevista per auto elettriche in Belgio: €90 all'anno, la tariffa annuale più bassa. Prezzo concept secondo i piani di marzo 2026. Confronta con altre norme di emissione.",
    navLabel: "Vignetta elettrica",
    sections: [
      {
        id: "ev-rate",
        title: "Tariffa annuale più bassa per le EV",
        paragraphs: [
          "I veicoli completamente elettrici e a idrogeno ricevono, secondo i piani, la vignetta annuale più economica: €90 all'anno.",
          "Sono €10 in meno rispetto alla maggior parte delle auto Euro 4+ (€100) e €35 in meno rispetto ai veicoli più vecchi (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "Perché anche i conducenti di EV pagano?",
        paragraphs: [
          "I veicoli elettrici sollecitano le strade come le altre auto. La tariffa più bassa premia le emissioni ridotte, ma secondo i piani la vignetta resta obbligatoria.",
          "Il ministro fiammingo Ben Weyts ha sottolineato che €90 è sensibilmente inferiore rispetto ad altre categorie — ma non zero.",
        ],
      },
      {
        id: "concept-prices",
        title: "Prezzi concept",
        paragraphs: [
          "€90 è una tariffa concept prevista. Prezzi definitivi ed eventuali modifiche saranno comunicati prima dell'avvio a maggio 2027.",
        ],
      },
    ],
    priceTableTitle: "Elettrico / idrogeno — vignetta annuale",
    priceTable: [{ label: "Elettrico / idrogeno", value: "€90 / anno" }],
    compareTableTitle: "Altre tariffe annuali (a confronto)",
    compareTable: [
      { label: "Euro 4 e superiori", value: "€100 / anno", note: "97%+ delle auto fiamminghe" },
      { label: "Auto più vecchie (fino a Euro 3)", value: "€125 / anno" },
    ],
    relatedPagesTitle: "Altri tipi di vignetta",
    faqs: [
      {
        question: "€90 vale anche per le ibride plug-in?",
        answer:
          "No. Secondo i piani, la tariffa EV vale per veicoli completamente elettrici e a idrogeno. Le ibride plug-in rientrano nella norma di emissione del motore a combustione.",
      },
      {
        question: "C'è uno sconto per le EV sulle vignette brevi?",
        answer:
          "Per vignette giornaliere, mensili e brevi sono previsti, secondo i piani attuali, importi fissi indipendentemente dalla propulsione. La tariffa EV più bassa vale per la vignetta annuale.",
      },
      {
        question: "€90 è definitivo?",
        answer:
          "No. È un prezzo concept basato sui piani di marzo 2026.",
      },
    ],
  },
};

export default pages;
