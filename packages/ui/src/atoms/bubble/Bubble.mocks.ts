export const bubbleMocks = {
  default: {
    userHello: "Hey there! what's up?",
    assistantIntro: "Hey! Want to see chat bubbles?",
    assistantExplain:
      "I can group messages, switch sides, and keep the whole thread easy to scan.",
    userSure: "Sure. Hit me with your best demo.",
    assistantMeta:
      "Yes. You are reading a demo that is demoing itself. Very meta. Very on-brand.",
  },
  variants: {
    default: "This is the default primary bubble.",
    secondary: "This is the secondary variant.",
    muted:
      "This one is muted. It uses a lower emphasis color for the chat bubble.",
    tinted:
      "This one is tinted. The tint is a softer color derived from the primary color.",
    outline: "We can also use an outlined variant.",
    destructive: "Or a destructive variant with a reaction.",
    ghostFull:
      "Ghost bubbles are full width and can take the full width of the container.",
  },
} as const;
