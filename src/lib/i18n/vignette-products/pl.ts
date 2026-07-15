import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Dzienna winieta Belgia 2027",
    intro:
      "Dzienna winieta jest przeznaczona na krótkie przejazdy po belgijskich drogach głównych — np. wycieczkę jednodniową, tranzyt lub weekend. Poniższe stawki opierają się na opublikowanych planach (marzec 2026) i mogą ulec zmianie przed wprowadzeniem 1 maja 2027 r.",
    metaTitle: "Dzienna winieta Belgia 2027 — cena €9 za dzień (koncepcja)",
    metaDescription:
      "Planowana dzienna winieta dla Belgii od €9 za dzień. Na krótkie przejazdy autostradami i drogami regionalnymi. Ceny koncepcyjne według planów z marca 2026 — ostateczne stawki mogą się jeszcze zmienić.",
    navLabel: "Dzienna winieta",
    sections: [
      {
        id: "what-is-daily",
        title: "Czym jest dzienna winieta?",
        paragraphs: [
          "Zgodnie z planami dzienna winieta daje 24-godzinny dostęp do belgijskiej sieci winietowej: autostrad, obwodnic autostradowych i dróg regionalnych, na których obowiązuje limit 70 km/h lub więcej.",
          "System będzie cyfrowy i powiązany z numerem rejestracyjnym — na szybie nie będzie fizycznej naklejki.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Dla kogo jest dzienna winieta?",
        paragraphs: [
          "Dzienna winieta sprawdza się dla okazjonalnych użytkowników: turystów, kierowców tranzytowych, pojedynczych podróży służbowych lub zakupów za granicą.",
          "Jeśli częściej jeździsz przez Belgię, zgodnie z planami opłaca się winieta 10-dniowa, miesięczna lub roczna.",
        ],
      },
      {
        id: "concept-prices",
        title: "Ceny koncepcyjne — jeszcze nie ostateczne stawki",
        paragraphs: [
          "Wszystkie kwoty na tej stronie opierają się na ogłoszeniach z marca 2026. Ostateczne stawki zostaną ustalone dopiero po zatwierdzeniu przez regiony i Komisję Europejską.",
          "Przed podróżą w maju 2027 r. zawsze sprawdzaj oficjalne źródła.",
        ],
      },
    ],
    priceTableTitle: "Planowana stawka dzienna",
    priceTable: [{ label: "1 dzień", value: "€9" }],
    compareTableTitle: "Inne krótkie okresy (do porównania)",
    compareTable: [
      { label: "10 dni", value: "€12" },
      { label: "1 miesiąc", value: "€19" },
      { label: "2 miesiące", value: "€30" },
    ],
    relatedPagesTitle: "Inne typy winiet",
    faqs: [
      {
        question: "Czy dzienna winieta obejmuje jeden dzień kalendarzowy?",
        answer:
          "Zgodnie z planami kupujesz winietę na wybrany okres 24 godzin lub jeden dzień kalendarzowy — dokładne zasady zostaną ogłoszone przy uruchomieniu systemu sprzedaży.",
      },
      {
        question: "Czy cudzoziemcy też muszą kupić dzienną winietę?",
        answer:
          "Tak. Przepisy UE wymagają równego traktowania. Zgodnie z planami także pojazdy z zagranicznymi tablicami rejestracyjnymi muszą mieć ważną winietę na belgijskich drogach głównych.",
      },
      {
        question: "Czy €9 jest już ostateczną ceną?",
        answer:
          "Nie. €9 to planowana stawka koncepcyjna z marca 2026. Ostateczne ceny mogą jeszcze ulec zmianie.",
      },
    ],
  },
  monthlyVignette: {
    title: "Miesięczna winieta Belgia 2027",
    intro:
      "Miesięczna winieta jest planowana dla kierowców, którzy przez kilka tygodni jeżdżą po belgijskich drogach głównych — np. przy tymczasowej pracy, urlopie lub dłuższym pobycie. Stawki to ceny koncepcyjne według planów z marca 2026.",
    metaTitle: "Miesięczna winieta Belgia 2027 — od €19 miesięcznie (koncepcja)",
    metaDescription:
      "Planowana miesięczna winieta Belgia od €19 miesięcznie, 2 miesiące €30. Ceny koncepcyjne na autostrady i drogi regionalne od 1 maja 2027.",
    navLabel: "Miesięczna winieta",
    sections: [
      {
        id: "what-is-monthly",
        title: "Czym jest miesięczna winieta?",
        paragraphs: [
          "Zgodnie z planami miesięczna winieta daje dostęp do belgijskiej sieci winietowej przez około jeden miesiąc kalendarzowy.",
          "Planowana jest też stawka dwumiesięczna (€30) na nieco dłuższe pobyty bez od razu kupowania winiety rocznej.",
        ],
      },
      {
        id: "who-needs-it",
        title: "Dla kogo opłaca się miesięczna winieta?",
        paragraphs: [
          "Dojadający do pracy tymczasowo w Belgii, ekspatrianci na krótkiej misji lub urlopowicze spędzający miesiąc w kraju mogą skorzystać z winiety miesięcznej lub dwumiesięcznej.",
          "Przy okazjonalnym użytkowaniu tańsza jest winieta dzienna lub 10-dniowa; przy stałym użytkowaniu opłaca się winieta roczna.",
        ],
      },
      {
        id: "concept-prices",
        title: "Ceny koncepcyjne",
        paragraphs: [
          "Poniższe kwoty to planowane stawki, a nie ostateczne przepisy. Mogą ulec zmianie przed startem w maju 2027 r.",
        ],
      },
    ],
    priceTableTitle: "Planowane stawki miesięczne",
    priceTable: [
      { label: "1 miesiąc", value: "€19" },
      { label: "2 miesiące", value: "€30" },
    ],
    compareTableTitle: "Inne okresy ważności (do porównania)",
    compareTable: [
      { label: "1 dzień", value: "€9" },
      { label: "10 dni", value: "€12" },
    ],
    relatedPagesTitle: "Inne typy winiet",
    faqs: [
      {
        question: "Jaka jest różnica między 1 miesiącem a 2 miesiącami?",
        answer:
          "Zgodnie z planami możesz wybrać winietę miesięczną (€19) lub dwumiesięczną (€30). Stawka dwumiesięczna jest korzystniejsza w przeliczeniu na dzień, jeśli zostajesz dłużej.",
      },
      {
        question: "Czy jest osobna stawka według normy emisji dla krótkich winiet?",
        answer:
          "Dla krótkich okresów (dzień, miesiąc) zgodnie z obecnymi planami przewidziano stałe kwoty. Winieta roczna zależy natomiast od normy emisji Euro pojazdu.",
      },
      {
        question: "Czy te ceny są ostateczne?",
        answer:
          "Nie. To ceny koncepcyjne oparte na planach z marca 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Roczna winieta Belgia 2027",
    intro:
      "Roczna winieta jest przeznaczona dla regularnych użytkowników belgijskich dróg głównych. Cena zależy od normy emisji pojazdu. Poniższe stawki to ceny koncepcyjne według planów z marca 2026.",
    metaTitle: "Roczna winieta Belgia 2027 — €90–€125 rocznie (koncepcja)",
    metaDescription:
      "Planowana roczna winieta Belgia: €100 dla Euro 4+, €90 elektryczne, €125 starsze auta. Ceny koncepcyjne według normy emisji od 1 maja 2027.",
    navLabel: "Roczna winieta",
    sections: [
      {
        id: "what-is-annual",
        title: "Czym jest roczna winieta?",
        paragraphs: [
          "Zgodnie z planami roczna winieta daje 12 miesięcy dostępu do autostrad, obwodnic autostradowych i dróg regionalnych w Belgii.",
          "We Flandrii ponad 97% samochodów osobowych spełnia co najmniej normę Euro 4 — dla nich planowana jest stawka €100 rocznie.",
        ],
      },
      {
        id: "emission-bands",
        title: "Ceny według normy emisji",
        paragraphs: [
          "W przeciwieństwie do krótkich winiet, zgodnie z planami roczna stawka zależy od normy emisji Euro pojazdu.",
          "W pełni elektryczne i wodorowe pojazdy otrzymują najniższą stawkę (€90). Starsze pojazdy do Euro 3 płacą najwyższą kwotę (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Ceny koncepcyjne",
        paragraphs: [
          "Te stawki opierają się na ogłoszeniach z marca 2026 i mogą jeszcze ulec zmianie. Ostateczne kwoty zostaną podane po zatwierdzeniu przez regiony i Europę.",
        ],
      },
    ],
    priceTableTitle: "Winieta roczna",
    priceTable: [
      { label: "Euro 4 i wyżej", value: "€100 / rok", note: "97%+ flamandzkich aut" },
      { label: "Elektryczne / wodorowe", value: "€90 / rok" },
      { label: "Starsze auta (do Euro 3)", value: "€125 / rok" },
    ],
    compareTableTitle: "Krótkie okresy (do porównania)",
    compareTable: [
      { label: "1 dzień", value: "€9" },
      { label: "10 dni", value: "€12" },
      { label: "1 miesiąc", value: "€19" },
      { label: "2 miesiące", value: "€30" },
    ],
    relatedPagesTitle: "Inne typy winiet",
    faqs: [
      {
        question: "Czy Belgowie też muszą kupić roczną winietę?",
        answer:
          "Tak. Przepisy UE zabraniają winiety wyłącznie dla cudzoziemców. Belgowie też płacą, ale Flandria planuje rekompensatę poprzez reformę podatku drogowego.",
      },
      {
        question: "Czy €100 dotyczy wszystkich aut?",
        answer:
          "Nie. Tylko pojazdy z co najmniej Euro 4. Zgodnie z planami auta elektryczne płacą €90; starsze auta do Euro 3 — €125.",
      },
      {
        question: "Czy to ostateczne ceny?",
        answer:
          "Nie. To planowane stawki koncepcyjne, które mogą jeszcze ulec zmianie.",
      },
    ],
  },
  electricVignette: {
    title: "Winieta elektryczna Belgia 2027",
    intro:
      "Właściciele w pełni elektrycznych i wodorowych pojazdów zgodnie z planami płacą najniższą roczną stawkę: €90. To cena koncepcyjna oparta na ogłoszeniach z marca 2026 — nie ostateczna stawka.",
    metaTitle: "Winieta elektryczna Belgia 2027 — €90 rocznie (koncepcja)",
    metaDescription:
      "Planowana winieta dla aut elektrycznych w Belgii: €90 rocznie, najniższa roczna stawka. Cena koncepcyjna według planów z marca 2026. Porównaj z innymi normami emisji.",
    navLabel: "Winieta elektryczna",
    sections: [
      {
        id: "ev-rate",
        title: "Najniższa roczna stawka dla EV",
        paragraphs: [
          "W pełni elektryczne i wodorowe pojazdy zgodnie z planami otrzymują najniższą roczną winietę: €90 rocznie.",
          "To €10 mniej niż większość aut Euro 4+ (€100) i €35 mniej niż starsze pojazdy (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "Dlaczego kierowcy EV też płacą?",
        paragraphs: [
          "Pojazdy elektryczne obciążają drogi tak samo jak inne auta. Niższa stawka nagradza mniejszą emisję, ale zgodnie z planami winieta pozostaje obowiązkowa.",
          "Flamandzki minister Ben Weyts podkreślił, że €90 jest znacznie mniej niż w innych kategoriach — ale nie zerowe.",
        ],
      },
      {
        id: "concept-prices",
        title: "Ceny koncepcyjne",
        paragraphs: [
          "€90 to planowana stawka koncepcyjna. Ostateczne ceny i ewentualne zmiany zostaną ogłoszone przed startem w maju 2027 r.",
        ],
      },
    ],
    priceTableTitle: "Elektryczne / wodorowe — winieta roczna",
    priceTable: [{ label: "Elektryczne / wodorowe", value: "€90 / rok" }],
    compareTableTitle: "Inne roczne stawki (do porównania)",
    compareTable: [
      { label: "Euro 4 i wyżej", value: "€100 / rok", note: "97%+ flamandzkich aut" },
      { label: "Starsze auta (do Euro 3)", value: "€125 / rok" },
    ],
    relatedPagesTitle: "Inne typy winiet",
    faqs: [
      {
        question: "Czy €90 dotyczy też hybryd plug-in?",
        answer:
          "Nie. Zgodnie z planami stawka EV dotyczy w pełni elektrycznych i wodorowych pojazdów. Hybrydy plug-in podlegają normie emisji silnika spalinowego.",
      },
      {
        question: "Czy jest zniżka dla EV na krótkich winietach?",
        answer:
          "Dla dziennych, miesięcznych i krótkich winiet zgodnie z obecnymi planami przewidziano stałe kwoty niezależnie od napędu. Niższa stawka EV dotyczy winiety rocznej.",
      },
      {
        question: "Czy €90 jest ostateczne?",
        answer:
          "Nie. To cena koncepcyjna oparta na planach z marca 2026.",
      },
    ],
  },
};

export default pages;
