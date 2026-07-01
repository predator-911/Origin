"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, FileDown } from "lucide-react";
import { links, name } from "@/data/links";

const contactLinks = [
  { label: "Email", value: links.email, href: `mailto:${links.email}`, icon: Mail },
  { label: "GitHub", value: "@predator-911", href: links.github, icon: Github },
  {
    label: "LinkedIn",
    value: "lakshya-kumar",
    href: links.linkedin,
    icon: Linkedin,
  },
  { label: "Resume", value: "Download PDF", href: links.resume, icon: FileDown },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-violet/15 blur-[140px]"
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <p className="eyebrow mb-4">10 — Contact</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display max-w-3xl text-4xl font-medium leading-[1.1] text-ink md:text-6xl"
        >
          Have a system worth building? Let&apos;s talk.
        </motion.h2>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-glass group flex flex-col justify-between rounded-2xl p-6 transition-colors hover:border-signal-violet/40"
            >
              <item.icon size={18} className="text-signal-violet" />
              <div className="mt-8">
                <p className="eyebrow mb-1 text-ink-faint">{item.label}</p>
                <p className="flex items-center gap-1.5 text-sm text-ink">
                  {item.value}
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-16 max-w-xl text-sm text-ink-faint">
          {name} is based in Delhi, India, and open to remote and on-site roles across
          AI systems, machine learning, and generative AI engineering.
        </p>
      </div>
    </section>
  );
}
