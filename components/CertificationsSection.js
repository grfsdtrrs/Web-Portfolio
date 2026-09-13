
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
            {item.image ? (
              <a
                className="certification-media"
                href={item.credentialUrl || item.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${item.title} certificate`}
              >
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  loading="lazy"
                  width={250}
                  height={180}
                />
              </a>
            ) : null}

            <div className="certification-body">
              <div className="certification-date">{item.date}</div>
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
                  <span>View Certificate</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}