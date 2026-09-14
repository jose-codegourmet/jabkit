"use client";

import { useState } from "react";
import { Button } from "@/atoms/button";

export function VisitFavorites({
  records,
}: {
  records: readonly { id: string; title: string }[];
}) {
  const [kept, setKept] = useState<Set<string>>(() => new Set());

  return (
    <ul className="grid gap-2">
      {records.map((record) => {
        const isKept = kept.has(record.id);
        return (
          <li
            key={record.id}
            className="flex flex-wrap items-center justify-between gap-3"
          >
            <span className="text-sm">{record.title}</span>
            <Button
              type="button"
              size="sm"
              variant={isKept ? "secondary" : "ghost"}
              onClick={() => {
                setKept((current) => {
                  const next = new Set(current);
                  if (next.has(record.id)) next.delete(record.id);
                  else next.add(record.id);
                  return next;
                });
              }}
            >
              {isKept ? "Remove this visit" : "Keep this visit"}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
