export type Project = {
  slug: string
  title: string
  description: string
  descriptionLong?: string
  image: string
  tags: string[]
  links: {
    demo: string
    repo: string
  }
}

export const projects: Project[] = [
  {
    slug: "Vaulty",
    title: "Vaulty - Aplicación de finanzas personales",
    description:
      "Una aplicación para registrar ingresos y gastos, organizar presupuestos y comprender la evolución del dinero.",
    descriptionLong:
      "Diseño y desarrollo la interfaz, el modelo de datos y las operaciones del servidor. El proyecto incluye movimientos financieros, presupuestos mensuales, consultas agregadas y procesamiento de operaciones recurrentes.",
    image:
      "/Vaulty.webp",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma","React Query"],
    links: { demo: "https://vaultytest.vercel.app/", repo: "https://github.com/alvaroballarini/Vaulty" },
  },
  {
    slug: "Devforges",
    title: "Devforges - catálogo de recursos para desarrolladores",
    description:
      "Plataforma de recuesos para programadores.",
    descriptionLong:
      "DevForge es una plataforma en línea diseñada para ayudar a los programadores a descubrir y explorar una amplia gama de recursos, herramientas y cursos relacionados con la programación y el desarrollo de software.",
    image:
      "/DevForges.webp",
    tags: ["React", "TypeScript", "Tailwind", "Material-UI","Firebase","JWT (JSON Web Tokens)"],
    links: { demo: "https://vaultytest.vercel.app/", repo: "https://github.com/alvaroballarini/DevForge" },
  },
]
