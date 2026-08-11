import type { DiagramsDict } from "@/content/types";

const box = "var(--surface)";
const line = "var(--line)";
const text = "var(--fg)";
const muted = "var(--muted)";
const accent = "var(--accent-deep)";

/** Diagrama sóbrio do módulo de RH: importadores → API → portal/painel, banco multi-tenant. */
export default function HrDiagram({ dict }: { dict: DiagramsDict["hr"] }) {
  return (
    <svg
      viewBox="0 0 640 400"
      role="img"
      aria-label={dict.title}
      className="h-auto w-full rounded-lg border border-line bg-surface"
    >
      <defs>
        <marker
          id="arrow-hr"
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L8,4 L0,8 z" fill={accent} />
        </marker>
      </defs>

      <rect x="24" y="172" width="160" height="56" rx="8" fill={box} stroke={line} />
      <text x="104" y="205" textAnchor="middle" fontSize="13.5" fill={text}>
        {dict.importers}
      </text>

      <line
        x1="184"
        y1="200"
        x2="228"
        y2="200"
        stroke={accent}
        strokeWidth="1.5"
        markerEnd="url(#arrow-hr)"
      />

      <rect x="232" y="172" width="130" height="56" rx="8" fill={box} stroke={accent} />
      <text x="297" y="205" textAnchor="middle" fontSize="14" fill={text}>
        {dict.api}
      </text>

      <line
        x1="297"
        y1="228"
        x2="297"
        y2="288"
        stroke={muted}
        strokeWidth="1.5"
        markerEnd="url(#arrow-hr)"
      />
      <rect x="232" y="292" width="130" height="52" rx="8" fill={box} stroke={line} />
      <text x="297" y="323" textAnchor="middle" fontSize="14" fill={text}>
        {dict.db}
      </text>
      <text x="297" y="366" textAnchor="middle" fontSize="11" fill={muted}>
        {dict.tenancy}
      </text>

      <line
        x1="362"
        y1="188"
        x2="452"
        y2="118"
        stroke={accent}
        strokeWidth="1.5"
        markerEnd="url(#arrow-hr)"
      />
      <line
        x1="362"
        y1="212"
        x2="452"
        y2="282"
        stroke={accent}
        strokeWidth="1.5"
        markerEnd="url(#arrow-hr)"
      />

      <rect x="456" y="66" width="164" height="52" rx="8" fill={box} stroke={line} />
      <text x="538" y="97" textAnchor="middle" fontSize="13.5" fill={text}>
        {dict.portal}
      </text>

      <rect x="456" y="282" width="164" height="52" rx="8" fill={box} stroke={line} />
      <text x="538" y="313" textAnchor="middle" fontSize="13.5" fill={text}>
        {dict.manager}
      </text>
    </svg>
  );
}
