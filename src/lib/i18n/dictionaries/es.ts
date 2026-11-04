import type { BaseDictionary } from "../types";
import { getAcquisitionContent } from "../acquisition";
import { getRouteCheckerContent } from "../route-checker";
import { getPrivacyContent } from "../privacy";
import { esTolls } from "../tolls/es";
import { buildRateMatrix } from "../rate-matrix";

const esRateMatrix = buildRateMatrix({
  vehicleHeader: "Vehículo",
  dayHeader: "1 día",
  tenDaysHeader: "10 días",
  monthHeader: "1 mes",
  twoMonthsHeader: "2 meses",
  yearHeader: "1 año",
  euro03: "Euro 0 a 3",
  euro4: "Euro 4 y superior",
  zeroEmission: "Cero emisiones",
});

const dictionary: BaseDictionary = {
  locale: "es",
  site: {
    name: "Belgium Vignette",
    domain: "belgiumvignette.be",
    tagline:
      "Todo sobre la viñeta digital de carreteras de Bélgica — para residentes y conductores transfronterizos.",
    contactEmail: "info@tolls.be",
  },
  nav: {
    home: "Inicio",
    prices: "Precios",
    foreign: "Conductores extranjeros",
    exemptions: "Exenciones",
    fines: "Multas",
    buy: "Cómo comprar",
    tolls: "Peajes",
    news: "Noticias y actualizaciones",
    privacy: "Privacidad",
    acquisition: "Adquisición",
    routeChecker: "Calculadora de ruta",
  },
  meta: {
    home: {
      title: "Viñeta Bélgica 2027: precios, autopistas y cómo comprar",
      description:
        "Bélgica planea una viñeta vial digital a partir de mayo de 2027. Consulte precios previstos, quién la necesita, exenciones para motos y dónde comprarla.",
    },
    prices: {
      title: "Precios de la viñeta de Bélgica 2027: tarifas por norma Euro y duración",
      description:
        "Tabla completa de precios de la viñeta vial belga 2027 por norma Euro y duración — desde €8,10/día (cero emisiones) hasta €125/año (Euro 0–3).",
    },
    foreign: {
      title: "¿Necesitan los coches extranjeros una viñeta de Bélgica en 2027?",
      description:
        "Sí — según los planes actuales, los turismos extranjeros necesitarán una viñeta de Bélgica desde el 1 de mayo de 2027 en las carreteras cubiertas. Guía para conductores holandeses, alemanes y franceses.",
    },
    exemptions: {
      title: "Exenciones de la viñeta de Bélgica — motos, camiones y más",
      description:
        "¿Quién está exento según los planes? Motos, camiones, servicios de emergencia y otras categorías explicadas.",
    },
    fines: {
      title: "Multas por la viñeta de Bélgica — control y período de tolerancia",
      description:
        "Multas previstas de hasta €210, controles ANPR y tolerancia hasta el 1 de julio de 2027.",
    },
    buy: {
      title: "Comprar la viñeta de Bélgica — venta prevista el 2 de abril de 2027",
      description:
        "Según los planes actuales, la venta en línea de la viñeta belga está prevista a partir del 2 de abril de 2027. Obligatoria desde el 1 de mayo de 2027. Fuente oficial: Gobierno flamenco.",
    },
    tolls: {
      title: "Peajes en Bélgica 2027: autopistas, viñeta y tarifas",
      description:
        "¿Las autopistas son de pago en Bélgica? Descubra los peajes, la viñeta prevista desde mayo de 2027, las tarifas y las reglas para coches extranjeros.",
    },
    news: {
      title: "Noticias sobre la viñeta de Bélgica — fuentes fiables explicadas",
      description:
        "Resúmenes independientes de noticias oficiales sobre la viñeta belga con nuestra opinión editorial. Enlaces a las fuentes originales.",
    },
    privacy: {
      title: "Política de privacidad — BelgiumVignette.be",
      description:
        "Política de privacidad de BelgiumVignette.be: notificación única por correo, cookies, alojamiento, derechos RGPD y contacto.",
    },
    acquisition: {
      title: "BelgiumVignette.be en venta | Sitio y cartera de dominios",
      description:
        "BelgiumVignette.be está disponible para adquisición, con sitio multilingüe, rankings de Google y cartera de dominios de viñeta belga.",
    },
    routeChecker: {
      title: "Calculadora de ruta de viñetas | Corredores vía Bélgica",
      description:
        "Compruebe corredores de autopista típicos hacia, desde o a través de Bélgica y vea dónde puede aplicar una viñeta, viñeta prevista o peajes por trayecto.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be es un sitio de información independiente y no está vinculado al gobierno belga, Flandes, Valonia ni Bruselas. Este sitio web tiene únicamente fines informativos. Las fechas, tarifas y condiciones mencionadas pueden cambiar. Para la información más actual y oficial, consulte siempre los sitios web de las autoridades belgas competentes.",
    lastUpdated: "Última actualización",
    lastUpdatedDate: "4 de noviembre de 2026",
    lastUpdatedIso: "2026-11-04",
    readMore: "Leer más",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — información independiente sobre peajes en Bélgica",
    ownedManagedBy: "Propiedad y gestión de",
    operatorName: "2xGen",
    operatorUrl: "https://2xgen.com/about",
    backToHome: "Volver al inicio",
    plannedNotice:
      "Los planes presentados en marzo de 2026 pueden cambiar. Seguimos las fuentes oficiales y actualizamos esta página cuando hay novedades.",
    officialNotice: {
      title: "Importante: compruebe siempre la información oficial",
      provisionalNote:
        "Atención: La viñeta vial belga aún no se ha introducido. La fecha de inicio prevista es el 1 de mayo de 2027. Toda la información está sujeta a la aprobación parlamentaria definitiva. Consulte siempre la información actualizada en Vlaanderen.be antes de viajar.",
      paragraphs: [
        "BelgiumVignette.be es un sitio de información independiente y no está vinculado al gobierno belga. La viñeta vial belga aún está en preparación. Las fechas, tarifas y condiciones mencionadas pueden cambiar.",
        "Nos esforzamos por ofrecer información correcta y actualizada, pero no podemos garantizar que toda la información esté completa o al día en todo momento. Antes de viajar o comprar, compruebe siempre la información más reciente en los sitios web oficiales de las autoridades belgas competentes.",
      ],
      sourceLabel: "Información oficial: Vlaanderen.be — Viñeta vial desde el 1 de mayo de 2027",
      sourceUrl: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
    },
    independentSite: "Información independiente sobre la viñeta vial belga",
    contactLabel: "Contacto",
    cookieSettings: "Configuración de cookies",
    tableCategory: "Categoría",
    tablePrice: "Precio",
    lastChecked: "Última comprobación",
  },
  notFound: {
    title: "Página no encontrada",
    description:
      "Esta página no existe o ha sido movida. Vuelva a la página de inicio o consulte nuestras últimas noticias sobre la viñeta belga.",
    homeLink: "Ir al inicio",
    newsLink: "Noticias y actualizaciones",
  },
  home: {
    hero: {
      eyebrow: "Previsto desde el 1 de mayo de 2027",
      title: "Viñeta Bélgica 2027: ¿necesita una viñeta para Bélgica?",
      subtitle:
        "Bélgica planea introducir una viñeta vial digital a partir del 1 de mayo de 2027. Descubra si la necesita, cuánto cuesta, quién está exento y cuándo empieza la venta.",
      ctaPrimary: "Compruebe si necesita una viñeta",
      ctaSecondary: "Reciba aviso cuando abra la venta",
    },
    decisionTree: {
      title: "¿Necesita una viñeta?",
      options: [
        { label: "Coche belga", href: "prices" },
        { label: "Coche holandés", href: "foreign", anchor: "netherlands" },
        { label: "Coche alemán", href: "foreign", anchor: "germany" },
        { label: "Coche francés", href: "foreign", anchor: "france" },
        { label: "Autocaravana / furgoneta", href: "exemptions" },
      ],
    },
    quickAnswers: [
      {
        title: "¿Quién debe comprar una viñeta de Bélgica?",
        summary:
          "Turismos de hasta 3,5 toneladas, incluidos vehículos extranjeros en tránsito por las carreteras cubiertas.",
        href: "foreign",
        linkLabel: "Guía para conductores extranjeros",
      },
      {
        title: "¿Quién está exento de la viñeta de Bélgica?",
        summary:
          "Motos, camiones (peaje por km), tractores, autocares, servicios de emergencia y policía — según los planes actuales.",
        href: "exemptions",
        linkLabel: "Ver todas las exenciones",
      },
      {
        title: "¿Cuál es el precio de la viñeta de Bélgica en 2027?",
        summary:
          "El precio depende de la norma Euro y la duración: desde €8,10/día (cero emisiones) y €9/día (Euro 4+), hasta €90–€125 al año.",
        href: "prices",
        linkLabel: "Guía completa de precios",
      },
    ],
    overview: {
      title: "Viñeta vial de Bélgica: qué está previsto para 2027",
      paragraphs: [
        "Bélgica planea introducir una viñeta vial digital a partir del 1 de mayo de 2027. La viñeta belga se aplicaría a turismos de hasta 3,5 toneladas en carreteras regionales y autopistas belgas.",
        "Los coches extranjeros estarían incluidos. Conductores de Francia, Países Bajos, Alemania y otros países necesitarían una viñeta para usar las carreteras belgas cubiertas.",
        "No sería un adhesivo en el parabrisas. La viñeta de autopista belga sería digital y vinculada a la matrícula, con controles que incluyen cámaras ANPR.",
        "Según las tarifas publicadas por el gobierno flamenco, el precio depende de la norma Euro y la duración: desde €8,10 al día para vehículos cero emisiones y €9 al día para Euro 4+, hasta €90–€125 al año. También están previstos 10 días, 1 mes y 2 meses.",
        "Las motos estarían exentas según los planes actuales. Los importes y las normas definitivos aún deben confirmarse antes de la entrada en vigor.",
      ],
    },
    intentSections: [
      {
        id: "autopistas",
        title: "¿Necesita una viñeta para las autopistas en Bélgica?",
        paragraphs: [
          "Según los planes actuales, una viñeta vial digital sería obligatoria en las carreteras regionales y autopistas belgas a partir del 1 de mayo de 2027.",
          "Hoy la mayoría de las autopistas belgas siguen siendo gratuitas para turismos. El proyecto de viñeta cambiaría eso: el acceso a las autopistas y a parte de la red regional de mayor velocidad requeriría una viñeta vinculada a la matrícula.",
          "Si solo usa carreteras locales, no se requeriría viñeta según la información publicada. En la práctica, evitar por completo las autopistas y las carreteras principales regionales suele ser difícil en viajes interurbanos o de tránsito.",
        ],
        link: {
          href: "tolls",
          label: "Peajes y autopistas en Bélgica",
        },
      },
      {
        id: "motocicletas",
        title: "¿Las motos necesitan una viñeta de Bélgica?",
        paragraphs: [
          "No. Según los anuncios gubernamentales, las motos estarían explícitamente exentas de la viñeta belga.",
          "La obligación se dirigiría a vehículos de motor con al menos cuatro ruedas de hasta 3,5 toneladas — incluidos coches, algunas furgonetas ligeras y autocaravanas. Los camiones siguen bajo el peaje por kilómetro de Viapass.",
        ],
        link: {
          href: "exemptions",
          label: "Ver detalles de las exenciones",
        },
      },
      {
        id: "comprar",
        title: "¿Dónde comprar la viñeta de Bélgica?",
        paragraphs: [
          "La venta oficial aún no ha comenzado. Según los planes actuales, la compra en línea sería posible a partir del 2 de abril de 2027 a través del sitio web oficial o de un socio autorizado.",
          "Hoy no hay un portal de venta oficial. Los sitios que ya ofrecen reserva o pago no son el canal oficial.",
        ],
        link: {
          href: "buy",
          label: "Comprar viñeta de Bélgica: fechas y canales oficiales",
        },
      },
    ],
    pricingTitle: "¿Cuál es el precio de la viñeta de Bélgica en 2027?",
    pricingParagraphs: [
      "El precio de la viñeta vial belga depende de la norma Euro de su vehículo y de la duración de validez. Para coches Euro 4 o superior, las tarifas previstas empiezan en €9 por 1 día y €100 por 1 año. Los vehículos más antiguos pagan más, mientras que los de cero emisiones tienen una tarifa más baja.",
    ],
    pricingLinkLabel: "Ver todos los precios de la viñeta belga",
    pricingLinkSecondaryLabel: "Guía completa de precios",
    pricingMatrixTitle: "Tarifas previstas",
    rateMatrix: esRateMatrix,
    pricingNote:
      "Estas son las tarifas publicadas actualmente por el gobierno flamenco. La introducción sigue sujeta a aprobación definitiva.",
    timelineTitle: "Fechas clave (según los planes)",
    timeline: [
      {
        date: "March 2026",
        title: "Planes presentados",
        description:
          "El gobierno flamenco presenta la propuesta. Pendiente la aprobación de Valonia, Bruselas y la Comisión Europea.",
      },
      {
        date: "1 May 2027",
        title: "Introducción prevista",
        description:
          "Inicio previsto de la viñeta vial digital, sujeto a la aprobación definitiva.",
      },
      {
        date: "1 July 2027",
        title: "Aplicación prevista",
        description:
          "Fin previsto del período de tolerancia e inicio de las multas, sujeto a la aprobación definitiva.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿Es un adhesivo físico?",
        answer:
          "No. Según los planes, es una viñeta digital vinculada a su matrícula. Sin adhesivo en el parabrisas.",
      },
      {
        question: "¿Necesita una viñeta para las autopistas en Bélgica?",
        answer:
          "Según los planes actuales, sí a partir del 1 de mayo de 2027 en las carreteras regionales y autopistas belgas. Las carreteras locales quedarían fuera de la obligación.",
      },
      {
        question: "¿Las motos necesitan una viñeta de Bélgica?",
        answer:
          "No. Las motos están explícitamente exentas según los anuncios de los ministros Weyts (Flandes) y Desquesnes (Valonia).",
      },
      {
        question: "¿Se aplica a coches extranjeros?",
        answer:
          "Sí. Las normas de la UE exigen igualdad de trato. Conductores belgas y extranjeros deben pagar en las carreteras cubiertas.",
      },
      {
        question: "¿Dónde comprar la viñeta de Bélgica?",
        answer:
          "La venta oficial aún no ha comenzado. Según los planes, la compra en línea está prevista a partir del 2 de abril de 2027 a través del canal oficial o de un socio autorizado.",
      },
    ],
    sourcesTitle: "Fuentes oficiales",
  },
  prices: {
    title: "Precios de la viñeta de Bélgica 2027: tarifas por norma Euro y duración",
    intro:
      "El precio previsto de la viñeta vial belga depende de dos factores: la norma Euro de su vehículo y la duración de validez de la viñeta. El gobierno flamenco ha publicado tarifas para 1 día, 10 días, 1 mes, 2 meses y 1 año.",
    leadParagraphs: [
      "Para un coche Euro 4 o superior, la viñeta belga cuesta según las tarifas actuales €9 por 1 día, €12 por 10 días y €100 por un año. Los vehículos cero emisiones pagan menos y los de Euro 0 a Euro 3 pagan más.",
      "La viñeta está prevista a partir del 1 de mayo de 2027. La compra sería posible desde el 2 de abril de 2027. La introducción sigue sujeta a aprobación definitiva.",
    ],
    matrixTitle: "Precios de la viñeta vial belga 2027",
    rateMatrix: esRateMatrix,
    matrixNote:
      "Estas tarifas han sido publicadas por el gobierno flamenco. El precio no solo depende de cuánto tiempo necesite la viñeta, sino también de la norma Euro de su vehículo.",
    buyLinkParagraph:
      "[[buy|Consulte dónde y cuándo puede comprar la viñeta belga]].",
    categorySections: [
      {
        id: "euro-4",
        title: "¿Cuánto cuesta una viñeta belga para Euro 4 y superior?",
        paragraphs: [
          "Para vehículos Euro 4 o superior, según las tarifas publicadas:",
        ],
        list: [
          "1 día: €9",
          "10 días: €12",
          "1 mes: €19",
          "2 meses: €30",
          "1 año: €100",
        ],
        linkParagraph:
          "Esta es la categoría en la que entra gran parte del parque actual. Para un tránsito corto por Bélgica, una viñeta de 1 día o 10 días puede bastar. Quien use con regularidad las carreteras regionales y autopistas belgas puede comparar la viñeta anual con las duraciones más cortas. Más información sobre la [[dailyVignette|viñeta diaria]] o consulte la [[annualVignette|viñeta anual]].",
      },
      {
        id: "euro-0-3",
        title: "¿Cuánto cuesta una viñeta belga para Euro 0 a Euro 3?",
        paragraphs: [
          "Los vehículos más antiguos con Euro 0, Euro 1, Euro 2 o Euro 3 entran en la categoría de tarifa más alta.",
          "Los precios previstos van de €11,25 por un día a €125 por un año.",
        ],
        tableTitle: "Precio Euro 0–3",
        table: [
          { label: "1 día", value: "€11,25" },
          { label: "10 días", value: "€15" },
          { label: "1 mes", value: "€23,75" },
          { label: "2 meses", value: "€37,50" },
          { label: "1 año", value: "€125" },
        ],
      },
      {
        id: "electrico",
        title: "¿Cuánto cuesta la viñeta para un coche eléctrico?",
        paragraphs: [
          "Para un vehículo cero emisiones se aplica la tarifa más baja. Según la tabla de precios actual, la viñeta cuesta €8,10 por un día y €90 por un año completo.",
        ],
        tableTitle: "Precio cero emisiones",
        table: [
          { label: "1 día", value: "€8,10" },
          { label: "10 días", value: "€10,80" },
          { label: "1 mes", value: "€17,10" },
          { label: "2 meses", value: "€27" },
          { label: "1 año", value: "€90" },
        ],
        linkParagraph:
          "[[electricVignette|Más información sobre la viñeta belga para coches eléctricos]].",
      },
    ],
    durationSection: {
      id: "duracion",
      title: "¿Qué duración necesito?",
      paragraphs: [
        "Según los planes actuales, puede elegir entre cinco periodos de validez:",
        "La mejor duración depende de con qué frecuencia y durante cuánto tiempo use las carreteras en las que la viñeta será obligatoria.",
        "Consulte las explicaciones individuales sobre la [[dailyVignette|viñeta diaria]], la [[monthlyVignette|viñeta mensual]] y la [[annualVignette|viñeta anual]].",
      ],
      list: [
        "1 día — para un tránsito corto o una excursión de un día.",
        "10 días — por ejemplo para unas vacaciones o una visita más larga.",
        "1 mes — para varios trayectos a lo largo de unas semanas.",
        "2 meses — para una estancia más larga o un uso temporal regular.",
        "1 año — para conductores que circulan con regularidad por carreteras regionales y autopistas belgas.",
      ],
    },
    whenSection: {
      id: "cuando",
      title: "¿Cuándo se aplican estos precios?",
      paragraphs: [
        "La viñeta vial digital está prevista a partir del 1 de mayo de 2027. Según la información oficial actual, la viñeta podría comprarse en línea desde el 2 de abril de 2027.",
        "La puesta en práctica sigue en curso y la introducción está sujeta a aprobación definitiva.",
        "¿Quiere saber cómo funcionará la compra? Consulte [[buy|Comprar viñeta belga]]. Para todas las normas, vehículos y fechas clave, vea nuestra guía completa sobre la [[home|viñeta vial belga 2027]].",
      ],
    },
    backgroundSections: [
      {
        id: "road-tax",
        title: "Interacción con el impuesto de circulación (Flandes)",
        paragraphs: [
          "Flandes reforma al mismo tiempo el impuesto anual de circulación. Según las estimaciones, aproximadamente la mitad de los automovilistas flamencos podrían pagar más en neto — hasta €100 adicionales al año.",
          "La rebaja del impuesto de circulación no compensa por completo, según los planes, el coste de la viñeta para todo el mundo. Esto es información de contexto; las tarifas de la viñeta anteriores se aplican con independencia de esa reforma.",
        ],
      },
    ],
    euroNormTitle: "Normas Euro en resumen",
    euroNormCategoryHeader: "Norma",
    euroNormDescriptionHeader: "Descripción",
    euroNormItems: [
      {
        norm: "Euro 4+",
        description: "Coches desde aproximadamente 2005–2006. La mayoría de los vehículos en circulación. Tarifa diaria €9, anual €100.",
      },
      {
        norm: "Cero emisiones",
        description: "Totalmente cero emisiones (eléctrico / hidrógeno). Tarifa más baja: desde €8,10/día, €90/año.",
      },
      {
        norm: "Euro 3 e inferior",
        description: "Vehículos más antiguos y contaminantes. Tarifa más alta: desde €11,25/día, €125/año.",
      },
    ],
    vignettePagesTitle: "Por tipo de viñeta",
    faqs: [
      {
        question: "¿Cuál es el precio diario previsto más bajo?",
        answer:
          "Según el gobierno flamenco, la tarifa diaria más baja es €8,10 para vehículos cero emisiones. Para Euro 4 y superior es €9; para Euro 0 a 3 es €11,25.",
      },
      {
        question: "¿Se aplican los periodos cortos a todas las clases de emisión?",
        answer:
          "Sí. Cada duración (1 día, 10 días, 1 mes, 2 meses, 1 año) tiene su propia tarifa por categoría de norma Euro. Los importes difieren según la categoría.",
      },
      {
        question: "¿Las furgonetas comerciales son deducibles?",
        answer:
          "Según los planes, el coste de la viñeta para furgonetas profesionales podría ser totalmente deducible como gasto empresarial.",
      },
    ],
  },
  foreign: {
    title: "¿Necesitan los coches extranjeros una viñeta de Bélgica?",
    intro:
      "Sí, según los planes actuales. Los turismos matriculados en el extranjero necesitarán una viñeta de Bélgica desde el 1 de mayo de 2027 al utilizar las carreteras belgas cubiertas. El sistema previsto no distingue entre matrículas belgas y extranjeras: un coche matriculado en los Países Bajos, Francia, Alemania u otro país deberá necesitar la misma viñeta digital que un vehículo belga. Las normas definitivas pueden cambiar hasta que el sistema sea aprobado y puesto en marcha oficialmente.",
    sections: [
      {
        id: "eu-rules",
        title: "Igualdad de trato",
        paragraphs: [
          "Los conductores belgas también pagan — las normas de la UE impiden cobrar solo a extranjeros. Su matrícula extranjera está cubierta por el mismo sistema previsto.",
          "Se estima que unos 30 millones de turismos extranjeros transitan por Bélgica cada año.",
        ],
      },
      {
        id: "digital",
        title: "Sistema digital",
        paragraphs: [
          "No hay viñeta física que comprar o exhibir. El sistema está previsto para usar reconocimiento automático de matrículas (ANPR). Compre antes de circular por las carreteras cubiertas.",
        ],
      },
      {
        id: "history",
        title: "Contexto histórico",
        paragraphs: [
          "Bélgica intentó una viñeta en 2007 pero la retiró tras las protestas neerlandesas. Los ministros neerlandeses han vuelto a expresar su preocupación — y aún no se ha anunciado un régimen fronterizo especial para los países vecinos en los planes actuales.",
        ],
      },
    ],
    countryTips: [
      {
        id: "netherlands",
        country: "Países Bajos",
        tips: [
          "Sí — se espera que los turismos matriculados en los Países Bajos necesiten una viñeta de Bélgica desde el 1 de mayo de 2027 en las carreteras belgas cubiertas.",
          "Esto afecta a rutas habituales como Países Bajos → Amberes, Países Bajos → Bruselas y tránsito Países Bajos → Luxemburgo/Francia.",
          "Actualmente no se ha anunciado ninguna exención para las regiones fronterizas neerlandesas.",
        ],
      },
      {
        id: "germany",
        country: "Alemania",
        tips: [
          "Sí — se espera que los turismos matriculados en Alemania necesiten una viñeta de Bélgica desde el 1 de mayo de 2027 en las carreteras belgas cubiertas.",
          "Esto incluye rutas de tránsito habituales como Aquisgrán → Lieja y Alemania → Francia a través de Bélgica.",
          "Las opciones de corta duración (1–10 días) en los planes pueden ser adecuadas para el tráfico de paso.",
        ],
      },
      {
        id: "france",
        country: "Francia",
        tips: [
          "Sí — se espera que los turismos matriculados en Francia necesiten una viñeta de Bélgica desde el 1 de mayo de 2027 en las carreteras belgas cubiertas.",
          "Esto es especialmente relevante para viajes del norte de Francia a Bélgica y rutas de tránsito Francia → Países Bajos/Alemania.",
          "Las carreteras cubiertas incluyen autopistas y carreteras principales regionales previstas — no solo tránsito de larga distancia.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Necesito viñeta si solo estoy de paso?",
        answer:
          "Sí — según los planes actuales, desde el 1 de mayo de 2027 usar las carreteras principales belgas cubiertas requiere viñeta independientemente del destino. Las normas definitivas pueden cambiar antes del lanzamiento.",
      },
      {
        question: "¿Los coches extranjeros pagan lo mismo que los belgas?",
        answer:
          "Sí. El sistema previsto aplica la misma viñeta digital a matrículas belgas y extranjeras. Las normas de la UE sobre igualdad de trato explican por qué no se puede cobrar solo a extranjeros.",
      },
    ],
  },
  exemptions: {
    title: "Exenciones",
    intro: "No todos los vehículos pagan según los planes. Aquí quién está incluido y quién no.",
    sections: [
      {
        id: "motorcycles",
        title: "Motos exentas",
        paragraphs: ["Motos explícitamente excluidas según los ministros Weyts y Desquesnes."],
      },
      {
        id: "trucks",
        title: "Camiones",
        paragraphs: ["Los vehículos pesados utilizan el sistema de peaje por km existente (Viapass), no la viñeta."],
      },
    ],
    exemptTableTitle: "Exento",
    requiredTableTitle: "Viñeta obligatoria",
    exemptTable: [
      { label: "Motos y ciclomotores", value: "Exento" },
      { label: "Camiones (>3,5 t)", value: "Exento — peaje por km" },
      { label: "Tractores", value: "Exento" },
      { label: "Autocares", value: "Exento" },
      { label: "Emergencias y policía", value: "Exento" },
      { label: "Defensa", value: "Exento" },
    ],
    notExemptTable: [
      { label: "Turismos (≤3,5 t)", value: "Viñeta obligatoria" },
      { label: "Coches extranjeros", value: "Viñeta obligatoria" },
      { label: "Furgonetas", value: "Viñeta obligatoria" },
      { label: "Coches eléctricos", value: "Obligatoria (€90/año previsto)" },
    ],
    faqs: [
      {
        question: "¿Mi autocaravana está exenta?",
        answer: "Si está matriculada como vehículo de pasajeros ≤3,5 t, está incluida según los planes.",
      },
    ],
  },
  fines: {
    title: "Multas y control",
    intro: "Control mediante cámaras ANPR y unidades móviles. Se prevé un período de tolerancia antes de que comiencen las multas.",
    sections: [
      {
        id: "tolerance",
        title: "Período de tolerancia",
        paragraphs: ["Del 1 de mayo al 1 de julio de 2027 — sin multas según los planes. Sanciones a partir del 1 de julio."],
      },
      {
        id: "anpr",
        title: "Controles ANPR",
        paragraphs: ["Cámaras en autopistas y carreteras principales regionales verifican la validez de la viñeta."],
      },
    ],
    fineTable: [
      { label: "1.ª infracción", value: "€70" },
      { label: "2.ª infracción", value: "€140" },
      { label: "3.ª y siguientes", value: "€210" },
    ],
    faqs: [
      {
        question: "¿Multa si olvido la viñeta?",
        answer: "No durante la tolerancia (mayo–junio de 2027). Después, sí — incluidas matrículas extranjeras.",
      },
    ],
  },
  buy: {
    title: "¿Cuándo puedo comprar una viñeta belga?",
    intro:
      "Según los planes actuales, la venta en línea está prevista a partir del 2 de abril de 2027. La viñeta sería obligatoria desde el 1 de mayo de 2027. Las condiciones definitivas y el portal oficial de venta pueden cambiar.",
    independenceNotice:
      "BelgiumVignette.be es un sitio de información independiente y no es un sitio web oficial del gobierno belga ni un vendedor reconocido de la viñeta vial.",
    sections: [
      {
        id: "when",
        title: "¿Cuándo se abre la venta?",
        paragraphs: [
          "El Gobierno flamenco indica que podrá comprar la viñeta en línea a partir del 2 de abril de 2027, en el sitio oficial o a través de un socio autorizado.",
          "Hoy no hay portal de venta: no puede reservar ni pagar todavía. Los sitios que ya lo ofrecen no son el canal oficial.",
        ],
      },
      {
        id: "expected",
        title: "Qué se espera",
        paragraphs: [
          "La viñeta será digital y estará vinculada a la matrícula — sin adhesivo en el parabrisas.",
          "Según los planes, elige una duración de 1 día, 10 días, 1 mes, 2 meses o 1 año.",
        ],
      },
    ],
    statusBadge: "Venta prevista el 2 de abril de 2027",
    officialSourceLabel: "Fuente oficial",
    steps: [
      {
        title: "Espere la venta autorizada",
        description:
          "Compra en línea prevista a partir del 2 de abril de 2027 a través del sitio oficial o de un socio autorizado, según el Gobierno flamenco.",
      },
      { title: "Registre su matrícula", description: "Sistema digital — sin adhesivo en el parabrisas." },
      { title: "Elija la duración", description: "Día, 10 días, mes, 2 meses o anual." },
      { title: "Conduzca con viñeta válida", description: "Las cámaras verifican automáticamente desde el 1 de mayo de 2027." },
    ],
    faqs: [
      {
        question: "¿Puedo reservar ahora?",
        answer:
          "No. Según los planes actuales, la venta en línea empieza el 2 de abril de 2027. Suscríbase para recibir un aviso cuando la venta autorizada esté disponible.",
      },
      {
        question: "¿Cuándo es obligatoria la viñeta?",
        answer:
          "Según los planes, desde el 1 de mayo de 2027 en autopistas y carreteras regionales belgas. Hay un periodo de tolerancia previsto del 1 de mayo al 1 de julio de 2027.",
      },
    ],
  },
  tolls: esTolls,
  privacy: getPrivacyContent("es"),
  acquisition: getAcquisitionContent("es"),
  routeChecker: getRouteCheckerContent("es"),
  news: {
    title: "Noticias y actualizaciones",
    intro:
      "Seguimos fuentes oficiales y mediáticas fiables sobre la viñeta planificada en Bélgica. Cada artículo resume la información original y añade nuestra opinión independiente — con un enlace directo a la fuente.",
    latestArticles: "Últimos artículos",
    summaryTitle: "Resumen",
    summaryFromSource: "de la fuente original:",
    ourTakeTitle: "Nuestra opinión",
    sourceTitle: "Fuente original",
    readArticle: "Leer artículo",
    backToNews: "Volver a noticias",
    publishedOn: "Publicado",
    sourceLabel: "Fuente",
    sourceDisclaimer:
      "BelgiumVignette.be es un sitio de información independiente y no está vinculado al gobierno belga, Flandes, Valonia ni Bruselas. Este sitio web tiene únicamente fines informativos. Las fechas, tarifas y condiciones mencionadas pueden cambiar. Para la información más actual y oficial, consulte siempre los sitios web de las autoridades belgas competentes.",
    translationDisclaimer:
      "BelgiumVignette.be es un sitio de información independiente y no está vinculado al gobierno belga, Flandes, Valonia ni Bruselas. Este sitio web tiene únicamente fines informativos. Las fechas, tarifas y condiciones mencionadas pueden cambiar. Para la información más actual y oficial, consulte siempre los sitios web de las autoridades belgas competentes.",
    articleAttributionTitle: "Resumen independiente — no es el artículo original",
    articleAttributionIndependence:
      "BelgiumVignette.be es un sitio de información independiente. No estamos afiliados a, respaldados por ni actuamos en nombre del editor original. Esta página resume información de dominio público y añade nuestro propio comentario editorial. No es una reproducción del artículo original.",
    articleAttributionAi:
      "El resumen y la traducción se elaboraron con ayuda de IA y pueden diferir en redacción del original. Consulte siempre la fuente enlazada a continuación para el texto oficial.",
    articleAttributionReadOriginal: "Leer el artículo original en",
    articleAttributionCopyright:
      "El artículo original, las imágenes y otros medios siguen siendo propiedad de sus respectivos titulares de derechos. Enlazamos la fuente de buena fe como referencia. Los créditos de imagen se indican arriba cuando corresponda.",
    tableOfContents: "En esta página",
    relatedArticles: "Más noticias y actualizaciones",
    noArticles: "Aún no hay artículos publicados. Vuelva pronto.",
  },
  newsletter: {
    emailPlaceholder: "Dirección de correo electrónico",
    consentLabel:
      "Autorizo a BelgiumVignette.be a enviarme un único correo electrónico cuando la venta oficial o autorizada de la viñeta vial belga esté disponible. Tras el envío, mis datos se eliminarán de los sistemas activos. Puedo retirar mi consentimiento en cualquier momento.",
    success: "¡Gracias! Está suscrito.",
    error: "Algo ha fallado. Inténtelo de nuevo.",
    privacyLink: "",
    independenceNote:
      "BelgiumVignette.be es un servicio de información independiente y no está afiliado al gobierno belga. Actualmente no vendemos la viñeta vial belga.",
    sticky: {
      teaser: "La viñeta aún no está a la venta — reciba un aviso cuando empiece la venta",
      cta: "Suscribirse →",
      closeLabel: "Cerrar",
    },
    intents: {
      home: {
        title:
          "Reciba un aviso en cuanto empiece la venta oficial de la viñeta belga",
        description:
          "Suscríbase a un aviso gratuito por correo de BelgiumVignette.be, un sitio de información independiente. No somos una entidad pública ni vendemos viñetas. Recibirá un solo aviso cuando la venta autorizada esté disponible.",
        benefits: [
          "Un solo aviso cuando empiece la venta autorizada",
          "Enlace a un canal de compra reconocido",
          "Sin correos innecesarios",
        ],
        submit: "Manténganme informado",
      },
      prices: {
        title:
          "Reciba un aviso en cuanto empiece la venta oficial de la viñeta belga",
        description:
          "Suscríbase a un aviso gratuito por correo de BelgiumVignette.be, un sitio de información independiente. No somos una entidad pública ni vendemos viñetas. Recibirá un solo aviso cuando la venta autorizada esté disponible.",
        benefits: [
          "Un solo aviso cuando empiece la venta autorizada",
          "Enlace a un canal de compra reconocido",
          "Sin correos innecesarios",
        ],
        submit: "Manténganme informado",
      },
      buy: {
        title:
          "Avísenme en cuanto la viñeta belga esté a la venta",
        description:
          "Suscríbase a un aviso gratuito por correo de BelgiumVignette.be, un sitio de información independiente. No somos una entidad pública ni vendemos viñetas. Recibirá un solo aviso cuando la venta autorizada esté disponible.",
        benefits: [],
        submit: "Manténganme informado",
      },
      foreign: {
        title:
          "Avísenme cuando los coches extranjeros puedan registrar su viñeta",
        description:
          "Suscríbase a un aviso gratuito por correo de BelgiumVignette.be, un sitio de información independiente. Recibirá un solo aviso cuando la venta autorizada esté disponible.",
        benefits: [
          "Un solo aviso cuando empiece la venta autorizada",
          "Enlace a un canal de compra reconocido",
          "Sin correos innecesarios",
        ],
        submit: "Manténganme informado",
      },
      news: {
        title:
          "Reciba un aviso en cuanto empiece la venta oficial de la viñeta belga",
        description:
          "Suscríbase a un aviso gratuito por correo de BelgiumVignette.be, un sitio de información independiente. Recibirá un solo aviso cuando la venta autorizada esté disponible.",
        benefits: [
          "Un solo aviso cuando empiece la venta autorizada",
          "Enlace a un canal de compra reconocido",
          "Sin correos innecesarios",
        ],
        submit: "Manténganme informado",
      },
      default: {
        title:
          "Reciba un aviso en cuanto empiece la venta oficial de la viñeta belga",
        description:
          "Suscríbase a un aviso gratuito por correo de BelgiumVignette.be, un sitio de información independiente. No somos una entidad pública ni vendemos viñetas. Recibirá un solo aviso cuando la venta autorizada esté disponible.",
        benefits: [
          "Un solo aviso cuando empiece la venta autorizada",
          "Enlace a un canal de compra reconocido",
          "Sin correos innecesarios",
        ],
        submit: "Manténganme informado",
      },
    },
  },
  cookieBanner: {
    title: "Cookies y privacidad",
    description:
      "Almacenamiento esencial para su elección de cookies. Opcional: Vercel Analytics (visitas de página anónimas). Sin analítica antes de que decida.",
    essentialTitle: "Esenciales",
    essentialDescription: "Guarda su preferencia de cookies en localStorage.",
    alwaysOn: "Siempre activas — necesarias para recordar su elección.",
    analyticsTitle: "Analítica (Vercel Analytics)",
    analyticsDescription: "Estadísticas anónimas de visitas de página. Activas solo tras el consentimiento.",
    acceptAll: "Aceptar todo",
    rejectAll: "Rechazar todo",
    savePreferences: "Guardar preferencias",
    manageSettings: "Configuración",
    closeSettings: "Cerrar",
    privacyLink: "Política de privacidad",
  },
  sources: [
    {
      title: "Gobierno flamenco — Viñeta vial a partir del 1 de mayo de 2027",
      url: "https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/wegenvignet-vanaf-1-mei-2027",
      description: "Página oficial sobre la obligación, tarifas y compra a partir del 2 de abril de 2027",
    },
    {
      title: "Viapass — peaje por kilómetro para camiones",
      url: "https://www.viapass.be",
      description: "Sistema existente para vehículos de más de 3,5 toneladas (no es la viñeta de turismos)",
    },
    {
      title: "Comisión Europea — tarificación viaria",
      url: "https://transport.ec.europa.eu/transport-modes/road/road-charging_en",
      description: "Marco de la UE para peajes y no discriminación",
    },
  ],
};

export default dictionary;
