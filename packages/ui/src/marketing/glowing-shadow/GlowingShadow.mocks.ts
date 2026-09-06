import type { GlowingShadowProps } from "./GlowingShadow.types";

export const glowingShadowMocks = {
  default: {
    eyebrow: "Light field",
    heading: "A shadow that keeps cycling.",
    description:
      "Token color spins behind the type. Hover brightens the field. Quiet when motion is reduced.",
    label: "Glowing Shadow",
    duration: 9,
  },
  alternate: {
    eyebrow: "Field cuts",
    heading: "Three spins of the same light.",
    description:
      "A compact row of glow stages. Same rotation, different claims.",
    tiles: [
      {
        id: "halo",
        label: "Halo",
        caption: "A wide field that blooms on hover.",
      },
      {
        id: "bloom",
        label: "Bloom",
        caption: "Chart tokens cycle behind the type.",
      },
      {
        id: "drift",
        label: "Drift",
        caption: "Still when motion is reduced.",
      },
    ],
    duration: 11,
  },
} satisfies Record<"default" | "alternate", GlowingShadowProps>;
