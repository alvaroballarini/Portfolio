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
    position: "Desarrollador de software en .NET y Full Stack en React",
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
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MySql", "Sqlite", ".NET", "Tailwind CSS"],
  },
  {
    company: "Workana",
    position: "Frontend Developer Freelance",
    location: "Rosario, Argentina (Remoto)",
    startDate: "07/2021",
    endDate: "02/2022",
    description:
      "Experiencia en la creación y mejora de páginas web utilizando tecnologías como React y TypeScript",
    achievements: [
      "Especializado en el desarrollo de landing pages y tiendas en línea basadas en React y JavaScript",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Jest"],
  },
]
