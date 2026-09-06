import type { LiquidMetalButtonProps } from "./LiquidMetalButton.types";

export const liquidMetalButtonMocks = {
  default: {
    eyebrow: "Poured chrome",
    heading: "A button that looks poured, not painted.",
    description:
      "Token metal rolls under the label. Hover speeds the pour. Quiet when motion is reduced.",
    label: "Get Started",
    viewMode: "text",
    speed: 0.6,
  },
  alternate: {
    eyebrow: "Pair cuts",
    heading: "Text and icon from the same pour.",
    description:
      "A label CTA beside a compact spark. Same liquid field, two hits.",
    actions: [
      { id: "start", label: "Get Started", viewMode: "text" },
      { id: "spark", label: "Open spark", viewMode: "icon" },
    ],
    speed: 0.72,
  },
} satisfies Record<"default" | "alternate", LiquidMetalButtonProps>;
