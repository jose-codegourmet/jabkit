"use client";

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  type CSSProperties,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { getStage } from "../../_data/stages";
import { venue } from "./content";
import styles from "./info.module.css";
import { MarkerShape, stageFill } from "./MapSymbols";
import { mapGeometry } from "./mapData";

const zoomLevels = [1, 1.5, 2, 3] as const;

/**
 * Demo venue map drawn in code. The drawing is one labelled image; the list
 * that follows it on the page carries the same information as text.
 */
export function VenueMap() {
  const titleId = useId();
  const descId = useId();
  const viewportRef = useRef<HTMLElement>(null);
  const centreRef = useRef<{ x: number; y: number } | null>(null);
  const [level, setLevel] = useState(0);
  const scale = zoomLevels[level];
  const canZoomIn = level < zoomLevels.length - 1;
  const canZoomOut = level > 0;

  function changeZoom(step: 1 | -1) {
    const next = level + step;
    if (next < 0 || next >= zoomLevels.length) return;
    const viewport = viewportRef.current;
    if (viewport) {
      centreRef.current = {
        x:
          (viewport.scrollLeft + viewport.clientWidth / 2) /
          viewport.scrollWidth,
        y:
          (viewport.scrollTop + viewport.clientHeight / 2) /
          viewport.scrollHeight,
      };
    }
    setLevel(next);
  }

  // Keep the same point of the map in the middle of the frame after zooming.
  // biome-ignore lint/correctness/useExhaustiveDependencies: re-centre whenever the zoom level changes
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const centre = centreRef.current;
    if (!viewport || !centre) return;
    viewport.scrollLeft =
      centre.x * viewport.scrollWidth - viewport.clientWidth / 2;
    viewport.scrollTop =
      centre.y * viewport.scrollHeight - viewport.clientHeight / 2;
    centreRef.current = null;
  }, [level]);

  const { width, height } = mapGeometry;

  return (
    <figure className={styles.mapFigure}>
      <div className={styles.mapToolbar}>
        {/* biome-ignore lint/a11y/useSemanticElements: a small toolbar of buttons, not a form fieldset */}
        <div
          aria-label={venue.zoomGroupLabel}
          className={styles.zoomGroup}
          role="group"
        >
          <Button
            aria-disabled={!canZoomOut}
            className={styles.zoomButton}
            onClick={() => changeZoom(-1)}
            size="sm"
            variant="secondary"
          >
            <MinusIcon aria-hidden="true" />
            {venue.zoomOut}
          </Button>
          <Button
            aria-disabled={!canZoomIn}
            className={styles.zoomButton}
            onClick={() => changeZoom(1)}
            size="sm"
            variant="secondary"
          >
            <PlusIcon aria-hidden="true" />
            {venue.zoomIn}
          </Button>
        </div>
        <p aria-live="polite" className={styles.zoomStatus}>
          Zoom {Math.round(scale * 100)}%
        </p>
      </div>

      <section
        aria-label={venue.mapRegionLabel}
        className={styles.mapViewport}
        ref={viewportRef}
        // biome-ignore lint/a11y/noNoninteractiveTabindex: the zoomed map scrolls inside this region, so it must be reachable by keyboard
        tabIndex={0}
      >
        <svg
          aria-describedby={descId}
          aria-labelledby={titleId}
          className={styles.mapSvg}
          role="img"
          style={{ "--map-scale": scale } as CSSProperties}
          viewBox={`0 0 ${width} ${height}`}
        >
          <title id={titleId}>{venue.mapTitle}</title>
          <desc id={descId}>{venue.mapDescription}</desc>

          <path className={styles.mapGround} d={mapGeometry.ground} />

          <text
            className={styles.mapStamp}
            transform="translate(64 96) rotate(-6)"
          >
            Demo map
          </text>

          <g className={styles.mapCompass} transform="translate(722 96)">
            <path d="M0-26L10 4H-10Z" />
            <text dy="1.35em" textAnchor="middle" y="4">
              N
            </text>
          </g>

          {mapGeometry.routes.map((d) => (
            <path className={styles.route} d={d} key={d} />
          ))}

          {mapGeometry.stages.map((stage) => (
            <g key={stage.id}>
              <rect
                className={cn(styles.mapStage, stageFill[stage.id])}
                height={stage.h}
                rx="14"
                width={stage.w}
                x={stage.x}
                y={stage.y}
              />
              <text
                className={cn(
                  styles.stageLabel,
                  stage.id === "low-end-room" && styles.stageLabelLight,
                )}
                dy="0.35em"
                style={{ fontSize: stage.size }}
                textAnchor="middle"
                x={stage.x + stage.w / 2}
                y={stage.y + stage.h / 2}
              >
                {getStage(stage.id).name}
              </text>
            </g>
          ))}

          {mapGeometry.markers.map((marker) => (
            <g
              key={marker.label}
              transform={`translate(${marker.x} ${marker.y})`}
            >
              <title>{marker.label}</title>
              <MarkerShape kind={marker.key} />
            </g>
          ))}
        </svg>
      </section>

      <figcaption className={styles.mapCaption}>{venue.caption}</figcaption>
    </figure>
  );
}
