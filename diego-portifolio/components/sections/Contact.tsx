import { ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import type { HomeDict, Locale } from "@/content/types";
import {
  CV_PATH,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/content/site";

export default function Contact({ locale, dict }: { locale: Locale; dict: HomeDict["contact"] }) {
  const id = locale === "pt" ? "contato" : "contact";

  const rows = [
    {
      label: dict.emailLabel,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: <Mail size={16} aria-hidden="true" />,
      external: false,
    },
    {
      label: dict.whatsappLabel,
      value: PHONE_DISPLAY,
      href: WHATSAPP_URL,
      icon: <MessageCircle size={16} aria-hidden="true" />,
      external: true,
    },
    {
      label: "GitHub",
      value: GITHUB_URL.replace("https://", ""),
      href: GITHUB_URL,
      icon: <ArrowUpRight size={16} aria-hidden="true" />,
      external: true,
    },
    {
      label: "LinkedIn",
      value: LINKEDIN_URL.replace("https://", ""),
      href: LINKEDIN_URL,
      icon: <ArrowUpRight size={16} aria-hidden="true" />,
      external: true,
    },
  ];

  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
      <h2 className="text-2xl font-semibold sm:text-3xl">{dict.title}</h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {rows.map((row) => (
          <li key={row.label}>
            <a
              href={row.href}
              className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-colors duration-150 hover:border-accent-deep"
              {...(row.external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-deep/15 text-accent"
              >
                {row.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-heading">{row.label}</span>
                <span className="block truncate text-sm text-muted transition-colors duration-150 group-hover:text-accent">
                  {row.value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={CV_PATH}
        download
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent-deep px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-navy"
      >
        <Download size={16} aria-hidden="true" />
        {dict.downloadCV}
      </a>
    </section>
  );
}
