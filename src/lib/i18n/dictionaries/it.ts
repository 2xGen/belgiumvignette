import type { BaseDictionary } from "../types";
import { getAcquisitionContent } from "../acquisition";
import { getRouteCheckerContent } from "../route-checker";
import { getPrivacyContent } from "../privacy";
import { itTolls } from "../tolls/it";
import { buildRateMatrix } from "../rate-matrix";

const itRateMatrix = buildRateMatrix({
  vehicleHeader: "Veicolo",
  dayHeader: "1 giorno",
  tenDaysHeader: "10 giorni",
  monthHeader: "1 mese",
  twoMonthsHeader: "2 mesi",
  yearHeader: "1 anno",
  euro03: "Euro 0–3",
  euro4: "Euro 4 e superiore",
  zeroEmission: "Zero emissioni",
});

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
    tolls: "Pedaggi",
    news: "Notizie e aggiornamenti",
    privacy: "Privacy",
    acquisition: "Acquisizione",
    routeChecker: "Calcolatore percorso",
  },
  meta: {
    home: {
      title: "Vignetta Belgio 2027: prezzi, autostrade e come acquistare",
      description:
        "Il Belgio prevede una vignetta stradale digitale da maggio 2027. Consulta i prezzi previsti, chi ne ha bisogno, le esenzioni per le moto e dove acquistarla.",
    },
    prices: {
      title: "Tariffe vignetta Belgio 2027: prezzi per norma Euro e durata",
      description:
        "Tabella completa dei prezzi della vignetta stradale belga 2027 per norma Euro e durata — da €8,10/giorno (zero emissioni) a €125/anno (Euro 0–3).",
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
      title: "Acquistare la vignetta belga — vendita prevista dal 2 aprile 2027",
      description:
        "Secondo i piani attuali, la vendita online della vignetta belga è prevista dal 2 aprile 2027. Obbligatoria dal 1 maggio 2027. Fonte ufficiale: Governo fiammingo.",
    },
    tolls: {
      title: "Pedaggi in Belgio 2027: autostrade, vignetta e tariffe",
      description:
        "Le autostrade in Belgio sono a pagamento? Scoprite i pedaggi, la vignetta prevista da maggio 2027, le tariffe e le regole per le auto straniere.",
    },
    news: {
      title: "Notizie sulla vignetta belga — fonti attendibili spiegate",
      description:
        "Riassunti indipendenti delle notizie ufficiali sulla vignetta belga con la nostra opinione editoriale. Link alle fonti originali.",
    },
    privacy: {
      title: "Informativa sulla privacy — BelgiumVignette.be",
      description:
        "Informativa sulla privacy di BelgiumVignette.be: notifica e-mail una tantum, cookie, hosting, diritti GDPR e contatti.",
    },
    acquisition: {
      title: "BelgiumVignette.be in vendita | Sito e portfolio domini",
      description:
        "BelgiumVignette.be è disponibile per l'acquisizione, con sito multilingue, ranking Google e portfolio di domini vignetta belga.",
    },
    routeChecker: {
      title: "Calcolatore percorso vignette | Corridoi via Belgio",
      description:
        "Controlla i corridoi autostradali tipici da, verso o attraverso il Belgio e scopri dove possono applicare vignetta, vignetta prevista o pedaggi per tratto.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be è un sito informativo indipendente e non è collegato al governo belga, alle Fiandre, alla Vallonia o a Bruxelles. Questo sito ha esclusivamente scopo informativo. Le date, le tariffe e le condizioni indicate possono cambiare. Per le informazioni più aggiornate e ufficiali, consultate sempre i siti delle autorità belghe competenti.",
    lastUpdated: "Ultimo aggiornamento",
    lastUpdatedDate: "4 novembre 2026",
    lastUpdatedIso: "2026-11-04",
    readMore: "Scopri di più",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — informazioni indipendenti sui pedaggi in Belgio",
    ownedManagedBy: "Di proprietà e gestito da",
    operatorName: "2xGen",
    operatorUrl: "https://2xgen.com/about",
    backToHome: "Torna alla home",
    plannedNotice:
      "I piani presentati a March 2026 potrebbero ancora cambiare. Seguiamo le fonti ufficiali e aggiorniamo questa pagina non appena ci sono novità.",
    officialNotice: {
      title: "Importante: verificate sempre le informazioni ufficiali",
      provisionalNote:
        "Attenzione: La vignetta stradale belga non è ancora stata introdotta. La data di inizio prevista è il 1 maggio 2027. Tutte le informazioni restano subordinate all'approvazione parlamentare definitiva. Prima del viaggio verificate sempre le informazioni aggiornate su Vlaanderen.be.",
      paragraphs: [
        "BelgiumVignette.be è un sito informativo indipendente e non è collegato al governo belga. La vignetta stradale belga è ancora in preparazione. Le date, le tariffe e le condizioni indicate possono cambiare.",
        "Ci impegniamo a fornire informazioni corrette e aggiornate, ma non possiamo garantire che tutte le informazioni siano sempre complete o aggiornate. Prima di viaggiare o acquistare, verificate sempre le informazioni più recenti sui siti ufficiali delle autorità belghe competenti.",
      ],
      sourceLabel: "Informazioni ufficiali: Vlaanderen.be — Vignetta stradale dal 1 maggio 2027",
      sourceUrl: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
    },
    independentSite: "Informazioni indipendenti sulla vignetta stradale belga",
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
        title: "Chi deve acquistare una vignetta belga?",
        summary:
          "Autovetture fino a 3,5 tonnellate, inclusi i veicoli stranieri in transito sulle strade coperte.",
        href: "foreign",
        linkLabel: "Guida per automobilisti stranieri",
      },
      {
        title: "Chi è esentato dalla vignetta belga?",
        summary:
          "Moto, camion (tassa al km), trattori, pullman, servizi di emergenza e polizia — secondo i piani attuali.",
        href: "exemptions",
        linkLabel: "Vedi tutte le esenzioni",
      },
      {
        title: "Qual è il prezzo della vignetta Belgio nel 2027?",
        summary:
          "Il prezzo dipende dalla norma Euro e dalla durata: da €8,10/giorno (zero emissioni) e €9/giorno (Euro 4+), fino a €90–€125 all'anno.",
        href: "prices",
        linkLabel: "Guida completa ai prezzi",
      },
    ],
    overview: {
      title: "Vignetta stradale belga: cosa è previsto per il 2027",
      paragraphs: [
        "Il Belgio prevede di introdurre una vignetta stradale digitale dal 1 maggio 2027. La vignetta belga si applicherebbe alle autovetture fino a 3,5 tonnellate su strade regionali e autostrade belghe.",
        "Le auto estere sarebbero incluse. Gli automobilisti di Francia, Paesi Bassi, Germania e altri paesi avrebbero bisogno di una vignetta per usare le strade belghe coperte.",
        "Non sarebbe un adesivo sul parabrezza. La vignetta autostradale belga sarebbe digitale e collegata alla targa, con controlli anche tramite telecamere ANPR.",
        "Secondo le tariffe pubblicate dal governo fiammingo, il prezzo dipende dalla norma Euro e dalla durata: da €8,10 al giorno per i veicoli a zero emissioni e €9 al giorno per Euro 4+, fino a €90–€125 all'anno. Sono previsti anche 10 giorni, 1 mese e 2 mesi.",
        "Le moto sarebbero esentate secondo i piani attuali. Gli importi e le regole definitive devono ancora essere confermati prima dell'entrata in vigore.",
      ],
    },
    intentSections: [
      {
        id: "autostrade",
        title: "Serve una vignetta per le autostrade in Belgio?",
        paragraphs: [
          "Secondo i piani attuali, una vignetta stradale digitale diventerebbe obbligatoria sulle strade regionali e autostrade belghe dal 1 maggio 2027.",
          "Oggi la maggior parte delle autostrade belghe resta gratuita per le autovetture. Il progetto di vignetta cambierebbe questa situazione: l'accesso alle strade regionali e alle autostrade belghe richiederebbe una vignetta collegata alla targa.",
          "Se usi solo strade locali, una vignetta non sarebbe richiesta secondo le informazioni pubblicate. In pratica, evitare del tutto strade regionali e autostrade è spesso difficile per viaggi interurbani o di transito.",
        ],
        link: {
          href: "tolls",
          label: "Pedaggi e autostrade in Belgio",
        },
      },
      {
        id: "moto",
        title: "Le moto hanno bisogno di una vignetta belga?",
        paragraphs: [
          "No. Secondo gli annunci governativi, le moto sarebbero esplicitamente esentate dalla vignetta belga.",
          "L'obbligo riguarderebbe i veicoli a motore con almeno quattro ruote fino a 3,5 tonnellate — comprese auto, alcuni furgoni leggeri e camper. I camion restano sotto la tassa chilometrica Viapass.",
        ],
        link: {
          href: "exemptions",
          label: "Vedi i dettagli delle esenzioni",
        },
      },
      {
        id: "acquistare",
        title: "Dove acquistare la vignetta Belgio?",
        paragraphs: [
          "La vendita ufficiale non è ancora iniziata. Secondo i piani attuali, l'acquisto online sarebbe possibile dal 2 aprile 2027 tramite il sito ufficiale o un partner autorizzato.",
          "Oggi non esiste un portale di vendita ufficiale. I siti che già offrono prenotazione o pagamento non sono il canale ufficiale.",
        ],
        link: {
          href: "buy",
          label: "Acquistare la vignetta Belgio: date e canali ufficiali",
        },
      },
    ],
    pricingTitle: "Qual è il prezzo della vignetta Belgio nel 2027?",
    pricingParagraphs: [
      "Il prezzo della vignetta stradale belga dipende dalla norma Euro del veicolo e dalla durata di validità. Per le auto Euro 4 o superiore, le tariffe previste partono da €9 per 1 giorno e €100 per 1 anno. I veicoli più vecchi pagano di più, mentre quelli a zero emissioni hanno una tariffa inferiore.",
    ],
    pricingLinkLabel: "Vedi tutti i prezzi della vignetta belga",
    pricingLinkSecondaryLabel: "Guida completa ai prezzi",
    pricingMatrixTitle: "Tariffe previste",
    rateMatrix: itRateMatrix,
    pricingNote:
      "Queste sono le tariffe attualmente pubblicate dal governo fiammingo. L'introduzione resta subordinata all'approvazione definitiva.",
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
        title: "Introduzione prevista",
        description:
          "Inizio previsto della vignetta stradale digitale, subordinato all'approvazione definitiva.",
      },
      {
        date: "1 July 2027",
        title: "Applicazione prevista",
        description:
          "Fine prevista del periodo di tolleranza e inizio delle sanzioni, subordinati all'approvazione definitiva.",
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
        question: "Serve una vignetta per le autostrade in Belgio?",
        answer:
          "Secondo i piani attuali, sì dal 1 maggio 2027 sulle strade regionali e autostrade belghe. Le strade locali resterebbero fuori dall'obbligo.",
      },
      {
        question: "Le moto hanno bisogno di una vignetta belga?",
        answer:
          "No. Le moto sono esplicitamente esentate secondo gli annunci dei ministri Weyts (Fiandre) e Desquesnes (Vallonia).",
      },
      {
        question: "Si applica alle auto straniere?",
        answer:
          "Sì. Le norme UE impongono un trattamento uguale. Automobilisti belgi e stranieri devono entrambi pagare sulle strade coperte.",
      },
      {
        question: "Dove acquistare la vignetta Belgio?",
        answer:
          "La vendita ufficiale non è ancora iniziata. Secondo i piani, l'acquisto online è previsto dal 2 aprile 2027 tramite il canale ufficiale o un partner autorizzato.",
      },
    ],
    sourcesTitle: "Fonti ufficiali",
  },
  prices: {
    title: "Tariffe vignetta Belgio 2027: prezzi per norma Euro e durata",
    intro:
      "Il prezzo previsto della vignetta stradale belga dipende da due fattori: la norma Euro del veicolo e la durata di validità della vignetta. Il governo fiammingo ha pubblicato tariffe per 1 giorno, 10 giorni, 1 mese, 2 mesi e 1 anno.",
    leadParagraphs: [
      "Per un'auto Euro 4 o superiore, la vignetta belga secondo le tariffe attuali costa €9 per 1 giorno, €12 per 10 giorni e €100 per un anno. I veicoli a zero emissioni pagano di meno e quelli da Euro 0 a Euro 3 pagano di più.",
      "La vignetta è prevista dal 1 maggio 2027. L'acquisto dovrebbe essere possibile dal 2 aprile 2027. L'introduzione resta subordinata all'approvazione definitiva.",
    ],
    matrixTitle: "Prezzi vignetta stradale belga 2027",
    rateMatrix: itRateMatrix,
    matrixNote:
      "Queste tariffe sono state pubblicate dal governo fiammingo. Il prezzo non dipende quindi solo da quanto a lungo serve la vignetta, ma anche dalla norma Euro del veicolo.",
    buyLinkParagraph:
      "[[buy|Scopri dove e quando puoi acquistare la vignetta belga]].",
    categorySections: [
      {
        id: "euro-4",
        title: "Quanto costa una vignetta belga per Euro 4 e superiore?",
        paragraphs: [
          "Per i veicoli Euro 4 o superiore, secondo le tariffe pubblicate:",
        ],
        list: [
          "1 giorno: €9",
          "10 giorni: €12",
          "1 mese: €19",
          "2 mesi: €30",
          "1 anno: €100",
        ],
        linkParagraph:
          "Questa è la categoria in cui rientra gran parte del parco attuale. Per un breve transito in Belgio può bastare una vignetta giornaliera o di 10 giorni. Chi usa regolarmente le strade regionali e le autostrade belghe può confrontare la vignetta annuale con le durate più brevi. Maggiori informazioni sulla [[dailyVignette|vignetta giornaliera]] o consulta la [[annualVignette|vignetta annuale]].",
      },
      {
        id: "euro-0-3",
        title: "Quanto costa una vignetta belga per Euro 0–3?",
        paragraphs: [
          "I veicoli più vecchi con Euro 0, Euro 1, Euro 2 o Euro 3 rientrano nella categoria tariffaria più alta.",
          "I prezzi previsti vanno da €11,25 per un giorno a €125 per un anno.",
        ],
        tableTitle: "Prezzo Euro 0–3",
        table: [
          { label: "1 giorno", value: "€11,25" },
          { label: "10 giorni", value: "€15" },
          { label: "1 mese", value: "€23,75" },
          { label: "2 mesi", value: "€37,50" },
          { label: "1 anno", value: "€125" },
        ],
      },
      {
        id: "elettrico",
        title: "Quanto costa la vignetta per un'auto elettrica?",
        paragraphs: [
          "Per un veicolo a zero emissioni si applica la tariffa più bassa. Secondo l'attuale tabella prezzi, la vignetta costa €8,10 per un giorno e €90 per un anno intero.",
        ],
        tableTitle: "Prezzo zero emissioni",
        table: [
          { label: "1 giorno", value: "€8,10" },
          { label: "10 giorni", value: "€10,80" },
          { label: "1 mese", value: "€17,10" },
          { label: "2 mesi", value: "€27" },
          { label: "1 anno", value: "€90" },
        ],
        linkParagraph:
          "[[electricVignette|Maggiori informazioni sulla vignetta belga per auto elettriche]].",
      },
    ],
    durationSection: {
      id: "durata",
      title: "Quale durata mi serve?",
      paragraphs: [
        "Secondo i piani attuali, puoi scegliere tra cinque periodi di validità:",
        "La durata migliore dipende da quanto spesso e per quanto tempo usi le strade su cui la vignetta diventerà obbligatoria.",
        "Consulta le spiegazioni separate sulla [[dailyVignette|vignetta giornaliera]], la [[monthlyVignette|vignetta mensile]] e la [[annualVignette|vignetta annuale]].",
      ],
      list: [
        "1 giorno — per un breve transito o un'escursione giornaliera.",
        "10 giorni — ad esempio per una vacanza o una visita più lunga.",
        "1 mese — per più spostamenti nell'arco di alcune settimane.",
        "2 mesi — per un soggiorno più lungo o un uso temporaneo regolare.",
        "1 anno — per chi circola regolarmente su strade regionali e autostrade belghe.",
      ],
    },
    whenSection: {
      id: "quando",
      title: "Quando si applicano questi prezzi?",
      paragraphs: [
        "La vignetta stradale digitale è prevista dal 1 maggio 2027. Secondo le informazioni ufficiali attuali, la vignetta potrebbe essere acquistata online dal 2 aprile 2027.",
        "L'attuazione pratica è ancora in corso e l'introduzione resta subordinata all'approvazione definitiva.",
        "Vuoi sapere come funzionerà l'acquisto? Consulta [[buy|Acquistare la vignetta belga]]. Per tutte le regole, i veicoli e le date chiave, vai alla nostra guida completa sulla [[home|vignetta stradale belga 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Interazione con la tassa di circolazione (Fiandre)",
        paragraphs: [
          "Le Fiandre riformano contemporaneamente la tassa di circolazione annuale. Secondo le stime, circa la metà degli automobilisti fiamminghi potrebbe pagare di più in netto — fino a €100 in più all'anno.",
          "La riduzione della tassa di circolazione secondo i piani non compensa del tutto a tutti il costo della vignetta. Si tratta di informazione di contesto; le tariffe della vignetta sopra indicate valgono indipendentemente da quella riforma.",
        ],
      },
    ],
    euroNormTitle: "Norme Euro in sintesi",
    euroNormCategoryHeader: "Norma",
    euroNormDescriptionHeader: "Descrizione",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Auto dal circa 2005–2006. Maggior parte dei veicoli in circolazione. Tariffa giornaliera €9, annuale €100.",
      },
      {
        norm: "Zero emissioni",
        description: "Completamente a zero emissioni (elettrico / idrogeno). Tariffa più bassa: da €8,10/giorno, €90/anno.",
      },
      {
        norm: "Euro 3 e inferiori",
        description: "Veicoli più vecchi e più inquinanti. Tariffa più alta: da €11,25/giorno, €125/anno.",
      },
    ],
    vignettePagesTitle: "Per tipo di vignetta",
    faqs: [
      {
        question: "Qual è il prezzo giornaliero previsto più basso?",
        answer:
          "Secondo il governo fiammingo, la tariffa giornaliera più bassa è €8,10 per i veicoli a zero emissioni. Per Euro 4 e superiore è €9; per Euro 0–3 è €11,25.",
      },
      {
        question: "I periodi brevi valgono per tutte le classi di emissione?",
        answer:
          "Sì. Ogni durata (1 giorno, 10 giorni, 1 mese, 2 mesi, 1 anno) ha una propria tariffa per categoria di norma Euro. Gli importi differiscono per categoria.",
      },
      {
        question: "I furgoni commerciali sono deducibili?",
        answer:
          "Secondo i piani, il costo della vignetta per i furgoni professionali potrebbe essere interamente deducibile come spesa aziendale.",
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
          "Le strade coperte includono strade regionali e autostrade belghe — non solo transito a lunga distanza.",
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
      "Secondo i piani attuali, la vendita online è prevista dal 2 aprile 2027. La vignetta stradale diventerebbe obbligatoria dal 1 maggio 2027. Le condizioni definitive e il portale ufficiale di vendita possono ancora cambiare.",
    independenceNotice:
      "BelgiumVignette.be è un sito informativo indipendente e non è un sito ufficiale del governo belga né un venditore riconosciuto della vignetta stradale.",
    sections: [
      {
        id: "when",
        title: "Quando partono le vendite?",
        paragraphs: [
          "Il Governo fiammingo indica che potrai acquistare la vignetta online dal 2 aprile 2027, sul sito ufficiale o tramite un partner autorizzato.",
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
    statusBadge: "Vendita prevista dal 2 aprile 2027",
    officialSourceLabel: "Fonte ufficiale",
    steps: [
      {
        title: "Attendi la vendita autorizzata",
        description:
          "Acquisto online previsto dal 2 aprile 2027 tramite il sito ufficiale o un partner autorizzato, secondo il Governo fiammingo.",
      },
      { title: "Registrare la targa", description: "Sistema digitale — nessun adesivo sul parabrezza." },
      { title: "Scegliere la durata", description: "Giorno, 10 giorni, mese, 2 mesi o annuale." },
      { title: "Guidare con vignetta valida", description: "Le telecamere controllano automaticamente dal 1 maggio 2027." },
    ],
    faqs: [
      {
        question: "Posso preordinare ora?",
        answer:
          "No. Secondo i piani attuali, la vendita online inizia il 2 aprile 2027. Iscriviti per ricevere una notifica quando la vendita autorizzata sarà disponibile.",
      },
      {
        question: "Quando la vignetta diventa obbligatoria?",
        answer:
          "Secondo i piani, dal 1 maggio 2027 su autostrade e strade regionali belghe. È previsto un periodo di tolleranza dal 1 maggio al 1 luglio 2027.",
      },
    ],
  },
  tolls: itTolls,
  privacy: getPrivacyContent("it"),
  acquisition: getAcquisitionContent("it"),
  routeChecker: getRouteCheckerContent("it"),
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
      "BelgiumVignette.be è un sito informativo indipendente e non è collegato al governo belga, alle Fiandre, alla Vallonia o a Bruxelles. Questo sito ha esclusivamente scopo informativo. Le date, le tariffe e le condizioni indicate possono cambiare. Per le informazioni più aggiornate e ufficiali, consultate sempre i siti delle autorità belghe competenti.",
    translationDisclaimer:
      "BelgiumVignette.be è un sito informativo indipendente e non è collegato al governo belga, alle Fiandre, alla Vallonia o a Bruxelles. Questo sito ha esclusivamente scopo informativo. Le date, le tariffe e le condizioni indicate possono cambiare. Per le informazioni più aggiornate e ufficiali, consultate sempre i siti delle autorità belghe competenti.",
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
    emailPlaceholder: "Indirizzo email",
    consentLabel:
      "Autorizzo BelgiumVignette.be a inviarmi una sola e-mail non appena la vendita ufficiale o autorizzata della vignetta stradale belga sarà disponibile. Dopo l'invio, i miei dati saranno cancellati dai sistemi attivi. Posso revocare il consenso in qualsiasi momento.",
    success: "Grazie! Sei iscritto.",
    error: "Qualcosa è andato storto. Riprova.",
    privacyLink: "",
    independenceNote:
      "BelgiumVignette.be è un servizio informativo indipendente e non è affiliato al governo belga. Al momento non vendiamo la vignetta stradale belga.",
    sticky: {
      teaser: "Vignetta non ancora in vendita — ricevi una notifica all'inizio della vendita",
      cta: "Iscriviti →",
      closeLabel: "Chiudi",
    },
    intents: {
      home: {
        title:
          "Ricevi una notifica non appena inizia la vendita ufficiale della vignetta belga",
        description:
          "Iscriviti alla notifica email gratuita di BelgiumVignette.be, un sito informativo indipendente. Non siamo un ente pubblico e non vendiamo vignette. Riceverai una sola notifica quando la vendita autorizzata sarà disponibile.",
        benefits: [
          "Una sola notifica quando inizia la vendita autorizzata",
          "Link a un canale di acquisto riconosciuto",
          "Nessuna email inutile",
        ],
        submit: "Tienimi aggiornato",
      },
      prices: {
        title:
          "Ricevi una notifica non appena inizia la vendita ufficiale della vignetta belga",
        description:
          "Iscriviti alla notifica email gratuita di BelgiumVignette.be, un sito informativo indipendente. Non siamo un ente pubblico e non vendiamo vignette. Riceverai una sola notifica quando la vendita autorizzata sarà disponibile.",
        benefits: [
          "Una sola notifica quando inizia la vendita autorizzata",
          "Link a un canale di acquisto riconosciuto",
          "Nessuna email inutile",
        ],
        submit: "Tienimi aggiornato",
      },
      buy: {
        title:
          "Avvisami non appena la vignetta belga sarà in vendita",
        description:
          "Iscriviti alla notifica email gratuita di BelgiumVignette.be, un sito informativo indipendente. Non siamo un ente pubblico e non vendiamo vignette. Riceverai una sola notifica quando la vendita autorizzata sarà disponibile.",
        benefits: [],
        submit: "Tienimi aggiornato",
      },
      foreign: {
        title:
          "Avvisami quando le auto estere potranno registrare la vignetta",
        description:
          "Iscriviti alla notifica email gratuita di BelgiumVignette.be, un sito informativo indipendente. Riceverai una sola notifica quando la vendita autorizzata sarà disponibile.",
        benefits: [
          "Una sola notifica quando inizia la vendita autorizzata",
          "Link a un canale di acquisto riconosciuto",
          "Nessuna email inutile",
        ],
        submit: "Tienimi aggiornato",
      },
      news: {
        title:
          "Ricevi una notifica non appena inizia la vendita ufficiale della vignetta belga",
        description:
          "Iscriviti alla notifica email gratuita di BelgiumVignette.be, un sito informativo indipendente. Riceverai una sola notifica quando la vendita autorizzata sarà disponibile.",
        benefits: [
          "Una sola notifica quando inizia la vendita autorizzata",
          "Link a un canale di acquisto riconosciuto",
          "Nessuna email inutile",
        ],
        submit: "Tienimi aggiornato",
      },
      default: {
        title:
          "Ricevi una notifica non appena inizia la vendita ufficiale della vignetta belga",
        description:
          "Iscriviti alla notifica email gratuita di BelgiumVignette.be, un sito informativo indipendente. Non siamo un ente pubblico e non vendiamo vignette. Riceverai una sola notifica quando la vendita autorizzata sarà disponibile.",
        benefits: [
          "Una sola notifica quando inizia la vendita autorizzata",
          "Link a un canale di acquisto riconosciuto",
          "Nessuna email inutile",
        ],
        submit: "Tienimi aggiornato",
      },
    },
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
      description: "Pagina ufficiale su obbligo, tariffe e acquisto dal 2 aprile 2027",
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
