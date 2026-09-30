import { InfoCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { demoNotice } from "../_data/site";
import styles from "../style.module.css";

export type DemoNoticeProps =
  | { variant: "footer"; className?: string }
  | { variant: "strip"; className?: string }
  | { variant: "inline"; children: ReactNode; className?: string };

export function DemoNotice(props: DemoNoticeProps) {
  if (props.variant === "strip") {
    return (
      <div className={cn(styles.strip, props.className)} role="note">
        <p>{demoNotice.strip}</p>
        <Link href={demoNotice.stripLink.href}>
          {demoNotice.stripLink.label}
        </Link>
      </div>
    );
  }

  if (props.variant === "inline") {
    return (
      <p className={cn(styles.noticeInline, props.className)}>
        {props.children}
      </p>
    );
  }

  return (
    <p className={cn(styles.noticeFooter, props.className)}>
      <InfoCircledIcon aria-hidden="true" />
      {demoNotice.footer}
    </p>
  );
}
