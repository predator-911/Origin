"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronDown } from "lucide-react";
import ProjectCover from "@/components/ui/ProjectCover";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="card-glass overflow-hidden rounded-2xl"
    >
      <div className="h-40 w-full">
        <ProjectCover id={project.id} accent={project.accent} />
      </div>

      <div className="p-6">
        <p className="eyebrow mb-2 text-ink-faint">{project.category}</p>
        <h3 className="font-display text-xl text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-dim">{project.problem}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-base-border px-2.5 py-1 font-mono text-[0.62rem] text-ink-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium text-base transition-transform hover:scale-105"
          >
            Live Demo <ArrowUpRight size={12} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-base-border px-4 py-2 text-xs font-medium text-ink-dim hover:border-signal-violet hover:text-signal-violet transition-colors"
          >
            <Github size={12} /> Code
          </a>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="ml-auto flex items-center gap-1 font-mono text-[0.65rem] text-ink-faint hover:text-ink transition-colors"
          >
            Case Study
            <ChevronDown
              size={13}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-4 border-t border-base-border pt-5">
                <div>
                  <p className="eyebrow mb-1.5 text-signal-cyan">Approach</p>
                  <p className="text-sm leading-relaxed text-ink-dim">{project.approach}</p>
                </div>
                <div>
                  <p className="eyebrow mb-1.5 text-signal-violet">Architecture</p>
                  <p className="text-sm leading-relaxed text-ink-dim">{project.architecture}</p>
                </div>
                <div>
                  <p className="eyebrow mb-1.5 text-ink">Business Impact</p>
                  <p className="text-sm leading-relaxed text-ink-dim">{project.impact}</p>
                </div>
                <div>
                  <p className="eyebrow mb-1.5 text-signal-amber">Lessons Learned</p>
                  <p className="text-sm leading-relaxed text-ink-dim">{project.lessons}</p>
                </div>
                <div>
                  <p className="eyebrow mb-1.5 text-ink-faint">Future Improvements</p>
                  <p className="text-sm leading-relaxed text-ink-dim">{project.future}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
