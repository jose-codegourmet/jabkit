import type { Metadata } from "next";
import { DemoNotice } from "../_components/DemoNotice";
import { Grid, GridItem } from "../_components/Grid";
import styles from "./_page/legal.module.css";
export const metadata: Metadata = {
  title: "Terms of sale — FRAME/01",
  description:
    "Terms of sale for FRAME/01. Terms pending client confirmation; this sample site sells nothing.",
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <>
      <section className={styles.legal}>
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 6, desktop: 8 }}>
            <p>Legal / 02</p>
            <h1>Terms of sale</h1>
            <div>[Terms of sale — client to confirm]</div>
          </GridItem>
        </Grid>
      </section>
      <DemoNotice />
    </>
  );
}
