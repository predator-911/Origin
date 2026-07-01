import { links, name } from "@/data/links";

export default function Footer() {
  return (
    <footer className="border-t border-base-border py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-xs text-ink-faint md:flex-row">
        <p>
          © {new Date().getFullYear()} {name}. Built from scratch, no templates.
        </p>
        <div className="flex gap-6 font-mono">
          <a href={links.github} className="hover:text-ink transition-colors">
            GitHub
          </a>
          <a href={links.linkedin} className="hover:text-ink transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${links.email}`} className="hover:text-ink transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
