import type { Dictionary } from "../types";

export const plTolls: Dictionary["tolls"] = {
  title: "Opłaty drogowe w Belgii: płatne autostrady i winieta 2027",
  intro:
    "Jedziesz do Belgii samochodem? Sprawdź, czy belgijskie autostrady są płatne, jak będzie działać planowana winieta drogowa od 2027 roku i jakie stawki mogą dotyczyć Twojego pojazdu.",
  blocks: [
    {
      type: "section",
      id: "paid-motorways",
      title: "Czy autostrady w Belgii są płatne?",
      paragraphs: [
        "Dla samochodów osobowych Belgia obecnie nie stosuje ogólnego systemu winiet autostradowych jak Austria czy Szwajcaria.",
        "To ma się zmienić w 2027 roku.",
        "Belgia planuje wprowadzić cyfrową winietę drogową od 1 maja 2027 r. dla pojazdów korzystających z objętych autostrad i dróg regionalnych. Obowiązywałaby zarówno pojazdy belgijskie, jak i zarejestrowane za granicą.",
        "Jeśli planujesz jazdę w Belgii po tej dacie, zobacz nasz pełny przewodnik po [[home|winiecie Belgia 2027]].",
      ],
    },
    {
      type: "summary",
      title: "W skrócie",
      items: [
        {
          label: "Obecnie",
          value: "Brak ogólnej winiety drogowej dla samochodów osobowych.",
        },
        {
          label: "Od 1 maja 2027 r.",
          value: "Planowana jest cyfrowa winieta.",
        },
        {
          label: "Pojazdy objęte",
          value:
            "Pojazdy silnikowe z co najmniej czterema kołami do 3,5 tony.",
        },
        {
          label: "Samochody zagraniczne",
          value: "Również objęte.",
        },
        {
          label: "Motocykle",
          value: "Nieobjęte tym obowiązkiem według obecnych planów.",
        },
        {
          label: "Zakup",
          value:
            "Online, ze sprzedażą planowaną od 1 marca 2027 r.",
        },
      ],
    },
    {
      type: "section",
      id: "toll-or-vignette",
      title: "Opłata czy winieta: jak będzie działać system belgijski?",
      paragraphs: [
        "Planowany system belgijski nie jest klasycznym mytem, przy którym płaci się przy każdej bramce.",
        "To winieta drogowa dająca dostęp do objętych dróg przez określony okres.",
        "W przeciwieństwie do naklejki na przednią szybę belgijska winieta będzie cyfrowa i powiązana z tablicą rejestracyjną pojazdu.",
        "Nie potrzebujesz fizycznej naklejki. Przy zakupie musisz poprawnie wpisać numer rejestracyjny.",
        "Jak działa nowy system, przeczytaj w naszym przewodniku po [[home|winiecie drogowej w Belgii]].",
      ],
    },
    {
      type: "section",
      id: "covered-roads",
      title: "Które drogi będą płatne w Belgii w 2027 roku?",
      paragraphs: [
        "Winieta jest planowana do korzystania z belgijskich autostrad i objętych dróg regionalnych.",
        "Kierowcy poruszający się wyłącznie po drogach lokalnych nie powinni potrzebować winiety.",
        "Każdy, kto przejeżdża przez Belgię autostradami — na przykład do Francji, Holandii, Niemiec lub Luksemburga — będzie musiał uwzględnić nowy obowiązek po jego wejściu w życie.",
        "Szczegóły praktyczne i dokładna sieć drogowa mogą jeszcze zostać doprecyzowane przed startem.",
      ],
    },
    {
      type: "pricing",
      id: "prices",
      title: "Ile będą kosztować opłaty drogowe w Belgii?",
      paragraphs: [
        "Nie powinno być jednej ceny za przejazd. Kierowca kupuje winietę ważną przez wybrany okres.",
        "Opublikowane stawki zależą od normy Euro pojazdu i wybranej długości.",
      ],
      durationHeader: "Okres",
      priceHeader: "Stawka",
      tables: [
        {
          title: "Planowane stawki dla pojazdów Euro 4 i wyższych",
          rows: [
            { label: "1 dzień", value: "€9" },
            { label: "10 dni", value: "€12" },
            { label: "1 miesiąc", value: "€19" },
            { label: "2 miesiące", value: "€30" },
            { label: "1 rok", value: "€100" },
          ],
        },
        {
          title: "Planowane stawki dla pojazdów Euro 0 do Euro 3",
          rows: [
            { label: "1 dzień", value: "€11.25" },
            { label: "10 dni", value: "€15" },
            { label: "1 miesiąc", value: "€23.75" },
            { label: "2 miesiące", value: "€37.50" },
            { label: "1 rok", value: "€125" },
          ],
        },
        {
          title: "Planowane stawki dla pojazdów bezemisyjnych",
          rows: [
            { label: "1 dzień", value: "€8.10" },
            { label: "10 dni", value: "€10.80" },
            { label: "1 miesiąc", value: "€17.10" },
            { label: "2 miesiące", value: "€27" },
            { label: "1 rok", value: "€90" },
          ],
        },
      ],
      linkParagraph:
        "Kwoty, kategorie pojazdów i najnowsze aktualizacje znajdziesz na stronie [[prices|cen winiety Belgia]].",
      notice:
        "Uwaga: system musi jeszcze przejść ostatnie etapy legislacyjne. Zasady mogą się zmienić przed wejściem w życie.",
    },
    {
      type: "section",
      id: "transit",
      title: "Czy trzeba płacić za przejazd przez Belgię?",
      paragraphs: [
        "Od 1 maja 2027 r., jeśli system wejdzie w życie zgodnie z planem, kierowcy korzystający z objętych autostrad lub dróg regionalnych będą potrzebować ważnej winiety.",
        "Dotyczy to także kierowców, którzy tylko przejeżdżają przez Belgię do innego kraju.",
        "Samochód zarejestrowany we Francji, Holandii lub Niemczech nie jest automatycznie zwolniony, bo kierowca nie mieszka w Belgii.",
        "Winieta jest planowana dla objętych pojazdów korzystających z sieci drogowej, niezależnie od kraju rejestracji.",
        "Zobacz nasz przewodnik dla [[foreign|zagranicznych kierowców w Belgii]] o zasadach dla pojazdów zagranicznych.",
      ],
    },
    {
      type: "section",
      id: "french-cars",
      title: "Czy francuskie samochody będą musiały płacić na belgijskich autostradach?",
      paragraphs: [
        "Francuskie samochody będą podlegać tym samym zasadom winiety co inne samochody zagraniczne na objętych drogach.",
        "Francuski kierowca na belgijskiej autostradzie od 1 maja 2027 r. będzie według obecnych planów potrzebował ważnej winiety.",
        "Na krótki pobyt lub zwykły tranzyt nie trzeba automatycznie kupować winiety rocznej. Planowane są też okresy 1 dnia, 10 dni, 1 miesiąca i 2 miesięcy.",
      ],
    },
    {
      type: "section",
      id: "foreign-cars",
      title: "Czy zagraniczne samochody będą musiały płacić?",
      paragraphs: [
        "Tak. Plany wyraźnie obejmują winietą zagranicznych użytkowników objętych autostrad i dróg regionalnych.",
        "Dotyczy to pojazdów z:",
      ],
      list: [
        "Francji",
        "Holandii",
        "Niemiec",
        "Luksemburga",
        "Zjednoczonego Królestwa",
        "innych krajów europejskich i pozaeuropejskich",
      ],
    },
    {
      type: "section",
      id: "motorcycles",
      title: "Czy motocykle będą musiały płacić opłatę w Belgii?",
      paragraphs: [
        "Planowana winieta obejmuje pojazdy silnikowe z co najmniej czterema kołami i maksymalną technicznie dopuszczalną masą nie większą niż 3,5 tony.",
        "Motocykle nie są więc objęte tym obowiązkiem według obecnych planów.",
        "Inne kategorie pojazdów mogą podlegać innym zasadom. Sprawdź pełną listę [[exemptions|zwolnień z belgijskiej winiety]] przed podróżą.",
      ],
    },
    {
      type: "section",
      id: "campervans",
      title: "Kampery i busy: czy potrzebują winiety?",
      paragraphs: [
        "Kampery i niektóre busy do 3,5 tony wchodzą w planowany system, gdy korzystają z objętych autostrad i dróg regionalnych.",
        "Kluczowe kryteria to kategoria pojazdu i maksymalna technicznie dopuszczalna masa.",
        "Pojazdy powyżej 3,5 tony mogą podlegać innemu systemowi opłat drogowych.",
      ],
    },
    {
      type: "section",
      id: "trucks",
      title: "A co z ciężarówkami powyżej 3,5 tony?",
      paragraphs: [
        "Nowa winieta dla pojazdów do 3,5 tony nie zastępuje istniejącego belgijskiego systemu dla pojazdów ciężarowych.",
        "Belgia ma już opłatę kilometrową dla ciężarówek w ramach Viapass.",
        "Rozróżnienie jest więc takie:",
      ],
      list: [
        "Samochody, lekkie busy i niektóre kampery do 3,5 t → winieta drogowa planowana od 2027 r.",
        "Objęte pojazdy ciężarowe powyżej 3,5 t → istniejąca opłata kilometrowa.",
      ],
    },
    {
      type: "section",
      id: "buy",
      title: "Gdzie kupić winietę na belgijskie autostrady?",
      paragraphs: [
        "Winieta nie jest jeszcze w sprzedaży.",
        "Według obecnie opublikowanych informacji oficjalnych zakup powinien być możliwy od 1 marca 2027 r., przed planowanym startem 1 maja.",
        "Powinna być dostępna online przez oficjalną stronę lub uznaną organizację partnerską.",
        "Unikaj kupowania rzekomej winiety Belgia 2027 na niezweryfikowanej stronie przed oficjalnym otwarciem sprzedaży.",
        "Śledzimy otwarcie sprzedaży i opublikujemy link, gdy będzie dostępny. Zobacz [[buy|gdzie kupić winietę Belgia]] po najnowsze informacje.",
      ],
    },
    {
      type: "section",
      id: "enforcement",
      title: "Jak będzie kontrolowana winieta?",
      paragraphs: [
        "Winieta będzie w pełni cyfrowa i powiązana z tablicą rejestracyjną pojazdu.",
        "Nie będzie trzeba naklejać fizycznej winiety na przednią szybę.",
        "Poprawne wpisanie numeru rejestracyjnego przy zakupie jest kluczowe. Jazda po drodze objętej winietą bez ważnej winiety może skutkować mandatem, gdy kontrola będzie w pełni aktywna.",
        "Zobacz naszą stronę o [[fines|mandatach za winietę Belgia]] po najnowsze zasady kontroli i kar.",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "Belgia 2027: opłata, winieta czy darmowe autostrady?",
      paragraphs: [
        "Zmiana może mylić, bo określenia jak opłaty Belgia, płatna autostrada Belgia i winieta Belgia często oznaczają to samo.",
        "W praktyce planowany system nie jest tradycyjnym mytem dystansowym dla samochodów osobowych.",
        "To cyfrowa winieta ważna przez wybrany okres.",
        "Możesz wybrać długość dopasowaną do podróży: jeden dzień na krótki przejazd, 10 dni na pobyt, jeden lub dwa miesiące na dłuższy okres albo winietę roczną przy regularnym użytkowaniu.",
      ],
    },
  ],
  faqTitle: "Często zadawane pytania o opłaty drogowe w Belgii",
  faqs: [
    {
      question: "Czy w Belgii są opłaty drogowe?",
      answer:
        "Dla samochodów osobowych obecnie nie ma ogólnej winiety drogowej porównywalnej z systemami w niektórych innych krajach europejskich. Cyfrowa winieta jest planowana od 1 maja 2027 r. do korzystania z objętych autostrad i dróg regionalnych.",
    },
    {
      question: "Czy belgijskie autostrady będą płatne w 2027 roku?",
      answer:
        "Korzystanie z objętych autostrad i dróg regionalnych będzie wymagało winiety dla pojazdów objętych nowym systemem, jeśli wejdzie w życie zgodnie z planem 1 maja 2027 r.",
    },
    {
      question: "Ile będzie kosztować autostrada w Belgii?",
      answer:
        "Cena nie jest liczona za kilometr dla objętych samochodów. Dla pojazdu Euro 4 lub wyższego opublikowane stawki wynoszą obecnie od €9 za 1 dzień do €100 za 1 rok. Starsze pojazdy i pojazdy bezemisyjne mają inne stawki.",
    },
    {
      question: "Czy potrzebuję winiety, żeby pojechać do Belgii?",
      answer:
        "Zależy od daty i dróg, którymi jedziesz. Winieta jest planowana od 1 maja 2027 r. dla objętych pojazdów na autostradach i drogach regionalnych. Jeśli używasz tylko dróg lokalnych, winieta nie powinna być potrzebna.",
    },
    {
      question: "Gdzie kupić winietę autostradową Belgia?",
      answer:
        "Sprzedaż jeszcze nie jest otwarta. Ma się rozpocząć 1 marca 2027 r. przez oficjalną stronę i uznane organizacje partnerskie. Zobacz naszą stronę Jak kupić, aby śledzić otwarcie sprzedaży.",
    },
    {
      question: "Czy motocykle muszą płacić na belgijskich autostradach?",
      answer:
        "Planowana winieta dotyczy pojazdów silnikowych z co najmniej czterema kołami do 3,5 tony. Motocykle nie są więc objęte tym obowiązkiem według obecnych planów.",
    },
  ],
  closing: {
    title: "Przygotuj podróż do Belgii",
    paragraphs: [
      "Belgijski system ma wejść w życie 1 maja 2027 r., ale kilka szczegółów może się jeszcze zmienić przed startem.",
      "Przed wyjazdem sprawdź:",
    ],
    checklist: [
      "czy Twój pojazd jest objęty;",
      "jakimi drogami będziesz jechać;",
      "jakiego okresu winiety potrzebujesz;",
      "stawkę dla Twojego pojazdu;",
      "że kupujesz w uznanym kanale.",
    ],
    links: [
      { href: "home", label: "Winieta Belgia 2027" },
      { href: "prices", label: "Ceny winiety" },
      { href: "buy", label: "Jak kupić belgijską winietę" },
    ],
  },
};
