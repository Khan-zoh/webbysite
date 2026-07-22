import { projects } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const statusLabel = {
  live: "Live",
  soon: "In development",
  code: "Source only",
  private: "Private beta",
};

function ProjectLinks({ p, className = "" }) {
  if (!p.demo && !p.code) {
    return (
      <p className={`font-mono text-xs uppercase tracking-[0.14em] text-faint ${className}`}>
        Private beta — demo on request
      </p>
    );
  }
  return (
    <div className={`flex items-baseline gap-6 font-mono text-xs uppercase tracking-[0.14em] ${className}`}>
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noreferrer" className="link-fade">
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
    </div>
  );
}

function Featured({ p, i }) {
  return (
    <article className="grid gap-6 border-t border-line py-14 md:grid-cols-12 md:gap-10">
      {/* left rail: number, year, status, stack */}
      <div className="md:col-span-4">
        <p className="font-mono text-sm text-faint">
          {String(i + 1).padStart(2, "0")} / {p.year}
        </p>
        <p className="label mt-2">{statusLabel[p.status]}</p>
        {p.meta && <p className="mt-6 font-mono text-sm text-ink">{p.meta}</p>}
        <ul className="mt-6 hidden md:block">
          {p.tech.map((t) => (
            <li key={t} className="label py-0.5 !text-gray">
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* right: the case study */}
      <div className="md:col-span-8">
        <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {p.title}
        </h3>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray">
          {p.description}
        </p>
        <p className="label mt-6 md:hidden">{p.tech.join(" · ")}</p>
        <ProjectLinks p={p} className="mt-8" />
      </div>
    </article>
  );
}

function Compact({ p }) {
  return (
    <article className="border-t border-line py-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
        <span className="font-mono text-sm text-faint">{p.year}</span>
      </div>
      <p className="mt-3 max-w-md leading-relaxed text-gray">{p.description}</p>
      <p className="label mt-4">{p.tech.join(" · ")}</p>
      <ProjectLinks p={p} className="mt-5" />
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="px-6 pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          title="Selected work"
          aside={`${featured.length} case studies`}
        />
        <div>
          {featured.map((p, i) => (
            <Reveal key={p.title}>
              <Featured p={p} i={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading index="02" title="More projects" aside="Code on GitHub" />
          <div className="grid gap-x-12 sm:grid-cols-2">
            {rest.map((p) => (
              <Reveal key={p.title}>
                <Compact p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
