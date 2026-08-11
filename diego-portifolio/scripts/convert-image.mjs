/**
 * Converte uma imagem para WebP dentro de public/images/ e registra as
 * dimensões finais em lib/image-manifest.json (usado para width/height
 * explícitos nas tags <img>, evitando deslocamento de layout).
 *
 * Uso:
 *   npm run convert-image -- <entrada> <saida-relativa-a-public/images> [--max <largura>]
 *
 * Exemplos:
 *   npm run convert-image -- foto-nova.png projects/comanda-ai.webp
 *   npm run convert-image -- print-celular.png projects/driving.webp --max 800
 *
 * Largura máxima padrão: 1600px (use --max 800 para capturas de celular).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const maxFlag = args.indexOf("--max");
const maxWidth = maxFlag !== -1 ? Number(args[maxFlag + 1]) : 1600;
const positional = maxFlag !== -1 ? args.filter((_, i) => i !== maxFlag && i !== maxFlag + 1) : args;
const [input, output] = positional;

if (!input || !output || Number.isNaN(maxWidth)) {
  console.error(
    "Uso: npm run convert-image -- <entrada> <saida-relativa-a-public/images> [--max <largura>]",
  );
  process.exit(1);
}

const root = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const projectRoot = path.resolve(root, "..");
const outputPath = path.join(projectRoot, "public", "images", output);
const manifestPath = path.join(projectRoot, "lib", "image-manifest.json");

fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const info = await sharp(path.resolve(input))
  .resize({ width: maxWidth, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(outputPath);

const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : {};
manifest[`/images/${output.replace(/\\/g, "/")}`] = { width: info.width, height: info.height };

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(manifestPath, JSON.stringify(sorted, null, 2) + "\n");

console.log(
  `ok: /images/${output.replace(/\\/g, "/")} (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB)`,
);
