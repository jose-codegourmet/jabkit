"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { Tile } from "../../_components/Bento";
import { ErrorState, TileSkeleton } from "../../_components/TileStates";

const RETRY_MS = 1200;

/**
 * The error card state with a working retry: the button swaps the body to the loading
 * state for a moment, then the demo "fails" again and focus returns to the button.
 */
export function ErrorStateTile({
  heading,
  note,
  message,
  retryingMessage,
  labelledBy,
  surfaceClassName,
}: {
  heading: ReactNode;
  note: ReactNode;
  message: string;
  retryingMessage: string;
  labelledBy: string;
  surfaceClassName?: string;
}) {
  const [retrying, setRetrying] = useState(false);
  const refocus = useRef(false);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!retrying) {
      if (refocus.current) {
        refocus.current = false;
        body.current?.querySelector("button")?.focus();
      }
      return;
    }
    const timer = window.setTimeout(() => setRetrying(false), RETRY_MS);
    return () => window.clearTimeout(timer);
  }, [retrying]);

  return (
    <Tile
      as="li"
      labelledBy={labelledBy}
      span={4}
      state={retrying ? "loading" : "error"}
      surfaceClassName={surfaceClassName}
    >
      {heading}
      <div ref={body}>
        {retrying ? (
          <TileSkeleton message={retryingMessage} rows={2} />
        ) : (
          <ErrorState
            message={message}
            onRetry={() => {
              refocus.current = true;
              setRetrying(true);
            }}
          />
        )}
      </div>
      {note}
    </Tile>
  );
}
