// Project data — single source of truth for the Work section.
// featured: true  -> big case-study row (write a real paragraph in `description`)
// featured: false -> compact entry in the "More projects" list (one sentence)
// status: "live" (demo URL required) | "soon" (in development) | "code" (source only)

export const projects = [
  {
    title: "Medicare Fraud Detection",
    year: "2026",
    featured: true,
    status: "live",
    meta: "1.27M claims · $13.9B in payments",
    description:
      "Medicare publishes every Part B claim it pays out. I pulled 1.27 million of them, $13.9 billion in payments across 150,000 providers, and built the whole pipeline: eight dbt models to clean and shape the data, 51 engineered features, and an ensemble of Isolation Forest, XGBoost, and graph analytics to find providers whose billing doesn't look like their peers'. An investigator can open the dashboard, pick a flagged provider, and see exactly why the model is suspicious of it.",
    tech: ["Python", "dbt", "DuckDB", "XGBoost", "Streamlit"],
    demo: "https://med-fraud-systerm-8q2mvujs8rzcbrcw7zpbkc.streamlit.app/",
    code: "https://github.com/Khan-zoh/med-fraud-systerm",
  },
  {
    title: "Jarvis",
    year: "2026",
    featured: true,
    status: "private",
    meta: "620 tests · 24 MCP tools",
    description:
      "Jarvis is a local knowledge-retrieval and data platform — the “second brain” behind a desktop assistant. Notes and conversations run through a pipeline that chunks them, embeds each chunk with a local ONNX model, and indexes everything in SQLite, so a query can rank by keyword (FTS5) and vector similarity at the same time. I made Markdown the source of truth and the whole index rebuildable from it, so a corrupt database is never fatal — atomic writes, transactions, and cross-process locks keep the store consistent. It prunes itself too, using cosine similarity to catch near-duplicate notes and fold them together, and it normalizes 24 tools across Google Workspace, the local machine, and the web behind a single MCP interface. It ships as a packaged Windows app with 620 tests across the ingestion, indexing, retrieval, and concurrency paths.",
    tech: ["TypeScript", "Node.js", "SQLite/FTS5", "ONNX Runtime", "MCP", "Electron"],
  },
  {
    title: "ChurnAudit",
    year: "2026",
    featured: true,
    status: "live",
    meta: "1M subscribers · 5.5× lift",
    description:
      "A music streaming service with a million subscribers wants to know who is about to cancel. The hard part isn't the model, it's not cheating: churn data leaks future information everywhere, so this pipeline audits itself with a nine-assertion pytest gate before any training run. The XGBoost model that survives scores PR-AUC 0.43 and finds churners in its top decile at 5.5 times the rate of chance.",
    tech: ["Python", "SQL", "XGBoost", "SHAP", "Streamlit"],
    demo: "https://churn-cohort-analytics-5rt6rkcupisgkpmc8tvtcs.streamlit.app/",
    code: "https://github.com/Khan-zoh/churn-cohort-analytics",
  },
  {
    title: "Supply Chain Digital Twin",
    year: "2026",
    featured: true,
    status: "soon",
    meta: "52-week simulation · 5 scenarios",
    description:
      "A miniature supply chain that runs in software: three suppliers, a factory, two distribution centers, and four customer regions, simulated day by day over a 52-week year. I break it on purpose (supplier outages, demand spikes, long lead times) and watch what happens to fill rate, cost, and CO₂. Linear programs decide what to produce and where to ship it, and every event lands in DuckDB for the dashboards. In development now.",
    tech: ["Python", "SimPy", "PuLP", "DuckDB", "Streamlit"],
    code: "https://github.com/Khan-zoh/DigitalTwin",
  },
  {
    title: "What Should I Play",
    year: "2026",
    featured: false,
    status: "soon",
    description:
      "A recommender for my own Steam library. Content embeddings plus a personal reranker suggest what to play next, and every recommendation logs why it was shown.",
    tech: ["FastAPI", "React", "Embeddings"],
    code: "https://github.com/Khan-zoh/what-should-i-play",
  },
  {
    title: "NASA Insight Search",
    year: "2025",
    featured: false,
    status: "code",
    description:
      "Semantic search over 4,200 unstructured NASA reports: Sentence-BERT embeddings, K-Means clustering, and an explorer for the 12 themes that fell out.",
    tech: ["Python", "Sentence-BERT", "Azure ML"],
    code: "https://github.com/Khan-zoh/NLP-NASA-Reports",
  },
  {
    title: "LaunchBrief AI",
    year: "2025",
    featured: false,
    status: "code",
    description:
      "Ask plain-English questions over a document set, get answers with citations. RAG with evaluation gates, so output quality is measured rather than assumed.",
    tech: ["React", "FastAPI", "ChromaDB"],
    code: "https://github.com/Khan-zoh/LaunchBriefAI",
  },
  {
    title: "AttritionLens",
    year: "2025",
    featured: false,
    status: "code",
    description:
      "Why employees quit, answered twice: hypothesis tests and logistic regression in R, then XGBoost and SHAP in Python, compared honestly on held-out data.",
    tech: ["R", "Python", "Tableau"],
    code: "https://github.com/Khan-zoh/workforce-attrition-analytics",
  },
];
