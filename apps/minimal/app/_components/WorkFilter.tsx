import { Button } from "@/atoms/button";
import { disciplineLabel, filterProjects, workHref } from "../content";
import styles from "../style.module.css";
import type { DisciplineFilter } from "../types";
import { disciplineFilters } from "../types";

const labels: Record<DisciplineFilter, string> = {
  all: "All",
  residential: "Residential",
  workspace: "Workspace",
  retail: "Retail",
};

export function WorkFilter({ current }: { current: DisciplineFilter }) {
  const selected = current;
  const count = filterProjects(selected).length;

  return (
    <div className="flex flex-col gap-4">
      <fieldset className="flex flex-wrap gap-2 border-0 p-0">
        <legend className="sr-only">Filter by discipline</legend>
        {disciplineFilters.map((value) => {
          const selectedFilter = value === selected;
          return (
            <Button
              key={value}
              asChild
              variant={selectedFilter ? "primary" : "secondary"}
              size="sm"
            >
              <a
                href={workHref(value)}
                aria-current={selectedFilter ? "page" : undefined}
              >
                {labels[value]}
              </a>
            </Button>
          );
        })}
      </fieldset>
      <p className={`jk-caption ${styles.meta}`}>
        {count} {count === 1 ? "project" : "projects"}
        {selected === "all" ? "" : ` in ${disciplineLabel(selected)}`}
      </p>
    </div>
  );
}
