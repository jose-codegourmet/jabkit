import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { DemoBar } from "../components/DemoBar";
import { SampleScope } from "../components/samples/SampleScope";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";
import styles from "./style.module.css";
import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "/assets/design-systems/luxury/lux-logo-symbol.webp" },
  title: { default: "Stillwater House", template: "%s | Stillwater House" },
  description: "Stillwater House, a fictional JabKit luxury website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-jk-design-system="luxury" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jk-luxury-theme"
        >
          <SampleScope className={styles.site} system="luxury">
            <a className="sr-only focus:not-sr-only" href="#top">
              Skip to content
            </a>
            <SiteHeader />
            {children}
            <SiteFooter />
            <DemoBar brand="Stillwater House" />
          </SampleScope>
        </ThemeProvider>
      </body>
    </html>
  );
}
