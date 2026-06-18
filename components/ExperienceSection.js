import { experience } from "@/data/portfolio";

export function ExperienceSection({ expanded = false }) {
  return (
    <section id="experience" className="content-section section-muted">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Education, training, and practical learning milestones.</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.title}>
            <span className="timeline-dot" />
            <div>
              <p className="timeline-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {expanded ? (
        <div className="note-panel">
          Add internships, organization roles, hackathons, seminars, certifications, or capstone
          milestones here. Use measurable outcomes where possible.
        </div>
      ) : null}
    </section>
  );
}
