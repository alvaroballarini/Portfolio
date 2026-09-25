import { ArrowDownRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const proof = [
  { value: "+4 años", label: "construyendo productos" },
  { value: "~50%", label: "menos tiempo de proceso" },
  { value: "~70%", label: "menos errores en producción" },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Full Stack Engineer · Rosario, Argentina
          </p>
          <h1 id="hero-title">
            Convierto lógica compleja en productos
            <span> claros, rápidos y estables.</span>
          </h1>
          <p className="hero-lede">
            Diseño y desarrollo productos B2B end-to-end con Node.js,
            TypeScript, React y Next.js. Mi foco está en datos, rendimiento y
            software que se sostiene en producción.
          </p>
          <div className="hero-actions">
            <Link href="#proyectos" className="button button-primary">
              Ver trabajo destacado <ArrowDownRight aria-hidden="true" />
            </Link>
            <a href="mailto:alvaroballarini03@gmail.com?subject=Oportunidad%20Full%20Stack" className="button button-secondary">
              <Mail aria-hidden="true" /> Hablemos
            </a>
          </div>
          <div className="hero-links" aria-label="Perfiles y currículum">
            <a href="https://github.com/alvaroballarini" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/alvaro-ballarini/" target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href="/CV_Alvaro_Ballarini_ES_ATS.pdf" download>
              <Download aria-hidden="true" /> CV en español
            </a>
          </div>
        </div>

        <aside className="hero-proof" aria-label="Impacto profesional">
          <div className="proof-label">Impacto comprobable</div>
          {proof.map((item) => (
            <div className="proof-row" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
          <p>
            Resultados obtenidos en productos B2B mediante optimización SQL y
            pruebas de integración en servicios críticos.
          </p>
        </aside>
      </div>
    </section>
  );
}
