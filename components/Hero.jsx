"use client";

import { useState } from "react";

function DataLoom() {
  return (
    <svg className="data-loom" viewBox="0 0 540 360" fill="none" aria-hidden="true">
      <path d="M20 20h20M30 10v20M500 20h20M510 10v20M20 340h20M30 330v20M500 340h20M510 330v20" stroke="currentColor" opacity=".3" />
      <path d="M270 35v290M55 180h430" stroke="currentColor" opacity=".12" strokeDasharray="3 5" />
      {Array.from({ length: 32 }, (_, i) => {
        const y = 52 + i * 8.1;
        const wave = Math.sin(i * .7) * 62;
        const d = `M45 ${y} C130 ${y + wave}, 158 ${320 - i * 8.2}, 270 ${180 + (i - 16) * 2} S395 ${y}, 492 ${y}`;
        return <g key={i}><path d={d} stroke="currentColor" strokeWidth=".8" opacity={.2 + (i % 4) * .16} /><path className="flow-particle" d={d} stroke="currentColor" strokeWidth="2" strokeDasharray="2 850" style={{ animationDelay: `${i * -.19}s` }} /></g>;
      })}
      <circle cx="270" cy="180" r="67" stroke="currentColor" strokeDasharray="2 5" opacity=".4" />
      <circle cx="270" cy="180" r="83" stroke="currentColor" opacity=".13" />
      <path d="M265 180h10M270 175v10" stroke="currentColor" />
      {[52, 180, 303].map((y) => <g key={y}><circle cx="45" cy={y} r="3" fill="currentColor" /><rect x="489" y={y - 3} width="6" height="6" fill="currentColor" /></g>)}
    </svg>
  );
}

export default function Hero() {
  const [paused, setPaused] = useState(false);
  return (
    <section id="top" className="hero shell" aria-labelledby="hero-title">
      <div className="hero-kicker label"><span>Independent portfolio / 2026</span><span className="availability"><i aria-hidden="true" />Open to data internships</span></div>
      <div className="hero-main">
        <div className="hero-identity">
          <p className="hero-eyebrow">Hello, I’m</p>
          <h1 id="hero-title">Zohair<br /><em>Khan.</em></h1>
          <p className="hero-location label">Texas A&amp;M ’27 <span>↗</span> College Station, TX</p>
        </div>
        <figure className={`hero-figure ${paused ? "is-paused" : ""}`}>
          <div className="figure-top label"><span>Fig. 01 — Finding the signal</span><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Play diagram animation" : "Pause diagram animation"}>{paused ? "Play ↗" : "Pause Ⅱ"}</button></div>
          <DataLoom />
          <figcaption className="label"><span>Raw input</span><span className="figure-caption-center">A little structure goes a long way.</span><span>Useful output</span></figcaption>
        </figure>
      </div>
      <div className="hero-intro">
        <h2>Messy data.<br /><em>Clear purpose.</em></h2>
        <p>I build the whole thing: the pipeline that makes sense of the data, the model that finds the signal, and the dashboard that makes it useful.</p>
        <a href="#work" className="circle-link"><span>Explore the work</span><span className="circle-arrow" aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
