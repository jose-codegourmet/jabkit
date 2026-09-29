import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";
import { ClaySurface } from "./ClaySurface";

export type ChildTileProps = {
  step: string;
  thenStep?: string;
  className?: string;
};

export function ChildTile({ step, thenStep, className }: ChildTileProps) {
  return (
    <ClaySurface className={cn(styles.child, className)} tone="coral">
      <p className={styles.childNext}>Today&apos;s next step: {step}</p>
      {thenStep ? <p className={styles.childThen}>Then: {thenStep}</p> : null}
      <Button className={styles.childButton} type="button">
        I did it
      </Button>
    </ClaySurface>
  );
}
