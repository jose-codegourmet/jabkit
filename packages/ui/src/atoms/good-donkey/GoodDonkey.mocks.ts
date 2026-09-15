export const goodDonkeyMocks = {
  default: {
    placeholder: "Message...",
    attachLabel: "Add an image",
    sendLabel: "Send",
  },
  filled: {
    placeholder: "Message...",
    defaultValue: "On my way",
    attachLabel: "Add an image",
    sendLabel: "Send",
  },
  compact: {
    size: "sm" as const,
    placeholder: "Message...",
    attachLabel: "Add an image",
    sendLabel: "Send",
  },
} as const;
