"use client";

import { ArrowRightIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/atoms/dialog";
import { StatusBadge } from "../../../_components/StatusBadge";
import { type Booking, bookingHref, formatDate } from "../../../_data/bookings";
import { getStaff } from "../../../_data/staff";
import styles from "./calendar.module.css";
import { formatRange } from "./calendar-data";
import { calendarGrid, visitPanel } from "./content";

/**
 * Side panel with the booking summary. Built on @/atoms/dialog so focus is
 * trapped while open and returns to the visit block that opened it.
 */
export function VisitPanel({
  visit,
  open,
  overlap,
  canOpenBooking,
  onClose,
  returnFocus,
}: {
  visit: Booking | null;
  open: boolean;
  overlap: boolean;
  /** In-memory visits added in this demo have no booking page. */
  canOpenBooking: boolean;
  onClose: () => void;
  returnFocus: () => HTMLElement | null;
}) {
  return (
    <Dialog
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
      open={open}
    >
      <DialogContent
        className={styles.sheet}
        finalFocus={() => returnFocus() ?? true}
      >
        {visit ? (
          <>
            <DialogHeader className={styles.sheetHeader}>
              <DialogTitle className={styles.sheetTitle}>
                {visit.customer}
              </DialogTitle>
              <DialogDescription className={styles.sheetDescription}>
                {formatDate(visit.date)} · {formatRange(visit)}
              </DialogDescription>
            </DialogHeader>

            {overlap ? (
              <p className={styles.flag}>
                <ExclamationTriangleIcon aria-hidden="true" />
                {calendarGrid.overlap}
              </p>
            ) : null}

            <dl className={styles.summary}>
              <div>
                <dt>{visitPanel.labels.service}</dt>
                <dd>{visit.service}</dd>
              </div>
              <div>
                <dt>{visitPanel.labels.staff}</dt>
                <dd>{getStaff(visit.staffId).name}</dd>
              </div>
              <div>
                <dt>{visitPanel.labels.status}</dt>
                <dd>
                  <StatusBadge status={visit.status} />
                </dd>
              </div>
              {visit.note ? (
                <div>
                  <dt>{visitPanel.labels.note}</dt>
                  <dd>{visit.note}</dd>
                </div>
              ) : null}
            </dl>

            {canOpenBooking ? (
              <Button asChild className={styles.sheetAction}>
                <Link href={bookingHref(visit.id)}>
                  {visitPanel.open}
                  <ArrowRightIcon aria-hidden="true" />
                </Link>
              </Button>
            ) : null}
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
