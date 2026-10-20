import type { Artist } from "../../_data/artists";
import { isStageId, type StageId } from "../../_data/stages";

/** URL-backed lineup filters. Invalid or missing values fall back to defaults. */
export type DayFilter = "both" | "1" | "2";
export type StageFilter = "all" | StageId;
export type LineupView = "cards" | "list";
/** Demo-only preview of the page states; the lineup data itself is static. */
export type LineupState = "live" | "loading" | "empty" | "error";

export type LineupQuery = {
  day: DayFilter;
  stage: StageFilter;
  /** Undefined when the URL has no `view`: the saved preference, then cards, applies. */
  view?: LineupView;
  state: LineupState;
};

export const defaultLineupQuery: LineupQuery = {
  day: "both",
  stage: "all",
  state: "live",
};

type RawParams = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export function isDayFilter(value: unknown): value is DayFilter {
  return value === "both" || value === "1" || value === "2";
}

export function isLineupView(value: unknown): value is LineupView {
  return value === "cards" || value === "list";
}

export function isLineupState(value: unknown): value is LineupState {
  return (
    value === "live" ||
    value === "loading" ||
    value === "empty" ||
    value === "error"
  );
}

export function parseLineupQuery(params: RawParams): LineupQuery {
  const day = first(params.day);
  const stage = first(params.stage);
  const view = first(params.view);
  const state = first(params.state);

  return {
    day: day === "1" || day === "2" ? day : "both",
    stage: isStageId(stage) ? stage : "all",
    view: isLineupView(view) ? view : undefined,
    state: isLineupState(state) ? state : "live",
  };
}

/** Canonical URL for a query: defaults are omitted so /lineup stays clean. */
export function lineupHref(query: LineupQuery): string {
  const params = new URLSearchParams();
  if (query.day !== "both") params.set("day", query.day);
  if (query.stage !== "all") params.set("stage", query.stage);
  if (query.view) params.set("view", query.view);
  if (query.state !== "live") params.set("state", query.state);
  const search = params.toString();
  return search ? `/lineup?${search}` : "/lineup";
}

export function filterLineup(list: readonly Artist[], query: LineupQuery) {
  return list.filter(
    (artist) =>
      (query.day === "both" || String(artist.day) === query.day) &&
      (query.stage === "all" || artist.stageId === query.stage),
  );
}
