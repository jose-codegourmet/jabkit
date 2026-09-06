import type { ScannerProps } from "./Scanner.types";

export const scannerMocks = {
  default: {
    eyebrow: "Signal sweep",
    heading: "Interference that reads the page.",
    description:
      "Bands of token color drift like a calm oscilloscope. The pointer brightens a local pocket. Quiet when motion is reduced.",
    direction: "vertical",
    bandCount: 42,
    speed: 0.42,
    sweepWidth: 0.28,
    ripple: 0.08,
    glow: 0.55,
    mouseInteraction: true,
    scanline: true,
    tone: "primary",
  },
  alternate: {
    eyebrow: "Cross-field",
    heading: "A diagonal scan. Chart-led color.",
    description:
      "Denser bands, a wider sweep, and chart tokens — for a darker product hero that needs more presence at rest.",
    direction: "diagonal",
    bandCount: 56,
    speed: 0.28,
    sweepWidth: 0.38,
    ripple: 0.12,
    glow: 0.72,
    mouseInteraction: true,
    scanline: false,
    tone: "chart",
  },
} satisfies Record<"default" | "alternate", ScannerProps>;
