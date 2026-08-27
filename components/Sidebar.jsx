"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const nav = [
  ["about", "About"],
  ["work", "Selected work"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

const socials = [
  ["GitHub", "https://github.com/Khan-zoh"],
  ["LinkedIn", "https://linkedin.com/in/zohair-khan-2352672a5"],
  ["Email", "mailto:khan.zoh25@gmail.com"],
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="pb-12 pt-28 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[38%] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.p variants={rise} className="label">
          Data Engineering · Texas A&amp;M &rsquo;27
        </motion.p>

        <motion.h1
          variants={rise}
          className="mt-6 text-[clamp(3rem,5.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
        >
          Zohair Khan
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-6 max-w-sm text-xl leading-snug text-gray"
        >
          I turn raw data into{" "}
          <em className="font-serif font-normal italic text-ink">
            working systems
          </em>{" "}
          — the pipelines, the models, and the dashboards that make big data
          usable.
        </motion.p>

        {/* scroll-spy nav (desktop only) */}
        <motion.nav variants={rise} className="mt-16 hidden lg:block">
          <ul className="space-y-5">
            {nav.map(([id, label]) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a href={`#${id}`} className="group flex items-center gap-4">
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-ink"
                          : "w-8 bg-faint group-hover:w-12 group-hover:bg-ink"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
                        isActive ? "text-ink" : "text-faint group-hover:text-ink"
                      }`}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </motion.div>

      {/* status + socials */}
      <motion.div
        variants={rise}
        initial="hidden"
        animate="show"
        className="mt-14 lg:mt-0"
      >
        <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-gray">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-ink"
          />
          Open to data internships
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
          {socials.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="link-grow font-mono text-xs uppercase tracking-[0.14em] text-gray"
            >
              {label} ↗
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="link-fade font-mono text-xs uppercase tracking-[0.14em] text-ink"
          >
            Résumé ↗
          </a>
        </div>
      </motion.div>
    </header>
  );
}
