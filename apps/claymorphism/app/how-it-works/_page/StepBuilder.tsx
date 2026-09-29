"use client";

import { type FormEvent, useId, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { InitialAvatar } from "../../_components/InitialAvatar";
import { getMember, members } from "../../_data/members";
import type { MemberId } from "../../_data/types";
import { buildStep } from "./content";
import styles from "./how-it-works.module.css";

type DraftStep = {
  id: number;
  name: string;
  owner: MemberId;
};

function isMemberId(value: string): value is MemberId {
  return members.some((member) => member.id === value);
}

export function StepBuilder() {
  const nameId = useId();
  const helpId = useId();
  const errorId = useId();
  const ownerId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState<MemberId>(members[0]?.id ?? "maya");
  const [error, setError] = useState(false);
  const [steps, setSteps] = useState<DraftStep[]>([]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError(true);
      inputRef.current?.focus();
      return;
    }

    const id = nextId.current;
    nextId.current += 1;
    setSteps((current) => [...current, { id, name: trimmed, owner }]);
    setName("");
    setError(false);
  }

  return (
    <form className={styles.builder} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <Label htmlFor={nameId}>{buildStep.stepNameLabel}</Label>
        <Input
          aria-describedby={error ? `${helpId} ${errorId}` : helpId}
          aria-invalid={error || undefined}
          className={styles.control}
          id={nameId}
          name="stepName"
          onChange={(event) => {
            setName(event.target.value);
            if (error) setError(false);
          }}
          ref={inputRef}
          value={name}
        />
        <p className={`jk-caption ${styles.help}`} id={helpId}>
          {buildStep.stepNameHelp}
        </p>
        {error ? (
          <p className={`jk-caption ${styles.error}`} id={errorId} role="alert">
            {buildStep.stepNameError}
          </p>
        ) : null}
      </div>
      <div className={styles.field}>
        <Label htmlFor={ownerId}>{buildStep.ownerLabel}</Label>
        <select
          className={styles.select}
          id={ownerId}
          name="owner"
          onChange={(event) => {
            const next = event.target.value;
            if (isMemberId(next)) setOwner(next);
          }}
          value={owner}
        >
          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.firstName}
            </option>
          ))}
        </select>
      </div>
      <Button className={styles.addStep} type="submit">
        {buildStep.addStepLabel}
      </Button>
      {steps.length > 0 ? (
        <ul className={styles.added}>
          {steps.map((step) => {
            const person = getMember(step.owner);
            return (
              <li key={step.id}>
                <InitialAvatar memberId={step.owner} size="sm" />
                <span>{step.name}</span>
                {person ? (
                  <span className={styles.ownerName}>{person.firstName}</span>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}
