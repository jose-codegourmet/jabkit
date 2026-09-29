import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { SampleScope } from "../components/samples/SampleScope";
import styles from "./style.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "NIGHTSHIFT", template: "%s | NIGHTSHIFT" },
  description: "NIGHTSHIFT, a fictional JabKit cybercore website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-jk-design-system="cybercore" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jk-cybercore-theme"
        >
          <SampleScope className={styles.site} system="cybercore">
            <a className="sr-only focus:not-sr-only" href="#top">
              Skip to content
            </a>
            {children}
          </SampleScope>
        </ThemeProvider>
      </body>
    </html>
  );
}
