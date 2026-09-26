"use client";

import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const modes = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "system", label: "System", Icon: DesktopIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <fieldset
      className="flex items-center gap-1 rounded-full border-2 border-ink bg-card p-1 shadow-[2px_2px_0_var(--vd-shadow)]"
      aria-label="Theme preference"
    >
      <legend className="sr-only">Theme preference</legend>
      {modes.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          aria-pressed={mounted && theme === value}
          onClick={() => setTheme(value)}
          className={`grid size-7 place-items-center rounded-full transition ${mounted && theme === value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
        >
          <Icon />
        </button>
      ))}
    </fieldset>
  );
}
