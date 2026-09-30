"use client";

import { CrossCircledIcon } from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { Alert, AlertDescription } from "@/atoms/alert";
import { Button } from "@/atoms/button";
import { Skeleton } from "@/atoms/skeleton";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";
import { BenImage } from "./BenImage";

/** Loading body: skeleton rows plus a politely announced message. */
export function TileSkeleton({
  message,
  rows = 3,
  className,
}: {
  message: string;
  rows?: number;
  className?: string;
}) {
  return (
    <div aria-busy="true" className={cn(styles.skeleton, className)}>
      <p aria-live="polite" className={styles.tileLabel}>
        {message}
      </p>
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton
          className={styles.skeletonRow}
          // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder rows
          key={index}
        />
      ))}
    </div>
  );
}

export function EmptyState({
  message,
  imageId,
  action,
  centered = false,
  className,
}: {
  message: ReactNode;
  imageId?: "ben-empty-list" | "ben-empty-day";
  action?: ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(styles.empty, centered && styles.emptyCentered, className)}
    >
      {imageId ? (
        <BenImage
          className={styles.emptyImage}
          decorative
          id={imageId}
          sizes="160px"
        />
      ) : null}
      <p className="jk-body">{message}</p>
      {action}
    </div>
  );
}

export function ErrorState({
  message,
  onRetry,
  retryLabel = "Try again",
  className,
}: {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
  className?: string;
}) {
  return (
    <div className={cn(styles.errorBox, className)}>
      <Alert variant="destructive">
        <CrossCircledIcon aria-hidden="true" />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
      {onRetry ? (
        <Button onClick={onRetry} variant="secondary">
          {retryLabel}
        </Button>
      ) : null}
    </div>
  );
}
