import type { Faq12Props } from "./Faq12.types";

export const faq12Mocks = {
  default: {
    kicker: "Help center",
    title: "Answers grouped the way teams already search",
    description:
      "Pick a topic on the rail. The list on the right jumps with you, and the active category stays marked as you scroll.",
    categories: [
      {
        id: "workspace",
        label: "Workspace",
        items: [
          {
            question: "How do I invite someone to a room?",
            answer:
              "Open the room, choose Members, then send an email invite. They land in the same draft you already have open.",
          },
          {
            question: "Where do unpublished drafts live?",
            answer:
              "Drafts stay on the shelf for that room. Filter by Draft to see only pages that have not shipped.",
          },
          {
            question: "Can I archive a project without deleting it?",
            answer:
              "Yes. Archive moves it out of the live index. You can restore it later from the archive filter.",
          },
        ],
      },
      {
        id: "billing",
        label: "Billing",
        items: [
          {
            question: "When does the monthly invoice close?",
            answer:
              "Invoices close on the first weekday after your billing date. The PDF lands in Billing within a few hours.",
          },
          {
            question: "Can we pay by wire instead of a card?",
            answer:
              "Annual plans can pay by wire. Send the invoice number with the transfer so finance can match it.",
          },
          {
            question: "What happens if a seat sits unused?",
            answer:
              "Unused seats stay on the invoice until you remove them. Proration applies on the next cycle.",
          },
        ],
      },
      {
        id: "access",
        label: "Access",
        items: [
          {
            question: "Who can publish a page?",
            answer:
              "Owners and editors can publish. Viewers can comment, but they cannot ship a draft.",
          },
          {
            question: "How do SSO logins work?",
            answer:
              "Turn on SSO in Access, then map groups to roles. Existing passwords stop working on the next login.",
          },
          {
            question: "Can I revoke an API key without downtime?",
            answer:
              "Create the replacement key first, update the client, then revoke the old one. Revokes take effect immediately.",
          },
        ],
      },
      {
        id: "support",
        label: "Support",
        items: [
          {
            question: "How quickly do you reply?",
            answer:
              "Weekday tickets get a first reply within one business day. Priority plans get a same-day window.",
          },
          {
            question: "Do you offer a live onboarding call?",
            answer:
              "Yes, for teams of five or more. Book it from Support after you finish the first workspace setup.",
          },
          {
            question: "Where do we check service status?",
            answer:
              "Status notes live at status.harbor.work. Incidents also post in the in-app banner until they clear.",
          },
        ],
      },
    ],
  },
  alternate: {
    kicker: "Docs desk",
    title: "Guides, billing, and access in one index",
    description:
      "A quieter help page for teams that already think in topics. Jump a heading, then open only the answer you need.",
    categories: [
      {
        id: "guides",
        label: "Guides",
        items: [
          {
            question: "How do I start a new guide?",
            answer:
              "Choose Guides, then New. Add a title and the first useful paragraph before you request review.",
          },
          {
            question: "Can two writers share a draft?",
            answer:
              "Share the draft link. Comments sit in the margin, and only one person can publish.",
          },
        ],
      },
      {
        id: "plans",
        label: "Plans",
        items: [
          {
            question: "What is included on the studio plan?",
            answer:
              "Unlimited rooms, SSO, and weekday support. Field seats are billed separately.",
          },
          {
            question: "Can we pause a plan for a season?",
            answer:
              "Yes, for up to three months. Content stays readable. Publishing turns back on when you resume.",
          },
        ],
      },
      {
        id: "privacy",
        label: "Privacy",
        items: [
          {
            question: "Where is workspace data hosted?",
            answer:
              "Primary storage is in the EU. Backups stay in the same region unless you pick a US workspace.",
          },
          {
            question: "How do we export a room?",
            answer:
              "Open Room settings, then Export. You get Markdown plus the original images in a zip.",
          },
        ],
      },
    ],
  },
} satisfies Record<string, Faq12Props>;
