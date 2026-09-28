import type { Dictionary } from "../types";

export const roTolls: Dictionary["tolls"] = {
  title: "Taxe în Belgia: autostrăzi cu plată și vinieta 2027",
  intro:
    "Mergeți cu mașina în Belgia? Aflați dacă autostrăzile belgiene sunt cu plată, cum va funcționa vinieta rutieră planificată pentru 2027 și ce tarife se pot aplica vehiculului dvs.",
  blocks: [
    {
      type: "section",
      id: "autoroutes-payantes",
      title: "Sunt autostrăzile cu plată în Belgia?",
      paragraphs: [
        "Pentru autoturisme, Belgia nu folosește în prezent un sistem general de vinietă de autostradă ca Austria sau Elveția.",
        "Această situație ar urma să se schimbe în 2027.",
        "Belgia plănuiește introducerea unei viniete rutiere digitale de la 1 mai 2027 pentru vehiculele care folosesc autostrăzile și drumurile regionale acoperite de sistem. Se va aplica atât vehiculelor belgiene, cât și celor înmatriculate în străinătate.",
        "Dacă intenționați să conduceți în Belgia după această dată, consultați ghidul nostru complet despre [[home|vinieta Belgia 2027]].",
      ],
    },
    {
      type: "summary",
      title: "Pe scurt",
      items: [
        {
          label: "În prezent",
          value: "Nu există o vinietă rutieră generală pentru autoturisme.",
        },
        {
          label: "De la 1 mai 2027",
          value: "Este planificată o vinietă digitală.",
        },
        {
          label: "Vehicule vizate",
          value: "Vehicule motorizate cu cel puțin patru roți până la 3,5 tone.",
        },
        {
          label: "Mașini străine",
          value: "De asemenea vizate.",
        },
        {
          label: "Motociclete",
          value: "Nu sunt vizate de această obligație conform planurilor actuale.",
        },
        {
          label: "Cumpărare",
          value: "Online, cu deschiderea vânzărilor așteptată de la 1 martie 2027.",
        },
      ],
    },
    {
      type: "section",
      id: "peage-ou-vignette",
      title: "Taxă sau vinietă: cum va funcționa sistemul belgian?",
      paragraphs: [
        "Sistemul planificat în Belgia nu este o taxă clasică unde plătiți la fiecare barieră.",
        "Este o vinietă rutieră care oferă acces la drumurile acoperite pe o perioadă determinată.",
        "Spre deosebire de un autocolant pe parbriz, vinieta belgiană va fi digitală și legată de numărul de înmatriculare al vehiculului.",
        "Nu veți avea nevoie de un autocolant fizic. La cumpărare, numărul de înmatriculare trebuie introdus corect.",
        "Pentru funcționarea noului sistem, consultați ghidul nostru despre [[home|vinieta rutieră în Belgia]].",
      ],
    },
    {
      type: "section",
      id: "routes-concernees",
      title: "Ce drumuri vor fi cu plată în Belgia în 2027?",
      paragraphs: [
        "Vinieta este planificată pentru utilizarea autostrăzilor belgiene și a drumurilor regionale acoperite.",
        "Șoferii care circulă doar pe drumuri locale nu ar trebui să aibă nevoie de vinietă.",
        "Asta înseamnă că un șofer care traversează Belgia pe autostradă — de exemplu spre Franța, Țările de Jos, Germania sau Luxemburg — va trebui să țină cont de noua obligație odată cu intrarea ei în vigoare.",
        "Detaliile practice și rețeaua rutieră exactă pot fi încă precizate înainte de lansarea definitivă.",
      ],
    },
    {
      type: "pricing",
      id: "prix",
      title: "Care va fi prețul taxelor în Belgia?",
      paragraphs: [
        "Nu ar trebui să existe un preț unic pe traseu. Șoferul cumpără o vinietă valabilă pe o perioadă aleasă.",
        "Tarifele publicate în prezent depind de norma Euro a vehiculului și de durata aleasă.",
      ],
      durationHeader: "Durată",
      priceHeader: "Tarif",
      tables: [
        {
          title: "Tarife planificate pentru vehicule Euro 4 și peste",
          rows: [
            { label: "1 zi", value: "€9" },
            { label: "10 zile", value: "€12" },
            { label: "1 lună", value: "€19" },
            { label: "2 luni", value: "€30" },
            { label: "1 an", value: "€100" },
          ],
        },
        {
          title: "Tarife planificate pentru vehicule Euro 0 până la Euro 3",
          rows: [
            { label: "1 zi", value: "€11.25" },
            { label: "10 zile", value: "€15" },
            { label: "1 lună", value: "€23.75" },
            { label: "2 luni", value: "€37.50" },
            { label: "1 an", value: "€125" },
          ],
        },
        {
          title: "Tarife planificate pentru vehicule fără emisii",
          rows: [
            { label: "1 zi", value: "€8.10" },
            { label: "10 zile", value: "€10.80" },
            { label: "1 lună", value: "€17.10" },
            { label: "2 luni", value: "€27" },
            { label: "1 an", value: "€90" },
          ],
        },
      ],
      linkParagraph:
        "Găsiți sumele, categoriile de vehicule și cele mai recente actualizări pe pagina noastră [[prices|prețuri și tarife vigneta Belgia]].",
      notice:
        "Atenție: sistemul trebuie încă să treacă prin ultimele etape ale procesului legislativ. Regulile pot evolua înainte de intrarea în vigoare.",
    },
    {
      type: "section",
      id: "traverser",
      title: "Trebuie să plătiți pentru a traversa Belgia cu mașina?",
      paragraphs: [
        "De la 1 mai 2027, dacă sistemul intră în vigoare conform planului, șoferii care folosesc autostrăzile sau drumurile regionale acoperite vor avea nevoie de o vinietă valabilă.",
        "Asta îi privește și pe șoferii care doar traversează Belgia pentru a ajunge în altă țară.",
        "O mașină înmatriculată în Franța, Țările de Jos sau Germania nu este automat scutită doar pentru că șoferul nu locuiește în Belgia.",
        "Vinieta este planificată pentru vehiculele vizate care folosesc rețeaua rutieră, indiferent de țara de înmatriculare.",
        "Consultați ghidul nostru pentru [[foreign|șoferii străini în Belgia]] pentru regulile aplicabile vehiculelor străine.",
      ],
    },
    {
      type: "section",
      id: "voitures-francaises",
      title: "Vor trebui mașinile franceze să plătească pe autostrăzile din Belgia?",
      paragraphs: [
        "Mașinile franceze vor urma aceleași reguli de vinietă ca celelalte mașini străine pe drumurile acoperite.",
        "Un șofer francez pe o autostradă belgiană de la 1 mai 2027 va trebui, conform planurilor actuale, să aibă o vinietă valabilă.",
        "Pentru un sejur scurt sau un simplu tranzit, nu este necesar să cumpărați automat o vinietă anuală. Sunt planificate și durate de 1 zi, 10 zile, 1 lună și 2 luni.",
      ],
    },
    {
      type: "section",
      id: "voitures-etrangeres",
      title: "Vor trebui mașinile străine să plătească?",
      paragraphs: [
        "Da. Planul prevede explicit că vinieta se aplică și utilizatorilor străini ai autostrăzilor și drumurilor regionale acoperite.",
        "Asta privește în special vehiculele din:",
      ],
      list: [
        "Franța",
        "Țările de Jos",
        "Germania",
        "Luxemburg",
        "Regatul Unit",
        "alte țări europene sau non-europene",
      ],
    },
    {
      type: "section",
      id: "motos",
      title: "Vor trebui motocicletele să plătească o taxă în Belgia?",
      paragraphs: [
        "Vinieta planificată vizează vehiculele motorizate cu cel puțin patru roți și o masă maximă tehnic admisibilă de cel mult 3,5 tone.",
        "Motocicletele nu sunt deci vizate de această obligație conform planurilor actuale.",
        "Alte categorii de vehicule pot urma reguli diferite. Consultați lista completă a [[exemptions|scutirilor de la vigneta belgiană]] înainte de călătorie.",
      ],
    },
    {
      type: "section",
      id: "camping-cars",
      title: "Autorulote și dube: este nevoie de vinietă?",
      paragraphs: [
        "Autorulotele și unele dube până la 3,5 tone intră în domeniul sistemului planificat când folosesc autostrăzile și drumurile regionale acoperite.",
        "Criteriile importante sunt în special categoria vehiculului și masa maximă tehnic admisibilă.",
        "Vehiculele de peste 3,5 tone pot fi vizate de un alt sistem de tarifare rutieră.",
      ],
    },
    {
      type: "section",
      id: "poids-lourds",
      title: "Dar camioanele de peste 3,5 tone?",
      paragraphs: [
        "Noua vinietă destinată vehiculelor până la 3,5 tone nu înlocuiește sistemul belgian existent pentru vehiculele grele de marfă.",
        "Belgia are deja o taxă pe kilometru pentru camioane, gestionată în cadrul sistemului Viapass.",
        "Trebuie deci distins:",
      ],
      list: [
        "Mașini, dube ușoare și unele autorulote până la 3,5 t → vinietă rutieră planificată din 2027.",
        "Vehicule grele de marfă vizate de peste 3,5 t → sistemul existent de tarifare pe kilometru.",
      ],
    },
    {
      type: "section",
      id: "acheter",
      title: "Unde se cumpără vinieta pentru autostrăzile belgiene?",
      paragraphs: [
        "Vinieta nu este încă la vânzare.",
        "Conform informațiilor oficiale publicate în prezent, cumpărarea ar trebui să fie posibilă de la 1 martie 2027, înainte de intrarea în vigoare planificată la 1 mai.",
        "Vinieta va putea fi cumpărată online prin site-ul oficial sau de la o organizație parteneră recunoscută.",
        "Evitați să cumpărați o pretinsă vinietă belgiană 2027 de pe un site neverificat înainte de deschiderea oficială a vânzărilor.",
        "Urmărim deschiderea vânzărilor și vom publica linkul când va fi disponibil. Consultați [[buy|unde se cumpără vigneta Belgia]] pentru cele mai recente informații.",
      ],
    },
    {
      type: "section",
      id: "controles",
      title: "Cum va fi verificată vinieta?",
      paragraphs: [
        "Vinieta va fi integral digitală și legată de numărul de înmatriculare al vehiculului.",
        "Nu va fi deci necesar să lipiți un autocolant fizic pe parbriz.",
        "Este deosebit de important să introduceți corect numărul de înmatriculare la cumpărare. Circulația pe un drum cu vinietă fără vinietă valabilă poate atrage o sancțiune odată ce sistemul de control este pe deplin aplicat.",
        "Consultați pagina noastră despre [[fines|amenzile legate de vigneta Belgia]] pentru cele mai recente reguli de control și sancțiune.",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "Belgia 2027: taxă, vinietă sau autostrăzi gratuite?",
      paragraphs: [
        "Schimbarea poate crea confuzie, deoarece termeni precum taxă Belgia, autostradă cu plată Belgia și vinietă Belgia sunt adesea folosiți pentru aceeași schimbare.",
        "În practică, sistemul planificat nu este o taxă tradițională pe distanță pentru autoturisme.",
        "Este o vinietă digitală valabilă pe o perioadă aleasă.",
        "Puteți alege durata care corespunde călătoriei dvs.: o zi pentru o trecere foarte scurtă, 10 zile pentru un sejur, una sau două luni pentru o perioadă mai lungă, sau o vinietă anuală pentru utilizare regulată.",
      ],
    },
  ],
  faqTitle: "Întrebări frecvente despre taxele din Belgia",
  faqs: [
    {
      question: "Există taxe în Belgia?",
      answer:
        "Pentru autoturisme, nu există în prezent o vinietă rutieră generală comparabilă cu sistemele din unele alte țări europene. O vinietă digitală este însă planificată de la 1 mai 2027 pentru utilizarea autostrăzilor și drumurilor regionale acoperite.",
    },
    {
      question: "Vor fi autostrăzile belgiene cu plată în 2027?",
      answer:
        "Utilizarea autostrăzilor și drumurilor regionale acoperite va necesita o vinietă pentru vehiculele vizate de noul sistem, dacă acesta intră în vigoare conform planului la 1 mai 2027.",
    },
    {
      question: "Cât va costa autostrada în Belgia?",
      answer:
        "Prețul nu se calculează pe kilometru pentru mașinile vizate. Pentru un vehicul Euro 4 sau mai mare, tarifele publicate în prezent variază de la €9 pentru 1 zi la €100 pentru 1 an. Vehiculele mai vechi și cele fără emisii au tarife diferite.",
    },
    {
      question: "Aveți nevoie de vinietă pentru a merge în Belgia?",
      answer:
        "Depinde de dată și de drumurile folosite. Vinieta este planificată de la 1 mai 2027 pentru vehiculele vizate pe autostrăzi și drumuri regionale. Dacă circulați doar pe drumuri locale, vinieta nu ar trebui să fie necesară.",
    },
    {
      question: "Unde se cumpără vinieta de autostradă Belgia?",
      answer:
        "Vânzările nu sunt încă deschise. Ar trebui să înceapă la 1 martie 2027 prin site-ul oficial și organizații partenere recunoscute. Consultați pagina noastră Cum se cumpără pentru actualizări despre deschiderea vânzărilor.",
    },
    {
      question: "Trebuie motocicletele să plătească pe autostrăzile din Belgia?",
      answer:
        "Vinieta planificată se aplică vehiculelor motorizate cu cel puțin patru roți până la 3,5 tone. Motocicletele nu sunt deci vizate de această obligație conform planurilor actuale.",
    },
  ],
  closing: {
    title: "Pregătiți-vă călătoria în Belgia",
    paragraphs: [
      "Sistemul belgian ar trebui să intre în vigoare la 1 mai 2027, dar mai multe detalii pot încă evolua înainte de lansarea definitivă.",
      "Înainte de plecare, verificați:",
    ],
    checklist: [
      "dacă vehiculul dvs. este vizat;",
      "ce drumuri veți folosi;",
      "durata de vinietă de care aveți nevoie;",
      "tariful aplicabil vehiculului dvs.;",
      "că cumpărați vinieta pe un canal recunoscut.",
    ],
    links: [
      { href: "home", label: "Vinietă Belgia 2027" },
      { href: "prices", label: "Tarifele vinietei" },
      { href: "buy", label: "Cumpără vigneta belgiană" },
    ],
  },
};
