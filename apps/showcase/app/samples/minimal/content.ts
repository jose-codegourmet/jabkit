import type {
  AssetSlot,
  Discipline,
  DisciplineFilter,
  FaqCategory,
  ProcessStage,
  ProjectRecord,
  ServiceId,
  ServiceRecord,
  TeamMember,
} from "./types";
import { disciplineFilters, sampleRoot, serviceIds } from "./types";

export const brand = {
  name: "West Room Studio",
  shortName: "West Room",
  tagline: "Architecture and interiors for small spaces.",
  statement:
    "We plan compact houses, workrooms, and shops so daylight, storage, and daily use stay in proportion.",
  intro:
    "West Room Studio is a fictional architecture and interiors practice for clients who want a small plan drawn with care, not a larger building than they need.",
} as const;

export const demoNote =
  "West Room Studio is a fictional JabKit sample. Nothing is sent or booked.";

export const navItems = [
  { href: `${sampleRoot}/work`, label: "Work" },
  { href: `${sampleRoot}/studio`, label: "Studio" },
  { href: `${sampleRoot}/services`, label: "Services" },
  { href: `${sampleRoot}/contact`, label: "Discuss a project" },
] as const;

export const homeSelectedSlugs = [
  "courtyard-house",
  "narrow-house",
  "reading-room",
  "common-table",
] as const;

export const principles = [
  {
    title: "Measure the room first",
    body: "We start with existing walls, light, and how people already move. The drawing follows that evidence.",
  },
  {
    title: "Keep one clear threshold",
    body: "Entries, desks, and cooking lines stay short. Extra corridors are treated as a cost, not a feature.",
  },
  {
    title: "Specify joins, not effects",
    body: "Plaster, timber, and metal are named as they will be built. Finishes are few and repeatable.",
  },
] as const;

export const projects: ProjectRecord[] = [
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    discipline: "residential",
    place: "North Hollow",
    year: "2024",
    area: "118 m2",
    brief:
      "A one-storey house for two people who cook at home and want the garden in daily use, not as a view from a corridor.",
    constraints:
      "The plot is 7.4 m wide with a party wall on the west. Planning limited new openings on the street. The existing slab had to stay.",
    outcome:
      "The kitchen now faces a small planted court. Bedrooms stay on the quieter north side, and the street room can close for guests without blocking the garden path.",
    relatedServiceId: "architecture",
    selectedOnHome: true,
    imageIds: { establishing: "min-p01-a", detail: "min-p01-b" },
    alt: {
      establishing:
        "Daylight reaching a quiet interior threshold toward a small courtyard",
      detail: "Close view of pale plaster meeting timber at a window seat",
    },
    captions: {
      establishing:
        "Courtyard House. The kitchen threshold looking into the court.",
      detail: "Window-seat join: plaster, oak, and a single metal handle.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "The clients asked for a house that could host four people at a table without adding a dining wing. They cook most evenings and wanted the garden reachable in socks.",
          "We treated the court as a room with a sky, not as leftover land. Storage lives in the thickness of the west wall so the court stays clear.",
        ],
      },
      {
        id: "constraints",
        title: "Constraints",
        paragraphs: [
          "The west party wall could not take new windows. Daylight had to come from the street, the court, and a high north light over the bath.",
          "The existing slab set the floor level. We kept it and used a single step only at the court, with a drain that can be swept.",
        ],
      },
      {
        id: "response",
        title: "Design response",
        paragraphs: [
          "A long kitchen bench faces the court. The street room sits one door away and can be shut without isolating the bedrooms.",
          "Materials stay in a small set: lime plaster, pale oak, and galvanised metal for wet work. No applied stone, no extra fireplace.",
        ],
      },
    ],
  },
  {
    slug: "narrow-house",
    title: "Narrow House",
    discipline: "residential",
    place: "Quay Street",
    year: "2023",
    area: "86 m2",
    brief:
      "A three-level terrace for a family of three who needed a quieter bedroom, a desk that is not in the kitchen, and a stair that does not steal the rooms.",
    constraints:
      "The plan is 4.1 m clear between walls. The stair could not move because of the basement drain. Rear neighbours sit close, so new glass needed screens.",
    outcome:
      "The desk now sits on the middle landing with a high window. The rear room gained a screened balcony, and the top bedroom no longer shares a wall with the stair void.",
    relatedServiceId: "architecture",
    selectedOnHome: true,
    imageIds: { establishing: "min-p02-a", detail: "min-p02-b" },
    alt: {
      establishing:
        "Long interior view through a narrow house toward a screened rear window",
      detail: "Timber stair landing with a built-in desk and high daylight",
    },
    captions: {
      establishing: "Narrow House. Looking from the street room to the rear.",
      detail: "Landing desk. The stair keeps its run; the work sits beside it.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "School bags, a standing desk, and a small guest bed had been competing for the same rear room. The family wanted those uses named and separated.",
          "They asked not to lose the rear garden for a larger kitchen. Cooking stays compact; the gain is in the stair and the top floor.",
        ],
      },
      {
        id: "constraints",
        title: "Constraints",
        paragraphs: [
          "Moving the stair would have meant a new basement opening. We kept the existing run and rebuilt only the landings.",
          "Rear overlooking rules required a screen. We used vertical timber with a gap sized for sitting, not for standing at the rail.",
        ],
      },
      {
        id: "response",
        title: "Design response",
        paragraphs: [
          "The middle landing became a desk with a cupboard below for bags. The kitchen stayed on the garden wall with a two-person table.",
          "The top bedroom moved to the street, away from the stair. A small bath sits between, lit from above.",
        ],
      },
    ],
  },
  {
    slug: "reading-room",
    title: "Reading Room",
    discipline: "workspace",
    place: "Little Field",
    year: "2025",
    area: "42 m2",
    brief:
      "A shared reading and writing room for a small editorial office that had been working from a corridor of desks with no place to sit with a book.",
    constraints:
      "The tenancy could not change the facade. Acoustic privacy was needed without a full wall of glass. Power had to stay on two existing floor boxes.",
    outcome:
      "Four desks now face a wall of shelves. A quieter table sits by the window for two-hour reading. Cables stay in the existing boxes, and the room can close without darkening.",
    relatedServiceId: "interiors",
    selectedOnHome: true,
    imageIds: { establishing: "min-p03-a", detail: "min-p03-b" },
    alt: {
      establishing:
        "Shared workroom with a long table, shelves, and daylight at the far window",
      detail: "Shelf and desk junction with a single task lamp and open books",
    },
    captions: {
      establishing:
        "Reading Room. Desks along the shelf wall; the window table stays free.",
      detail: "Shelf to desk. Power stays in the two existing floor boxes.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "The office needed a room that could hold eight people at peak and still offer two quiet seats. They did not want a phone booth or a branded mural.",
          "Books are working tools here. Shelves had to take current issues at hand height, with archive boxes above.",
        ],
      },
      {
        id: "constraints",
        title: "Constraints",
        paragraphs: [
          "The landlord refused new facade openings. We kept the existing windows and added an internal linen screen that can stack.",
          "Only two floor boxes were live. Furniture sits on that grid so no trunking runs across the floor.",
        ],
      },
      {
        id: "response",
        title: "Design response",
        paragraphs: [
          "A single oak table takes four. Two wall desks take the rest. The window table is reserved for reading, not laptops by default.",
          "This interiors scope led the fit-out. Architecture advice stayed at door, light, and acoustic lining only.",
        ],
      },
    ],
  },
  {
    slug: "common-table",
    title: "Common Table",
    discipline: "retail",
    place: "Harbor Lane",
    year: "2024",
    area: "64 m2",
    brief:
      "A small food counter and shared table for a baker who wanted people to sit without turning the shop into a cafe with a long menu.",
    constraints:
      "The shop is 5.2 m wide. Health rules required a washable floor and a separate wash-up. Seating could not block the counter queue.",
    outcome:
      "A twelve-seat table now runs parallel to the counter. Queues stay on a marked stone strip. Wash-up is behind a full-height oak screen, not in view from the door.",
    relatedServiceId: "interiors",
    selectedOnHome: true,
    imageIds: { establishing: "min-p04-a", detail: "min-p04-b" },
    alt: {
      establishing:
        "Narrow shop interior with a long shared table beside a service counter",
      detail: "Timber screen separating the wash-up from the public table",
    },
    captions: {
      establishing:
        "Common Table. Counter to the left, shared table to the right.",
      detail: "Oak screen. Wash-up stays out of the doorway view.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "The baker sells bread and two hot dishes at lunch. They wanted a table where regulars could sit, not a row of stools facing a wall.",
          "Display had to remain honest: trays on the counter, no hanging menus, no extra lighting track.",
        ],
      },
      {
        id: "constraints",
        title: "Constraints",
        paragraphs: [
          "The floor had to be washable. We used a pale stone in two bands so the queue line is visible without painted graphics.",
          "A grease trap limited the kitchen depth. The screen hides that work without claiming extra width from the table.",
        ],
      },
      {
        id: "response",
        title: "Design response",
        paragraphs: [
          "The table is one piece, twelve seats, with a gap at the street end for a pram. Lighting is a single linear fitting over both counter and table.",
          "Signage is painted on the glass in the existing type. No new brand mark was designed for this sample.",
        ],
      },
    ],
  },
  {
    slug: "north-workshop",
    title: "North Workshop",
    discipline: "workspace",
    place: "Mill End",
    year: "2023",
    area: "96 m2",
    brief:
      "A making room and small office for a joinery pair who needed a clean table for drawings and a dirty bay for machines, in one tenancy.",
    constraints:
      "The north roof lights could not be enlarged. Dust extraction had a fixed wall position. The office could not sit in the machine noise.",
    outcome:
      "A glazed office now sits on the quiet south wall. Machines stay on the extraction line. The drawing table faces north light and can be covered at the end of the day.",
    relatedServiceId: "architecture",
    selectedOnHome: false,
    imageIds: { establishing: "min-p05-a", detail: "min-p05-b" },
    alt: {
      establishing:
        "Workshop interior with a clean drawing table under north lights",
      detail: "Partition between a quiet office and the machine bay",
    },
    captions: {
      establishing:
        "North Workshop. Drawing table under the existing roof lights.",
      detail: "South office. Glass for sightlines, lining for sound.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "The pair needed to meet clients without walking them past open blades. They also needed a table large enough for a full door drawing.",
          "Storage for timber had to stay in the same bay. We did not add a second tenancy.",
        ],
      },
      {
        id: "constraints",
        title: "Constraints",
        paragraphs: [
          "Extraction ductwork was already paid for. The dirty bay stays on that wall.",
          "Roof lights were structurally fixed. We cleaned them and added internal baffles rather than new openings.",
        ],
      },
      {
        id: "response",
        title: "Design response",
        paragraphs: [
          "A lined glass office takes meetings and invoices. The making floor stays one step down with a washable threshold.",
          "This was an architecture-led change of lining and openings, with interiors limited to the table and shelves.",
        ],
      },
    ],
  },
  {
    slug: "small-corner",
    title: "Small Corner",
    discipline: "retail",
    place: "Westgate",
    year: "2025",
    area: "28 m2",
    brief:
      "A corner shop for a florist who needed a workbench, a cold box, and a small public counter without hiding the work.",
    constraints:
      "Two glazed street fronts could not take solid panels. The cold box needed a service door from the rear alley. Floor falls to an existing drain.",
    outcome:
      "The workbench now faces both streets so making stays visible. The cold box sits on the alley wall. The public counter is one metre of stone, not a second shop fit.",
    relatedServiceId: "interiors",
    selectedOnHome: false,
    imageIds: { establishing: "min-p06-a", detail: "min-p06-b" },
    alt: {
      establishing:
        "Corner shop with a workbench facing two street windows and a small stone counter",
      detail: "Stone counter and metal cold-box door on the alley wall",
    },
    captions: {
      establishing:
        "Small Corner. Workbench to the glass; counter on the short wall.",
      detail: "Counter and cold-box door. Service stays on the alley.",
    },
    sections: [
      {
        id: "brief",
        title: "Brief",
        paragraphs: [
          "The florist wanted people to see stems being cut, not a back room. The shop also needed a place to write a card without blocking the door.",
          "No hanging rails, no painted slogans. Buckets and a single shelf were enough display.",
        ],
      },
      {
        id: "constraints",
        title: "Constraints",
        paragraphs: [
          "Both street fronts are original metal frames. We kept them and used a pale blind only on the west glass in late sun.",
          "The drain set the wet zone. The workbench sits on that fall; the public floor stays level.",
        ],
      },
      {
        id: "response",
        title: "Design response",
        paragraphs: [
          "A zinc-topped bench runs the long glass. The stone counter is short on purpose so it cannot become a cafe.",
          "Interiors led. Architecture advice covered the alley door and the fall to drain only.",
        ],
      },
    ],
  },
];

export const services: ServiceRecord[] = [
  {
    id: "architecture",
    title: "Architecture",
    audience:
      "For houses and making spaces where walls, openings, and structure need to change.",
    deliverables: [
      "Measured survey review and a written brief",
      "Plan options and one preferred layout",
      "Drawings for planning or building control where the project needs them",
      "A specification of materials and joins at the scale of the job",
    ],
    exclusions: [
      "Interior furniture packages unless interiors is also appointed",
      "Landscape beyond the immediate court or threshold",
      "Contractor tendering as a separate paid service in this sample",
    ],
    stages: [
      "Brief and constraints",
      "Layout",
      "Drawings for consent",
      "Site queries during build",
    ],
    clientInputs: [
      "Access to the existing building",
      "A note of what must stay",
      "A budget range, even if it is approximate",
    ],
  },
  {
    id: "interiors",
    title: "Interiors",
    audience:
      "For rooms that already have a sound shell and need furniture, lining, light, and a working plan.",
    deliverables: [
      "A furniture and lining plan",
      "Joinery and lighting specification",
      "Finish samples for the rooms in scope",
      "A simple sequence for making and install",
    ],
    exclusions: [
      "Structural openings and new stairs",
      "Full architectural consent drawings",
      "Loose art direction or styling visits after handover",
    ],
    stages: [
      "Brief and existing photographs",
      "Plan and sample set",
      "Maker drawings",
      "Install review",
    ],
    clientInputs: [
      "Photographs of the room in daylight",
      "A list of pieces that must remain",
      "Maker contacts if you already have them",
    ],
  },
];

export const processStages: ProcessStage[] = [
  {
    id: "listen",
    title: "Listen on site",
    body: "We walk the rooms, measure what matters, and write a brief you can disagree with. No mood board is issued at this stage.",
  },
  {
    id: "draw",
    title: "Draw the constraint",
    body: "The first drawings name the walls that stay, the light that exists, and the one change that would unlock the rest.",
  },
  {
    id: "specify",
    title: "Specify the few materials",
    body: "We choose a small set of finishes and joins. Samples are physical. Substitutions are written, not implied.",
  },
  {
    id: "attend",
    title: "Attend the making",
    body: "We answer site queries and check the joins that were specified. We do not run the contract in this sample.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Ivo Maren",
    role: "Founder, architecture",
    note: "Leads houses and workshop conversions. Writes the first plan.",
  },
  {
    name: "Sera Quill",
    role: "Interiors",
    note: "Leads fit-outs, joinery, and lighting. Holds the sample library.",
  },
  {
    name: "Nia Holt",
    role: "Project coordination",
    note: "Keeps drawings, site dates, and maker questions in one file.",
  },
];

export const founder = {
  name: "Ivo Maren",
  role: "Founder",
  fallback: "IM",
  philosophy:
    "A small room is finished when the next object has nowhere honest to go. We stop before that point.",
} as const;

export const faqCategories: FaqCategory[] = [
  {
    id: "process",
    label: "Process",
    items: [
      {
        question: "How long does a typical house alteration take to draw?",
        answer:
          "A compact house with a clear brief is usually eight to twelve weeks of drawing before a builder is appointed. That is a fictional sample range, not a live quote.",
      },
      {
        question: "Do you visit before writing a fee?",
        answer:
          "Yes. We visit once, write what we saw, and only then send a fee for the next stage. This sample does not collect that fee.",
      },
      {
        question: "Can interiors start before architecture is finished?",
        answer:
          "Only when the shell is already sound. If walls will move, interiors waits so furniture is not drawn twice.",
      },
    ],
  },
  {
    id: "scope",
    label: "Scope",
    items: [
      {
        question: "Do you work outside the city named in the projects?",
        answer:
          "The places in this sample are fictional. In the story of the studio, work stays within a short travel day so site visits remain possible.",
      },
      {
        question: "What is not included in architecture?",
        answer:
          "Furniture packages, art, and planting beyond the court. Those sit in interiors or with other practices.",
      },
      {
        question: "Is there a minimum area?",
        answer:
          "We prefer rooms we can know well. The smallest job in this set is 28 m2. We do not take stadium work in this sample.",
      },
    ],
  },
];

export const approachClose = {
  title: "Two scopes, one inquiry",
  body: "Architecture when the shell must change. Interiors when the room is already sound. Discuss a project with the scope already selected.",
} as const;

export const unknownSlugCopy = {
  title: "This project is not in the set",
  body: "West Room Studio lists six finished sample projects. The address you opened is not one of them.",
  actionLabel: "View all work",
} as const;

export const assetMatrix: AssetSlot[] = [
  {
    route: sampleRoot,
    section: "Leading figure",
    recordId: "home",
    imageId: "min-hero",
  },
  {
    route: sampleRoot,
    section: "Selected projects",
    recordId: "courtyard-house",
    imageId: "min-p01-a",
  },
  {
    route: `${sampleRoot}/work`,
    section: "Index figures",
    recordId: "all-projects",
    imageId: "min-p01-a through min-p06-a",
  },
  {
    route: `${sampleRoot}/work/[slug]`,
    section: "Establishing and detail",
    recordId: "each project",
    imageId: "min-p0n-a / min-p0n-b",
  },
  {
    route: `${sampleRoot}/studio`,
    section: "About14 worktable",
    recordId: "studio",
    imageId: "min-studio",
  },
  {
    route: `${sampleRoot}/studio`,
    section: "Founder profile",
    recordId: "ivo-maren",
    imageId: "min-profile",
  },
];

const projectBySlug = new Map(
  projects.map((project) => [project.slug, project]),
);
const serviceById = new Map(services.map((service) => [service.id, service]));

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

export function isServiceId(value: string | undefined): value is ServiceId {
  return (
    value !== undefined && (serviceIds as readonly string[]).includes(value)
  );
}

export function getProject(
  slug: string | undefined,
): ProjectRecord | undefined {
  if (!slug) return undefined;
  return projectBySlug.get(slug);
}

export function getService(id: string | undefined): ServiceRecord | undefined {
  if (!isServiceId(id)) return undefined;
  return serviceById.get(id);
}

export function filterProjects(discipline: DisciplineFilter): ProjectRecord[] {
  if (discipline === "all") return projects;
  return projects.filter((project) => project.discipline === discipline);
}

export function adjacentProjects(slug: string): {
  previous: ProjectRecord;
  next: ProjectRecord;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  const safeIndex = index < 0 ? 0 : index;
  const previous =
    projects[safeIndex > 0 ? safeIndex - 1 : projects.length - 1];
  const next = projects[(safeIndex + 1) % projects.length];
  if (!previous || !next) {
    throw new Error("Project set must contain at least one record");
  }
  return { previous, next };
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

export function projectHref(slug: string): string {
  return `${sampleRoot}/work/${slug}`;
}

export function workHref(discipline: DisciplineFilter = "all"): string {
  if (discipline === "all") return `${sampleRoot}/work`;
  return `${sampleRoot}/work?discipline=${discipline}`;
}

export function contactHref(query?: {
  project?: string;
  service?: ServiceId;
}): string {
  const params = new URLSearchParams();
  if (query?.project && getProject(query.project)) {
    params.set("project", query.project);
  }
  if (query?.service && getService(query.service)) {
    params.set("service", query.service);
  }
  const encoded = params.toString();
  return encoded ? `${sampleRoot}/contact?${encoded}` : `${sampleRoot}/contact`;
}

export function serviceHref(id: ServiceId): string {
  return `${sampleRoot}/services#${id}`;
}

export function disciplineLabel(discipline: Discipline): string {
  switch (discipline) {
    case "residential":
      return "Residential";
    case "workspace":
      return "Workspace";
    case "retail":
      return "Retail";
  }
}
