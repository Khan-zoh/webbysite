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
    <section id="about" className="about-section">
      <div className="shell">
        <SectionHeading index="02" title="A little about me" aside="The person behind the pipelines" />
        <div className="about-grid">
          <div className="about-heading"><h2>Curiosity first.<br /><em>Then, the code.</em></h2><div className="about-stamp" aria-hidden="true"><span>Texas A&amp;M</span><strong>’27</strong><span>Industrial Engineering</span></div></div>
        <div className="about-copy">
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
        </div>
        <div className="skills-heading"><span className="label">The toolkit</span><p>What I work with.</p></div>
        <dl className="skills-grid">
          {stack.map((g) => (
            <div key={g.label}>
              <dt className="label">{g.label}</dt>
              <dd>
                {g.items.map((item) => <span key={item}>{item}</span>)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
