import type { Metadata } from "next";
import { dashboardSeo } from "./_page/content";
import { DashboardPage } from "./_page/DashboardPage";

export const metadata: Metadata = {
  title: { absolute: dashboardSeo.title },
  description: dashboardSeo.description,
};

export default function Page() {
  return <DashboardPage />;
}
