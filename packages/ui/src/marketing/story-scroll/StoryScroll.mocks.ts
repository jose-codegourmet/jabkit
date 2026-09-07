import type { StoryScrollProps } from "./StoryScroll.types";

export const storyScrollMocks = {
  default: {
    label: "Lumen Press story",
    chapters: [
      {
        id: "who",
        kicker: "01 Who we are",
        headline: "Create\nWithout\nLimits",
        body: "A press for people who make pictures, type, and objects. No feed ranking the work. Just the page and the hands that filled it.",
        tone: "primary",
      },
      {
        id: "mission",
        kicker: "02 The mission",
        headline: "Art\nFirst\nAlways",
        body: "A studio network built for makers, by makers. We change how work is seen, shared, and paid.",
        points: [
          {
            title: "Discovery",
            body: "Human-curated rooms. Real eyes on real work, not a ranking that buries it.",
          },
          {
            title: "Community",
            body: "Collaborators, editors, and peers who push the next piece instead of the next post.",
          },
          {
            title: "Value",
            body: "Clear pricing. Named fees. Makers keep what they earn.",
          },
          {
            title: "Rooms",
            body: "Virtual and physical shows drawn from the same network.",
          },
          {
            title: "Guidance",
            body: "Paired notes from people who already walked the path.",
          },
          {
            title: "Time away",
            body: "Funded residencies when the studio needs a different light.",
          },
        ],
        closing:
          "Every feature starts with one question: does this serve the maker?",
        closingAlign: "end",
        tone: "inverse",
      },
      {
        id: "how",
        kicker: "03 How it works",
        headline: "Show\nUp.\nStand\nOut.",
        body: "Six moves. No maze. The practice starts moving the day the first file lands.",
        points: [
          {
            title: "Upload",
            body: "Drop the work. The page goes live with the crop, type, and sequence you chose.",
          },
          {
            title: "Connect",
            body: "Meet collectors, rooms, and brands already looking for that hand.",
          },
          {
            title: "Grow",
            body: "Read the visits, hold the commissions, keep the archive in one place.",
          },
          {
            title: "Sell",
            body: "Set editions, licenses, and prices. Commerce sits next to the work.",
          },
          {
            title: "Collaborate",
            body: "Split a project, share a studio, keep the credits honest.",
          },
          {
            title: "Evolve",
            body: "The practice changes. The page should follow without a rebuild.",
          },
        ],
        tone: "muted",
      },
      {
        id: "vision",
        kicker: "04 The vision",
        headline: "Future\nOf\nPrint",
        body: "Not a marketplace with a manifesto glued on. A press that treats the edition as the product.",
        points: [
          {
            title: "10K+",
            body: "Makers from 80 countries already on the floor.",
          },
          {
            title: "Direct pay",
            body: "Fees named in the invoice. No buried cut after the sale.",
          },
          {
            title: "Open door",
            body: "No invite code. If you make work, you can put it on the wall.",
          },
        ],
        closing:
          "Galleries take too much. Feeds bury the rest. We keep the page, the credit, and the check in the same room.",
        tone: "accent",
      },
      {
        id: "join",
        kicker: "05 Join us",
        headline: "Ready\nTo\nBegin?",
        body: "Bring a body of work, or a single sheet. Join the press and help write the next edition.",
        tone: "inverse",
      },
    ],
  },
  alternate: {
    label: "Northbound product story",
    chapters: [
      {
        id: "brief",
        kicker: "Product story",
        headline: "Ship\nThe\nBrief",
        body: "Two chapters. One claim, one close. Use this when the page only needs a manifesto and a door.",
        points: [
          {
            title: "Pin",
            body: "Each chapter holds the viewport, then the next sheet covers it.",
          },
          {
            title: "Still",
            body: "If motion is reduced, the sheets stack in ordinary flow.",
          },
        ],
        tone: "card",
      },
      {
        id: "close",
        kicker: "Close",
        headline: "Open\nThe\nDoor",
        body: "A last sheet in primary so the close reads as a decision, not another paragraph.",
        tone: "primary",
      },
    ],
  },
} satisfies Record<"default" | "alternate", StoryScrollProps>;
