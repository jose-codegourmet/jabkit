import type { ReactNode } from "react";
import styles from "../style.module.css";

export type DemoFormNoticeProps = {
  children: ReactNode;
};

export function DemoFormNotice({ children }: DemoFormNoticeProps) {
  return (
    <p className={styles.demoNotice} role="note">
      {children}
    </p>
  );
}
