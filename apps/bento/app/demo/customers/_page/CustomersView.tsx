"use client";

import {
  ArrowRightIcon,
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ReactNode, useId } from "react";
import { Button } from "@/atoms/button";
import { toast } from "@/atoms/toast";
import { Tile } from "../../../_components/Bento";
import type { DemoState } from "../../../_components/demo-state";
import { FilterTabs } from "../../../_components/FilterTabs";
import { PortalPageHeader } from "../../../_components/PortalPageHeader";
import {
  EmptyState,
  ErrorState,
  TileSkeleton,
} from "../../../_components/TileStates";
import {
  bookingHref,
  bookings,
  formatShortDate,
} from "../../../_data/bookings";
import { type Customer, customers } from "../../../_data/customers";
import { markContacted, useContacted } from "./contacted-store";
import {
  customersHeader,
  customersMessages,
  customersTable,
  customersTabs,
} from "./content";
import styles from "./customers.module.css";

export type CustomerFilter = "follow-up";

type SearchParams = Record<string, string | string[] | undefined>;

const PATHNAME = "/demo/customers";
const EMPTY_ID = "customers-empty";

const markButtonId = (id: string) => `mark-${id}`;
const bookingLinkId = (id: string) => `booking-${id}`;

function firstBookingHref(customerId: string): Route | null {
  const match = bookings.find((item) => item.customerId === customerId);
  return match ? bookingHref(match.id) : null;
}

function VisitDate({
  iso,
  fallback,
}: {
  iso: string | null;
  fallback: string;
}) {
  if (!iso) return <span className={styles.none}>{fallback}</span>;
  return (
    <time className={styles.date} dateTime={iso}>
      {formatShortDate(iso)}
    </time>
  );
}

function FollowUpCell({
  customer,
  pending,
}: {
  customer: Customer;
  pending: boolean;
}) {
  if (pending && customer.followUp) {
    return (
      <span className={styles.followUp}>
        <span className={styles.flag}>
          <ExclamationTriangleIcon aria-hidden="true" />
          {customersTable.followUpFlag}
        </span>
        <span className={styles.reason}>{customer.followUp.reason}</span>
      </span>
    );
  }
  if (customer.followUp) {
    return (
      <span className={styles.contacted}>
        <CheckCircledIcon aria-hidden="true" />
        {customersTable.contacted}
      </span>
    );
  }
  return <span className={styles.none}>{customersTable.noFollowUp}</span>;
}

export function CustomersView({
  filter,
  state,
  searchParams,
}: {
  filter: CustomerFilter | null;
  state: DemoState;
  searchParams: SearchParams;
}) {
  const router = useRouter();
  const captionId = useId();
  const contacted = useContacted();

  const isPending = (customer: Customer) =>
    customer.followUp !== null && !contacted.has(customer.id);
  const pendingIds = customers.filter(isPending).map((item) => item.id);
  const rows =
    state === "empty"
      ? []
      : filter === "follow-up"
        ? customers.filter(isPending)
        : customers;
  const followUpsLabel = customersTabs.followUps(pendingIds.length);

  function handleMark(customer: Customer) {
    const index = pendingIds.indexOf(customer.id);
    const nextId = pendingIds[index + 1] ?? pendingIds[index - 1] ?? null;
    markContacted(customer.id);
    toast.add({ title: customersMessages.marked, type: "success" });
    requestAnimationFrame(() => {
      const targetId = nextId
        ? markButtonId(nextId)
        : filter === "follow-up"
          ? EMPTY_ID
          : bookingLinkId(customer.id);
      document.getElementById(targetId)?.focus();
    });
  }

  function retry() {
    router.replace(
      (filter ? `${PATHNAME}?filter=${filter}` : PATHNAME) as Route,
      { scroll: false },
    );
  }

  let body: ReactNode;
  if (state === "loading") {
    body = (
      <Tile state="loading">
        <TileSkeleton message={customersMessages.loading} rows={6} />
      </Tile>
    );
  } else if (state === "error") {
    body = (
      <Tile state="error">
        <ErrorState message={customersMessages.error} onRetry={retry} />
      </Tile>
    );
  } else if (rows.length === 0) {
    body = (
      <Tile state="empty">
        <div className={styles.emptyFocus} id={EMPTY_ID} tabIndex={-1}>
          <EmptyState
            centered
            imageId="ben-empty-list"
            message={customersMessages.emptyFollowUps}
          />
        </div>
      </Tile>
    );
  } else {
    body = (
      <Tile flush>
        <section
          aria-labelledby={captionId}
          className={styles.scroll}
          // biome-ignore lint/a11y/noNoninteractiveTabindex: a scrollable region must be reachable by keyboard
          tabIndex={0}
        >
          <table className={styles.table}>
            <caption className={styles.caption} id={captionId}>
              {filter === "follow-up" ? followUpsLabel : customersTabs.all}
            </caption>
            <thead>
              <tr>
                <th scope="col">{customersTable.columns.name}</th>
                <th scope="col">{customersTable.columns.lastVisit}</th>
                <th scope="col">{customersTable.columns.nextVisit}</th>
                <th scope="col">{customersTable.columns.followUp}</th>
                <th scope="col">{customersTable.columns.action}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((customer) => {
                const pending = isPending(customer);
                const href = firstBookingHref(customer.id);
                return (
                  <tr
                    data-follow-up={pending ? "" : undefined}
                    id={customer.id}
                    key={customer.id}
                  >
                    <th className={styles.name} scope="row">
                      {customer.name}
                    </th>
                    <td>
                      <VisitDate
                        fallback={customersTable.noLastVisit}
                        iso={customer.lastVisit}
                      />
                    </td>
                    <td>
                      <VisitDate
                        fallback={customersTable.noNextVisit}
                        iso={customer.nextVisit}
                      />
                    </td>
                    <td>
                      <FollowUpCell customer={customer} pending={pending} />
                    </td>
                    <td>
                      {pending ? (
                        <Button
                          className={styles.markButton}
                          id={markButtonId(customer.id)}
                          onClick={() => handleMark(customer)}
                          variant="secondary"
                        >
                          {customersTable.markContacted}
                          <span className="sr-only-text">
                            : {customer.name}
                          </span>
                        </Button>
                      ) : href ? (
                        <Link
                          className={styles.rowLink}
                          href={href}
                          id={bookingLinkId(customer.id)}
                        >
                          {customersTable.viewBooking}
                          <span className="sr-only-text">
                            : {customer.name}
                          </span>
                          <ArrowRightIcon aria-hidden="true" />
                        </Link>
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </Tile>
    );
  }

  return (
    <>
      <PortalPageHeader title={customersHeader.title} />
      <FilterTabs
        className={styles.tabs}
        current={filter}
        items={[
          { label: customersTabs.all, value: null },
          { label: followUpsLabel, value: "follow-up" },
        ]}
        label={customersTabs.label}
        param="filter"
        pathname={PATHNAME}
        searchParams={searchParams}
      />
      {body}
    </>
  );
}
