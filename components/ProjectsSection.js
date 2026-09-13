import Link from "next/link";
import { projects } from "@/data/portfolio";

export function ProjectsSection({ expanded = false }) {
  const visibleProjects = expanded ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="content-section">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Projects</p>
          <h2>Academic and personal projects ready for your real details.</h2>
        </div>
        {!expanded ? (
          <Link className="text-link" href="/projects">
            View all
          </Link>
        ) : null}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-media">
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.image} alt={project.title} className="project-image" />
              ) : (
                <span>{project.short}</span>
              )}
            </div>
            <div className="project-body">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>
                {project.description}
                {project.contribution ? ` ${project.contribution}` : ""}
              </p>

              <div className="skill-tags compact">
                {(project.stack ?? []).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-links">
                {project.demoUrl && project.demoUrl !== "#" ? (
                  <Link href={`/demo?slug=${encodeURIComponent(project.slug)}`}>
                    Live Demo
                  </Link>
                ) : null}
                {project.repoUrl && project.repoUrl !== "#" ? (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
