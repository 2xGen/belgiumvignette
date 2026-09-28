import type { BaseDictionary } from "../types";
import { roTolls } from "../tolls/ro";
import { buildRateMatrix } from "../rate-matrix";

const roRateMatrix = buildRateMatrix({
  vehicleHeader: "Vehicul",
  dayHeader: "1 zi",
  tenDaysHeader: "10 zile",
  monthHeader: "1 lună",
  twoMonthsHeader: "2 luni",
  yearHeader: "1 an",
  euro03: "Euro 0 până la 3",
  euro4: "Euro 4 și superior",
  zeroEmission: "Fără emisii",
});

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
    tolls: "Taxe",
    news: "Știri și actualizări",
    privacy: "Confidențialitate",
  },
  meta: {
    home: {
      title: "Vinietă Belgia 2027: prețuri, autostrăzi și cum să cumperi",
      description:
        "Belgia plănuiește o vinietă rutieră digitală din mai 2027. Consultați prețurile planificate, cine are nevoie, scutirile pentru motociclete și unde să cumpărați.",
    },
    prices: {
      title: "Prețuri vigneta Belgia 2027: tarife pe Euronormă și durată",
      description:
        "Tabelă completă de prețuri pentru vigneta rutieră belgiană 2027 pe Euronormă și durată — de la €8,10/zi (fără emisii) până la €125/an (Euro 0–3).",
    },
    foreign: {
      title: "Au mașinile străine nevoie de vigneta Belgia în 2027?",
      description:
        "Da — conform planurilor actuale, autoturismele străine vor avea nevoie de vigneta Belgia de la 1 mai 2027 pe drumurile acoperite. Ghid pentru șoferii din Olanda, Germania și Franța.",
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
      title: "Cumpără vigneta Belgia — vânzare așteptată de la 1 martie 2027",
      description:
        "Conform planurilor actuale, vânzarea online a vignetei rutiere belgiene este așteptată de la 1 martie 2027. Obligatorie de la 1 mai 2027. Sursă oficială: guvernul flamand.",
    },
    tolls: {
      title: "Taxe în Belgia 2027: autostrăzi, vinietă și tarife",
      description:
        "Sunt autostrăzile cu plată în Belgia? Aflați despre taxe, vinieta planificată din mai 2027, tarife și regulile pentru mașinile străine.",
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
    lastUpdatedDate: "28 September 2026",
    lastUpdatedIso: "2026-09-28",
    readMore: "Citește mai mult",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — informații independente despre taxele rutiere din Belgia",
    ownedManagedBy: "Deținut și administrat de",
    operatorName: "2xGen",
    operatorUrl: "https://2xgen.com/about",
    backToHome: "Înapoi la pagina principală",
    plannedNotice:
      "Planurile prezentate în martie 2026 pot încă suferi modificări. Urmărim sursele oficiale și actualizăm această pagină când apar noutăți.",
    independentSite: "Info vinietă rutieră belgiană",
    contactLabel: "Contact",
    cookieSettings: "Setări cookie",
    tableCategory: "Categorie",
    tablePrice: "Preț",
    lastChecked: "Ultima verificare",
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
      title: "Vinietă Belgia 2027: aveți nevoie de o vinietă pentru Belgia?",
      subtitle:
        "Belgia plănuiește introducerea unei viniete rutiere digitale din 1 mai 2027. Aflați dacă aveți nevoie de una, cât costă, cine este scutit și când începe vânzarea.",
      ctaPrimary: "Verificați dacă aveți nevoie de vinietă",
      ctaSecondary: "Notificare la deschiderea vânzării",
    },
    decisionTree: {
      title: "Aveți nevoie de o vinietă?",
      options: [
        { label: "Mașină belgiană", href: "prices" },
        { label: "Mașină olandeză", href: "foreign", anchor: "netherlands" },
        { label: "Mașină germană", href: "foreign", anchor: "germany" },
        { label: "Mașină franceză", href: "foreign", anchor: "france" },
        { label: "Autorulotă / dubă", href: "exemptions" },
      ],
    },
    quickAnswers: [
      {
        title: "Cine trebuie să cumpere o vinietă belgiană?",
        summary:
          "Autoturisme de până la 3,5 tone, inclusiv vehicule străine în tranzit pe drumurile acoperite.",
        href: "foreign",
        linkLabel: "Ghid pentru șoferii străini",
      },
      {
        title: "Cine este scutit de vigneta Belgia?",
        summary:
          "Motociclete, camioane (taxă pe km), tractoare, autocare, servicii de urgență și poliție — conform planurilor actuale.",
        href: "exemptions",
        linkLabel: "Vezi toate scutirile",
      },
      {
        title: "Care este prețul vignetei Belgia în 2027?",
        summary:
          "Prețul depinde de Euronormă și durată: de la €8,10/zi (fără emisii) și €9/zi (Euro 4+), până la €90–€125 pe an.",
        href: "prices",
        linkLabel: "Ghid complet de prețuri",
      },
    ],
    overview: {
      title: "Vinieta rutieră belgiană: ce este planificat pentru 2027",
      paragraphs: [
        "Belgia plănuiește introducerea unei viniete rutiere digitale din 1 mai 2027. Vinieta belgiană s-ar aplica autoturismelor de până la 3,5 tone pe autostrăzi și anumite drumuri regionale principale.",
        "Mașinile străine ar fi incluse. Șoferii din Franța, Țările de Jos, Germania și alte țări ar avea nevoie de o vinietă pentru a folosi drumurile belgiene acoperite.",
        "Nu ar fi un autocolant pe parbriz. Vinieta de autostradă belgiană ar fi digitală și legată de numărul de înmatriculare, cu verificări inclusiv prin camere ANPR.",
        "Conform tarifelor publicate de guvernul flamand, prețul depinde de Euronormă și durată: de la €8,10 pe zi pentru vehicule fără emisii și €9 pe zi pentru Euro 4+, până la €90–€125 pe an. Sunt planificate și 10 zile, 1 lună și 2 luni.",
        "Motocicletele ar fi scutite conform planurilor actuale. Sumele și regulile finale trebuie încă confirmate înainte de intrarea în vigoare.",
      ],
    },
    intentSections: [
      {
        id: "autostrazi",
        title: "Aveți nevoie de vinietă pentru autostrăzile din Belgia?",
        paragraphs: [
          "Conform planurilor actuale, o vinietă rutieră digitală ar deveni obligatorie pe autostrăzile belgiene și pe anumite drumuri regionale principale din 1 mai 2027.",
          "Astăzi majoritatea autostrăzilor belgiene rămân gratuite pentru autoturisme. Proiectul de vinietă ar schimba asta: accesul la autostrăzi și la o parte din rețeaua regională mai rapidă ar necesita o vinietă legată de numărul de înmatriculare.",
          "Dacă folosiți doar drumuri locale, o vinietă nu ar fi necesară conform informațiilor publicate. În practică, evitarea completă a autostrăzilor și a drumurilor regionale principale este adesea dificilă pentru călătorii interurbane sau de tranzit.",
        ],
        link: {
          href: "tolls",
          label: "Taxe și autostrăzi în Belgia",
        },
      },
      {
        id: "motociclete",
        title: "Au motocicletele nevoie de vigneta Belgia?",
        paragraphs: [
          "Nu. Conform anunțurilor guvernamentale, motocicletele ar fi explicit scutite de vigneta belgiană.",
          "Obligația ar viza vehiculele cu motor cu cel puțin patru roți de până la 3,5 tone — inclusiv mașini, unele dube ușoare și autorulote. Camioanele rămân sub taxa pe kilometru Viapass.",
        ],
        link: {
          href: "exemptions",
          label: "Vezi detaliile scutirilor",
        },
      },
      {
        id: "cumpara",
        title: "Unde se cumpără vigneta Belgia?",
        paragraphs: [
          "Vânzarea oficială nu a început încă. Conform planurilor actuale, cumpărarea online ar fi posibilă din 1 martie 2027 prin site-ul oficial sau un partener autorizat.",
          "Astăzi nu există un portal oficial de vânzare. Site-urile care oferă deja rezervare sau plată nu sunt canalul oficial.",
        ],
        link: {
          href: "buy",
          label: "Cumpără vigneta Belgia: date și canale oficiale",
        },
      },
    ],
    pricingTitle: "Care este prețul vignetei Belgia în 2027?",
    pricingParagraphs: [
      "Prețul vignetei rutiere belgiene depinde de Euronorma vehiculului și de durata de valabilitate. Pentru mașinile cu Euro 4 sau superior, tarifele planificate încep de la €9 pentru 1 zi și €100 pentru 1 an. Vehiculele mai vechi plătesc mai mult, iar vehiculele fără emisii beneficiază de un tarif mai mic.",
    ],
    pricingLinkLabel: "Consultați toate prețurile vignetei belgiene",
    pricingLinkSecondaryLabel: "Ghid complet de prețuri",
    pricingMatrixTitle: "Tarife planificate",
    rateMatrix: roRateMatrix,
    pricingNote:
      "Acestea sunt tarifele publicate în prezent de guvernul flamand. Introducerea rămâne condiționată de aprobarea finală.",
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
        question: "Aveți nevoie de vinietă pentru autostrăzile din Belgia?",
        answer:
          "Conform planurilor actuale, da din 1 mai 2027 pe autostrăzile belgiene și pe anumite drumuri regionale principale. Drumurile locale ar rămâne în afara obligației.",
      },
      {
        question: "Au motocicletele nevoie de vigneta Belgia?",
        answer:
          "Nu. Motocicletele sunt explicit scutite conform anunțurilor miniștrilor Weyts (Flandra) și Desquesnes (Valonia).",
      },
      {
        question: "Se aplică și mașinilor străine?",
        answer:
          "Da. Regulile UE impun tratament egal. Șoferii belgieni și străini trebuie să plătească pe drumurile acoperite.",
      },
      {
        question: "Unde se cumpără vigneta Belgia?",
        answer:
          "Vânzarea oficială nu a început încă. Conform planurilor, cumpărarea online este așteptată din 1 martie 2027 prin canalul oficial sau un partener autorizat.",
      },
    ],
    sourcesTitle: "Surse oficiale",
  },
  prices: {
    title: "Prețuri vigneta Belgia 2027: tarife pe Euronormă și durată",
    intro:
      "Prețul planificat al vignetei rutiere belgiene depinde de doi factori: Euronorma vehiculului și durata de valabilitate a vignetei. Guvernul flamand a publicat tarife pentru 1 zi, 10 zile, 1 lună, 2 luni și 1 an.",
    leadParagraphs: [
      "Pentru o mașină cu Euro 4 sau superior, vigneta belgiană costă conform tarifelor actuale €9 pentru 1 zi, €12 pentru 10 zile și €100 pentru un an. Vehiculele fără emisii plătesc mai puțin, iar vehiculele cu Euro 0 până la Euro 3 plătesc mai mult.",
      "Vigneta este planificată din 1 mai 2027. Achiziția ar deveni posibilă din 1 martie 2027. Introducerea rămâne condiționată de aprobarea finală.",
    ],
    matrixTitle: "Prețuri vigneta rutieră belgiană 2027",
    rateMatrix: roRateMatrix,
    matrixNote:
      "Aceste tarife sunt publicate de guvernul flamand. Prețul nu este determinat doar de cât timp aveți nevoie de vigneta, ci și de Euronorma vehiculului.",
    buyLinkParagraph:
      "[[buy|Aflați unde și când puteți cumpăra vigneta belgiană]].",
    categorySections: [
      {
        id: "euro-4",
        title: "Cât costă o vignetă belgiană pentru Euro 4 și superior?",
        paragraphs: [
          "Pentru vehiculele cu Euro 4 sau superior se aplică, conform tarifelor publicate:",
        ],
        list: [
          "1 zi: €9",
          "10 zile: €12",
          "1 lună: €19",
          "2 luni: €30",
          "1 an: €100",
        ],
        linkParagraph:
          "Aceasta este categoria în care se încadrează o mare parte din parcul auto actual. Pentru un tranzit scurt prin Belgia, o vignetă pe zi sau pe 10 zile poate fi suficientă. Cine folosește regulat drumurile regionale și autostrăzile belgiene poate compara vigneta anuală cu duratele mai scurte. Citiți mai multe despre [[dailyVignette|vigneta zilnică]] sau consultați [[annualVignette|vigneta anuală]].",
      },
      {
        id: "euro-0-3",
        title: "Cât costă o vignetă belgiană pentru Euro 0 până la Euro 3?",
        paragraphs: [
          "Vehiculele mai vechi cu Euro 0, Euro 1, Euro 2 sau Euro 3 se încadrează în categoria de tarif cea mai scumpă.",
          "Prețurile planificate variază de la €11,25 pentru o zi până la €125 pentru un an.",
        ],
        tableTitle: "Preț Euro 0–3",
        table: [
          { label: "1 zi", value: "€11,25" },
          { label: "10 zile", value: "€15" },
          { label: "1 lună", value: "€23,75" },
          { label: "2 luni", value: "€37,50" },
          { label: "1 an", value: "€125" },
        ],
      },
      {
        id: "electric",
        title: "Cât costă vigneta pentru o mașină electrică?",
        paragraphs: [
          "Pentru un vehicul fără emisii se aplică tariful cel mai mic. Conform tabelului de prețuri actual, vigneta costă €8,10 pentru o zi și €90 pentru un an întreg.",
        ],
        tableTitle: "Preț fără emisii",
        table: [
          { label: "1 zi", value: "€8,10" },
          { label: "10 zile", value: "€10,80" },
          { label: "1 lună", value: "€17,10" },
          { label: "2 luni", value: "€27" },
          { label: "1 an", value: "€90" },
        ],
        linkParagraph:
          "[[electricVignette|Citiți mai multe despre vigneta belgiană pentru mașini electrice]].",
      },
    ],
    durationSection: {
      id: "durata",
      title: "Ce durată am nevoie?",
      paragraphs: [
        "Conform planurilor actuale, puteți alege dintre cinci perioade de valabilitate:",
        "Cea mai potrivită durată depinde de cât de des și cât de mult folosiți drumurile pe care vigneta va deveni obligatorie.",
        "Consultați explicațiile separate despre [[dailyVignette|vigneta zilnică]], [[monthlyVignette|vigneta lunară]] și [[annualVignette|vigneta anuală]].",
      ],
      list: [
        "1 zi — pentru un tranzit scurt sau o excursie de o zi.",
        "10 zile — de exemplu pentru o vacanță sau o vizită mai lungă.",
        "1 lună — pentru mai multe călătorii pe parcursul câtorva săptămâni.",
        "2 luni — pentru un sejur mai lung sau o utilizare temporară regulată.",
        "1 an — pentru șoferii care circulă regulat pe drumurile regionale și autostrăzile belgiene.",
      ],
    },
    whenSection: {
      id: "cand",
      title: "Când se aplică aceste prețuri?",
      paragraphs: [
        "Vigneta rutieră digitală este planificată din 1 mai 2027. Conform informațiilor oficiale actuale, vigneta ar putea fi cumpărată online din 1 martie 2027.",
        "Implementarea practică este încă în curs, iar introducerea rămâne condiționată de aprobarea finală.",
        "Doriți să aflați cum va funcționa achiziția? Consultați [[buy|Cumpără vigneta Belgia]]. Pentru toate regulile, vehiculele și datele importante mergeți la ghidul nostru complet despre [[home|vigneta rutieră belgiană 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Interacțiunea cu taxa rutieră (Flandra)",
        paragraphs: [
          "Flandra reformează simultan taxa rutieră anuală. Conform estimărilor, aproximativ jumătate dintre șoferii flamanzi ar putea plăti în total mai mult — până la €100 în plus pe an.",
          "Reducerea taxei rutiere nu compensează pe toată lumea pe deplin pentru costul vignetei, conform planurilor. Acestea sunt informații de context; tarifele vignetei de mai sus se aplică independent de acea reformă.",
        ],
      },
    ],
    euroNormTitle: "Normele Euro pe scurt",
    euroNormCategoryHeader: "Normă",
    euroNormDescriptionHeader: "Descriere",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Mașini din circa 2005–2006. Majoritatea vehiculelor de pe drum. Tarif zilnic €9, anual €100.",
      },
      {
        norm: "Fără emisii",
        description: "Complet fără emisii (electric / hidrogen). Cel mai mic tarif: de la €8,10/zi, €90/an.",
      },
      {
        norm: "Euro 3 și inferior",
        description: "Vehicule mai vechi și mai poluante. Cel mai mare tarif: de la €11,25/zi, €125/an.",
      },
    ],
    vignettePagesTitle: "Pe tip de vigneta",
    faqs: [
      {
        question: "Care este cel mai mic preț zilnic planificat?",
        answer:
          "Conform guvernului flamand, cel mai mic tarif zilnic este €8,10 pentru vehiculele fără emisii. Pentru Euro 4 și superior este €9; pentru Euro 0 până la 3 este €11,25.",
      },
      {
        question: "Se aplică perioadele scurte pentru toate clasele de emisii?",
        answer:
          "Da. Fiecare durată (1 zi, 10 zile, 1 lună, 2 luni, 1 an) are propriul tarif pe categorie Euronormă. Sumele diferă pe categorie.",
      },
      {
        question: "Sunt dube comerciale deductibile?",
        answer:
          "Conform planurilor, costul vignetei pentru dube profesionale poate fi integral deductibil ca cheltuială de afaceri.",
      },
    ],
  },
  foreign: {
    title: "Au mașinile străine nevoie de vigneta Belgia?",
    intro:
      "Da, conform planurilor actuale. Autoturismele înmatriculate în străinătate vor avea nevoie de vigneta Belgia de la 1 mai 2027 când folosesc drumurile belgiene acoperite. Sistemul planificat nu distinge între numere de înmatriculare belgiene și străine — o mașină înmatriculată în Olanda, Franța, Germania sau altă țară ar trebui să necesite aceeași vignetă digitală ca un vehicul belgian. Regulile finale pot încă suferi modificări până când sistemul este aprobat și lansat oficial.",
    sections: [
      {
        id: "eu-rules",
        title: "Tratament egal",
        paragraphs: [
          "Și șoferii belgieni plătesc — regulile UE împiedică taxarea exclusivă a străinilor. Numărul dvs. străin este acoperit de același sistem planificat.",
          "Se estimează că aproximativ 30 de milioane de autoturisme străine trec anual prin Belgia.",
        ],
      },
      {
        id: "digital",
        title: "Sistem digital",
        paragraphs: [
          "Nu există vignetă fizică de cumpărat sau afișat. Sistemul este planificat să folosească recunoașterea automată a numerelor de înmatriculare (ANPR). Cumpărați înainte de a conduce pe drumurile acoperite.",
        ],
      },
      {
        id: "history",
        title: "Context istoric",
        paragraphs: [
          "Belgia a încercat o vignetă în 2007, dar a renunțat după protestele olandeze. Miniștrii olandezi și-au exprimat din nou îngrijorarea — și încă nu a fost anunțat un regim special la frontieră pentru țările vecine în planurile actuale.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Olanda",
        tips: [
          "Da — autoturismele înmatriculate în Olanda ar trebui să aibă nevoie de vigneta Belgia de la 1 mai 2027 pe drumurile belgiene acoperite.",
          "Aceasta afectează rute comune precum Olanda → Anvers, Olanda → Bruxelles și tranzit Olanda → Luxemburg/Franța.",
          "În prezent nu a fost anunțată nicio scutire pentru regiunile de frontieră olandeze.",
        ],
      },
      {
        id: "germany",
        country: "Germania",
        tips: [
          "Da — autoturismele înmatriculate în Germania ar trebui să aibă nevoie de vigneta Belgia de la 1 mai 2027 pe drumurile belgiene acoperite.",
          "Aceasta include rute de tranzit comune precum Aachen → Liège și Germania → Franța prin Belgia.",
          "Opțiunile pe termen scurt (1–10 zile) din planuri pot fi potrivite pentru traficul de tranzit.",
        ],
      },
      {
        id: "france",
        country: "Franța",
        tips: [
          "Da — autoturismele înmatriculate în Franța ar trebui să aibă nevoie de vigneta Belgia de la 1 mai 2027 pe drumurile belgiene acoperite.",
          "Acest lucru este relevant în special pentru călătorii din nordul Franței spre Belgia și rutele de tranzit Franța → Olanda/Germania.",
          "Drumurile acoperite includ autostrăzi și drumuri principale regionale planificate — nu doar tranzitul pe distanțe lungi.",
        ],
      },
    ],
    faqs: [
      {
        question: "Am nevoie de vignetă dacă doar tranzitez?",
        answer:
          "Da — conform planurilor actuale, de la 1 mai 2027 utilizarea drumurilor principale belgiene acoperite necesită o vignetă, indiferent de destinație. Regulile finale pot încă suferi modificări înainte de lansare.",
      },
      {
        question: "Plătesc mașinile străine la fel ca cele belgiene?",
        answer:
          "Da. Sistemul planificat aplică aceeași vignetă digitală numerelor belgiene și străine. Regulile UE privind tratamentul egal explică de ce străinii nu pot fi taxați exclusiv.",
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
    title: "Când pot cumpăra o vignetă belgiană?",
    intro:
      "Conform planurilor actuale, vânzarea online este așteptată de la 1 martie 2027. Vigneta rutieră ar deveni obligatorie de la 1 mai 2027. Condițiile finale și portalul oficial de vânzare se pot schimba.",
    independenceNotice:
      "BelgiumVignette.be este un site de informații independent și nu este nici un site oficial al guvernului belgian, nici un vânzător autorizat al vinietei rutiere.",
    sections: [
      {
        id: "when",
        title: "Când începe vânzarea?",
        paragraphs: [
          "Guvernul flamand indică faptul că veți putea cumpăra vigneta online de la 1 martie 2027, pe site-ul oficial sau printr-un partener autorizat.",
          "Astăzi nu există un portal de vânzare: nu puteți rezerva sau plăti încă. Site-urile care oferă deja acest lucru nu sunt canalul oficial.",
        ],
      },
      {
        id: "expected",
        title: "Ce se așteaptă",
        paragraphs: [
          "Vigneta va fi digitală și legată de numărul de înmatriculare — fără autocolant pe parbriz.",
          "Conform planurilor alegeți o durată de 1 zi, 10 zile, 1 lună, 2 luni sau 1 an.",
        ],
      },
    ],
    statusBadge: "Vânzare așteptată de la 1 martie 2027",
    officialSourceLabel: "Sursă oficială",
    steps: [
      {
        title: "Așteptați vânzarea autorizată",
        description:
          "Achiziție online așteptată de la 1 martie 2027 pe site-ul oficial sau printr-un partener autorizat, conform guvernului flamand.",
      },
      { title: "Înregistrați numărul de înmatriculare", description: "Sistem digital — fără autocolant pe parbriz." },
      { title: "Alegeți durata", description: "Zi, 10 zile, lună, 2 luni sau anual." },
      { title: "Conduceți cu vignetă validă", description: "Camerele verifică automat de la 1 mai 2027." },
    ],
    faqs: [
      {
        question: "Pot precomanda acum?",
        answer:
          "Nu. Conform planurilor actuale, vânzarea online începe la 1 martie 2027. Înscrieți-vă pentru actualizări ca să primiți o notificare când vânzarea autorizată devine disponibilă.",
      },
      {
        question: "Când devine vigneta obligatorie?",
        answer:
          "Conform planurilor, de la 1 mai 2027 pe autostrăzile și drumurile regionale belgiene. Este prevăzută o perioadă de toleranță de la 1 mai până la 1 iulie 2027.",
      },
    ],
  },
  tolls: roTolls,
  privacy: {
    title: "Politica de confidențialitate",
    intro: "BelgiumVignette.be respectă confidențialitatea dvs. Iată cum gestionăm datele dvs.",
    sections: [
      {
        id: "controller",
        title: "Operator de date",
        paragraphs: [
          "BelgiumVignette.be este un site de informații independent despre vigneta rutieră belgiană planificată. Nu suntem afiliați cu guvernul belgian, Flandra, Valonia sau Bruxelles și nu vindem viniete.",
          "Site-ul este administrat în legătură cu Tolls.be (informații independente despre taxele de drum din Belgia). Contact: info@tolls.be.",
        ],
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
          "Păstrare: până când ștergeți stocarea sau actualizăm această politică (versiunea 2026-08-04).",
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
    lastUpdated: "4 August 2026",
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
    emailPlaceholder: "Adresă de e-mail",
    consentLabel: "Sunt de acord să primesc actualizări și am citit",
    success: "Mulțumim! Sunteți abonat.",
    error: "Ceva nu a funcționat. Vă rugăm să încercați din nou.",
    privacyLink: "politica de confidențialitate.",
    independenceNote:
      "BelgiumVignette.be este un serviciu de informare independent și nu este afiliat cu guvernul belgian. În prezent nu vindem vinieta rutieră belgiană.",
    sticky: {
      teaser: "Vinieta nu este încă de vânzare — primiți linkul de cumpărare",
      cta: "Înscrieți-vă →",
      closeLabel: "Închide",
    },
    intents: {
      home: {
        title:
          "Primiți linkul de cumpărare imediat ce vinieta belgiană este disponibilă",
        description:
          "Vânzarea este planificată de la 1 martie 2027. Lăsați adresa de e-mail și primiți o singură notificare când vânzarea autorizată devine disponibilă.",
        benefits: [
          "Link către un canal de cumpărare autorizat imediat ce este cunoscut",
          "Actualizări când se schimbă prețurile sau regulile",
          "Fără e-mailuri inutile",
        ],
        submit: "Trimiteți-mi linkul de cumpărare",
      },
      prices: {
        title: "Primiți o notificare când prețurile finale ale vinietei sunt confirmate",
        description:
          "Tarifele actuale au fost publicate, dar introducerea trebuie încă aprobată definitiv. Urmărim informațiile oficiale pentru dvs.",
        benefitsIntro: "Primiți un e-mail când:",
        benefits: [
          "prețurile finale sunt confirmate;",
          "începe vânzarea autorizată;",
          "un link către un canal de cumpărare recunoscut este disponibil.",
        ],
        submit: "Țineți-mă la curent",
      },
      buy: {
        title: "Anunțați-mă când vinieta belgiană este pusă în vânzare",
        description:
          "Vânzarea autorizată nu a început încă. Conform planului actual, puteți cumpăra vinieta belgiană de la 1 martie 2027 pe site-ul oficial sau printr-un partener autorizat. Lăsați adresa de e-mail și primiți o notificare când vânzarea autorizată devine disponibilă.",
        benefits: [],
        submit: "Trimiteți-mi linkul de cumpărare",
      },
      foreign: {
        title:
          "Anunțați-mă când mașinile străine își pot înregistra vinieta",
        description:
          "Șoferii străini vor avea, conform planurilor, nevoie și ei de o vinietă belgiană. Primiți o notificare când înregistrarea și cumpărarea printr-un canal recunoscut sunt posibile.",
        benefits: [
          "Începutul vânzării autorizate",
          "Reguli pentru numere de înmatriculare străine",
          "Link către un canal de cumpărare recunoscut",
        ],
        submit: "Țineți-mă la curent",
      },
      news: {
        title: "Primiți actualizări importante despre vinieta belgiană",
        description:
          "Alerte scurte și relevante când există știri despre prețuri, reguli sau începutul vânzării.",
        benefits: [
          "Actualizări importante despre vinietă",
          "Fără spam zilnic",
          "Link de cumpărare imediat ce un canal recunoscut este disponibil",
        ],
        submit: "Primiți actualizări",
      },
      default: {
        title:
          "Primiți linkul de cumpărare imediat ce vinieta belgiană este disponibilă",
        description:
          "Vânzarea este planificată să înceapă pe 1 martie 2027. Vă trimitem o singură notificare când vânzarea autorizată devine disponibilă.",
        benefits: [
          "Link către un canal de cumpărare autorizat",
          "Actualizări despre prețuri și reguli",
          "Fără e-mailuri inutile",
        ],
        submit: "Trimiteți-mi linkul de cumpărare",
      },
    },
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
    {
      title: "Guvernul flamand — Vignetă rutieră de la 1 mai 2027",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Pagină oficială despre obligație, tarife și cumpărare de la 1 martie 2027",
    },
    {
      title: "Viapass — taxă pe kilometru pentru camioane",
      url: "https://www.viapass.be",
      description: "Sistem existent pentru vehicule peste 3,5 tone (nu vigneta auto)",
    },
    {
      title: "Comisia Europeană — tarifare rutieră",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "Cadrul UE pentru taxe de drum și nediscriminare",
    },
  ],
};

export default dictionary;
