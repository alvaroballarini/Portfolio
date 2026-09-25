import { ArrowRight, ArrowUpRight, Check, Code2, Database, Github, Linkedin, Mail, ServerCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ExperienceCard from "@/components/experienceCard";
import Hero from "@/components/hero";
import ProjectCard from "@/components/projectCard";
import Section from "@/components/section";
import Header from "@/components/site-header";
import { experiences } from "@/lib/experience";
import { projects } from "@/lib/project";

const featured = projects.find((project) => project.featured)!;
const otherProjects = projects.filter((project) => !project.featured);

const capabilities = [
  {
    icon: Code2,
    title: "Producto frontend",
    copy: "Interfaces con React y Next.js, arquitectura de componentes, estados claros y atención al rendimiento percibido.",
    tech: "React · Next.js · TypeScript · Tailwind",
  },
  {
    icon: ServerCog,
    title: "Backend y APIs",
    copy: "Servicios y APIs REST con reglas de negocio explícitas, validaciones y una integración cuidada con el frontend.",
    tech: "Node.js · Express · Fastify · NestJS · .NET",
  },
  {
    icon: Database,
    title: "Datos y performance",
    copy: "Modelado relacional, índices y consultas orientadas a reducir tiempos de proceso sin perder claridad ni precisión.",
    tech: "PostgreSQL · SQLite · SQL · Prisma",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />

        <section className="trust-strip" aria-label="Perfil profesional resumido">
          <div className="site-shell trust-grid">
            <p>Experiencia de punta a punta</p>
            <span>Análisis técnico</span><span>Arquitectura</span><span>Entrega en producción</span><span>Code reviews</span><span>Stakeholders</span>
          </div>
        </section>

        <Section
          id="proyectos"
          eyebrow="01 · Proyecto destacado"
          title="Trabajo que muestra cómo pienso, no solo qué tecnologías uso."
          intro="Vaulty concentra diseño de producto, modelado de datos, backend, interfaz y automatización en un problema concreto."
        >
          <article className="featured-project">
            <div className="featured-visual">
              <Image src={featured.image} alt={featured.imageAlt} fill priority sizes="(max-width: 1000px) 100vw, 58vw" />
              <div className="visual-caption"><span>Vaulty</span><span>Aplicación full stack</span></div>
            </div>
            <div className="featured-content">
              <div className="project-meta"><span>{featured.status}</span><span>{featured.year}</span></div>
              <h3>{featured.title}</h3>
              <p className="featured-summary">{featured.summary}</p>
              <div className="case-block">
                <p className="case-label">El problema</p>
                <p>{featured.problem}</p>
              </div>
              <div className="case-block">
                <p className="case-label">La respuesta</p>
                <p>{featured.solution}</p>
              </div>
              <ul className="feature-checks">
                {featured.impact.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
              </ul>
              <div className="tag-list">{featured.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="featured-actions">
                <Link href="/proyectos/vaulty" className="button button-primary">Leer caso completo <ArrowRight aria-hidden="true" /></Link>
                {featured.links.demo && <a href={featured.links.demo} target="_blank" rel="noreferrer" className="text-link">Ver producto <ArrowUpRight aria-hidden="true" /></a>}
                <a href={featured.links.repo} target="_blank" rel="noreferrer" className="text-link"><Github aria-hidden="true" /> Código</a>
              </div>
            </div>
          </article>

          {otherProjects.length > 0 && (
            <div className="other-projects">
              <div className="subsection-heading"><p className="eyebrow">Más trabajo</p><h3>Otros proyectos</h3></div>
              <div className="project-grid">{otherProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
            </div>
          )}
        </Section>

        <Section id="experiencia" eyebrow="02 · Experiencia" title="Resultados en sistemas reales." intro="Trabajo sobre todo el ciclo: entender el problema, proponer una solución, implementarla y sostenerla en producción." className="section-contrast">
          <div className="experience-list">{experiences.map((experience) => <ExperienceCard key={`${experience.company}-${experience.startDate}`} experience={experience} />)}</div>
        </Section>

        <Section id="capacidades" eyebrow="03 · Capacidades" title="Un perfil full stack con profundidad en datos." intro="Puedo moverme entre producto, interfaz, servicios y base de datos sin perder de vista el resultado que necesita el negocio.">
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, copy, tech }) => (
              <article className="capability-card" key={title}>
                <Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p><span>{tech}</span>
              </article>
            ))}
          </div>
          <div className="engineering-note">
            <p className="eyebrow">También en el día a día</p>
            <p>Testing con Jest/Vitest · Docker · CI/CD con GitHub Actions · estimación · code reviews · metodologías ágiles · mentoría</p>
          </div>
        </Section>

        <Section id="perfil" eyebrow="04 · Perfil" title="Ingeniería con contexto de negocio." className="section-profile">
          <div className="profile-grid">
            <div className="profile-copy">
              <p>Me especializo en construir y evolucionar productos B2B donde la confiabilidad, los datos y el rendimiento importan. Disfruto traducir requerimientos ambiguos en decisiones técnicas concretas y trabajar cerca de quienes usan o definen el producto.</p>
              <p>Mi experiencia incluye integrar servicios modernos en Node.js y React con sistemas existentes en .NET, mejorar consultas SQL y elevar la estabilidad de flujos críticos mediante pruebas de integración.</p>
            </div>
            <dl className="profile-facts">
              <div><dt>Base</dt><dd>Rosario, Argentina</dd></div>
              <div><dt>Formación</dt><dd>Técnico Informático · Casa Salesiana San José</dd></div>
              <div><dt>Idiomas</dt><dd>Español nativo · Inglés B1-B2 técnico</dd></div>
              <div><dt>Interés</dt><dd>Productos B2B · Backend · Full stack</dd></div>
            </dl>
          </div>
        </Section>

        <section id="contacto" className="contact-section">
          <div className="site-shell contact-card">
            <div>
              <p className="eyebrow">¿Hay un problema interesante por resolver?</p>
              <h2>Hablemos de la próxima oportunidad.</h2>
              <p>Estoy abierto a roles Full Stack y Backend donde pueda aportar en producto, datos y performance.</p>
            </div>
            <div className="contact-actions">
              <a href="mailto:alvaroballarini03@gmail.com?subject=Oportunidad%20Full%20Stack" className="button button-primary"><Mail aria-hidden="true" /> Enviar email</a>
              <a href="https://www.linkedin.com/in/alvaro-ballarini/" target="_blank" rel="noreferrer" className="button button-secondary"><Linkedin aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-shell"><p>Álvaro Ballarini · Full Stack Engineer</p><p>Rosario, Argentina · 2026</p></div>
      </footer>
    </>
  );
}
