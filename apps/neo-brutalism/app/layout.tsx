import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { DemoBar } from "../components/DemoBar";
import { SampleScope } from "../components/samples/SampleScope";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";
import styles from "./style.module.css";
import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "/assets/design-systems/neo-brutalism/neo-logo-symbol.webp" },
  title: { default: "Good Noise", template: "%s | Good Noise" },
  description: "Good Noise, a fictional JabKit neo-brutalism website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-jk-design-system="neo-brutalism"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jk-neo-brutalism-theme"
        >
          <SampleScope className={styles.site} system="neo-brutalism">
            <a className="sr-only focus:not-sr-only" href="#top">
              Skip to content
            </a>
            <SiteHeader />
            {children}
            <SiteFooter />
            <DemoBar brand="Good Noise" />
          </SampleScope>
        </ThemeProvider>
      </body>
    </html>
  );
}
