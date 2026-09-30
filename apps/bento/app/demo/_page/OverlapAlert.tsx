"use client";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRef, useState } from "react";
import { Alert, AlertDescription } from "@/atoms/alert";
import { Button } from "@/atoms/button";
import { Tile } from "../../_components/Bento";
import { overlapAlert } from "./content";
import styles from "./dashboard.module.css";

/** Overlap warning row. Dismissing hides it and moves focus to the next heading. */
export function OverlapAlert() {
  const [open, setOpen] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  if (!open) return null;

  function dismiss() {
    const all = [...document.querySelectorAll<HTMLElement>("main h1, main h2")];
    const next =
      all.find(
        (heading) =>
          ref.current &&
          ref.current.compareDocumentPosition(heading) &
            Node.DOCUMENT_POSITION_FOLLOWING,
      ) ?? document.querySelector<HTMLElement>("main h1");
    setOpen(false);
    if (next) {
      next.tabIndex = -1;
      requestAnimationFrame(() => next.focus());
    }
  }

  return (
    <Tile kind="action" span={12} surfaceClassName={styles.alertTile}>
      <div className={styles.alertRow} ref={ref}>
        <Alert className={styles.alert}>
          <ExclamationTriangleIcon aria-hidden="true" />
          <AlertDescription className={styles.alertText}>
            {overlapAlert.text}{" "}
            <Link href={overlapAlert.link.href}>{overlapAlert.link.label}</Link>
          </AlertDescription>
        </Alert>
        <Button onClick={dismiss} size="sm" variant="ghost">
          {overlapAlert.dismiss}
        </Button>
      </div>
    </Tile>
  );
}
