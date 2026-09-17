"use client";

import { useEffect, useState } from "react";

const nav = [["work", "Work"], ["about", "About"], ["experience", "Experience"], ["contact", "Contact"]];

export default function Sidebar() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const sections = nav.map(([id]) => document.getElementById(id)).filter(Boolean);
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = "";
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) current = section.id;
        }
        setActive(current);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="#top" aria-label="Zohair Khan, back to top">zk<span aria-hidden="true">↗</span></a>
        <span className="header-caption label">Data engineering<br />& a little curiosity.</span>
        <nav aria-label="Main navigation">
          {nav.map(([id, label], i) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
              <span className="nav-number">0{i + 1}</span>{label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
