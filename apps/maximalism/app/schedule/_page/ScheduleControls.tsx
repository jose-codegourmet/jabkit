"use client";

import { useId } from "react";
import { Switch } from "@/atoms/switch";
import { cn } from "@/lib/cn";
import { Segmented } from "../../_components/Segmented";
import { type Day, dayLabel, days } from "../../_data/artists";
import { isScheduleSort, scheduleSortOptions } from "../../_data/schedule";
import { isStageId, stages } from "../../_data/stages";
import { scheduleControls } from "./content";
import styles from "./schedule.module.css";
import type { ScheduleParams } from "./useScheduleParams";

export type ScheduleControlsProps = {
  params: ScheduleParams;
  onChange: (patch: Partial<ScheduleParams>) => void;
  /** id of the results panel the day tabs control. */
  panelId: string;
};

const dayOptions = days.map((day) => ({
  value: String(day) as `${Day}`,
  label: dayLabel(day),
}));

export function ScheduleControls({
  params,
  onChange,
  panelId,
}: ScheduleControlsProps) {
  const stageId = useId();
  const sortId = useId();
  const switchId = useId();
  const switchLabelId = useId();

  return (
    <div className={styles.controls}>
      <div className={styles.controlDay}>
        <span aria-hidden="true" className={cn("jk-label", styles.fieldLabel)}>
          {scheduleControls.dayLabel}
        </span>
        <Segmented
          className={styles.dayTabs}
          label={scheduleControls.dayLabel}
          mode="tabs"
          onChange={(value) => onChange({ day: value === "2" ? 2 : 1 })}
          options={dayOptions.map((option) => ({
            ...option,
            controls: panelId,
          }))}
          value={String(params.day) as `${Day}`}
        />
      </div>

      <div className={styles.field}>
        <label className={cn("jk-label", styles.fieldLabel)} htmlFor={stageId}>
          {scheduleControls.stageLabel}
        </label>
        <select
          className={styles.select}
          id={stageId}
          onChange={(event) => {
            const value = event.target.value;
            onChange({ stage: isStageId(value) ? value : "all" });
          }}
          value={params.stage}
        >
          <option value="all">{scheduleControls.allStages}</option>
          {stages.map((stage) => (
            <option key={stage.id} value={stage.id}>
              {stage.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={cn("jk-label", styles.fieldLabel)} htmlFor={sortId}>
          {scheduleControls.sortLabel}
        </label>
        <select
          className={styles.select}
          id={sortId}
          onChange={(event) => {
            const value = event.target.value;
            if (isScheduleSort(value)) onChange({ sort: value });
          }}
          value={params.sort}
        >
          {scheduleSortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.switchRow}>
        <Switch
          aria-labelledby={switchLabelId}
          checked={params.mine}
          className={styles.switchControl}
          id={switchId}
          onCheckedChange={(checked) => onChange({ mine: checked })}
        />
        <label
          className={styles.switchLabel}
          htmlFor={switchId}
          id={switchLabelId}
        >
          {scheduleControls.planOnlyLabel}
        </label>
      </div>
    </div>
  );
}
