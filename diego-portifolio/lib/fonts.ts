import { Inter, Source_Serif_4 } from "next/font/google";

// next/font baixa as fontes no build e serve os arquivos junto com o site:
// nenhuma requisição externa em runtime, subset latino, font-display: swap.
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// preload: false — a serifa só aparece em títulos (que não são o LCP);
// sem preload ela não disputa banda com a fonte do corpo no primeiro paint.
export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
  preload: false,
});
