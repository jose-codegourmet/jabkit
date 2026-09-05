import type {
  Content4Author,
  Content4Block,
  Content4Props,
} from "./Content4.types";

export const content4Author: Content4Author = {
  name: "Mira Solano",
  role: "Editor, Northline Journal",
  date: "12 March 2026",
  avatarSrc:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
  avatarAlt: "Portrait of Mira Solano",
  fallback: "MS",
};

export const content4Blocks: Content4Block[] = [
  {
    type: "paragraph",
    id: "lead",
    text: "A launch brief that lives in a slide deck dies the moment the room stands up. Operators need a page they can open, scan, and run. This is how we write that page so the work stays in view after the meeting ends.",
  },
  {
    type: "heading",
    id: "start-with-the-room",
    title: "Start with the room, not the feature list",
  },
  {
    type: "paragraph",
    id: "room-operators",
    text: "Write the first section for the people who will operate the product on Monday. Name the job, the constraint, and the first action. If a sentence could sit on a pricing page, it does not belong here.",
  },
  {
    type: "paragraph",
    id: "room-opening",
    text: "We keep the opening under a screen of height. Headline, byline, and one paragraph that a new hire can read aloud without stopping. Everything else waits for a heading.",
  },
  {
    type: "image",
    id: "studio-desks",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&h=1000&q=80",
    alt: "Sunlit studio desks with plants and open notebooks",
    caption: "The brief should look like a room you can walk into.",
  },
  {
    type: "heading",
    id: "outline-as-a-map",
    title: "Treat the outline as a map",
  },
  {
    type: "paragraph",
    id: "outline-titles",
    text: "Section titles are the only navigation most readers will use. Each heading should name a decision, not a theme. If two headings could swap places without anyone noticing, one of them is filler.",
  },
  {
    type: "paragraph",
    id: "outline-contract",
    text: "The table of contents on this page is the same contract. It tracks the heading in view so a returning reader can drop back in without scrolling the whole article again.",
  },
  {
    type: "heading",
    id: "figures-that-earn-space",
    title: "Let figures earn their space",
  },
  {
    type: "paragraph",
    id: "figures-caption",
    text: "Photographs sit inside the column, not as a second story. We caption them when the image needs a fact the picture cannot say. Decorative crops stay out of the article.",
  },
  {
    type: "image",
    id: "desk-charts",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&h=1000&q=80",
    alt: "Laptop showing charts on a wooden desk",
    caption: "A figure should support a heading, not replace it.",
  },
  {
    type: "heading",
    id: "close-with-a-return",
    title: "Close with a way back to the top",
  },
  {
    type: "paragraph",
    id: "return-exit",
    text: "Long reads need an exit that is not the browser chrome. A control that returns to the header keeps the outline honest: if the page is too long to climb, the outline and the back-to-top control should both be present.",
  },
  {
    type: "paragraph",
    id: "return-fill",
    text: "Fill this template with a dated byline, real section titles, and media sized for inline reading. The layout stays quiet so the words can carry the work.",
  },
];

export const content4Mocks = {
  default: {
    breadcrumbs: [
      { label: "Journal", href: "#journal" },
      { label: "Field notes", href: "#notes" },
      { label: "The launch brief" },
    ],
    title: "How we write a launch that operators can actually run",
    author: content4Author,
    outlineLabel: "On this page",
    backToTopLabel: "Back to top",
    blocks: content4Blocks,
  },
  alternate: {
    breadcrumbs: [
      { label: "Docs", href: "#docs" },
      { label: "Guides", href: "#guides" },
      { label: "Handoff" },
    ],
    title: "A quieter handoff page for the week after ship",
    author: {
      name: "Eli Navarro",
      role: "Staff writer, Harbor Notes",
      date: "4 April 2026",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
      avatarAlt: "Portrait of Eli Navarro",
      fallback: "EN",
    },
    outlineLabel: "Sections",
    backToTopLabel: "Return to header",
    blocks: [
      {
        type: "paragraph",
        id: "handoff-lead",
        text: "The week after a ship is when the brief gets lost. This page is the handoff: what moved, who owns the next pass, and which figure still needs a caption.",
      },
      {
        type: "heading",
        id: "what-shipped",
        title: "What shipped",
      },
      {
        type: "paragraph",
        id: "shipped-surfaces",
        text: "List the surfaces that changed, not the tickets. One sentence per surface is enough if the sentence names the operator action.",
      },
      {
        type: "image",
        id: "workshop-table",
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&h=1000&q=80",
        alt: "Collaborative workshop around a table",
        caption: "Handoff happens in the room, then lives on this page.",
      },
      {
        type: "heading",
        id: "who-owns-monday",
        title: "Who owns Monday",
      },
      {
        type: "paragraph",
        id: "monday-owner",
        text: "Name a person, not a function. If two people share a heading, split the heading. The outline should read like a roster.",
      },
      {
        type: "heading",
        id: "what-still-needs-a-figure",
        title: "What still needs a figure",
      },
      {
        type: "paragraph",
        id: "figure-gap",
        text: "If a claim cannot sit next to a photograph or a short table, it is not ready for the journal. Leave the heading, drop the decoration, and come back with evidence.",
      },
    ],
  },
} satisfies Record<string, Content4Props>;
