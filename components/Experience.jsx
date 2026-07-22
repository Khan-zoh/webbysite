import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    org: "Pfizer × Extern",
    role: "AI Document Intelligence Extern",
    when: "Jun 2026 — present",
    body: "Summer externship building RAG tooling over pharma documentation, so answers come with the document they came from.",
  },
  {
    org: "Handshake AI",
    role: "AI Specialist, contract",
    when: "Jun 2026 — present",
    body: "A summer contract training frontier models on software engineering. I wrote and reviewed coding tasks that teach large models sound programming practice, and graded model attempts on correctness, code quality, and communication.",
  },
  {
    org: "Retractable Technologies",
    role: "Process Engineering & Data Analytics Intern",
    when: "Jun 2025 — Aug 2025",
    body: "Built the production dashboard for nine machines, about 500 data points a day. Line yield went from 70% to 80% that summer, and the visibility the dashboard gave the floor is part of why. I also trained Random Forest and Isolation Forest models to catch odd machine behavior before it cost output.",
  },
  {
    org: "Outlier AI",
    role: "AI Evaluation & Data Analyst, contract",
    when: "Nov 2024 — present",
    body: "Fifteen-plus model-training projects: I've analyzed around 600 model outputs, validated roughly 10,000 records, and designed 120+ benchmark tasks used to evaluate frontier models.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" title="Experience" />
        {roles.map((r) => (
          <Reveal key={r.org}>
            <article className="grid gap-3 border-t border-line py-10 first-of-type:border-t-0 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <p className="font-mono text-sm text-faint">{r.when}</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold tracking-tight">{r.org}</h3>
                <p className="mt-1 font-serif text-xl italic text-gray">{r.role}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-gray">{r.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
