"use client";

import type { Route } from "next";
import { useRouter } from "next/navigation";
import { type FormEvent, useId, useState, useTransition } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { collectionsHref, filterCollections, tagLabels } from "../content";
import styles from "../style.module.css";
import type { CollectionTag, TagFilter } from "../types";
import { collectionTags } from "../types";

export function CollectionControls({
  current,
  q,
}: {
  current: TagFilter;
  q: string;
}) {
  const router = useRouter();
  const searchId = useId();
  const countId = `${searchId}-count`;
  const [value, setValue] = useState(q);
  const [isPending, startTransition] = useTransition();
  const count = filterCollections(current, value).length;

  function navigate(nextFilter: TagFilter, nextQuery: string) {
    startTransition(() => {
      router.replace(collectionsHref(nextFilter, nextQuery) as Route, {
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
        <legend className="sr-only">Filter by tag</legend>
        <Button
          asChild
          variant={current === "all" ? "primary" : "secondary"}
          size="sm"
        >
          <a
            href={collectionsHref("all", value)}
            aria-current={current === "all" ? "page" : undefined}
          >
            All tags
          </a>
        </Button>
        {collectionTags.map((tag: CollectionTag) => {
          const selected = current === tag;
          return (
            <Button
              key={tag}
              asChild
              variant={selected ? "primary" : "secondary"}
              size="sm"
            >
              <a
                href={collectionsHref(tag, value)}
                aria-current={selected ? "page" : undefined}
              >
                {tagLabels[tag]}
              </a>
            </Button>
          );
        })}
      </fieldset>
      <form className={styles.field} onSubmit={onSearch}>
        <Label htmlFor={searchId}>Search titles, themes, and tags</Label>
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
        {count} {count === 1 ? "collection" : "collections"}
        {current === "all" ? "" : ` tagged ${tagLabels[current]}`}
        {value.trim() ? ` matching “${value.trim()}”` : ""}. Three packs in
        total, not a marketplace.
      </p>
      {hasFilters ? (
        <div>
          <Button asChild variant="secondary" size="sm">
            <a href={collectionsHref("all")}>Reset filters</a>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
