import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudies } from "@/lib/dictionaries";
import { CASE_SLUGS, casePath } from "@/lib/routes";
import CaseStudyContent from "@/components/CaseStudyContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudies("pt").items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudies("pt").items.find((c) => c.slug === slug);
  if (!item) return {};
  const pair = CASE_SLUGS.find((s) => s.pt === slug);
  const canonical = casePath("pt", slug);
  return {
    title: `${item.title} — Diego Carvalho`,
    description: item.metaDescription,
    alternates: {
      canonical,
      languages: pair
        ? { "pt-BR": canonical, en: casePath("en", pair.en), "x-default": canonical }
        : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dict = getCaseStudies("pt");
  const item = dict.items.find((c) => c.slug === slug);
  if (!item) notFound();

  return <CaseStudyContent locale="pt" dict={dict} item={item} />;
}
