const items = [
  "1.27M Medicare claims scored",
  "$13.9B in payments analyzed",
  "1M subscribers modeled",
  "4,200 NASA reports indexed",
  "Factory yield 70% → 80%",
  "120+ AI benchmark tasks designed",
];

/** Black band of real numbers, scrolling continuously. Pauses on hover. */
export default function Marquee() {
  const row = (hidden) => (
    <span aria-hidden={hidden || undefined} className="inline-flex">
      {items.map((t) => (
        <span
          key={t}
          className="inline-flex items-center gap-10 pr-10 font-mono text-sm uppercase tracking-[0.14em]"
        >
          {t}
          <span aria-hidden="true" className="text-faint">
            ·
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden border-y border-ink bg-ink py-4 text-paper">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
