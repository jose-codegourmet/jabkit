"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { Tile, TileFooter, TileLabel } from "../../../_components/Bento";
import { ErrorState, TileSkeleton } from "../../../_components/TileStates";
import { rosterLines } from "../../../_data/staff";
import { getTile } from "../../../_data/tiles";
import { errorDemo } from "./content";
import styles from "./states.module.css";

type Phase = "error" | "loading" | "ready";

/**
 * Error tile. "Try again" re-renders the tile: a short loading pass, then the roster.
 * Focus stays inside the tile body while its content swaps.
 */
export function ErrorSpecimen({ message }: { message: string }) {
  const [phase, setPhase] = useState<Phase>("error");
  const body = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const team = getTile("team");

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function retry() {
    setPhase("loading");
    body.current?.focus();
    timer.current = window.setTimeout(() => setPhase("ready"), 900);
  }

  function reset() {
    window.clearTimeout(timer.current);
    setPhase("error");
    body.current?.focus();
  }

  return (
    <Tile
      className={styles.specimenTile}
      kind="action"
      state={phase === "ready" ? "default" : phase}
    >
      <TileLabel>{team.label}</TileLabel>
      <div
        aria-live="polite"
        className={styles.retryBody}
        ref={body}
        tabIndex={-1}
      >
        {phase === "error" ? (
          <ErrorState
            message={message}
            onRetry={retry}
            retryLabel={errorDemo.retry}
          />
        ) : null}
        {phase === "loading" ? (
          <TileSkeleton message={errorDemo.loading} rows={3} />
        ) : null}
        {phase === "ready" ? (
          <ul className={styles.roster}>
            {rosterLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : null}
      </div>
      {phase === "ready" ? (
        <TileFooter>
          <Button onClick={reset} variant="ghost">
            {errorDemo.reset}
          </Button>
        </TileFooter>
      ) : null}
    </Tile>
  );
}
