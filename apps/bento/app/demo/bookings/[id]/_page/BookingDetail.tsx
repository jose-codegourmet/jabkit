"use client";

import {
  ArrowRightIcon,
  CheckCircledIcon,
  CheckIcon,
  CrossCircledIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback } from "@/atoms/avatar/Avatar";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog";
import { toast } from "@/atoms/toast";
import { cn } from "@/lib/cn";
import {
  BentoGrid,
  Tile,
  TileFooter,
  TileLabel,
} from "../../../../_components/Bento";
import { PortalPageHeader } from "../../../../_components/PortalPageHeader";
import { StatusBadge } from "../../../../_components/StatusBadge";
import {
  type Booking,
  type BookingStatus,
  formatDate,
  formatTime,
} from "../../../../_data/bookings";
import { DEMO_TODAY } from "../../../../_data/portal";
import { bookingActions, bookingDetailHeader, summaryTiles } from "./content";
import styles from "./detail.module.css";

/** The day track runs 8:00–18:00 (earliest shift start to latest shift end). */
const DAY_START = 8 * 60;
const DAY_END = 18 * 60;
const TRACK_HOURS = ["8", "10", "12", "2", "4", "6"];

function toMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function fromMinutes(total: number) {
  const hours = String(Math.floor(total / 60)).padStart(2, "0");
  const minutes = String(total % 60).padStart(2, "0");
  return `${hours}:${minutes}`;
}

/** Decorative position of the visit in the working day; the text above carries the time. */
function DayTrack({
  start,
  lengthMinutes,
  status,
}: {
  start: string;
  lengthMinutes: number;
  status: BookingStatus;
}) {
  const span = DAY_END - DAY_START;
  const offset = ((toMinutes(start) - DAY_START) / span) * 100;
  const width = (lengthMinutes / span) * 100;
  return (
    <div aria-hidden="true" className={styles.track}>
      <div className={styles.trackBar}>
        <span
          className={styles.trackVisit}
          data-status={status}
          style={
            {
              "--visit-start": `${offset}%`,
              "--visit-width": `${width}%`,
            } as CSSProperties
          }
        />
      </div>
      <div className={styles.trackHours}>
        {TRACK_HOURS.map((hour) => (
          <span key={hour}>{hour}</span>
        ))}
      </div>
    </div>
  );
}

/**
 * Booking detail: header with a live status badge, the summary bento and, for
 * bookings that need a reply, in-memory confirm / reschedule / decline actions.
 */
export function BookingDetail({
  booking,
  staff,
  customerLink,
}: {
  booking: Booking;
  staff: { name: string; role: string };
  customerLink: Route;
}) {
  const [status, setStatus] = useState<BookingStatus>(booking.status);
  const [dialogOpen, setDialogOpen] = useState(false);
  const outcomeRef = useRef<HTMLParagraphElement>(null);
  const needsReply = booking.status === "needs-reply";
  const end = fromMinutes(toMinutes(booking.start) + booking.lengthMinutes);

  useEffect(() => {
    if (status !== booking.status) outcomeRef.current?.focus();
  }, [status, booking.status]);

  function confirm() {
    setStatus("confirmed");
    toast.add({ title: bookingActions.confirmed(booking.customer) });
  }

  function reschedule() {
    toast.add({ title: bookingActions.rescheduleNote });
  }

  function decline() {
    setStatus("cancelled");
    setDialogOpen(false);
  }

  return (
    <>
      <PortalPageHeader
        sub={<StatusBadge status={status} />}
        title={bookingDetailHeader.title(booking.customer, booking.service)}
      />

      <BentoGrid>
        <Tile
          as="section"
          labelledBy="booking-when"
          span={8}
          surfaceClassName={styles.whenTile}
        >
          <TileLabel as="h2" id="booking-when">
            {summaryTiles.when}
          </TileLabel>
          <div className={styles.whenHead}>
            <p className="jk-figure">{formatDate(booking.date)}</p>
            {booking.date === DEMO_TODAY ? (
              <span className={styles.today}>{summaryTiles.today}</span>
            ) : null}
          </div>
          <p className={styles.whenTime}>
            <time dateTime={`${booking.date}T${booking.start}`}>
              {formatTime(booking.start)}
            </time>
            {"–"}
            <time dateTime={`${booking.date}T${end}`}>{formatTime(end)}</time>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <span className={styles.length}>
              {summaryTiles.length(booking.lengthMinutes)}
            </span>
          </p>
          <DayTrack
            lengthMinutes={booking.lengthMinutes}
            start={booking.start}
            status={status}
          />
        </Tile>

        <Tile
          as="section"
          labelledBy="booking-with"
          span={4}
          surfaceClassName={styles.summaryTile}
        >
          <TileLabel as="h2" id="booking-with">
            {summaryTiles.with}
          </TileLabel>
          <div className={styles.person}>
            <Avatar className={styles.avatar} size="lg">
              <AvatarFallback className={styles.avatarFallback}>
                {staff.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className={styles.personText}>
              <p className={styles.personName}>{staff.name}</p>
              <p className={styles.muted}>{staff.role}</p>
            </div>
          </div>
        </Tile>

        <Tile
          as="section"
          kind="action"
          labelledBy="booking-customer"
          span={4}
          surfaceClassName={styles.summaryTile}
        >
          <TileLabel as="h2" id="booking-customer">
            {summaryTiles.customer}
          </TileLabel>
          <div className={styles.personText}>
            <p className={styles.personName}>{booking.customer}</p>
            <p className={styles.phone}>
              <MobileIcon aria-hidden="true" />
              {booking.phone}
            </p>
          </div>
          <TileFooter>
            <Link className={styles.textLink} href={customerLink}>
              {summaryTiles.viewCustomer}
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          </TileFooter>
        </Tile>

        <Tile as="section" labelledBy="booking-notes" span={8}>
          <TileLabel as="h2" id="booking-notes">
            {summaryTiles.notes}
          </TileLabel>
          <p className={cn("jk-body", styles.note)}>{booking.note}</p>
        </Tile>

        {needsReply ? (
          <Tile
            as="section"
            kind="action"
            labelledBy="booking-actions"
            span={12}
            state={status === "needs-reply" ? "warning" : "default"}
            tone={status === "needs-reply" ? "apricot" : "default"}
          >
            <TileLabel as="h2" id="booking-actions">
              {bookingActions.heading}
            </TileLabel>
            {status === "needs-reply" ? (
              <div className={styles.actionRow}>
                <Button onClick={confirm}>
                  <CheckIcon aria-hidden="true" />
                  {bookingActions.confirm}
                </Button>
                <Button onClick={reschedule} variant="secondary">
                  {bookingActions.reschedule}
                </Button>
                <Dialog
                  onOpenChange={(open) => setDialogOpen(open)}
                  open={dialogOpen}
                >
                  <DialogTrigger
                    render={
                      <Button className={styles.decline} variant="secondary">
                        {bookingActions.decline}
                      </Button>
                    }
                  />
                  <DialogContent
                    className={styles.dialog}
                    finalFocus={() => outcomeRef.current ?? true}
                  >
                    <DialogHeader>
                      <DialogTitle className={styles.dialogTitle}>
                        {bookingActions.dialog.title}
                      </DialogTitle>
                      <DialogDescription className={styles.dialogBody}>
                        {bookingActions.dialog.body}
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className={styles.dialogFooter}>
                      <DialogClose
                        render={
                          <Button variant="secondary">
                            {bookingActions.dialog.cancel}
                          </Button>
                        }
                      />
                      <Button onClick={decline} variant="destructive">
                        {bookingActions.dialog.confirm}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <p
                className={styles.outcome}
                data-status={status}
                ref={outcomeRef}
                tabIndex={-1}
              >
                {status === "confirmed" ? (
                  <CheckCircledIcon aria-hidden="true" />
                ) : (
                  <CrossCircledIcon aria-hidden="true" />
                )}
                {status === "confirmed"
                  ? bookingActions.confirmed(booking.customer)
                  : bookingActions.declined}
              </p>
            )}
          </Tile>
        ) : null}
      </BentoGrid>
    </>
  );
}
