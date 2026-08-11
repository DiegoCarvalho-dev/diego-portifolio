import type { Locale } from "@/content/types";
import { getUI } from "@/lib/dictionaries";
import { REPO_URL } from "@/content/site";

export default function Footer({ locale }: { locale: Locale }) {
  const ui = getUI(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm text-muted">
        <p>Diego Carvalho · {year}</p>
        <a
          href={REPO_URL}
          rel="noopener noreferrer"
          target="_blank"
          className="transition-colors duration-150 hover:text-accent"
        >
          {ui.footerRepoLabel}
        </a>
      </div>
    </footer>
  );
}
