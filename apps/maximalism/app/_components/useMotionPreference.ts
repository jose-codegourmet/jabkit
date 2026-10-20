"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

export type MotionState = "playing" | "paused";

const storageKey = "jk-maximalism-motion";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const listeners = new Set<() => void>();

function readStored(): MotionState | null {
  try {
    const value = window.localStorage.getItem(storageKey);
    return value === "playing" || value === "paused" ? value : null;
  } catch {
    return null;
  }
}

function systemDefault(): MotionState {
  return window.matchMedia(reducedMotionQuery).matches ? "paused" : "playing";
}

function getSnapshot(): MotionState {
  return readStored() ?? systemDefault();
}

/** The server renders the still version; kinetic CSS only runs once the client says "playing". */
function getServerSnapshot(): MotionState {
  return "paused";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", listener);
    window.removeEventListener("storage", listener);
  };
}

function applyToDocument(state: MotionState) {
  document.documentElement.dataset.motion = state;
}

export function setMotionPreference(state: MotionState) {
  try {
    window.localStorage.setItem(storageKey, state);
  } catch {
    // Storage can be blocked; the choice still applies for this page view.
  }
  applyToDocument(state);
  for (const listener of listeners) listener();
}

/**
 * Site-wide motion preference. Defaults to paused under
 * `prefers-reduced-motion: reduce`, is stored per browser, and mirrors onto
 * `<html data-motion>` so every kinetic style keys off one attribute.
 */
export function useMotionPreference() {
  const motion = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    applyToDocument(motion);
  }, [motion]);

  const toggle = useCallback(() => {
    setMotionPreference(motion === "playing" ? "paused" : "playing");
  }, [motion]);

  return { motion, playing: motion === "playing", toggle };
}
