export type DemoState = "ready" | "loading" | "empty" | "error";

const demoStates: readonly DemoState[] = ["ready", "loading", "empty", "error"];

type QueryValue = string | string[] | undefined;

function first(value: QueryValue): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

/** Allow-listed ?state= toggle. Unknown values fall back to "ready". */
export function parseDemoState(value: QueryValue): DemoState {
  return parseEnum(value, demoStates, "ready");
}

/** Allow-listed parsing for ?status=, ?filter=, ?week=, ?view=. */
export function parseEnum<T extends string>(
  value: QueryValue,
  allowed: readonly T[],
  fallback: T,
): T;
export function parseEnum<T extends string>(
  value: QueryValue,
  allowed: readonly T[],
  fallback: null,
): T | null;
export function parseEnum<T extends string>(
  value: QueryValue,
  allowed: readonly T[],
  fallback: T | null,
): T | null {
  const raw = first(value);
  return raw && (allowed as readonly string[]).includes(raw)
    ? (raw as T)
    : fallback;
}
