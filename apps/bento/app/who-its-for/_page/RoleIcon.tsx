import type { RoleId } from "./content";
import styles from "./who.module.css";

/** Code-drawn role icons. Decorative: the role heading beside each one names it. */
export function RoleIcon({ role }: { role: RoleId }) {
  return (
    <span className={styles.roleIcon}>
      <svg
        aria-hidden="true"
        fill="none"
        height="26"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
        viewBox="0 0 24 24"
        width="26"
      >
        {role === "owners" ? <OwnersGlyph /> : null}
        {role === "front-desk" ? <FrontDeskGlyph /> : null}
        {role === "team-leads" ? <TeamLeadsGlyph /> : null}
      </svg>
    </span>
  );
}

/** A four-tile overview with the one tile that needs you filled in. */
function OwnersGlyph() {
  return (
    <>
      <rect height="8" rx="2" width="8" x="3" y="3" />
      <rect
        className={styles.glyphFill}
        height="8"
        rx="2"
        width="8"
        x="13"
        y="3"
      />
      <rect height="8" rx="2" width="8" x="3" y="13" />
      <rect height="8" rx="2" width="8" x="13" y="13" />
    </>
  );
}

/** A calendar page with a confirmed check. */
function FrontDeskGlyph() {
  return (
    <>
      <rect height="16" rx="2.5" width="18" x="3" y="5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="m9 15.5 2 2 4-4" />
    </>
  );
}

/** A three-column task board, one card moving across. */
function TeamLeadsGlyph() {
  return (
    <>
      <path d="M3 4h18M3 20h18" />
      <rect height="5" rx="1.25" width="4.5" x="3" y="7" />
      <rect
        className={styles.glyphFill}
        height="5"
        rx="1.25"
        width="4.5"
        x="9.75"
        y="9.5"
      />
      <rect height="5" rx="1.25" width="4.5" x="16.5" y="7" />
      <rect height="4" rx="1.25" width="4.5" x="16.5" y="13.5" />
    </>
  );
}
