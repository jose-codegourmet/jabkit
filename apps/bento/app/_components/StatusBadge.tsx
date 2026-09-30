import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { Badge } from "@/atoms/badge";
import { cn } from "@/lib/cn";
import { type BookingStatus, statusLabels } from "../_data/bookings";
import styles from "../style.module.css";

const icons = {
  "needs-reply": ExclamationTriangleIcon,
  confirmed: CheckCircledIcon,
  cancelled: CrossCircledIcon,
} satisfies Record<BookingStatus, unknown>;

/** Booking status: icon + text, so colour is never the only signal. */
export function StatusBadge({
  status,
  className,
}: {
  status: BookingStatus;
  className?: string;
}) {
  const Icon = icons[status];
  return (
    <Badge
      className={cn(styles.status, className)}
      data-status={status}
      variant="outline"
    >
      <Icon aria-hidden="true" />
      {statusLabels[status]}
    </Badge>
  );
}
