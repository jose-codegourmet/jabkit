"use client";

import Link from "next/link";
import { Button } from "@/atoms/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/atoms/data-table";
import { filmHref, films } from "../_data/films";
import { checkoutHref, type Screening } from "../_data/screenings";
import { venues } from "../_data/venues";
import styles from "../style.module.css";
import { StatusLabel } from "./StatusLabel";

export function ScreeningTable({
  screenings,
  caption = "FRAME/01 festival screening schedule",
  interactive = false,
  selectedId,
  onSelect,
}: {
  screenings: Screening[];
  caption?: string;
  interactive?: boolean;
  selectedId?: string;
  onSelect?: (screening: Screening) => void;
}) {
  return (
    <div className={styles.screeningTable}>
      <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Film</TableHead>
            <TableHead>Venue</TableHead>
            <TableHead>Status</TableHead>
            {interactive ? (
              <TableHead>
                <span className="sr-only">Action</span>
              </TableHead>
            ) : null}
          </TableRow>
        </TableHeader>
        <TableBody>
          {screenings.map((screening) => {
            const film = films.find((item) => item.slug === screening.filmSlug);
            const venue = venues.find(
              (item) => item.slug === screening.venueSlug,
            );
            const selected = selectedId === screening.id;
            const available =
              screening.status === "available" ||
              screening.status === "few-left";
            return (
              <TableRow
                key={screening.id}
                data-state={selected ? "selected" : undefined}
                className={selected ? styles.selectedRow : undefined}
              >
                <TableCell>{screening.dayLabel}</TableCell>
                <TableCell>{screening.time}</TableCell>
                <TableCell>
                  {film ? (
                    <Link href={filmHref(film.slug)}>{film.title}</Link>
                  ) : (
                    screening.filmSlug
                  )}
                </TableCell>
                <TableCell>{venue?.name ?? screening.venueSlug}</TableCell>
                <TableCell>
                  <StatusLabel status={screening.status} />
                </TableCell>
                {interactive ? (
                  <TableCell>
                    {onSelect ? (
                      <Button
                        variant={selected ? "primary" : "secondary"}
                        size="sm"
                        disabled={!available}
                        onClick={() => onSelect(screening)}
                      >
                        {selected ? "Selected" : "Select"}
                      </Button>
                    ) : (
                      <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        disabled={!available}
                      >
                        {available ? (
                          <Link
                            href={checkoutHref({ screening: screening.id })}
                          >
                            Select
                          </Link>
                        ) : (
                          <span>Unavailable</span>
                        )}
                      </Button>
                    )}
                  </TableCell>
                ) : null}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
