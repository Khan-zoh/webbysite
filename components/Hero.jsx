"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

// each headline line slides up out of an overflow-hidden mask
const line = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="flex min-h-screen flex-col px-6 pt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col"
      >
        <p className="label">
          <motion.span variants={fade} className="inline-block">
            Zohair Khan — Industrial Engineering, Texas A&amp;M &rsquo;27
          </motion.span>
        </p>

        <h1 className="mt-10 font-semibold leading-[0.98] tracking-[-0.03em]">
          <span className="block overflow-hidden">
            <motion.span
              variants={line}
              className="block text-[clamp(3.2rem,10vw,8rem)]"
            >
              I turn raw data
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={line}
              className="block text-[clamp(3.2rem,10vw,8rem)]"
            >
              into{" "}
              <em className="font-serif font-normal italic tracking-normal">
                working systems.
              </em>
            </motion.span>
          </span>
        </h1>

        <motion.p
          variants={fade}
          className="mt-10 max-w-xl text-lg leading-relaxed text-gray sm:text-xl"
        >
          The pipeline that cleans a million records, the model that scores
          them, and the dashboard someone actually uses. I&rsquo;ve done it
          for Medicare fraud, subscriber churn, and a supply chain that only
          exists in software.
        </motion.p>

        <motion.div variants={fade} className="mt-9 flex items-baseline gap-8">
          <a href="#work" className="link-fade font-mono text-sm uppercase tracking-[0.14em]">
            Selected work ↓
          </a>
          <a
            href="https://github.com/Khan-zoh"
            target="_blank"
            rel="noreferrer"
            className="link-grow font-mono text-sm uppercase tracking-[0.14em] text-gray"
          >
            GitHub ↗
          </a>
        </motion.div>

        {/* bottom line of the viewport */}
        <motion.div
          variants={fade}
          className="mt-auto flex flex-wrap items-baseline justify-between gap-2 border-t border-line py-5"
        >
          <span className="label">
            Now — AI document intelligence extern @ Pfizer
          </span>
          <span className="label hidden sm:block">
            Open to data internships
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
