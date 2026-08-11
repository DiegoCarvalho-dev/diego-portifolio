"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";
import { pathInLocale } from "@/lib/routes";

interface Props {
  locale: Locale;
  label: string;
  short: string;
}

export default function LanguageSwitcher({ locale, label, short }: Props) {
  const pathname = usePathname() ?? "/";
  const target: Locale = locale === "pt" ? "en" : "pt";
  const href = pathInLocale(pathname, target);

  return (
    <a
      href={href}
      hrefLang={target === "pt" ? "pt-BR" : "en"}
      aria-label={label}
      className="rounded-md px-2 py-1.5 text-sm font-medium text-muted transition-colors duration-150 hover:bg-surface hover:text-fg"
    >
      {short}
    </a>
  );
}
