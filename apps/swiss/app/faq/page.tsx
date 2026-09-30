import type { Metadata } from "next";
import { DemoNotice } from "../_components/DemoNotice";
import { FaqAccordion } from "../_components/FaqAccordion";
import { Grid, GridItem } from "../_components/Grid";
import { PageHeader } from "../_components/PageHeader";
import { faqGroups } from "../_data/faq";
import styles from "./_page/faq.module.css";
export const metadata: Metadata = {
  title: "FAQ — FRAME/01 Film Festival",
  description:
    "Access, venue arrival, refunds, and contact for FRAME/01. Policy details are confirmed by the festival before publication.",
};
export default function Page() {
  return (
    <>
      <PageHeader
        index="06"
        title="Questions"
        body="Access, arrival, refunds, and how to reach us."
      />
      <section className={styles.faq}>
        <Grid>
          {faqGroups.map((group) => (
            <GridItem
              key={group.id}
              span={{ mobile: 4, tablet: 8, desktop: 12 }}
            >
              <section id={group.id} className={styles.group}>
                <div className={styles.heading}>
                  <span>{group.index}</span>
                  <h2>{group.title}</h2>
                </div>
                <div className={styles.items}>
                  <FaqAccordion groups={[group]} />
                </div>
              </section>
            </GridItem>
          ))}
        </Grid>
      </section>
      <DemoNotice />
    </>
  );
}
