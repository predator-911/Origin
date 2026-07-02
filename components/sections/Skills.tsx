"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="section-shell py-28 md:py-36">
      <SectionHeading
        eyebrow="06 / Skills"
        title="A stack built for the whole pipeline."
        description="Hover a category to bring its tools forward. No arbitrary percentages, depth here is demonstrated in the projects and journey above, not scored out of ten."
      />

      <div className="grid gap-3 md:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHovered(group.category)}
            onMouseLeave={() => setHovered(null)}
            className="card-glass rounded-2xl p-6 transition-colors hover:border-signal-violet/40"
          >
            <p className="eyebrow mb-4 text-ink">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-200 ${
                    hovered === group.category
                      ? "border-signal-violet/50 bg-signal-violet/10 text-ink"
                      : "border-base-border text-ink-dim"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
