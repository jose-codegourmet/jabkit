export const goodDonkeyMocks = {
  default: {
    placeholder: "Write a message",
    attachLabel: "Attach a file",
    sendLabel: "Send message",
  },
  filled: {
    placeholder: "Reply to Maya",
    defaultValue: "Can we move the review to Thursday?",
    attachLabel: "Attach a file",
    sendLabel: "Send reply",
  },
  compact: {
    size: "sm" as const,
    placeholder: "Quick note",
    attachLabel: "Attach a file",
    sendLabel: "Send note",
  },
} as const;
