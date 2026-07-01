"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "7", label: "Teams shipped with" },
  { value: "15+", label: "Systems built end-to-end" },
  { value: "20+", label: "Certifications completed" },
  { value: "8.56", label: "CGPA, B.Tech IT" },
];

export default function About() {
  return (
    <section id="about" className="section-shell py-28 md:py-36">
      <SectionHeading
        eyebrow="01 — About"
        title="I design systems, not just models."
        description="I work at the intersection of AI research and production engineering — turning open-ended problems into deployed systems that hold up under real usage, not just benchmark conditions."
      />

      <div className="grid gap-14 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <p className="text-lg leading-relaxed text-ink-dim">
            My work spans the full stack of applied AI: evaluating and fine-tuning
            large language models, building computer vision and NLP pipelines,
            deploying them through disciplined DevOps practice, and translating the
            results into business and financial decisions non-technical
            stakeholders can act on.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-dim">
            I was selected for Amazon ML Summer School 2025, placing in the top
            0.5% nationally, and I currently work as an AI evaluator building the
            rubric-driven systems that decide whether a model change is actually
            safe to ship. Before that, I built ML pipelines, NLP systems, and
            deployment infrastructure across five other teams — each one a
            different domain, the same underlying discipline.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-6 md:col-span-5"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-glass rounded-2xl p-6"
            >
              <div className="font-display text-3xl text-ink">{stat.value}</div>
              <div className="mt-2 text-xs text-ink-faint">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
