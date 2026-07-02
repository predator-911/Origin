"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { rotatingWords, links } from "@/data/links";

const heroStats = [
  ["Top 0.5%", "Amazon ML Summer School"],
  ["15+", "Applied AI systems"],
  ["7", "Cross-functional teams"],
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springX = useSpring(pointerX, { stiffness: 80, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [7, -7]);
  const rotateY = useTransform(springX, [0, 1], [-9, 9]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      onMouseMove={(event) => {
        pointerX.set(event.clientX / window.innerWidth);
        pointerY.set(event.clientY / window.innerHeight);
      }}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-grid-overlay bg-grid" aria-hidden="true" />
      <div className="orbital-glow left-[12%] top-[18%] bg-signal-violet/30" aria-hidden="true" />
      <div className="orbital-glow right-[8%] top-[42%] bg-signal-cyan/20 animation-delay-700" aria-hidden="true" />
      <motion.div
        style={{ x: useTransform(springX, [0, 1], [-35, 35]), y: useTransform(springY, [0, 1], [-25, 25]) }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(110,91,255,0.2),transparent_34%)]"
        aria-hidden="true"
      />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.72fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow mb-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-violet shadow-[0_0_24px_rgba(110,91,255,0.9)]" />
            AI Systems Engineer, Delhi, India
          </motion.p>

          <h1 className="font-display max-w-5xl text-[15vw] font-semibold leading-[0.88] tracking-[-0.08em] text-ink sm:text-[10vw] md:text-[7vw] lg:text-[5.8rem]">
            {["Ship", "intelligence", "with taste."].map((word, i) => (
              <motion.span key={word} initial={{ opacity: 0, y: 48, filter: "blur(18px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.9, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }} className={i === 1 ? "block text-gradient" : "block"}>
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-dim md:text-xl">
            I turn ambiguous AI ideas into grounded products: evaluated LLMs, retrieval systems, computer vision pipelines, analytics workflows, and polished demos that people can actually use.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.65 }} className="mt-8 flex h-8 items-center gap-3 font-mono text-sm text-ink-dim">
            <span className="text-signal-cyan">{"//"}</span>
            <motion.span key={index} initial={{ opacity: 0, y: 8, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} className="text-ink">
              {rotatingWords[index]}
            </motion.span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.78 }} className="mt-11 flex flex-wrap items-center gap-4">
            <a href="#projects" className="premium-button group"><span>Explore the work</span><ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            <a href={links.resume} className="ghost-button">Download resume</a>
          </motion.div>
        </div>

        <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.35 }} className="card-glass relative hidden min-h-[520px] overflow-hidden rounded-[2rem] p-7 shadow-2xl lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(76,201,240,0.18),transparent_32%),radial-gradient(circle_at_75%_70%,rgba(255,180,84,0.14),transparent_30%)]" />
          <div className="relative flex items-center justify-between"><span className="eyebrow">Live operating profile</span><Sparkles className="text-signal-amber" size={18} /></div>
          <div className="relative mt-16 rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
            <div className="h-32 rounded-2xl bg-[conic-gradient(from_120deg,#6e5bff,#4cc9f0,#ffb454,#6e5bff)] p-px"><div className="h-full rounded-2xl bg-base/90" /></div>
            <div className="mt-6 space-y-3">{["RAG retrieval quality", "LLM rubric evaluation", "Production deployment"].map((item, i) => (<div key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-signal-cyan" /><span className="text-sm text-ink-dim">{item}</span><span className="ml-auto font-mono text-xs text-ink">{96 - i * 4}%</span></div>))}</div>
          </div>
          <div className="relative mt-6 grid grid-cols-3 gap-3">{heroStats.map(([value, label]) => (<div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><div className="font-display text-2xl text-ink">{value}</div><div className="mt-1 text-[0.68rem] text-ink-faint">{label}</div></div>))}</div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }} className="section-shell absolute bottom-8 left-0 right-0 hidden items-center justify-between md:flex">
        <span className="eyebrow">Scroll to explore</span><ArrowDown size={16} className="animate-bounce text-ink-dim" />
      </motion.div>
    </section>
  );
}
