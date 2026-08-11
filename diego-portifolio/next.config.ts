import type { NextConfig } from "next";

// Export estático: `npm run build` gera a pasta `out/` pronta para
// qualquer hospedagem estática. Sem servidor Node, sem otimizador de imagem.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
