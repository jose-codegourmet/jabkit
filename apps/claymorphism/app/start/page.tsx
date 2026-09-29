import type { Metadata } from "next";
import { isRoutineSlug } from "../_data/routines";
import { startSeo } from "./_page/content";
import { StartPage } from "./_page/StartPage";

export const metadata: Metadata = {
  title: { absolute: startSeo.title },
  description: startSeo.description,
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ routine?: string | string[] }>;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.routine)
    ? params.routine[0]
    : params.routine;
  const routine = raw && isRoutineSlug(raw) ? raw : undefined;
  return <StartPage routine={routine} />;
}
