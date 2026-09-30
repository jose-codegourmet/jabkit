"use client";

import { PlusIcon } from "@radix-ui/react-icons";
import { type FormEvent, useRef, useState } from "react";
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
import { Input } from "@/atoms/input";
import { FormField } from "../../../_components/FormField";
import { addTaskCopy, tasksHeader } from "./content";
import styles from "./tasks.module.css";

/** Header action: a small dialog that adds a task to To do (in memory). */
export function AddTaskDialog({ onAdd }: { onAdd: (title: string) => void }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setValue("");
      setError(null);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = value.trim();
    if (!title) {
      setError(addTaskCopy.required);
      inputRef.current?.focus();
      return;
    }
    onAdd(title);
    handleOpenChange(false);
  }

  return (
    <Dialog onOpenChange={handleOpenChange} open={open}>
      <DialogTrigger
        render={
          <Button className={styles.addButton}>
            <PlusIcon aria-hidden="true" />
            {tasksHeader.addTask}
          </Button>
        }
      />
      <DialogContent className={styles.dialog}>
        <DialogHeader>
          <DialogTitle className={styles.dialogTitle}>
            {addTaskCopy.title}
          </DialogTitle>
          <DialogDescription>{addTaskCopy.description}</DialogDescription>
        </DialogHeader>
        <form className={styles.dialogForm} noValidate onSubmit={submit}>
          <FormField
            error={error}
            id="new-task-title"
            label={addTaskCopy.label}
            required
          >
            {(control) => (
              <Input
                {...control}
                autoComplete="off"
                onChange={(event) => {
                  setValue(event.target.value);
                  if (error) setError(null);
                }}
                ref={inputRef}
                value={value}
              />
            )}
          </FormField>
          <DialogFooter className={styles.dialogFooter}>
            <DialogClose
              render={<Button variant="secondary">{addTaskCopy.cancel}</Button>}
            />
            <Button type="submit">{addTaskCopy.submit}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
