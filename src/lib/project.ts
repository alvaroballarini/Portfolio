export type Project = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  status: string;
  year: string;
  role: string;
  tags: string[];
  links: { demo?: string; repo: string };
  problem: string;
  solution: string;
  features: string[];
  decisions: string[];
  impact: string[];
  nextSteps: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "vaulty",
    name: "Vaulty",
    title: "Una vista clara de las finanzas personales",
    summary:
      "Producto full stack para registrar movimientos, definir presupuestos y entender la evolución del dinero desde un único panel.",
    description:
      "Vaulty nació para resolver una necesidad real: transformar registros cotidianos de ingresos y gastos en información útil para tomar decisiones. El flujo principal está operativo y el producto continúa en desarrollo activo.",
    image: "/Vaulty.webp",
    imageAlt:
      "Panel de Vaulty con saldo, ingresos, gastos, presupuestos y movimientos recientes",
    status: "En desarrollo activo",
    year: "2026",
    role: "Diseño y desarrollo full stack",
    tags: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "TanStack Query"],
    links: {
      demo: "https://vaulty-sand.vercel.app/",
      repo: "https://github.com/alvaroballarini/Vaulty",
    },
    problem:
      "Registrar datos financieros no alcanza: la información debe convertirse en saldo, tendencias, límites y próximos movimientos que una persona pueda interpretar rápidamente.",
    solution:
      "Una aplicación full stack organizada por dominios, con cálculos agregados en el servidor y una interfaz que reúne movimientos, presupuestos, recurrencias y evolución histórica.",
    features: [
      "Registro, inicio de sesión y sesiones persistentes con contraseñas protegidas mediante Argon2.",
      "Ingresos y gastos asociados a cuentas y categorías, con actualización automática del panel.",
      "Presupuestos mensuales por categoría con progreso y alertas visuales.",
      "Movimientos recurrentes diarios, semanales o mensuales procesados mediante una tarea programada.",
      "Historial financiero de hasta 36 meses y gráficos para distintos períodos.",
    ],
    decisions: [
      "Separación por dominio para mantener juntas la interfaz, las reglas y el acceso a datos de cada funcionalidad.",
      "Cálculos financieros en PostgreSQL para evitar descargar el historial completo al cliente.",
      "Importes persistidos como Decimal(12, 2) para conservar precisión monetaria.",
      "Consultas del panel ejecutadas en paralelo para reducir el tiempo de carga.",
    ],
    impact: [
      "Flujo principal funcional: autenticación, movimientos, categorías, presupuestos e historial.",
      "Producto documentado con estado real de cada módulo y próximos pasos explícitos.",
    ],
    nextSteps: [
      "Completar edición de movimientos y gestión avanzada de cuentas y presupuestos.",
      "Conectar gastos por categoría y objetivos de ahorro con datos persistidos.",
      "Reforzar autorización, idempotencia, validaciones y pruebas de los flujos críticos.",
    ],
    featured: true,
  },
  {
    slug: "devforges",
    name: "DevForges",
    title: "Descubrimiento de recursos para desarrolladores",
    summary:
      "Catálogo web para explorar, filtrar y guardar herramientas, cursos y recursos de desarrollo.",
    description:
      "Una plataforma orientada a reducir el tiempo que lleva encontrar recursos útiles de programación en distintas categorías.",
    image: "/DevForges.webp",
    imageAlt:
      "Interfaz de DevForges con categorías y tarjetas de recursos para desarrolladores",
    status: "Proyecto de portfolio",
    year: "",
    role: "Desarrollo frontend",
    tags: ["React", "TypeScript", "Material UI", "Firebase", "JWT"],
    links: { repo: "https://github.com/alvaroballarini/DevForge" },
    problem: "",
    solution: "",
    features: [],
    decisions: [],
    impact: [],
    nextSteps: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
