import type { BaseDictionary } from "../types";

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
    news: "Noticias y actualizaciones",
    privacy: "Privacidad",
  },
  meta: {
    home: {
      title: "Viñeta Bélgica 2027: ¿necesita una viñeta para Bélgica?",
      description:
        "Bélgica planea introducir una viñeta vial digital a partir del 1 de mayo de 2027. Descubra si la necesita, cuánto cuesta, quién está exento y cuándo empieza la venta.",
    },
    prices: {
      title: "Precios de la viñeta de Bélgica 2027 — tarifas diarias, mensuales y anuales",
      description:
        "Precios previstos de la viñeta en Bélgica: €100/año, corta duración desde €9/día. Norma Euro de emisiones explicada de forma sencilla.",
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
      title: "Comprar la viñeta de Bélgica — venta prevista el 1 de marzo de 2027",
      description:
        "Según los planes actuales, la venta en línea de la viñeta belga está prevista a partir del 1 de marzo de 2027. Obligatoria desde el 1 de mayo de 2027. Fuente oficial: Gobierno flamenco.",
    },
    news: {
      title: "Noticias sobre la viñeta de Bélgica — fuentes fiables explicadas",
      description:
        "Resúmenes independientes de noticias oficiales sobre la viñeta belga con nuestra opinión editorial. Enlaces a las fuentes originales.",
    },
    privacy: {
      title: "Política de privacidad — BelgiumVignette.be",
      description:
        "Cómo BelgiumVignette.be gestiona cookies, analítica, datos del boletín y sus derechos RGPD.",
    },
  },
  common: {
    disclaimer:
      "BelgiumVignette.be es un sitio de información independiente. No estamos afiliados al gobierno belga, Flandes, Valonia ni Bruselas.",
    lastUpdated: "Última actualización",
    lastUpdatedDate: "14 August 2026",
    lastUpdatedIso: "2026-08-14",
    readMore: "Leer más",
    relatedSite: "https://tolls.be/en",
    relatedSiteLabel: "Tolls.be — información independiente sobre peajes en Bélgica",
    backToHome: "Volver al inicio",
    plannedNotice:
      "Los planes presentados en marzo de 2026 pueden cambiar. Seguimos las fuentes oficiales y actualizamos esta página cuando hay novedades.",
    independentSite: "Info viñeta vial belga",
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
        title: "¿Quién la necesita?",
        summary:
          "Turismos de hasta 3,5 toneladas, incluidos vehículos extranjeros — incluso si solo está de paso.",
        href: "foreign",
      },
      {
        title: "¿Quién está exento?",
        summary:
          "Motos, camiones (peaje por km), tractores, autocares, servicios de emergencia y policía.",
        href: "exemptions",
      },
      {
        title: "¿Cuánto cuesta?",
        summary:
          "Viñeta anual desde €90 (eléctricos) hasta €125 (coches antiguos). Corta duración desde €9/día.",
        href: "prices",
      },
    ],
    pricingTitle: "Tarifas previstas de un vistazo",
    pricingSubtitle:
      "Basado en los planes publicados (marzo de 2026). Los importes finales pueden cambiar.",
    annualTableTitle: "Viñeta anual",
    shortTermTableTitle: "Corta duración",
    annualPricing: [
      { label: "Euro 4 y superior", value: "€100 / año", note: "97%+ de los coches flamencos" },
      { label: "Eléctrico / hidrógeno", value: "€90 / año" },
      { label: "Coches antiguos (hasta Euro 3)", value: "€125 / año" },
    ],
    shortTermPricing: [
      { label: "1 día", value: "€9" },
      { label: "10 días", value: "€12" },
      { label: "1 mes", value: "€19" },
      { label: "2 meses", value: "€30" },
    ],
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
        title: "Viñeta obligatoria",
        description:
          "Viñeta digital obligatoria en autopistas y carreteras principales regionales.",
      },
      {
        date: "1 July 2027",
        title: "Multas aplicadas",
        description:
          "Finaliza el período de tolerancia. Las cámaras ANPR y las unidades móviles comienzan el control.",
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
        question: "¿Se aplica a coches extranjeros?",
        answer:
          "Sí. Las normas de la UE exigen igualdad de trato. Conductores belgas y extranjeros deben pagar.",
      },
      {
        question: "¿Los motociclistas pagan?",
        answer:
          "No. Las motos están explícitamente exentas según los anuncios de los ministros Weyts (Flandes) y Desquesnes (Valonia).",
      },
      {
        question: "¿Cuándo puedo comprarla?",
        answer:
          "Según los planes actuales, la venta en línea está prevista a partir del 1 de marzo de 2027. La viñeta sería obligatoria desde el 1 de mayo de 2027. Las condiciones definitivas pueden cambiar.",
      },
    ],
    sourcesTitle: "Fuentes oficiales",
  },
  prices: {
    title: "Precios y duraciones",
    intro:
      "Resumen de los precios previstos de la viñeta según la norma Euro de emisiones. Basado en los anuncios de marzo de 2026 — los detalles pueden cambiar.",
    sections: [
      {
        id: "annual",
        title: "Viñeta anual",
        paragraphs: [
          "Para usuarios habituales de las principales carreteras de Bélgica. El precio depende de la clase Euro de emisiones de su vehículo.",
        ],
      },
      {
        id: "short",
        title: "Opciones de corta duración",
        paragraphs: [
          "Para viajes ocasionales — vacaciones, fines de semana — se prevén viñetas de menor duración.",
          "Los coches más antiguos y contaminantes (hasta Euro 3) pagan tarifas ligeramente más altas.",
        ],
      },
      {
        id: "road-tax",
        title: "Interacción con el impuesto de circulación (Flandes)",
        paragraphs: [
          "Flandes reforma simultáneamente el impuesto anual de circulación. Aproximadamente la mitad de los automovilistas flamencos podrían pagar más en conjunto — hasta €100/año adicionales.",
        ],
      },
    ],
    annualTable: [
      { label: "Euro 4 y superior", value: "€100", note: "Año" },
      { label: "Eléctrico / hidrógeno", value: "€90", note: "Año" },
      { label: "Hasta Euro 3", value: "€125", note: "Año" },
    ],
    shortTermTable: [
      { label: "1 día", value: "€9" },
      { label: "10 días", value: "€12" },
      { label: "1 mes", value: "€19" },
      { label: "2 meses", value: "€30" },
    ],
    euroNormTitle: "Normas Euro explicadas",
    euroNormCategoryHeader: "Norma",
    euroNormDescriptionHeader: "Descripción",
    euroNormItems: [
      { norm: "Euro 4+", description: "Coches desde ~2005–2006 en adelante. La mayoría de los vehículos en circulación." },
      { norm: "Eléctrico / H₂", description: "Cero emisiones. Tarifa prevista más baja." },
      { norm: "Euro 3 e inferior", description: "Vehículos más antiguos y contaminantes." },
    ],
    vignettePagesTitle: "Por tipo de viñeta",
    faqs: [
      {
        question: "¿Las furgonetas comerciales son deducibles?",
        answer: "Según los planes, el coste de la viñeta para furgonetas profesionales podría ser totalmente deducible como gasto empresarial.",
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
      "Según los planes actuales, la venta en línea está prevista a partir del 1 de marzo de 2027. La viñeta sería obligatoria desde el 1 de mayo de 2027. Las condiciones definitivas y el portal oficial de venta pueden cambiar.",
    sections: [
      {
        id: "when",
        title: "¿Cuándo se abre la venta?",
        paragraphs: [
          "El Gobierno flamenco indica que podrá comprar la viñeta en línea a partir del 1 de marzo de 2027, en el sitio oficial o a través de un socio autorizado.",
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
    statusBadge: "Venta prevista el 1 de marzo de 2027",
    officialSourceLabel: "Fuente oficial",
    steps: [
      {
        title: "Espere la venta oficial",
        description: "Compra en línea prevista a partir del 1 de marzo de 2027, según el Gobierno flamenco.",
      },
      { title: "Registre su matrícula", description: "Sistema digital — sin adhesivo en el parabrisas." },
      { title: "Elija la duración", description: "Día, 10 días, mes, 2 meses o anual." },
      { title: "Conduzca con viñeta válida", description: "Las cámaras verifican automáticamente desde el 1 de mayo de 2027." },
    ],
    faqs: [
      {
        question: "¿Puedo reservar ahora?",
        answer:
          "No. Según los planes actuales, la venta en línea empieza el 1 de marzo de 2027. Suscríbase al boletín para recibir el canal oficial cuando se anuncie.",
      },
      {
        question: "¿Cuándo es obligatoria la viñeta?",
        answer:
          "Según los planes, desde el 1 de mayo de 2027 en autopistas y carreteras regionales belgas. Hay un periodo de tolerancia previsto del 1 de mayo al 1 de julio de 2027.",
      },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    intro: "BelgiumVignette.be respeta su privacidad. Así gestionamos sus datos.",
    sections: [
      {
        id: "controller",
        title: "Responsable del tratamiento",
        paragraphs: ["BelgiumVignette.be — contacto: info@tolls.be."],
      },
      {
        id: "newsletter",
        title: "Boletín",
        paragraphs: [
          "Correo electrónico, idioma y fecha de consentimiento almacenados en Supabase (alojamiento en la UE). Solo para novedades sobre la viñeta.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies, analítica y consentimiento",
        paragraphs: [
          "Almacenamiento esencial: guardamos su preferencia de cookies en localStorage. Base legal: interés legítimo (art. 6(1)(f) RGPD) y/o consentimiento cuando sea necesario.",
          "Analítica (opcional): Vercel Analytics recopila visitas de página anónimas. Solo se carga tras el consentimiento del banner. Base legal: consentimiento (art. 6(1)(a) RGPD). Retirar mediante Configuración de cookies en el pie de página.",
          "Google Search Console y Bing Webmaster Tools: solo etiquetas meta de verificación de propiedad — sin cookies de seguimiento.",
          "Conservación: hasta que borre el almacenamiento o actualicemos esta política (versión 2026-08-04).",
        ],
      },
      {
        id: "news-editorial",
        title: "Noticias, resúmenes y contenido editorial",
        paragraphs: [
          "Nuestra sección de noticias publica resúmenes independientes de información de dominio público sobre la viñeta belga. Estas páginas no son reproducciones de los artículos originales.",
          "Los resúmenes y traducciones pueden elaborarse con ayuda de IA y pueden diferir en redacción de la fuente. Siempre enlazamos al editor original. Nuestro comentario editorial («Nuestra opinión») se redacta de forma independiente y no representa al editor original ni a las autoridades belgas.",
          "Las imágenes en artículos de noticias pueden proceder del artículo original enlazado o de agencias de prensa, con créditos cuando corresponda. Dichos contenidos siguen siendo propiedad de sus titulares de derechos. Los mostramos de buena fe como referencia, junto con un enlace a la fuente. Si cree que su contenido se utiliza incorrectamente, contacte info@tolls.be.",
        ],
      },
      {
        id: "rights",
        title: "Sus derechos (RGPD)",
        paragraphs: ["Acceso, rectificación, supresión, oposición — info@tolls.be."],
      },
    ],
    lastUpdated: "4 August 2026",
  },
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
      "Resumimos fuentes fiables y enlazamos al artículo original. Nuestra opinión es un comentario editorial independiente, no información oficial del gobierno.",
    translationDisclaimer:
      "El resumen y la traducción de esta página se han elaborado con ayuda de IA a partir del artículo original. Consulte siempre la fuente a continuación para la redacción oficial.",
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
    title: "Reciba primero un aviso cuando la viñeta belga esté disponible",
    description: "",
    benefitsIntro: "",
    benefits: [
      "Inicio de la venta oficial",
      "Precios definitivos confirmados",
      "Nuevas normas publicadas",
      "Enlace de compra disponible",
    ],
    emailPlaceholder: "Dirección de correo electrónico",
    consentLabel: "Acepto recibir actualizaciones y he leído la política de privacidad.",
    submit: "Avísenme",
    success: "¡Gracias! Está suscrito.",
    error: "Algo ha fallado. Inténtelo de nuevo.",
    privacyLink: "Política de privacidad",
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
      description: "Página oficial sobre la obligación, tarifas y compra a partir del 1 de marzo de 2027",
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
