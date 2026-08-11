import { ArrowUpRight, Download } from "lucide-react";
import type { HeroDict, Locale } from "@/content/types";
import { CV_PATH, GITHUB_URL, LINKEDIN_URL } from "@/content/site";

export default function Hero({ dict, locale }: { dict: HeroDict; locale: Locale }) {
  const projectsHref = locale === "pt" ? "#projetos" : "#projects";

  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-14 sm:pb-20 sm:pt-20">
      <h1 className="text-4xl font-semibold sm:text-5xl">{dict.name}</h1>
      <p className="mt-3 text-lg font-medium text-accent sm:text-xl">{dict.role}</p>

      <p className="mt-6 max-w-[68ch] leading-relaxed text-fg sm:text-lg">{dict.positioning}</p>

      <p className="mt-4 text-sm text-muted">{dict.availability}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={projectsHref}
          className="rounded-md bg-accent-deep px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-navy"
        >
          {dict.seeProjects}
        </a>
        <a
          href={CV_PATH}
          download
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium text-fg transition-colors duration-150 hover:border-accent-deep hover:text-accent"
        >
          <Download size={16} aria-hidden="true" />
          {dict.downloadCV}
        </a>
        <a
          href={GITHUB_URL}
          rel="noopener noreferrer"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-accent"
        >
          GitHub
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a
          href={LINKEDIN_URL}
          rel="noopener noreferrer"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-accent"
        >
          LinkedIn
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
