import type { Locale } from "@/content/types";
import { getUI } from "@/lib/dictionaries";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header({ locale }: { locale: Locale }) {
  const ui = getUI(locale);
  const homeHref = locale === "pt" ? "/" : "/en/";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <a
          href={homeHref}
          className="font-serif text-base font-semibold text-heading transition-colors duration-150 hover:text-accent"
        >
          Diego Carvalho
        </a>

        <nav aria-label={ui.navLabel} className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm">
            {ui.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted transition-colors duration-150 hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher
            locale={locale}
            label={ui.switchLocaleLabel}
            short={ui.switchLocaleShort}
          />
          <ThemeToggle label={ui.themeToggleLabel} />
        </div>
      </div>
    </header>
  );
}
