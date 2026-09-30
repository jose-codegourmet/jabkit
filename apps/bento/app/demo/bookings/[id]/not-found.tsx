import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { PortalPageHeader } from "../../../_components/PortalPageHeader";
import { bookingNotFound } from "./_page/content";
import styles from "./_page/detail.module.css";

/** Unknown booking id: rendered inside the portal shell with a way back. */
export default function BookingNotFound() {
  return (
    <div className={styles.notFound}>
      <PortalPageHeader
        className={styles.notFoundHeader}
        sub={bookingNotFound.body}
        title={bookingNotFound.title}
      />
      <Button asChild variant="secondary">
        <Link className={styles.backLink} href={bookingNotFound.link.href}>
          <ArrowLeftIcon aria-hidden="true" />
          {bookingNotFound.link.label}
        </Link>
      </Button>
    </div>
  );
}
