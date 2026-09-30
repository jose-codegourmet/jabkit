import Link from "next/link";
import { cn } from "@/lib/cn";
import { brand, footerColumns, footerLegal } from "../_data/site";
import navStyles from "../navigation.module.css";
import styles from "../style.module.css";
import { DemoNotice } from "./DemoNotice";
import { Logo } from "./Logo";
import { WithPlaceholders } from "./Placeholder";
import { SiteNavigation } from "./SiteNavigation";

/** Marketing header: chalk background, 1px cool-gray rule, no shadow. */
export function SiteHeader() {
  return (
    <header className={navStyles.header}>
      <div className={cn(styles.container, navStyles.bar)}>
        <Logo />
        <SiteNavigation />
      </div>
    </header>
  );
}

export function SiteFooter({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const legalLinks = footerLegal.links.map((link) => (
    <Link href={link.href} key={link.href}>
      {link.label}
    </Link>
  ));

  if (variant === "compact") {
    return (
      <footer className={styles.footerCompact}>
        <div className={cn(styles.container, styles.footerCompactInner)}>
          <Logo size="sm" />
          <p className={styles.legalRow}>
            <span>
              <WithPlaceholders text={footerLegal.copyright} />
            </span>
            {legalLinks}
          </p>
          <DemoNotice variant="footer" />
        </div>
      </footer>
    );
  }

  return (
    <footer className={styles.footer}>
      <div className={cn(styles.container, styles.footerInner)}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Logo />
            <p>{brand.tagline}</p>
          </div>
          <div className={styles.footerColumns}>
            {footerColumns.map((column) => (
              <nav
                aria-labelledby={`footer-${column.title}`}
                className={styles.footerColumn}
                key={column.title}
              >
                <h2 id={`footer-${column.title}`}>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
                {column.notes?.map((note) => (
                  <p className={styles.footerNote} key={note}>
                    <WithPlaceholders text={note} />
                  </p>
                ))}
              </nav>
            ))}
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.legalRow}>
            <span>
              <WithPlaceholders text={footerLegal.copyright} />
            </span>
            {legalLinks}
          </p>
          <DemoNotice variant="footer" />
        </div>
      </div>
    </footer>
  );
}
