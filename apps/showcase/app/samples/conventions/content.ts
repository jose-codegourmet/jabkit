import type { Route } from "next";
import type { SampleCta } from "../../../components/samples/cta";
import type { SampleRecord } from "../../../components/samples/records";

export const conventionsPath = "/samples/conventions" satisfies Route;

export const conventionRecords = [
  {
    id: "harbor-house",
    slug: "harbor-house",
    kind: "project",
    title: "Harbor House",
    summary:
      "A quiet residential conversion used to demonstrate project filters.",
    facet: "residential",
  },
  {
    id: "garden-room",
    slug: "garden-room",
    kind: "room",
    title: "Garden Room",
    summary: "A ground-floor room used to demonstrate stay preselection.",
    facet: "stay",
  },
  {
    id: "weekend-pass",
    slug: "weekend-pass",
    kind: "plan",
    title: "Weekend pass",
    summary: "An illustrative membership tier used to demonstrate plan links.",
    facet: "membership",
  },
] as const satisfies readonly SampleRecord[];

export function conventionRecordHref(slug: string): Route {
  const record = conventionRecords.find((item) => item.slug === slug);
  if (!record) return conventionsPath;
  return `${conventionsPath}/${record.slug}` as Route;
}

export const disabledCloudSync = {
  kind: "disabled",
  label: "Cloud sync",
  reason: "Not in this demo. Files and previews stay in the browser.",
} as const satisfies SampleCta;
