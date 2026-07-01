"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { rotatingWords, tagline, links } from "@/data/links";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-grid-overlay bg-grid" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-violet/20 blur-[160px]"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6 flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal-violet" />
          AI Systems Engineer — Delhi, India
        </motion.p>

        <h1 className="font-display max-w-5xl text-[13vw] font-medium leading-[0.98] tracking-tight text-ink sm:text-[9vw] md:text-[6.4vw] lg:text-[5.4rem]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block"
          >
            Building intelligent
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="block text-gradient"
          >
            systems that solve
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="block"
          >
            real-world problems.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex h-8 items-center gap-3 font-mono text-sm text-ink-dim"
        >
          <span className="text-signal-cyan">{"//"}</span>
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {rotatingWords[index]}
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-base transition-transform hover:scale-[1.03]"
          >
            Explore My Work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={links.resume}
            className="inline-flex items-center gap-2 rounded-full border border-base-border px-6 py-3.5 text-sm font-medium text-ink hover:border-signal-violet hover:text-signal-violet transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="section-shell absolute bottom-10 left-0 right-0 hidden items-center justify-between md:flex"
      >
        <span className="eyebrow">Scroll to explore</span>
        <ArrowDown size={16} className="text-ink-dim animate-bounce" />
      </motion.div>
    </section>
  );
}
