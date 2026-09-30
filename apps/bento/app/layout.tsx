import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { DemoBar } from "../components/DemoBar";
import { SampleScope } from "../components/samples/SampleScope";
import { MarketingFrame } from "./_components/MarketingFrame";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";
import { brand } from "./_data/site";
import styles from "./style.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${brand.name} — The whole day, in view`, template: "%s" },
  description:
    "A shared portal for small service businesses: today's bookings, tasks, follow-ups and weekly visits on one screen. Request a walkthrough.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-jk-design-system="bento" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jk-bento-theme"
        >
          <SampleScope className={styles.site} system="bento">
            <a className={styles.skip} href="#top">
              Skip to content
            </a>
            <MarketingFrame footer={<SiteFooter />} header={<SiteHeader />}>
              {children}
            </MarketingFrame>
            <DemoBar brand={brand.name} />
          </SampleScope>
        </ThemeProvider>
      </body>
    </html>
  );
}
