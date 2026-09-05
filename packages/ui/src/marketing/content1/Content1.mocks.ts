import type { Content1Props, Content1Section } from "./Content1.types";

export const content1DefaultSections: Content1Section[] = [
  {
    id: "brief",
    title: "The brief we keep",
    blocks: [
      {
        type: "paragraph",
        text: "Northline writes one page before any ticket is opened. The page names the room, the decision, and the first thing a new teammate should see. Everything else waits.",
      },
      {
        type: "paragraph",
        text: "The outline on the right is not decoration. It is the same list the author used to structure the note, so a reader can skip to proof without losing the thread.",
      },
      {
        type: "image",
        image: {
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&h=1000&q=80",
          alt: "Sunlit studio desks with plants, notebooks, and open laptops",
          caption: "The floor after standup: one canvas, no extra tabs.",
        },
      },
    ],
  },
  {
    id: "floor",
    title: "How the floor actually works",
    blocks: [
      {
        type: "paragraph",
        text: "Work moves in three beats: write the brief, pin the owner, then show the room a live preview. Status lives on the page, not in a chat that expires overnight.",
      },
      {
        type: "list",
        items: [
          {
            title: "One owner",
            text: "A name on the brief. Questions go there first, not to a group thread.",
          },
          {
            title: "One preview",
            text: "A running surface the room can click. Screenshots are a last resort.",
          },
          {
            title: "One decision log",
            text: "What changed and why, written under the heading it belongs to.",
          },
        ],
      },
      {
        type: "callout",
        callout: {
          badge: "Note",
          title: "Keep the outline honest",
          body: "If a heading has nothing to jump to, cut it. The sticky list should match the story, not a template.",
        },
      },
    ],
  },
  {
    id: "week",
    title: "What ships in the first week",
    blocks: [
      {
        type: "paragraph",
        text: "Week one is not a roadmap. It is the smallest note a customer can read without a call. The table below is the checklist we paste into the brief.",
      },
      {
        type: "table",
        table: {
          caption: "First-week delivery checklist",
          columns: ["Beat", "Owner", "Done when"],
          rows: [
            ["Brief", "Lead", "One page names the decision"],
            ["Preview", "Build", "A URL the room can click"],
            ["Proof", "Ops", "A number the room can repeat"],
          ],
        },
      },
      {
        type: "image",
        image: {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&h=1000&q=80",
          alt: "Team gathered around a table reviewing work together",
          caption:
            "Friday review: read the note out loud, then close the loop.",
        },
      },
    ],
  },
  {
    id: "proof",
    title: "Numbers the room can repeat",
    blocks: [
      {
        type: "paragraph",
        text: "We keep three numbers on the last heading: time to first preview, questions that needed a meeting, and whether the customer could retell the story. If they cannot retell it, the note is not done.",
      },
      {
        type: "list",
        items: [
          {
            title: "Time to preview",
            text: "Measured in working days from brief to a clickable URL.",
          },
          {
            title: "Meetings avoided",
            text: "Questions answered on the page instead of a calendar hold.",
          },
          {
            title: "Retell test",
            text: "A person who was not in the room can explain the decision.",
          },
        ],
      },
    ],
  },
];

export const content1EditorialSections: Content1Section[] = [
  {
    id: "harbor",
    title: "Harbor starts with the docks",
    blocks: [
      {
        type: "paragraph",
        text: "Harbor publishes a weekly note for operators who cannot sit through a slide. The sticky outline is the map: docks, shift, and the number that closed the week.",
      },
      {
        type: "image",
        image: {
          src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&h=1000&q=80",
          alt: "Shipping containers stacked along a lit harbor dock",
          caption: "Night shift on the east berth, still on the clock.",
        },
      },
    ],
  },
  {
    id: "shift",
    title: "What the shift can see",
    blocks: [
      {
        type: "paragraph",
        text: "Each heading is a station. If a reader only has two minutes, they jump to the delay table and leave with the same story as the people who stayed.",
      },
      {
        type: "list",
        items: [
          {
            title: "Berth status",
            text: "Open, delayed, or cleared, written in the same words the radio uses.",
          },
          {
            title: "Handoff",
            text: "Who takes the next window, and what they must not re-ask.",
          },
        ],
      },
      {
        type: "callout",
        callout: {
          badge: "Ops",
          title: "Write for the next shift",
          body: "The outline has to work at 2am. Short titles. No filler. A table when a paragraph would hide the delay.",
        },
      },
    ],
  },
  {
    id: "close",
    title: "How the week closes",
    blocks: [
      {
        type: "table",
        table: {
          caption: "Weekly close snapshot",
          columns: ["Window", "Delay", "Note"],
          rows: [
            ["Mon night", "14 min", "Crane swap on berth 2"],
            ["Wed dawn", "6 min", "Fog, then a clean exit"],
            ["Fri close", "0 min", "All three berths clear"],
          ],
        },
      },
      {
        type: "paragraph",
        text: "The last heading is the close. If the number cannot be said in one sentence, the note goes back to the author before it ships.",
      },
    ],
  },
];

export const content1Mocks = {
  default: {
    kicker: "Field note",
    title: "How Northline ships a brief",
    description:
      "A long-form walkthrough with a sticky outline. Jump to the beat you need, or read it through like a chapter.",
    outlineLabel: "On this page",
    sections: content1DefaultSections,
  },
  alternate: {
    kicker: "Ops log",
    title: "Harbor writes for the next shift",
    description:
      "A tighter editorial cut of the same block: fewer chapters, a dock photo, and a close table the night crew can scan.",
    outlineLabel: "Jump to",
    sections: content1EditorialSections,
  },
} satisfies Record<string, Content1Props>;
