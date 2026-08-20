import Link from "next/link";
import { ojt } from "@/data/portfolio";

export function OjtSection({ expanded = false }) {
  return (
    <section id="ojt" className="content-section ojt-section">
      <div className="section-heading">
        <p className="eyebrow">On-the-Job Training</p>
        <h2>My experience and learning during my OJT.</h2>
      </div>

      <div className="ojt-card ojt-summary">
        <div className="ojt-heading">
          <div>
            <h3>{ojt.role}</h3>
            <h4>{ojt.company}</h4>
          </div>
          <p className="ojt-period">{ojt.period}</p>
        </div>

        <div className="ojt-details-grid">
          <div>
            <span>Department</span>
            <p>{ojt.department}</p>
          </div>
          <div>
            <span>Duration</span>
            <p>{ojt.hours}</p>
          </div>
          <div>
            <span>Location</span>
            <p>{ojt.location}</p>
          </div>
          <div>
            <span>Supervisor</span>
            <p>{ojt.supervisor}</p>
          </div>
        </div>

        <p className="ojt-overview">{ojt.overview}</p>

        {!expanded && (
          <Link href="/ojt" className="ojt-link">
            View full OJT details →
          </Link>
        )}
      </div>

      {expanded && (
        <>
          <div className="ojt-card">
            <h3>Company Background</h3>
            <p>{ojt.companyBackground}</p>
          </div>

          <div className="ojt-card">
            <h3>Key Responsibilities</h3>
            <ul className="ojt-list">
              {ojt.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="ojt-card">
            <h3>{ojt.project.name}</h3>
            <p>{ojt.project.description}</p>

            <h4>Project Objectives</h4>
            <ul className="ojt-list">
              {ojt.project.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </div>

          <div className="ojt-card">
            <h3>ATLAS Modules</h3>
            <div className="module-grid">
              {ojt.modules.map((module) => {
                const [name, description] = module.split(" – ");
                return (
                  <article className="module-card" key={module}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="ojt-card">
            <h3>Technology Stack</h3>
            <div className="tech-stack">
              {ojt.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="ojt-card">
            <h3>Challenges and Solutions</h3>
            <div className="challenge-grid">
              {ojt.challenges.map((challenge) => (
                <article className="challenge-card" key={challenge.title}>
                  <h4>{challenge.title}</h4>
                  <p>{challenge.solution}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="ojt-card">
            <h3>Accomplishments</h3>
            <ul className="ojt-list">
              {ojt.accomplishments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="ojt-reflection-grid">
            <article className="ojt-card">
              <h3>Key Learnings</h3>
              <p>{ojt.learnings}</p>
            </article>

            <article className="ojt-card">
              <h3>Reflection</h3>
              <p>{ojt.realization}</p>
            </article>
          </div>

          <div className="ojt-card ojt-conclusion">
            <h3>Conclusion</h3>
            <p>{ojt.conclusion}</p>
          </div>
        </>
      )}
    </section>
  );
}