import type { HomeDict, Locale } from "@/content/types";

export default function Experience({
  locale,
  dict,
}: {
  locale: Locale;
  dict: HomeDict["experience"];
}) {
  const id = locale === "pt" ? "experiencia" : "experience";

  return (
    <section id={id} className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <h2 className="text-2xl font-semibold sm:text-3xl">{dict.title}</h2>
      <ol className="mt-8 space-y-8 border-l border-line pl-6">
        {dict.items.map((item) => (
          <li key={item.org} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent-deep bg-bg"
            />
            <h3 className="font-sans text-base font-semibold text-heading">
              {item.role} — {item.org}
            </h3>
            <p className="mt-0.5 text-sm text-muted">
              {item.place ? `${item.place} · ` : ""}
              {item.period}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
