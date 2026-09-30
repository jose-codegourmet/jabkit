"use client";

import { useMemo, useState } from "react";
import { Button } from "@/atoms/button";
import { CtaBand } from "../../_components/CtaBand";
import { DemoNotice } from "../../_components/DemoNotice";
import { FilterToggleGroup } from "../../_components/FilterToggleGroup";
import { Grid, GridItem } from "../../_components/Grid";
import { PageHeader } from "../../_components/PageHeader";
import { StateMessage } from "../../_components/StateMessage";
import { StatusLabel } from "../../_components/StatusLabel";
import { SwissImage } from "../../_components/SwissImage";
import { filmCategories, filmHref, films } from "../../_data/films";
import { screenings } from "../../_data/screenings";
import { venues } from "../../_data/venues";
import styles from "./program.module.css";

const categories = [
  { value: "all", label: "All" },
  ...filmCategories.map((value) => ({ value, label: value })),
];
const sorts = [
  { value: "date", label: "Date" },
  { value: "title", label: "Title" },
  { value: "runtime", label: "Runtime" },
];

export function ProgramPage() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("date");
  const visible = useMemo(() => {
    const result =
      category === "all"
        ? [...films]
        : films.filter((film) => film.category === category);
    if (sort === "title") result.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "runtime") result.sort((a, b) => a.runtime - b.runtime);
    return result;
  }, [category, sort]);
  const clear = () => {
    setCategory("all");
    setSort("date");
  };
  return (
    <>
      <PageHeader
        index="01"
        title="Program"
        body="Every film in the festival, with the facts first. Open a film for language, access, and screenings."
        count="3 films · demo program"
      />
      <section className={styles.filters} aria-label="Program filters">
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 4, desktop: 6 }}>
            <FilterToggleGroup
              label="Category"
              options={categories}
              selected={[category]}
              onChange={(values) => setCategory(values.at(-1) ?? "all")}
            />
          </GridItem>
          <GridItem span={{ mobile: 4, tablet: 4, desktop: 6 }}>
            <FilterToggleGroup
              label="Sort by"
              options={sorts}
              selected={[sort]}
              onChange={(values) => setSort(values.at(-1) ?? "date")}
              clearSlot={
                <button className={styles.clear} type="button" onClick={clear}>
                  Clear filters
                </button>
              }
            />
          </GridItem>
        </Grid>
      </section>
      <section className={styles.list} aria-label="Films">
        <Grid>
          {visible.map((film) => {
            const screening = screenings.find(
              (item) => item.filmSlug === film.slug,
            );
            const venue = venues.find(
              (item) => item.slug === screening?.venueSlug,
            );
            return (
              <GridItem
                key={film.slug}
                span={{ mobile: 4, tablet: 8, desktop: 12 }}
              >
                <article className={styles.filmRow}>
                  <div className={styles.still}>
                    <SwissImage
                      id={film.stills.lead}
                      ratio="16:9"
                      sizes="(max-width: 1023px) 100vw, 25vw"
                    />
                  </div>
                  <div className={styles.index}>{film.index}</div>
                  <div className={styles.copy}>
                    <p className={styles.category}>{film.category}</p>
                    <h2>{film.title}</h2>
                    <p className={styles.meta}>
                      {film.runtime} min · {film.year} · {film.country}
                    </p>
                    <p>
                      {film.language} / {film.subtitles}
                    </p>
                    {screening ? (
                      <div className={styles.screening}>
                        <span>
                          {screening.dayLabel}, {screening.time} · {venue?.name}
                        </span>
                        <StatusLabel status={screening.status} />
                      </div>
                    ) : null}
                    <Button asChild variant="secondary">
                      <a href={filmHref(film.slug)}>View film</a>
                    </Button>
                  </div>
                </article>
              </GridItem>
            );
          })}
          {visible.length === 0 ? (
            <GridItem span={12}>
              <StateMessage
                state="empty"
                title="No films match these filters."
                body="Try another category or clear the filters."
                action={<Button onClick={clear}>Clear filters</Button>}
              />
            </GridItem>
          ) : null}
        </Grid>
      </section>
      <div className={styles.stateExamples} aria-hidden="true">
        <StateMessage state="loading" />
        <StateMessage
          state="error"
          title="The program didn't load."
          body="Check your connection and try again."
        />
      </div>
      <CtaBand />
      <DemoNotice />
    </>
  );
}
