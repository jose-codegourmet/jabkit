import Link from "next/link";
import { Button } from "@/atoms/button";
import { Card } from "@/atoms/card";
import { CtaBand } from "../_components/CtaBand";
import { DemoNotice } from "../_components/DemoNotice";
import { FilmCard } from "../_components/FilmCard";
import { Grid, GridItem } from "../_components/Grid";
import { ScreeningTable } from "../_components/ScreeningTable";
import { SectionIndex } from "../_components/SectionIndex";
import { SwissImage } from "../_components/SwissImage";
import { films } from "../_data/films";
import { screenings } from "../_data/screenings";
import { festivalDatesPlaceholder } from "../_data/site";
import { venues } from "../_data/venues";
import styles from "./home.module.css";

export function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="home-title">
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 7, desktop: 8 }}>
            <p className={styles.eyebrow}>
              FRAME/01 · {festivalDatesPlaceholder}
            </p>
            <h1 id="home-title" className={styles.title}>
              A city in frames.
            </h1>
            <p className={styles.lead}>
              Four days of independent films and conversations.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg">
                <Link href="/program">Explore the program</Link>
              </Button>
              <Link href="/tickets" className={styles.textLink}>
                See passes ↗
              </Link>
            </div>
          </GridItem>
          <GridItem
            className={styles.heroImage}
            start={{ desktop: 7 }}
            span={{ mobile: 4, tablet: 8, desktop: 6 }}
          >
            <SwissImage
              id="swi-hero"
              ratio="21:9"
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </GridItem>
          <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
            <dl className={styles.facts}>
              <div>
                <dt>Duration</dt>
                <dd>
                  <strong>4</strong> days
                </dd>
              </div>
              <div>
                <dt>Places</dt>
                <dd>
                  <strong>[n]</strong> venues — client to confirm
                </dd>
              </div>
              <div>
                <dt>Program</dt>
                <dd>Films, shorts, talks</dd>
              </div>
            </dl>
          </GridItem>
        </Grid>
      </section>

      <section className={styles.section} aria-labelledby="featured-title">
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
            <SectionIndex index="01" label="Program" slash />
            <div className={styles.sectionIntro}>
              <h2 id="featured-title">Three to start with.</h2>
              <Link href="/program" className={styles.textLink}>
                All films ↗
              </Link>
            </div>
          </GridItem>
        </Grid>
        <div className={styles.filmRail}>
          {films.map((film) => (
            <Card className={styles.filmCard} key={film.slug}>
              <FilmCard
                film={film}
                screening={screenings.find(
                  (item) => item.filmSlug === film.slug,
                )}
              />
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="schedule-title">
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
            <SectionIndex index="02" label="Schedule" />
          </GridItem>
          <GridItem span={{ mobile: 4, tablet: 6, desktop: 6 }}>
            <div className={styles.sectionIntroStack}>
              <h2 id="schedule-title">Four days, one table.</h2>
              <p>
                Every screening in one list. Filter by day, venue, or category;
                the calendar is there if you prefer it.
              </p>
            </div>
          </GridItem>
          <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
            <ScreeningTable
              screenings={screenings}
              caption="Three screenings from the FRAME/01 demo schedule"
            />
            <Link href="/schedule" className={styles.sectionLink}>
              Open the full schedule ↗
            </Link>
          </GridItem>
        </Grid>
      </section>

      <section className={styles.section} aria-labelledby="venues-title">
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
            <SectionIndex index="03" label="Venues" />
            <div className={styles.sectionIntro}>
              <h2 id="venues-title">Where to watch.</h2>
            </div>
          </GridItem>
          {venues.map((venue, index) => (
            <GridItem
              key={venue.slug}
              span={{ mobile: 4, tablet: 4, desktop: index === 0 ? 5 : 7 }}
            >
              <article className={styles.venueCard}>
                <SwissImage
                  id={venue.imageId}
                  ratio="3:2"
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <h3>{venue.name}</h3>
                <p>
                  {venue.name} — {venue.address}
                </p>
                <Link
                  href={`/venues#${venue.slug}`}
                  className={styles.textLink}
                >
                  Venue details ↗
                </Link>
              </article>
            </GridItem>
          ))}
        </Grid>
      </section>

      <section className={styles.section} aria-labelledby="talks-title">
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
            <SectionIndex index="04" label="Talks" slash />
          </GridItem>
          <GridItem
            className={styles.talkTexture}
            span={{ mobile: 4, tablet: 2, desktop: 3 }}
          >
            <SwissImage
              id="swi-background-paper"
              ratio="1:1"
              alt=""
              sizes="25vw"
            />
          </GridItem>
          <GridItem span={{ mobile: 4, tablet: 6, desktop: 7 }}>
            <div className={styles.talkCopy}>
              <h2 id="talks-title">Films, then conversation.</h2>
              <p>
                Filmmaker talks follow selected screenings. Talk details are
                announced with the full program.
              </p>
              <p className={styles.placeholder}>
                [Talk listings — client to confirm]
              </p>
              <Link href="/about" className={styles.textLink}>
                About the festival ↗
              </Link>
            </div>
          </GridItem>
        </Grid>
      </section>
      <CtaBand />
      <DemoNotice />
    </>
  );
}
