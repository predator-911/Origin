"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { links } from "@/data/links";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

type GHUser = {
  public_repos: number;
  followers: number;
  following: number;
};

const GITHUB_USERNAME = "predator-911";

export default function GithubDashboard() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [user, setUser] = useState<GHUser | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
          ),
        ]);
        if (!userRes.ok || !repoRes.ok) throw new Error("GitHub API unavailable");
        const userData = await userRes.json();
        const repoData = await repoRes.json();
        if (!cancelled) {
          setUser(userData);
          setRepos(repoData);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="section-shell py-28 md:py-36">
      <SectionHeading
        eyebrow="09, GitHub"
        title="Pulled live from the source."
        description="Fetched directly from the public GitHub API on load, no key, no server, no stale numbers."
      />

      <div className="mb-8 flex flex-wrap items-center gap-4">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-base-border px-5 py-2.5 text-sm text-ink hover:border-signal-violet hover:text-signal-violet transition-colors"
        >
          <Github size={16} /> @{GITHUB_USERNAME}
        </a>
        {status === "ready" && user && (
          <div className="flex gap-6 font-mono text-xs text-ink-faint">
            <span>{user.public_repos} repos</span>
            <span>{user.followers} followers</span>
          </div>
        )}
      </div>

      {status === "loading" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card-glass h-32 animate-pulse rounded-2xl" />
          ))}
        </div>
      )}

      {status === "error" && (
        <div className="card-glass rounded-2xl p-8 text-center">
          <p className="text-sm text-ink-dim">
            GitHub public API rate-limited this request. View repositories directly
            instead.
          </p>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-signal-violet"
          >
            Open GitHub profile <ExternalLink size={13} />
          </a>
        </div>
      )}

      {status === "ready" && repos && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="card-glass group flex flex-col justify-between rounded-2xl p-6 transition-colors hover:border-signal-violet/40"
            >
              <div>
                <h3 className="font-display text-lg text-ink group-hover:text-signal-violet transition-colors">
                  {repo.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink-faint">
                  {repo.description ?? "No description provided."}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-4 font-mono text-xs text-ink-faint">
                {repo.language && <span>{repo.language}</span>}
                <span className="flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
