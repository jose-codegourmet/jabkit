"use client";

import { ArrowDownIcon, CaretSortIcon } from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/atoms/data-table";
import { cn } from "@/lib/cn";
import { StageBadge } from "../../_components/Badges";
import { PlanButton } from "../../_components/PlanButton";
import {
  artistHref,
  type Day,
  formatLength,
  getArtist,
} from "../../_data/artists";
import {
  formatTime,
  type ScheduleSort,
  type SetSlot,
  scheduleSortOptions,
} from "../../_data/schedule";
import { scheduleTable } from "./content";
import styles from "./schedule.module.css";

export type ScheduleTableProps = {
  rows: readonly SetSlot[];
  day: Day;
  sort: ScheduleSort;
  onSort: (sort: ScheduleSort) => void;
};

type SortableColumn = { sort: ScheduleSort; label: string };

function SortHeader({
  column,
  active,
  onSort,
}: {
  column: SortableColumn;
  active: boolean;
  onSort: (sort: ScheduleSort) => void;
}) {
  return (
    <TableHead
      aria-sort={active ? "ascending" : "none"}
      className={styles.th}
      scope="col"
    >
      <button
        className={styles.sortButton}
        data-active={active ? "true" : undefined}
        onClick={() => onSort(column.sort)}
        type="button"
      >
        <span>{column.label}</span>
        {active ? (
          <ArrowDownIcon aria-hidden="true" className={styles.sortIcon} />
        ) : (
          <CaretSortIcon aria-hidden="true" className={styles.sortIcon} />
        )}
      </button>
    </TableHead>
  );
}

function ActName({ slug, className }: { slug: string; className?: string }) {
  const artist = getArtist(slug);
  if (!artist) return null;
  return (
    <span className={cn(styles.act, className)}>
      <Link className={styles.actLink} href={artistHref(slug) as Route}>
        {artist.name}
      </Link>
      <span className={styles.actGenre}>{artist.genre}</span>
    </span>
  );
}

/**
 * Quiet transactional surface. A real table from 48rem up (sortable column
 * headers with aria-sort); stacked rows below that, where the "Sort by"
 * select does the sorting.
 */
export function ScheduleTable({ rows, day, sort, onSort }: ScheduleTableProps) {
  const { columns } = scheduleTable;
  const sortLabel =
    scheduleSortOptions.find((option) => option.value === sort)?.label ??
    "Start time";

  return (
    <div className={styles.tableSurface}>
      <div className={styles.tableWide}>
        <Table className={styles.table}>
          <TableCaption className="sr-only">
            {scheduleTable.caption(day, sortLabel)}
          </TableCaption>
          <TableHeader>
            <TableRow className={styles.headRow}>
              <SortHeader
                active={sort === "start"}
                column={{ sort: "start", label: columns.start }}
                onSort={onSort}
              />
              <SortHeader
                active={sort === "act"}
                column={{ sort: "act", label: columns.act }}
                onSort={onSort}
              />
              <SortHeader
                active={sort === "stage"}
                column={{ sort: "stage", label: columns.stage }}
                onSort={onSort}
              />
              <TableHead className={styles.th} scope="col">
                <span className={styles.thText}>{columns.length}</span>
              </TableHead>
              <TableHead className={cn(styles.th, styles.thPlan)} scope="col">
                <span className={styles.thText}>{columns.plan}</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((set) => {
              const artist = getArtist(set.slug);
              if (!artist) return null;
              return (
                <TableRow className={styles.row} key={set.slug}>
                  <TableCell className={cn(styles.td, styles.tdTime)}>
                    <time dateTime={formatTime(set.startMinutes)}>
                      {formatTime(set.startMinutes)}
                    </time>
                  </TableCell>
                  <TableCell className={styles.td}>
                    <ActName slug={set.slug} />
                  </TableCell>
                  <TableCell className={styles.td}>
                    <StageBadge stageId={set.stageId} />
                  </TableCell>
                  <TableCell className={cn(styles.td, styles.tdLength)}>
                    {formatLength(artist.lengthMinutes)}
                  </TableCell>
                  <TableCell className={cn(styles.td, styles.tdPlan)}>
                    <PlanButton
                      actName={artist.name}
                      slug={set.slug}
                      variant="compact"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <ul aria-label={scheduleTable.listLabel(day)} className={styles.stack}>
        {rows.map((set) => {
          const artist = getArtist(set.slug);
          if (!artist) return null;
          return (
            <li className={styles.stackRow} key={set.slug}>
              <p className={styles.stackTime}>
                <span className="sr-only">{columns.start} </span>
                <time dateTime={formatTime(set.startMinutes)}>
                  {formatTime(set.startMinutes)}
                </time>
              </p>
              <div className={styles.stackBody}>
                <ActName className={styles.stackAct} slug={set.slug} />
                <div className={styles.stackMeta}>
                  <StageBadge stageId={set.stageId} />
                  <span className={styles.stackLength}>
                    <span className="sr-only">{columns.length} </span>
                    {formatLength(artist.lengthMinutes)}
                  </span>
                </div>
              </div>
              <div className={styles.stackPlan}>
                <PlanButton
                  actName={artist.name}
                  slug={set.slug}
                  variant="compact"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
