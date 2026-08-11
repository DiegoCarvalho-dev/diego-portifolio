import type { HomeDict } from "@/content/types";

export default function StackSection({ dict }: { dict: HomeDict["stack"] }) {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
      <h2 className="text-2xl font-semibold sm:text-3xl">{dict.title}</h2>
      <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {dict.groups.map((group) => (
          <div key={group.name}>
            <dt className="font-sans text-sm font-semibold text-heading">{group.name}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">{group.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
