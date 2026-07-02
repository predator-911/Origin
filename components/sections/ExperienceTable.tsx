"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function ExperienceTable() {
  return (
    <section id="experience" className="section-shell py-28 md:py-36">
      <SectionHeading
        eyebrow="05 / Experience"
        title="An interactive production timeline."
        description="A compact log of roles, missions, and stacks, designed for recruiters who scan quickly and engineers who want the details."
      />

      <div className="relative pl-4 md:pl-8">
        <div className="absolute bottom-6 left-[1.05rem] top-6 w-px bg-gradient-to-b from-signal-violet via-signal-cyan to-transparent md:left-[2.05rem]" aria-hidden="true" />
        <div className="space-y-5">
          {experience.map((role, i) => (
            <motion.article
              key={role.id}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="card-glass spotlight-card relative rounded-3xl p-5 md:p-6"
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
                event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
              }}
            >
              <span className="absolute -left-[1.62rem] top-7 h-3.5 w-3.5 rounded-full border border-signal-cyan bg-base shadow-[0_0_22px_rgba(76,201,240,0.8)] md:-left-[2.62rem]" />
              <div className="relative grid gap-4 lg:grid-cols-[0.8fr_1fr_1.4fr] lg:items-start">
                <div>
                  <p className="font-mono text-xs text-signal-cyan">{role.period}</p>
                  <h3 className="mt-2 font-display text-2xl text-ink">{role.company}</h3>
                  <p className="mt-1 text-sm text-ink-faint">{role.location}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{role.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{role.impact}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {role.technologies.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.62rem] text-ink-dim">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
