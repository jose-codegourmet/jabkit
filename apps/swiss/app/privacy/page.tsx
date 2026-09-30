import type { Metadata } from "next";
import { DemoNotice } from "../_components/DemoNotice";
import { Grid, GridItem } from "../_components/Grid";
import styles from "./_page/legal.module.css";
export const metadata: Metadata = {
  title: "Privacy — FRAME/01",
  description:
    "Privacy information for the FRAME/01 sample site. Policy text pending client confirmation.",
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <>
      <section className={styles.legal}>
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 6, desktop: 8 }}>
            <p>Legal / 01</p>
            <h1>Privacy</h1>
            <div>[Privacy policy — client to confirm]</div>
          </GridItem>
        </Grid>
      </section>
      <DemoNotice />
    </>
  );
}
