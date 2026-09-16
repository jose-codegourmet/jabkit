"use client";

// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { type CSSProperties, useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { fisheyeInfiniteGridItems } from "./FisheyeInfiniteGrid.mocks";
import type {
  FisheyeInfiniteGridItem,
  FisheyeInfiniteGridProps,
} from "./FisheyeInfiniteGrid.types";

const MIN_TILE_W = 140;
const MIN_TILE_H = 150;
const NUDGE_MS = 520;
const KEY_STEP = 42;
const VERTEX = `
attribute vec2 aPos;
varying vec2 vCoord;
void main() {
  vCoord = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;
const FRAGMENT = `
precision highp float;
uniform sampler2D uAtlas;
uniform vec2 uView;
uniform vec2 uPeriod;
uniform vec2 uPan;
uniform float uLens;
varying vec2 vCoord;

void main() {
  vec2 ndc = vCoord * 2.0 - 1.0;
  float aspect = uView.x / max(uView.y, 1.0);
  vec2 disk = vec2(ndc.x * aspect, ndc.y);
  float r2 = dot(disk, disk) / (aspect * aspect + 1.0);
  float bulge = uLens * (0.34 * r2 + 0.12 * r2 * r2);
  vec2 bent = disk / (1.0 + bulge);
  vec2 uv = vec2(bent.x / aspect, bent.y) * 0.5 + 0.5;
  vec2 world = vec2(
    uv.x * uView.x - uPan.x,
    (1.0 - uv.y) * uView.y - uPan.y
  );
  vec2 sampleUv = fract(world / uPeriod);
  vec4 pixel = texture2D(uAtlas, vec2(sampleUv.x, 1.0 - sampleUv.y));
  float shade = clamp(r2 * uLens * 0.12, 0.0, 0.24);
  pixel.rgb *= 1.0 - shade;
  gl_FragColor = pixel;
}
`;

function limit(value: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, value));
}

function readToken(node: HTMLElement, name: string) {
  return getComputedStyle(node).getPropertyValue(name).trim();
}

function mix(token: string, amount: number) {
  return `color-mix(in oklab, ${token} ${amount}%, transparent)`;
}

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
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

function linkProgram(gl: WebGLRenderingContext) {
  const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  if (!vs || !fs) return null;
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

function paintCover(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
) {
  const zoom = Math.max(
    width / image.naturalWidth,
    height / image.naturalHeight,
  );
  const sw = width / zoom;
  const sh = height / zoom;
  ctx.drawImage(
    image,
    (image.naturalWidth - sw) / 2,
    (image.naturalHeight - sh) / 2,
    sw,
    sh,
    x,
    y,
    width,
    height,
  );
}

function paintAtlas(
  ctx: CanvasRenderingContext2D,
  root: HTMLElement,
  items: FisheyeInfiniteGridItem[],
  images: Array<HTMLImageElement | null>,
  cols: number,
  rows: number,
  tileW: number,
  tileH: number,
  cellW: number,
  cellH: number,
) {
  const background = readToken(root, "--jk-background") || "currentColor";
  const card = readToken(root, "--jk-card") || background;
  const border = readToken(root, "--jk-border") || "currentColor";
  const foreground = readToken(root, "--jk-foreground") || "currentColor";
  const muted = readToken(root, "--jk-muted") || card;
  const mutedFg = readToken(root, "--jk-muted-foreground") || foreground;

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.textBaseline = "middle";

  const inset = Math.max(12, Math.round(tileW * 0.07));
  const footer = Math.max(32, Math.round(tileH * 0.14));
  const photoW = tileW - inset * 2;
  const photoH = tileH - inset * 2 - footer;
  const typeSize = Math.max(8, Math.round(tileW * 0.038));

  for (let index = 0; index < cols * rows; index += 1) {
    const item = items[index % items.length];
    const image = images[index % items.length];
    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = col * cellW;
    const y = row * cellH;

    ctx.fillStyle = card;
    ctx.fillRect(x, y, tileW, tileH);

    ctx.strokeStyle = border;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 0.5, y);
    ctx.lineTo(x + 0.5, y + tileH);
    ctx.moveTo(x, y + 0.5);
    ctx.lineTo(x + tileW, y + 0.5);
    ctx.stroke();

    ctx.fillStyle = muted;
    ctx.fillRect(x + inset, y + inset, photoW, photoH);

    if (image?.complete && image.naturalWidth > 0) {
      paintCover(ctx, image, x + inset, y + inset, photoW, photoH);
      ctx.fillStyle = mix(foreground, 10);
      ctx.fillRect(x + inset, y + inset, photoW, photoH);
    }

    ctx.strokeStyle = mix(foreground, 12);
    ctx.strokeRect(x + inset + 0.5, y + inset + 0.5, photoW - 1, photoH - 1);

    const labelY = y + tileH - inset - footer / 2 + 5;
    const label = (item.title ?? item.alt).toUpperCase();
    ctx.font = `600 ${typeSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    ctx.fillStyle = mutedFg;
    ctx.fillText(
      label.length > 18 ? `${label.slice(0, 17)}...` : label,
      x + inset,
      labelY,
    );
    if (item.meta) {
      ctx.textAlign = "right";
      ctx.fillText(item.meta, x + tileW - inset, labelY);
      ctx.textAlign = "left";
    }
  }
}

export function FisheyeInfiniteGrid({
  items,
  tileWidth = 238,
  tileHeight = 272,
  gap = 0,
  lensStrength = 0.24,
  theme = "system",
  hoverNudge = 16,
  inertia = 0.94,
  wheelSensitivity = 0.42,
  className,
  style,
  "aria-label": ariaLabel = "Infinite draggable image grid",
  ...props
}: FisheyeInfiniteGridProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const collection =
    items && items.length > 0 ? items : fisheyeInfiniteGridItems;

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const program = linkProgram(gl);
    if (!program) return;

    const quad = gl.createBuffer();
    const texture = gl.createTexture();
    if (!quad || !texture) return;

    const applyProgram = gl.useProgram.bind(gl);
    applyProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uView = gl.getUniformLocation(program, "uView");
    const uPeriod = gl.getUniformLocation(program, "uPeriod");
    const uPan = gl.getUniformLocation(program, "uPan");
    const uLens = gl.getUniformLocation(program, "uLens");
    const uAtlas = gl.getUniformLocation(program, "uAtlas");

    const tileW = Math.max(MIN_TILE_W, tileWidth);
    const tileH = Math.max(MIN_TILE_H, tileHeight);
    const gutter = Math.max(0, gap);
    const cellW = tileW + gutter;
    const cellH = tileH + gutter;
    const cols = Math.max(2, Math.min(4, collection.length));
    const rows = Math.max(2, Math.ceil(collection.length / cols));

    const atlas = document.createElement("canvas");
    atlas.width = Math.ceil(cols * cellW);
    atlas.height = Math.ceil(rows * cellH);
    const atlasCtx = atlas.getContext("2d");
    if (!atlasCtx) return;

    const frames: Array<HTMLImageElement | null> = collection.map(() => null);
    const pan = { x: 0, y: 0 };
    const velocity = { x: 0, y: 0 };
    const drag = {
      live: false,
      id: -1,
      x: 0,
      y: 0,
      t: 0,
    };
    let hover: { started: number; x: number; y: number } | null = null;
    let reduceMotion = false;
    let frame = 0;
    let last = performance.now();
    let viewW = 1;
    let viewH = 1;
    let gone = false;

    const pushAtlas = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        atlas,
      );
    };

    const composeAtlas = () => {
      paintAtlas(
        atlasCtx,
        root,
        collection,
        frames,
        cols,
        rows,
        tileW,
        tileH,
        cellW,
        cellH,
      );
      pushAtlas();
    };

    const hoverShift = (time: number) => {
      if (!hover) return { x: 0, y: 0, live: false };
      const elapsed = Math.max(0, time - hover.started);
      const t = limit(elapsed / NUDGE_MS, 0, 1);
      const ease = 1 - (1 - t) ** 3;
      const pulse = 1 + Math.sin(elapsed * 0.0042) * 0.07;
      return {
        x: hover.x * ease * pulse,
        y: hover.y * ease * pulse,
        live: true,
      };
    };

    const draw = (time: number) => {
      const shift = hoverShift(time);
      applyProgram(program);
      gl.uniform2f(uView, viewW, viewH);
      gl.uniform2f(uPeriod, atlas.width, atlas.height);
      gl.uniform2f(uPan, pan.x + shift.x, pan.y + shift.y);
      gl.uniform1f(uLens, limit(lensStrength, 0, 2.5));
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(uAtlas, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      return shift.live;
    };

    const coast = limit(inertia, 0, 0.98);

    const tick = (time: number) => {
      const dt = Math.min(32, time - last);
      last = time;
      if (!drag.live && !reduceMotion) {
        pan.x += velocity.x * dt;
        pan.y += velocity.y * dt;
        const fade = coast ** (dt / 16.667);
        velocity.x *= fade;
        velocity.y *= fade;
      } else if (!drag.live) {
        velocity.x = 0;
        velocity.y = 0;
      }
      const shifting = draw(time);
      const moving = Math.hypot(velocity.x, velocity.y) > 0.006;
      if (drag.live || moving || shifting) {
        frame = requestAnimationFrame(tick);
      } else {
        velocity.x = 0;
        velocity.y = 0;
        frame = 0;
      }
    };

    const kick = () => {
      if (frame) return;
      last = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const bakeHover = (time: number) => {
      const shift = hoverShift(time);
      if (!hover && !shift.live) return;
      pan.x += shift.x;
      pan.y += shift.y;
      hover = null;
    };

    const fit = () => {
      const box = root.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      viewW = Math.max(1, box.width);
      viewH = Math.max(1, box.height);
      canvas.width = Math.max(1, Math.round(viewW * dpr));
      canvas.height = Math.max(1, Math.round(viewH * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      kick();
    };

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      reduceMotion = motion.matches;
    };
    syncMotion();
    motion.addEventListener("change", syncMotion);

    const observer = new ResizeObserver(fit);
    observer.observe(root);
    fit();
    composeAtlas();

    collection.forEach((item, index) => {
      const image = new Image();
      if (/^https?:\/\//.test(item.image)) image.crossOrigin = "anonymous";
      image.onload = () => {
        if (gone) return;
        frames[index] = image;
        composeAtlas();
        kick();
      };
      image.onerror = () => {
        if (gone) return;
        composeAtlas();
        kick();
      };
      image.src = item.image;
    });

    const onEnter = (event: PointerEvent) => {
      if (
        event.pointerType !== "mouse" ||
        event.buttons !== 0 ||
        reduceMotion ||
        drag.live ||
        hoverNudge <= 0
      ) {
        return;
      }
      const box = root.getBoundingClientRect();
      hover = {
        started: performance.now(),
        x: (event.clientX < box.left + box.width / 2 ? 1 : -1) * hoverNudge,
        y:
          (event.clientY < box.top + box.height / 2 ? 1 : -1) *
          hoverNudge *
          0.42,
      };
      kick();
    };

    const onLeave = () => {
      if (drag.live) return;
      bakeHover(performance.now());
    };

    const onDown = (event: PointerEvent) => {
      if (event.button !== 0 || !event.isPrimary) return;
      bakeHover(performance.now());
      drag.live = true;
      drag.id = event.pointerId;
      drag.x = event.clientX;
      drag.y = event.clientY;
      drag.t = performance.now();
      velocity.x = 0;
      velocity.y = 0;
      root.dataset.dragging = "true";
      root.setPointerCapture(event.pointerId);
      kick();
    };

    const onMove = (event: PointerEvent) => {
      if (!drag.live || drag.id !== event.pointerId) return;
      const box = root.getBoundingClientRect();
      if (
        event.clientX <= box.left ||
        event.clientY <= box.top ||
        event.clientX >= box.right ||
        event.clientY >= box.bottom
      ) {
        drag.live = false;
        root.dataset.dragging = "false";
        if (root.hasPointerCapture(event.pointerId)) {
          root.releasePointerCapture(event.pointerId);
        }
        kick();
        return;
      }
      const now = performance.now();
      const span = Math.max(8, now - drag.t);
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      pan.x += dx;
      pan.y += dy;
      velocity.x = limit(dx / span, -2.4, 2.4);
      velocity.y = limit(dy / span, -2.4, 2.4);
      drag.x = event.clientX;
      drag.y = event.clientY;
      drag.t = now;
      kick();
    };

    const stopDrag = (event: PointerEvent) => {
      if (!drag.live || drag.id !== event.pointerId) return;
      drag.live = false;
      root.dataset.dragging = "false";
      if (root.hasPointerCapture(event.pointerId)) {
        root.releasePointerCapture(event.pointerId);
      }
      kick();
    };

    const abortDrag = () => {
      if (!drag.live) return;
      drag.live = false;
      root.dataset.dragging = "false";
      if (root.hasPointerCapture(drag.id)) {
        root.releasePointerCapture(drag.id);
      }
      kick();
    };

    const onKey = (event: KeyboardEvent) => {
      const map: Record<string, [number, number]> = {
        ArrowLeft: [KEY_STEP, 0],
        ArrowRight: [-KEY_STEP, 0],
        ArrowUp: [0, KEY_STEP],
        ArrowDown: [0, -KEY_STEP],
      };
      const step = map[event.key];
      if (!step) return;
      event.preventDefault();
      bakeHover(performance.now());
      pan.x += step[0];
      pan.y += step[1];
      velocity.x = 0;
      velocity.y = 0;
      kick();
    };

    const onWheel = (event: WheelEvent) => {
      if (drag.live) return;
      event.preventDefault();
      bakeHover(performance.now());
      const scale =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? Math.max(viewH, 1)
            : 1;
      const gain = Math.max(0, wheelSensitivity) * 0.003;
      velocity.x = limit(velocity.x - event.deltaX * scale * gain, -1.25, 1.25);
      velocity.y = limit(velocity.y - event.deltaY * scale * gain, -1.25, 1.25);
      kick();
    };

    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointerleave", onLeave);
    root.addEventListener("pointerdown", onDown);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerup", stopDrag);
    root.addEventListener("pointercancel", stopDrag);
    window.addEventListener("blur", abortDrag);
    root.addEventListener("keydown", onKey);
    root.addEventListener("wheel", onWheel, { passive: false });
    kick();

    return () => {
      gone = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      motion.removeEventListener("change", syncMotion);
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointerleave", onLeave);
      root.removeEventListener("pointerdown", onDown);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerup", stopDrag);
      root.removeEventListener("pointercancel", stopDrag);
      window.removeEventListener("blur", abortDrag);
      root.removeEventListener("keydown", onKey);
      root.removeEventListener("wheel", onWheel);
      gl.deleteTexture(texture);
      gl.deleteBuffer(quad);
      gl.deleteProgram(program);
    };
  }, [
    collection,
    gap,
    hoverNudge,
    inertia,
    lensStrength,
    tileHeight,
    tileWidth,
    wheelSensitivity,
  ]);

  return (
    <section
      {...props}
      aria-label={ariaLabel}
      className={cn(
        "group/fisheye-grid relative isolate h-full w-full cursor-grab touch-none select-none overflow-hidden bg-background text-foreground outline-none [perspective:900px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset data-[dragging=true]:cursor-grabbing",
        theme === "dark" && "dark",
        className,
      )}
      data-dragging="false"
      data-slot="fisheye-infinite-grid"
      ref={rootRef}
      style={{ ...style, WebkitFontSmoothing: "antialiased" } as CSSProperties}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: keyboard-pannable gallery
      tabIndex={0}
    >
      <span className="sr-only">
        Drag in any direction or use the arrow keys to explore the infinite
        grid.
      </span>
      <canvas
        className="pointer-events-none absolute inset-0 block h-full w-full"
        ref={canvasRef}
        tabIndex={-1}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_48%,color-mix(in_oklab,var(--jk-foreground)_14%,transparent)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-background/50 to-transparent"
      />
    </section>
  );
}
