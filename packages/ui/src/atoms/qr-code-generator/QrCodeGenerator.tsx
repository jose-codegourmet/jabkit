"use client";

import { CheckIcon, CopyIcon, DownloadIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import { encodeQrMatrix, qrCodeMaxBytes } from "./encodeQrMatrix";
import type { QrCodeGeneratorProps } from "./QrCodeGenerator.types";

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
  link.click();
}

export function QrCodeGenerator({
  className,
  value,
  defaultValue = "",
  onValueChange,
  title = "QR code",
  description = "Type a link or short note. The mark updates as you type.",
  inputLabel = "Payload",
  placeholder = "https://jabkit.dev",
  downloadLabel = "Download PNG",
  downloadFileName = "qr-code.png",
  copyLabel = "Copy text",
  copiedLabel = "Copied",
  emptyLabel = "Enter text to draw a code",
  overflowLabel = "Shorten the text. This version holds about 180 characters.",
  size = 192,
  ...props
}: QrCodeGeneratorProps) {
  const inputId = useId();
  const headingId = useId();
  const statusId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const [copied, setCopied] = useState(false);
  const payload = value ?? uncontrolled;
  const byteLength = new TextEncoder().encode(payload).length;
  const overflow = byteLength > qrCodeMaxBytes;
  const matrix = useMemo(
    () => (payload && !overflow ? encodeQrMatrix(payload) : null),
    [overflow, payload],
  );

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const setPayload = (next: string) => {
    if (value === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };

  const handleDownload = () => {
    if (!matrix) return;
    const styles = getComputedStyle(
      rootRef.current ?? document.documentElement,
    );
    downloadPng(
      matrix,
      downloadFileName,
      styles.getPropertyValue("--jk-foreground").trim() || "currentColor",
      styles.getPropertyValue("--jk-background").trim() || "transparent",
    );
  };

  const handleCopy = async () => {
    if (!payload) return;
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      aria-labelledby={headingId}
      className={cn(
        "flex w-full max-w-md flex-col gap-4 rounded-[--radius] border border-border bg-card p-5 text-card-foreground shadow-sm",
        className,
      )}
      data-slot="qr-code-generator"
      ref={rootRef}
      {...props}
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-medium" id={headingId}>
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div
        className="flex items-center justify-center rounded-[--radius] border border-border bg-background p-5"
        style={{ minHeight: size + 40 }}
      >
        {matrix ? (
          <svg
            aria-label={payload}
            className="text-foreground motion-reduce:transition-none"
            height={size}
            role="img"
            viewBox={`0 0 ${matrix.length} ${matrix.length}`}
            width={size}
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
        ) : (
          <p
            className="max-w-[16rem] text-center text-sm text-muted-foreground"
            id={statusId}
          >
            {overflow ? overflowLabel : emptyLabel}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={inputId}>{inputLabel}</Label>
        <Input
          aria-describedby={!matrix ? statusId : undefined}
          aria-invalid={overflow || undefined}
          id={inputId}
          onChange={(event) => setPayload(event.target.value)}
          placeholder={placeholder}
          value={payload}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          className="gap-2 motion-reduce:transition-none"
          disabled={!matrix}
          onClick={handleDownload}
          size="sm"
          type="button"
        >
          <DownloadIcon className="size-4" />
          {downloadLabel}
        </Button>
        <Button
          className="gap-2 motion-reduce:transition-none"
          disabled={!payload}
          onClick={() => {
            void handleCopy();
          }}
          size="sm"
          type="button"
          variant="secondary"
        >
          {copied ? (
            <CheckIcon className="size-4" />
          ) : (
            <CopyIcon className="size-4" />
          )}
          {copied ? copiedLabel : copyLabel}
        </Button>
      </div>
    </div>
  );
}
