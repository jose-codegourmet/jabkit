import type { SplashCursorProps } from "./SplashCursor.types";

export const splashCursorMocks = {
  default: {
    eyebrow: "Pointer ink",
    heading: "Color that follows every move.",
    description:
      "A fluid splash trail blooms behind the cursor, then settles into the page. Quiet and still when motion is reduced.",
    splatRadius: 42,
    splatForce: 1,
    fadeRate: 0.045,
    trailDensity: 3,
    clickBurst: true,
    palette: "mixed",
    intensity: 0.72,
  },
  alternate: {
    eyebrow: "Signal bloom",
    heading: "Wider splats. Chart-led color.",
    description:
      "A heavier ink field with slower fade and denser trail, tuned for a dark product hero that needs more presence at rest.",
    splatRadius: 64,
    splatForce: 1.35,
    fadeRate: 0.028,
    trailDensity: 5,
    clickBurst: true,
    palette: "chart",
    intensity: 0.9,
  },
} satisfies Record<"default" | "alternate", SplashCursorProps>;
