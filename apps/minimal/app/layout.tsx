import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { DemoBar } from "../components/DemoBar";
import { SampleScope } from "../components/samples/SampleScope";
import { MotionCanvas } from "./_components/MotionCanvas";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";
import styles from "./style.module.css";
import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "/assets/design-systems/minimal/min-logo-symbol.webp" },
  title: { default: "West Room Studio", template: "%s | West Room Studio" },
  description: "West Room Studio, a fictional JabKit minimal website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-jk-design-system="minimal" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jk-minimal-theme"
        >
          <SampleScope className={styles.site} system="minimal">
            <a className="sr-only focus:not-sr-only" href="#top">
              Skip to content
            </a>
            <SiteHeader />
            <MotionCanvas>{children}</MotionCanvas>
            <SiteFooter />
            <DemoBar brand="West Room Studio" />
          </SampleScope>
        </ThemeProvider>
      </body>
    </html>
  );
}
