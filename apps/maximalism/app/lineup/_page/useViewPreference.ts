"use client";

import { useCallback, useSyncExternalStore } from "react";
import { isLineupView, type LineupView } from "./query";

const storageKey = "jk-maximalism-lineup-view";
const listeners = new Set<() => void>();
/** In-memory fallback when storage is blocked (private mode). */
let memory: LineupView | null = null;

function read(): LineupView | null {
  try {
    const value = window.localStorage.getItem(storageKey);
    return isLineupView(value) ? value : memory;
  } catch {
    return memory;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

/**
 * The visitor's last Cards / List choice, remembered in this browser so the
 * list view can stay their default (e.g. on a narrow screen).
 */
export function useViewPreference() {
  const stored = useSyncExternalStore(subscribe, read, () => null);

  const save = useCallback((view: LineupView) => {
    memory = view;
    try {
      window.localStorage.setItem(storageKey, view);
    } catch {
      // Storage blocked: the in-memory value covers this visit.
    }
    for (const listener of listeners) listener();
  }, []);

  return [stored, save] as const;
}
