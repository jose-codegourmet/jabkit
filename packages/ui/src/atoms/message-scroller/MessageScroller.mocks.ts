export const messageScrollerMocks = {
  default: {
    morning: "Morning, shadcn!",
    workingOn: "What are we working on today?",
    scrollJump:
      "I'm building a chat for our app and the scroll behavior is driving me nuts. Every time the AI streams a reply, the whole thread jumps around.",
    followLive:
      "That's the classic streaming scroll problem. Auto-scroll only follows while the reader is already at the live edge.",
    newTurn:
      "When someone sends a new message, the viewport should anchor that turn near the top and keep a peek of the previous row.",
    meInitials: "ME",
    otherInitials: "AI",
  },
  group: {
    joined: "Marcus joined the chat",
    mention:
      "@mary, the astrophage line keeps matching Venus energy output. Can you check my math?",
    ping: "ping @rocky",
    initials: "M",
    assistant: "AI",
  },
} as const;
