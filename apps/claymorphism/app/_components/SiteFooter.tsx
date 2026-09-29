import { footerColumns, legalLine, sampleNotice } from "../_data/site";
import styles from "../style.module.css";
import { ClayImage } from "./ClayImage";
import { PlaceholderText } from "./PlaceholderText";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const line = legalLine.replace("[Year]", String(year));

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          {footerColumns.map((column) =>
            column.id === "brand" ? (
              <div key={column.id}>
                <ClayImage
                  alt=""
                  className={styles.footerLogo}
                  decorative
                  id="cla-logo-symbol"
                />
                {column.text?.[0] ? (
                  <p className={styles.footerTagline}>{column.text[0]}</p>
                ) : null}
                {column.text?.[1] ? (
                  <p className={styles.footerPromise}>{column.text[1]}</p>
                ) : null}
              </div>
            ) : (
              <nav aria-label={column.title} key={column.id}>
                <h2 className={styles.footerHeading}>{column.title}</h2>
                <ul className={styles.footerList}>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ),
          )}
        </div>
        <p className={styles.legal}>
          <PlaceholderText text={line} />
        </p>
        <p className={styles.notice}>{sampleNotice}</p>
      </div>
    </footer>
  );
}
