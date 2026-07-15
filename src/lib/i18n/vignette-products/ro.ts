import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Vignetă zilnică Belgia 2027",
    intro:
      "Vigneta zilnică este destinată călătoriilor scurte pe drumurile principale din Belgia — de exemplu o excursie de o zi, tranzit sau un weekend. Tarifele de mai jos se bazează pe planurile publicate (martie 2026) și pot fi modificate înainte de introducerea din 1 mai 2027.",
    metaTitle: "Vignetă zilnică Belgia 2027 — €9 pe zi (preț concept)",
    metaDescription:
      "Vignetă zilnică planificată pentru Belgia de la €9 pe zi. Pentru călătorii scurte pe autostrăzi și drumuri regionale principale. Prețuri concept conform planurilor din martie 2026 — tarifele finale pot fi modificate.",
    navLabel: "Vignetă zilnică",
    sections: [
      {
        id: "what-is-daily",
        title: "Ce este vigneta zilnică?",
        paragraphs: [
          "Conform planurilor, vigneta zilnică oferă 24 de ore de acces la rețeaua de vignete din Belgia: autostrăzi, inele de autostrăzi și drumuri regionale unde se aplică 70 km/h sau mai mult.",
          "Sistemul va fi digital și legat de numărul de înmatriculare — nu va exista autocolant fizic pe parbriz.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Pentru cine este vigneta zilnică?",
        paragraphs: [
          "Vigneta zilnică se potrivește utilizatorilor ocazionali: turiști, șoferi în tranzit, o singură călătorie de afaceri sau o zi de cumpărături peste graniță.",
          "Dacă circulați mai des prin Belgia, o vignetă de 10 zile, lunară sau anuală este planificată să fie mai rentabilă.",
        ],
      },
      {
        id: "concept-prices",
        title: "Prețuri concept — nu tarife finale",
        paragraphs: [
          "Toate sumele de pe această pagină se bazează pe anunțurile din martie 2026. Tarifele finale vor fi stabilite doar după aprobarea de către regiuni și Comisia Europeană.",
          "Verificați întotdeauna sursele oficiale înainte de călătoria din mai 2027.",
        ],
      },
    ],
    priceTableTitle: "Tarif zilnic planificat",
    priceTable: [{ label: "1 zi", value: "€9" }],
    compareTableTitle: "Alte perioade scurte (comparație)",
    compareTable: [
      { label: "10 zile", value: "€12" },
      { label: "1 lună", value: "€19" },
      { label: "2 luni", value: "€30" },
    ],
    relatedPagesTitle: "Alte tipuri de vignetă",
    faqs: [
      {
        question: "Vigneta zilnică acoperă o zi calendaristică?",
        answer:
          "Conform planurilor, cumpărați o vignetă pentru o perioadă aleasă de 24 de ore sau o zi calendaristică — regulile exacte vor fi anunțate la lansarea sistemului de vânzare.",
      },
      {
        question: "Șoferii străini trebuie și ei să cumpere vignetă zilnică?",
        answer:
          "Da. Regulile UE impun tratament egal. Și numerele de înmatriculare străine trebuie, conform planurilor, să aibă o vignetă validă pe drumurile principale din Belgia.",
      },
      {
        question: "Este €9 deja definitiv?",
        answer:
          "Nu. €9 este tariful concept planificat din martie 2026. Prețurile finale pot fi ajustate.",
      },
    ],
  },
  monthlyVignette: {
    title: "Vignetă lunară Belgia 2027",
    intro:
      "Vigneta lunară este planificată pentru șoferii care folosesc drumurile principale din Belgia timp de câteva săptămâni — de exemplu muncă temporară, vacanță sau un sejur mai lung. Tarifele sunt prețuri concept conform planurilor din martie 2026.",
    metaTitle: "Vignetă lunară Belgia 2027 — de la €19 pe lună (concept)",
    metaDescription:
      "Vignetă lunară planificată Belgia de la €19 pe lună, 2 luni €30. Prețuri concept pentru autostrăzi și drumuri regionale principale din 1 mai 2027.",
    navLabel: "Vignetă lunară",
    sections: [
      {
        id: "what-is-monthly",
        title: "Ce este vigneta lunară?",
        paragraphs: [
          "Conform planurilor, vigneta lunară oferă acces la rețeaua de vignete din Belgia timp de aproximativ o lună calendaristică.",
          "Este planificat și un tarif de două luni (€30) pentru sejururi puțin mai lungi, fără a cumpăra imediat o vignetă anuală.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Cine beneficiază de vigneta lunară?",
        paragraphs: [
          "Navetiștii care lucrează temporar în Belgia, expații în misiune scurtă sau turiștii care stau în țară o lună pot beneficia de o vignetă lunară sau de două luni.",
          "Pentru utilizare ocazională, vigneta zilnică sau de 10 zile este mai ieftină; pentru utilizare permanentă, vigneta anuală este mai economică.",
        ],
      },
      {
        id: "concept-prices",
        title: "Prețuri concept",
        paragraphs: [
          "Sumele de mai jos sunt tarife planificate, nu legislație finală. Pot fi modificate înainte de startul din mai 2027.",
        ],
      },
    ],
    priceTableTitle: "Tarife lunare planificate",
    priceTable: [
      { label: "1 lună", value: "€19" },
      { label: "2 luni", value: "€30" },
    ],
    compareTableTitle: "Alte durate (comparație)",
    compareTable: [
      { label: "1 zi", value: "€9" },
      { label: "10 zile", value: "€12" },
    ],
    relatedPagesTitle: "Alte tipuri de vignetă",
    faqs: [
      {
        question: "Care este diferența între 1 lună și 2 luni?",
        answer:
          "Conform planurilor, puteți alege între vignetă lunară (€19) și vignetă de două luni (€30). Tariful de două luni este mai rentabil pe zi dacă rămâneți mai mult timp.",
      },
      {
        question: "Există tarif separat pe normă de emisii pentru vignetele scurte?",
        answer:
          "Pentru perioade scurte (zi, lună), sunt planificate sume fixe conform planurilor actuale. Vigneta anuală depinde însă de norma de emisii Euro a vehiculului.",
      },
      {
        question: "Sunt aceste prețuri finale?",
        answer:
          "Nu. Sunt prețuri concept bazate pe planurile din martie 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Vignetă anuală Belgia 2027",
    intro:
      "Vigneta anuală este destinată utilizatorilor regulati ai drumurilor principale din Belgia. Prețul depinde de norma de emisii a vehiculului. Tarifele de mai jos sunt prețuri concept conform planurilor din martie 2026.",
    metaTitle: "Vignetă anuală Belgia 2027 — €90–€125 pe an (concept)",
    metaDescription:
      "Vignetă anuală planificată Belgia: €100 pentru Euro 4+, €90 electric, €125 mașini vechi. Prețuri concept pe normă de emisii din 1 mai 2027.",
    navLabel: "Vignetă anuală",
    sections: [
      {
        id: "what-is-annual",
        title: "Ce este vigneta anuală?",
        paragraphs: [
          "Conform planurilor, vigneta anuală oferă 12 luni de acces la autostrăzi, inele de autostrăzi și drumuri regionale principale din Belgia.",
          "În Flandra, peste 97 % din autoturisme sunt cel puțin Euro 4 — pentru acestea este planificat €100 pe an.",
        ],
      },
      {
        id: "emission-bands",
        title: "Prețuri pe normă de emisii",
        paragraphs: [
          "Spre deosebire de vignetele scurte, tariful anual este planificat să varieze în funcție de norma de emisii Euro a vehiculului.",
          "Vehiculele complet electrice și pe hidrogen beneficiază de cel mai mic tarif (€90). Vehiculele mai vechi până la Euro 3 plătesc suma cea mai mare (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Prețuri concept",
        paragraphs: [
          "Aceste tarife se bazează pe anunțurile din martie 2026 și pot fi ajustate. Sumele finale vor urma după aprobarea de către regiuni și Europa.",
        ],
      },
    ],
    priceTableTitle: "Vignetă anuală",
    priceTable: [
      { label: "Euro 4 și superior", value: "€100 / an", note: "97 %+ din mașinile flamande" },
      { label: "Electric / hidrogen", value: "€90 / an" },
      { label: "Mașini vechi (până la Euro 3)", value: "€125 / an" },
    ],
    compareTableTitle: "Perioade scurte (comparație)",
    compareTable: [
      { label: "1 zi", value: "€9" },
      { label: "10 zile", value: "€12" },
      { label: "1 lună", value: "€19" },
      { label: "2 luni", value: "€30" },
    ],
    relatedPagesTitle: "Alte tipuri de vignetă",
    faqs: [
      {
        question: "Trebuie și belgienii să cumpere vignetă anuală?",
        answer:
          "Da. Regulile UE interzic o vignetă doar pentru străini. Belgienii plătesc și ei, dar Flandra planifică compensații prin reforma taxei auto.",
      },
      {
        question: "Se aplică €100 tuturor mașinilor?",
        answer:
          "Nu. Doar vehicule cu cel puțin Euro 4. Mașinile electrice plătesc €90 conform planurilor; mașinile vechi până la Euro 3 plătesc €125.",
      },
      {
        question: "Sunt aceste prețuri finale?",
        answer:
          "Nu. Sunt tarife concept planificate care pot fi modificate.",
      },
    ],
  },
  electricVignette: {
    title: "Vignetă electrică Belgia 2027",
    intro:
      "Proprietarii de vehicule complet electrice și pe hidrogen plătesc conform planurilor cel mai mic tarif anual: €90. Acesta este un preț concept bazat pe anunțurile din martie 2026 — nu un tarif final.",
    metaTitle: "Vignetă electrică Belgia 2027 — €90 pe an (concept)",
    metaDescription:
      "Vignetă planificată pentru mașini electrice în Belgia: €90 pe an, cel mai mic tarif anual. Preț concept conform planurilor din martie 2026. Comparație cu alte norme de emisii.",
    navLabel: "Vignetă electrică",
    sections: [
      {
        id: "ev-rate",
        title: "Cel mai mic tarif anual pentru EV",
        paragraphs: [
          "Vehiculele complet electrice și pe hidrogen beneficiază conform planurilor de cea mai mică vignetă anuală: €90 pe an.",
          "Aceasta este cu €10 mai puțin decât majoritatea mașinilor Euro 4+ (€100) și cu €35 mai puțin decât vehiculele vechi (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "De ce plătesc totuși șoferii de EV?",
        paragraphs: [
          "Vehiculele electrice folosesc drumurile la fel ca alte mașini. Tariful mai mic recompensează emisiile reduse, dar vigneta rămâne conform planurilor obligatorie.",
          "Ministrul flamand Ben Weyts a subliniat că €90 este semnificativ mai puțin decât alte categorii — dar nu zero.",
        ],
      },
      {
        id: "concept-prices",
        title: "Prețuri concept",
        paragraphs: [
          "€90 este un tarif concept planificat. Prețurile finale și eventualele modificări vor fi anunțate înainte de startul din mai 2027.",
        ],
      },
    ],
    priceTableTitle: "Electric / hidrogen — vignetă anuală",
    priceTable: [{ label: "Electric / hidrogen", value: "€90 / an" }],
    compareTableTitle: "Alte tarife anuale (comparație)",
    compareTable: [
      { label: "Euro 4 și superior", value: "€100 / an", note: "97 %+ din mașinile flamande" },
      { label: "Mașini vechi (până la Euro 3)", value: "€125 / an" },
    ],
    relatedPagesTitle: "Alte tipuri de vignetă",
    faqs: [
      {
        question: "Se aplică €90 și pentru hibride plug-in?",
        answer:
          "Nu. Conform planurilor, tariful EV se aplică vehiculelor complet electrice și pe hidrogen. Hibridele plug-in intră sub norma de emisii a motorului cu combustie.",
      },
      {
        question: "Există reducere pentru EV la vignetele scurte?",
        answer:
          "Pentru vignetele zilnice, lunare și scurte sunt planificate sume fixe conform planurilor actuale, indiferent de propulsie. Tariful redus pentru EV se aplică vignetei anuale.",
      },
      {
        question: "Este €90 definitiv?",
        answer:
          "Nu. Este un preț concept bazat pe planurile din martie 2026.",
      },
    ],
  },
};

export default pages;
