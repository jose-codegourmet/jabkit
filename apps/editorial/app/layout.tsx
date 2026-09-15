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
  icons: { icon: "/assets/design-systems/editorial/edt-logo-symbol.webp" },
  title: { default: "Common Hours", template: "%s | Common Hours" },
  description: "Common Hours, a fictional JabKit editorial website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-jk-design-system="editorial" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jk-editorial-theme"
        >
          <SampleScope className={styles.site} system="editorial">
            <a className="sr-only focus:not-sr-only" href="#top">
              Skip to content
            </a>
            <SiteHeader />
            <MotionCanvas>{children}</MotionCanvas>
            <SiteFooter />
            <DemoBar brand="Common Hours" />
          </SampleScope>
        </ThemeProvider>
      </body>
    </html>
  );
}
