import type { Metadata } from "next";
import "@/app/globals.css";
import { inter, sourceSerif } from "@/lib/fonts";
import { THEME_SCRIPT } from "@/lib/theme-script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ui } from "@/content/pt/ui";

export const metadata: Metadata = {
  title: "Diego Carvalho — Engenheiro de Software Full Stack",
  description:
    "Portfólio de Diego Carvalho, engenheiro de software full stack em Natal/RN. Produtos de ponta a ponta: web, mobile, API e banco de dados.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-accent"
        >
          {ui.skipToContent}
        </a>
        <Header locale="pt" />
        {children}
        <Footer locale="pt" />
      </body>
    </html>
  );
}
