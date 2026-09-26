import {
  type DesignSystemSlug,
  designSystemSiteUrl,
} from "../../common/design-system-sites";

export type DesignSystemRoute = { path: string; note?: string };

interface DesignSystemFields {
  slug: DesignSystemSlug;
  designSystem: string;
  brand: string;
  description: string;
  /** Secondary routes on the site (docs/showcase.md, SH-08 inventory). */
  routes: DesignSystemRoute[];
}
export type DesignSystemEntry = DesignSystemFields &
  ({ status: "ready"; href: string } | { status: "soon"; href?: never });
export function isReadyDesignSystem(
  entry: DesignSystemEntry,
): entry is DesignSystemFields & { status: "ready"; href: string } {
  return entry.status === "ready";
}
const entries: DesignSystemFields[] = [
  {
    slug: "minimal",
    designSystem: "Minimal",
    brand: "West Room Studio",
    description:
      "Architecture and interiors. Work, project detail, services, and a local inquiry preview.",
    routes: [
      { path: "/work", note: "6 projects" },
      { path: "/studio" },
      { path: "/services" },
      { path: "/contact", note: "inquiry preview" },
    ],
  },
  {
    slug: "neo-brutalism",
    designSystem: "Neo-brutalism",
    brand: "Good Noise",
    description:
      "Independent branding studio. Work, engagements, and a project-brief preview.",
    routes: [
      { path: "/work", note: "6 projects" },
      { path: "/services" },
      { path: "/studio" },
      { path: "/start", note: "project brief" },
    ],
  },
  {
    slug: "editorial",
    designSystem: "Editorial",
    brand: "Common Hours",
    description: "Independent journal. Stories, contributors, and membership.",
    routes: [
      { path: "/stories", note: "9 stories" },
      { path: "/contributors/[slug]", note: "3 profiles" },
      { path: "/about" },
      { path: "/membership", note: "demo form" },
    ],
  },
  {
    slug: "luxury",
    designSystem: "Luxury",
    brand: "Stillwater House",
    description:
      "Boutique guest house. Rooms, experiences, and a stay-inquiry preview.",
    routes: [
      { path: "/rooms", note: "3 rooms" },
      { path: "/experiences" },
      { path: "/house" },
      { path: "/inquire", note: "stay inquiry" },
    ],
  },
  {
    slug: "retro",
    designSystem: "Retro",
    brand: "Pocket Keeps",
    description:
      "Creative image utility. Collections and a working local crop/download studio.",
    routes: [
      { path: "/collections", note: "3 collections" },
      { path: "/how-it-works" },
      { path: "/pricing" },
      { path: "/studio", note: "crop and download" },
    ],
  },
];
export const designSystems: DesignSystemEntry[] = entries.map((entry) => {
  const href = designSystemSiteUrl(entry.slug);
  return href
    ? { ...entry, status: "ready", href }
    : { ...entry, status: "soon" };
});
