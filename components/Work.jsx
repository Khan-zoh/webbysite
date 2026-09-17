import { projects } from "@/data/projects";
import ProjectArt from "./ProjectArt";
import SectionHeading from "./SectionHeading";

const statusLabel = { live: "Live", soon: "In development", code: "Source", private: "Private beta" };

function ProjectLinks({ project }) {
  return <div className="project-links">
    {project.demo && <a className="link-fade" href={project.demo} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>}
    {project.code && <a className="link-grow" href={project.code} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>}
    {!project.demo && !project.code && <a className="link-fade" href="mailto:khan.zoh25@gmail.com?subject=Jarvis%20demo%20request">Private beta — demo on request <span aria-hidden="true">↗</span></a>}
  </div>;
}

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="work" className="work-section shell">
      <SectionHeading index="01" title="Selected work" aside="A few things I’ve put together" />
      <div className="section-intro"><h2>Built to answer<br /><em>real questions.</em></h2><p>Pipelines, models, and the space between.<br />Selected projects, 2025–2026.</p></div>
      <div className="featured-projects">
        {featured.map((p, i) => (
          <article className={`project-spread project-${i + 1}`} key={p.title} aria-labelledby={`project-title-${i}`}>
            <div className="project-visual">
              <div className="project-visual-heading label"><span>Study / 0{i + 1}</span><span>{p.year}</span></div>
              <ProjectArt index={i} />
              <p className="project-metric">{p.meta}</p>
              <span className="art-caption label">Concept sketch / {['Anomaly detection', 'Connected knowledge', 'Retention modeling', 'System simulation'][i]}</span>
            </div>
            <div className="project-copy">
              <div className="project-overline label"><span>0{i + 1} / Project notes</span><span className="project-status"><i aria-hidden="true" />{statusLabel[p.status]}</span></div>
              <h3 id={`project-title-${i}`}>{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <ul className="tech-list" aria-label={`${p.title} technologies`}>{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              <ProjectLinks project={p} />
            </div>
          </article>
        ))}
      </div>
      <div className="archive-heading"><h3>Also on the workbench<span aria-hidden="true">↙</span></h3><span className="label">04 more explorations</span></div>
      <div className="project-archive">{rest.map((p, i) => (
        <details key={p.title} className="archive-entry">
          <summary><span className="archive-number label">0{i + 5}</span><h4>{p.title}</h4><span className="archive-tech label">{p.tech.join(" / ")}</span><span className="archive-toggle" aria-hidden="true">+</span></summary>
          <div className="archive-content"><span className="label">{p.year} / {statusLabel[p.status]}</span><p>{p.description}</p><p className="archive-mobile-tech label">{p.tech.join(" / ")}</p><ProjectLinks project={p} /></div>
        </details>
      ))}</div>
    </section>
  );
}
