import Link from "next/link";
import { profile } from "@/data/portfolio";

export function AboutPreview({ expanded = false }) {
  return (
    <section id="about" className="content-section about-section">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Student developer building thoughtful software from idea to deployment.</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>{profile.about}</p>
          {expanded ? (
            <p>
              Add a more personal paragraph here about your academic journey, favorite technologies,
              thesis or capstone topic, leadership experience, and the kind of team where you do your
              best work.
            </p>
          ) : null}
          <div className="button-row">
            <a className="button primary" href="/resume-placeholder.pdf" download>
              Download CV
            </a>
            {!expanded ? (
              <Link className="button secondary" href="/about">
                More About Me
              </Link>
            ) : null}
          </div>
        </div>

        <div className="stats-grid" aria-label="Profile highlights">
          {profile.highlights.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
