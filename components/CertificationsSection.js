import { certifications } from "@/data/portfolio";

export function CertificationsSection({ expanded = false }) {
  return (
    <section id="certifications" className="content-section certifications-section">
      <div className="section-heading">
        <p className="eyebrow">Certifications & Seminars</p>
        <h2>Trainings, workshops, and learning milestones.</h2>
      </div>

      <div className="certification-grid">
        {certifications.map((item) => (
          <article className="certification-card" key={item.title}>
            <div className="certification-date">{item.date}</div>
            <div>
              <p className="project-type">{item.issuer}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.credentialUrl ? (
                <a
                  className="certification-link"
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {expanded ? (
        <div className="note-panel">
          Add your direct certificate URLs in <code>data/portfolio.js</code> and each card will
          show a View Certificate link automatically.
        </div>
      ) : null}
    </section>
  );
}
