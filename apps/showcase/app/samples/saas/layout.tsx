import type { ReactNode } from "react";
import { DemoBar } from "../../../components/samples/DemoBar";
import { getReadySample } from "../catalog";

export default function SaasSampleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const sample = getReadySample("saas");
  return (
    <>
      <DemoBar designSystem={sample.designSystem} brand={sample.brand} />
      {children}
    </>
  );
}
