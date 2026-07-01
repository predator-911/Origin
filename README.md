# Lakshya Kumar — Portfolio

A dark, typography-led portfolio built with Next.js 15, TypeScript, Tailwind CSS,
Framer Motion, GSAP-ready structure, and Lenis smooth scrolling. Zero paid APIs,
zero API keys, zero hosted database — all content lives in local data files.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Works with zero config on:
- **Vercel** (recommended — `vercel deploy`)
- **Netlify** (`netlify deploy`, uses `@netlify/plugin-nextjs` automatically)
- **Cloudflare Pages** (via `@cloudflare/next-on-pages`)

No environment variables are required.

## ⚠️ Before you publish — read this

Two things were generated for you and need a pass of your own review:

1. **Career & project narrative copy.** The Mission/Challenge/Solution/Impact
   text in `data/experience.ts` and the Problem/Approach/Architecture/Impact
   text in `data/projects.ts` were drafted to fit each role and project name,
   since the original brief didn't include those write-ups. Every real link
   (GitHub, LinkedIn, live demos, certification URLs) is genuine and untouched
   — but the *prose* describing what you did, why, and what it achieved is
   placeholder-quality filler and should be rewritten with what you actually
   did before this goes live anywhere public (recruiters, LinkedIn, etc.).
   Both files are plain TypeScript arrays — easy to edit directly.

2. **Resume file.** The "Download Resume" buttons link to `/public/resume.pdf`,
   which doesn't exist yet. Drop your resume PDF into `public/resume.pdf` and
   it'll work immediately.

## Content structure

All editable content lives in `/data`:
- `links.ts` — name, tagline, social/contact links
- `experience.ts` — 7 career milestones (Journey + Experience sections)
- `projects.ts` — 15 projects (AI Lab + Projects sections)
- `certifications.ts` — all certifications (Achievements + Vault sections)
- `skills.ts` — skill groups

## Design notes

- **No AI-generated avatar.** The hero is typography-led by design (per your
  direction) — no character illustration.
- **Project covers are procedurally generated SVGs** (`components/ui/ProjectCover.tsx`),
  seeded deterministically from each project's id. No image assets, no
  generation API.
- **GitHub Dashboard** fetches live from the public GitHub REST API
  (`api.github.com`) client-side — no key needed, with a graceful fallback if
  rate-limited.
- Reduced-motion is respected throughout (Lenis disables itself, CSS
  transitions collapse via `prefers-reduced-motion`).

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion ·
Lenis · Lucide Icons · Zustand-ready (not yet wired to any section)
