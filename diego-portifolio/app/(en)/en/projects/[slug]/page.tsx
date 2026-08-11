import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudies } from "@/lib/dictionaries";
import CaseStudyContent from "@/components/CaseStudyContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudies("en").items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudies("en").items.find((c) => c.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Diego Carvalho`,
    description: item.metaDescription,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dict = getCaseStudies("en");
  const item = dict.items.find((c) => c.slug === slug);
  if (!item) notFound();

  return <CaseStudyContent locale="en" dict={dict} item={item} />;
}
