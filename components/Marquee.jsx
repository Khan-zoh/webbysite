const items = [
  ["1.27M", "Medicare claims scored"],
  ["$13.9B", "in payments analyzed"],
  ["1M", "subscribers modeled"],
  ["4,200", "NASA reports indexed"],
  ["70% → 80%", "Factory yield"],
  ["120+", "AI benchmark tasks designed"],
];

export default function Marquee() {
  return (
    <section className="numbers-section shell" aria-labelledby="numbers-title">
      <div className="numbers-heading"><h2 id="numbers-title">A few numbers<br /><em>from the work.</em></h2><span className="label">Across projects & experience</span></div>
      <dl className="numbers-grid">{items.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </section>
  );
}
