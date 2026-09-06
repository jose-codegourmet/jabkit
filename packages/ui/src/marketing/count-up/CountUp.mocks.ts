import type { CountUpProps } from "./CountUp.types";

export const countUpMocks = {
  default: {
    eyebrow: "Proof in motion",
    to: 100,
    from: 0,
    suffix: "%",
    description:
      "A launch metric that ticks into place when it enters the viewport. Quiet on reduced motion.",
    duration: 2000,
    delay: 80,
    align: "center",
  },
  alternate: {
    eyebrow: "Outcomes",
    description:
      "Grouped figures with thousand separators. Each column keeps its own prefix, suffix, and label.",
    align: "left",
    duration: 1800,
    delay: 120,
    separator: ",",
    items: [
      {
        from: 0,
        to: 1240,
        prefix: "",
        suffix: "+",
        separator: ",",
        label: "Launches shipped",
      },
      {
        from: 0,
        to: 98.6,
        decimals: 1,
        suffix: "%",
        label: "On-time reviews",
      },
      {
        from: 0,
        to: 4.8,
        decimals: 1,
        prefix: "",
        suffix: "×",
        label: "Pipeline lift",
      },
    ],
  },
} satisfies Record<"default" | "alternate", CountUpProps>;
