import type { AgencySectionHeadingProps } from "./AgencySectionHeading.types";

export const agencySectionHeadingMocks = {
  default: {
    number: "05",
    label: "Contact",
    title: "Let's make something specific.",
    emphasis: "specific.",
  },
  alternate: {
    number: "01",
    label: "Index",
    meta: "128 items",
    title: "Form follows friction",
    emphasis: "friction",
  },
} satisfies Record<string, AgencySectionHeadingProps>;
