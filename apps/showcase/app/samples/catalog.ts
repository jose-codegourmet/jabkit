export type SampleStatus = "ready" | "soon";

export interface SampleEntry {
  slug: string;
  title: string;
  description: string;
  href: "/samples/saas";
  status: SampleStatus;
}

export const samples = [
  {
    slug: "saas",
    title: "SaaS landing",
    description:
      "A full marketing site for Quarry, a fictional product-analytics company, assembled from JabKit marketing and dashboard blocks.",
    href: "/samples/saas",
    status: "ready",
  },
] as const satisfies readonly SampleEntry[];
