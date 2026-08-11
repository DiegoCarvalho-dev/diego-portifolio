export type Locale = "pt" | "en";

export interface NavItem {
  label: string;
  href: string;
}

export interface UIDict {
  /** aria-label do link que troca de idioma */
  switchLocaleLabel: string;
  /** texto curto exibido no alternador ("EN" na página PT, "PT" na EN) */
  switchLocaleShort: string;
  themeToggleLabel: string;
  skipToContent: string;
  navLabel: string;
  nav: NavItem[];
  footerRepoLabel: string;
  imagePlaceholderLabel: string;
}

export interface HeroDict {
  name: string;
  role: string;
  positioning: string;
  availability: string;
  seeProjects: string;
  downloadCV: string;
}

export interface Pillar {
  title: string;
  body: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  place?: string;
  period: string;
  body: string;
  /** feitos de maior peso, exibidos como lista curta */
  highlights?: string[];
}

export interface HomeDict {
  hero: HeroDict;
  how: { title: string; pillars: Pillar[] };
  featured: { title: string; openCaseStudy: string };
  other: { title: string };
  stack: { title: string; groups: { name: string; items: string }[] };
  experience: { title: string; items: ExperienceItem[] };
  about: { title: string; body: string; photoAlt: string };
  contact: { title: string; emailLabel: string; whatsappLabel: string; downloadCV: string };
}

export interface OtherProject {
  title: string;
  description: string;
  stack: string[];
  /** caminho da imagem dentro de public/ */
  image: string;
  imageAlt: string;
}

export type ImageAspect = "16/10" | "9/19.5" | "3/4";

export type CaseImage =
  | { kind: "photo"; src: string; alt: string; aspect: ImageAspect }
  | { kind: "diagram"; id: "iiot" | "hr" };

export interface DiagramsDict {
  iiot: {
    title: string;
    sensors: string;
    broker: string;
    api: string;
    db: string;
    web: string;
    mobile: string;
    stream: string;
  };
  hr: {
    title: string;
    importers: string;
    api: string;
    db: string;
    portal: string;
    manager: string;
    tenancy: string;
  };
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** período de desenvolvimento (ex.: "jul/2026 – atual") */
  period?: string;
  cardSummary: string;
  stack: string[];
  /** rótulo de confidencialidade (apenas nos projetos profissionais) */
  confidentialityLabel?: string;
  context: string;
  problem: string;
  built: string;
  decisions: { lead: string; body: string }[];
  result: string;
  image: CaseImage;
  repoUrl?: string;
  metaDescription: string;
}

export interface CaseStudyDict {
  backToProjects: string;
  sections: {
    context: string;
    problem: string;
    built: string;
    decisions: string;
    result: string;
    stack: string;
    repo: string;
  };
  items: CaseStudy[];
}
