import {
  type DesignSystemSlug,
  designSystemSiteUrl,
} from "../../common/design-system-sites";

interface DesignSystemFields {
  slug: DesignSystemSlug;
  designSystem: string;
  brand: string;
  description: string;
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
  },
  {
    slug: "neo-brutalism",
    designSystem: "Neo-brutalism",
    brand: "Good Noise",
    description:
      "Independent branding studio. Work, engagements, and a project-brief preview.",
  },
  {
    slug: "editorial",
    designSystem: "Editorial",
    brand: "Common Hours",
    description: "Independent journal. Stories, contributors, and membership.",
  },
  {
    slug: "luxury",
    designSystem: "Luxury",
    brand: "Stillwater House",
    description:
      "Boutique guest house. Rooms, experiences, and a stay-inquiry preview.",
  },
  {
    slug: "retro",
    designSystem: "Retro",
    brand: "Pocket Keeps",
    description:
      "Creative image utility. Collections and a working local crop/download studio.",
  },
];
export const designSystems: DesignSystemEntry[] = entries.map((entry) => {
  const href = designSystemSiteUrl(entry.slug);
  return href
    ? { ...entry, status: "ready", href }
    : { ...entry, status: "soon" };
});
