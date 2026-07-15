import type { BaseDictionary } from "../types";

const dictionary: BaseDictionary = {
  locale: "ro",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Tot ce trebuie să știți despre vigneta rutieră digitală din Belgia — pentru localnici și șoferi transfrontalieri.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Acasă",
    prices: "Prețuri",
    foreign: "Șoferi străini",
    exemptions: "Scutiri",
    fines: "Amenzi",
    buy: "Cum se cumpără",
    news: "Știri și actualizări",
    privacy: "Confidențialitate",
  },
  meta: {
    home: {
      title: "Vigneta Belgia 2027 — prețuri, reguli și ghid pentru șoferi străini",
      description:
        "Ghid independent despre vigneta rutieră digitală planificată în Belgia din 1 mai 2027. Prețuri, scutiri, amenzi și sfaturi practice pentru șoferii olandezi, germani și alți șoferi transfrontalieri.",
    },
    prices: {
      title: "Prețuri vigneta Belgia 2027 — tarife zilnice, lunare și anuale",
      description:
        "Prețuri planificate pentru vigneta din Belgia: €100/an, pe termen scurt de la €9/zi. Norma de emisii Euro explicată simplu.",
    },
    foreign: {
      title: "Vigneta Belgia pentru mașini străine și șoferi transfrontalieri",
      description:
        "Ghid practic pentru șoferii din Olanda, Germania și Franța care tranzitează Belgia. Ce trebuie să știți conform planurilor actuale.",
    },
    exemptions: {
      title: "Scutiri de la vigneta Belgia — motociclete, camioane și altele",
      description:
        "Cine este scutit conform planurilor? Motociclete, camioane, servicii de urgență și alte categorii explicate.",
    },
    fines: {
      title: "Amenzi vigneta Belgia — control și perioadă de toleranță",
      description:
        "Amenzi planificate de până la €210, verificări ANPR și toleranță până la 1 iulie 2027.",
    },
    buy: {
      title: "Cumpără vigneta Belgia — când și cum (sistem digital așteptat)",
      description:
        "Încă nu este disponibilă la vânzare. Ce se așteaptă conform planurilor: un sistem digital legat de numărul de înmatriculare, fără autocolant pe parbriz.",
    },
    news: {
      title: "Știri despre vigneta Belgia — surse de încredere explicate",
      description:
        "Rezumate independente ale știrilor oficiale despre vigneta belgiană, cu perspectiva noastră editorială. Linkuri către sursele originale.",
    },
    privacy: {
      title: "Politica de confidențialitate — BelgiumVignette.be",
      description:
        "Cum gestionează BelgiumVignette.be cookie-urile, analitica, datele din newsletter și drepturile dvs. GDPR.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be este un site informativ independent. Nu suntem afiliați guvernului belgian, Flandrei, Valoniei sau Bruxelles-ului.",
    lastUpdated: "Ultima actualizare",
    lastUpdatedDate: "15 July 2026",
    lastUpdatedIso: "2026-07-15",
    readMore: "Citește mai mult",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — informații independente despre taxele rutiere din Belgia",
    backToHome: "Înapoi la pagina principală",
    plannedNotice:
      "Planurile prezentate în martie 2026 pot încă suferi modificări. Urmărim sursele oficiale și actualizăm această pagină când apar noutăți.",
    independentSite: "Site informativ independent",
    contactLabel: "Contact",
    cookieSettings: "Setări cookie",
    tableCategory: "Categorie",
    tablePrice: "Preț",
  },
  notFound: {
    title: "Pagina nu a fost găsită",
    description:
      "Această pagină nu există sau a fost mutată. Reveniți la pagina principală sau consultați cele mai recente știri despre vigneta belgiană.",
    homeLink: "Pagina principală",
    newsLink: "Știri și actualizări",
  },
  home: {
    hero: {
      eyebrow: "Planificat din 1 mai 2027",
      title: "Vigneta digitală din Belgia, explicată clar",
      subtitle:
        "Din mai 2027, Flandra, Valonia și Bruxelles plănuiesc să taxeze șoferii pentru utilizarea drumurilor principale. Fără autocolant pe parbriz — o vignetă digitală legată de numărul de înmatriculare.",
      ctaPrimary: "Vezi prețurile",
      ctaSecondary: "Info pentru șoferi străini",
    },
    quickAnswers: [
      {
        title: "Cine are nevoie?",
        summary:
          "Autoturisme de până la 3,5 tone, inclusiv vehicule străine — chiar și dacă doar tranzitați.",
        href: "foreign",
      },
      {
        title: "Cine este scutit?",
        summary:
          "Motociclete, camioane (taxă pe km), tractoare, autocare, servicii de urgență și poliție.",
        href: "exemptions",
      },
      {
        title: "Cât costă?",
        summary:
          "Vignetă anuală de la €90 (electric) la €125 (mașini mai vechi). Pe termen scurt de la €9/zi.",
        href: "prices",
      },
    ],
    pricingTitle: "Tarife planificate pe scurt",
    pricingSubtitle:
      "Bazat pe planurile publicate (martie 2026). Sumele finale pot încă suferi modificări.",
    annualTableTitle: "Vignetă anuală",
    shortTermTableTitle: "Pe termen scurt",
    annualPricing: [
      { label: "Euro 4 și superior", value: "€100 / year", note: "97%+ din autoturismele flamande" },
      { label: "Electric / hidrogen", value: "€90 / year" },
      { label: "Mașini mai vechi (până la Euro 3)", value: "€125 / year" },
    ],
    shortTermPricing: [
      { label: "1 zi", value: "€9" },
      { label: "10 zile", value: "€12" },
      { label: "1 lună", value: "€19" },
      { label: "2 luni", value: "€30" },
    ],
    timelineTitle: "Date cheie (conform planurilor)",
    timeline: [
      {
        date: "March 2026",
        title: "Planuri prezentate",
        description:
          "Guvernul flamand prezintă propunerea. Aprobarea Valoniei, Bruxelles-ului și Comisiei Europene este încă în așteptare.",
      },
      {
        date: "1 May 2027",
        title: "Vignetă obligatorie",
        description:
          "Vigneta digitală devine obligatorie pe autostrăzi și drumuri regionale principale.",
      },
      {
        date: "1 July 2027",
        title: "Amenzi aplicate",
        description:
          "Perioada de toleranță se încheie. Camerele ANPR și unitățile mobile încep aplicarea amenzilor.",
      },
    ],
    faqTitle: "Întrebări frecvente",
    faqs: [
      {
        question: "Este un autocolant fizic?",
        answer:
          "Nu. Conform planurilor, este o vignetă digitală legată de numărul de înmatriculare. Fără autocolant pe parbriz.",
      },
      {
        question: "Se aplică și mașinilor străine?",
        answer:
          "Da. Regulile UE impun tratament egal. Șoferii belgieni și străini trebuie să plătească amândoi.",
      },
      {
        question: "Plătesc motocicliștii?",
        answer:
          "Nu. Motocicletele sunt explicit scutite conform anunțurilor miniștrilor Weyts (Flandra) și Desquesnes (Valonia).",
      },
      {
        question: "Când pot cumpăra?",
        answer:
          "Nu există încă un canal oficial de vânzare. Înscrieți-vă la newsletter pentru actualizări despre lansare.",
      },
    ],
    sourcesTitle: "Surse oficiale",
  },
  prices: {
    title: "Prețuri și durate",
    intro:
      "Prezentare generală a prețurilor planificate pentru vignetă, în funcție de norma de emisii Euro. Bazat pe anunțurile din martie 2026 — detaliile pot suferi modificări.",
    sections: [
      {
        id: "annual",
        title: "Vignetă anuală",
        paragraphs: [
          "Pentru utilizatorii obișnuiți ai drumurilor principale din Belgia. Prețul depinde de clasa de emisii Euro a vehiculului dvs.",
        ],
      },
      {
        id: "short",
        title: "Opțiuni pe termen scurt",
        paragraphs: [
          "Pentru călătorii ocazionale — vacanțe, weekenduri — sunt planificate vignete pe durate mai scurte.",
          "Mașinile mai vechi și mai poluante (până la Euro 3) plătesc tarife ușor mai mari.",
        ],
      },
      {
        id: "road-tax",
        title: "Interacțiunea cu taxa rutieră (Flandra)",
        paragraphs: [
          "Flandra reformează simultan taxa rutieră anuală. Aproximativ jumătate din șoferii flamanzi ar putea plăti în total mai mult — până la €100/an în plus.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 și superior", value: "€100", note: "An" },
      { label: "Electric / hidrogen", value: "€90", note: "An" },
      { label: "Până la Euro 3", value: "€125", note: "An" },
    ],
    shortTermTable: [
      { label: "1 zi", value: "€9" },
      { label: "10 zile", value: "€12" },
      { label: "1 lună", value: "€19" },
      { label: "2 luni", value: "€30" },
    ],
    euroNormTitle: "Normele Euro explicate",
    euroNormCategoryHeader: "Normă",
    euroNormDescriptionHeader: "Descriere",
    euroNormItems: [
      { norm: "Euro 4+", description: "Mașini din ~2005–2006 înainte. Majoritatea vehiculelor de pe drum." },
      { norm: "Electric / H₂", description: "Zero emisii. Cel mai mic tarif planificat." },
      { norm: "Euro 3 și inferior", description: "Vehicule mai vechi și mai poluante." },
    ],
    vignettePagesTitle: "Pe tip de vigneta",
    faqs: [
      {
        question: "Sunt dube comerciale deductibile?",
        answer: "Conform planurilor, costul vignetei pentru dube profesionale poate fi integral deductibil ca cheltuială de afaceri.",
      },
    ],
  },
  foreign: {
    title: "Șoferi străini",
    intro:
      "Peste jumătate din kilometrii parcurși pe drumurile belgiene sunt conduși, se pare, de șoferi străini. Dacă veniți din Olanda, Germania, Franța sau din altă parte, iată ce înseamnă planurile pentru dvs.",
    sections: [
      {
        id: "eu-rules",
        title: "Tratament egal",
        paragraphs: [
          "Și șoferii belgieni plătesc — regulile UE împiedică taxarea exclusivă a străinilor. Numărul dvs. străin este acoperit.",
          "Se estimează că aproximativ 30 de milioane de autoturisme străine trec anual prin Belgia.",
        ],
      },
      {
        id: "digital",
        title: "Digital, fără autocolant",
        paragraphs: [
          "Nu există vignetă fizică de cumpărat sau afișat. Sistemul folosește recunoașterea automată a numerelor de înmatriculare (ANPR). Cumpărați înainte de a conduce.",
        ],
      },
      {
        id: "history",
        title: "Context istoric",
        paragraphs: [
          "Belgia a încercat o vignetă în 2007, dar a renunțat după protestele olandeze. Miniștrii olandezi și-au exprimat din nou dezamăgirea — nu există un regim special la frontieră în planurile actuale.",
        ],
      },
    ],
    countryTips: [
      {
        country: "🇳🇱 Olanda",
        tips: [
          "Rutele populare prin E19 (Anvers), E40 (Bruxelles) și E314 (Liège) sunt acoperite.",
          "Nu există un acord special pentru șoferii din sudul Olandei în planurile actuale.",
        ],
      },
      {
        country: "🇩🇪 Germania",
        tips: [
          "Tranzitul prin Aachen–Liège sau rutele spre Franța necesită probabil o vignetă.",
          "Opțiunile pe termen scurt (1–10 zile) sunt potrivite pentru traficul de tranzit.",
        ],
      },
      {
        country: "🇫🇷 Franța",
        tips: [
          "Șoferii din nordul Franței și Valonia: verificați dacă ruta dvs. folosește drumuri regionale principale belgiene.",
        ],
      },
    ],
    faqs: [
      {
        question: "Am nevoie de vignetă dacă doar tranzitez?",
        answer: "Da — conform planurilor, utilizarea drumurilor principale necesită o vignetă, indiferent de destinație.",
      },
    ],
  },
  exemptions: {
    title: "Scutiri",
    intro: "Nu fiecare vehicul plătește conform planurilor. Iată cine este inclus și cine este exclus.",
    sections: [
      {
        id: "motorcycles",
        title: "Motociclete scutite",
        paragraphs: ["Motocicletele sunt explicit excluse conform miniștrilor Weyts și Desquesnes."],
      },
      {
        id: "trucks",
        title: "Camioane",
        paragraphs: ["Vehiculele grele folosesc sistemul existent de taxă pe km (Viapass), nu vigneta."],
      },
    ],
    exemptTableTitle: "Scutit",
    requiredTableTitle: "Vignetă obligatorie",
    exemptTable: [
      { label: "Motociclete și mopede", value: "Scutit" },
      { label: "Camioane (>3,5t)", value: "Scutit — taxă pe km" },
      { label: "Tractoare", value: "Scutit" },
      { label: "Autocare", value: "Scutit" },
      { label: "Urgență și poliție", value: "Scutit" },
      { label: "Apărare", value: "Scutit" },
    ],
    notExemptTable: [
      { label: "Autoturisme (≤3,5t)", value: "Vignetă obligatorie" },
      { label: "Mașini străine", value: "Vignetă obligatorie" },
      { label: "Dube", value: "Vignetă obligatorie" },
      { label: "Mașini electrice", value: "Obligatoriu (€90/an planificat)" },
    ],
    faqs: [
      {
        question: "Este scutit rulota mea?",
        answer: "Dacă este înmatriculată ca vehicul de pasageri ≤3,5t, este acoperită conform planurilor.",
      },
    ],
  },
  fines: {
    title: "Amenzi și control",
    intro: "Control prin camere ANPR și unități mobile. Este planificată o perioadă de toleranță înainte de aplicarea amenzilor.",
    sections: [
      {
        id: "tolerance",
        title: "Perioadă de toleranță",
        paragraphs: ["1 mai – 1 iulie 2027 — fără amenzi conform planurilor. Penalități de la 1 iulie înainte."],
      },
      {
        id: "anpr",
        title: "Verificări ANPR",
        paragraphs: ["Camerele de pe autostrăzi și drumurile regionale principale verifică valabilitatea vignetei."],
      },
    ],
    fineTable: [
      { label: "Prima abatere", value: "€70" },
      { label: "A doua abatere", value: "€140" },
      { label: "A treia și următoarele", value: "€210" },
    ],
    faqs: [
      {
        question: "Amendă dacă uit vigneta?",
        answer: "Nu în perioada de toleranță (mai–iunie 2027). După aceea, da — inclusiv pentru numere străine.",
      },
    ],
  },
  buy: {
    title: "Cum se cumpără",
    intro:
      "Nu există încă un canal oficial de vânzare. Se așteaptă un sistem digital, dar detaliile despre site/aplicație sunt necunoscute.",
    sections: [
      {
        id: "status",
        title: "Starea actuală",
        paragraphs: [
          "Planurile necesită încă aprobarea Valoniei, Bruxelles-ului și Comisiei Europene înainte de deschiderea vânzărilor.",
        ],
      },
      {
        id: "expected",
        title: "Ce se așteaptă",
        paragraphs: ["Înregistrarea online a numărului de înmatriculare. Nu este necesar autocolant fizic."],
      },
    ],
    statusBadge: "Încă indisponibil",
    steps: [
      { title: "Așteptați lansarea oficială", description: "Vânzările sunt așteptate înainte de 1 mai 2027." },
      { title: "Înregistrați numărul de înmatriculare", description: "Sistem digital — fără autocolant pe parbriz." },
      { title: "Alegeți durata", description: "Zi, 10 zile, lună, 2 luni sau anual." },
      { title: "Conduceți cu vignetă validă", description: "Camerele verifică automat." },
    ],
    faqs: [
      {
        question: "Pot precomanda acum?",
        answer: "Nu. Abonați-vă la newsletter pentru a rămâne informat.",
      },
    ],
  },
  privacy: {
    title: "Politica de confidențialitate",
    intro: "BelgiumVignette.be respectă confidențialitatea dvs. Iată cum gestionăm datele dvs.",
    sections: [
      {
        id: "controller",
        title: "Operator de date",
        paragraphs: ["BelgiumVignette.be — contact: info@tolls.be."],
      },
      {
        id: "newsletter",
        title: "Newsletter",
        paragraphs: [
          "E-mailul, limba și data consimțământului sunt stocate în Supabase (găzduire UE). Folosite doar pentru actualizări despre vignetă.",
        ],
      },
      {
        id: "cookies",
        title: "Cookie-uri, analitică și consimțământ",
        paragraphs: [
          "Stocare esențială: salvăm preferința dvs. privind cookie-urile în localStorage. Temei legal: interes legitim (Art. 6(1)(f) GDPR) și/sau consimțământ acolo unde este necesar.",
          "Analitică (opțional): Vercel Analytics colectează vizualizări anonime de pagină. Se încarcă doar după consimțământul din banner. Temei legal: consimțământ (Art. 6(1)(a) GDPR). Retragere prin Setări cookie din subsol.",
          "Google Search Console și Bing Webmaster Tools: doar etichete meta de verificare a proprietății — fără cookie-uri de urmărire.",
          "Păstrare: până când ștergeți stocarea sau actualizăm această politică (versiunea 2026-07-15).",
        ],
      },
      {
        id: "news-editorial",
        title: "Știri, rezumate & conținut editorial",
        paragraphs: [
          "Secțiunea noastră de știri publică rezumate independente ale reportajelor disponibile public despre vigneta belgiană. Aceste pagini nu sunt reproduceri ale articolelor originale.",
          "Rezumatele și traducerile pot fi realizate cu ajutorul IA și pot diferi în formulare față de sursă. Linkăm întotdeauna către editorul original. Comentariul nostru editorial («Perspectiva noastră») este scris independent și nu reprezintă editorul original sau autoritățile belgiene.",
          "Imaginile din articolele de știri pot proveni din articolul original linkat sau de la agenții de presă, cu credite acolo unde este cazul. Astfel de materiale rămân proprietatea deținătorilor respectivi de drepturi. Le afișăm cu bună-credință ca referință, alături de un link către sursă. Dacă considerați că conținutul dvs. este folosit incorect, contactați info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Drepturile dvs. (GDPR)",
        paragraphs: ["Acces, rectificare, ștergere, opoziție — info@tolls.be."],
      },
    ],
    lastUpdated: "15 July 2026",
  },
  news: {
    title: "Știri și actualizări",
    intro:
      "Urmărim surse oficiale și media de încredere despre vigneta planificată în Belgia. Fiecare articol rezumă reportajul original și adaugă perspectiva noastră independentă — cu un link direct către sursă.",
    latestArticles: "Cele mai recente articole",
    summaryTitle: "Rezumat",
    summaryFromSource: "din sursa originală:",
    ourTakeTitle: "Perspectiva noastră",
    sourceTitle: "Sursă originală",
    readArticle: "Citește articolul",
    backToNews: "Înapoi la știri",
    publishedOn: "Publicat",
    sourceLabel: "Sursă",
    sourceDisclaimer:
      "Rezumăm surse de încredere și linkăm articolul original. Perspectiva noastră este un comentariu editorial independent, nu informații oficiale guvernamentale.",
    translationDisclaimer:
      "Rezumatul și traducerea de pe această pagină au fost realizate cu ajutorul IA pe baza articolului original. Consultați întotdeauna sursa de mai jos pentru formularea oficială.",
    articleAttributionTitle: "Rezumat independent — nu articolul original",
    articleAttributionIndependence:
      "BelgiumVignette.be este un site de informații independent. Nu suntem afiliați cu, aprobați de sau acționăm în numele editorului original. Această pagină rezumă reportaje disponibile public și adaugă propriul nostru comentariu editorial. Nu este o reproducere a articolului original.",
    articleAttributionAi:
      "Rezumatul și traducerea au fost realizate cu ajutorul IA și pot diferi în formulare față de original. Consultați întotdeauna sursa legată mai jos pentru textul oficial.",
    articleAttributionReadOriginal: "Citiți articolul original la",
    articleAttributionCopyright:
      "Articolul original, imaginile și alte materiale media rămân proprietatea deținătorilor respectivi de drepturi. Legăm sursa cu bună-credință pentru referință. Creditele foto sunt indicate mai sus acolo unde este cazul.",
    tableOfContents: "Pe această pagină",
    relatedArticles: "Mai multe știri și actualizări",
    noArticles: "Niciun articol publicat încă. Reveniți în curând.",
  },
  newsletter: {
    title: "Rămâneți informat",
    description: "Primiți notificări când vânzările oficiale încep și când sunt publicate actualizări importante.",
    emailPlaceholder: "Adresa dvs. de e-mail",
    consentLabel: "Sunt de acord să primesc actualizări și am citit politica de confidențialitate.",
    submit: "Abonare",
    success: "Mulțumim! Sunteți abonat.",
    error: "Ceva nu a funcționat. Vă rugăm să încercați din nou.",
    privacyLink: "Politica de confidențialitate",
  },
  cookieBanner: {
    title: "Cookie-uri și confidențialitate",
    description:
      "Stocare esențială pentru alegerea dvs. privind cookie-urile. Opțional: Vercel Analytics (vizualizări anonime de pagină). Fără analitică înainte de a decide.",
    essentialTitle: "Esențiale",
    essentialDescription: "Stochează preferința dvs. privind cookie-urile în localStorage.",
    alwaysOn: "Întotdeauna active — necesare pentru a reține alegerea dvs.",
    analyticsTitle: "Analitică (Vercel Analytics)",
    analyticsDescription: "Statistici anonime de vizualizare a paginilor. Active doar după consimțământ.",
    acceptAll: "Acceptă tot",
    rejectAll: "Respinge tot",
    savePreferences: "Salvează preferințele",
    manageSettings: "Setări",
    closeSettings: "Închide",
    privacyLink: "Politica de confidențialitate",
  },
  sources: [
    { title: "Guvernul flamand", url: "https://www.vlaanderen.be", description: "Anunțuri oficiale" },
    { title: "Viapass", url: "https://www.viapass.be", description: "Sistem de taxă pe km pentru camioane" },
    { title: "Comisia Europeană", url: "https://ec.europa.eu", description: "Revizuirea acordului" },
  ],
};

export default dictionary;
