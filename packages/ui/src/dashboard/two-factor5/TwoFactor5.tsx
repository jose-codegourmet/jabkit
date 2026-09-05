"use client";

import * as React from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type { TwoFactor5Props } from "./TwoFactor5.types";

const defaults = {
  title: "Pair your authenticator",
  description:
    "Scan the QR code with your authenticator app, then enter the six-digit code it shows.",
  scanInstruction: "Open your authenticator and scan this code to pair.",
  codeLabel: "Verification code",
  submitLabel: "Continue",
  otpauthUri:
    "otpauth://totp/Northline:you@northline.app?secret=JBSWY3DPEHPK3PXP&issuer=Northline&algorithm=SHA1&digits=6&period=30",
  qrAlt: "Authenticator pairing QR code",
  codeLength: 6,
} as const;

function qrImageSrc(otpauthUri: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(otpauthUri)}`;
}

function digitsOnly(value: string, length: number) {
  return value.replace(/\D/g, "").slice(0, length);
}

export function TwoFactor5({
  className,
  title = defaults.title,
  description = defaults.description,
  scanInstruction = defaults.scanInstruction,
  codeLabel = defaults.codeLabel,
  submitLabel = defaults.submitLabel,
  otpauthUri = defaults.otpauthUri,
  qrSrc,
  qrAlt = defaults.qrAlt,
  codeLength = defaults.codeLength,
  codeDefaultValue,
  onVerify,
  ...props
}: TwoFactor5Props) {
  const headingId = React.useId();
  const instructionId = React.useId();
  const digitId = React.useId();
  const length = Math.max(4, Math.min(8, Math.round(codeLength)));
  const [digits, setDigits] = React.useState(() => {
    const initial = digitsOnly(codeDefaultValue ?? "", length);
    return Array.from({ length }, (_, index) => initial[index] ?? "");
  });

  const focusDigit = (index: number) => {
    document.getElementById(`${digitId}-${index}`)?.focus();
  };

  const writeDigits = (next: string[]) => {
    const clipped = Array.from(
      { length },
      (_, index) => next[index]?.replace(/\D/g, "").slice(-1) ?? "",
    );
    setDigits(clipped);
    return clipped;
  };

  const handleDigitChange = (index: number, raw: string) => {
    const incoming = raw.replace(/\D/g, "");
    if (incoming.length > 1) {
      const next = [...digits];
      incoming.split("").forEach((digit, offset) => {
        if (index + offset < length) next[index + offset] = digit;
      });
      const filled = writeDigits(next);
      const lastFilled = Math.min(index + incoming.length, length) - 1;
      focusDigit(Math.max(0, lastFilled));
      return;
    }

    const next = [...digits];
    next[index] = incoming.slice(-1);
    writeDigits(next);
    if (incoming && index < length - 1) focusDigit(index + 1);
  };

  const handleDigitKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      event.preventDefault();
      const next = [...digits];
      next[index - 1] = "";
      writeDigits(next);
      focusDigit(index - 1);
    }
    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      focusDigit(index - 1);
    }
    if (event.key === "ArrowRight" && index < length - 1) {
      event.preventDefault();
      focusDigit(index + 1);
    }
  };

  const handleDigitPaste = (
    index: number,
    event: React.ClipboardEvent<HTMLInputElement>,
  ) => {
    const pasted = digitsOnly(event.clipboardData.getData("text"), length);
    if (!pasted) return;
    event.preventDefault();
    const next = [...digits];
    pasted.split("").forEach((digit, offset) => {
      if (index + offset < length) next[index + offset] = digit;
    });
    writeDigits(next);
    focusDigit(Math.min(index + pasted.length, length) - 1);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const code = digits.join("");
    if (code.length !== length) return;
    onVerify?.({ code });
  };

  const qrUrl = qrSrc ?? qrImageSrc(otpauthUri);

  return (
    <section
      data-slot="two-factor5"
      aria-labelledby={headingId}
      className={cn(
        "flex min-h-[100dvh] items-center justify-center bg-muted px-4 py-12 text-foreground sm:px-6",
        className,
      )}
      {...props}
    >
      <div className="grid w-full max-w-4xl overflow-hidden rounded-[--radius] border border-border bg-card shadow-sm lg:grid-cols-[minmax(0,1fr)_minmax(0,20.5rem)]">
        <div className="flex flex-col items-center justify-center gap-5 border-border bg-muted/40 px-8 py-12 sm:px-12 lg:border-r">
          <div className="grid size-[13.5rem] place-items-center rounded-[--radius] border border-border bg-background p-4">
            <img
              src={qrUrl}
              alt={qrAlt}
              width={208}
              height={208}
              className="size-full object-contain dark:invert"
            />
          </div>
          <p
            id={instructionId}
            className="max-w-[28ch] text-center text-sm leading-6 text-muted-foreground"
          >
            {scanInstruction}
          </p>
        </div>

        <div className="flex items-center bg-card px-6 py-10 sm:px-8 lg:py-12">
          <div className="w-full">
            <h1
              id={headingId}
              className="text-2xl font-semibold tracking-[-0.03em] text-balance"
            >
              {title}
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {description}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor={`${digitId}-0`}>{codeLabel}</Label>
                <div
                  className="flex gap-2"
                  role="group"
                  aria-labelledby={headingId}
                  aria-describedby={instructionId}
                >
                  {digits.map((digit, index) => (
                    <Input
                      key={`${digitId}-${index.toString()}`}
                      id={`${digitId}-${index}`}
                      name={`digit-${index}`}
                      inputMode="numeric"
                      autoComplete={index === 0 ? "one-time-code" : "off"}
                      maxLength={index === 0 ? length : 1}
                      required
                      aria-label={`Digit ${index + 1} of ${length}`}
                      value={digit}
                      onChange={(event) =>
                        handleDigitChange(index, event.currentTarget.value)
                      }
                      onKeyDown={(event) => handleDigitKeyDown(index, event)}
                      onPaste={(event) => handleDigitPaste(index, event)}
                      className="h-12 w-full min-w-0 rounded-[--radius] px-0 text-center text-lg font-medium tabular-nums"
                    />
                  ))}
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full">
                {submitLabel}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
