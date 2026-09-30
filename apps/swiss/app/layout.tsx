import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { DemoBar } from "../components/DemoBar";
import { SampleScope } from "../components/samples/SampleScope";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import styles from "./style.module.css";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/assets/design-systems/swiss/swi-logo-symbol.webp",
    apple: "/assets/design-systems/swiss/swi-apple-touch-icon-180.png",
  },
  title: {
    default: "FRAME/01 Film Festival — Cinema, clearly seen.",
    template: "%s",
  },
  description:
    "Four days of independent films and conversations at the fictional FRAME/01 Film Festival.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-jk-design-system="swiss" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jk-swiss-theme"
        >
          <SampleScope className={styles.site} system="swiss">
            <a className={styles.skipLink} href="#top">
              Skip to content
            </a>
            <SiteHeader />
            <main id="top" className={styles.main}>
              {children}
            </main>
            <SiteFooter />
            <DemoBar brand="FRAME/01" />
          </SampleScope>
        </ThemeProvider>
      </body>
    </html>
  );
}
