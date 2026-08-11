import { Inter, Source_Serif_4 } from "next/font/google";

// next/font baixa as fontes no build e serve os arquivos junto com o site:
// nenhuma requisição externa em runtime, subset latino, font-display: swap.
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
});
