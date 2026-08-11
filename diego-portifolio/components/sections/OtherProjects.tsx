import type { HomeDict, Locale, OtherProject } from "@/content/types";
import { getUI } from "@/lib/dictionaries";
import ProjectImage from "@/components/ProjectImage";

interface Props {
  locale: Locale;
  dict: HomeDict["other"];
  projects: OtherProject[];
}

export default function OtherProjects({ locale, dict, projects }: Props) {
  const placeholderLabel = getUI(locale).imagePlaceholderLabel;

  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
      <h2 className="text-2xl font-semibold sm:text-3xl">{dict.title}</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-lg border border-line p-4">
            <ProjectImage
              src={project.image}
              alt={project.imageAlt}
              aspect="16/10"
              placeholderLabel={placeholderLabel}
              fit="box"
            />
            <h3 className="mt-3 font-sans text-sm font-semibold text-heading">{project.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-line bg-surface px-1.5 py-0.5 text-[11px] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
