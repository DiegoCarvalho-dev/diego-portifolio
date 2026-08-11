import type { CaseImage as CaseImageType, Locale } from "@/content/types";
import { getDiagrams, getUI } from "@/lib/dictionaries";
import ProjectImage from "@/components/ProjectImage";
import IiotDiagram from "@/components/diagrams/IiotDiagram";
import HrDiagram from "@/components/diagrams/HrDiagram";

interface Props {
  image: CaseImageType;
  locale: Locale;
  /** box: caixa 16:10 para cards · natural: proporção original (página do case) */
  fit?: "natural" | "box";
  className?: string;
}

/** Foto (com placeholder) para projetos pessoais; diagrama SVG para os profissionais. */
export default function CaseImage({ image, locale, fit = "natural", className }: Props) {
  if (image.kind === "diagram") {
    const diagrams = getDiagrams(locale);
    return image.id === "iiot" ? (
      <IiotDiagram dict={diagrams.iiot} />
    ) : (
      <HrDiagram dict={diagrams.hr} />
    );
  }

  return (
    <ProjectImage
      src={image.src}
      alt={image.alt}
      aspect={image.aspect}
      placeholderLabel={getUI(locale).imagePlaceholderLabel}
      fit={fit}
      className={className}
    />
  );
}
