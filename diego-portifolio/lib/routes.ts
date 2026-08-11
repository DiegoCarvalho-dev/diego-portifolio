import type { Locale } from "@/content/types";

// Slugs dos estudos de caso em cada idioma (mesma ordem nos dois arrays).
export const CASE_SLUGS: { pt: string; en: string }[] = [
  { pt: "comanda-ai", en: "comanda-ai" },
  { pt: "driving", en: "driving" },
  { pt: "monitoramento-industrial", en: "industrial-monitoring" },
  { pt: "gestao-rh", en: "hr-management" },
];

export function casePath(locale: Locale, slug: string): string {
  return locale === "pt" ? `/projetos/${slug}/` : `/en/projects/${slug}/`;
}

/** Traduz o caminho atual para o equivalente no outro idioma. */
export function pathInLocale(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/+$/, "") + "/";

  if (target === "en") {
    const match = clean.match(/^\/projetos\/([^/]+)\/$/);
    if (match) {
      const pair = CASE_SLUGS.find((s) => s.pt === match[1]);
      return pair ? casePath("en", pair.en) : "/en/";
    }
    return "/en/";
  }

  const match = clean.match(/^\/en\/projects\/([^/]+)\/$/);
  if (match) {
    const pair = CASE_SLUGS.find((s) => s.en === match[1]);
    return pair ? casePath("pt", pair.pt) : "/";
  }
  return "/";
}
