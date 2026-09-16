export const letterCascadeMocks = {
  default: {
    text: "Hover Me",
    className: "text-4xl font-bold",
  },
  centerWave: {
    text: "Center Wave",
    className: "text-4xl font-bold",
    staggerFrom: "center" as const,
  },
  extraBouncy: {
    text: "Extra Bouncy",
    className: "text-4xl font-bold",
    stiffness: 120,
    damping: 8,
  },
  clickTrigger: {
    text: "Click Me",
    className: "text-4xl font-bold",
    triggerOnClick: true,
  },
  snappy: {
    text: "Snappy",
    className: "text-4xl font-bold",
    stiffness: 380,
    damping: 22,
  },
} as const;
