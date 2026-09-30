import {
  statusMeta,
  type TicketStatus,
  ticketStatusNote,
} from "../_data/screenings";
import styles from "../style.module.css";

export function StatusLabel({ status }: { status: TicketStatus }) {
  const meta = statusMeta[status];
  return (
    <span className={styles.status} data-status={status}>
      <span className={styles.statusGlyph} aria-hidden="true">
        {meta.glyph}
      </span>
      {meta.label}
    </span>
  );
}

export function StatusLegend() {
  return (
    <section
      className={styles.statusLegend}
      aria-labelledby="ticket-status-title"
    >
      <h3 id="ticket-status-title">Ticket status</h3>
      <ul className={styles.statusList}>
        {(Object.keys(statusMeta) as TicketStatus[]).map((status) => (
          <li key={status}>
            <StatusLabel status={status} />
          </li>
        ))}
      </ul>
      <p>{ticketStatusNote}</p>
    </section>
  );
}
