import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { SampleScope } from "../components/samples/SampleScope";
import styles from "./style.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "AER FORM", template: "%s | AER FORM" },
  description: "AER FORM, a fictional JabKit glassmorphism website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-jk-design-system="glassmorphism"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jk-glassmorphism-theme"
        >
          <SampleScope className={styles.site} system="glassmorphism">
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
