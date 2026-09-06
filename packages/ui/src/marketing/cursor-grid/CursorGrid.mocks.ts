import type { CursorGridProps } from "./CursorGrid.types";

export const cursorGridMocks = {
  default: {
    eyebrow: "Interactive lattice",
    heading: "A grid that follows the cursor.",
    description:
      "Cells bloom around the pointer, hold, then fade. Click to send a pulse through the lattice. Quiet when motion is reduced.",
    cellSize: 64,
    radius: 160,
    falloff: "smooth",
    holdTime: 400,
    fadeDuration: 800,
    lineWidth: 1.2,
    maxOpacity: 1,
    fillOpacity: 0.12,
    gridOpacity: 0.22,
    cellRadius: 10,
    clickPulse: true,
    pulseSpeed: 620,
    tone: "primary",
  },
  alternate: {
    eyebrow: "Signal field",
    heading: "Sharper cells. Wider reach.",
    description:
      "A denser lattice with filled tiles and a longer fade, tuned for a product hero that needs more presence at rest.",
    cellSize: 48,
    radius: 220,
    falloff: "sharp",
    holdTime: 220,
    fadeDuration: 1100,
    lineWidth: 1.6,
    maxOpacity: 1,
    fillOpacity: 0.28,
    gridOpacity: 0.32,
    cellRadius: 4,
    clickPulse: true,
    pulseSpeed: 480,
    tone: "ring",
  },
} satisfies Record<"default" | "alternate", CursorGridProps>;
