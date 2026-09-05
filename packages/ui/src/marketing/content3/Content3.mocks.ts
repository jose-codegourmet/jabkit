import type { Content3Props, Content3Section } from "./Content3.types";

export const content3DefaultSections: Content3Section[] = [
  {
    id: "owners",
    title: "Who owns the room",
    blocks: [
      {
        type: "paragraph",
        text: "A launch review is a decision, not a readout. One facilitator holds the agenda. Product owns the demo. Ops owns the risks. Everyone else comes to ask or to decide.",
      },
      {
        type: "list",
        items: [
          "Facilitator sets time boxes and keeps the wall honest.",
          "Product shows the live path, not a slide recreation.",
          "Ops names the single risk that would stop the ship.",
        ],
      },
    ],
  },
  {
    id: "wall",
    title: "What to put on the wall",
    blocks: [
      {
        type: "paragraph",
        text: "The wall is three artifacts: the customer path, the metric that moved, and the open questions. If it is not on the wall, it is not in the review.",
      },
      {
        type: "figure",
        figure: {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&h=1000&q=80",
          alt: "Team reviewing work together around a table",
          caption: "Keep the demo on one screen the whole room can see.",
        },
      },
      {
        type: "heading",
        text: "A short checklist before you start",
      },
      {
        type: "paragraph",
        text: "Confirm the build is the one in production intent. Confirm the metric is from the same window as the story. Confirm the decision you need is written as a yes or no.",
      },
    ],
  },
  {
    id: "table",
    title: "The review table",
    blocks: [
      {
        type: "paragraph",
        text: "Roles stay stable so the room does not renegotiate process every week. Use this grid as the seating chart, then stop adding columns.",
      },
      {
        type: "table",
        table: {
          caption: "Who shows what",
          columns: ["Role", "Owns", "Brings"],
          rows: [
            ["Facilitator", "Agenda and time", "Decision prompt"],
            ["Product", "Customer path", "Live demo"],
            ["Ops", "Risks and follow-ups", "Single blocker"],
            ["Design", "Clarity of the path", "One annotated screen"],
          ],
        },
      },
      {
        type: "alert",
        alert: {
          title: "Keep the dump off the table",
          description:
            "If a number is not on the wall, it is not in the review. Extra slides wait until after the decision is recorded.",
        },
      },
    ],
  },
  {
    id: "after",
    title: "After the call",
    blocks: [
      {
        type: "paragraph",
        text: "Write the decision in one sentence before people leave. Assign one owner per follow-up. The next review starts from that note, not from memory.",
      },
      {
        type: "list",
        items: [
          "Publish the decision in the same channel as the invite.",
          "Close or date every follow-up before the next standup.",
          "Archive the wall so the next crew inherits the same shape.",
        ],
      },
    ],
  },
];

export const content3AlternateSections: Content3Section[] = [
  {
    id: "signal",
    title: "What counts as a page",
    blocks: [
      {
        type: "paragraph",
        text: "An install write-up is a page the next crew can run. It records the environment, the path that worked, and the one surprise that would waste an hour.",
      },
      {
        type: "list",
        items: [
          "Name the customer site, not the internal nickname.",
          "Capture the working URL and the build hash.",
          "Write the surprise in plain language, not a ticket dump.",
        ],
      },
    ],
  },
  {
    id: "walkthrough",
    title: "Walk the path once",
    blocks: [
      {
        type: "paragraph",
        text: "Do the install in the order the customer will. Photograph the screen that proves each step landed. Skip decorative shots of the office.",
      },
      {
        type: "figure",
        figure: {
          src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&h=1000&q=80",
          alt: "Laptop and notebook on a clean workstation",
          caption: "One proof shot per step is enough.",
        },
      },
      {
        type: "heading",
        text: "When to stop and write",
      },
      {
        type: "paragraph",
        text: "Stop at the first failed expectation. Write what you expected, what you saw, and the fix. Then continue. Do not batch surprises until the end.",
      },
    ],
  },
  {
    id: "handoff",
    title: "Handoff grid",
    blocks: [
      {
        type: "paragraph",
        text: "The next installer should not have to reconstruct your session. This grid is the minimum they need to start without a call.",
      },
      {
        type: "table",
        table: {
          caption: "Minimum handoff",
          columns: ["Field", "Example", "Owner"],
          rows: [
            ["Site", "Harbor dock 4", "Ops"],
            ["Build", "console-1842", "Product"],
            ["Working path", "/install/start", "Product"],
            ["Open risk", "VPN drops at 40 minutes", "Ops"],
          ],
        },
      },
      {
        type: "alert",
        alert: {
          title: "Do not attach the chat log",
          description:
            "Paste the decision and the working path. Leave the thread where it happened. The page should stand without scrolling a side channel.",
        },
      },
    ],
  },
  {
    id: "close",
    title: "Close the page",
    blocks: [
      {
        type: "paragraph",
        text: "Mark the write-up complete only when a second person can follow it without asking you. Then link it from the install index.",
      },
      {
        type: "list",
        items: [
          "Link the page from the customer record.",
          "Date the last successful run.",
          "Name the person who will take the next visit.",
        ],
      },
    ],
  },
];

export const content3Mocks = {
  default: {
    breadcrumbs: [
      { label: "Guides", href: "#guides" },
      { label: "Launch", href: "#launch" },
      { label: "Review room" },
    ],
    title: "How Northline runs a launch review",
    description:
      "A working guide for operators: who owns the room, what to show, and how to close the loop after the call.",
    primaryAction: { label: "Share guide", href: "#share" },
    secondaryAction: { label: "Copy outline", href: "#outline" },
    topicsLabel: "On this page",
    sections: content3DefaultSections,
  },
  alternate: {
    breadcrumbs: [
      { label: "Field notes", href: "#notes" },
      { label: "Install", href: "#install" },
      { label: "First visit" },
    ],
    title: "Write the first customer install so the next crew can run it",
    description:
      "A page, not a thread. Record the path, the proof, and the one surprise that would waste an hour.",
    primaryAction: { label: "Start a page", href: "#start" },
    secondaryAction: { label: "See the index", href: "#index" },
    topicsLabel: "Topics",
    sections: content3AlternateSections,
  },
} satisfies Record<string, Content3Props>;
