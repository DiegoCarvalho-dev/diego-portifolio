/**
 * Gera as imagens de compartilhamento (Open Graph) a partir de SVG:
 *   public/images/og.png     (1200x630, texto em português)
 *   public/images/og-en.png  (1200x630, texto em inglês)
 *
 * Para usar uma arte própria, basta substituir esses arquivos mantendo o
 * mesmo nome e o tamanho 1200x630.
 *
 * Uso: node scripts/generate-og.mjs
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function svg(role) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0f1720" />
  <rect x="0" y="0" width="1200" height="8" fill="#3c6ea5" />
  <rect x="92" y="180" width="72" height="72" rx="16" fill="#16304d" />
  <text x="128" y="229" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="700" fill="#e8edf3">DC</text>
  <text x="92" y="350" font-family="Georgia, serif" font-size="78" font-weight="700" fill="#e8edf3">Diego Carvalho</text>
  <text x="92" y="416" font-family="Arial, sans-serif" font-size="36" fill="#7fb0e6">${role}</text>
  <text x="92" y="500" font-family="Arial, sans-serif" font-size="26" fill="#9aa8b8">Natal/RN · github.com/DiegoCarvalho-dev</text>
</svg>`;
}

const targets = [
  { file: "og.png", role: "Engenheiro de Software Full Stack" },
  { file: "og-en.png", role: "Full Stack Software Engineer" },
];

for (const { file, role } of targets) {
  const out = path.join(root, "public", "images", file);
  await sharp(Buffer.from(svg(role)))
    .png()
    .toFile(out);
  console.log(`ok: public/images/${file}`);
}
