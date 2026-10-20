export const stageIds = [
  "loud-stage",
  "glow-tent",
  "low-end-room",
  "open-air-deck",
] as const;

export type StageId = (typeof stageIds)[number];

export interface Stage {
  id: StageId;
  name: string;
  description: string;
  imageId: string;
}

export const stages: Stage[] = [
  {
    id: "loud-stage",
    name: "Loud Stage",
    description: "The big one. Headliners, huge singalongs, room to dance.",
    imageId: "max-stage-01",
  },
  {
    id: "glow-tent",
    name: "Glow Tent",
    description:
      "Under canvas and string lights. Soul, synths, and late grooves.",
    imageId: "max-stage-02",
  },
  {
    id: "low-end-room",
    name: "Low End Room",
    description: "Indoors and bass-first. Bring earplugs; we mean it kindly.",
    imageId: "max-stage-03",
  },
  {
    id: "open-air-deck",
    name: "Open Air Deck",
    description: "Daylight sets, slower starts, plenty of sky.",
    imageId: "max-stage-04",
  },
];

export function isStageId(value: unknown): value is StageId {
  return (
    typeof value === "string" && (stageIds as readonly string[]).includes(value)
  );
}

export function getStage(id: StageId): Stage {
  const stage = stages.find((entry) => entry.id === id);
  if (!stage) throw new Error(`Unknown stage: ${id}`);
  return stage;
}

export function stageScheduleHref(id: StageId): string {
  return `/schedule?stage=${id}`;
}
