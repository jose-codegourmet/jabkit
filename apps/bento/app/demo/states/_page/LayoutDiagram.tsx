"use client";

import { MobileIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "@/atoms/button";
import { getTile, type TileKey } from "../../../_data/tiles";
import { layoutSection } from "./content";
import styles from "./states.module.css";

/** The sample dashboard's tiles, in DOM order, with their desktop spans. */
const blocks: { key: TileKey; span: 4 | 8 }[] = [
  { key: "today", span: 8 },
  { key: "bookings", span: 4 },
  { key: "follow-ups", span: 4 },
  { key: "team", span: 4 },
  { key: "trend", span: 4 },
];

const columns = Array.from({ length: 12 }, (_, index) => index + 1);

/**
 * A code-built picture of the bento rules: a 12-column guide with rows of 8 + 4 and
 * 4 + 4 + 4. "Show mobile order" restacks the same list into one column with numbered
 * badges, which is exactly the DOM order. This is its own small CSS grid, not a
 * BentoGrid, so the page never nests one grid inside a tile.
 */
export function LayoutDiagram() {
  const [mobile, setMobile] = useState(false);
  const view = mobile ? "mobile" : "desktop";

  return (
    <div className={styles.diagramWrap}>
      <div className={styles.diagramBar}>
        <p aria-live="polite" className={styles.diagramView}>
          {mobile ? layoutSection.mobileView : layoutSection.desktopView}
        </p>
        <Button
          aria-pressed={mobile}
          className={styles.toggle}
          onClick={() => setMobile((value) => !value)}
          variant="secondary"
        >
          <MobileIcon aria-hidden="true" />
          {layoutSection.toggle}
        </Button>
      </div>

      <div className={styles.canvas} data-view={view}>
        <div aria-hidden="true" className={styles.ruler}>
          {columns.map((column) => (
            <span key={column}>{column}</span>
          ))}
        </div>
        <div className={styles.field}>
          <div aria-hidden="true" className={styles.guides}>
            {columns.map((column) => (
              <span key={column} />
            ))}
          </div>
          <ol aria-label={layoutSection.diagramLabel} className={styles.blocks}>
            {blocks.map((block, index) => (
              <li
                className={styles.block}
                data-span={block.span}
                key={block.key}
              >
                <span aria-hidden="true" className={styles.order}>
                  {index + 1}
                </span>
                <span className={styles.blockName}>
                  {getTile(block.key).label}
                </span>
                <span className={styles.blockSpan}>
                  {layoutSection.spanPrefix} {block.span}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
