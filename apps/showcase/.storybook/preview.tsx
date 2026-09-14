import type { Preview } from "@storybook/nextjs-vite";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";
import "./preview.css";

const processShim = globalThis as typeof globalThis & {
  process?: { cwd?: () => string };
};
processShim.process = {
  ...processShim.process,
  cwd: () => "/storybook-cwd",
};

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

function ThemeSync({ theme }: { theme: string }) {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme(theme);
  }, [setTheme, theme]);
  return null;
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark", "system"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [
    (Story, { globals }) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ThemeSync theme={String(globals.theme ?? "light")} />
        <div
          className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
