"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function ExperienceTable() {
  return (
    <section id="experience" className="section-shell py-28 md:py-36">
      <SectionHeading
        eyebrow="05 — Experience"
        title="The record, at a glance."
        description="A fast scan of the full log above — role, timeframe, and stack, for anyone comparing at a glance."
      />

      <div className="card-glass overflow-hidden rounded-2xl">
        <div className="hidden grid-cols-12 gap-4 border-b border-base-border px-6 py-4 font-mono text-[0.65rem] uppercase tracking-widest2 text-ink-faint md:grid">
          <div className="col-span-3">Company</div>
          <div className="col-span-3">Role</div>
          <div className="col-span-2">Period</div>
          <div className="col-span-4">Stack</div>
        </div>
        {experience.map((role, i) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="grid grid-cols-1 gap-2 border-b border-base-border px-6 py-5 last:border-0 md:grid-cols-12 md:items-center md:gap-4"
          >
            <div className="col-span-3 font-display text-base text-ink">{role.company}</div>
            <div className="col-span-3 text-sm text-ink-dim">{role.role}</div>
            <div className="col-span-2 font-mono text-xs text-ink-faint">{role.period}</div>
            <div className="col-span-4 flex flex-wrap gap-1.5">
              {role.technologies.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-base-border px-2.5 py-0.5 font-mono text-[0.6rem] text-ink-faint"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
