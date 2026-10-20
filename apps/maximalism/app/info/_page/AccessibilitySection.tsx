import type { Route } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { MotionToggle } from "../../_components/MotionToggle";
import { Placeholder } from "../../_components/Placeholder";
import site from "../../style.module.css";
import { accessibility } from "./content";
import { InfoBlock } from "./InfoBlock";
import styles from "./info.module.css";

export function AccessibilitySection() {
  return (
    <InfoBlock id="accessibility" title={accessibility.heading}>
      <p className={cn("jk-lead", styles.blockLead)}>{accessibility.body}</p>

      <ul className={styles.plainList}>
        {accessibility.items.map((item) => (
          <li className={styles.plainItem} key={item.term}>
            <strong className={styles.itemLead}>{item.term}:</strong>{" "}
            <Placeholder text={item.detail} />
          </li>
        ))}
      </ul>

      <div className={cn(site.buttonRow, styles.blockActions)}>
        <Button asChild size="lg">
          <Link href={accessibility.action.href as Route}>
            {accessibility.action.label}
          </Link>
        </Button>
      </div>

      <div className={styles.motionNote}>
        <p>{accessibility.motionNote}</p>
        <MotionToggle variant="hero" />
      </div>
    </InfoBlock>
  );
}
