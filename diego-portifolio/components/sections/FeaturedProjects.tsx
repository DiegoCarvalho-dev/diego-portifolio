import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudyDict, HomeDict, Locale } from "@/content/types";
import { casePath } from "@/lib/routes";
import CaseImage from "@/components/CaseImage";

interface Props {
  locale: Locale;
  dict: HomeDict["featured"];
  cases: CaseStudyDict;
}

export default function FeaturedProjects({ locale, dict, cases }: Props) {
  const id = locale === "pt" ? "projetos" : "projects";

  return (
    <section id={id} className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <h2 className="text-2xl font-semibold sm:text-3xl">{dict.title}</h2>
      <div className="mt-8 space-y-6">
        {cases.items.map((item) => (
          <article
            key={item.slug}
            className="relative grid gap-5 rounded-xl border border-line p-5 transition-colors duration-150 hover:border-accent-deep sm:grid-cols-[2fr_3fr] sm:gap-6"
          >
            <CaseImage image={item.image} locale={locale} fit="box" />
            <div>
              {item.confidentialityLabel ? (
                <p className="mb-2 text-xs text-muted">{item.confidentialityLabel}</p>
              ) : null}
              <h3 className="font-sans text-lg font-semibold text-heading">
                <Link href={casePath(locale, item.slug)} className="after:absolute after:inset-0">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.cardSummary}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-line bg-surface px-2 py-0.5 text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {dict.openCaseStudy}
                <ArrowRight size={15} aria-hidden="true" />
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
