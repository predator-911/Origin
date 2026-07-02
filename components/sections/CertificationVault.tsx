"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, certificationCategories } from "@/data/certifications";

export default function CertificationVault() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory = category === "All" || cert.category === category;
      const matchesQuery =
        query.trim() === "" ||
        cert.title.toLowerCase().includes(query.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="vault" className="section-shell py-28 md:py-36">
      <SectionHeading
        eyebrow="08 / Certification Vault"
        title="Every credential, one place."
        description="Search or filter by category. Every entry opens straight to its verification source."
      />

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-xs">
          <Search
            size={15}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search certifications..."
            className="w-full rounded-full border border-base-border bg-base-surface py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint focus:border-signal-violet focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", ...certificationCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.64rem] transition-colors ${
                category === cat
                  ? "border-signal-violet bg-signal-violet/10 text-signal-violet"
                  : "border-base-border text-ink-faint hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cert) => (
          <motion.a
            key={cert.id}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card-glass group flex items-start gap-3 rounded-xl p-4 transition-colors hover:border-signal-cyan/40"
          >
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-signal-cyan" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-ink">{cert.title}</p>
              <p className="text-xs text-ink-faint">{cert.issuer}</p>
            </div>
            <ExternalLink
              size={13}
              className="mt-0.5 shrink-0 text-ink-faint group-hover:text-signal-cyan transition-colors"
            />
          </motion.a>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-ink-faint">
            No certifications match that search.
          </p>
        )}
      </div>
    </section>
  );
}
