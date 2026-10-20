import { type Artist, artists, type Day, getArtist } from "./artists";
import { type StageId, stageIds } from "./stages";

export interface SetSlot {
  slug: string;
  day: Day;
  stageId: StageId;
  /** Minutes after midnight on the set's day. */
  startMinutes: number;
  /** May exceed 1440 for sets that run past midnight. */
  endMinutes: number;
}

export type ScheduleSort = "start" | "stage" | "act";

export const scheduleSortOptions: { value: ScheduleSort; label: string }[] = [
  { value: "start", label: "Start time" },
  { value: "stage", label: "Stage" },
  { value: "act", label: "Act A–Z" },
];

export function isScheduleSort(value: unknown): value is ScheduleSort {
  return value === "start" || value === "stage" || value === "act";
}

function toMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function toSet(artist: Artist): SetSlot {
  const startMinutes = toMinutes(artist.start);
  return {
    slug: artist.slug,
    day: artist.day,
    stageId: artist.stageId,
    startMinutes,
    endMinutes: startMinutes + artist.lengthMinutes,
  };
}

export const sets: SetSlot[] = artists.map(toSet);

function actName(slug: string): string {
  return getArtist(slug)?.name ?? slug;
}

export function sortSets(list: readonly SetSlot[], sort: ScheduleSort) {
  const copy = [...list];
  copy.sort((a, b) => {
    if (a.day !== b.day) return a.day - b.day;
    if (sort === "stage") {
      const byStage = stageIds.indexOf(a.stageId) - stageIds.indexOf(b.stageId);
      return byStage || a.startMinutes - b.startMinutes;
    }
    if (sort === "act") return actName(a.slug).localeCompare(actName(b.slug));
    return a.startMinutes - b.startMinutes;
  });
  return copy;
}

export function filterSets({
  day,
  stage,
  planOnly = false,
  plan = [],
}: {
  day?: Day;
  stage?: StageId | "all";
  planOnly?: boolean;
  plan?: readonly string[];
}): SetSlot[] {
  return sets.filter(
    (set) =>
      (day === undefined || set.day === day) &&
      (stage === undefined || stage === "all" || set.stageId === stage) &&
      (!planOnly || plan.includes(set.slug)),
  );
}

export interface Clash {
  a: string;
  b: string;
  day: Day;
  overlapMinutes: number;
}

/** Pairs of saved sets on the same day whose times overlap, earliest first. */
export function findClashes(planSlugs: readonly string[]): Clash[] {
  const planned = sortSets(
    sets.filter((set) => planSlugs.includes(set.slug)),
    "start",
  );
  const clashes: Clash[] = [];
  for (let i = 0; i < planned.length; i += 1) {
    for (let j = i + 1; j < planned.length; j += 1) {
      const a = planned[i];
      const b = planned[j];
      if (a.day !== b.day) continue;
      const overlap =
        Math.min(a.endMinutes, b.endMinutes) -
        Math.max(a.startMinutes, b.startMinutes);
      if (overlap > 0) {
        clashes.push({
          a: a.slug,
          b: b.slug,
          day: a.day,
          overlapMinutes: overlap,
        });
      }
    }
  }
  return clashes;
}

export function getSet(slug: string): SetSlot | undefined {
  return sets.find((set) => set.slug === slug);
}

export function formatTime(minutes: number): string {
  const wrapped = minutes % 1440;
  const hours = Math.floor(wrapped / 60);
  const mins = wrapped % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function scheduleHref({
  day,
  stage,
}: {
  day?: Day;
  stage?: StageId;
} = {}): string {
  const params = new URLSearchParams();
  if (day) params.set("day", String(day));
  if (stage) params.set("stage", stage);
  const query = params.toString();
  return query ? `/schedule?${query}` : "/schedule";
}

/** Home teaser: the first four Day 1 sets by start time. */
export const scheduleTeaser: SetSlot[] = sortSets(
  filterSets({ day: 1 }),
  "start",
).slice(0, 4);
