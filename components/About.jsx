import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stack = [
  { label: "Languages", items: ["Python", "SQL", "R", "TypeScript", "C++"] },
  {
    label: "Data & ML",
    items: ["dbt", "DuckDB", "pandas", "XGBoost", "SHAP", "Sentence-BERT"],
  },
  {
    label: "Cloud & tools",
    items: ["Azure ML", "AWS", "FastAPI", "Streamlit", "Tableau", "Git"],
  },
];

export default function About() {
  return (
    <section id="about" className="pt-24 lg:pt-0">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>

      <Reveal>
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            I&rsquo;m a junior at Texas A&amp;M studying Industrial Engineering,
            with a CS minor and a Data Engineering certificate. I graduate in
            December 2027.
          </p>
          <p className="text-gray">
            Most of my projects start the same way: a dataset too big to eyeball
            and a question someone actually wants answered. I like carrying the
            whole thing myself, from the first messy CSV to a dashboard a
            stranger can use without me standing behind them.
          </p>
          <p className="text-gray">
            Right now that&rsquo;s a database-architecture externship with
            Breaking Games, contract work on frontier models for Handshake AI,
            and a supply-chain simulator I keep breaking on purpose.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <dl className="mt-10 space-y-4 border-t border-line pt-8">
          {stack.map((g) => (
            <div key={g.label} className="sm:flex sm:gap-8">
              <dt className="label shrink-0 pt-1 sm:w-32">{g.label}</dt>
              <dd className="mt-1 font-mono text-sm leading-relaxed text-gray sm:mt-0">
                {g.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
