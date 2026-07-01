import { hashToRange } from "@/lib/utils";

const accentMap = {
  violet: { a: "#6E5BFF", b: "#2A1F66" },
  cyan: { a: "#4CC9F0", b: "#134156" },
  amber: { a: "#FFB454", b: "#5C3A0F" },
};

// A deterministic, code-generated cover for each project: no external image
// assets or generation APIs, just SVG geometry seeded from the project id so
// every card gets a distinct, consistent identity.
export default function ProjectCover({
  id,
  accent,
}: {
  id: string;
  accent: "violet" | "cyan" | "amber";
}) {
  const colors = accentMap[accent];
  const rows = 6;
  const cols = 10;
  const seed = hashToRange(id, 0, 9999);
  const cells: { x: number; y: number; lit: boolean }[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const n = (seed * (r + 1) * 31 + c * 17 + r * 13) % 100;
      cells.push({ x: c, y: r, lit: n > 62 });
    }
  }

  const cellSize = 28;
  const w = cols * cellSize;
  const h = rows * cellSize;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={colors.b} />
          <stop offset="100%" stopColor="#07080B" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#grad-${id})`} />
      {cells.map((cell, i) =>
        cell.lit ? (
          <rect
            key={i}
            x={cell.x * cellSize + 3}
            y={cell.y * cellSize + 3}
            width={cellSize - 6}
            height={cellSize - 6}
            rx={3}
            fill={colors.a}
            fillOpacity={0.16 + ((seed + i) % 40) / 100}
          />
        ) : null
      )}
      <line
        x1="0"
        y1={h * 0.62}
        x2={w}
        y2={h * 0.38}
        stroke={colors.a}
        strokeOpacity="0.35"
        strokeWidth="1"
      />
    </svg>
  );
}
