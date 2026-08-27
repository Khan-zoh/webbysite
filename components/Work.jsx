"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const statusLabel = {
  live: "Live",
  soon: "In development",
  code: "Source",
  private: "Private beta",
};

function ProjectRow({ p, i, isOpen, onToggle }) {
  return (
    <li className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-baseline justify-between gap-4 py-6 text-left"
      >
        <span className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-faint">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-2xl font-semibold tracking-tight transition-colors sm:text-[1.75rem] ${
              isOpen ? "text-ink" : "text-gray group-hover:text-ink"
            }`}
          >
            {p.title}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-4">
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint sm:inline">
            {statusLabel[p.status]}
          </span>
          <span
            className={`font-mono text-lg leading-none text-faint transition-transform duration-300 ${
              isOpen ? "rotate-45 text-ink" : "group-hover:text-ink"
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 sm:pl-8">
              {p.meta && (
                <p className="font-mono text-sm text-ink">{p.meta}</p>
              )}
              <p className="mt-3 max-w-xl leading-relaxed text-gray">
                {p.description}
              </p>
              <p className="label mt-4">{p.tech.join(" · ")}</p>
              <div className="mt-6 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[0.14em]">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="link-fade"
                  >
                    Live demo ↗
                  </a>
                )}
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="link-grow text-gray"
                  >
                    Source ↗
                  </a>
                )}
                {!p.demo && !p.code && (
                  <span className="text-faint">Private beta — demo on request</span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const [open, setOpen] = useState(featured[0]?.title ?? null);

  return (
    <section id="work" className="pt-24">
      <Reveal>
        <SectionHeading index="02" title="Selected work" />
      </Reveal>

      <Reveal>
        <ul className="border-t border-line">
          {featured.map((p, i) => (
            <ProjectRow
              key={p.title}
              p={p}
              i={i}
              isOpen={open === p.title}
              onToggle={() => setOpen(open === p.title ? null : p.title)}
            />
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <p className="label mb-2 mt-16">More projects</p>
        <ul>
          {rest.map((p) => (
            <li
              key={p.title}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line py-4"
            >
              <a
                href={p.code}
                target="_blank"
                rel="noreferrer"
                className="link-grow text-lg font-medium"
              >
                {p.title}
              </a>
              <span className="font-mono text-xs text-faint">
                {p.tech.join(" · ")}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
