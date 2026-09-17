import SectionHeading from "./SectionHeading";

const roles = [
  {
    org: "Breaking Games × Extern",
    role: "SQL & Database Architecture Extern",
    when: "Jul 2026 — Sep 2026",
    body: "A data-engineering externship with a board-game e-commerce company. I designed and built an analytics database in SQLite that unified six disconnected data sources into one queryable system — cleaned views filter bot traffic and bad data out of every downstream query — and modeled marketing attribution across 400+ referral sources back to revenue.",
  },
  {
    org: "Handshake AI",
    role: "AI Specialist, contract",
    when: "Jun 2026 — present",
    body: "Training frontier models on software engineering: writing and reviewing coding tasks, then grading model attempts on correctness, code quality, and communication.",
  },
  {
    org: "Pfizer × Extern",
    role: "AI Document Intelligence Extern",
    when: "May 2026 — Jul 2026",
    body: "Built retrieval-augmented tooling over pharmaceutical documentation, so every answer came back with the source passage it came from.",
  },
  {
    org: "Retractable Technologies",
    role: "Process Engineering & Data Analytics Intern",
    when: "Jun 2025 — Aug 2025",
    body: "Built the production dashboard for nine machines, about 500 data points a day. Line yield went from 70% to 80% that summer, and the visibility it gave the floor is part of why. Also trained Random Forest and Isolation Forest models to catch odd machine behavior before it cost output.",
  },
  {
    org: "Outlier AI",
    role: "AI Evaluation & Data Analyst, contract",
    when: "Nov 2024 — present",
    body: "Fifteen-plus model-training projects: analyzed around 600 model outputs, validated roughly 10,000 records, and designed 120+ benchmark tasks used to evaluate frontier models.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section shell">
        <SectionHeading index="03" title="Experience" aside="Learning by doing" />
      <div className="experience-grid">
        <div className="experience-heading"><h2>Out of the notebook.<br /><em>Into the world.</em></h2><p>Teams I’ve contributed to,<br />and problems I’ve worked on.</p><a className="link-fade" href="mailto:khan.zoh25@gmail.com?subject=Resume%20request">Request résumé ↗</a></div>
      <div className="roles">
        {roles.map((r, i) => (
            <article key={r.org} className="role">
              <span className="role-index label" aria-hidden="true">0{i + 1}</span>
              <p className="role-date label">
                {r.when}
              </p>
              <h3>
                {r.org}
              </h3>
              <p className="role-title">{r.role}</p>
              <p className="role-body">{r.body}</p>
            </article>
        ))}
      </div>
      </div>
    </section>
  );
}
