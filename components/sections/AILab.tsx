"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const labProjectIds = [
  "llmexpert-rag",
  "talentscout-ai",
  "steganography-genai",
  "grammar-scoring-engine",
];

export default function AILab() {
  const labProjects = labProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section id="ai-lab" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 bg-grid-overlay bg-grid opacity-60" aria-hidden="true" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="03 — AI Lab"
          title="Live LLM & generative experiments."
          description="Deployed, running systems — not slide-deck demos. Each one is a working endpoint you can open and test right now."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {labProjects.map((project, i) => (
            <motion.a
              key={project!.id}
              href={project!.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-glass group relative overflow-hidden rounded-2xl p-7 transition-colors hover:border-signal-violet/50"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-cyan opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-cyan" />
                </span>
                <span className="font-mono text-[0.68rem] uppercase tracking-widest2 text-signal-cyan">
                  Live
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink">{project!.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">{project!.problem}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-ink-dim group-hover:text-signal-violet transition-colors">
                Open experiment
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
