"use client";

import { useId, useState } from "react";
import { CarouselCards } from "@/marketing/carousel-cards";
import { rooms } from "../content";
import styles from "../style.module.css";
import { sampleRoot } from "../types";
import { toCarouselItems } from "./adapters";

export function RoomCarousel() {
  const statusId = useId();
  const [saved, setSaved] = useState<Set<string>>(() => new Set());
  const items = toCarouselItems(rooms);

  return (
    <div>
      <p id={statusId} className="sr-only" role="status" aria-live="polite">
        {saved.size === 0
          ? "No rooms saved on this visit."
          : `${saved.size} rooms saved for this visit only.`}
      </p>
      <CarouselCards
        eyebrow=""
        heading="Find your room"
        description="Three different outlooks, one quiet house. Explore the rooms and save your favorites for this visit."
        viewAllHref={`${sampleRoot}rooms`}
        viewAllLabel="Compare rooms"
        items={items}
        priceUnit="night"
        onFavoriteChange={(id, favorited) => {
          setSaved((current) => {
            const next = new Set(current);
            if (favorited) next.add(id);
            else next.delete(id);
            return next;
          });
        }}
      />
      <p className={`jk-caption ${styles.meta} ${styles.frame}`}>
        Illustrative rates. Saved rooms stay in this tab; no reservation is
        made.
      </p>
    </div>
  );
}
