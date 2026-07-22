import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const socials = [
  ["GitHub", "https://github.com/Khan-zoh"],
  ["LinkedIn", "https://linkedin.com/in/zohair-khan-2352672a5"],
  ["Resume", "/resume.pdf"],
];

export default function Contact() {
  return (
    <section id="contact" className="mt-28 bg-ink px-6 pb-8 pt-20 text-paper">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="05" title="Contact" dark />
        <Reveal>
          <h2 className="font-semibold leading-[1.02] tracking-[-0.03em]">
            <span className="block text-[clamp(2.8rem,8.5vw,7rem)]">
              Got a data problem
            </span>
            <span className="block text-[clamp(2.8rem,8.5vw,7rem)]">
              <em className="font-serif font-normal italic tracking-normal">
                worth solving?
              </em>
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-faint">
            I&rsquo;m looking for internships in data engineering and ML. If
            you have a role, a question, or feedback on any of these
            projects, email me. I answer.
          </p>
          <a
            href="mailto:khan.zoh25@gmail.com"
            className="link-fade mt-10 inline-block font-mono text-xl tracking-tight sm:text-3xl"
          >
            khan.zoh25@gmail.com
          </a>
        </Reveal>

        <div className="mt-24 flex flex-wrap items-baseline justify-between gap-4 border-t border-line-dark pt-6">
          <p className="label">© {new Date().getFullYear()} Zohair Khan</p>
          <div className="flex gap-6">
            {socials.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="link-grow font-mono text-xs uppercase tracking-[0.14em] text-faint"
              >
                {label} ↗
              </a>
            ))}
          </div>
          <p className="label">College Station, TX</p>
        </div>
      </div>
    </section>
  );
}
