import type { Route } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { brand, footerColumns, legalLine, ticketsNavItem } from "../_data/site";
import nav from "../navigation.module.css";
import { DemoNotice } from "./DemoNotice";
import { MotionToggle } from "./MotionToggle";
import { Placeholder } from "./Placeholder";
import { DesktopNav, FooterDemoStrip, MobileMenu } from "./SiteNavigation";
import { LogoSymbol, Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    <header className={nav.header}>
      <div className={nav.bar}>
        <Link aria-label="FULL VOLUME home" className={nav.home} href="/">
          <Wordmark priority surface="dark" />
        </Link>
        <DesktopNav />
        <div className={nav.actions}>
          <Button asChild className={nav.tickets}>
            <Link href={ticketsNavItem.href as Route}>
              {ticketsNavItem.label}
            </Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <div data-max-inert-when-menu>
      <FooterDemoStrip />
      <footer className={nav.footer}>
        <div className={nav.footerInner}>
          <div className={nav.footerBrand}>
            <div className={nav.footerLockup}>
              <LogoSymbol className={nav.footerSymbol} />
              <Wordmark surface="dark" />
            </div>
            <p className={nav.footerKicker}>{brand.kicker}</p>
          </div>
          <div className={nav.footerColumns}>
            {footerColumns.map((column) => (
              <section
                aria-labelledby={`footer-${column.id}`}
                className={nav.footerColumn}
                key={column.id}
              >
                <h2 className={nav.footerHeading} id={`footer-${column.id}`}>
                  {column.title}
                </h2>
                <ul className={nav.footerList}>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className={nav.footerLink}
                        href={link.href as Route}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {column.notes?.map((note) => (
                    <li className={nav.footerNote} key={note}>
                      <Placeholder text={note} />
                    </li>
                  ))}
                  {column.motionToggle ? (
                    <li>
                      <MotionToggle />
                    </li>
                  ) : null}
                </ul>
              </section>
            ))}
          </div>
          <div className={nav.footerBase}>
            <p className={nav.footerLegal}>
              <Placeholder text={legalLine} />
            </p>
            <DemoNotice className={nav.footerShort} variant="short" />
          </div>
        </div>
      </footer>
    </div>
  );
}
