import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/content/types";
import { getHome, getUI } from "@/lib/dictionaries";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  REPO_URL,
  WHATSAPP_URL,
} from "@/content/site";

export default function Footer({ locale }: { locale: Locale }) {
  const ui = getUI(locale);
  const home = getHome(locale);
  const year = new Date().getFullYear();

  const contactLinks = [
    { label: home.contact.emailLabel, value: EMAIL, href: `mailto:${EMAIL}`, external: false },
    { label: home.contact.whatsappLabel, value: PHONE_DISPLAY, href: WHATSAPP_URL, external: true },
    { label: "GitHub", value: GITHUB_URL.replace("https://", ""), href: GITHUB_URL, external: true },
    {
      label: "LinkedIn",
      value: LINKEDIN_URL.replace("https://", ""),
      href: LINKEDIN_URL,
      external: true,
    },
  ];

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-serif text-base font-semibold text-heading">Diego Carvalho</p>
            <p className="mt-1 text-sm text-muted">{home.hero.role}</p>
            <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-muted">
              {home.hero.availability}
            </p>
          </div>

          <nav aria-label={ui.footerNavTitle}>
            <p className="text-sm font-semibold text-heading">{ui.footerNavTitle}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {ui.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted transition-colors duration-150 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-heading">{ui.footerContactTitle}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted transition-colors duration-150 hover:text-accent"
                    {...(link.external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-sm text-muted">
          <p>© {year} Diego Carvalho</p>
          <a
            href={REPO_URL}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-accent"
          >
            {ui.footerRepoLabel}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
