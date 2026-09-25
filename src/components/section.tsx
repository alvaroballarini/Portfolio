import { ReactNode } from "react";

export default function Section({ id, eyebrow, title, intro, children, className = "" }: { id?: string; eyebrow: string; title: string; intro?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="site-shell">
        <header className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
