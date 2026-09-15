import type { Skiper39Props } from "./Skiper39.types";

export const skiper39Mocks = {
  default: {
    eyebrow: "Street stage",
    heading: "A crowd that keeps the block moving.",
    description:
      "Walking figures fill the lower stage so a landing can feel occupied before anyone clicks.",
    walkerCount: 42,
  },
  alternate: {
    eyebrow: "Rush hour",
    heading: "More feet, same street.",
    description:
      "Raise the walker count when the section needs a packed sidewalk instead of a quiet crossing.",
    walkerCount: 72,
  },
} satisfies Record<"default" | "alternate", Skiper39Props>;
