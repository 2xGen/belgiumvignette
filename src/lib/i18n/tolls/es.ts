import type { Dictionary } from "../types";

export const esTolls: Dictionary["tolls"] = {
  title: "Peajes en Bélgica: autopistas de pago y la viñeta de 2027",
  intro:
    "¿Viaja a Bélgica en coche? Descubra si las autopistas belgas son de peaje, cómo funcionará la viñeta vial prevista para 2027 y qué tarifas pueden aplicarse a su vehículo.",
  blocks: [
    {
      type: "section",
      id: "paid-motorways",
      title: "¿Las autopistas son de pago en Bélgica?",
      paragraphs: [
        "Para los turismos, Bélgica no utiliza actualmente un sistema general de viñeta de autopista como Austria o Suiza.",
        "Se espera que eso cambie en 2027.",
        "Bélgica planea introducir una viñeta vial digital a partir del 1 de mayo de 2027 para los vehículos que circulen por las autopistas y carreteras regionales cubiertas. Se aplicaría tanto a vehículos belgas como a vehículos matriculados en el extranjero.",
        "Si piensa conducir en Bélgica después de esa fecha, consulte nuestra guía completa sobre la [[home|viñeta Bélgica 2027]].",
      ],
    },
    {
      type: "summary",
      title: "En resumen",
      items: [
        {
          label: "Hoy",
          value: "No hay viñeta vial general para turismos.",
        },
        {
          label: "Desde el 1 de mayo de 2027",
          value: "Está prevista una viñeta digital.",
        },
        {
          label: "Vehículos afectados",
          value:
            "Vehículos de motor con al menos cuatro ruedas de hasta 3,5 toneladas.",
        },
        {
          label: "Coches extranjeros",
          value: "También afectados.",
        },
        {
          label: "Motos",
          value: "No cubiertas por esta obligación según los planes actuales.",
        },
        {
          label: "Compra",
          value:
            "En línea, con apertura de ventas prevista a partir del 1 de marzo de 2027.",
        },
      ],
    },
    {
      type: "section",
      id: "toll-or-vignette",
      title: "Peaje o viñeta: ¿cómo funcionará el sistema belga?",
      paragraphs: [
        "El sistema belga previsto no es un peaje clásico en el que se paga en cada barrera.",
        "Se trata de una viñeta vial que da acceso a las carreteras cubiertas durante un período determinado.",
        "A diferencia de un adhesivo para el parabrisas, la viñeta belga será digital y estará vinculada a la matrícula del vehículo.",
        "No necesitará un adhesivo físico. Al comprarla, deberá introducir correctamente la matrícula.",
        "Para entender el funcionamiento del nuevo sistema, consulte nuestra guía sobre la [[home|viñeta vial en Bélgica]].",
      ],
    },
    {
      type: "section",
      id: "covered-roads",
      title: "¿Qué carreteras serán de pago en Bélgica en 2027?",
      paragraphs: [
        "La viñeta está prevista para el uso de las autopistas belgas y las carreteras regionales cubiertas.",
        "Los conductores que circulen solo por carreteras locales no deberían necesitar viñeta.",
        "Quien atraviese Bélgica por autopista —por ejemplo hacia Francia, los Países Bajos, Alemania o Luxemburgo— deberá tener en cuenta la nueva obligación cuando entre en vigor.",
        "Los detalles prácticos y la red exacta de carreteras aún pueden precisarse antes del lanzamiento.",
      ],
    },
    {
      type: "pricing",
      id: "prices",
      title: "¿Cuánto costarán los peajes en Bélgica?",
      paragraphs: [
        "No debería haber un precio único por trayecto. El conductor compra una viñeta válida durante un período elegido.",
        "Las tarifas publicadas dependen de la norma Euro del vehículo y de la duración elegida.",
      ],
      durationHeader: "Duración",
      priceHeader: "Tarifa",
      tables: [
        {
          title: "Tarifas previstas para vehículos Euro 4 y superiores",
          rows: [
            { label: "1 día", value: "€9" },
            { label: "10 días", value: "€12" },
            { label: "1 mes", value: "€19" },
            { label: "2 meses", value: "€30" },
            { label: "1 año", value: "€100" },
          ],
        },
        {
          title: "Tarifas previstas para vehículos Euro 0 a Euro 3",
          rows: [
            { label: "1 día", value: "€11.25" },
            { label: "10 días", value: "€15" },
            { label: "1 mes", value: "€23.75" },
            { label: "2 meses", value: "€37.50" },
            { label: "1 año", value: "€125" },
          ],
        },
        {
          title: "Tarifas previstas para vehículos de cero emisiones",
          rows: [
            { label: "1 día", value: "€8.10" },
            { label: "10 días", value: "€10.80" },
            { label: "1 mes", value: "€17.10" },
            { label: "2 meses", value: "€27" },
            { label: "1 año", value: "€90" },
          ],
        },
      ],
      linkParagraph:
        "Consulte importes, categorías de vehículos y las últimas actualizaciones en nuestra página de [[prices|precios de la viñeta Bélgica]].",
      notice:
        "Atención: el sistema aún debe completar los últimos pasos legislativos. Las reglas pueden cambiar antes de su entrada en vigor.",
    },
    {
      type: "section",
      id: "transit",
      title: "¿Hay que pagar para atravesar Bélgica en coche?",
      paragraphs: [
        "A partir del 1 de mayo de 2027, si el sistema entra en vigor como está previsto, los conductores que usen las autopistas o carreteras regionales cubiertas necesitarán una viñeta válida.",
        "Eso también afecta a quienes solo atraviesan Bélgica para llegar a otro país.",
        "Un coche matriculado en Francia, los Países Bajos o Alemania no queda automáticamente exento porque el conductor no viva en Bélgica.",
        "La viñeta está prevista para los vehículos cubiertos que usen la red vial, independientemente del país de matriculación.",
        "Consulte nuestra guía para [[foreign|conductores extranjeros en Bélgica]] sobre las reglas aplicables a vehículos extranjeros.",
      ],
    },
    {
      type: "section",
      id: "french-cars",
      title: "¿Los coches franceses tendrán que pagar en las autopistas belgas?",
      paragraphs: [
        "Los coches franceses seguirán las mismas reglas de viñeta que los demás coches extranjeros en las carreteras cubiertas.",
        "Un conductor francés en una autopista belga a partir del 1 de mayo de 2027 necesitará, según los planes actuales, una viñeta válida.",
        "Para una estancia corta o un simple tránsito, no es necesario comprar automáticamente una viñeta anual. También están previstas duraciones de 1 día, 10 días, 1 mes y 2 meses.",
      ],
    },
    {
      type: "section",
      id: "foreign-cars",
      title: "¿Los coches extranjeros tendrán que pagar?",
      paragraphs: [
        "Sí. Los planes aplican explícitamente la viñeta a los usuarios extranjeros de las autopistas y carreteras regionales cubiertas.",
        "Eso incluye vehículos de:",
      ],
      list: [
        "Francia",
        "los Países Bajos",
        "Alemania",
        "Luxemburgo",
        "el Reino Unido",
        "otros países europeos y no europeos",
      ],
    },
    {
      type: "section",
      id: "motorcycles",
      title: "¿Las motos tendrán que pagar un peaje en Bélgica?",
      paragraphs: [
        "La viñeta prevista cubre vehículos de motor con al menos cuatro ruedas y una masa máxima técnicamente admisible de no más de 3,5 toneladas.",
        "Por tanto, las motos no están cubiertas por esta obligación según los planes actuales.",
        "Otras categorías de vehículos pueden seguir reglas distintas. Consulte la lista completa de [[exemptions|exenciones de la viñeta belga]] antes de viajar.",
      ],
    },
    {
      type: "section",
      id: "campervans",
      title: "Autocaravanas y furgonetas: ¿necesitan viñeta?",
      paragraphs: [
        "Las autocaravanas y algunas furgonetas de hasta 3,5 toneladas entran en el sistema previsto cuando usan las autopistas y carreteras regionales cubiertas.",
        "Los criterios clave son la categoría del vehículo y la masa máxima técnicamente admisible.",
        "Los vehículos de más de 3,5 toneladas pueden estar sujetos a otro sistema de tarificación vial.",
      ],
    },
    {
      type: "section",
      id: "trucks",
      title: "¿Y los camiones de más de 3,5 toneladas?",
      paragraphs: [
        "La nueva viñeta para vehículos de hasta 3,5 toneladas no sustituye el sistema belga existente para vehículos pesados.",
        "Bélgica ya tiene un peaje por kilómetro para camiones en el marco de Viapass.",
        "Así que la distinción es:",
      ],
      list: [
        "Coches, furgonetas ligeras y algunas autocaravanas hasta 3,5 t → viñeta vial prevista a partir de 2027.",
        "Vehículos pesados cubiertos de más de 3,5 t → peaje por kilómetro existente.",
      ],
    },
    {
      type: "section",
      id: "buy",
      title: "¿Dónde comprar la viñeta para las autopistas belgas?",
      paragraphs: [
        "La viñeta aún no está a la venta.",
        "Según la información oficial publicada actualmente, la compra debería ser posible a partir del 1 de marzo de 2027, antes de la entrada en vigor prevista el 1 de mayo.",
        "Debería estar disponible en línea a través del sitio oficial o de una organización partner reconocida.",
        "Evite comprar una pretendida viñeta Bélgica 2027 en un sitio no verificado antes de la apertura oficial de las ventas.",
        "Seguimos la apertura de las ventas y publicaremos el enlace cuando esté disponible. Consulte [[buy|dónde comprar la viñeta Bélgica]] para la información más reciente.",
      ],
    },
    {
      type: "section",
      id: "enforcement",
      title: "¿Cómo se controlará la viñeta?",
      paragraphs: [
        "La viñeta será totalmente digital y estará vinculada a la matrícula del vehículo.",
        "No necesitará un adhesivo físico en el parabrisas.",
        "Introducir correctamente la matrícula al comprar es esencial. Circular por una carretera sujeta a viñeta sin una válida puede acarrear una multa cuando el control esté plenamente activo.",
        "Consulte nuestra página sobre las [[fines|multas de la viñeta Bélgica]] para las últimas reglas de control y sanción.",
      ],
    },
    {
      type: "section",
      id: "clarification",
      title: "Bélgica 2027: ¿peaje, viñeta o autopistas gratuitas?",
      paragraphs: [
        "El cambio puede confundir, porque términos como peaje Bélgica, autopista de pago Bélgica y viñeta Bélgica se usan a menudo para el mismo cambio.",
        "En la práctica, el sistema previsto no es un peaje tradicional por distancia para turismos.",
        "Es una viñeta digital válida durante un período elegido.",
        "Podrá elegir la duración que se ajuste a su viaje: un día para un paso muy corto, 10 días para una estancia, uno o dos meses para un período más largo, o una viñeta anual para un uso regular.",
      ],
    },
  ],
  faqTitle: "Preguntas frecuentes sobre los peajes en Bélgica",
  faqs: [
    {
      question: "¿Hay peajes en Bélgica?",
      answer:
        "Para los turismos, actualmente no existe una viñeta vial general comparable a los sistemas de algunos otros países europeos. Está prevista una viñeta digital a partir del 1 de mayo de 2027 para el uso de las autopistas y carreteras regionales cubiertas.",
    },
    {
      question: "¿Las autopistas belgas serán de pago en 2027?",
      answer:
        "El uso de las autopistas y carreteras regionales cubiertas requerirá una viñeta para los vehículos sujetos al nuevo sistema si entra en vigor como está previsto el 1 de mayo de 2027.",
    },
    {
      question: "¿Cuánto costará la autopista en Bélgica?",
      answer:
        "El precio no se calcula por kilómetro para los coches cubiertos. Para un vehículo Euro 4 o superior, las tarifas publicadas van actualmente de €9 por 1 día a €100 por 1 año. Los vehículos más antiguos y los de cero emisiones tienen tarifas distintas.",
    },
    {
      question: "¿Necesito una viñeta para ir a Bélgica?",
      answer:
        "Depende de la fecha y de las carreteras que use. La viñeta está prevista a partir del 1 de mayo de 2027 para los vehículos cubiertos en autopistas y carreteras regionales. Si solo usa carreteras locales, no debería necesitar viñeta.",
    },
    {
      question: "¿Dónde comprar la viñeta de autopista Bélgica?",
      answer:
        "Las ventas aún no están abiertas. Se espera que empiecen el 1 de marzo de 2027 a través del sitio oficial y de organizaciones partner reconocidas. Consulte nuestra página Cómo comprar para seguir la apertura de las ventas.",
    },
    {
      question: "¿Las motos deben pagar en las autopistas belgas?",
      answer:
        "La viñeta prevista se aplica a vehículos de motor con al menos cuatro ruedas de hasta 3,5 toneladas. Por tanto, las motos no están cubiertas por esta obligación según los planes actuales.",
    },
  ],
  closing: {
    title: "Prepare su viaje a Bélgica",
    paragraphs: [
      "El sistema belga debería entrar en vigor el 1 de mayo de 2027, pero varios detalles aún pueden cambiar antes del lanzamiento.",
      "Antes de salir, compruebe:",
    ],
    checklist: [
      "si su vehículo está cubierto;",
      "qué carreteras va a usar;",
      "la duración de viñeta que necesita;",
      "la tarifa aplicable a su vehículo;",
      "que compra en un canal reconocido.",
    ],
    links: [
      { href: "home", label: "Viñeta Bélgica 2027" },
      { href: "prices", label: "Precios de la viñeta" },
      { href: "buy", label: "Cómo comprar la viñeta belga" },
    ],
  },
};
