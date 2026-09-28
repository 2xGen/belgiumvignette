import type { BaseDictionary } from "../types";
import { plTolls } from "../tolls/pl";
import { buildRateMatrix } from "../rate-matrix";

const plRateMatrix = buildRateMatrix({
  vehicleHeader: "Pojazd",
  dayHeader: "1 dzień",
  tenDaysHeader: "10 dni",
  monthHeader: "1 miesiąc",
  twoMonthsHeader: "2 miesiące",
  yearHeader: "1 rok",
  euro03: "Euro 0 do 3",
  euro4: "Euro 4 i wyżej",
  zeroEmission: "Bezemisyjne",
});

const dictionary: BaseDictionary = {
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
    tolls: "Opłaty",
    news: "Aktualności",
    privacy: "Prywatność",
  },
  meta: {
    home: {
      title: "Winieta belgijska 2027: ceny, autostrady i jak kupić",
      description:
        "Belgia planuje cyfrową winietę drogową od maja 2027 r. Sprawdź planowane ceny, kto jej potrzebuje, zwolnienia dla motocykli i gdzie kupić.",
    },
    prices: {
      title: "Ceny belgijskiej winiety 2027: stawki według normy Euro i okresu ważności",
      description:
        "Pełna tabela cen belgijskiej winiety drogowej 2027 według normy Euro i okresu ważności — od €8,10/dzień (bezemisyjne) do €125/rok (Euro 0–3).",
    },
    foreign: {
      title: "Czy samochody zagraniczne potrzebują belgijskiej winiety w 2027 roku?",
      description:
        "Tak — według obecnych planów zagraniczne samochody osobowe będą potrzebować belgijskiej winiety od 1 maja 2027 r. na objętych drogach. Przewodnik dla kierowców z Holandii, Niemiec i Francji.",
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
      title: "Kup winietę belgijską — sprzedaż oczekiwana od 1 marca 2027",
      description:
        "Według obecnych planów sprzedaż online belgijskiej winiety drogowej ma ruszyć 1 marca 2027 r. Obowiązkowa od 1 maja 2027 r. Oficjalne źródło: rząd flamandzki.",
    },
    tolls: {
      title: "Opłaty drogowe w Belgii 2027: autostrady, winieta i stawki",
      description:
        "Czy autostrady w Belgii są płatne? Sprawdź opłaty, planowaną winietę od maja 2027, stawki i zasady dla samochodów zagranicznych.",
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
    lastUpdatedDate: "28 September 2026",
    lastUpdatedIso: "2026-09-28",
    readMore: "Czytaj więcej",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — niezależne informacje o opłatach drogowych w Belgii",
    backToHome: "Powrót do strony głównej",
    plannedNotice:
      "Plany przedstawione w marcu 2026 r. mogą jeszcze ulec zmianie. Śledzimy oficjalne źródła i aktualizujemy tę stronę, gdy pojawią się nowe informacje.",
    independentSite: "Info belgijska winieta drogowa",
    contactLabel: "Kontakt",
    cookieSettings: "Ustawienia plików cookie",
    tableCategory: "Kategoria",
    tablePrice: "Cena",
    lastChecked: "Ostatnio sprawdzone",
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
      title: "Winieta belgijska 2027: czy potrzebujesz winiety do Belgii?",
      subtitle:
        "Belgia planuje wprowadzenie cyfrowej winiety drogowej od 1 maja 2027 r. Sprawdź, czy jej potrzebujesz, ile kosztuje, kto jest zwolniony i kiedy rozpocznie się sprzedaż.",
      ctaPrimary: "Sprawdź, czy potrzebujesz winiety",
      ctaSecondary: "Powiadom mnie o rozpoczęciu sprzedaży",
    },
    decisionTree: {
      title: "Czy potrzebujesz winiety?",
      options: [
        { label: "Samochód belgijski", href: "prices" },
        { label: "Samochód holenderski", href: "foreign", anchor: "netherlands" },
        { label: "Samochód niemiecki", href: "foreign", anchor: "germany" },
        { label: "Samochód francuski", href: "foreign", anchor: "france" },
        { label: "Kamper / bus", href: "exemptions" },
      ],
    },
    quickAnswers: [
      {
        title: "Kto musi kupić belgijską winietę?",
        summary:
          "Samochody osobowe do 3,5 tony, w tym pojazdy zagraniczne w tranzycie na objętych drogach.",
        href: "foreign",
        linkLabel: "Przewodnik dla kierowców zagranicznych",
      },
      {
        title: "Kto jest zwolniony z belgijskiej winiety?",
        summary:
          "Motocykle, ciężarówki (opłata za kilometr), traktory, autokary, służby ratunkowe i policja — według obecnych planów.",
        href: "exemptions",
        linkLabel: "Zobacz wszystkie zwolnienia",
      },
      {
        title: "Jaka jest cena belgijskiej winiety w 2027 roku?",
        summary:
          "Cena zależy od normy Euro i okresu ważności: od €8,10/dzień (bezemisyjne) i €9/dzień (Euro 4+), do €90–€125 rocznie.",
        href: "prices",
        linkLabel: "Pełny przewodnik po cenach",
      },
    ],
    overview: {
      title: "Belgijska winieta drogowa: co jest planowane na 2027",
      paragraphs: [
        "Belgia planuje wprowadzenie cyfrowej winiety drogowej od 1 maja 2027 r. Belgijska winieta miałaby obowiązywać samochody osobowe do 3,5 tony na autostradach i niektórych regionalnych drogach głównych.",
        "Samochody zagraniczne byłyby objęte. Kierowcy z Francji, Holandii, Niemiec i innych krajów potrzebowaliby winiety, aby korzystać z objętych belgijskich dróg.",
        "Nie byłaby to naklejka na szybę. Belgijska winieta autostradowa byłaby cyfrowa i powiązana z tablicą rejestracyjną, z kontrolami m.in. przez kamery ANPR.",
        "Według stawek opublikowanych przez rząd flamandzki cena zależy od normy Euro i okresu ważności: od €8,10 dziennie dla pojazdów bezemisyjnych i €9 dziennie dla Euro 4+, do €90–€125 rocznie. Planowane są też 10 dni, 1 miesiąc i 2 miesiące.",
        "Motocykle byłyby zwolnione według obecnych planów. Ostateczne kwoty i przepisy muszą jeszcze zostać potwierdzone przed wejściem systemu w życie.",
      ],
    },
    intentSections: [
      {
        id: "autostrady",
        title: "Czy potrzebujesz winiety na autostrady w Belgii?",
        paragraphs: [
          "Według obecnych planów cyfrowa winieta drogowa stałaby się obowiązkowa na belgijskich autostradach i niektórych regionalnych drogach głównych od 1 maja 2027 r.",
          "Dziś większość belgijskich autostrad pozostaje bezpłatna dla samochodów osobowych. Projekt winiety miałby to zmienić: dostęp do autostrad i części szybszej sieci regionalnej wymagałby winiety powiązanej z tablicą rejestracyjną.",
          "Jeśli korzystasz tylko z dróg lokalnych, winieta nie byłaby wymagana według opublikowanych informacji. W praktyce całkowite unikanie autostrad i regionalnych dróg głównych jest często trudne przy podróżach międzymiastowych lub tranzytowych.",
        ],
        link: {
          href: "tolls",
          label: "Opłaty i autostrady w Belgii",
        },
      },
      {
        id: "motocykle",
        title: "Czy motocykle potrzebują belgijskiej winiety?",
        paragraphs: [
          "Nie. Według ogłoszeń rządowych motocykle byłyby wyraźnie zwolnione z belgijskiej winiety.",
          "Obowiązek dotyczyłby pojazdów silnikowych z co najmniej czterema kołami do 3,5 tony — w tym samochodów, niektórych lekkich vanów i kamperów. Ciężarówki pozostają pod opłatą kilometrową Viapass.",
        ],
        link: {
          href: "exemptions",
          label: "Zobacz szczegóły zwolnień",
        },
      },
      {
        id: "kupic",
        title: "Gdzie kupić belgijską winietę?",
        paragraphs: [
          "Oficjalna sprzedaż jeszcze się nie rozpoczęła. Według obecnych planów zakup online byłby możliwy od 1 marca 2027 r. przez oficjalną stronę lub autoryzowanego partnera.",
          "Dziś nie ma oficjalnego portalu sprzedaży. Strony, które już oferują rezerwację lub płatność, nie są oficjalnym kanałem.",
        ],
        link: {
          href: "buy",
          label: "Kup belgijską winietę: daty i oficjalne kanały",
        },
      },
    ],
    pricingTitle: "Jaka jest cena belgijskiej winiety w 2027 roku?",
    pricingParagraphs: [
      "Cena belgijskiej winiety drogowej zależy od normy Euro pojazdu i okresu ważności. Dla samochodów Euro 4 lub wyżej planowane stawki zaczynają się od €9 za 1 dzień i €100 za 1 rok. Starsze pojazdy płacą więcej, a pojazdy bezemisyjne mają niższą stawkę.",
    ],
    pricingLinkLabel: "Zobacz wszystkie ceny belgijskiej winiety",
    pricingLinkSecondaryLabel: "Pełny przewodnik po cenach",
    pricingMatrixTitle: "Planowane stawki",
    rateMatrix: plRateMatrix,
    pricingNote:
      "To obecnie opublikowane stawki rządu flamandzkiego. Wprowadzenie nadal podlega ostatecznemu zatwierdzeniu.",
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
        question: "Czy potrzebujesz winiety na autostrady w Belgii?",
        answer:
          "Według obecnych planów tak od 1 maja 2027 r. na belgijskich autostradach i niektórych regionalnych drogach głównych. Drogi lokalne pozostałyby poza obowiązkiem.",
      },
      {
        question: "Czy motocykle potrzebują belgijskiej winiety?",
        answer:
          "Nie. Motocykle są wyraźnie zwolnione według ogłoszeń ministrów Weytsa (Flandria) i Desquesnesa (Walonia).",
      },
      {
        question: "Czy dotyczy to samochodów zagranicznych?",
        answer:
          "Tak. Przepisy UE wymagają równego traktowania. Kierowcy belgijscy i zagraniczni muszą płacić na objętych drogach.",
      },
      {
        question: "Gdzie kupić belgijską winietę?",
        answer:
          "Oficjalna sprzedaż jeszcze się nie rozpoczęła. Według planów zakup online jest oczekiwany od 1 marca 2027 r. przez oficjalny kanał lub autoryzowanego partnera.",
      },
    ],
    sourcesTitle: "Oficjalne źródła",
  },
  prices: {
    title: "Ceny belgijskiej winiety 2027: stawki według normy Euro i okresu ważności",
    intro:
      "Planowana cena belgijskiej winiety drogowej zależy od dwóch czynników: normy Euro pojazdu i okresu ważności winiety. Rząd flamandzki opublikował stawki dla 1 dnia, 10 dni, 1 miesiąca, 2 miesięcy i 1 roku.",
    leadParagraphs: [
      "Dla samochodu Euro 4 lub wyżej belgijska winieta według obecnych stawek kosztuje €9 za 1 dzień, €12 za 10 dni i €100 za rok. Pojazdy bezemisyjne płacą mniej, a pojazdy Euro 0 do Euro 3 więcej.",
      "Winieta jest planowana od 1 maja 2027 r. Zakup miałby być możliwy od 1 marca 2027 r. Wprowadzenie nadal podlega ostatecznemu zatwierdzeniu.",
    ],
    matrixTitle: "Ceny belgijskiej winiety drogowej 2027",
    rateMatrix: plRateMatrix,
    matrixNote:
      "Te stawki zostały opublikowane przez rząd flamandzki. Cena zależy więc nie tylko od tego, jak długo potrzebujesz winiety, ale także od normy Euro pojazdu.",
    buyLinkParagraph:
      "[[buy|Sprawdź, gdzie i kiedy możesz kupić belgijską winietę]].",
    categorySections: [
      {
        id: "euro-4",
        title: "Ile kosztuje belgijska winieta dla Euro 4 i wyżej?",
        paragraphs: [
          "Dla pojazdów Euro 4 lub wyżej według opublikowanych stawek obowiązują:",
        ],
        list: [
          "1 dzień: €9",
          "10 dni: €12",
          "1 miesiąc: €19",
          "2 miesiące: €30",
          "1 rok: €100",
        ],
        linkParagraph:
          "To kategoria, do której należy duża część obecnej floty. Przy krótkim przejeździe przez Belgię wystarczy winieta dzienna lub 10-dniowa. Kto regularnie korzysta z belgijskich dróg regionalnych i autostrad, może porównać winietę roczną z krótszymi okresami. Więcej o [[dailyVignette|winiecie dziennej]] lub zobacz [[annualVignette|winietę roczną]].",
      },
      {
        id: "euro-0-3",
        title: "Ile kosztuje belgijska winieta dla Euro 0 do Euro 3?",
        paragraphs: [
          "Starsze pojazdy z Euro 0, Euro 1, Euro 2 lub Euro 3 należą do najdroższej kategorii taryfowej.",
          "Planowane ceny wynoszą od €11,25 za jeden dzień do €125 za rok.",
        ],
        tableTitle: "Cena Euro 0–3",
        table: [
          { label: "1 dzień", value: "€11,25" },
          { label: "10 dni", value: "€15" },
          { label: "1 miesiąc", value: "€23,75" },
          { label: "2 miesiące", value: "€37,50" },
          { label: "1 rok", value: "€125" },
        ],
      },
      {
        id: "elektryczne",
        title: "Ile kosztuje winieta dla samochodu elektrycznego?",
        paragraphs: [
          "Dla pojazdu bezemisyjnego obowiązuje najniższa stawka. Według obecnej tabeli cen winieta kosztuje €8,10 za jeden dzień i €90 za pełny rok.",
        ],
        tableTitle: "Cena bezemisyjna",
        table: [
          { label: "1 dzień", value: "€8,10" },
          { label: "10 dni", value: "€10,80" },
          { label: "1 miesiąc", value: "€17,10" },
          { label: "2 miesiące", value: "€27" },
          { label: "1 rok", value: "€90" },
        ],
        linkParagraph:
          "[[electricVignette|Więcej o belgijskiej winiecie dla samochodów elektrycznych]].",
      },
    ],
    durationSection: {
      id: "okres",
      title: "Jaki okres ważności jest mi potrzebny?",
      paragraphs: [
        "Według obecnych planów możesz wybrać spośród pięciu okresów ważności:",
        "Najlepszy okres zależy od tego, jak często i jak długo korzystasz z dróg, na których winieta będzie obowiązkowa.",
        "Zobacz osobne wyjaśnienia dotyczące [[dailyVignette|winiety dziennej]], [[monthlyVignette|winiety miesięcznej]] i [[annualVignette|winiety rocznej]].",
      ],
      list: [
        "1 dzień — na krótki przejazd lub jednodniową wycieczkę.",
        "10 dni — np. na wakacje lub dłuższy pobyt.",
        "1 miesiąc — na kilka przejazdów w ciągu kilku tygodni.",
        "2 miesiące — na dłuższy pobyt lub regularne tymczasowe użytkowanie.",
        "1 rok — dla kierowców, którzy regularnie jeżdżą belgijskimi drogami regionalnymi i autostradami.",
      ],
    },
    whenSection: {
      id: "kiedy",
      title: "Kiedy obowiązują te ceny?",
      paragraphs: [
        "Cyfrowa winieta drogowa jest planowana od 1 maja 2027 r. Według obecnych oficjalnych informacji winietę będzie można kupić online od 1 marca 2027 r.",
        "Praktyczne wdrożenie nadal trwa, a wprowadzenie podlega ostatecznemu zatwierdzeniu.",
        "Chcesz wiedzieć, jak będzie działał zakup? Zobacz [[buy|Kup belgijską winietę]]. Wszystkie przepisy, pojazdy i kluczowe daty znajdziesz w naszym kompletnym przewodniku po [[home|belgijskiej winiecie drogowej 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Powiązanie z podatkiem drogowym (Flandria)",
        paragraphs: [
          "Flandria jednocześnie reformuje roczny podatek drogowy. Według szacunków około połowa flamandzkich kierowców może netto płacić więcej — do €100 ekstra rocznie.",
          "Obniżka podatku drogowego według planów nie rekompensuje w pełni wszystkim kosztów winiety. To informacja kontekstowa; powyższe stawki winiety obowiązują niezależnie od tej reformy.",
        ],
      },
    ],
    euroNormTitle: "Normy Euro w skrócie",
    euroNormCategoryHeader: "Norma",
    euroNormDescriptionHeader: "Opis",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Samochody od ok. 2005–2006. Większość pojazdów na drogach. Stawka dzienna €9, roczna €100.",
      },
      {
        norm: "Bezemisyjne",
        description: "Całkowicie bezemisyjne (elektryczne / wodór). Najniższa stawka: od €8,10/dzień, €90/rok.",
      },
      {
        norm: "Euro 3 i niżej",
        description: "Starsze, bardziej zanieczyszczające pojazdy. Najwyższa stawka: od €11,25/dzień, €125/rok.",
      },
    ],
    vignettePagesTitle: "Według typu winiety",
    faqs: [
      {
        question: "Jaka jest najniższa planowana cena dzienna?",
        answer:
          "Według rządu flamandzkiego najniższa stawka dzienna to €8,10 dla pojazdów bezemisyjnych. Dla Euro 4 i wyżej to €9; dla Euro 0 do 3 to €11,25.",
      },
      {
        question: "Czy krótkie okresy dotyczą wszystkich klas emisji?",
        answer:
          "Tak. Każdy okres ważności (1 dzień, 10 dni, 1 miesiąc, 2 miesiące, 1 rok) ma własną stawkę w każdej kategorii normy Euro. Kwoty różnią się w zależności od kategorii.",
      },
      {
        question: "Czy furgonetki firmowe są odliczalne?",
        answer:
          "Według planów koszt winiety dla furgonetek użytkowanych zawodowo może być w pełni odliczany jako koszt firmowy.",
      },
    ],
  },
  foreign: {
    title: "Czy samochody zagraniczne potrzebują belgijskiej winiety?",
    intro:
      "Tak, według obecnych planów. Zagraniczne samochody osobowe będą potrzebować belgijskiej winiety od 1 maja 2027 r. podczas korzystania z objętych belgijskich dróg. Planowany system nie rozróżnia tablic rejestracyjnych belgijskich i zagranicznych — samochód zarejestrowany w Holandii, Francji, Niemczech lub innym kraju powinien wymagać tej samej cyfrowej winiety co pojazd belgijski. Ostateczne zasady mogą jeszcze ulec zmianie do oficjalnego zatwierdzenia i uruchomienia systemu.",
    sections: [
      {
        id: "eu-rules",
        title: "Równe traktowanie",
        paragraphs: [
          "Kierowcy belgijscy też płacą — przepisy UE uniemożliwiają obciążanie wyłącznie cudzoziemców. Twoja zagraniczna tablica jest objęta tym samym planowanym systemem.",
          "Szacuje się, że rocznie przez Belgię przejeżdża około 30 milionów zagranicznych samochodów osobowych.",
        ],
      },
      {
        id: "digital",
        title: "System cyfrowy",
        paragraphs: [
          "Brak fizycznej winiety do kupienia i wystawienia. System ma korzystać z automatycznego rozpoznawania tablic (ANPR). Kup przed jazdą po objętych drogach.",
        ],
      },
      {
        id: "history",
        title: "Kontekst historyczny",
        paragraphs: [
          "Belgia próbowała wprowadzić winietę w 2007 r., ale wycofała się po protestach Holendrów. Holenderscy ministrowie ponownie wyrazili obawy — i w obecnych planach nie ogłoszono jeszcze specjalnego reżimu granicznego dla krajów sąsiednich.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Holandia",
        tips: [
          "Tak — samochody osobowe z holenderską rejestracją powinny od 1 maja 2027 r. wymagać belgijskiej winiety na objętych belgijskich drogach.",
          "Dotyczy to popularnych tras, takich jak Holandia → Antwerpia, Holandia → Bruksela oraz tranzyt Holandia → Luksemburg/Francja.",
          "Obecnie nie ogłoszono zwolnienia dla holenderskich regionów przygranicznych.",
        ],
      },
      {
        id: "germany",
        country: "Niemcy",
        tips: [
          "Tak — samochody osobowe z niemiecką rejestracją powinny od 1 maja 2027 r. wymagać belgijskiej winiety na objętych belgijskich drogach.",
          "Obejmuje to popularne trasy tranzytowe, takie jak Aachen → Liège oraz Niemcy → Francja przez Belgię.",
          "Opcje krótkoterminowe (1–10 dni) w planach mogą odpowiadać ruchowi tranzytowemu.",
        ],
      },
      {
        id: "france",
        country: "Francja",
        tips: [
          "Tak — samochody osobowe z francuską rejestracją powinny od 1 maja 2027 r. wymagać belgijskiej winiety na objętych belgijskich drogach.",
          "Jest to szczególnie istotne dla podróży z północnej Francji do Belgii oraz tras tranzytowych Francja → Holandia/Niemcy.",
          "Objęte drogi obejmują autostrady i planowane regionalne drogi główne — nie tylko tranzyt długodystansowy.",
        ],
      },
    ],
    faqs: [
      {
        question: "Czy potrzebuję winiety, jeśli tylko przejeżdżam tranzytem?",
        answer:
          "Tak — według obecnych planów od 1 maja 2027 r. korzystanie z objętych belgijskich dróg głównych wymaga winiety niezależnie od celu podróży. Ostateczne zasady mogą jeszcze ulec zmianie przed uruchomieniem.",
      },
      {
        question: "Czy samochody zagraniczne płacą tyle samo co belgijskie?",
        answer:
          "Tak. Planowany system stosuje tę samą cyfrową winietę do tablic belgijskich i zagranicznych. Przepisy UE o równym traktowaniu wyjaśniają, dlaczego nie można obciążać wyłącznie cudzoziemców.",
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
    title: "Kiedy mogę kupić belgijską winietę?",
    intro:
      "Według obecnych planów sprzedaż online jest oczekiwana od 1 marca 2027 r. Winieta drogowa miałaby stać się obowiązkowa od 1 maja 2027 r. Ostateczne warunki i oficjalny portal sprzedaży mogą się jeszcze zmienić.",
    independenceNotice:
      "BelgiumVignette.be to niezależna strona informacyjna i nie jest oficjalną stroną rządu belgijskiego ani uznanym sprzedawcą winiety drogowej.",
    sections: [
      {
        id: "when",
        title: "Kiedy startuje sprzedaż?",
        paragraphs: [
          "Rząd flamandzki podaje, że winietę będzie można kupić online od 1 marca 2027 r. — na oficjalnej stronie lub u autoryzowanego partnera.",
          "Dziś nie ma portalu sprzedaży: nie można jeszcze rezerwować ani płacić. Strony, które już to oferują, nie są oficjalnym kanałem.",
        ],
      },
      {
        id: "expected",
        title: "Czego można się spodziewać",
        paragraphs: [
          "Winieta będzie cyfrowa i powiązana z tablicą rejestracyjną — bez naklejki na szybie.",
          "Według planów wybierasz okres: 1 dzień, 10 dni, 1 miesiąc, 2 miesiące lub 1 rok.",
        ],
      },
    ],
    statusBadge: "Sprzedaż oczekiwana od 1 marca 2027",
    officialSourceLabel: "Oficjalne źródło",
    steps: [
      {
        title: "Poczekaj na autoryzowaną sprzedaż",
        description:
          "Zakup online oczekiwany od 1 marca 2027 r. przez oficjalną stronę lub autoryzowanego partnera, według rządu flamandzkiego.",
      },
      { title: "Zarejestruj tablicę", description: "System cyfrowy — bez naklejki na szybę." },
      { title: "Wybierz okres ważności", description: "Dzień, 10 dni, miesiąc, 2 miesiące lub rok." },
      { title: "Jedź z ważną winietą", description: "Kamery sprawdzają automatycznie od 1 maja 2027 r." },
    ],
    faqs: [
      {
        question: "Czy mogę zamówić z wyprzedzeniem?",
        answer:
          "Nie. Według obecnych planów sprzedaż online zaczyna się 1 marca 2027 r. Zapisz się, aby otrzymać powiadomienie, gdy autoryzowana sprzedaż będzie dostępna.",
      },
      {
        question: "Kiedy winieta staje się obowiązkowa?",
        answer:
          "Według planów od 1 maja 2027 r. na belgijskich autostradach i drogach regionalnych. Okres tolerancji jest planowany od 1 maja do 1 lipca 2027 r.",
      },
    ],
  },
  tolls: plTolls,
  privacy: {
    title: "Polityka prywatności",
    intro: "BelgiumVignette.be szanuje Twoją prywatność. Oto jak obsługujemy Twoje dane.",
    sections: [
      {
        id: "controller",
        title: "Administrator danych",
        paragraphs: [
          "BelgiumVignette.be to niezależna strona informacyjna o planowanej belgijskiej winiecie drogowej. Nie jesteśmy powiązani z rządem belgijskim, Flandrią, Walonią ani Brukselą i nie sprzedajemy winiet.",
          "Strona jest prowadzona w powiązaniu z Tolls.be (niezależne informacje o opłatach drogowych w Belgii). Kontakt: info@tolls.be.",
        ],
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
          "Przechowywanie: do czasu wyczyszczenia pamięci lub aktualizacji tej polityki (wersja 2026-08-04).",
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
    lastUpdated: "4 August 2026",
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
    emailPlaceholder: "Adres e-mail",
    consentLabel: "Wyrażam zgodę na otrzymywanie aktualizacji i zapoznałem/am się z",
    success: "Dziękujemy! Jesteś zapisany/a.",
    error: "Coś poszło nie tak. Spróbuj ponownie.",
    privacyLink: "polityką prywatności",
    independenceNote:
      "BelgiumVignette.be to niezależna usługa informacyjna i nie jest powiązana z rządem belgijskim. Obecnie nie sprzedajemy belgijskiej winiety drogowej.",
    sticky: {
      teaser: "Winieta jeszcze niedostępna — otrzymaj link do zakupu",
      cta: "Zapisz się →",
      closeLabel: "Zamknij",
    },
    intents: {
      home: {
        title:
          "Otrzymaj link do zakupu, gdy belgijska winieta będzie w sprzedaży",
        description:
          "Sprzedaż jest planowana od 1 marca 2027 r. Podaj swój adres e-mail i otrzymaj jedno powiadomienie, gdy autoryzowana sprzedaż będzie dostępna.",
        benefits: [
          "Link do autoryzowanego kanału zakupu, gdy będzie znany",
          "Aktualizacje przy zmianach cen lub zasad",
          "Bez zbędnych e-maili",
        ],
        submit: "Wyślij mi link do zakupu",
      },
      prices: {
        title: "Otrzymaj powiadomienie, gdy ostateczne ceny winiety będą znane",
        description:
          "Obecne stawki są opublikowane, ale wprowadzenie musi jeszcze zostać ostatecznie zatwierdzone. Śledzimy oficjalne informacje za Ciebie.",
        benefitsIntro: "Otrzymaj jedną wiadomość e-mail, gdy:",
        benefits: [
          "ostateczne ceny zostaną potwierdzone;",
          "rozpocznie się autoryzowana sprzedaż;",
          "będzie dostępny link do uznanego kanału zakupu.",
        ],
        submit: "Informuj mnie na bieżąco",
      },
      buy: {
        title: "Powiadom mnie, gdy belgijska winieta będzie w sprzedaży",
        description:
          "Autoryzowana sprzedaż jeszcze się nie rozpoczęła. Według obecnych planów belgijską winietę będzie można kupić od 1 marca 2027 r. przez oficjalną stronę lub autoryzowanego partnera. Podaj swój adres e-mail i otrzymaj powiadomienie, gdy autoryzowana sprzedaż będzie dostępna.",
        benefits: [],
        submit: "Wyślij mi link do zakupu",
      },
      foreign: {
        title:
          "Powiadom mnie, gdy zagraniczne auta będą mogły zarejestrować winietę",
        description:
          "Według planów zagraniczni kierowcy również będą potrzebować belgijskiej winiety. Otrzymaj powiadomienie, gdy rejestracja i zakup będą możliwe przez uznany kanał.",
        benefits: [
          "Start autoryzowanej sprzedaży",
          "Zasady dla zagranicznych tablic rejestracyjnych",
          "Link do uznanego kanału zakupu",
        ],
        submit: "Informuj mnie na bieżąco",
      },
      news: {
        title: "Otrzymuj ważne aktualizacje o belgijskiej winiecie",
        description:
          "Krótkie, istotne powiadomienia, gdy pojawią się informacje o cenach, zasadach lub starcie sprzedaży.",
        benefits: [
          "Ważne aktualizacje o winiecie",
          "Bez codziennego spamu",
          "Link do zakupu, gdy uznany kanał będzie dostępny",
        ],
        submit: "Otrzymuj aktualizacje",
      },
      default: {
        title:
          "Otrzymaj link do zakupu, gdy belgijska winieta będzie w sprzedaży",
        description:
          "Sprzedaż według planu zaczyna się 1 marca 2027 r. Wyślemy Ci jedno powiadomienie, gdy autoryzowana sprzedaż będzie dostępna.",
        benefits: [
          "Link do autoryzowanego kanału zakupu",
          "Aktualizacje o cenach i zasadach",
          "Bez zbędnych e-maili",
        ],
        submit: "Wyślij mi link do zakupu",
      },
    },
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
    {
      title: "Rząd flamandzki — Winieta drogowa od 1 maja 2027 r.",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Oficjalna strona o obowiązku, stawkach i zakupie od 1 marca 2027 r.",
    },
    {
      title: "Viapass — opłata kilometrowa dla ciężarówek",
      url: "https://www.viapass.be",
      description: "Istniejący system dla pojazdów powyżej 3,5 tony (nie winieta samochodowa)",
    },
    {
      title: "Komisja Europejska — opłaty drogowe",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "Ramy UE dla myta i niedyskryminacji",
    },
  ],
};

export default dictionary;
