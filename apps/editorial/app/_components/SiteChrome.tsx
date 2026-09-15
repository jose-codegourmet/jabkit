"use client";
import { catalogueUrl } from "../../lib/catalogue";
import { brand, demoNote, navItems } from "../content";
import styles from "../style.module.css";
import { sampleRoot } from "../types";

export { SiteHeader } from "./SiteNavigation";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.frame}>
        <div className={styles.footerBrandRow}>
          <a href={sampleRoot} aria-label={brand.name}>
            <img
              src="/assets/design-systems/editorial/edt-logo-symbol.webp"
              alt=""
              width={64}
              height={64}
              className={styles.footerSymbol}
            />
          </a>
          <p className={styles.footerMotto}>A little more attention.</p>
        </div>
        <div className={styles.footerBottom}>
          <p className="jk-caption">
            Common Hours
            <br />
            An independent journal
          </p>
          <nav className={styles.footerNav} aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.href} className={styles.navLink} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <p className={styles.footerDisclosure}>
          {demoNote}{" "}
          <a href={`${catalogueUrl}/design-systems`}>A JabKit design system</a>.
        </p>
      </div>
    </footer>
  );
}
