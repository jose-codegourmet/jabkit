import type { Metadata } from "next";
import { CtaBand } from "../_components/CtaBand";
import { Grid, GridItem } from "../_components/Grid";
import { PageHeader } from "../_components/PageHeader";
import { SectionIndex } from "../_components/SectionIndex";
import { SwissImage } from "../_components/SwissImage";
import styles from "./_page/about.module.css";
export const metadata: Metadata = {
  title: "About — FRAME/01 Film Festival",
  description:
    "FRAME/01 is a four-day independent film festival with screenings and filmmaker talks, for local filmgoers, students, visiting filmmakers, and press.",
};
const pillars = [
  {
    index: "01",
    title: "Screenings",
    body: "Documentaries, narrative features, and shorts, shown in [n] venues.",
  },
  {
    index: "02",
    title: "Conversations",
    body: "Filmmakers talk after selected screenings.",
  },
  {
    index: "03",
    title: "A clear program",
    body: "Dates, venues, runtimes, language, and access in one place, before anything else.",
  },
];
export default function Page() {
  return (
    <>
      <PageHeader
        index="04"
        title="Cinema, clearly seen."
        body="FRAME/01 is a four-day independent film festival: screenings, filmmaker talks, and passes for the whole city."
      />
      <section className={styles.section}>
        <Grid>
          <GridItem span={12}>
            <SectionIndex index="01" label="What we do" slash />
          </GridItem>
          {pillars.map((p, i) => (
            <GridItem
              key={p.index}
              span={{ mobile: 4, tablet: i === 2 ? 8 : 4, desktop: 4 }}
            >
              <article className={styles.pillar}>
                <span>{p.index}</span>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
                {i === 1 ? (
                  <SwissImage id="swi-about-talk" ratio="3:2" sizes="33vw" />
                ) : null}
              </article>
            </GridItem>
          ))}
        </Grid>
      </section>
      <section className={styles.section}>
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 7, desktop: 8 }}>
            <SectionIndex index="02" label="Audience" />
            <div className={styles.bigCopy}>
              <h2>For filmgoers, students, filmmakers, and press.</h2>
              <p>
                Come for one film or all four days. Student pricing: [Student
                concession — client to confirm].
              </p>
            </div>
          </GridItem>
        </Grid>
      </section>
      <section className={styles.section}>
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 4, desktop: 4 }}>
            <SwissImage id="swi-process-projection" ratio="4:5" sizes="33vw" />
          </GridItem>
          <GridItem
            start={{ desktop: 6 }}
            span={{ mobile: 4, tablet: 4, desktop: 6 }}
          >
            <div className={styles.bigCopy}>
              <h2>From print to program.</h2>
              <p>[Programming and submissions process — client to confirm].</p>
            </div>
          </GridItem>
          <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
            <SwissImage
              id="swi-material-print"
              ratio="21:9"
              caption="Film strip on a light table."
              sizes="100vw"
            />
          </GridItem>
        </Grid>
      </section>
      <section className={styles.section}>
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 6, desktop: 7 }}>
            <SectionIndex index="03" label="Contact" />
            <div className={styles.bigCopy}>
              <h2>Press and filmmakers</h2>
              <p>Press accreditation: [Press process — client to confirm].</p>
              <p>Filmmaker enquiries: [Contact — client to confirm].</p>
            </div>
          </GridItem>
        </Grid>
      </section>
      <CtaBand />
    </>
  );
}
