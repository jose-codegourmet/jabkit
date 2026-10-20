import { LineupExplorer } from "./LineupExplorer";
import { parseLineupQuery } from "./query";

type SearchParams = Record<string, string | string[] | undefined>;

/** Reads ?day, ?stage, ?view and the demo ?state on the server, then hands off to the client island. */
export async function LineupSection({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const query = parseLineupQuery(await searchParams);
  return <LineupExplorer query={query} />;
}
