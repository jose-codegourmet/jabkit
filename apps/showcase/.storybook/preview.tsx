import type { Preview } from "@storybook/nextjs-vite";
import {
  Courier_Prime,
  Geist,
  Geist_Mono,
  Josefin_Sans,
  Yellowtail,
  Young_Serif,
} from "next/font/google";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useRef } from "react";
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

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young-serif",
  display: "swap",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-josefin-sans",
  display: "swap",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
  display: "swap",
});

const fontVariables = [
  geistSans,
  geistMono,
  youngSerif,
  josefinSans,
  yellowtail,
  courierPrime,
]
  .map((font) => font.variable)
  .join(" ");

/** Applies the toolbar theme only when it changes, so stories can switch it. */
function ThemeSync({ theme }: { theme: string }) {
  const { setTheme } = useTheme();
  const setThemeRef = useRef(setTheme);
  setThemeRef.current = setTheme;
  useEffect(() => {
    setThemeRef.current(theme);
  }, [theme]);
  return null;
}

const preview: Preview = {
  parameters: {
    // Showcase chrome is Vaudeville (`.vd`). Set `vaudeville: false` to render
    // a story on the library's default tokens instead.
    vaudeville: true,
    nextjs: { appDirectory: true },
  },
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
    (Story, { globals, parameters }) => {
      useEffect(() => {
        document.documentElement.classList.add(...fontVariables.split(" "));
      }, []);
      return (
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSync theme={String(globals.theme ?? "light")} />
          <div
            className={`${fontVariables} ${parameters.vaudeville === false ? "bg-background font-sans text-foreground" : "vd"} antialiased`}
          >
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
