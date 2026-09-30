"use client";

import { useSyncExternalStore } from "react";

/**
 * In-memory "marked as contacted" ids. Module-level so the list survives the
 * All / Follow-ups tab switch (the page segment remounts when ?filter= changes).
 * A full reload resets the demo.
 */
let contacted: ReadonlySet<string> = new Set();
const listeners = new Set<() => void>();
const serverSnapshot: ReadonlySet<string> = new Set();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function markContacted(id: string) {
  if (contacted.has(id)) return;
  contacted = new Set([...contacted, id]);
  for (const listener of listeners) listener();
}

export function useContacted(): ReadonlySet<string> {
  return useSyncExternalStore(
    subscribe,
    () => contacted,
    () => serverSnapshot,
  );
}
