"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Journey() {
  return (
    <section id="journey" className="section-shell py-28 md:py-36">
      <SectionHeading
        eyebrow="02 — Journey"
        title="Every role, one build log."
        description="Reverse-chronological, treated as a deploy history: what the mission was, what broke, what shipped, and what it taught me."
      />

      <div className="relative">
        <div className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-base-border md:block" />

        <div className="space-y-16 md:space-y-24">
          {experience.map((role, i) => (
            <motion.article
              key={role.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative md:pl-14"
            >
              <span className="absolute left-0 top-1.5 hidden h-4 w-4 items-center justify-center rounded-full border border-signal-violet bg-base md:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-violet" />
              </span>

              <div className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-xs text-signal-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-ink md:text-3xl">
                  {role.company}
                </h3>
                <span className="text-sm text-ink-faint">{role.role}</span>
                <span className="ml-auto font-mono text-xs text-ink-faint">
                  {role.period}
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="card-glass rounded-2xl p-6">
                  <p className="eyebrow mb-2 text-signal-violet">Mission</p>
                  <p className="text-sm leading-relaxed text-ink-dim">{role.mission}</p>
                </div>
                <div className="card-glass rounded-2xl p-6">
                  <p className="eyebrow mb-2 text-signal-amber">Challenge</p>
                  <p className="text-sm leading-relaxed text-ink-dim">{role.challenge}</p>
                </div>
                <div className="card-glass rounded-2xl p-6">
                  <p className="eyebrow mb-2 text-signal-cyan">Solution</p>
                  <p className="text-sm leading-relaxed text-ink-dim">{role.solution}</p>
                </div>
                <div className="card-glass rounded-2xl p-6">
                  <p className="eyebrow mb-2 text-ink">Business Impact</p>
                  <p className="text-sm leading-relaxed text-ink-dim">{role.impact}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {role.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-base-border px-3 py-1 font-mono text-[0.68rem] text-ink-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-5 border-l-2 border-signal-violet/40 pl-4 text-sm italic text-ink-faint">
                {role.lessons}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
