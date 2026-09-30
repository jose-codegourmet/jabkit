import type { Route } from "next";
import Link from "next/link";
import { FooterColumn } from "@/marketing/footer-column";
import { sampleImage } from "../_data/assets";
import {
  cityPlaceholder,
  demoNotice,
  festivalDatesPlaceholder,
  footerColumns,
  legalLinks,
  tagline,
} from "../_data/site";
import styles from "../style.module.css";

export function SiteFooter() {
  const wordmark = sampleImage("swi-logo-wordmark");
  return (
    <div className={styles.footer}>
      <FooterColumn
        className={styles.footerColumn}
        brandName=""
        brandHref="/"
        logoSrc={wordmark.src}
        logoAlt="FRAME/01 home"
        description={`${tagline} ${festivalDatesPlaceholder} · ${cityPlaceholder}`}
        socialLinks={[]}
        aboutTitle={footerColumns[0].title}
        aboutLinks={footerColumns[0].links}
        servicesTitle={footerColumns[1].title}
        serviceLinks={footerColumns[1].links}
        helpTitle={footerColumns[2].title}
        helpLinks={footerColumns[2].links.map((link, index) =>
          index === 2 ? { ...link, label: `Social: ${link.label}` } : link,
        )}
        contactTitle=""
        contactItems={[]}
        copyright=""
        rightsLabel=""
      />
      <div className={styles.footerLegal}>
        <p>© [Year] FRAME/01 Film Festival.</p>
        <nav aria-label="Legal">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href as Route}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className={styles.footerNotice}>{demoNotice}</p>
      </div>
    </div>
  );
}
