"use client";

import { type FormEvent, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/atoms/dialog";
import { Input } from "@/atoms/input";
import { FormField, NativeSelect } from "../../../_components/FormField";
import { type Service, services } from "../../../_data/bookings";
import { bookableStaff, type StaffId } from "../../../_data/staff";
import styles from "./calendar.module.css";
import { isIsoDate } from "./calendar-data";
import { addVisitDialog } from "./content";

export type NewVisit = {
  customer: string;
  service: Service;
  date: string;
  start: string;
  staffId: StaffId;
};

const copy = addVisitDialog;

function AddVisitForm({
  defaultDate,
  defaultStaff,
  onAdd,
}: {
  defaultDate: string;
  defaultStaff: StaffId;
  onAdd: (visit: NewVisit) => void;
}) {
  const [startError, setStartError] = useState<string | null>(null);
  const startRef = useRef<HTMLInputElement>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const read = (name: string) => String(data.get(name) ?? "").trim();
    const start = read("start");
    if (!start) {
      setStartError(copy.startError);
      startRef.current?.focus();
      return;
    }
    const date = read("date");
    const service = read("service") as Service;
    const staffId = read("staff") as StaffId;
    onAdd({
      customer: read("customer") || copy.customerFallback,
      service: services.includes(service) ? service : services[0],
      date: isIsoDate(date) ? date : defaultDate,
      start,
      staffId: bookableStaff.some((person) => person.id === staffId)
        ? staffId
        : defaultStaff,
    });
  }

  return (
    <form className={styles.form} noValidate onSubmit={submit}>
      <FormField id="add-visit-customer" label={copy.fields.customer}>
        {(control) => (
          <Input autoComplete="off" name="customer" type="text" {...control} />
        )}
      </FormField>
      <FormField id="add-visit-service" label={copy.fields.service}>
        {(control) => (
          <NativeSelect defaultValue={services[0]} name="service" {...control}>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </NativeSelect>
        )}
      </FormField>
      <div className={styles.formRow}>
        <FormField id="add-visit-date" label={copy.fields.date}>
          {(control) => (
            <Input
              defaultValue={defaultDate}
              name="date"
              type="date"
              {...control}
            />
          )}
        </FormField>
        <FormField
          error={startError}
          id="add-visit-start"
          label={copy.fields.start}
          required
        >
          {(control) => (
            <Input
              max="17:45"
              min="08:00"
              name="start"
              onChange={() => setStartError(null)}
              ref={startRef}
              step={900}
              type="time"
              {...control}
            />
          )}
        </FormField>
      </div>
      <FormField id="add-visit-staff" label={copy.fields.staff}>
        {(control) => (
          <NativeSelect defaultValue={defaultStaff} name="staff" {...control}>
            {bookableStaff.map((person) => (
              <option key={person.id} value={person.id}>
                {person.name}
              </option>
            ))}
          </NativeSelect>
        )}
      </FormField>
      <DialogFooter className={styles.formFooter}>
        <DialogClose
          render={<Button variant="secondary">{copy.cancel}</Button>}
        />
        <Button type="submit">{copy.submit}</Button>
      </DialogFooter>
    </form>
  );
}

/** "Add a visit" dialog. Demo only: the visit is kept in memory on this page. */
export function AddVisitDialog({
  open,
  defaultDate,
  defaultStaff,
  onOpenChange,
  onAdd,
  returnFocus,
}: {
  open: boolean;
  defaultDate: string;
  defaultStaff: StaffId;
  onOpenChange: (open: boolean) => void;
  onAdd: (visit: NewVisit) => void;
  returnFocus: () => HTMLElement | null;
}) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent
        className={styles.addDialog}
        finalFocus={() => returnFocus() ?? true}
      >
        <DialogHeader>
          <DialogTitle className={styles.sheetTitle}>{copy.title}</DialogTitle>
        </DialogHeader>
        <AddVisitForm
          defaultDate={defaultDate}
          defaultStaff={defaultStaff}
          onAdd={onAdd}
        />
      </DialogContent>
    </Dialog>
  );
}
