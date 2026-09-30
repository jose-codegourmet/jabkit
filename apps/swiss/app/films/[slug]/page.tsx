import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/atoms/breadcrumb";
import { Card } from "@/atoms/card";
import { CtaBand } from "../../_components/CtaBand";
import { DemoNotice } from "../../_components/DemoNotice";
import { FilmCard } from "../../_components/FilmCard";
import { Grid, GridItem } from "../../_components/Grid";
import { SwissImage } from "../../_components/SwissImage";
import { films, getFilm, relatedFilms } from "../../_data/films";
import { screenings, screeningsForFilm } from "../../_data/screenings";
import { getVenue } from "../../_data/venues";
import styles from "./_page/film.module.css";
import { ScreeningPicker } from "./_page/ScreeningPicker";

export function generateStaticParams() {
  return films.map((film) => ({ slug: film.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const film = getFilm((await params).slug);
  if (!film) return { title: "Film not found — FRAME/01" };
  const screening = screeningsForFilm(film.slug)[0];
  const venue = screening ? getVenue(screening.venueSlug) : undefined;
  return {
    title: `${film.title} — ${film.category}, ${film.runtime} min · FRAME/01`,
    description: `${film.title}: ${film.category.toLowerCase()}, ${film.runtime} min. Screening ${screening?.dayLabel}, ${screening?.time} at ${venue?.name}. Language, access, and age guidance for this FRAME/01 demo listing.`,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const film = getFilm((await params).slug);
  if (!film) notFound();
  const filmScreenings = screeningsForFilm(film.slug);
  const venue = getVenue(film.venueSlug);
  return (
    <>
      <article>
        <header className={styles.header}>
          <Grid>
            <GridItem span={12}>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink render={<Link href="/program" />}>
                      Program
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{film.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </GridItem>
            <GridItem span={{ mobile: 4, tablet: 7, desktop: 8 }}>
              <p className={styles.index}>Film {film.index}</p>
              <h1>{film.title}</h1>
              <p className={styles.meta}>
                {film.category} · {film.runtime} min · {film.year} ·{" "}
                {film.country}
              </p>
              <p className={styles.synopsis}>{film.synopsis}</p>
            </GridItem>
          </Grid>
        </header>
        <section className={styles.media}>
          <Grid>
            <GridItem span={{ mobile: 4, tablet: 8, desktop: 9 }}>
              <SwissImage
                id={film.stills.lead}
                ratio="16:9"
                priority
                caption={
                  <>
                    Still from <em>{film.title}</em> (fictional demo film).
                  </>
                }
                sizes="(max-width: 1023px) 100vw, 75vw"
              />
            </GridItem>
            <GridItem span={{ mobile: 4, tablet: 8, desktop: 3 }}>
              <dl className={styles.facts}>
                {[
                  ["Director", film.director],
                  ["Language", film.language],
                  ["Subtitles", film.subtitles],
                  ["Runtime", `${film.runtime} min`],
                  ["Age guidance", film.ageGuidance],
                  ["Accessibility", film.accessibility],
                  ["Venue", venue?.name ?? film.venueSlug],
                  ["Address", film.address],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </GridItem>
          </Grid>
        </section>
        <section className={styles.screenings}>
          <Grid>
            <GridItem span={{ mobile: 4, tablet: 8, desktop: 10 }}>
              <h2>Screenings</h2>
              <ScreeningPicker screenings={filmScreenings} />
              <p className={styles.helper}>
                Demo screening. No ticket is issued.
              </p>
            </GridItem>
          </Grid>
        </section>
        <section className={styles.detail}>
          <Grid>
            <GridItem span={{ mobile: 4, tablet: 4, desktop: 4 }}>
              <SwissImage
                id={film.stills.detail}
                ratio="4:5"
                caption={
                  <>
                    Still from <em>{film.title}</em>.
                  </>
                }
                sizes="(max-width: 767px) 100vw, 33vw"
              />
            </GridItem>
            <GridItem
              start={{ desktop: 6 }}
              span={{ mobile: 4, tablet: 4, desktop: 6 }}
            >
              <div className={styles.detailCopy}>
                <p>{film.synopsis}</p>
                {film.shortsNote ? <p>{film.shortsNote}</p> : null}
                {film.talk ? <p>Filmmaker talk: {film.talk}</p> : null}
              </div>
            </GridItem>
          </Grid>
        </section>
        <section className={styles.more}>
          <Grid>
            <GridItem span={12}>
              <h2>Also in the program.</h2>
            </GridItem>
            {relatedFilms(film.slug).map((item) => (
              <GridItem
                key={item.slug}
                span={{ mobile: 4, tablet: 4, desktop: 6 }}
              >
                <Card className={styles.card}>
                  <FilmCard
                    film={item}
                    screening={screenings.find(
                      (screening) => screening.filmSlug === item.slug,
                    )}
                  />
                </Card>
              </GridItem>
            ))}
          </Grid>
        </section>
      </article>
      <CtaBand />
      <DemoNotice />
    </>
  );
}
