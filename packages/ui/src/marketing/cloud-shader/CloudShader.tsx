"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type {
  CloudShaderLink,
  CloudShaderMetric,
  CloudShaderProof,
  CloudShaderProps,
} from "./CloudShader.types";

const defaultBrand = { label: "Altitude", href: "#top" };
const defaultNav: CloudShaderLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" },
];
const defaultMetrics: CloudShaderMetric[] = [
  { label: "Cash on hand", value: "$4.8M", delta: "+6.2%" },
  { label: "Cards issued", value: "1,284", delta: "+18" },
  { label: "Close time", value: "6h", delta: "-41%" },
];
const defaultProof: CloudShaderProof[] = [
  { name: "Manu", src: "/assets/bd48582e630a15fa.webp" },
  { name: "Imani", src: "/assets/2a364f729e4f7c09.webp" },
  { name: "Noor", src: "/assets/d111cc60a8f2bf68.webp" },
  { name: "Jules", src: "/assets/040bd026249d7af9.webp" },
  { name: "Rafi", src: "/assets/d111cc60a8f2bf68.webp" },
];

type Rgb = readonly [number, number, number];

const VERT = `
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

varying vec2 vUv;

uniform vec2 uResolution;
uniform float uTime;
uniform float uLayers;
uniform vec3 uCloud;
uniform vec3 uSkyHigh;
uniform vec3 uSkyLow;
uniform vec3 uGlow;

const mat2 TURN = mat2(0.737, 0.676, -0.676, 0.737);

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n00 = hash21(i);
  float n10 = hash21(i + vec2(1.0, 0.0));
  float n01 = hash21(i + vec2(0.0, 1.0));
  float n11 = hash21(i + vec2(1.0, 1.0));
  return mix(mix(n00, n10, f.x), mix(n01, n11, f.x), f.y);
}

float octaveSum(vec2 p) {
  float total = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    total += amp * valueNoise(p);
    p = TURN * p * 2.07 + 11.3;
    amp *= 0.5;
  }
  return total;
}

float ridgeSum(vec2 p) {
  float total = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    float n = abs(2.0 * valueNoise(p) - 1.0);
    total += amp * (1.0 - n);
    p = TURN * p * 2.17 + 8.9;
    amp *= 0.48;
  }
  return total;
}

float puffField(vec2 p, vec2 center, vec2 radius, float seed, float t) {
  vec2 d = p - center;
  float baseY = d.y > 0.0 ? radius.y : radius.y * 0.4;
  float envelope = 1.0 - length(vec2(d.x / radius.x, d.y / baseY));
  if (envelope < -0.32) return 0.0;
  vec2 warp = d * (2.2 / radius.x) + seed;
  warp += 0.55 * vec2(
    octaveSum(warp * 1.35 + t * 0.035),
    octaveSum(warp * 1.35 + 5.4 - t * 0.028)
  );
  float fluff = ridgeSum(warp * 1.55);
  return envelope + (fluff - 0.58) * 0.58;
}

vec3 paintPuff(
  vec3 color,
  vec3 sky,
  vec2 p,
  vec2 center,
  vec2 radius,
  float seed,
  float t,
  float depth
) {
  float density = puffField(p, center, radius, seed, t);
  if (density < 0.018) return color;
  float above = puffField(p + vec2(0.0, radius.y * 0.52), center, radius, seed, t);
  float shade = clamp((above - density) * 1.05 + density * 0.5, 0.0, 1.0);
  vec3 lit = uCloud * 1.05;
  vec3 dim = mix(uCloud * 0.58, sky, 0.36);
  vec3 tint = mix(lit, dim, shade * 0.82);
  float alpha = smoothstep(0.018, 0.36, density);
  float rim = smoothstep(0.018, 0.13, density) * (1.0 - smoothstep(0.13, 0.38, density));
  tint += rim * 0.09;
  tint = mix(tint, sky, depth * 0.34);
  alpha *= mix(1.0, 0.78, depth);
  return mix(color, tint, alpha);
}

vec3 driftPuff(
  vec3 color,
  vec3 sky,
  vec2 p,
  float aspect,
  float t,
  float rate,
  float phase,
  float altitude,
  vec2 radius,
  float seed,
  float depth
) {
  float x = mix(-radius.x - 0.22, aspect + radius.x + 0.22, fract(t * rate + phase));
  float y = altitude + sin(t * 0.048 + phase * 6.28318) * 0.011;
  return paintPuff(color, sky, p, vec2(x, y), radius, seed, t, depth);
}

void main() {
  float aspect = uResolution.x / uResolution.y;
  vec2 p = vec2(vUv.x * aspect, vUv.y);
  float t = uTime;
  vec3 sky = mix(uSkyLow, uSkyHigh, vUv.y);
  vec3 color = sky;
  color = mix(color, uSkyLow * 1.05, smoothstep(0.34, 0.0, vUv.y) * 0.48);

  vec2 glowAt = vec2(aspect * 0.76, 0.9);
  float glowDist = length(p - glowAt);
  color += uGlow * exp(-glowDist * glowDist * 4.6) * 0.26;

  float streakMask = smoothstep(0.54, 0.8, vUv.y) * (1.0 - smoothstep(0.9, 1.0, vUv.y));
  if (streakMask > 0.01) {
    float streak = octaveSum(vec2(p.x * 1.55 - t * 0.0055, p.y * 11.5));
    float wisp = smoothstep(0.5, 0.76, streak) * streakMask;
    color = mix(color, uCloud * 0.97, wisp * 0.32);
  }

  if (uLayers > 5.5) {
    color = driftPuff(color, sky, p, aspect, t, 0.0055, 0.12, 0.83, vec2(0.19, 0.095), 41.2, 1.0);
  }
  if (uLayers > 4.5) {
    color = driftPuff(color, sky, p, aspect, t, 0.0075, 0.58, 0.72, vec2(0.23, 0.115), 68.4, 0.84);
  }
  if (uLayers > 3.5) {
    color = driftPuff(color, sky, p, aspect, t, 0.0105, 0.31, 0.59, vec2(0.33, 0.155), 15.8, 0.54);
  }
  if (uLayers > 2.5) {
    color = driftPuff(color, sky, p, aspect, t, 0.0125, 0.77, 0.46, vec2(0.29, 0.145), 27.6, 0.44);
  }
  if (uLayers > 1.5) {
    color = driftPuff(color, sky, p, aspect, t, 0.0155, 0.07, 0.34, vec2(0.45, 0.195), 88.3, 0.16);
  }
  color = driftPuff(color, sky, p, aspect, t, 0.019, 0.46, 0.19, vec2(0.54, 0.23), 54.9, 0.0);

  gl_FragColor = vec4(color, 1.0);
}
`;

function tokenRgb(node: HTMLElement, name: string): Rgb {
  const probe = document.createElement("span");
  probe.style.color = `var(${name})`;
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  node.appendChild(probe);
  const color = getComputedStyle(probe).color;
  probe.remove();
  const nums = color.match(/[\d.]+/g);
  if (!nums || nums.length < 3) return [0.55, 0.55, 0.55];
  return [Number(nums[0]) / 255, Number(nums[1]) / 255, Number(nums[2]) / 255];
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function PillLink({
  href,
  children,
  variant,
}: {
  href: string;
  children: string;
  variant: "solid" | "glass" | "ghost" | "nav";
}) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full text-sm font-semibold whitespace-nowrap transition-[transform,background-color,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        variant === "solid" &&
          "bg-card px-6 py-2.5 text-primary shadow-[0_18px_36px_-22px_color-mix(in_oklab,var(--jk-foreground),transparent_40%)] hover:-translate-y-0.5 hover:bg-card/90",
        variant === "glass" &&
          "border border-card/40 bg-card/10 px-6 py-2.5 text-card backdrop-blur-sm hover:bg-card/20",
        variant === "ghost" && "px-6 py-3 text-card hover:bg-card/10",
        variant === "nav" &&
          "bg-card px-4 py-1.5 text-primary hover:bg-card/90",
      )}
      href={href}
    >
      {children}
    </a>
  );
}

function LedgerPreview({ metrics }: { metrics: CloudShaderMetric[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-foreground/10 bg-card text-card-foreground shadow-[0_28px_60px_-28px_color-mix(in_oklab,var(--jk-foreground),transparent_35%)] md:rounded-3xl">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
        <p className="text-sm font-semibold tracking-[-0.03em]">
          Altitude ledger
        </p>
        <p className="text-xs text-muted-foreground">Live close</p>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-6">
        {metrics.map((metric) => (
          <div
            className="rounded-2xl border border-border bg-muted/40 px-4 py-3"
            key={metric.label}
          >
            <p className="text-xs text-muted-foreground">{metric.label}</p>
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
  );
}

function SkyCanvas({ speed, count }: { speed: number; count: number }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef({ speed, count });
  paramsRef.current = { speed, count };

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      premultipliedAlpha: false,
    });
    if (!gl) return;

    const vert = compile(gl, gl.VERTEX_SHADER, VERT);
    const frag = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.bindAttribLocation(program, 0, "aPosition");
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    // WebGL's useProgram is not a React hook.
    // biome-ignore lint/correctness/useHookAtTopLevel: WebGL bind, not a React hook.
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const loc = {
      resolution: gl.getUniformLocation(program, "uResolution"),
      time: gl.getUniformLocation(program, "uTime"),
      layers: gl.getUniformLocation(program, "uLayers"),
      cloud: gl.getUniformLocation(program, "uCloud"),
      skyHigh: gl.getUniformLocation(program, "uSkyHigh"),
      skyLow: gl.getUniformLocation(program, "uSkyLow"),
      glow: gl.getUniformLocation(program, "uGlow"),
    };

    let frame = 0;
    let running = true;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 767px)");
    let reduceMotion = media.matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const w = Math.max(1, Math.floor(width * dpr));
      const h = Math.max(1, Math.floor(height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(loc.resolution, w, h);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const start = performance.now();
    const draw = (now: number) => {
      if (!running) return;
      const params = paramsRef.current;
      const elapsed = reduceMotion ? 8 : ((now - start) / 1000) * params.speed;
      const layers = Math.min(
        6,
        Math.max(1, narrow.matches ? Math.min(params.count, 3) : params.count),
      );
      const cloud = tokenRgb(root, "--jk-card");
      const skyHigh = tokenRgb(root, "--jk-primary");
      const skyLow = tokenRgb(root, "--jk-ring");
      const glow = tokenRgb(root, "--jk-primary-foreground");

      gl.uniform1f(loc.time, elapsed);
      gl.uniform1f(loc.layers, layers);
      gl.uniform3f(loc.cloud, cloud[0], cloud[1], cloud[2]);
      gl.uniform3f(loc.skyHigh, skyHigh[0], skyHigh[1], skyHigh[2]);
      gl.uniform3f(loc.skyLow, skyLow[0], skyLow[1], skyLow[2]);
      gl.uniform3f(loc.glow, glow[0], glow[1], glow[2]);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduceMotion) {
        frame = requestAnimationFrame(draw);
      }
    };

    const onMotion = () => {
      reduceMotion = media.matches;
      if (running) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(draw);
      }
    };

    media.addEventListener("change", onMotion);
    narrow.addEventListener("change", onMotion);
    frame = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      media.removeEventListener("change", onMotion);
      narrow.removeEventListener("change", onMotion);
      observer.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-primary"
      ref={rootRef}
    >
      <canvas className="absolute inset-0 size-full" ref={canvasRef} />
    </div>
  );
}

function SaasOverlay({
  headingId,
  brand,
  mark,
  navItems,
  signIn,
  headerAction,
  heading,
  description,
  primaryAction,
  secondaryAction,
  helper,
  metrics,
}: {
  headingId: string;
  brand: CloudShaderLink;
  mark: string;
  navItems: CloudShaderLink[];
  signIn?: CloudShaderLink;
  headerAction?: CloudShaderLink;
  heading: string;
  description: string;
  primaryAction?: CloudShaderLink;
  secondaryAction?: CloudShaderLink;
  helper?: string;
  metrics: CloudShaderMetric[];
}) {
  return (
    <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col px-5 pb-10 pt-6 text-card sm:px-8 lg:px-10">
      <header className="flex items-center justify-between gap-4">
        <a
          className="flex items-center gap-2.5 text-sm font-semibold tracking-[-0.03em] text-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href={brand.href}
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-full bg-card text-xs font-bold text-primary"
          >
            {mark}
          </span>
          {brand.label}
        </a>
        {navItems.length ? (
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 md:flex"
          >
            {navItems.map((item) => (
              <a
                className="text-sm font-medium text-card/90 transition-colors hover:text-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
        <div className="flex items-center gap-4">
          {signIn ? (
            <a
              className="hidden text-sm font-medium text-card/90 transition-colors hover:text-card sm:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={signIn.href}
            >
              {signIn.label}
            </a>
          ) : null}
          {headerAction ? (
            <PillLink href={headerAction.href} variant="nav">
              {headerAction.label}
            </PillLink>
          ) : null}
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center py-16 text-center">
        <h1
          className="text-4xl leading-[1.05] font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl"
          id={headingId}
        >
          {heading}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-card/85 sm:text-lg sm:leading-8">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {primaryAction ? (
            <PillLink href={primaryAction.href} variant="solid">
              {primaryAction.label}
            </PillLink>
          ) : null}
          {secondaryAction ? (
            <PillLink href={secondaryAction.href} variant="glass">
              {secondaryAction.label}
            </PillLink>
          ) : null}
        </div>
        {helper ? <p className="mt-5 text-sm text-card/75">{helper}</p> : null}
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <LedgerPreview metrics={metrics} />
      </div>
    </div>
  );
}

function WindowOverlay({
  headingId,
  brand,
  navItems,
  signIn,
  heading,
  description,
  primaryAction,
  secondaryAction,
  proof,
  proofLabel,
}: {
  headingId: string;
  brand: CloudShaderLink;
  navItems: CloudShaderLink[];
  signIn?: CloudShaderLink;
  heading: string;
  description: string;
  primaryAction?: CloudShaderLink;
  secondaryAction?: CloudShaderLink;
  proof: CloudShaderProof[];
  proofLabel?: string;
}) {
  return (
    <div className="relative z-20 mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col px-6 pb-28 pt-7 text-card sm:px-10">
      <header className="flex items-center justify-between gap-4">
        <a
          className="text-sm font-semibold tracking-[-0.03em] text-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href={brand.href}
        >
          {brand.label}
        </a>
        {navItems.length ? (
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 md:flex"
          >
            {navItems.map((item) => (
              <a
                className="text-sm font-medium text-card/90 transition-colors hover:text-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
        {signIn ? (
          <PillLink href={signIn.href} variant="nav">
            {signIn.label}
          </PillLink>
        ) : null}
      </header>

      <div className="mt-16 max-w-xl sm:mt-24">
        <h1
          className="text-4xl leading-[1.08] font-semibold tracking-[-0.05em] text-balance sm:text-6xl"
          id={headingId}
        >
          {heading}
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-card/85 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {primaryAction ? (
            <PillLink href={primaryAction.href} variant="solid">
              {primaryAction.label}
            </PillLink>
          ) : null}
          {secondaryAction ? (
            <PillLink href={secondaryAction.href} variant="ghost">
              {secondaryAction.label}
            </PillLink>
          ) : null}
        </div>
        {proof.length ? (
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {proof.map((person) =>
                person.src ? (
                  <img
                    alt={person.name}
                    className="size-8 rounded-full border-2 border-card/80 object-cover"
                    height={32}
                    key={person.name}
                    src={person.src}
                    width={32}
                  />
                ) : (
                  <span
                    className="grid size-8 place-items-center rounded-full border-2 border-card/80 bg-muted text-[10px] font-semibold text-foreground"
                    key={person.name}
                  >
                    {person.name.slice(0, 1)}
                  </span>
                ),
              )}
            </div>
            {proofLabel ? (
              <p className="max-w-xs text-sm text-card/85">{proofLabel}</p>
            ) : null}
          </div>
        ) : null}
      </div>

      <svg
        aria-hidden="true"
        className="jk-cloud-shader-bob pointer-events-none absolute -bottom-6 left-0 z-10 w-[85%] text-foreground/35 md:w-[70%]"
        fill="currentColor"
        viewBox="0 0 1200 320"
      >
        <path d="M0 248c92-18 168-74 248-92 86-20 164-8 246 6 118 20 214 18 318-22 86-34 168-42 248-18l140 38v160H0z" />
        <path
          d="M210 214c28-8 54-28 86-32 22-3 38 8 36 22-18 8-38 14-62 16-22 2-40-2-60-6z"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

export function CloudShader({
  className,
  children,
  layout = "saas",
  speed = 1,
  count = 6,
  brand = defaultBrand,
  mark = "A",
  navItems = defaultNav,
  signIn = { label: "Sign in", href: "#signin" },
  headerAction = { label: "Get started", href: "#start" },
  heading = "Banking above the clouds",
  description = "Altitude gives your finance team one home for cards, payments, and forecasting. Close the books in hours, not weeks, with automation that works while you sleep.",
  primaryAction = { label: "Start for free", href: "#start" },
  secondaryAction = { label: "Book a demo", href: "#demo" },
  helper = "No credit card required · Free 14-day trial",
  metrics = defaultMetrics,
  proof = defaultProof,
  proofLabel = "Manu and 5 others saved 30% on their last trip",
  ...props
}: CloudShaderProps) {
  const headingId = useId();
  const windowed = layout === "window";

  return (
    <section
      aria-labelledby={children ? undefined : headingId}
      className={cn(
        "relative isolate overflow-hidden bg-background text-foreground",
        windowed && "bg-foreground",
        className,
      )}
      data-slot="cloud-shader"
      {...props}
    >
      <style href="jk-cloud-shader" precedence="default">{`
        @keyframes jk-cloud-shader-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .jk-cloud-shader-bob {
          animation: jk-cloud-shader-bob 8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-cloud-shader-bob { animation: none; }
        }
      `}</style>
      {windowed ? (
        <div className="relative min-h-[100dvh] overflow-hidden bg-foreground">
          <div className="absolute inset-x-0 top-0 bottom-[-18%] overflow-hidden rounded-t-[6.5rem] border border-border/40 bg-muted sm:rounded-t-[10.4rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle,var(--jk-card)_1px,transparent_1.2px)] [background-size:14px_14px] [mask-image:linear-gradient(to_bottom,var(--jk-foreground),transparent_42%)]"
            />
            <div className="absolute inset-[14px] overflow-hidden rounded-t-[5.6rem] border border-card/20 sm:inset-[22px] sm:rounded-t-[9.2rem]">
              <SkyCanvas count={count} speed={speed} />
            </div>
          </div>
          {children ?? (
            <WindowOverlay
              brand={brand}
              description={description}
              heading={heading}
              headingId={headingId}
              navItems={navItems}
              primaryAction={primaryAction}
              proof={proof}
              proofLabel={proofLabel}
              secondaryAction={secondaryAction}
              signIn={signIn}
            />
          )}
        </div>
      ) : (
        <>
          <SkyCanvas count={count} speed={speed} />
          {children ?? (
            <SaasOverlay
              brand={brand}
              description={description}
              headerAction={headerAction}
              heading={heading}
              headingId={headingId}
              helper={helper}
              mark={mark}
              metrics={metrics}
              navItems={navItems}
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
              signIn={signIn}
            />
          )}
        </>
      )}
    </section>
  );
}
