import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stack = [
  {
    label: "Languages",
    items: ["Python", "SQL", "R", "JavaScript", "C++"],
  },
  {
    label: "Data & ML",
    items: ["dbt", "DuckDB", "pandas", "XGBoost", "scikit-learn", "SHAP", "Sentence-BERT"],
  },
  {
    label: "Cloud & tools",
    items: ["Azure ML", "AWS", "FastAPI", "Streamlit", "Tableau", "Power BI", "Git"],
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="04" title="About" />
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed sm:text-xl">
              <p>
                I&rsquo;m a junior at Texas A&amp;M studying Industrial
                Engineering, with a CS minor and a Data Engineering
                certificate. I graduate in May 2027.
              </p>
              <p className="text-gray">
                Most of my projects start the same way: a dataset too big to
                eyeball and a question someone actually wants answered. I like
                carrying the whole thing myself, from the first messy CSV to a
                dashboard a stranger can use without me standing behind them.
              </p>
              <p className="text-gray">
                Right now that means a summer externship with Pfizer building
                document-intelligence tooling, contract AI-evaluation work for
                Outlier, and a supply chain simulator I keep breaking on
                purpose.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <div className="space-y-8">
              {stack.map((g) => (
                <div key={g.label} className="border-t border-line pt-4">
                  <h3 className="label">{g.label}</h3>
                  <p className="mt-3 font-mono text-sm leading-loose text-gray">
                    {g.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
