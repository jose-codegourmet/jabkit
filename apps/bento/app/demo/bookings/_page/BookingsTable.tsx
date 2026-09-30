"use client";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  type ChangeEvent,
  type ReactNode,
  type RefObject,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Skeleton } from "@/atoms/skeleton";
import { BentoGrid, Tile } from "../../../_components/Bento";
import type { DemoState } from "../../../_components/demo-state";
import { FilterTabs } from "../../../_components/FilterTabs";
import { FormField } from "../../../_components/FormField";
import { StatusBadge } from "../../../_components/StatusBadge";
import { EmptyState, ErrorState } from "../../../_components/TileStates";
import {
  type Booking,
  type BookingStatus,
  bookingHref,
  bookings,
  formatShortDate,
  formatTime,
} from "../../../_data/bookings";
import { getStaff } from "../../../_data/staff";
import styles from "./bookings.module.css";
import {
  bookingFiltersLabel,
  bookingFilterTabs,
  bookingSearch,
  bookingStates,
  bookingsPath,
  bookingTable,
} from "./content";

type SearchParams = Record<string, string | string[] | undefined>;
type SortDirection = "ascending" | "descending";

const LOADING_ROWS = 6;
const COLUMN_COUNT = 6;

function sortKey(item: Booking) {
  return `${item.date}T${item.start}|${item.id}`;
}

function matches(item: Booking, query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  return (
    item.customer.toLowerCase().includes(needle) ||
    item.service.toLowerCase().includes(needle)
  );
}

function TableFrame({
  direction,
  onSort,
  regionRef,
  busy = false,
  children,
}: {
  direction: SortDirection;
  onSort: () => void;
  regionRef?: RefObject<HTMLElement | null>;
  busy?: boolean;
  children: ReactNode;
}) {
  const captionId = useId();
  const { columns } = bookingTable;
  const SortIcon = direction === "ascending" ? ArrowUpIcon : ArrowDownIcon;

  return (
    <section
      aria-busy={busy || undefined}
      aria-labelledby={captionId}
      className={styles.scroll}
      ref={regionRef}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: a sideways-scrolling table region must be reachable by keyboard
      tabIndex={0}
    >
      <table className={styles.table}>
        <caption className="sr-only-text" id={captionId}>
          {bookingTable.caption},{" "}
          {direction === "ascending"
            ? bookingTable.sortedAscending
            : bookingTable.sortedDescending}
        </caption>
        <thead>
          <tr>
            <th scope="col">{columns.customer}</th>
            <th scope="col">{columns.service}</th>
            <th aria-sort={direction} scope="col">
              <button className={styles.sort} onClick={onSort} type="button">
                {columns.date}
                <SortIcon aria-hidden="true" />
              </button>
            </th>
            <th scope="col">{columns.staff}</th>
            <th scope="col">{columns.status}</th>
            <th className={styles.actionCell} scope="col">
              {columns.action}
            </th>
          </tr>
        </thead>
        {children}
      </table>
    </section>
  );
}

function LoadingRows() {
  return (
    <tbody>
      {Array.from({ length: LOADING_ROWS }, (_, row) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder rows
        <tr key={row}>
          {Array.from({ length: COLUMN_COUNT }, (_, cell) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder cells
            <td key={cell}>
              <Skeleton className={styles.cellSkeleton} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

function BookingRows({ rows }: { rows: Booking[] }) {
  return (
    <tbody>
      {rows.map((item) => (
        <tr data-status={item.status} key={item.id}>
          <th scope="row">{item.customer}</th>
          <td>{item.service}</td>
          <td className={styles.when}>
            <time dateTime={`${item.date}T${item.start}`}>
              {formatShortDate(item.date)} · {formatTime(item.start)}
            </time>
          </td>
          <td className={styles.staff}>{getStaff(item.staffId).name}</td>
          <td>
            <StatusBadge status={item.status} />
          </td>
          <td className={styles.actionCell}>
            <Link className={styles.review} href={bookingHref(item.id)}>
              {bookingTable.review}
              <span className="sr-only-text">
                {bookingTable.reviewFor(item.customer)}
              </span>
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

/**
 * Filters, search and the bookings table. Status tabs are links (?status=),
 * search filters on the client and mirrors itself into ?q= without a reload.
 */
export function BookingsTable({
  status,
  demoState,
  initialQuery,
  searchParams,
}: {
  status: BookingStatus | null;
  demoState: DemoState;
  initialQuery: string;
  searchParams: SearchParams;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [direction, setDirection] = useState<SortDirection>("ascending");
  const regionRef = useRef<HTMLElement>(null);
  const retried = useRef(false);

  useEffect(() => {
    if (demoState !== "ready" || !retried.current) return;
    retried.current = false;
    regionRef.current?.focus();
  }, [demoState]);

  function updateQuery(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setQuery(value);
    const url = new URL(window.location.href);
    if (value) url.searchParams.set("q", value);
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);
  }

  function retry() {
    retried.current = true;
    const url = new URL(window.location.href);
    url.searchParams.delete("state");
    router.replace(`${url.pathname}${url.search}` as Route, { scroll: false });
  }

  function toggleSort() {
    setDirection((current) =>
      current === "ascending" ? "descending" : "ascending",
    );
  }

  const rows = bookings
    .filter((item) => (status ? item.status === status : true))
    .filter((item) => matches(item, query))
    .sort((a, b) =>
      direction === "ascending"
        ? sortKey(a).localeCompare(sortKey(b))
        : sortKey(b).localeCompare(sortKey(a)),
    );

  const view: DemoState =
    demoState === "ready" && rows.length === 0 ? "empty" : demoState;
  const allReplied = demoState === "empty" && status === "needs-reply";
  const showsTable = view === "ready" || view === "loading";

  return (
    <>
      <div className={styles.toolbar}>
        <FilterTabs
          current={status}
          items={bookingFilterTabs}
          label={bookingFiltersLabel}
          param="status"
          pathname={bookingsPath}
          searchParams={{ ...searchParams, q: query || undefined }}
        />
        <FormField
          className={styles.search}
          id={bookingSearch.id}
          label={bookingSearch.label}
        >
          {(control) => (
            <div className={styles.searchControl}>
              <MagnifyingGlassIcon aria-hidden="true" />
              <Input
                {...control}
                autoComplete="off"
                className={styles.searchInput}
                onChange={updateQuery}
                placeholder={bookingSearch.placeholder}
                type="search"
                value={query}
              />
            </div>
          )}
        </FormField>
      </div>

      <p className="sr-only-text" role="status">
        {demoState === "ready" ? bookingTable.shown(rows.length) : null}
      </p>

      <BentoGrid>
        <Tile
          flush={showsTable}
          kind="action"
          span={12}
          state={view === "empty" || view === "error" ? view : "default"}
          surfaceClassName={showsTable ? styles.tableTile : styles.stateTile}
        >
          {view === "loading" ? (
            <>
              <p className={styles.loadingMessage} role="status">
                {bookingStates.loading}
              </p>
              <TableFrame busy direction={direction} onSort={toggleSort}>
                <LoadingRows />
              </TableFrame>
            </>
          ) : null}

          {view === "ready" ? (
            <TableFrame
              direction={direction}
              onSort={toggleSort}
              regionRef={regionRef}
            >
              <BookingRows rows={rows} />
            </TableFrame>
          ) : null}

          {view === "empty" ? (
            <EmptyState
              action={
                allReplied ? null : (
                  <Button asChild variant="secondary">
                    <Link href={bookingsPath} onClick={() => setQuery("")}>
                      {bookingStates.clearFilter}
                    </Link>
                  </Button>
                )
              }
              centered
              imageId="ben-empty-list"
              message={
                allReplied
                  ? bookingStates.emptyNeedsReply
                  : bookingStates.emptyFilter
              }
            />
          ) : null}

          {view === "error" ? (
            <ErrorState
              message={bookingStates.error}
              onRetry={retry}
              retryLabel={bookingStates.retry}
            />
          ) : null}
        </Tile>
      </BentoGrid>
    </>
  );
}
