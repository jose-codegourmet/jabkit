import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { DemoBar } from "../components/DemoBar";
import { SampleScope } from "../components/samples/SampleScope";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";
import styles from "./style.module.css";
import "./globals.css";

/** Favicon derived in code from the knob symbol: ink knob, pink pointer, two arcs on lime. */
const favicon = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#D5F150"/><circle cx="13" cy="18" r="8.5" fill="#171327"/><path d="M13 18l5.2-5.2" stroke="#F647A4" stroke-width="3" stroke-linecap="round"/><path d="M23 9.5c1.8 1.8 2.8 4.2 2.8 6.8M25.8 5.6c2.8 2.8 4.3 6.5 4.3 10.4" fill="none" stroke="#171327" stroke-width="2.4" stroke-linecap="round"/></svg>',
)}`;

export const metadata: Metadata = {
  title: {
    default: "FULL VOLUME — Two days, four stages, one very loud weekend",
    template: "%s",
  },
  description:
    "FULL VOLUME is a two-day independent music and visual arts festival. Explore the lineup, plan your sets, and choose your ticket.",
  icons: { icon: favicon },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-jk-design-system="maximalism" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jk-maximalism-theme"
        >
          <SampleScope className={styles.site} system="maximalism">
            <a className={styles.skipLink} href="#top">
              Skip to content
            </a>
            <SiteHeader />
            <main
              className={styles.main}
              data-max-inert-when-menu
              id="top"
              tabIndex={-1}
            >
              {children}
            </main>
            <SiteFooter />
            <DemoBar brand="FULL VOLUME" />
          </SampleScope>
        </ThemeProvider>
      </body>
    </html>
  );
}
