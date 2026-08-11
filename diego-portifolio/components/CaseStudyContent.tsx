import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { CaseStudy, CaseStudyDict, Locale } from "@/content/types";
import CaseImage from "@/components/CaseImage";

interface Props {
  locale: Locale;
  dict: CaseStudyDict;
  item: CaseStudy;
}

export default function CaseStudyContent({ locale, dict, item }: Props) {
  const backHref = locale === "pt" ? "/#projetos" : "/en/#projects";
  const narrowImage = item.image.kind === "photo" && item.image.aspect === "9/19.5";

  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        {dict.backToProjects}
      </Link>

      <article className="mt-8">
        <header>
          {item.confidentialityLabel ? (
            <p className="mb-3 text-xs text-muted">{item.confidentialityLabel}</p>
          ) : null}
          <h1 className="text-3xl font-semibold sm:text-4xl">{item.title}</h1>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-muted">{item.cardSummary}</p>
          <div className="mt-8">
            <CaseImage
              image={item.image}
              locale={locale}
              className={narrowImage ? "mx-auto max-w-[280px]" : ""}
            />
          </div>
        </header>

        <section className="mt-10">
          <h2 className="text-xl font-semibold sm:text-2xl">{dict.sections.context}</h2>
          <p className="mt-3 max-w-[68ch] leading-relaxed">{item.context}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold sm:text-2xl">{dict.sections.problem}</h2>
          <p className="mt-3 max-w-[68ch] leading-relaxed">{item.problem}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold sm:text-2xl">{dict.sections.built}</h2>
          <p className="mt-3 max-w-[68ch] leading-relaxed">{item.built}</p>
        </section>

        {/* A seção mais importante do site: decisões técnicas com destaque visual. */}
        <section className="mt-10 rounded-xl border border-line border-l-4 border-l-accent-deep bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold sm:text-2xl">{dict.sections.decisions}</h2>
          <ul className="mt-5 space-y-5">
            {item.decisions.map((decision) => (
              <li key={decision.lead} className="max-w-[68ch] leading-relaxed">
                <strong className="font-semibold text-heading">{decision.lead}:</strong>{" "}
                {decision.body}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold sm:text-2xl">{dict.sections.result}</h2>
          <p className="mt-3 max-w-[68ch] leading-relaxed">{item.result}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold sm:text-2xl">{dict.sections.stack}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-line bg-surface px-2.5 py-1 text-sm text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {item.repoUrl ? (
          <a
            href={item.repoUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="mt-10 inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium text-fg transition-colors duration-150 hover:border-accent-deep hover:text-accent"
          >
            {dict.sections.repo}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ) : null}
      </article>
    </main>
  );
}
