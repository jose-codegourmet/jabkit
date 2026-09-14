import type { ReactNode } from "react";
import { DemoBar } from "../../../components/samples/DemoBar";
import { SampleScope } from "../../../components/samples/SampleScope";
import { getReadySample } from "../catalog";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";
import styles from "./style.module.css";

export default function NeoBrutalismSampleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const sample = getReadySample("neo-brutalism");
  return (
    <>
      <DemoBar designSystem={sample.designSystem} brand={sample.brand} />
      <SampleScope className={styles.site} system="neo-brutalism">
        <a className="sr-only focus:not-sr-only" href="#top">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </SampleScope>
    </>
  );
}
