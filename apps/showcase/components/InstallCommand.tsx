"use client";

import { CommandBox, type CommandOption } from "./CommandBox";

export function installOptions(name: string): CommandOption[] {
  return [
    { id: "npx", label: "npx", command: `npx jabkit add ${name}` },
    { id: "pnpm", label: "pnpm dlx", command: `pnpm dlx jabkit add ${name}` },
    { id: "bunx", label: "bunx", command: `bunx jabkit add ${name}` },
  ];
}

export function InstallCommand({
  name,
  size,
  className,
}: {
  name: string;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <CommandBox
      options={installOptions(name)}
      label="Install command"
      size={size}
      className={className}
    />
  );
}
