import type { ReactNode } from "react";
import { DemoBar } from "../../../components/samples/DemoBar";
import { SampleScope } from "../../../components/samples/SampleScope";
import { getReadyDesignSystem } from "../catalog";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";
import styles from "./style.module.css";

export default function RetroSampleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const sample = getReadyDesignSystem("retro");
  return (
    <>
      <DemoBar
        designSystem={sample.designSystem}
        brand={sample.brand}
        indexHref="/design-systems"
        indexLabel="Design systems"
      />
      <SampleScope className={styles.site} system="retro">
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
