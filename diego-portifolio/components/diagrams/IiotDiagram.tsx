import type { DiagramsDict } from "@/content/types";

const box = "var(--surface)";
const line = "var(--line)";
const text = "var(--fg)";
const muted = "var(--muted)";
const accent = "var(--accent-deep)";

/** Diagrama sóbrio da plataforma IIoT: sensores → MQTT → API → web/mobile. */
export default function IiotDiagram({ dict }: { dict: DiagramsDict["iiot"] }) {
  return (
    <svg
      viewBox="0 0 640 400"
      role="img"
      aria-label={dict.title}
      className="h-auto w-full rounded-lg border border-line bg-surface"
    >
      <defs>
        <marker
          id="arrow-iiot"
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

      <rect x="24" y="172" width="116" height="56" rx="8" fill={box} stroke={line} />
      <text x="82" y="205" textAnchor="middle" fontSize="14" fill={text}>
        {dict.sensors}
      </text>

      <line
        x1="140"
        y1="200"
        x2="176"
        y2="200"
        stroke={accent}
        strokeWidth="1.5"
        markerEnd="url(#arrow-iiot)"
      />

      <rect x="180" y="172" width="120" height="56" rx="8" fill={box} stroke={line} />
      <text x="240" y="205" textAnchor="middle" fontSize="14" fill={text}>
        {dict.broker}
      </text>

      <line
        x1="300"
        y1="200"
        x2="336"
        y2="200"
        stroke={accent}
        strokeWidth="1.5"
        markerEnd="url(#arrow-iiot)"
      />

      <rect x="340" y="172" width="128" height="56" rx="8" fill={box} stroke={accent} />
      <text x="404" y="205" textAnchor="middle" fontSize="14" fill={text}>
        {dict.api}
      </text>

      <line
        x1="404"
        y1="228"
        x2="404"
        y2="296"
        stroke={muted}
        strokeWidth="1.5"
        markerEnd="url(#arrow-iiot)"
      />
      <rect x="340" y="300" width="128" height="52" rx="8" fill={box} stroke={line} />
      <text x="404" y="331" textAnchor="middle" fontSize="14" fill={text}>
        {dict.db}
      </text>

      <line
        x1="468"
        y1="188"
        x2="512"
        y2="128"
        stroke={accent}
        strokeWidth="1.5"
        markerEnd="url(#arrow-iiot)"
      />
      <line
        x1="468"
        y1="212"
        x2="512"
        y2="272"
        stroke={accent}
        strokeWidth="1.5"
        markerEnd="url(#arrow-iiot)"
      />
      <text x="490" y="196" textAnchor="middle" fontSize="11" fill={muted}>
        {dict.stream}
      </text>

      <rect x="508" y="76" width="116" height="52" rx="8" fill={box} stroke={line} />
      <text x="566" y="107" textAnchor="middle" fontSize="14" fill={text}>
        {dict.web}
      </text>

      <rect x="508" y="272" width="116" height="52" rx="8" fill={box} stroke={line} />
      <text x="566" y="303" textAnchor="middle" fontSize="14" fill={text}>
        {dict.mobile}
      </text>
    </svg>
  );
}
