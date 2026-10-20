"use client";

import type { RefObject } from "react";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/atoms/dialog";
import { cn } from "@/lib/cn";
import { Placeholder } from "../../_components/Placeholder";
import { checkout } from "./content";
import styles from "./tickets.module.css";

export type CheckoutDialogProps = {
  open: boolean;
  onClose: () => void;
  /** Where focus returns when the dialog closes. */
  returnFocusRef: RefObject<HTMLElement | null>;
};

/** Section 6 demo end state: nothing is charged, nothing is sent. */
export function CheckoutDialog({
  open,
  onClose,
  returnFocusRef,
}: CheckoutDialogProps) {
  return (
    <Dialog
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
      open={open}
    >
      <DialogContent
        className={styles.dialog}
        finalFocus={returnFocusRef}
        showCloseButton={false}
      >
        <DialogTitle className={cn("jk-heading", styles.dialogTitle)}>
          {checkout.endTitle}
        </DialogTitle>
        <DialogDescription className={styles.dialogBody}>
          <Placeholder text={checkout.endBody} />
        </DialogDescription>
        <div>
          <Button onClick={onClose} size="lg">
            {checkout.back}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
