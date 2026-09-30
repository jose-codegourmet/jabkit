import { CheckIcon } from "@radix-ui/react-icons";
import { bookableStaff, type StaffId } from "../../../_data/staff";
import styles from "./calendar.module.css";
import { calendarGrid } from "./content";

/**
 * Staff filter chips (toggle buttons). The last chip still on cannot be
 * turned off, so the calendar never shows an unexplained blank grid.
 */
export function StaffFilter({
  active,
  onToggle,
}: {
  active: readonly StaffId[];
  onToggle: (id: StaffId) => void;
}) {
  return (
    <fieldset className={styles.staffFilter}>
      <legend className={styles.staffLegend}>{calendarGrid.staffLabel}</legend>
      <div className={styles.chips}>
        {bookableStaff.map((person) => {
          const pressed = active.includes(person.id);
          const locked = pressed && active.length === 1;
          return (
            <button
              aria-disabled={locked || undefined}
              aria-pressed={pressed}
              className={styles.chip}
              data-staff={person.id}
              key={person.id}
              onClick={() => {
                if (!locked) onToggle(person.id);
              }}
              type="button"
            >
              {pressed ? (
                <CheckIcon aria-hidden="true" className={styles.chipIcon} />
              ) : (
                <span aria-hidden="true" className={styles.chipDot} />
              )}
              {person.name}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
