export const hoverCardMocks = {
  default: {
    trigger: "@nextjs",
    name: "@nextjs",
    initials: "VC",
    description: "The React Framework – created and maintained by @vercel.",
    meta: "Joined December 2021",
  },
  sides: {
    title: "Hover Card",
    description:
      "This hover card appears on the selected side of the trigger.",
  },
} as const;

export const hoverCardSides = [
  "inline-start",
  "left",
  "top",
  "bottom",
  "right",
  "inline-end",
] as const;
