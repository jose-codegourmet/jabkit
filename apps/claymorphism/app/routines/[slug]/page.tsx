import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoutine, routineSlugs } from "../../_data/routines";
import { RoutineDetailPage } from "./_page/RoutineDetailPage";

type RouteParams = {
  slug: string;
};

export const dynamicParams = false;

export function generateStaticParams(): RouteParams[] {
  return routineSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const routine = getRoutine(slug);
  if (!routine) return {};
  return {
    title: { absolute: routine.seoTitle },
    description: routine.seoDescription,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const routine = getRoutine(slug);
  if (!routine) notFound();
  return <RoutineDetailPage routine={routine} />;
}
