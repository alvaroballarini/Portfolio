import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" className="project-image" />
      </div>
      <div className="project-card-body">
        <div className="project-meta"><span>{project.status}</span>{project.year && <span>{project.year}</span>}</div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="tag-list" aria-label="Tecnologías">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="card-links">
          <Link href={`/proyectos/${project.slug}`}>Ver caso <ArrowUpRight aria-hidden="true" /></Link>
          <a href={project.links.repo} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> Código</a>
        </div>
      </div>
    </article>
  );
}
