import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { CtaBand } from "../_components/CtaBand";
import { DemoNotice } from "../_components/DemoNotice";
import { Grid, GridItem } from "../_components/Grid";
import { PageHeader } from "../_components/PageHeader";
import { SwissImage } from "../_components/SwissImage";
import { films } from "../_data/films";
import { screeningsForVenue } from "../_data/screenings";
import { venues } from "../_data/venues";
import styles from "./_page/venues.module.css";
export const metadata: Metadata = {
  title: "Venues — FRAME/01 Film Festival",
  description:
    "FRAME/01 screening venues: Cinema One and Hall B. Addresses, arrival times, and access information, with links to each venue's screenings.",
};
export default function Page() {
  return (
    <>
      <PageHeader
        index="03"
        title="Venues"
        body="Where each screening happens and how to get there."
      />
      <section className={styles.venues}>
        {venues.map((venue, index) => {
          const shows = screeningsForVenue(venue.slug);
          const image = (
            <SwissImage
              id={venue.imageId}
              ratio="3:2"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          );
          const facts = (
            <div className={styles.copy}>
              <p className={styles.index}>0{index + 1}</p>
              <h2>{venue.name}</h2>
              <dl>
                {[
                  ["Address", venue.address],
                  ["Seats", venue.seats],
                  ["Getting there", venue.gettingThere],
                  ["Access", venue.access],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <h3>Screenings here</h3>
              <ul>
                {shows.map((s) => (
                  <li key={s.id}>
                    {s.dayLabel}, {s.time} —{" "}
                    {films.find((f) => f.slug === s.filmSlug)?.title}
                  </li>
                ))}
              </ul>
              <Button asChild variant="secondary">
                <Link href={`/schedule?venue=${venue.slug}`}>
                  See what's on here
                </Link>
              </Button>
            </div>
          );
          return (
            <article id={venue.slug} key={venue.slug} className={styles.venue}>
              <Grid>
                {index % 2 === 0 ? (
                  <>
                    <GridItem span={{ mobile: 4, tablet: 4, desktop: 6 }}>
                      {image}
                    </GridItem>
                    <GridItem
                      start={{ desktop: 8 }}
                      span={{ mobile: 4, tablet: 4, desktop: 5 }}
                    >
                      {facts}
                    </GridItem>
                  </>
                ) : (
                  <>
                    <GridItem span={{ mobile: 4, tablet: 4, desktop: 5 }}>
                      {facts}
                    </GridItem>
                    <GridItem
                      start={{ desktop: 7 }}
                      span={{ mobile: 4, tablet: 4, desktop: 6 }}
                    >
                      {image}
                    </GridItem>
                  </>
                )}
              </Grid>
            </article>
          );
        })}
      </section>
      <section className={styles.arrival}>
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 6, desktop: 7 }}>
            <h2>Arriving.</h2>
            <p>
              Arrive before the listed start time. Late entry: [Late entry
              policy — client to confirm].
            </p>
            <Link href="/faq">Read the FAQ ↗</Link>
          </GridItem>
        </Grid>
      </section>
      <CtaBand />
      <DemoNotice />
    </>
  );
}
