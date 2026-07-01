"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";

export default function Achievements() {
  const featured = certifications.filter((c) => c.featured);

  return (
    <section id="achievements" className="section-shell py-28 md:py-36">
      <SectionHeading
        eyebrow="07 — Achievements"
        title="Programs worth the name-drop."
        description="Selective, competitive programs across AI, business, and finance — each verifiable at the source."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((cert, i) => (
          <motion.a
            key={cert.id}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="card-glass group flex flex-col justify-between rounded-2xl p-6 transition-colors hover:border-signal-amber/40"
          >
            <div>
              <Award size={18} className="text-signal-amber" />
              <h3 className="mt-4 font-display text-lg leading-snug text-ink">
                {cert.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-faint">{cert.issuer}</p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 font-mono text-[0.65rem] text-ink-dim group-hover:text-signal-amber transition-colors">
              Verify
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
