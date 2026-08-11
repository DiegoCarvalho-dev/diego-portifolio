import type { HomeDict, Locale } from "@/content/types";
import { getUI } from "@/lib/dictionaries";
import ProjectImage from "@/components/ProjectImage";

export default function About({ locale, dict }: { locale: Locale; dict: HomeDict["about"] }) {
  const id = locale === "pt" ? "sobre" : "about";

  return (
    <section id={id} className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <h2 className="text-2xl font-semibold sm:text-3xl">{dict.title}</h2>
      <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row">
        <div className="w-32 shrink-0 sm:w-40">
          <ProjectImage
            src="/images/foto-perfil.webp"
            alt={dict.photoAlt}
            aspect="3/4"
            placeholderLabel={getUI(locale).imagePlaceholderLabel}
          />
        </div>
        <p className="max-w-[65ch] leading-relaxed text-fg">{dict.body}</p>
      </div>
    </section>
  );
}
