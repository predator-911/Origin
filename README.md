# Lakshya Kumar Portfolio

A dark, typography-led portfolio built with Next.js 15, TypeScript, Tailwind CSS,
Framer Motion, Lenis smooth scrolling, and Lucide icons. It uses local data files
for portfolio content, public links, credentials, and project metadata, with no
paid APIs, API keys, or hosted database required.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run lint
npm run type-check
npm run build
```

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Works with zero config on:
- **Vercel** (recommended, `vercel deploy`)
- **Netlify** (`netlify deploy`, uses `@netlify/plugin-nextjs` automatically)
- **Cloudflare Pages** (via `@cloudflare/next-on-pages`)

No environment variables are required.

## Content structure

All editable content lives in `/data`:
- `links.ts`, name, tagline, social/contact links
- `experience.ts`, career milestones for Journey and Experience sections
- `projects.ts`, project case-study data for AI Lab and Projects sections
- `certifications.ts`, credential data for Achievements and Vault sections
- `skills.ts`, grouped skill taxonomy

The resume download uses `public/resume.pdf`, which is included in this repository.

## Design notes

- The hero is typography-led and motion-driven, with no external image or avatar dependency.
- Project covers are procedurally generated SVGs in `components/ui/ProjectCover.tsx`, seeded deterministically from each project's id.
- The GitHub Dashboard fetches live from the public GitHub REST API (`api.github.com`) client-side, no key needed, with a graceful fallback if rate-limited.
- Reduced-motion is respected by the Lenis smooth-scroll wrapper and global CSS motion safeguards.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lenis · Lucide Icons
