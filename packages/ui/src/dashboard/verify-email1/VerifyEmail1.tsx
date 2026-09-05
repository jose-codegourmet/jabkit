"use client";

import * as React from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type { VerifyEmail1Logo, VerifyEmail1Props } from "./VerifyEmail1.types";

const defaultLogo: VerifyEmail1Logo = {
  name: "Northline",
  href: "#home",
};

const defaults = {
  title: "Verify your email",
  description: "Enter the 6-digit code we sent to",
  email: "you@northline.app",
  codeLabel: "Verification code",
  codeLength: 6,
  submitLabel: "Verify email",
  resendPrompt: "Didn't get a code?",
  resendLabel: "Resend",
  resendHref: "#resend",
} as const;

function BrandMark({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || "N";
  return (
    <span
      aria-hidden="true"
      className="grid size-8 shrink-0 place-items-center rounded-[calc(var(--radius)-2px)] bg-foreground text-sm font-semibold text-background"
    >
      {initial}
    </span>
  );
}

function Brand({
  logo,
  logoMark,
}: {
  logo: VerifyEmail1Logo;
  logoMark?: React.ReactNode;
}) {
  const content = (
    <>
      {logoMark ??
        (logo.src ? (
          <img
            src={logo.src}
            alt=""
            className="size-8 rounded-[calc(var(--radius)-2px)] object-cover"
          />
        ) : (
          <BrandMark name={logo.name} />
        ))}
      <span className="text-sm font-medium tracking-[-0.01em]">
        {logo.name}
      </span>
    </>
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        className="inline-flex items-center gap-2.5 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="inline-flex items-center gap-2.5 text-foreground">
      {content}
    </div>
  );
}

function digitsFromCode(code: string | undefined, length: number) {
  const cleaned = (code ?? "").replace(/\D/g, "").slice(0, length);
  return Array.from({ length }, (_, index) => cleaned[index] ?? "");
}

export function VerifyEmail1({
  className,
  logo = defaultLogo,
  logoMark,
  title = defaults.title,
  description = defaults.description,
  email = defaults.email,
  codeLabel = defaults.codeLabel,
  codeLength = defaults.codeLength,
  defaultCode,
  submitLabel = defaults.submitLabel,
  resendPrompt = defaults.resendPrompt,
  resendLabel = defaults.resendLabel,
  resendHref = defaults.resendHref,
  onVerify,
  onResend,
  ...props
}: VerifyEmail1Props) {
  const headingId = React.useId();
  const codeLabelId = React.useId();
  const length = Math.max(4, Math.min(8, Math.trunc(codeLength) || 6));
  const groupSize = Math.ceil(length / 2);
  const [digits, setDigits] = React.useState(() =>
    digitsFromCode(defaultCode, length),
  );
  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([]);

  const focusAt = (index: number) => {
    const next = Math.max(0, Math.min(length - 1, index));
    inputRefs.current[next]?.focus();
    inputRefs.current[next]?.select();
  };

  const writeDigits = (next: string[], focusIndex?: number) => {
    setDigits(next);
    if (focusIndex != null) {
      queueMicrotask(() => focusAt(focusIndex));
    }
  };

  const handleChange = (index: number, raw: string) => {
    const cleaned = raw.replace(/\D/g, "");
    if (!cleaned) {
      writeDigits(digits.map((digit, i) => (i === index ? "" : digit)));
      return;
    }

    const next = [...digits];
    const chars = cleaned.slice(0, length - index).split("");
    chars.forEach((char, offset) => {
      next[index + offset] = char;
    });
    writeDigits(next, index + chars.length);
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      event.preventDefault();
      const next = [...digits];
      next[index - 1] = "";
      writeDigits(next, index - 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusAt(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusAt(index + 1);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    writeDigits(digitsFromCode(event.clipboardData.getData("text"), length), 0);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const code = digits.join("");
    if (code.length !== length) return;
    onVerify?.(code);
  };

  const renderSlot = (index: number) => {
    const slotId = `otp-${codeLabelId}-${index}`;
    return (
      <Input
        key={slotId}
        ref={(node) => {
          inputRefs.current[index] = node;
        }}
        id={index === 0 ? slotId : undefined}
        name={index === 0 ? "code" : undefined}
        type="text"
        inputMode="numeric"
        autoComplete={index === 0 ? "one-time-code" : "off"}
        maxLength={index === 0 ? length : 1}
        aria-label={`Digit ${index + 1} of ${length}`}
        value={digits[index]}
        onChange={(event) => handleChange(index, event.currentTarget.value)}
        onKeyDown={(event) => handleKeyDown(index, event)}
        onPaste={handlePaste}
        className="size-11 shrink-0 p-0 text-center text-lg font-semibold tabular-nums"
      />
    );
  };

  return (
    <section
      data-slot="verify-email1"
      aria-labelledby={headingId}
      className={cn(
        "flex min-h-[100dvh] flex-col items-center justify-center bg-muted px-6 py-12 text-foreground",
        className,
      )}
      {...props}
    >
      <div className="flex w-full max-w-sm flex-col items-center">
        <Brand logo={logo} logoMark={logoMark} />

        <div className="mt-8 w-full rounded-[--radius] border border-border bg-card p-6 shadow-sm sm:p-8">
          <h1
            id={headingId}
            className="text-center text-2xl font-semibold tracking-[-0.03em] text-balance"
          >
            {title}
          </h1>
          <p className="mt-3 text-center text-sm leading-6 text-muted-foreground">
            {description}{" "}
            <span className="font-medium text-foreground">{email}</span>
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <fieldset className="m-0 grid min-w-0 gap-2 border-0 p-0">
              <Label
                id={codeLabelId}
                htmlFor={`otp-${codeLabelId}-0`}
                className="sr-only"
              >
                {codeLabel}
              </Label>
              <div className="flex items-center justify-center gap-2">
                {Array.from({ length: groupSize }, (_, index) =>
                  renderSlot(index),
                )}
                <span
                  aria-hidden="true"
                  className="h-px w-3 shrink-0 bg-border"
                />
                {Array.from({ length: length - groupSize }, (_, offset) =>
                  renderSlot(groupSize + offset),
                )}
              </div>
            </fieldset>
            <Button type="submit" size="lg" className="w-full">
              {submitLabel}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {resendPrompt}{" "}
          <a
            href={resendHref}
            onClick={onResend}
            className="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted"
          >
            {resendLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
