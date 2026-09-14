"use client";

import { type FormEvent, useId, useMemo, useState } from "react";
import type { CalendarWithLocalisationRange } from "@/atoms/calendar-with-localisation";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { Textarea } from "@/atoms/textarea";
import {
  type DemoFormStatus,
  DemoNotice,
  demoStatusCopy,
} from "../../../../components/samples";
import { firstInvalidControl } from "../../../../components/samples/demo-state";
import {
  demoNote,
  experiences,
  getExperience,
  getRoom,
  isExperienceId,
  isRoomId,
  rooms,
} from "../content";
import styles from "../style.module.css";
import type { ExperienceId, RoomId } from "../types";
import { StayCalendar } from "./StayCalendar";

type FormValues = {
  name: string;
  email: string;
  notes: string;
  guests: string;
};

type FieldKey = keyof FormValues | "room" | "dates";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Documented local-date floor for this sample (authoring day). */
export const SAMPLE_TODAY_KEY = "2026-09-14";

export function toDayKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function formatDayKey(key: string): string {
  const [year, month, day] = key.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export function nightCount(from: Date, to: Date): number {
  const start = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
  const end = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((end - start) / 86_400_000);
}

function isEmail(value: string) {
  return emailPattern.test(value);
}

export function StayInquiry({
  initialRoom,
  initialExperience,
  ignoredUnknownRoom,
  ignoredUnknownExperience,
}: {
  initialRoom?: string;
  initialExperience?: string;
  ignoredUnknownRoom: boolean;
  ignoredUnknownExperience: boolean;
}) {
  const formId = useId();
  const statusId = `${formId}-status`;
  const [roomId, setRoomId] = useState<RoomId | "">(
    isRoomId(initialRoom) ? initialRoom : "",
  );
  const [experienceId, setExperienceId] = useState<ExperienceId | "">(
    isExperienceId(initialExperience) ? initialExperience : "",
  );
  const [range, setRange] = useState<
    CalendarWithLocalisationRange | undefined
  >();
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    notes: "",
    guests: "1",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<DemoFormStatus>("draft");

  const selectedRoom = getRoom(roomId);
  const selectedExperience = getExperience(experienceId);
  const completeRange = Boolean(range?.from && range.to);
  const nights =
    range?.from && range.to ? nightCount(range.from, range.to) : 0;

  const dateSummary = useMemo(() => {
    if (!range?.from) return "No dates selected.";
    if (!range.to) return `Arrival ${formatDayKey(toDayKey(range.from))}.`;
    return `${formatDayKey(toDayKey(range.from))} to ${formatDayKey(toDayKey(range.to))}`;
  }, [range]);

  function fieldId(key: FieldKey) {
    return `${formId}-${key}`;
  }

  function errorId(key: FieldKey) {
    return `${formId}-${key}-error`;
  }

  function validate() {
    const nextErrors: Partial<Record<FieldKey, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Enter a name.";
    if (!values.email.trim()) nextErrors.email = "Enter an email.";
    else if (!isEmail(values.email.trim())) {
      nextErrors.email = "Enter an email address with an @ sign.";
    }
    if (!range?.from || !range.to) {
      nextErrors.dates = "Choose an arrival and a later departure.";
    } else if (nightCount(range.from, range.to) < 1) {
      nextErrors.dates = "Departure must be after arrival.";
    } else if (toDayKey(range.from) < SAMPLE_TODAY_KEY) {
      nextErrors.dates =
        "Arrival cannot be before 14 September 2026, the sample local date.";
    }
    const guests = Number.parseInt(values.guests, 10);
    const maxGuests = selectedRoom?.occupancy ?? 3;
    if (!Number.isFinite(guests) || guests < 1) {
      nextErrors.guests = "Enter at least one guest.";
    } else if (guests > maxGuests) {
      nextErrors.guests = selectedRoom
        ? `${selectedRoom.title} holds ${selectedRoom.occupancy} guests.`
        : "The house holds at most three guests in one stay.";
    }
    return nextErrors;
  }

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (status === "reset" || status === "invalid") setStatus("draft");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("invalid");
      const order: FieldKey[] = [
        "room",
        "dates",
        "guests",
        "name",
        "email",
      ];
      const first = order.find((key) => nextErrors[key]);
      if (first) document.getElementById(fieldId(first))?.focus();
      else firstInvalidControl(form)?.focus();
      return;
    }
    setErrors({});
    setStatus("preview");
  }

  function handleReset() {
    setValues({ name: "", email: "", notes: "", guests: "1" });
    setRoomId("");
    setExperienceId("");
    setRange(undefined);
    setErrors({});
    setStatus("reset");
  }

  if (status === "preview" && range?.from && range.to) {
    return (
      <div className={styles.review} id="inquiry-review">
        <DemoNotice>
          Preview prepared. Demo only. Nothing was sent, reserved, or
          charged.
        </DemoNotice>
        <p id={statusId} role="status" aria-live="polite" className="sr-only">
          {demoStatusCopy.preview}
        </p>
        <h2 className="jk-heading">Stay inquiry preview</h2>
        <dl className={styles.listPlain}>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Room</dt>
            <dd className="jk-body">
              {selectedRoom ? selectedRoom.title : "No room selected yet"}
            </dd>
          </div>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Dates</dt>
            <dd className="jk-body">{dateSummary}</dd>
          </div>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Nights</dt>
            <dd className="jk-body">
              {nights} {nights === 1 ? "night" : "nights"}
            </dd>
          </div>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Guests</dt>
            <dd className="jk-body">{values.guests}</dd>
          </div>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Experience</dt>
            <dd className="jk-body">
              {selectedExperience
                ? selectedExperience.title
                : "None selected"}
            </dd>
          </div>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Name</dt>
            <dd className="jk-body">{values.name}</dd>
          </div>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Email</dt>
            <dd className="jk-body">{values.email}</dd>
          </div>
          {values.notes.trim() ? (
            <div>
              <dt className={`jk-caption ${styles.meta}`}>Notes</dt>
              <dd className="jk-body">{values.notes}</dd>
            </div>
          ) : null}
        </dl>
        <p className={`jk-caption ${styles.meta}`}>
          {selectedRoom?.rateNote ??
            "Rates are illustrative demo figures."}{" "}
          This preview does not compute a payable total.
        </p>
        <div className={styles.actions}>
          <Button type="button" onClick={() => setStatus("draft")}>
            Edit dates
          </Button>
          <Button type="button" variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      className={styles.signup}
      onSubmit={handleSubmit}
      noValidate
      id="inquiry-form"
    >
      <p id={statusId} role="status" aria-live="polite" className="sr-only">
        {demoStatusCopy[status]}
      </p>
      {ignoredUnknownRoom ? (
        <DemoNotice>
          That room is not in the house. Choose Lake Room, Garden Room, or
          Upper Suite.
        </DemoNotice>
      ) : null}
      {ignoredUnknownExperience ? (
        <DemoNotice>
          That experience is not in this sample. Pick one from the list, or
          leave it blank.
        </DemoNotice>
      ) : null}
      <p className={`jk-caption ${styles.meta}`}>{demoNote}</p>

      <div className={`${styles.field} mt-8`}>
        <Label htmlFor={fieldId("room")}>Room</Label>
        <select
          id={fieldId("room")}
          className={styles.select}
          value={roomId}
          aria-invalid={errors.room ? true : undefined}
          aria-describedby={errors.room ? errorId("room") : undefined}
          onChange={(event) => {
            const next = event.target.value;
            setRoomId(isRoomId(next) ? next : "");
            if (status === "reset" || status === "invalid") setStatus("draft");
          }}
        >
          <option value="">No preference yet</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.title} (up to {room.occupancy})
            </option>
          ))}
        </select>
        {errors.room ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("room")}>
            {errors.room}
          </p>
        ) : (
          <p className={`jk-caption ${styles.meta}`}>
            {selectedRoom
              ? selectedRoom.comparison
              : "A general inquiry is fine if you have not chosen a room."}
          </p>
        )}
      </div>

      <div className={`${styles.field} mt-8`}>
        <Label htmlFor={fieldId("dates")}>Stay dates</Label>
        <p
          id={fieldId("dates")}
          className={`jk-caption ${styles.meta}`}
          tabIndex={-1}
        >
          {dateSummary}
          {completeRange ? ` · ${nights} nights` : ""}
        </p>
        <div className={styles.calendarWrap}>
          <StayCalendar
            selected={range}
            onSelect={(next) => {
              setRange(next);
              if (status === "reset" || status === "invalid") {
                setStatus("draft");
              }
            }}
          />
        </div>
        {errors.dates ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("dates")}>
            {errors.dates}
          </p>
        ) : (
          <p className={`jk-caption ${styles.meta}`}>
            Local calendar dates. The sample does not treat dates as booked.
            Arrival must be on or after 14 September 2026.
          </p>
        )}
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            setRange(undefined);
            if (status === "reset" || status === "invalid") setStatus("draft");
          }}
        >
          Clear dates
        </Button>
      </div>

      <div className={`${styles.field} mt-8`}>
        <Label htmlFor={fieldId("guests")}>Guests</Label>
        <Input
          id={fieldId("guests")}
          name="guests"
          type="number"
          min={1}
          max={selectedRoom?.occupancy ?? 3}
          value={values.guests}
          aria-invalid={errors.guests ? true : undefined}
          aria-describedby={errors.guests ? errorId("guests") : undefined}
          onChange={(event) => update("guests", event.target.value)}
        />
        {errors.guests ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("guests")}>
            {errors.guests}
          </p>
        ) : (
          <p className={`jk-caption ${styles.meta}`}>
            {selectedRoom
              ? `This room holds ${selectedRoom.occupancy}.`
              : "Choose a room to check occupancy."}
          </p>
        )}
      </div>

      <div className={`${styles.field} mt-8`}>
        <Label htmlFor={`${formId}-experience`}>Experience</Label>
        <select
          id={`${formId}-experience`}
          className={styles.select}
          value={experienceId}
          onChange={(event) => {
            const next = event.target.value;
            setExperienceId(isExperienceId(next) ? next : "");
            if (status === "reset" || status === "invalid") setStatus("draft");
          }}
        >
          <option value="">None</option>
          {experiences.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <p className={`jk-caption ${styles.meta}`}>
          Optional. This does not hold a seat or a landing time.
        </p>
      </div>

      <div className={`${styles.field} mt-8`}>
        <Label htmlFor={fieldId("name")}>Name</Label>
        <Input
          id={fieldId("name")}
          name="name"
          value={values.name}
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? errorId("name") : undefined}
          onChange={(event) => update("name", event.target.value)}
        />
        {errors.name ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("name")}>
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className={`${styles.field} mt-8`}>
        <Label htmlFor={fieldId("email")}>Email</Label>
        <Input
          id={fieldId("email")}
          name="email"
          type="email"
          value={values.email}
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? errorId("email") : undefined}
          onChange={(event) => update("email", event.target.value)}
        />
        {errors.email ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("email")}>
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className={`${styles.field} mt-8`}>
        <Label htmlFor={fieldId("notes")}>Notes (optional)</Label>
        <Textarea
          id={fieldId("notes")}
          name="notes"
          value={values.notes}
          onChange={(event) => update("notes", event.target.value)}
        />
      </div>

      <div className={`${styles.actions} mt-8`}>
        <Button type="submit">Preview stay inquiry</Button>
        <Button type="button" variant="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
}
