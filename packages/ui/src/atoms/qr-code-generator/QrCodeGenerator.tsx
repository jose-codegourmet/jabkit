"use client";

import { CheckIcon, DownloadIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { encodeQrMatrix, qrCodeMaxBytes } from "./encodeQrMatrix";
import type { QrCodeGeneratorProps } from "./QrCodeGenerator.types";

function truncatePayload(payload: string) {
  return payload.length > 50 ? `${payload.slice(0, 50)}...` : payload;
}

function downloadPng(
  matrix: number[][],
  fileName: string,
  moduleColor: string,
  quietColor: string,
) {
  const moduleSize = 8;
  const quiet = 4;
  const edge = (matrix.length + quiet * 2) * moduleSize;
  const canvas = document.createElement("canvas");
  canvas.width = edge;
  canvas.height = edge;
  const context = canvas.getContext("2d");
  if (!context) return;
  context.fillStyle = quietColor;
  context.fillRect(0, 0, edge, edge);
  context.fillStyle = moduleColor;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (!matrix[row][col]) continue;
      context.fillRect(
        (col + quiet) * moduleSize,
        (row + quiet) * moduleSize,
        moduleSize,
        moduleSize,
      );
    }
  }
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const controlClass = cn(
  "inline-flex h-9 w-full items-center justify-center gap-2 rounded-md px-4 text-sm font-medium whitespace-nowrap shadow-sm transition-colors",
  "motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "disabled:pointer-events-none disabled:opacity-50",
);

export function QrCodeGenerator({
  className,
  value,
  defaultValue = "",
  onValueChange,
  title = "QR Code",
  emptyDescription = "Generate or pass a QR code result",
  inputLabel = "Payload",
  placeholder = "https://example.com",
  downloadLabel = "Download PNG",
  downloadingLabel = "Downloading...",
  savedLabel = "Saved",
  downloadFileName = "qrcode.png",
  emptyLabel = "No data yet. Pass a payload to render the preview.",
  overflowLabel = "Shorten the text. This version holds about 180 characters.",
  downloadErrorLabel = "Failed to download. Please try again.",
  size = 300,
  isLoading = false,
  error = null,
  ...props
}: QrCodeGeneratorProps) {
  const inputId = useId();
  const headingId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const payload = value ?? uncontrolled;
  const overflow = new TextEncoder().encode(payload).length > qrCodeMaxBytes;
  const matrix = useMemo(
    () => (payload && !overflow ? encodeQrMatrix(payload) : null),
    [overflow, payload],
  );
  const description = payload ? truncatePayload(payload) : emptyDescription;
  const statusError = error || localError || (overflow ? overflowLabel : null);
  const showData = !isLoading && !statusError && Boolean(matrix);

  useEffect(() => {
    if (!downloaded) return;
    const timer = window.setTimeout(() => setDownloaded(false), 1200);
    return () => window.clearTimeout(timer);
  }, [downloaded]);

  const setPayload = (next: string) => {
    if (value === undefined) setUncontrolled(next);
    onValueChange?.(next);
    setLocalError(null);
  };

  const handleDownload = () => {
    if (!matrix) return;
    setDownloading(true);
    setLocalError(null);
    try {
      const styles = getComputedStyle(
        rootRef.current ?? document.documentElement,
      );
      downloadPng(
        matrix,
        downloadFileName,
        styles.getPropertyValue("--jk-foreground").trim() || "currentColor",
        styles.getPropertyValue("--jk-background").trim() || "transparent",
      );
      setDownloaded(true);
    } catch {
      setLocalError(downloadErrorLabel);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div
      aria-labelledby={headingId}
      className={cn(
        "flex w-full max-w-md flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
      data-slot="qr-code-generator"
      ref={rootRef}
      {...props}
    >
      <div className="flex flex-col gap-1.5 p-6">
        <h2
          className="text-2xl leading-none font-semibold tracking-tight"
          id={headingId}
        >
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{description}</p>
        <label className="sr-only" htmlFor={inputId}>
          {inputLabel}
        </label>
        <input
          className={cn(
            "mt-1.5 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
            "motion-reduce:transition-none placeholder:text-muted-foreground",
            "focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
          disabled={isLoading}
          id={inputId}
          onChange={(event) => setPayload(event.target.value)}
          placeholder={placeholder}
          value={payload}
        />
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center gap-4 p-6 pt-0">
          <div className="aspect-square w-full max-w-[300px] animate-pulse rounded-lg bg-muted motion-reduce:animate-none" />
          <div className="h-4 w-28 animate-pulse rounded bg-muted motion-reduce:animate-none" />
          <button
            className={cn(controlClass, "bg-primary text-primary-foreground")}
            disabled
            type="button"
          >
            {downloadLabel}
          </button>
        </div>
      ) : null}

      {!isLoading && statusError ? (
        <div className="p-6 pt-0">
          <div
            aria-live="assertive"
            className="text-sm text-destructive"
            role="status"
          >
            {statusError}
          </div>
        </div>
      ) : null}

      {!isLoading && !statusError && !matrix ? (
        <div className="p-6 pt-0 text-sm text-muted-foreground">{emptyLabel}</div>
      ) : null}

      {showData && matrix ? (
        <div className="flex flex-col items-center gap-4 p-6 pt-0">
          <div
            className="w-full rounded-lg bg-background p-4"
            style={{ maxWidth: `${size}px` }}
          >
            <svg
              aria-label={
                payload.length > 50
                  ? `QR code for '${payload.slice(0, 50)}...'`
                  : `QR code for '${payload}'`
              }
              className="h-auto w-full text-foreground"
              role="img"
              viewBox={`0 0 ${matrix.length} ${matrix.length}`}
            >
              <rect
                className="fill-background"
                height={matrix.length}
                width={matrix.length}
                x={0}
                y={0}
              />
              {matrix.flatMap((row, y) =>
                row.flatMap((cell, x) =>
                  cell ? (
                    <rect
                      className="fill-current"
                      height={1}
                      key={`${x}-${y}`}
                      width={1}
                      x={x}
                      y={y}
                    />
                  ) : (
                    []
                  ),
                ),
              )}
            </svg>
          </div>
          <div className="text-sm text-muted-foreground">Size: {size}px</div>
          <button
            aria-busy={downloading}
            aria-label={
              downloaded
                ? "QR code saved"
                : downloading
                  ? "Downloading QR code"
                  : "Download QR code as PNG"
            }
            aria-live="polite"
            className={cn(
              controlClass,
              "bg-primary text-primary-foreground hover:bg-primary/90",
            )}
            disabled={downloading}
            onClick={handleDownload}
            type="button"
          >
            {downloaded ? (
              <>
                <CheckIcon className="size-4" />
                {savedLabel}
              </>
            ) : (
              <>
                <DownloadIcon className="size-4" />
                {downloading ? downloadingLabel : downloadLabel}
              </>
            )}
          </button>
        </div>
      ) : null}
    </div>
  );
}
