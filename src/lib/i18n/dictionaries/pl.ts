import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  locale: "pl",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Wszystko o belgijskiej cyfrowej winiecie drogowej — dla mieszkańców i kierowców przekraczających granicę.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Strona główna",
    prices: "Ceny",
    foreign: "Kierowcy zagraniczni",
    exemptions: "Zwolnienia",
    fines: "Mandaty",
    buy: "Jak kupić",
    news: "Aktualności",
    privacy: "Prywatność",
  },
  meta: {
    home: {
      title: "Winieta belgijska 2027 — ceny, zasady i przewodnik dla kierowców zagranicznych",
      description:
        "Niezależny przewodnik po planowanej belgijskiej cyfrowej winiecie drogowej od 1 maja 2027 r. Ceny, zwolnienia, mandaty i praktyczne wskazówki dla kierowców z Holandii, Niemiec i innych krajów.",
    },
    prices: {
      title: "Ceny winiety belgijskiej 2027 — dzienne, miesięczne i roczne stawki",
      description:
        "Planowane ceny winiety w Belgii: €100/rok, krótkoterminowe od €9/dzień. Norma emisji Euro wyjaśniona w prosty sposób.",
    },
    foreign: {
      title: "Winieta belgijska dla samochodów zagranicznych i kierowców tranzytowych",
      description:
        "Praktyczny przewodnik dla kierowców z Holandii, Niemiec i Francji podróżujących przez Belgię. Co warto wiedzieć według obecnych planów.",
    },
    exemptions: {
      title: "Zwolnienia z winiety belgijskiej — motocykle, ciężarówki i inne",
      description:
        "Kto jest zwolniony według planów? Motocykle, ciężarówki, służby ratunkowe i inne kategorie wyjaśnione.",
    },
    fines: {
      title: "Mandaty za winietę belgijską — kontrola i okres tolerancji",
      description:
        "Planowane mandaty do €210, kontrole ANPR i okres tolerancji do 1 lipca 2027 r.",
    },
    buy: {
      title: "Kup winietę belgijską — kiedy i jak (oczekiwany system cyfrowy)",
      description:
        "Jeszcze niedostępna w sprzedaży. Czego można się spodziewać według planów: cyfrowy system powiązany z tablicą rejestracyjną, bez naklejki na szybę.",
    },
    news: {
      title: "Aktualności o winiecie belgijskiej — wyjaśnienie wiarygodnych źródeł",
      description:
        "Niezależne podsumowania oficjalnych wiadomości o belgijskiej winiecie z naszą opinią redakcyjną. Linki do oryginalnych źródeł.",
    },
    privacy: {
      title: "Polityka prywatności — BelgiumVignette.be",
      description:
        "Jak BelgiumVignette.be obsługuje pliki cookie, analitykę, dane newslettera i Twoje prawa RODO.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be to niezależna strona informacyjna. Nie jesteśmy powiązani z rządem belgijskim, Flandrią, Walonią ani Brukselą.",
    lastUpdated: "Ostatnia aktualizacja",
    lastUpdatedDate: "14 July 2026",
    lastUpdatedIso: "2026-07-14",
    readMore: "Czytaj więcej",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — niezależne informacje o opłatach drogowych w Belgii",
    backToHome: "Powrót do strony głównej",
    plannedNotice:
      "Plany przedstawione w marcu 2026 r. mogą jeszcze ulec zmianie. Śledzimy oficjalne źródła i aktualizujemy tę stronę, gdy pojawią się nowe informacje.",
    independentSite: "Niezależna strona informacyjna",
    contactLabel: "Kontakt",
    cookieSettings: "Ustawienia plików cookie",
    tableCategory: "Kategoria",
    tablePrice: "Cena",
  },
  notFound: {
    title: "Strona nie znaleziona",
    description:
      "Ta strona nie istnieje lub została przeniesiona. Wróć na stronę główną lub przejrzyj najnowsze wiadomości o winiecie belgijskiej.",
    homeLink: "Strona główna",
    newsLink: "Aktualności i informacje",
  },
  home: {
    hero: {
      eyebrow: "Planowane od 1 maja 2027 r.",
      title: "Belgijska cyfrowa winieta — wyjaśnienie w prostych słowach",
      subtitle:
        "Od maja 2027 r. Flandria, Walonia i Bruksela planują pobierać opłaty od kierowców korzystających z głównych dróg. Bez naklejki na szybę — cyfrowa winieta powiązana z tablicą rejestracyjną.",
      ctaPrimary: "Zobacz ceny",
      ctaSecondary: "Info dla kierowców zagranicznych",
    },
    quickAnswers: [
      {
        title: "Kto musi ją mieć?",
        summary:
          "Samochody osobowe do 3,5 tony, w tym pojazdy zagraniczne — nawet jeśli tylko przejeżdżasz tranzytem.",
        href: "foreign",
      },
      {
        title: "Kto jest zwolniony?",
        summary:
          "Motocykle, ciężarówki (opłata za kilometr), traktory, autokary, służby ratunkowe i policja.",
        href: "exemptions",
      },
      {
        title: "Ile to kosztuje?",
        summary:
          "Winieta roczna od €90 (elektryczne) do €125 (starsze samochody). Krótkoterminowa od €9/dzień.",
        href: "prices",
      },
    ],
    pricingTitle: "Planowane stawki w skrócie",
    pricingSubtitle:
      "Na podstawie opublikowanych planów (marzec 2026 r.). Ostateczne kwoty mogą jeszcze ulec zmianie.",
    annualTableTitle: "Winieta roczna",
    shortTermTableTitle: "Krótkoterminowa",
    annualPricing: [
      { label: "Euro 4 i wyżej", value: "€100 / year", note: "97%+ flamandzkich samochodów" },
      { label: "Elektryczne / wodór", value: "€90 / year" },
      { label: "Starsze samochody (do Euro 3)", value: "€125 / year" },
    ],
    shortTermPricing: [
      { label: "1 dzień", value: "€9" },
      { label: "10 dni", value: "€12" },
      { label: "1 miesiąc", value: "€19" },
      { label: "2 miesiące", value: "€30" },
    ],
    timelineTitle: "Kluczowe daty (według planów)",
    timeline: [
      {
        date: "March 2026",
        title: "Przedstawienie planów",
        description:
          "Rząd flamandzki przedstawia propozycję. Zatwierdzenie przez Walonię, Brukselę i Komisję Europejską wciąż w toku.",
      },
      {
        date: "1 May 2027",
        title: "Winieta obowiązkowa",
        description:
          "Cyfrowa winieta wymagana na autostradach i regionalnych drogach głównych.",
      },
      {
        date: "1 July 2027",
        title: "Egzekwowanie mandatów",
        description:
          "Koniec okresu tolerancji. Kamery ANPR i mobilne jednostki rozpoczynają kontrolę.",
      },
    ],
    faqTitle: "Najczęściej zadawane pytania",
    faqs: [
      {
        question: "Czy to fizyczna naklejka?",
        answer:
          "Nie. Według planów jest to cyfrowa winieta powiązana z tablicą rejestracyjną. Bez naklejki na szybie.",
      },
      {
        question: "Czy dotyczy to samochodów zagranicznych?",
        answer:
          "Tak. Przepisy UE wymagają równego traktowania. Kierowcy belgijscy i zagraniczni muszą płacić.",
      },
      {
        question: "Czy motocykliści płacą?",
        answer:
          "Nie. Motocykle są wyraźnie zwolnione według ogłoszeń ministrów Weytsa (Flandria) i Desquesnesa (Walonia).",
      },
      {
        question: "Kiedy mogę kupić?",
        answer:
          "Oficjalny kanał sprzedaży jeszcze nie istnieje. Zapisz się do naszego newslettera, aby otrzymywać informacje o starcie.",
      },
    ],
    sourcesTitle: "Oficjalne źródła",
  },
  prices: {
    title: "Ceny i okresy ważności",
    intro:
      "Przegląd planowanych cen winiety według normy emisji Euro. Na podstawie ogłoszeń z marca 2026 r. — szczegóły mogą ulec zmianie.",
    sections: [
      {
        id: "annual",
        title: "Winieta roczna",
        paragraphs: [
          "Dla regularnych użytkowników belgijskich dróg głównych. Cena zależy od klasy emisji Euro Twojego pojazdu.",
        ],
      },
      {
        id: "short",
        title: "Opcje krótkoterminowe",
        paragraphs: [
          "Dla okazjonalnych podróży — wakacje, weekendy — planowane są krótsze winiety.",
          "Starsze, bardziej zanieczyszczające samochody (do Euro 3) płacą nieco wyższe stawki.",
        ],
      },
      {
        id: "road-tax",
        title: "Powiązanie z podatkiem drogowym (Flandria)",
        paragraphs: [
          "Flandria jednocześnie reformuje roczny podatek drogowy. Około połowa flamandzkich kierowców może płacić łącznie więcej — do €100/rok dodatkowo.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 i wyżej", value: "€100", note: "Rok" },
      { label: "Elektryczne / wodór", value: "€90", note: "Rok" },
      { label: "Do Euro 3", value: "€125", note: "Rok" },
    ],
    shortTermTable: [
      { label: "1 dzień", value: "€9" },
      { label: "10 dni", value: "€12" },
      { label: "1 miesiąc", value: "€19" },
      { label: "2 miesiące", value: "€30" },
    ],
    euroNormTitle: "Normy Euro wyjaśnione",
    euroNormCategoryHeader: "Norma",
    euroNormDescriptionHeader: "Opis",
    euroNormItems: [
      { norm: "Euro 4+", description: "Samochody od ok. 2005–2006 r. Większość pojazdów na drogach." },
      { norm: "Elektryczne / H₂", description: "Zero emisji. Najniższa planowana stawka." },
      { norm: "Euro 3 i niżej", description: "Starsze, bardziej zanieczyszczające pojazdy." },
    ],
    faqs: [
      {
        question: "Czy furgonetki firmowe są odliczalne?",
        answer: "Według planów koszt winiety dla furgonetek użytkowanych zawodowo może być w pełni odliczany jako koszt firmowy.",
      },
    ],
  },
  foreign: {
    title: "Kierowcy zagraniczni",
    intro:
      "Ponad połowa kilometrów na belgijskich drogach ma być pokonywana przez kierowców zagranicznych. Jeśli przyjeżdżasz z Holandii, Niemiec, Francji lub innego kraju, oto co plany oznaczają dla Ciebie.",
    sections: [
      {
        id: "eu-rules",
        title: "Równe traktowanie",
        paragraphs: [
          "Kierowcy belgijscy też płacą — przepisy UE uniemożliwiają obciążanie wyłącznie cudzoziemców. Twoja zagraniczna tablica jest objęta systemem.",
          "Szacuje się, że rocznie przez Belgię przejeżdża około 30 milionów zagranicznych samochodów osobowych.",
        ],
      },
      {
        id: "digital",
        title: "Cyfrowa, bez naklejki",
        paragraphs: [
          "Brak fizycznej winiety do kupienia i wystawienia. System korzysta z automatycznego rozpoznawania tablic (ANPR). Kup przed jazdą.",
        ],
      },
      {
        id: "history",
        title: "Kontekst historyczny",
        paragraphs: [
          "Belgia próbowała wprowadzić winietę w 2007 r., ale wycofała się po protestach Holendrów. Holenderscy ministrowie ponownie wyrazili rozczarowanie — w obecnych planach nie ma specjalnego reżimu granicznego.",
        ],
      },
    ],
    countryTips: [
      {
        country: "🇳🇱 Netherlands",
        tips: [
          "Popularne trasy przez E19 (Antwerpia), E40 (Bruksela) i E314 (Liège) są objęte.",
          "W obecnych planach nie ma specjalnych ustaleń dla kierowców z południowej Holandii przy granicy.",
        ],
      },
      {
        country: "🇩🇪 Germany",
        tips: [
          "Tranzyt przez Aachen–Liège lub trasy w kierunku Francji prawdopodobnie wymagają winiety.",
          "Opcje krótkoterminowe (1–10 dni) odpowiadają ruchowi tranzytowemu.",
        ],
      },
      {
        country: "🇫🇷 France",
        tips: [
          "Kierowcy z północnej Francji i Walonii: sprawdź, czy Twoja trasa korzysta z belgijskich regionalnych dróg głównych.",
        ],
      },
    ],
    faqs: [
      {
        question: "Czy potrzebuję winiety, jeśli tylko przejeżdżam tranzytem?",
        answer: "Tak — według planów korzystanie z dróg głównych wymaga winiety niezależnie od celu podróży.",
      },
    ],
  },
  exemptions: {
    title: "Zwolnienia",
    intro: "Nie każdy pojazd płaci według planów. Oto kto jest zwolniony, a kto nie.",
    sections: [
      {
        id: "motorcycles",
        title: "Motocykle zwolnione",
        paragraphs: ["Motocykle wyraźnie wyłączone według ministrów Weytsa i Desquesnesa."],
      },
      {
        id: "trucks",
        title: "Ciężarówki",
        paragraphs: ["Pojazdy ciężkie korzystają z istniejącego systemu opłaty za kilometr (Viapass), a nie z winiety."],
      },
    ],
    exemptTableTitle: "Zwolnione",
    requiredTableTitle: "Winieta wymagana",
    exemptTable: [
      { label: "Motocykle i motorowery", value: "Zwolnione" },
      { label: "Ciężarówki (>3,5 t)", value: "Zwolnione — opłata za km" },
      { label: "Traktory", value: "Zwolnione" },
      { label: "Autokary", value: "Zwolnione" },
      { label: "Służby ratunkowe i policja", value: "Zwolnione" },
      { label: "Obrona", value: "Zwolnione" },
    ],
    notExemptTable: [
      { label: "Samochody osobowe (≤3,5 t)", value: "Winieta wymagana" },
      { label: "Samochody zagraniczne", value: "Winieta wymagana" },
      { label: "Furgonetki", value: "Winieta wymagana" },
      { label: "Samochody elektryczne", value: "Wymagana (planowane €90/rok)" },
    ],
    faqs: [
      {
        question: "Czy mój kamper jest zwolniony?",
        answer: "Jeśli jest zarejestrowany jako pojazd osobowy ≤3,5 t, jest objęty planami.",
      },
    ],
  },
  fines: {
    title: "Mandaty i egzekwowanie",
    intro: "Egzekwowanie za pomocą kamer ANPR i mobilnych jednostek. Planowany jest okres tolerancji przed rozpoczęciem nakładania mandatów.",
    sections: [
      {
        id: "tolerance",
        title: "Okres tolerancji",
        paragraphs: ["1 maja do 1 lipca 2027 r. — brak mandatów według planów. Kary od 1 lipca."],
      },
      {
        id: "anpr",
        title: "Kontrole ANPR",
        paragraphs: ["Kamery na autostradach i regionalnych drogach głównych weryfikują ważność winiety."],
      },
    ],
    fineTable: [
      { label: "1. wykroczenie", value: "€70" },
      { label: "2. wykroczenie", value: "€140" },
      { label: "3. i kolejne", value: "€210" },
    ],
    faqs: [
      {
        question: "Mandat, jeśli zapomnę o winiecie?",
        answer: "Nie w okresie tolerancji (maj–czerwiec 2027 r.). Po tym terminie tak — w tym dla tablic zagranicznych.",
      },
    ],
  },
  buy: {
    title: "Jak kupić",
    intro:
      "Oficjalny kanał sprzedaży jeszcze nie istnieje. Oczekiwany jest system cyfrowy, ale szczegóły strony internetowej/aplikacji są nieznane.",
    sections: [
      {
        id: "status",
        title: "Aktualny status",
        paragraphs: [
          "Plany wymagają jeszcze zatwierdzenia przez Walonię, Brukselę i Komisję Europejską, zanim sprzedaż może się rozpocząć.",
        ],
      },
      {
        id: "expected",
        title: "Czego można się spodziewać",
        paragraphs: ["Rejestracja tablicy online. Fizyczna naklejka nie będzie potrzebna."],
      },
    ],
    statusBadge: "Jeszcze niedostępna",
    steps: [
      { title: "Poczekaj na oficjalny start", description: "Sprzedaż oczekiwana przed 1 maja 2027 r." },
      { title: "Zarejestruj tablicę", description: "System cyfrowy — bez naklejki na szybę." },
      { title: "Wybierz okres ważności", description: "Dzień, 10 dni, miesiąc, 2 miesiące lub rok." },
      { title: "Jedź z ważną winietą", description: "Kamery sprawdzają automatycznie." },
    ],
    faqs: [
      {
        question: "Czy mogę zamówić z wyprzedzeniem?",
        answer: "Nie. Zapisz się do naszego newslettera, aby być na bieżąco.",
      },
    ],
  },
  privacy: {
    title: "Polityka prywatności",
    intro: "BelgiumVignette.be szanuje Twoją prywatność. Oto jak obsługujemy Twoje dane.",
    sections: [
      {
        id: "controller",
        title: "Administrator danych",
        paragraphs: ["BelgiumVignette.be — kontakt: info@tolls.be."],
      },
      {
        id: "newsletter",
        title: "Newsletter",
        paragraphs: [
          "E-mail, język i znacznik czasu zgody przechowywane w Supabase (hosting w UE). Używane wyłącznie do aktualizacji o winiecie.",
        ],
      },
      {
        id: "cookies",
        title: "Pliki cookie, analityka i zgoda",
        paragraphs: [
          "Niezbędne przechowywanie: zapisujemy Twoje preferencje dotyczące plików cookie w localStorage. Podstawa prawna: prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO) i/lub zgoda, gdy jest wymagana.",
          "Analityka (opcjonalna): Vercel Analytics zbiera anonimowe wyświetlenia stron. Ładowana dopiero po zgodzie z banera. Podstawa prawna: zgoda (art. 6 ust. 1 lit. a RODO). Wycofaj przez Ustawienia plików cookie w stopce.",
          "Google Search Console i Bing Webmaster Tools: wyłącznie meta tagi weryfikacji własności — bez śledzących plików cookie.",
          "Przechowywanie: do czasu wyczyszczenia pamięci lub aktualizacji tej polityki (wersja 2026-07-14).",
        ],
      },
      {
        id: "news-editorial",
        title: "Wiadomości, streszczenia i treści redakcyjne",
        paragraphs: [
          "Nasza sekcja wiadomości publikuje niezależne streszczenia publicznie dostępnych doniesień o belgijskiej winiecie. Te strony nie są reprodukcją oryginalnych artykułów.",
          "Streszczenia i tłumaczenia mogą być tworzone z pomocą AI i mogą różnić się sformułowaniem od źródła. Zawsze linkujemy do oryginalnego wydawcy. Nasz komentarz redakcyjny („Nasza opinia”) jest pisany niezależnie i nie reprezentuje oryginalnego wydawcy ani władz belgijskich.",
          "Obrazy w artykułach mogą pochodzić z linkowanego oryginalnego artykułu lub agencji prasowych, z podpisami tam gdzie to możliwe. Pozostają własnością odpowiednich podmiotów praw. Wyświetlamy je w dobrej wierze jako odniesienie wraz z linkiem do źródła. Jeśli uważasz, że Twoje treści są używane nieprawidłowo, napisz na info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Twoje prawa (RODO)",
        paragraphs: ["Dostęp, sprostowanie, usunięcie, sprzeciw — info@tolls.be."],
      },
    ],
    lastUpdated: "14 July 2026",
  },
  news: {
    title: "Aktualności",
    intro:
      "Śledzimy wiarygodne oficjalne i medialne źródła dotyczące planowanej winiety belgijskiej. Każdy artykuł podsumowuje oryginalne doniesienia i dodaje naszą niezależną opinię — z bezpośrednim linkiem do źródła.",
    latestArticles: "Najnowsze artykuły",
    summaryTitle: "Podsumowanie",
    summaryFromSource: "ze źródła oryginalnego:",
    ourTakeTitle: "Nasza opinia",
    sourceTitle: "Źródło oryginalne",
    readArticle: "Czytaj artykuł",
    backToNews: "Powrót do aktualności",
    publishedOn: "Opublikowano",
    sourceLabel: "Źródło",
    sourceDisclaimer:
      "Podsumowujemy wiarygodne źródła i linkujemy do oryginalnego artykułu. Nasza opinia to niezależny komentarz redakcyjny, a nie oficjalne informacje rządowe.",
    translationDisclaimer:
      "Podsumowanie i tłumaczenie na tej stronie zostały przygotowane z pomocą AI na podstawie oryginalnego artykułu. Zawsze sprawdzaj źródło poniżej pod kątem oficjalnego brzmienia.",
    articleAttributionTitle: "Niezależne podsumowanie — nie oryginalny artykuł",
    articleAttributionIndependence:
      "BelgiumVignette.be to niezależna strona informacyjna. Nie jesteśmy powiązani z oryginalnym wydawcą, nie jesteśmy przez niego zatwierdzeni ani nie działamy w jego imieniu. Ta strona podsumowuje publicznie dostępne doniesienia i dodaje nasz własny komentarz redakcyjny. Nie jest to reprodukcja oryginalnego artykułu.",
    articleAttributionAi:
      "Podsumowanie i tłumaczenie zostały przygotowane z pomocą AI i mogą różnić się sformułowaniem od oryginału. Zawsze sprawdzaj powiązane źródło poniżej pod kątem oficjalnego tekstu.",
    articleAttributionReadOriginal: "Przeczytaj oryginalny artykuł w",
    articleAttributionCopyright:
      "Oryginalny artykuł, zdjęcia i inne media pozostają własnością odpowiednich podmiotów praw. Linkujemy do źródła w dobrej wierze w celach informacyjnych. Podpisy zdjęć są podane powyżej, gdzie ma to zastosowanie.",
    tableOfContents: "Na tej stronie",
    relatedArticles: "Więcej aktualności i informacji",
    noArticles: "Brak opublikowanych artykułów. Sprawdź ponownie wkrótce.",
  },
  newsletter: {
    title: "Bądź na bieżąco",
    description: "Otrzymuj powiadomienia o oficjalnym starcie sprzedaży i ważnych aktualizacjach.",
    emailPlaceholder: "Twój adres e-mail",
    consentLabel: "Wyrażam zgodę na otrzymywanie aktualizacji i zapoznałem/am się z polityką prywatności.",
    submit: "Zapisz się",
    success: "Dziękujemy! Jesteś zapisany/a.",
    error: "Coś poszło nie tak. Spróbuj ponownie.",
    privacyLink: "Polityka prywatności",
  },
  cookieBanner: {
    title: "Pliki cookie i prywatność",
    description:
      "Niezbędne przechowywanie Twojego wyboru dotyczącego plików cookie. Opcjonalnie: Vercel Analytics (anonimowe wyświetlenia stron). Brak analityki przed podjęciem decyzji.",
    essentialTitle: "Niezbędne",
    essentialDescription: "Przechowuje Twoje preferencje dotyczące plików cookie w localStorage.",
    alwaysOn: "Zawsze włączone — wymagane do zapamiętania Twojego wyboru.",
    analyticsTitle: "Analityka (Vercel Analytics)",
    analyticsDescription: "Anonimowe statystyki wyświetleń stron. Aktywne dopiero po wyrażeniu zgody.",
    acceptAll: "Akceptuj wszystkie",
    rejectAll: "Odrzuć wszystkie",
    savePreferences: "Zapisz preferencje",
    manageSettings: "Ustawienia",
    closeSettings: "Zamknij",
    privacyLink: "Polityka prywatności",
  },
  sources: [
    { title: "Rząd flamandzki", url: "https://www.vlaanderen.be", description: "Oficjalne ogłoszenia" },
    { title: "Viapass", url: "https://www.viapass.be", description: "System opłaty za kilometr dla ciężarówek" },
    { title: "Komisja Europejska", url: "https://ec.europa.eu", description: "Przegląd umowy" },
  ],
};

export default dictionary;
