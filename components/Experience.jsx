import Reveal from "./Reveal";
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
    <section id="experience" className="pt-24">
      <Reveal>
        <SectionHeading index="03" title="Experience" />
      </Reveal>

      <div>
        {roles.map((r) => (
          <Reveal key={r.org}>
            <article className="border-t border-line py-8 first-of-type:border-t-0">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
                {r.when}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {r.org}
              </h3>
              <p className="font-serif text-lg italic text-gray">{r.role}</p>
              <p className="mt-3 max-w-xl leading-relaxed text-gray">{r.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
