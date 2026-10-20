"use client";

import { Alert, AlertDescription } from "@/atoms/alert";
import { Button } from "@/atoms/button";
import { DemoBadge } from "../../_components/Badges";
import { getArtist } from "../../_data/artists";
import type { Clash } from "../../_data/schedule";
import { clashCopy } from "./content";
import styles from "./schedule.module.css";

export type ClashNoticeProps = {
  clash: Clash;
  /** Labelled demo preview (demo set times never overlap). */
  demo?: boolean;
  onKeepBoth: () => void;
  onRemove: (slug: string) => void;
};

/** Dismissible warning (not error) for two saved sets that overlap. */
export function ClashNotice({
  clash,
  demo = false,
  onKeepBoth,
  onRemove,
}: ClashNoticeProps) {
  const a = getArtist(clash.a)?.name ?? clash.a;
  const b = getArtist(clash.b)?.name ?? clash.b;

  return (
    <Alert className={styles.clash}>
      <span aria-hidden="true" className={styles.clashIcon}>
        !
      </span>
      <AlertDescription className={styles.clashBody}>
        {demo ? (
          <span className={styles.clashDemo}>
            <DemoBadge>{clashCopy.demoBadge}</DemoBadge>
            <span className={styles.clashDemoNote}>{clashCopy.demoNote}</span>
          </span>
        ) : null}
        <p className={styles.clashMessage}>
          {clashCopy.message(a, b, clash.overlapMinutes, clash.day)}
        </p>
        <div className={styles.clashActions}>
          <Button onClick={onKeepBoth} size="sm" variant="secondary">
            {clashCopy.keepBoth}
          </Button>
          <Button
            onClick={() => onRemove(clash.b)}
            size="sm"
            variant="secondary"
          >
            {clashCopy.remove(b)}
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
}
