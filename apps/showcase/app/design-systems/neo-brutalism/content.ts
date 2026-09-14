import type {
  AssetSlot,
  DeliverableId,
  DeliverableOption,
  Discipline,
  DisciplineFilter,
  EngagementId,
  EngagementRecord,
  FaqCategory,
  ProcessStage,
  ProjectRecord,
  TeamMember,
} from "./types";
import {
  deliverableIds,
  disciplineFilters,
  engagementIds,
  sampleRoot,
} from "./types";

export const brand = {
  name: "Good Noise",
  tagline: "Independent branding for small launches.",
  statement: "Make the launch loud enough to read from the street.",
  intro:
    "Good Noise is a fictional independent branding studio. We build identity kits and campaign objects for cafes, clubs, shops, and one-off events that need a clear public face.",
} as const;

export const demoNote =
  "Good Noise is a fictional JabKit sample. The brief stays in this tab. Nothing is sent.";

export const navItems = [
  { href: `${sampleRoot}/work`, label: "Work" },
  { href: `${sampleRoot}/services`, label: "Services" },
  { href: `${sampleRoot}/studio`, label: "Studio" },
  { href: `${sampleRoot}/start`, label: "Start a brief" },
] as const;

export const homeSelectedSlugs = [
  "common-ground",
  "loop-house",
  "off-hours",
] as const;

export const processStages: ProcessStage[] = [
  {
    id: "hear",
    title: "Hear the launch",
    body: "We write the actual problem, the audience who will see it, and the objects that must exist on day one. No mood board is issued at this stage.",
  },
  {
    id: "name",
    title: "Name the idea",
    body: "One sentence and a few visual rules. If the idea needs a paragraph to survive, it is not ready for a poster.",
  },
  {
    id: "make",
    title: "Make the objects",
    body: "Wordmarks, type, color, and the first physical or printed pieces. We prove the system on real formats, not on a slide.",
  },
  {
    id: "hand",
    title: "Hand over the kit",
    body: "Files, rules, and a short how-to. We do not stay on as a monthly retainer in this sample.",
  },
];

export const deliverableOptions: DeliverableOption[] = [
  { id: "wordmark", label: "Wordmark and lockup" },
  { id: "type-color", label: "Type and color rules" },
  { id: "stationery", label: "Stationery pack" },
  { id: "signage", label: "Signage kit" },
  { id: "packaging", label: "Packaging labels" },
  { id: "campaign-kit", label: "Campaign posters" },
  { id: "social", label: "Social templates" },
  { id: "launch-sequence", label: "Launch sequence boards" },
];

export const projects: ProjectRecord[] = [
  {
    slug: "common-ground",
    title: "Common Ground",
    subject: "Neighborhood cafe",
    discipline: "identity",
    year: "2025",
    problem:
      "A new cafe on a shared garden plot needed a public face that felt like a table, not a franchise.",
    idea: "Treat the name as a shared surface. The mark is a split tabletop: two planes, one seam, room for both regulars and first visits.",
    applications:
      "Painted fascia, a takeaway cup wrap, and a weekly menu card that can be marked by hand.",
    deliverables: [
      "Wordmark, lockup, and fascia drawing",
      "Type, color, and a two-ink print rule",
      "Cup wrap, menu card, and staff badge",
    ],
    scopeId: "full-brand",
    relatedSlug: "kindred-table",
    selectedOnHome: true,
    imageIds: { object: "neo-p01-a", application: "neo-p01-b" },
    alt: {
      object:
        "Hard-lit still of a split tabletop form used as the Common Ground identity object",
      application:
        "Close view of a printed cup wrap and menu card for Common Ground",
    },
    captions: {
      object:
        "Common Ground. Studio object for the split-table mark. Stub image until NEO-03.",
      application:
        "Cup wrap and menu card. Lettering on the site is live HTML, not in the picture.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "The cafe opens onto a garden used by two street associations. They asked for a name that could sit on a painted fascia and a paper cup without looking like a chain.",
          "Hours are short. The identity had to work at a glance from the pavement and still hold a handwritten daily card.",
        ],
      },
      {
        id: "idea",
        title: "Idea",
        paragraphs: [
          "The table is the room. We split a rectangle on a slight offset so two groups can share a surface without a logo mascot.",
          "Ink is dense and the second color is reserved for the seam. Photography in this sample is a local stub, not a client shoot.",
        ],
      },
      {
        id: "applications",
        title: "Applications",
        paragraphs: [
          "The fascia uses the lockup at one size. Cups take a wrap that can be stamped with the day. Staff badges repeat the seam, not a slogan.",
        ],
      },
    ],
  },
  {
    slug: "loop-house",
    title: "Loop House",
    subject: "Arts venue",
    discipline: "identity",
    year: "2024",
    problem:
      "A volunteer-run arts room needed a mark that could survive photocopies, night posters, and a stubborn glass door.",
    idea: "A closed loop that is also a room plan: enter, circle the work, leave with a card. No serif revival, no festival wreath.",
    applications:
      "Door vinyl, a stacked night poster, and a membership card that doubles as a bookmark.",
    deliverables: [
      "Wordmark for vinyl and photocopy",
      "Night poster grid and type sizes",
      "Membership card and door hours lockup",
    ],
    scopeId: "identity-sprint",
    relatedSlug: "bright-side",
    selectedOnHome: true,
    imageIds: { object: "neo-p02-a", application: "neo-p02-b" },
    alt: {
      object: "Hard-lit object standing in for the Loop House loop mark",
      application: "Printed night poster and membership card for Loop House",
    },
    captions: {
      object: "Loop House. Object used as a stand-in for the loop plan.",
      application:
        "Night poster and card. Titles on the site are not baked into the photo.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "The venue changes shows every three weeks. Volunteers print at a copy shop. The mark had to stay legal when faxed, taped, and taped again.",
          "They did not want a season campaign. They wanted one identity that a new poster could sit on top of.",
        ],
      },
      {
        id: "idea",
        title: "Idea",
        paragraphs: [
          "The loop is a plan of the room: door, wall, exit. It is drawn with a thick stroke so it survives a cheap copy.",
          "Color is optional. The black print is the system. Accent ink is for the night poster only.",
        ],
      },
      {
        id: "applications",
        title: "Applications",
        paragraphs: [
          "Door vinyl is the lockup at one height. Posters use a four-line type stack. The card is the loop at pocket size.",
        ],
      },
    ],
  },
  {
    slug: "day-shift",
    title: "Day Shift",
    subject: "Workwear shop",
    discipline: "identity",
    year: "2025",
    problem:
      "A small workwear counter needed labels and a hanging card that could be read with gloves on.",
    idea: "Set the name like a shift board: high contrast, one size, no script. The hanger card is the smallest poster in the shop.",
    applications:
      "Hanging card, size strip, and a window vinyl that can be read from the opposite pavement.",
    deliverables: [
      "Wordmark and hanging-card layout",
      "Size strip and care icons in two inks",
      "Window vinyl and receipt header",
    ],
    scopeId: "full-brand",
    relatedSlug: "common-ground",
    selectedOnHome: false,
    imageIds: { object: "neo-p03-a", application: "neo-p03-b" },
    alt: {
      object: "Hard-lit garment form used as the Day Shift identity object",
      application: "Hanging card and size strip for Day Shift workwear",
    },
    captions: {
      object: "Day Shift. Object still for the shop identity.",
      application:
        "Hanger card and size strip. Labels on the page are live text.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "The shop sells a short run of trousers, jackets, and bags. Customers often keep gloves on at the counter.",
          "They asked for type that does not hide in a hangtag fold, and a window mark that does not need a seasonal rewrite.",
        ],
      },
      {
        id: "idea",
        title: "Idea",
        paragraphs: [
          "The name is set like a clocked-in board. Weight and tracking stay fixed. Color names the department, not a lifestyle.",
          "We refused a distressed stamp. The roughness is the 2px rule and the hard shadow, not fake dirt on the type.",
        ],
      },
      {
        id: "applications",
        title: "Applications",
        paragraphs: [
          "Hanging cards take the lockup and a size numeral. The window vinyl is one line. Receipts repeat the header, nothing else.",
        ],
      },
    ],
  },
  {
    slug: "off-hours",
    title: "Off Hours",
    subject: "Community event",
    discipline: "campaign",
    year: "2024",
    problem:
      "A one-weekend street close needed posters that could be wheatpasted, then pulled, without looking like a nightclub ad.",
    idea: "A clock with the hands removed. Time is the street, not a VIP list. The poster is a timetable you can stand in front of.",
    applications:
      "A3 posters, a handbill with the running order, and a volunteer sash.",
    deliverables: [
      "Poster series in two inks",
      "Handbill with running order",
      "Volunteer sash and wayfinding arrows",
    ],
    scopeId: "launch-campaign",
    relatedSlug: "bright-side",
    selectedOnHome: true,
    imageIds: { object: "neo-p04-a", application: "neo-p04-b" },
    alt: {
      object: "Hard-lit clock-like object used for the Off Hours campaign",
      application: "A3 poster and handbill for the Off Hours street weekend",
    },
    captions: {
      object: "Off Hours. Campaign object. Stub until the Higgsfield series.",
      application: "Poster and handbill. Event names on the site are HTML.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "The street closes for two days of food stalls, a small stage, and a kids table. Organizers needed print that volunteers could put up on Friday and strip on Sunday.",
          "They did not want a beer-brand look. They wanted a public notice with a pulse.",
        ],
      },
      {
        id: "idea",
        title: "Idea",
        paragraphs: [
          "Remove the hands from a clock face. The hours are the programme blocks. Type is the running order, not a slogan over a photograph.",
          "Lime fill is for the sash and the arrows. Posters stay paper and dense ink so they still read when half-covered.",
        ],
      },
      {
        id: "applications",
        title: "Applications",
        paragraphs: [
          "A3 for walls, A6 for hands, a sash for people who can answer questions. Arrows point to toilets and the stage, not to a sponsor.",
        ],
      },
    ],
  },
  {
    slug: "kindred-table",
    title: "Kindred Table",
    subject: "Food collective",
    discipline: "identity",
    year: "2025",
    problem:
      "A rotating kitchen collective needed a shared name that could sit on borrowed halls and still look like one kitchen.",
    idea: "A table drawn as a plan, not a plate. Places are marked. The name is the furniture, so any hall can host it.",
    applications:
      "Folded menu, apron mark, and a crate stencil for shared kit.",
    deliverables: [
      "Wordmark and table-plan lockup",
      "Menu fold and type sizes",
      "Apron mark and crate stencil",
    ],
    scopeId: "full-brand",
    relatedSlug: "common-ground",
    selectedOnHome: false,
    imageIds: { object: "neo-p05-a", application: "neo-p05-b" },
    alt: {
      object: "Hard-lit tabletop object standing in for Kindred Table",
      application: "Folded menu and crate stencil for Kindred Table",
    },
    captions: {
      object: "Kindred Table. Object for the table-plan mark.",
      application: "Menu and stencil. Collective name is typeset on the page.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "Cooks rotate. Halls change. The public still needed one name to look for on a door and on a crate of plates.",
          "They cook from a short menu. The identity had to survive a photocopied allergen list.",
        ],
      },
      {
        id: "idea",
        title: "Idea",
        paragraphs: [
          "Draw the table from above. Seats are ticks, not illustrated people. The wordmark sits on the long edge like a painted name.",
          "We kept photography out of the print system. Food pictures, when they exist, are not the brand.",
        ],
      },
      {
        id: "applications",
        title: "Applications",
        paragraphs: [
          "Menus fold to pocket size. Aprons take the plan at chest height. Crates get a one-color stencil so borrowed kit can return.",
        ],
      },
    ],
  },
  {
    slug: "bright-side",
    title: "Bright Side",
    subject: "Learning club",
    discipline: "campaign",
    year: "2025",
    problem:
      "A Saturday learning club needed a term campaign that parents could read on a lamp-post and that kids could wear.",
    idea: "A lamp turned toward the street. The campaign is the invitation, not a mascot. Type does the shouting.",
    applications: "Lamp-post poster, term timetable, and a cloth badge.",
    deliverables: [
      "Term poster in two inks",
      "Timetable card for bags",
      "Cloth badge and window card",
    ],
    scopeId: "launch-campaign",
    relatedSlug: "loop-house",
    selectedOnHome: false,
    imageIds: { object: "neo-p06-a", application: "neo-p06-b" },
    alt: {
      object: "Hard-lit lamp-like object used for the Bright Side campaign",
      application: "Term poster and cloth badge for Bright Side",
    },
    captions: {
      object: "Bright Side. Campaign object for the lamp idea.",
      application:
        "Poster and badge. Club copy on the site is not in the photo.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "The club runs on Saturday mornings in a borrowed hall. Parents needed dates. Kids needed something to pin on a jacket.",
          "They asked not to look like a tech academy. The work is making, drawing, and reading out loud.",
        ],
      },
      {
        id: "idea",
        title: "Idea",
        paragraphs: [
          "Turn a lamp toward the pavement. The poster is the beam: large type, one date block, no stock of smiling children.",
          "The badge is the lamp at badge size. It is sewn, not printed on a plastic coin.",
        ],
      },
      {
        id: "applications",
        title: "Applications",
        paragraphs: [
          "Lamp-posts take A3. Bags take the timetable. The window card in the hall uses the same type sizes as the poster.",
        ],
      },
    ],
  },
];

export const engagements: EngagementRecord[] = [
  {
    id: "identity-sprint",
    title: "Identity Sprint",
    suitable:
      "A group that already knows what it is launching and needs a public mark, type, and a first print piece in a short run.",
    outputs: [
      "Wordmark and one lockup",
      "Type and color on one sheet",
      "One applied piece (door, card, or cup)",
    ],
    exclusions: [
      "Campaign series and social calendars",
      "Packaging systems beyond one label",
      "Ongoing art direction after handover",
    ],
    stages: [
      "Written brief from your notes",
      "Two mark directions, then one",
      "Applied piece and file handoff",
    ],
    clientInputs: [
      "What is launching and who must read it",
      "Formats that must exist on day one",
      "Any name legal constraints you already know",
    ],
    defaultDeliverableIds: ["wordmark", "type-color"],
  },
  {
    id: "full-brand",
    title: "Full Brand",
    suitable:
      "A shop, cafe, or collective that needs a kit: mark, rules, and the first set of objects that will be used every week.",
    outputs: [
      "Wordmark, lockup, and rules sheet",
      "Stationery or signage as needed",
      "Two applied pieces from the live formats",
    ],
    exclusions: [
      "A multi-week campaign calendar",
      "Interior architecture or fit-out",
      "Photography production beyond art direction notes",
    ],
    stages: [
      "Brief and object list",
      "System on paper",
      "Objects in proof",
      "Kit handover",
    ],
    clientInputs: [
      "A named launch and a date you can miss by a week",
      "Existing print or paint constraints",
      "Who will apply the kit after we leave",
    ],
    defaultDeliverableIds: ["wordmark", "type-color", "stationery", "signage"],
  },
  {
    id: "launch-campaign",
    title: "Launch Campaign",
    suitable:
      "A dated public moment: a street weekend, a term, a shop opening that needs posters and a sequence, not a new company mark.",
    outputs: [
      "Poster series and handbill",
      "A simple sequence for the days it runs",
      "One wearable or wayfinding piece",
    ],
    exclusions: [
      "A full identity system if none exists",
      "Paid media buying",
      "Live event production",
    ],
    stages: [
      "Date and audience",
      "Poster idea",
      "Print and sequence",
      "Handoff before the first paste-up",
    ],
    clientInputs: [
      "Confirmed dates and sites",
      "What must stay legal on a lamp-post",
      "Who puts the print up",
    ],
    defaultDeliverableIds: ["campaign-kit", "social", "launch-sequence"],
  },
];

export const comparisonRows: {
  label: string;
  values: Record<EngagementId, string>;
}[] = [
  {
    label: "Best when",
    values: {
      "identity-sprint": "You need a mark and one first piece.",
      "full-brand": "You need a kit you will use every week.",
      "launch-campaign": "You need a dated public moment.",
    },
  },
  {
    label: "You receive",
    values: {
      "identity-sprint": "Mark, rules sheet, one application.",
      "full-brand": "Mark, rules, two weekly objects.",
      "launch-campaign": "Posters, sequence, one wearable or arrow.",
    },
  },
  {
    label: "Not in scope",
    values: {
      "identity-sprint": "Campaign calendar, retainers.",
      "full-brand": "Architecture, paid ads.",
      "launch-campaign": "A new company identity from scratch.",
    },
  },
  {
    label: "You supply",
    values: {
      "identity-sprint": "Name facts and day-one formats.",
      "full-brand": "Launch date and who applies the kit.",
      "launch-campaign": "Dates, sites, and who pastes.",
    },
  },
];

export const team: TeamMember[] = [
  {
    name: "Ada Voss",
    role: "Founder, identity",
    note: "Leads marks, type, and the first applied piece. Writes the rules sheet.",
  },
  {
    name: "Kenji Holm",
    role: "Campaign",
    note: "Leads posters, sequences, and wayfinding for dated public work.",
  },
  {
    name: "Rue Calder",
    role: "Production",
    note: "Holds print specs, vinyl sizes, and the production checklist.",
  },
];

export const principles = [
  {
    title: "Say the offer in the first line",
    body: "If a visitor cannot tell what we make from the poster, the type is decoration. We rewrite.",
  },
  {
    title: "Objects before atmospheres",
    body: "A cup, a door, a sash. We design the thing a hand will hold, then the page that explains it.",
  },
  {
    title: "One accent, used on purpose",
    body: "Lime is for actions and hierarchy. Body copy stays ink. We do not tint every panel.",
  },
];

export const boundaries = [
  "We do not invent client testimonials or numeric results for this sample.",
  "We do not run paid ads, host checkout, or book a consultation from this site.",
  "We do not restyle a live company. Every name here is fictional.",
];

export const faqCategories: FaqCategory[] = [
  {
    id: "scope",
    label: "Scope",
    items: [
      {
        question: "Can Identity Sprint grow into Full Brand later?",
        answer:
          "Yes in the story of the studio. The sprint files are the start of the kit. This sample does not sell an upgrade path or a discount.",
      },
      {
        question: "Why is there no monthly plan on this page?",
        answer:
          "These are one-time engagements. A recurring price table would describe the wrong product, so Pricing28 is not used here.",
      },
      {
        question: "Do you keep art-directing after handover?",
        answer:
          "No. Handoff includes files and a short how-to. Ongoing direction is outside these three scopes.",
      },
    ],
  },
  {
    id: "revisions",
    label: "Revisions",
    items: [
      {
        question: "How many mark directions do we see?",
        answer:
          "Two in the sprint, then one. Full Brand may adjust applications after the mark is chosen. This is sample process copy, not a live contract.",
      },
      {
        question: "What if the name is not legal?",
        answer:
          "You supply any constraint you already know. We do not run a trademark search from this demo.",
      },
    ],
  },
  {
    id: "handoff",
    label: "Handoff",
    items: [
      {
        question: "What files leave with us?",
        answer:
          "In the fiction: vector mark, a rules sheet, and print-ready applications listed in the engagement. Nothing is emailed from this page.",
      },
      {
        question: "Can the brief on this site start the work?",
        answer:
          "The brief is a local preview only. Preview, edit, and reset stay in the browser. No message is sent.",
      },
    ],
  },
];

export const closeStrip = {
  title: "Start a brief",
  body: "Pick a scope, name the launch, and preview a local brief. You can edit it. Reload clears it. Nothing is sent.",
} as const;

export const unknownSlugCopy = {
  title: "This case is not in the set",
  body: "Good Noise lists six sample cases. The address you opened is not one of them.",
  actionLabel: "See the work",
} as const;

export const studioStory = {
  title: "A studio that prefers a hard edge",
  description:
    "Good Noise started as a table for marks that had to work on doors and cups, not only on a screen. We still write the offer first, then the object, then the kit. This page is a fictional demo.",
};

export const studioWorkplace = {
  title: "How the table actually works",
  paragraphs: [
    "Workshops happen around printed proofs, vinyl tests, and a shared checklist. Photographs on this page are local stubs until the NEO-03 series. They stand in for a worktable and production materials, not a real client office.",
    "Roles stay small on purpose. Identity, campaign, and production sit in one conversation so a poster cannot drift from the mark.",
  ],
};

export const assetMatrix: AssetSlot[] = [
  {
    route: sampleRoot,
    section: "Poster object",
    recordId: "home",
    imageId: "neo-hero",
  },
  {
    route: sampleRoot,
    section: "Selected work",
    recordId: "home-selected",
    imageId: "neo-p01-a, neo-p02-a, neo-p04-a",
  },
  {
    route: `${sampleRoot}/work`,
    section: "Archive rows",
    recordId: "all-projects",
    imageId: "neo-p01-a through neo-p06-a",
  },
  {
    route: `${sampleRoot}/work/[slug]`,
    section: "Object and application",
    recordId: "each project",
    imageId: "neo-p0n-a / neo-p0n-b",
  },
  {
    route: `${sampleRoot}/studio`,
    section: "About6 story and workplace",
    recordId: "studio",
    imageId: "neo-studio-a, neo-studio-b, neo-team",
  },
];

const projectBySlug = new Map(
  projects.map((project) => [project.slug, project]),
);
const engagementById = new Map(
  engagements.map((engagement) => [engagement.id, engagement]),
);
const deliverableById = new Map(
  deliverableOptions.map((item) => [item.id, item]),
);

export function isDisciplineFilter(
  value: string | undefined,
): value is DisciplineFilter {
  return (
    value !== undefined &&
    (disciplineFilters as readonly string[]).includes(value)
  );
}

export function parseDisciplineFilter(
  value: string | undefined,
): DisciplineFilter {
  if (value === undefined || value === "" || !isDisciplineFilter(value)) {
    return "all";
  }
  return value;
}

export function isEngagementId(
  value: string | undefined,
): value is EngagementId {
  return (
    value !== undefined && (engagementIds as readonly string[]).includes(value)
  );
}

export function isDeliverableId(
  value: string | undefined,
): value is DeliverableId {
  return (
    value !== undefined && (deliverableIds as readonly string[]).includes(value)
  );
}

export function getProject(
  slug: string | undefined,
): ProjectRecord | undefined {
  if (!slug) return undefined;
  return projectBySlug.get(slug);
}

export function getEngagement(
  id: string | undefined,
): EngagementRecord | undefined {
  if (!isEngagementId(id)) return undefined;
  return engagementById.get(id);
}

export function getDeliverable(
  id: string | undefined,
): DeliverableOption | undefined {
  if (!isDeliverableId(id)) return undefined;
  return deliverableById.get(id);
}

export function filterProjects(
  discipline: DisciplineFilter,
  query?: string,
): ProjectRecord[] {
  const needle = query?.trim().toLowerCase();
  return projects.filter((project) => {
    const facetOk = discipline === "all" || project.discipline === discipline;
    if (!facetOk) return false;
    if (!needle) return true;
    return project.title.toLowerCase().includes(needle);
  });
}

export function homeProjects(): ProjectRecord[] {
  return homeSelectedSlugs.map((slug) => {
    const project = getProject(slug);
    if (!project) {
      throw new Error(`Home project missing: ${slug}`);
    }
    return project;
  });
}

export function relatedProject(project: ProjectRecord): ProjectRecord {
  const related = getProject(project.relatedSlug);
  if (!related || related.slug === project.slug) {
    const fallback = projects.find((item) => item.slug !== project.slug);
    if (!fallback) {
      throw new Error("Project set must contain a related case");
    }
    return fallback;
  }
  return related;
}

export function projectHref(slug: string): string {
  return `${sampleRoot}/work/${slug}`;
}

export function workHref(
  discipline: DisciplineFilter = "all",
  q?: string,
): string {
  const params = new URLSearchParams();
  if (discipline !== "all") params.set("filter", discipline);
  const trimmed = q?.trim();
  if (trimmed) params.set("q", trimmed);
  const encoded = params.toString();
  return encoded ? `${sampleRoot}/work?${encoded}` : `${sampleRoot}/work`;
}

export function startHref(query?: {
  project?: string;
  plan?: EngagementId;
}): string {
  const params = new URLSearchParams();
  if (query?.plan && getEngagement(query.plan)) {
    params.set("plan", query.plan);
  }
  if (query?.project && getProject(query.project)) {
    params.set("project", query.project);
  }
  const encoded = params.toString();
  return encoded ? `${sampleRoot}/start?${encoded}` : `${sampleRoot}/start`;
}

export function serviceHref(id: EngagementId): string {
  return `${sampleRoot}/services#${id}`;
}

export function disciplineLabel(discipline: Discipline): string {
  switch (discipline) {
    case "identity":
      return "Identity";
    case "campaign":
      return "Campaign";
  }
}

export function engagementLabel(id: EngagementId): string {
  return getEngagement(id)?.title ?? id;
}
