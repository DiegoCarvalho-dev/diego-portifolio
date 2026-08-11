import type { HomeDict, Locale, UIDict } from "@/content/types";
import { ui as uiPt } from "@/content/pt/ui";
import { ui as uiEn } from "@/content/en/ui";
import { home as homePt } from "@/content/pt/home";
import { home as homeEn } from "@/content/en/home";

export function getUI(locale: Locale): UIDict {
  return locale === "pt" ? uiPt : uiEn;
}

export function getHome(locale: Locale): HomeDict {
  return locale === "pt" ? homePt : homeEn;
}
