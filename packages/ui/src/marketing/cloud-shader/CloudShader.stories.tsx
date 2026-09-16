import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CloudShader } from "./CloudShader";
import { cloudShaderHero, cloudShaderMocks } from "./CloudShader.mocks";

const meta = {
  title: "Marketing/CloudShader",
  component: CloudShader,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CloudShader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...cloudShaderMocks.default },
  render: () => (
    <CloudShader className="min-h-dvh" {...cloudShaderMocks.default}>
      <div className="flex min-h-dvh w-full flex-col px-4 py-4 md:px-8">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/90 text-sm font-bold text-sky-700 shadow-sm">
              {cloudShaderHero.mark}
            </div>
            <span className="text-lg font-semibold tracking-tight text-white drop-shadow-sm">
              {cloudShaderHero.brand.label}
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
            {cloudShaderHero.navItems.map((item) => (
              <a
                className="transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              className="hidden text-sm font-medium text-white/90 transition hover:text-white sm:block"
              href={cloudShaderHero.signIn.href}
            >
              {cloudShaderHero.signIn.label}
            </a>
            <a
              className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-sky-700 shadow-md transition hover:bg-white/90"
              href={cloudShaderHero.headerAction.href}
            >
              {cloudShaderHero.headerAction.label}
            </a>
          </div>
        </nav>
        <div className="mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center pt-12 text-center md:pt-20">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-6xl lg:text-7xl">
            Banking above <br className="hidden md:block" /> the clouds
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/90 drop-shadow-sm md:text-lg">
            {cloudShaderHero.description}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-sky-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
              href={cloudShaderHero.primaryAction.href}
            >
              {cloudShaderHero.primaryAction.label}
            </a>
            <a
              className="rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              href={cloudShaderHero.secondaryAction.href}
            >
              {cloudShaderHero.secondaryAction.label}
            </a>
          </div>
          <p className="mt-4 text-xs text-white/70">{cloudShaderHero.helper}</p>
        </div>
        <div className="mx-auto mt-12 w-full max-w-6xl pb-4 md:mt-16">
          <div className="overflow-hidden rounded-xl border border-white/30 bg-white/20 p-2 shadow-2xl backdrop-blur-md md:rounded-[2rem] md:p-3">
            <div className="overflow-hidden rounded-xl border border-foreground/5 bg-card text-card-foreground md:rounded-3xl">
              <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
                <p className="text-sm font-semibold tracking-[-0.03em]">
                  Altitude ledger
                </p>
                <p className="text-xs text-muted-foreground">Live close</p>
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-6">
                {cloudShaderHero.metrics.map((metric) => (
                  <div
                    className="rounded-2xl border border-border bg-muted/40 px-4 py-3"
                    key={metric.label}
                  >
                    <p className="text-xs text-muted-foreground">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-xl font-semibold tracking-[-0.04em]">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-primary">
                      {metric.delta}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex h-28 items-end gap-1.5 px-4 pb-5 sm:h-36 sm:px-6">
                {[
                  { id: "m1", value: 38 },
                  { id: "m2", value: 52 },
                  { id: "m3", value: 46 },
                  { id: "m4", value: 68 },
                  { id: "m5", value: 61 },
                  { id: "m6", value: 74 },
                  { id: "m7", value: 58 },
                  { id: "m8", value: 82 },
                  { id: "m9", value: 70 },
                  { id: "m10", value: 88 },
                  { id: "m11", value: 76 },
                  { id: "m12", value: 94 },
                ].map((bar) => (
                  <span
                    aria-hidden="true"
                    className="flex-1 rounded-t-md bg-primary/70"
                    key={bar.id}
                    style={{ height: `${bar.value}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CloudShader>
  ),
};

export const Variants: Story = {
  args: { ...cloudShaderMocks.alternate },
  render: () => (
    <CloudShader className="min-h-dvh" {...cloudShaderMocks.alternate}>
      <div className="flex min-h-dvh w-full flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-medium text-white/80">
          Fewer, faster clouds
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-6xl">
          Dusk over the ledger
        </h2>
        <p className="mt-4 max-w-xl text-base text-white/85">
          Same field, different count, speed, and sky colors.
        </p>
      </div>
    </CloudShader>
  ),
};

export const ThemeComparison: Story = {
  args: { ...cloudShaderMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <CloudShader className="min-h-dvh" {...cloudShaderMocks.default}>
          <p className="text-lg font-semibold text-white drop-shadow-sm">
            Light
          </p>
        </CloudShader>
      </div>
      <div className="dark bg-background">
        <CloudShader className="min-h-dvh" {...cloudShaderMocks.default}>
          <p className="text-lg font-semibold text-white drop-shadow-sm">
            Dark
          </p>
        </CloudShader>
      </div>
    </div>
  ),
};
