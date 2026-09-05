import type { Content2Props } from "./Content2.types";

export const content2Mocks = {
  default: {
    kicker: "Content hub",
    title: "One shelf for every kind of page",
    description:
      "Projects, galleries, events, and social links live in the same workspace so editors know where the next piece belongs.",
    types: [
      {
        kind: "project",
        title: "Projects",
        description:
          "Long-form work with a cover, a brief, and a publish date.",
      },
      {
        kind: "gallery",
        title: "Gallery",
        description: "Image sets editors can reorder without leaving the page.",
      },
      {
        kind: "event",
        title: "Events",
        description: "Dates, locations, and RSVP copy in a single record.",
      },
      {
        kind: "social",
        title: "Social",
        description:
          "Profile links that stay current in the footer and about page.",
      },
    ],
    createGuide: {
      title: "Add an entry",
      description: "Start from a type, then fill only what the record needs.",
      steps: [
        "Choose a content type from the grid.",
        "Complete the required fields for that type.",
        "Save as draft, or publish when the copy is ready.",
      ],
    },
    manageGuide: {
      title: "Keep the shelf current",
      description: "Filter, edit in place, and archive what no longer ships.",
      steps: [
        "Filter the list by type, status, or owner.",
        "Open a record to edit fields without a new draft.",
        "Archive stale entries so the hub stays scannable.",
      ],
    },
    tip: {
      title: "Faster when you are adding many",
      description:
        "Start from a template for repeating layouts, or batch-upload images before you write captions.",
    },
  },
  alternate: {
    kicker: "Docs library",
    title: "Guides, notes, and releases in one index",
    description:
      "A quieter catalog for teams that publish help content, changelog entries, and internal write-ups from the same desk.",
    types: [
      {
        kind: "project",
        title: "Guides",
        description: "Step-by-step pages with a clear owner and last review.",
      },
      {
        kind: "gallery",
        title: "Notes",
        description: "Short field write-ups that can stand alone or nest.",
      },
      {
        kind: "event",
        title: "Releases",
        description: "Dated entries that land on the changelog in order.",
      },
      {
        kind: "social",
        title: "Links",
        description: "External references the team keeps next to the docs.",
      },
    ],
    createGuide: {
      title: "Publish a page",
      description: "Pick a document kind, then ship a draft the room can read.",
      steps: [
        "Select guides, notes, releases, or links.",
        "Write the title and the first useful paragraph.",
        "Request review, or publish if you already own the page.",
      ],
    },
    manageGuide: {
      title: "Tidy the index",
      description:
        "Keep ownership visible and retire pages that no longer help.",
      steps: [
        "Sort by last review so stale pages surface first.",
        "Reassign owners when a team changes.",
        "Unlist pages that should leave the public index.",
      ],
    },
    tip: {
      title: "Reuse what already works",
      description:
        "Duplicate a guide as a template, then swap the steps instead of starting from a blank page.",
    },
  },
} satisfies Record<string, Content2Props>;
