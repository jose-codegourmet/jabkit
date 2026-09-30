import { parseDemoState, parseEnum } from "../../../_components/demo-state";
import { PortalPageHeader } from "../../../_components/PortalPageHeader";
import { BookingsTable } from "./BookingsTable";
import { bookingsHeader, statusFilters } from "./content";

type SearchParams = Record<string, string | string[] | undefined>;

function first(value: SearchParams[string]): string {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

/** /demo/bookings: ?status= filter tabs, ?state= demo toggles, ?q= search. */
export function BookingsPage({ searchParams }: { searchParams: SearchParams }) {
  const status = parseEnum(searchParams.status, statusFilters, null);
  const demoState = parseDemoState(searchParams.state);

  return (
    <>
      <PortalPageHeader sub={bookingsHeader.sub} title={bookingsHeader.title} />
      <BookingsTable
        demoState={demoState}
        initialQuery={first(searchParams.q)}
        searchParams={searchParams}
        status={status}
      />
    </>
  );
}
