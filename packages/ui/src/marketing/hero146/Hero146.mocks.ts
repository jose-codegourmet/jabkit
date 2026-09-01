import type { Hero146Props } from "./Hero146.types";

export const hero146Mocks = {
  default: {
    title: "Deploy enterprise agents your operators can actually run.",
    description:
      "Stand up policy-aware agents, then tune every handoff in a no-code canvas. No waiting on a specialist to ship the next workflow.",
    action: { label: "Get started", href: "#start" },
    caption: "Build your first agent in",
    captionHighlight: "under 8 minutes",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    videoPoster:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&h=900&q=80",
    videoLabel: "Product walkthrough of an agent canvas",
    embedSrc: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ",
    embedTitle: "Agent walkthrough presentation",
    autoplay: true,
  },
  alternate: {
    title: "Give every desk a teammate that stays on policy.",
    description:
      "Support, ops, and finance share one agent runtime. Customize tools in the canvas, then let the same guardrails travel with every rollout.",
    action: { label: "Book a demo", href: "#demo" },
    caption: "Most teams go live in",
    captionHighlight: "one afternoon",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    videoPoster:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&h=900&q=80",
    videoLabel: "Desk-side agent demo",
    autoplay: false,
  },
} satisfies Record<string, Hero146Props>;
