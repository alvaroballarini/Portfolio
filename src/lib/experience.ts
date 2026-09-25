export type Experience = {
  company: string
  position: string
  location?: string
  startDate: string
  endDate?: string
  description: string
  achievements?: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: "Consultar Srl",
    position: "Full Stack Developer",
    location: "Rosario, Argentina",
    startDate: "09/2022",
    endDate: undefined, // Presente
    description:
      "Desarrollo y evolución de productos B2B y aplicaciones de gestión, desde el análisis de requerimientos y el diseño técnico hasta la entrega en producción.",
    achievements: [
      "Optimicé esquemas, índices y consultas SQL, reduciendo aproximadamente un 50 % los tiempos de procesamiento.",
      "Incorporé pruebas de integración en servicios y endpoints críticos, contribuyendo a reducir aproximadamente un 70 % los errores en producción.",
      "Integré servicios modernos en Node.js y React con sistemas existentes en .NET.",
      "Trabajé directamente con stakeholders para relevar necesidades, estimar desarrollo y entregar mejoras en iteraciones cortas.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MySQL", "SQLite", ".NET", "Tailwind CSS"],
  },
  {
    company: "Workana",
    position: "Frontend Developer Freelance",
    location: "Rosario, Argentina (Remoto)",
    startDate: "07/2021",
    endDate: "02/2022",
    description:
      "Desarrollo y mejora de experiencias web para clientes remotos con React y TypeScript.",
    achievements: [
      "Construí landing pages y tiendas online con foco en una experiencia clara y adaptable.",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Jest"],
  },
]
