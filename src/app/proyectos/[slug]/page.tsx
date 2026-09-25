import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/site-header";
import { getProject, projects } from "@/lib/project";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} · Caso de estudio`,
    description: project.summary,
    alternates: { canonical: `/proyectos/${project.slug}/` },
    openGraph: {
      title: `${project.name} · Caso de estudio`,
      description: project.summary,
      type: "article",
      url: `/proyectos/${project.slug}/`,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} · Caso de estudio`,
      description: project.summary,
      images: [project.image],
    },
  };
}

function ContentList({ items }: { items: string[] }) {
  if (!items.length) return <div className="empty-slot" aria-label="Contenido pendiente de completar" />;
  return <ul className="detail-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function ContentText({ text }: { text: string }) {
  if (!text) return <div className="empty-slot" aria-label="Contenido pendiente de completar" />;
  return <p>{text}</p>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <a className="skip-link" href="#caso">Saltar al caso</a>
      <Header />
      <main id="caso" className="project-detail">
        <header className="detail-hero">
          <div className="site-shell">
            <Link href="/#proyectos" className="back-link"><ArrowLeft aria-hidden="true" /> Volver a proyectos</Link>
            <div className="detail-heading">
              <div>
                <p className="eyebrow">Caso de estudio · {project.status}</p>
                <h1>{project.name}</h1>
              </div>
              <div>
                <p className="detail-title">{project.title}</p>
                <p>{project.description}</p>
              </div>
            </div>
            <dl className="detail-meta">
              <div><dt>Rol</dt><dd>{project.role}</dd></div>
              <div><dt>Año</dt><dd>{project.year || <span aria-label="Pendiente">—</span>}</dd></div>
              <div><dt>Stack</dt><dd>{project.tags.join(" · ")}</dd></div>
            </dl>
          </div>
        </header>

        <div className="site-shell detail-image">
          <Image src={project.image} alt={project.imageAlt} fill priority sizes="100vw" />
        </div>

        <div className="site-shell detail-body">
          <section className="detail-section">
            <p className="detail-index">01</p><h2>Problema</h2><div className="detail-copy"><ContentText text={project.problem} /></div>
          </section>
          <section className="detail-section">
            <p className="detail-index">02</p><h2>Solución</h2><div className="detail-copy"><ContentText text={project.solution} /></div>
          </section>
          <section className="detail-section">
            <p className="detail-index">03</p><h2>Funcionalidades</h2><div className="detail-copy"><ContentList items={project.features} /></div>
          </section>
          <section className="detail-section">
            <p className="detail-index">04</p><h2>Decisiones técnicas</h2><div className="detail-copy"><ContentList items={project.decisions} /></div>
          </section>
          <section className="detail-section">
            <p className="detail-index">05</p><h2>Resultado</h2><div className="detail-copy"><ContentList items={project.impact} /></div>
          </section>
          <section className="detail-section">
            <p className="detail-index">06</p><h2>Próximos pasos</h2><div className="detail-copy"><ContentList items={project.nextSteps} /></div>
          </section>
        </div>

        <section className="detail-links">
          <div className="site-shell">
            <div><p className="eyebrow">Explorar el proyecto</p><h2>Producto, código y contexto.</h2></div>
            <div className="detail-actions">
              {project.links.demo && <a className="button button-primary" href={project.links.demo} target="_blank" rel="noreferrer">Ver producto <ArrowUpRight aria-hidden="true" /></a>}
              <a className="button button-secondary" href={project.links.repo} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> Repositorio</a>
              <a className="button button-secondary" href="mailto:alvaroballarini03@gmail.com?subject=Consulta%20sobre%20portfolio"><Mail aria-hidden="true" /> Contacto</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
