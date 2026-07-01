"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { links } from "@/data/links";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Vault", href: "#vault" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/80 backdrop-blur-md border-b border-base-border" : ""
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="font-mono text-sm tracking-widest2 text-ink hover:text-signal-violet transition-colors"
        >
          LK<span className="text-signal-violet">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="eyebrow text-[0.68rem] text-ink-dim hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={links.resume}
          className="hidden items-center gap-1.5 rounded-full border border-base-border px-4 py-2 text-xs font-medium text-ink hover:border-signal-violet hover:text-signal-violet transition-colors lg:flex"
        >
          Resume <ArrowUpRight size={13} />
        </a>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-ink"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-base/98 backdrop-blur-lg lg:hidden"
          >
            <div className="section-shell flex h-16 items-center justify-between">
              <span className="font-mono text-sm tracking-widest2 text-ink">LK.</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-ink">
                <X size={22} />
              </button>
            </div>
            <ul className="flex flex-col gap-1 px-6 pt-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl text-ink"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
