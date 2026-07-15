import type { VignetteProductPages } from "./types";

const pages: VignetteProductPages = {
  dailyVignette: {
    title: "Viñeta diaria Bélgica 2027",
    intro:
      "La viñeta diaria está prevista para trayectos cortos en las carreteras principales belgas — por ejemplo una excursión de un día, un tránsito o un fin de semana. Las tarifas que figuran a continuación se basan en planes publicados (marzo de 2026) y pueden cambiar antes de su entrada en vigor el 1 de mayo de 2027.",
    metaTitle: "Viñeta diaria Bélgica 2027 — precio €9 por día (concepto)",
    metaDescription:
      "Viñeta diaria prevista para Bélgica desde €9 por día. Para trayectos cortos en autopistas y carreteras regionales. Precios conceptuales según planes de marzo de 2026 — las tarifas definitivas pueden cambiar.",
    navLabel: "Viñeta diaria",
    sections: [
      {
        id: "what-is-daily",
        title: "¿Qué es la viñeta diaria?",
        paragraphs: [
          "Según los planes, la viñeta diaria da 24 horas de acceso a la red de viñetas belga: autopistas, anillos viarios y carreteras regionales donde el límite es de 70 km/h o más.",
          "El sistema será digital y estará vinculado a su matrícula — no habrá pegatina física en el parabrisas.",
        ],
      },
      {
        id: "who-needs-it",
        title: "¿Para quién está pensada la viñeta diaria?",
        paragraphs: [
          "La viñeta diaria encaja con usuarios ocasionales: turistas, conductores de paso, un desplazamiento laboral puntual o un día de compras al otro lado de la frontera.",
          "Si circula con más frecuencia por Bélgica, según los planes una viñeta de 10 días, mensual o anual resultará más económica.",
        ],
      },
      {
        id: "concept-prices",
        title: "Precios conceptuales — aún no tarifas definitivas",
        paragraphs: [
          "Todos los importes de esta página se basan en anuncios de marzo de 2026. Las tarifas definitivas solo se fijarán tras la aprobación de las regiones y la Comisión Europea.",
          "Consulte siempre fuentes oficiales antes de su viaje en mayo de 2027.",
        ],
      },
    ],
    priceTableTitle: "Tarifa diaria prevista",
    priceTable: [{ label: "1 día", value: "€9" }],
    compareTableTitle: "Otros periodos cortos (a modo de comparación)",
    compareTable: [
      { label: "10 días", value: "€12" },
      { label: "1 mes", value: "€19" },
      { label: "2 meses", value: "€30" },
    ],
    relatedPagesTitle: "Otros tipos de viñeta",
    faqs: [
      {
        question: "¿La viñeta diaria cubre un día natural?",
        answer:
          "Según los planes, compra una viñeta para un periodo elegido de 24 horas o un día natural — las reglas exactas se anunciarán al lanzar el sistema de venta.",
      },
      {
        question: "¿Los extranjeros también deben comprar una viñeta diaria?",
        answer:
          "Sí. Las normas de la UE exigen igualdad de trato. Las matrículas extranjeras deberán, según los planes, tener una viñeta válida en las carreteras principales belgas.",
      },
      {
        question: "¿€9 ya es definitivo?",
        answer:
          "No. €9 es la tarifa conceptual prevista según los planes de marzo de 2026. Los precios definitivos pueden ajustarse.",
      },
    ],
  },
  monthlyVignette: {
    title: "Viñeta mensual Bélgica 2027",
    intro:
      "La viñeta mensual está prevista para conductores que circulan varias semanas por las carreteras principales belgas — por ejemplo por trabajos temporales, vacaciones o una estancia prolongada. Las tarifas son precios conceptuales según planes de marzo de 2026.",
    metaTitle: "Viñeta mensual Bélgica 2027 — desde €19 al mes (concepto)",
    metaDescription:
      "Viñeta mensual prevista para Bélgica desde €19 al mes, 2 meses €30. Precios conceptuales para autopistas y carreteras regionales a partir del 1 de mayo de 2027.",
    navLabel: "Viñeta mensual",
    sections: [
      {
        id: "what-is-monthly",
        title: "¿Qué es la viñeta mensual?",
        paragraphs: [
          "Según los planes, la viñeta mensual da acceso a la red de viñetas belga durante aproximadamente un mes natural.",
          "También está prevista una tarifa de dos meses (€30) para estancias algo más largas sin comprar directamente una viñeta anual.",
        ],
      },
      {
        id: "who-needs-it",
        title: "¿Para quién conviene una viñeta mensual?",
        paragraphs: [
          "Los desplazados que trabajan temporalmente en Bélgica, expatriados con una misión corta o vacacionistas que permanecen un mes en el país pueden beneficiarse de una viñeta mensual o bimensual.",
          "Para uso ocasional, una viñeta diaria o de 10 días es más barata; para uso permanente, la viñeta anual es más ventajosa.",
        ],
      },
      {
        id: "concept-prices",
        title: "Precios conceptuales",
        paragraphs: [
          "Los importes que figuran a continuación son tarifas previstas, no legislación definitiva. Pueden cambiar antes del inicio en mayo de 2027.",
        ],
      },
    ],
    priceTableTitle: "Tarifas mensuales previstas",
    priceTable: [
      { label: "1 mes", value: "€19" },
      { label: "2 meses", value: "€30" },
    ],
    compareTableTitle: "Otras duraciones (a modo de comparación)",
    compareTable: [
      { label: "1 día", value: "€9" },
      { label: "10 días", value: "€12" },
    ],
    relatedPagesTitle: "Otros tipos de viñeta",
    faqs: [
      {
        question: "¿Cuál es la diferencia entre 1 mes y 2 meses?",
        answer:
          "Según los planes, puede elegir entre una viñeta mensual (€19) y una viñeta bimensual (€30). La tarifa de dos meses es más económica por día si permanece más tiempo.",
      },
      {
        question: "¿Hay una tarifa distinta por norma de emisión para viñetas cortas?",
        answer:
          "Para periodos cortos (día, mes), según los planes actuales están previstos importes fijos. La viñeta anual sí depende de la norma Euro de emisión de su vehículo.",
      },
      {
        question: "¿Son definitivos estos precios?",
        answer:
          "No. Son precios conceptuales basados en los planes de marzo de 2026.",
      },
    ],
  },
  annualVignette: {
    title: "Viñeta anual Bélgica 2027",
    intro:
      "La viñeta anual está prevista para usuarios habituales de las carreteras principales belgas. El precio depende de la norma de emisión de su vehículo. Las tarifas que figuran a continuación son precios conceptuales según planes de marzo de 2026.",
    metaTitle: "Viñeta anual Bélgica 2027 — €90–€125 al año (concepto)",
    metaDescription:
      "Viñeta anual prevista para Bélgica: €100 para Euro 4+, €90 eléctrico, €125 para coches más antiguos. Precios conceptuales por norma de emisión a partir del 1 de mayo de 2027.",
    navLabel: "Viñeta anual",
    sections: [
      {
        id: "what-is-annual",
        title: "¿Qué es la viñeta anual?",
        paragraphs: [
          "Según los planes, la viñeta anual da 12 meses de acceso a autopistas, anillos viarios y carreteras regionales en Bélgica.",
          "En Flandes, más del 97 % de los turismos son al menos Euro 4 — para ellos está previsto €100 al año.",
        ],
      },
      {
        id: "emission-bands",
        title: "Precios por norma de emisión",
        paragraphs: [
          "A diferencia de las viñetas cortas, la tarifa anual varía según los planes en función de la norma Euro de emisión de su vehículo.",
          "Los vehículos totalmente eléctricos y de hidrógeno obtienen la tarifa más baja (€90). Los vehículos más antiguos hasta Euro 3 pagan el importe más alto (€125).",
        ],
      },
      {
        id: "concept-prices",
        title: "Precios conceptuales",
        paragraphs: [
          "Estas tarifas se basan en anuncios de marzo de 2026 y pueden ajustarse. Los importes definitivos seguirán a la aprobación de las regiones y Europa.",
        ],
      },
    ],
    priceTableTitle: "Viñeta anual",
    priceTable: [
      { label: "Euro 4 y superior", value: "€100 / año", note: "97 %+ de los coches flamencos" },
      { label: "Eléctrico / hidrógeno", value: "€90 / año" },
      { label: "Coches más antiguos (hasta Euro 3)", value: "€125 / año" },
    ],
    compareTableTitle: "Periodos cortos (a modo de comparación)",
    compareTable: [
      { label: "1 día", value: "€9" },
      { label: "10 días", value: "€12" },
      { label: "1 mes", value: "€19" },
      { label: "2 meses", value: "€30" },
    ],
    relatedPagesTitle: "Otros tipos de viñeta",
    faqs: [
      {
        question: "¿Los belgas también deben comprar una viñeta anual?",
        answer:
          "Sí. Las normas de la UE prohíben una viñeta solo para extranjeros. Los belgas también pagan, pero Flandes prevé compensación mediante la reforma del impuesto de circulación.",
      },
      {
        question: "¿€100 se aplica a todos los coches?",
        answer:
          "No. Solo a vehículos con al menos Euro 4. Los coches eléctricos pagan según los planes €90; los coches más antiguos hasta Euro 3 pagan €125.",
      },
      {
        question: "¿Son precios definitivos?",
        answer:
          "No. Son tarifas conceptuales previstas que aún pueden cambiar.",
      },
    ],
  },
  electricVignette: {
    title: "Viñeta eléctrica Bélgica 2027",
    intro:
      "Los propietarios de vehículos totalmente eléctricos y de hidrógeno pagarán según los planes la tarifa anual más baja: €90. Es un precio conceptual basado en anuncios de marzo de 2026 — no una tarifa definitiva.",
    metaTitle: "Viñeta eléctrica Bélgica 2027 — €90 al año (concepto)",
    metaDescription:
      "Viñeta prevista para coches eléctricos en Bélgica: €90 al año, la tarifa anual más baja. Precio conceptual según planes de marzo de 2026. Compare con otras normas de emisión.",
    navLabel: "Viñeta eléctrica",
    sections: [
      {
        id: "ev-rate",
        title: "Tarifa anual más baja para vehículos eléctricos",
        paragraphs: [
          "Los vehículos totalmente eléctricos y de hidrógeno obtienen según los planes la viñeta anual más económica: €90 al año.",
          "Son €10 menos que la mayoría de los coches Euro 4+ (€100) y €35 menos que los vehículos más antiguos (€125).",
        ],
      },
      {
        id: "why-not-free",
        title: "¿Por qué pagan los conductores de vehículos eléctricos?",
        paragraphs: [
          "Los vehículos eléctricos usan las carreteras como los demás coches. La tarifa reducida premia las menores emisiones, pero la viñeta sigue siendo según los planes obligatoria.",
          "El ministro flamenco Ben Weyts subrayó que €90 es considerablemente menos que otras categorías — pero no cero.",
        ],
      },
      {
        id: "concept-prices",
        title: "Precios conceptuales",
        paragraphs: [
          "€90 es una tarifa conceptual prevista. Los precios definitivos y posibles cambios se anunciarán antes del inicio en mayo de 2027.",
        ],
      },
    ],
    priceTableTitle: "Eléctrico / hidrógeno — viñeta anual",
    priceTable: [{ label: "Eléctrico / hidrógeno", value: "€90 / año" }],
    compareTableTitle: "Otras tarifas anuales (a modo de comparación)",
    compareTable: [
      { label: "Euro 4 y superior", value: "€100 / año", note: "97 %+ de los coches flamencos" },
      { label: "Coches más antiguos (hasta Euro 3)", value: "€125 / año" },
    ],
    relatedPagesTitle: "Otros tipos de viñeta",
    faqs: [
      {
        question: "¿€90 también aplica a los híbridos enchufables?",
        answer:
          "No. Según los planes, la tarifa para vehículos eléctricos aplica a vehículos totalmente eléctricos y de hidrógeno. Los híbridos enchufables quedan bajo la norma de emisión de su motor de combustión.",
      },
      {
        question: "¿Hay descuento para vehículos eléctricos en viñetas cortas?",
        answer:
          "Para viñetas diarias, mensuales y cortas, según los planes actuales están previstos importes fijos, independientemente del tipo de motor. La tarifa reducida para vehículos eléctricos aplica a la viñeta anual.",
      },
      {
        question: "¿€90 es definitivo?",
        answer:
          "No. Es un precio conceptual basado en los planes de marzo de 2026.",
      },
    ],
  },
};

export default pages;
