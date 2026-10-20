import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { StageId } from "../../_data/stages";
import styles from "./info.module.css";
import type { MapKey, MarkerKey } from "./mapData";

export const stageFill: Record<StageId, string> = {
  "loud-stage": styles.stageLoud,
  "glow-tent": styles.stageGlow,
  "low-end-room": styles.stageLowEnd,
  "open-air-deck": styles.stageOpenAir,
};

/** One facility marker, centred on 0,0 (roughly 36 units across). */
export function MarkerShape({ kind }: { kind: MarkerKey }) {
  switch (kind) {
    case "entrance":
      return (
        <>
          <circle className={cn(styles.marker, styles.markerEntrance)} r="18" />
          <path
            className={styles.glyphOnForeground}
            d="M-9-3H1V-10L11 0 1 10V3H-9Z"
          />
        </>
      );
    case "toilets":
      return (
        <>
          <circle className={cn(styles.marker, styles.markerToilets)} r="16" />
          <text className={styles.markerText} dy="0.35em" textAnchor="middle">
            WC
          </text>
        </>
      );
    case "water":
      return (
        <>
          <circle className={cn(styles.marker, styles.markerWater)} r="16" />
          <path
            className={styles.glyphCream}
            d="M0-10C5-3 8 1 8 4A8 8 0 0 1-8 4C-8 1-5-3 0-10Z"
          />
        </>
      );
    case "welfare":
      return (
        <>
          <circle className={cn(styles.marker, styles.markerWelfare)} r="16" />
          <path
            className={styles.glyphInk}
            d="M0 8C-10 0-9-8-4-8-1.5-8 0-6 0-5 0-6 1.5-8 4-8 9-8 10 0 0 8Z"
          />
        </>
      );
    case "first-aid":
      return (
        <>
          <rect
            className={cn(styles.marker, styles.markerFirstAid)}
            height="30"
            rx="5"
            width="30"
            x="-15"
            y="-15"
          />
          <path
            className={styles.glyphInk}
            d="M-3-9H3V-3H9V3H3V9H-3V3H-9V-3H-3Z"
          />
        </>
      );
  }
}

/** Small legend key for any map feature, drawn with the map's own shapes. */
export function LegendSymbol({ kind }: { kind: MapKey }) {
  let shape: ReactNode;
  if (kind === "step-free") {
    shape = <path className={styles.route} d="M-16 0H16" />;
  } else if (
    kind === "loud-stage" ||
    kind === "glow-tent" ||
    kind === "low-end-room" ||
    kind === "open-air-deck"
  ) {
    shape = (
      <rect
        className={cn(styles.mapStage, stageFill[kind])}
        height="24"
        rx="4"
        width="34"
        x="-17"
        y="-12"
      />
    );
  } else {
    shape = <MarkerShape kind={kind} />;
  }

  return (
    <svg
      aria-hidden="true"
      className={styles.legendSymbol}
      focusable="false"
      viewBox="-21 -21 42 42"
    >
      {shape}
    </svg>
  );
}
