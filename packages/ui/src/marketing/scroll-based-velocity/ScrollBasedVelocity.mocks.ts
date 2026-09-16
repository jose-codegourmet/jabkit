import type { ScrollBasedVelocityProps } from "./ScrollBasedVelocity.types";

export const scrollBasedVelocityMocks = {
  default: {
    text: "Velocity Scroll",
    defaultVelocity: 5,
  },
  alternate: {
    text: "Build. Test. Ship.",
    defaultVelocity: 8,
    textClassName:
      "text-center text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[4.5rem]",
  },
} satisfies Record<"default" | "alternate", ScrollBasedVelocityProps>;
