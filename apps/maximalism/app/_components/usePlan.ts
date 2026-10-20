"use client";

import { useCallback, useSyncExternalStore } from "react";

const storageKey = "jk-maximalism-plan";
const emptyPlan: readonly string[] = Object.freeze([]);
const listeners = new Set<() => void>();

let cache: { raw: string | null; value: readonly string[] } = {
  raw: null,
  value: emptyPlan,
};

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function parse(raw: string | null): readonly string[] {
  if (!raw) return emptyPlan;
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value)
      ? value.filter((entry): entry is string => typeof entry === "string")
      : emptyPlan;
  } catch {
    return emptyPlan;
  }
}

/** Returns the same array until storage changes, as useSyncExternalStore requires. */
function getSnapshot(): readonly string[] {
  const raw = readRaw();
  if (raw !== cache.raw) cache = { raw, value: parse(raw) };
  return cache.value;
}

function getServerSnapshot(): readonly string[] {
  return emptyPlan;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function write(next: readonly string[]) {
  const raw = JSON.stringify(next);
  try {
    window.localStorage.setItem(storageKey, raw);
    cache = { raw, value: next };
  } catch {
    // Storage blocked (private mode): keep the plan in memory for this view.
    cache = { raw: cache.raw, value: next };
  }
  for (const listener of listeners) listener();
}

/**
 * The visitor's personal plan: act slugs saved in this browser only.
 * Shared across every component on the page through one external store.
 */
export function usePlan() {
  const plan = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const has = useCallback((slug: string) => plan.includes(slug), [plan]);
  const add = useCallback(
    (slug: string) => {
      if (!plan.includes(slug)) write([...plan, slug]);
    },
    [plan],
  );
  const remove = useCallback(
    (slug: string) => write(plan.filter((entry) => entry !== slug)),
    [plan],
  );
  const toggle = useCallback(
    (slug: string) => {
      const added = !plan.includes(slug);
      write(added ? [...plan, slug] : plan.filter((entry) => entry !== slug));
      return added;
    },
    [plan],
  );
  const clear = useCallback(() => write(emptyPlan), []);

  return { plan, has, add, remove, toggle, clear };
}
