import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { DemoBar } from "../components/DemoBar";
import { SampleScope } from "../components/samples/SampleScope";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { sampleImage } from "./_data/assets";
import { brand } from "./_data/site";
import styles from "./style.module.css";
import "./globals.css";

const symbol = sampleImage("cla-logo-symbol", "Pillo");

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: "%s — Pillo",
  },
  description: brand.promise,
  icons: { icon: symbol.src },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-jk-design-system="claymorphism"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jk-claymorphism-theme"
        >
          <SampleScope className={styles.site} system="claymorphism">
            <a className={styles.skip} href="#top">
              Skip to content
            </a>
            <SiteHeader />
            <main className={styles.main} id="top" tabIndex={-1}>
              {children}
            </main>
            <SiteFooter />
            <DemoBar brand="Pillo" />
          </SampleScope>
        </ThemeProvider>
      </body>
    </html>
  );
}
