import { Experience } from "@/lib/experience";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="experience-row">
      <div className="experience-date">{experience.startDate} — {experience.endDate || "Actualidad"}</div>
      <div>
        <p className="experience-company">{experience.company}</p>
        <h3>{experience.position}</h3>
        <p className="experience-description">{experience.description}</p>
        {experience.achievements && <ul className="achievement-list">{experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>}
        <div className="tag-list">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      </div>
    </article>
  );
}
