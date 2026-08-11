import fs from "node:fs";
import path from "node:path";
import { Image as ImageIcon } from "lucide-react";
import manifest from "@/lib/image-manifest.json";

type Aspect = "16/10" | "9/19.5";

interface Props {
  /** caminho dentro de public/, ex.: /images/projects/comanda-ai.webp */
  src: string;
  alt: string;
  /** proporção reservada quando a imagem ainda não existe */
  aspect: Aspect;
  /** texto do placeholder ("Imagem em breve") */
  placeholderLabel: string;
  /**
   * natural: imagem na proporção original (páginas de estudo de caso)
   * box: caixa 16:10 com object-contain (cards de projeto)
   */
  fit?: "natural" | "box";
  className?: string;
}

const DIMENSIONS: Record<string, { width: number; height: number }> = manifest;

/**
 * Renderiza uma imagem de public/ com width/height explícitos quando o
 * arquivo existe (verificado no build — o site é estático). Quando não
 * existe, renderiza um placeholder com a mesma proporção da imagem final,
 * para que o layout não mude quando o arquivo for adicionado.
 */
export default function ProjectImage({
  src,
  alt,
  aspect,
  placeholderLabel,
  fit = "natural",
  className = "",
}: Props) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));
  const dims = DIMENSIONS[src];

  if (!exists) {
    const ratio = aspect === "16/10" ? "16 / 10" : "9 / 19.5";
    const boxRatio = fit === "box" ? "16 / 10" : ratio;
    return (
      <div
        role="img"
        aria-label={placeholderLabel}
        style={{ aspectRatio: boxRatio }}
        className={`flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-surface text-muted ${className}`}
      >
        <ImageIcon size={24} aria-hidden="true" />
        <span className="text-sm">{placeholderLabel}</span>
        <code className="px-2 text-center font-mono text-xs break-all">{src}</code>
      </div>
    );
  }

  if (fit === "box") {
    return (
      <div
        style={{ aspectRatio: "16 / 10" }}
        className={`relative w-full overflow-hidden rounded-lg border border-line bg-surface ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={dims?.width}
          height={dims?.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={dims?.width}
      height={dims?.height}
      loading="lazy"
      decoding="async"
      className={`h-auto w-full rounded-lg border border-line ${className}`}
    />
  );
}
