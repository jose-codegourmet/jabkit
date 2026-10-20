"use client";

import type { Route } from "next";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { ActCard } from "../_components/ActCard";
import { useMotionPreference } from "../_components/useMotionPreference";
import type { Artist } from "../_data/artists";
import shared from "../style.module.css";
import styles from "./home.module.css";

type Range = {
  first: number;
  last: number;
  atStart: boolean;
  atEnd: boolean;
};

export type LineupCarouselProps = {
  artists: readonly Artist[];
  label: string;
  previousLabel: string;
  nextLabel: string;
  listView: { label: string; href: string };
};

/**
 * Adapts @/marketing/carousel-cards: a scroll-snap rail of ActCards with
 * labelled Previous/Next buttons. Nothing autoplays; scrolling is instant
 * unless motion is playing. The rail scrolls inside its own container.
 */
export function LineupCarousel({
  artists,
  label,
  previousLabel,
  nextLabel,
  listView,
}: LineupCarouselProps) {
  const trackId = useId();
  const trackRef = useRef<HTMLUListElement>(null);
  const announceNext = useRef(false);
  const settleTimer = useRef<number | undefined>(undefined);
  const { playing } = useMotionPreference();
  const [range, setRange] = useState<Range | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const total = artists.length;

  const measure = useCallback((): Range | null => {
    const track = trackRef.current;
    if (!track) return null;
    const left = track.scrollLeft;
    const right = left + track.clientWidth;
    let first = -1;
    let last = -1;
    Array.from(track.children).forEach((child, index) => {
      const item = child as HTMLElement;
      const center = item.offsetLeft + item.offsetWidth / 2;
      if (center >= left && center <= right) {
        if (first === -1) first = index;
        last = index;
      }
    });
    if (first === -1) {
      first = 0;
      last = 0;
    }
    return {
      first,
      last,
      atStart: left <= 2,
      atEnd: left + track.clientWidth >= track.scrollWidth - 2,
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => setRange(measure());
    const onScroll = () => {
      window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(() => {
        const next = measure();
        setRange(next);
        if (announceNext.current && next) {
          announceNext.current = false;
          setAnnouncement(
            `Showing acts ${next.first + 1} to ${next.last + 1} of ${total}`,
          );
        }
      }, 120);
    };

    update();
    track.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      window.clearTimeout(settleTimer.current);
      track.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [measure, total]);

  const step = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track || !range) return;
    if ((direction === -1 && range.atStart) || (direction === 1 && range.atEnd))
      return;
    announceNext.current = true;
    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: playing ? "smooth" : "auto",
    });
  };

  const atStart = range?.atStart ?? true;
  const atEnd = range?.atEnd ?? false;

  return (
    <section
      aria-label={label}
      aria-roledescription="carousel"
      className={styles.carousel}
    >
      <div className={styles.carouselBar}>
        <div className={styles.carouselButtons}>
          <Button
            aria-controls={trackId}
            aria-disabled={atStart}
            onClick={() => step(-1)}
            size="sm"
            variant="secondary"
          >
            <span aria-hidden="true">←</span>
            {previousLabel}
          </Button>
          <Button
            aria-controls={trackId}
            aria-disabled={atEnd}
            onClick={() => step(1)}
            size="sm"
            variant="secondary"
          >
            {nextLabel}
            <span aria-hidden="true">→</span>
          </Button>
          {range ? (
            <p aria-hidden="true" className={styles.carouselCount}>
              {range.first + 1}–{range.last + 1} / {total}
            </p>
          ) : null}
        </div>
        <Link className={shared.textLinkOnDark} href={listView.href as Route}>
          {listView.label}
        </Link>
      </div>
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      <ul className={styles.carouselTrack} id={trackId}>
        {artists.map((artist, index) => (
          <li className={styles.carouselItem} key={artist.slug}>
            <ActCard
              artist={artist}
              headingLevel="h3"
              tilt={index % 2 === 0 ? -1 : 1}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
