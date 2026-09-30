import Link from "next/link";
import { Button } from "@/atoms/button";
import { ctaBand } from "../_data/site";
import styles from "../style.module.css";
import { Grid, GridItem } from "./Grid";
import { SectionIndex } from "./SectionIndex";
import { SwissImage } from "./SwissImage";

export function CtaBand() {
  return (
    <section className={styles.cta} aria-labelledby="tickets-cta-title">
      <Grid>
        <GridItem className={styles.ctaMobileImage} span={4}>
          <SwissImage id="swi-cta-mobile" ratio="4:5" sizes="100vw" />
        </GridItem>
        <GridItem span={{ mobile: 4, tablet: 4, desktop: 5 }}>
          <SectionIndex index="05" label="Tickets" />
          <div className={styles.ctaCopy}>
            <h2 id="tickets-cta-title" className={styles.ctaTitle}>
              {ctaBand.headline}
            </h2>
            <p className={styles.ctaBody}>{ctaBand.body}</p>
            <div className={styles.ctaActions}>
              <Button asChild>
                <Link href={ctaBand.primary.href}>{ctaBand.primary.label}</Link>
              </Button>
              <Link className={styles.textLink} href={ctaBand.secondary.href}>
                {ctaBand.secondary.label} ↗
              </Link>
            </div>
          </div>
        </GridItem>
        <GridItem
          className={styles.ctaDesktopImage}
          start={{ desktop: 7 }}
          span={{ desktop: 6 }}
        >
          <SwissImage id="swi-cta" ratio="16:9" sizes="50vw" />
        </GridItem>
      </Grid>
    </section>
  );
}
