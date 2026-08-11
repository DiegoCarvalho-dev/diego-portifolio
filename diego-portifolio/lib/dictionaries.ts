import type {
  CaseStudyDict,
  DiagramsDict,
  HomeDict,
  Locale,
  OtherProject,
  UIDict,
} from "@/content/types";
import { ui as uiPt } from "@/content/pt/ui";
import { ui as uiEn } from "@/content/en/ui";
import { home as homePt } from "@/content/pt/home";
import { home as homeEn } from "@/content/en/home";
import { caseStudies as casesPt } from "@/content/pt/case-studies";
import { caseStudies as casesEn } from "@/content/en/case-studies";
import { otherProjects as otherPt } from "@/content/pt/other-projects";
import { otherProjects as otherEn } from "@/content/en/other-projects";
import { diagrams as diagramsPt } from "@/content/pt/diagrams";
import { diagrams as diagramsEn } from "@/content/en/diagrams";

export function getUI(locale: Locale): UIDict {
  return locale === "pt" ? uiPt : uiEn;
}

export function getHome(locale: Locale): HomeDict {
  return locale === "pt" ? homePt : homeEn;
}

export function getCaseStudies(locale: Locale): CaseStudyDict {
  return locale === "pt" ? casesPt : casesEn;
}

export function getOtherProjects(locale: Locale): OtherProject[] {
  return locale === "pt" ? otherPt : otherEn;
}

export function getDiagrams(locale: Locale): DiagramsDict {
  return locale === "pt" ? diagramsPt : diagramsEn;
}
