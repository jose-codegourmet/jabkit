import type { Route } from "next";
import {
  findRecordById,
  type SampleRecord,
  type SampleRecordKind,
} from "./records";

export const SAMPLE_QUERY_KEYS = [
  "filter",
  "q",
  "project",
  "room",
  "plan",
] as const;

export type SampleQueryKey = (typeof SAMPLE_QUERY_KEYS)[number];

export type SampleSearchParams = Record<string, string | string[] | undefined>;

export const SAMPLE_FILTERS = ["all", "project", "room", "plan"] as const;
export type SampleFilter = (typeof SAMPLE_FILTERS)[number];

const SELECT_KEYS = [
  "project",
  "room",
  "plan",
] as const satisfies readonly SampleRecordKind[];

export function firstQueryValue(
  value: string | string[] | undefined,
): string | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  const trimmed = raw?.trim();
  return trimmed ? trimmed : undefined;
}

export function parseAllowlistedQuery(
  searchParams: SampleSearchParams,
): Partial<Record<SampleQueryKey, string>> {
  const parsed: Partial<Record<SampleQueryKey, string>> = {};
  for (const key of SAMPLE_QUERY_KEYS) {
    const value = firstQueryValue(searchParams[key]);
    if (value) parsed[key] = value;
  }
  return parsed;
}

export function parseFacetFilter(
  raw: string | undefined,
  allowed: readonly string[] = SAMPLE_FILTERS,
): string {
  if (!raw || raw === "all") return "all";
  return allowed.includes(raw) ? raw : "all";
}

export function sampleHref(
  pathname: Route,
  params: Partial<Record<SampleQueryKey, string | undefined>>,
): Route {
  const search = new URLSearchParams();
  for (const key of SAMPLE_QUERY_KEYS) {
    const value = params[key]?.trim();
    if (!value) continue;
    if (key === "filter" && value === "all") continue;
    search.set(key, value);
  }
  const query = search.toString();
  return (query ? `${pathname}?${query}` : pathname) as Route;
}

export function filterSampleRecords<T extends SampleRecord>(
  records: readonly T[],
  options: { filter: string; q?: string },
): T[] {
  const needle = options.q?.trim().toLowerCase();
  return records.filter((record) => {
    const facetOk = options.filter === "all" || record.kind === options.filter;
    if (!facetOk) return false;
    if (!needle) return true;
    const haystack =
      `${record.title} ${record.summary} ${record.facet}`.toLowerCase();
    return haystack.includes(needle);
  });
}

export interface SampleSelection<T extends SampleRecord> {
  record: T | undefined;
  ignoredUnknown: SampleRecordKind[];
}

export function resolveSampleSelection<T extends SampleRecord>(
  records: readonly T[],
  params: Partial<Record<SampleQueryKey, string>>,
): SampleSelection<T> {
  const ignoredUnknown: SampleRecordKind[] = [];
  let record: T | undefined;
  for (const key of SELECT_KEYS) {
    const raw = params[key];
    if (!raw) continue;
    const match = findRecordById(records, raw);
    if (!match || match.kind !== key) {
      ignoredUnknown.push(key);
      continue;
    }
    if (!record) record = match;
  }
  return { record, ignoredUnknown };
}
