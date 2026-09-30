import type { Metadata } from "next";
import { parseDemoState, parseEnum } from "../../_components/demo-state";
import { type CustomerFilter, CustomersView } from "./_page/CustomersView";
import { customersSeo } from "./_page/content";

export const metadata: Metadata = {
  title: { absolute: customersSeo.title },
  description: customersSeo.description,
};

const filters: readonly CustomerFilter[] = ["follow-up"];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <CustomersView
      filter={parseEnum(params.filter, filters, null)}
      searchParams={params}
      state={parseDemoState(params.state)}
    />
  );
}
