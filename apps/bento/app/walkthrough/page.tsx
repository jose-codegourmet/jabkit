import type { Metadata } from "next";
import { parseEnum } from "../_components/demo-state";
import { walkthroughSeo } from "./_page/content";
import { WalkthroughPage } from "./_page/WalkthroughPage";

export const metadata: Metadata = {
  title: { absolute: walkthroughSeo.title },
  description: walkthroughSeo.description,
};

/** ?state=error shows the failure alert for demo and QA purposes. */
const pageStates = ["error"] as const;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { state } = await searchParams;
  const initialState = parseEnum(state, pageStates, null);
  return <WalkthroughPage initialFailure={initialState === "error"} />;
}
