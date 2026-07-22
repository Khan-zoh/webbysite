"use client";

const links = [
  ["#work", "Work"],
  ["#experience", "Experience"],
  ["#about", "About"],
  ["#contact", "Contact"],
];

/**
 * Fixed text-only nav. White text + mix-blend-difference renders as
 * black over the paper sections and white over the black contact
 * section, with no scroll listeners needed.
 */
export default function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-baseline justify-between px-6 py-5 text-white">
        <a
          href="#top"
          className="link-grow pointer-events-auto font-mono text-sm font-bold tracking-tight"
        >
          Z—K
        </a>
        <nav className="flex items-baseline gap-5 sm:gap-7">
          {links.map(([href, label], i) => (
            <a
              key={href}
              href={href}
              className={`link-grow pointer-events-auto font-mono text-xs uppercase tracking-[0.14em] ${
                i > 0 && i < links.length - 1 ? "hidden sm:inline-block" : ""
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="link-fade pointer-events-auto font-mono text-xs uppercase tracking-[0.14em]"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
