import { Badge } from "@/atoms/badge";
import { cn } from "@/lib/cn";
import { type Day, dayLabel } from "../_data/artists";
import { getStage, type StageId } from "../_data/stages";
import styles from "../style.module.css";

const stageClass: Record<StageId, string> = {
  "loud-stage": styles.badgeLoud,
  "glow-tent": styles.badgeGlow,
  "low-end-room": styles.badgeLowEnd,
  "open-air-deck": styles.badgeOpenAir,
};

/** Stage glyphs pair with the stage name so meaning never rests on colour alone. */
const stageGlyph: Record<StageId, string> = {
  "loud-stage": "◆",
  "glow-tent": "▲",
  "low-end-room": "●",
  "open-air-deck": "✦",
};

export function DayBadge({ day, className }: { day: Day; className?: string }) {
  return (
    <Badge
      className={cn(
        styles.badge,
        day === 1 ? styles.badgeDay1 : styles.badgeDay2,
        className,
      )}
    >
      {dayLabel(day)}
    </Badge>
  );
}

export function StageBadge({
  stageId,
  className,
}: {
  stageId: StageId;
  className?: string;
}) {
  return (
    <Badge className={cn(styles.badge, stageClass[stageId], className)}>
      <span aria-hidden="true">{stageGlyph[stageId]}</span>
      {getStage(stageId).name}
    </Badge>
  );
}

export function PlanBadge({ className }: { className?: string }) {
  return (
    <Badge className={cn(styles.badge, styles.badgePlan, className)}>
      <span aria-hidden="true">✓</span>
      In your plan
    </Badge>
  );
}

/** Marks demo-only content or states, e.g. "Demo act", "Demo state". */
export function DemoBadge({
  children = "Demo",
  className,
}: {
  children?: string;
  className?: string;
}) {
  return (
    <Badge className={cn(styles.badge, styles.badgeDemo, className)}>
      {children}
    </Badge>
  );
}
