import { skills } from "@/data/portfolio";

export function SkillsSection({ expanded = false }) {
  return (
    <section id="skills" className="content-section section-muted">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Core tools and concepts for full-stack development.</h2>
      </div>

      <div className="skills-layout">
        {skills.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
