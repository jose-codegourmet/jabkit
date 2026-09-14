"use client";

import type { Route } from "next";
import { useRouter } from "next/navigation";
import { type FormEvent, useId, useState, useTransition } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { filterArticles, storiesHref, topicLabels } from "../content";
import styles from "../style.module.css";
import type { TopicFilter } from "../types";
import { topicFilters } from "../types";

export function ArchiveControls({
  current,
  q,
}: {
  current: TopicFilter;
  q: string;
}) {
  const router = useRouter();
  const searchId = useId();
  const countId = `${searchId}-count`;
  const [value, setValue] = useState(q);
  const [isPending, startTransition] = useTransition();
  const count = filterArticles(current, value).length;

  function navigate(nextFilter: TopicFilter, nextQuery: string) {
    startTransition(() => {
      router.replace(storiesHref(nextFilter, nextQuery) as Route, {
        scroll: false,
      });
    });
  }

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(current, value);
  }

  const hasFilters = current !== "all" || value.trim() !== "";

  return (
    <div className="flex flex-col gap-4">
      <fieldset className="flex flex-wrap gap-2 border-0 p-0">
        <legend className="sr-only">Filter by topic</legend>
        {topicFilters.map((item) => {
          const selected = item === current;
          return (
            <Button
              key={item}
              asChild
              variant={selected ? "primary" : "secondary"}
              size="sm"
            >
              <a
                href={storiesHref(item, value)}
                aria-current={selected ? "page" : undefined}
              >
                {topicLabels[item]}
              </a>
            </Button>
          );
        })}
      </fieldset>
      <form className={styles.field} onSubmit={onSearch}>
        <Label htmlFor={searchId}>Search titles and standfirsts</Label>
        <Input
          id={searchId}
          name="q"
          value={value}
          aria-describedby={countId}
          autoComplete="off"
          onChange={(event) => {
            const next = event.target.value;
            setValue(next);
            navigate(current, next);
          }}
        />
      </form>
      <p
        className={`jk-caption ${styles.meta}`}
        id={countId}
        aria-live="polite"
      >
        {isPending ? "Updating. " : ""}
        {count} {count === 1 ? "story" : "stories"}
        {current === "all" ? "" : ` in ${topicLabels[current]}`}
        {value.trim() ? ` matching “${value.trim()}”` : ""}
      </p>
      {hasFilters ? (
        <div>
          <Button asChild variant="secondary" size="sm">
            <a href={storiesHref("all")}>Clear filters</a>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
