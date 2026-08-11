import type { HomeDict } from "@/content/types";

export default function HowIWork({ dict }: { dict: HomeDict["how"] }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <h2 className="text-2xl font-semibold sm:text-3xl">{dict.title}</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {dict.pillars.map((pillar) => (
          <div key={pillar.title} className="border-t-2 border-accent-deep pt-4">
            <h3 className="font-sans text-base font-semibold text-heading">{pillar.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
