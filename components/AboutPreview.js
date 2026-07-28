import Link from "next/link";
import { profile } from "@/data/portfolio";

export function AboutPreview({ expanded = false }) {
  return (
    <section id="about" className="content-section about-section">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Computer Science graduate building thoughtful software from idea to deployment.</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>{profile.about}</p>
          {expanded ? (
            <p>
              My academic journey has centered on turning data into meaningful, real-world solutions—from
              building DIANA, a cluster-based predictive model for Type 2 Diabetes risk using blood
              biomarkers, to developing Palayon, a machine learning app for rice disease detection. I enjoy
              working across the stack with Python, Kotlin, Go, and React, and I'm especially drawn to
              projects where machine learning meets everyday problems in healthcare and agriculture. As a
              member of the Junior Philippine Computer Society (JPCS), I've valued being part of a community
              that pushes me to keep learning and collaborating. I do my best work in teams that value clear
              communication, iterative feedback, and a shared drive to build software that genuinely helps
              people.
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
