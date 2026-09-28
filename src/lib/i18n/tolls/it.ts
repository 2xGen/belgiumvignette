import type { Dictionary } from "../types";

export const itTolls: Dictionary["tolls"] = {
  title: "Pedaggi in Belgio: autostrade a pagamento e vignetta 2027",
  intro:
    "Andate in Belgio in auto? Scoprite se le autostrade belghe sono a pedaggio, come funzionerà la vignetta stradale prevista per il 2027 e quali tariffe possono applicarsi al vostro veicolo.",
  blocks: [
    {
      type: "section",
      id: "paid-motorways",
      title: "Le autostrade in Belgio sono a pagamento?",
      paragraphs: [
        "Per le autovetture, il Belgio non utilizza attualmente un sistema generale di vignetta autostradale come l'Austria o la Svizzera.",
        "Si prevede che cambi nel 2027.",
        "Il Belgio prevede di introdurre una vignetta stradale digitale dal 1 maggio 2027 per i veicoli che usano le autostrade e le strade regionali coperte. Si applicherebbe sia ai veicoli belgi sia a quelli immatricolati all'estero.",
        "Se prevedete di circolare in Belgio dopo quella data, consultate la nostra guida completa sulla [[home|vignetta Belgio 2027]].",
      ],
    },
    {
      type: "summary",
      title: "In sintesi",
      items: [
        {
          label: "Oggi",
          value: "Nessuna vignetta stradale generale per le autovetture.",
        },
        {
          label: "Dal 1 maggio 2027",
          value: "È prevista una vignetta digitale.",
        },
        {
          label: "Veicoli interessati",
          value:
            "Veicoli a motore con almeno quattro ruote fino a 3,5 tonnellate.",
        },
        {
          label: "Auto straniere",
          value: "Anche interessate.",
        },
        {
          label: "Moto",
          value: "Non coperte da questo obbligo secondo i piani attuali.",
        },
        {
          label: "Acquisto",
          value:
            "Online, con apertura delle vendite prevista dal 1 marzo 2027.",
        },
      ],
    },
    {
      type: "section",
      id: "toll-or-vignette",
      title: "Pedaggio o vignetta: come funzionerà il sistema belga?",
      paragraphs: [
        "Il sistema belga previsto non è un pedaggio classico in cui si paga a ogni barriera.",
        "Si tratta di una vignetta stradale che dà accesso alle strade coperte per un periodo determinato.",
        "A differenza di un adesivo per il parabrezza, la vignetta belga sarà digitale e collegata alla targa del veicolo.",
        "Non servirà un adesivo fisico. All'acquisto dovrete inserire correttamente la targa.",
        "Per capire il funzionamento del nuovo sistema, consultate la nostra guida sulla [[home|vignetta stradale in Belgio]].",
      ],
    },
    {
      type: "section",
      id: "covered-roads",
      title: "Quali strade saranno a pagamento in Belgio nel 2027?",
      paragraphs: [
        "La vignetta è prevista per l'uso delle autostrade belghe e delle strade regionali coperte.",
        "I conducenti che circolano solo su strade locali non dovrebbero aver bisogno della vignetta.",
        "Chi attraversa il Belgio in autostrada — ad esempio verso la Francia, i Paesi Bassi, la Germania o il Lussemburgo — dovrà tenere conto del nuovo obbligo quando entrerà in vigore.",
        "I dettagli pratici e la rete stradale esatta possono ancora essere precisati prima del lancio.",
      ],
    },
    {
      type: "pricing",
      id: "prices",
      title: "Quanto costeranno i pedaggi in Belgio?",
      paragraphs: [
        "Non dovrebbe esistere un prezzo unico per tratto. Il conducente acquista una vignetta valida per un periodo scelto.",
        "Le tariffe pubblicate dipendono dallo standard Euro del veicolo e dalla durata scelta.",
      ],
      durationHeader: "Durata",
      priceHeader: "Tariffa",
      tables: [
        {
          title: "Tariffe previste per veicoli Euro 4 e superiori",
          rows: [
            { label: "1 giorno", value: "€9" },
            { label: "10 giorni", value: "€12" },
            { label: "1 mese", value: "€19" },
            { label: "2 mesi", value: "€30" },
            { label: "1 anno", value: "€100" },
          ],
        },
        {
          title: "Tariffe previste per veicoli Euro 0 a Euro 3",
          rows: [
            { label: "1 giorno", value: "€11.25" },
            { label: "10 giorni", value: "€15" },
            { label: "1 mese", value: "€23.75" },
            { label: "2 mesi", value: "€37.50" },
            { label: "1 anno", value: "€125" },
          ],
        },
        {
          title: "Tariffe previste per veicoli a zero emissioni",
          rows: [
            { label: "1 giorno", value: "€8.10" },
            { label: "10 giorni", value: "€10.80" },
            { label: "1 mese", value: "€17.10" },
            { label: "2 mesi", value: "€27" },
            { label: "1 anno", value: "€90" },
          ],
        },
      ],
      linkParagraph:
        "Importi, categorie di veicoli e ultimi aggiornamenti sulla nostra pagina [[prices|prezzi della vignetta Belgio]].",
      notice:
        "Attenzione: il sistema deve ancora completare gli ultimi passaggi legislativi. Le regole possono cambiare prima dell'entrata in vigore.",
    },
    {
      type: "section",
      id: "transit",
      title: "Bisogna pagare per attraversare il Belgio in auto?",
      paragraphs: [
        "Dal 1 maggio 2027, se il sistema entra in vigore come previsto, i conducenti che usano autostrade o strade regionali coperte avranno bisogno di una vignetta valida.",
        "Ciò vale anche per chi attraversa solo il Belgio per raggiungere un altro Paese.",
        "Un'auto immatricolata in Francia, nei Paesi Bassi o in Germania non è automaticamente esentata perché il conducente non risiede in Belgio.",
        "La vignetta è prevista per i veicoli coperti che usano la rete stradale, indipendentemente dal Paese di immatricolazione.",
        "Consultate la nostra guida per i [[foreign|conducenti stranieri in Belgio]] sulle regole per i veicoli esteri.",
      ],
    },
    {
      type: "section",
      id: "french-cars",
      title: "Le auto francesi dovranno pagare sulle autostrade belghe?",
      paragraphs: [
        "Le auto francesi seguiranno le stesse regole di vignetta delle altre auto straniere sulle strade coperte.",
        "Un conducente francese su un'autostrada belga dal 1 maggio 2027 avrà, secondo i piani attuali, bisogno di una vignetta valida.",
        "Per un soggiorno breve o un semplice transito non è necessario acquistare automaticamente una vignetta annuale. Sono previste anche durate di 1 giorno, 10 giorni, 1 mese e 2 mesi.",
      ],
    },
    {
      type: "section",
      id: "foreign-cars",
      title: "Le auto straniere dovranno pagare?",
      paragraphs: [
        "Sì. I piani applicano esplicitamente la vignetta agli utenti stranieri delle autostrade e delle strade regionali coperte.",
        "Ciò include veicoli da:",
      ],
      list: [
        "Francia",
        "Paesi Bassi",
        "Germania",
        "Lussemburgo",
        "Regno Unito",
        "altri Paesi europei e non europei",
      ],
    },
    {
      type: "section",
      id: "motorcycles",
      title: "Le moto dovranno pagare un pedaggio in Belgio?",
      paragraphs: [
        "La vignetta prevista copre i veicoli a motore con almeno quattro ruote e una massa massima tecnicamente ammissibile non superiore a 3,5 tonnellate.",
        "Le moto non sono quindi coperte da questo obbligo secondo i piani attuali.",
        "Altre categorie di veicoli possono seguire regole diverse. Consultate l'elenco completo delle [[exemptions|esenzioni dalla vignetta belga]] prima del viaggio.",
      ],
    },
    {
      type: "section",
      id: "campervans",
      title: "Camper e furgoni: serve una vignetta?",
      paragraphs: [
        "I camper e alcuni furgoni fino a 3,5 tonnellate rientrano nel sistema previsto quando usano le autostrade e le strade regionali coperte.",
        "I criteri chiave sono la categoria del veicolo e la massa massima tecnicamente ammissibile.",
        "I veicoli oltre 3,5 tonnellate possono rientrare in un altro sistema di tariffazione stradale.",
      ],
    },
    {
      type: "section",
      id: "trucks",
      title: "E i camion oltre 3,5 tonnellate?",
      paragraphs: [
        "La nuova vignetta per i veicoli fino a 3,5 tonnellate non sostituisce il sistema belga esistente per i veicoli pesanti.",
        "Il Belgio ha già una tassa chilometrica per i camion nell'ambito di Viapass.",
        "La distinzione è quindi:",
      ],
      list: [
        "Auto, furgoni leggeri e alcuni camper fino a 3,5 t → vignetta stradale prevista dal 2027.",
        "Veicoli pesanti coperti oltre 3,5 t → tassa chilometrica esistente.",
      ],
    },
    {
      type: "section",
      id: "buy",
      title: "Dove acquistare la vignetta per le autostrade belghe?",
      paragraphs: [
        "La vignetta non è ancora in vendita.",
        "Secondo le informazioni ufficiali attualmente pubblicate, l'acquisto dovrebbe diventare possibile dal 1 marzo 2027, prima dell'entrata in vigore prevista il 1 maggio.",
        "Dovrebbe essere disponibile online tramite il sito ufficiale o un'organizzazione partner riconosciuta.",
        "Evitate di acquistare una presunta vignetta Belgio 2027 su un sito non verificato prima dell'apertura ufficiale delle vendite.",
        "Seguiamo l'apertura delle vendite e pubblicheremo il link quando sarà disponibile. Consultate [[buy|dove acquistare la vignetta Belgio]] per le ultime informazioni.",
      ],
    },
    {
      type: "section",
      id: "enforcement",
      title: "Come sarà controllata la vignetta?",
      paragraphs: [
        "La vignetta sarà interamente digitale e collegata alla targa del veicolo.",
        "Non servirà un adesivo fisico sul parabrezza.",
        "Inserire correttamente la targa all'acquisto è essenziale. Circolare su una strada soggetta a vignetta senza vignetta valida può comportare una multa quando i controlli saranno pienamente attivi.",
        "Consultate la nostra pagina sulle [[fines|multe della vignetta Belgio]] per le ultime regole di controllo e sanzione.",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "Belgio 2027: pedaggio, vignetta o autostrade gratuite?",
      paragraphs: [
        "Il cambiamento può creare confusione, perché termini come pedaggio Belgio, autostrada a pagamento Belgio e vignetta Belgio sono spesso usati per lo stesso cambiamento.",
        "In pratica, il sistema previsto non è un pedaggio tradizionale basato sulla distanza per le autovetture.",
        "È una vignetta digitale valida per un periodo scelto.",
        "Potrete scegliere la durata adatta al vostro viaggio: un giorno per un passaggio molto breve, 10 giorni per un soggiorno, uno o due mesi per un periodo più lungo, o una vignetta annuale per un uso regolare.",
      ],
    },
  ],
  faqTitle: "Domande frequenti sui pedaggi in Belgio",
  faqs: [
    {
      question: "Ci sono pedaggi in Belgio?",
      answer:
        "Per le autovetture, attualmente non esiste una vignetta stradale generale paragonabile ai sistemi di alcuni altri Paesi europei. Una vignetta digitale è prevista dal 1 maggio 2027 per l'uso delle autostrade e delle strade regionali coperte.",
    },
    {
      question: "Le autostrade belghe saranno a pagamento nel 2027?",
      answer:
        "L'uso delle autostrade e delle strade regionali coperte richiederà una vignetta per i veicoli soggetti al nuovo sistema se entra in vigore come previsto il 1 maggio 2027.",
    },
    {
      question: "Quanto costerà l'autostrada in Belgio?",
      answer:
        "Il prezzo non è calcolato al chilometro per le auto coperte. Per un veicolo Euro 4 o superiore, le tariffe pubblicate vanno attualmente da €9 per 1 giorno a €100 per 1 anno. I veicoli più vecchi e quelli a zero emissioni hanno tariffe diverse.",
    },
    {
      question: "Serve una vignetta per andare in Belgio?",
      answer:
        "Dipende dalla data e dalle strade usate. La vignetta è prevista dal 1 maggio 2027 per i veicoli coperti su autostrade e strade regionali. Se usate solo strade locali, la vignetta non dovrebbe essere necessaria.",
    },
    {
      question: "Dove acquistare la vignetta autostradale Belgio?",
      answer:
        "Le vendite non sono ancora aperte. Dovrebbero iniziare il 1 marzo 2027 tramite il sito ufficiale e organizzazioni partner riconosciute. Consultate la nostra pagina Come acquistare per seguire l'apertura delle vendite.",
    },
    {
      question: "Le moto devono pagare sulle autostrade belghe?",
      answer:
        "La vignetta prevista si applica ai veicoli a motore con almeno quattro ruote fino a 3,5 tonnellate. Le moto non sono quindi coperte da questo obbligo secondo i piani attuali.",
    },
  ],
  closing: {
    title: "Preparate il vostro viaggio in Belgio",
    paragraphs: [
      "Il sistema belga dovrebbe entrare in vigore il 1 maggio 2027, ma diversi dettagli possono ancora cambiare prima del lancio.",
      "Prima di partire, verificate:",
    ],
    checklist: [
      "se il vostro veicolo è coperto;",
      "quali strade userete;",
      "la durata di vignetta di cui avete bisogno;",
      "la tariffa per il vostro veicolo;",
      "di acquistare da un canale riconosciuto.",
    ],
    links: [
      { href: "home", label: "Vignetta Belgio 2027" },
      { href: "prices", label: "Prezzi della vignetta" },
      { href: "buy", label: "Come acquistare la vignetta belga" },
    ],
  },
};
