import type { Metadata } from "next";
import "@/app/globals.css";
import { inter, sourceSerif } from "@/lib/fonts";
import { THEME_SCRIPT } from "@/lib/theme-script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ui } from "@/content/en/ui";

export const metadata: Metadata = {
  title: "Diego Carvalho — Full Stack Software Engineer",
  description:
    "Portfolio of Diego Carvalho, a full stack software engineer based in Natal, Brazil. End-to-end products: web, mobile, APIs, and databases.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
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
        <Header locale="en" />
        {children}
        <Footer locale="en" />
      </body>
    </html>
  );
}
