"use client";

import * as React from "react";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type { OtpDialogProps, OtpDialogStatus } from "./OtpDialog.types";

const defaults = {
  triggerLabel: "Enter verification code",
  title: "Check your inbox",
  description: "Enter the 4-digit code we sent to confirm this sign-in.",
  destination: "you@northline.app",
  codeLabel: "One-time code",
  verifyLabel: "Verify code",
  resendLabel: "Resend code",
  resendWaitingLabel: "Resend code in {seconds}s",
  successMessage: "Code confirmed. You can continue.",
  errorMessage: "That code is incorrect. Try again or request a new one.",
  codeLength: 4,
  resendCountdownSeconds: 30,
} as const;

function digitsFromCode(code: string | undefined, length: number) {
  const cleaned = (code ?? "").replace(/\D/g, "").slice(0, length);
  return Array.from({ length }, (_, index) => cleaned[index] ?? "");
}

function formatWaitingLabel(template: string, seconds: number) {
  return template.replace("{seconds}", String(seconds));
}

function OtpDialogPanel({
  codeLabel,
  description,
  destination,
  digitId,
  digits,
  errorMessage,
  handleDigitChange,
  handleDigitKeyDown,
  handleDigitPaste,
  handleResend,
  handleSubmit,
  inDialog,
  inputRefs,
  length,
  remaining,
  resendLabel,
  resendWaitingLabel,
  status,
  successMessage,
  title,
  verifyLabel,
}: {
  codeLabel: string;
  description: string;
  destination: string;
  digitId: string;
  digits: string[];
  errorMessage: string;
  handleDigitChange: (index: number, raw: string) => void;
  handleDigitKeyDown: (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => void;
  handleDigitPaste: (
    index: number,
    event: React.ClipboardEvent<HTMLInputElement>,
  ) => void;
  handleResend: () => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  inDialog: boolean;
  inputRefs: React.MutableRefObject<Array<HTMLInputElement | null>>;
  length: number;
  remaining: number;
  resendLabel: string;
  resendWaitingLabel: string;
  status: OtpDialogStatus;
  successMessage: string;
  title: string;
  verifyLabel: string;
}) {
  const Title = inDialog ? DialogTitle : "h2";
  const Description = inDialog ? DialogDescription : "p";
  const statusId = `${digitId}-status`;
  const destinationId = `${digitId}-destination`;
  const invalid = status === "error";
  const complete = digits.every((digit) => digit !== "");

  return (
    <div className="grid gap-5 p-5 sm:p-6">
      <div className="grid justify-items-center gap-2 text-center">
        <span
          aria-hidden="true"
          className="grid size-11 place-items-center rounded-full border border-border bg-muted text-xs font-semibold tracking-[0.18em] text-foreground"
        >
          OTP
        </span>
        <Title className="text-lg font-semibold tracking-[-0.03em] text-balance">
          {title}
        </Title>
        <Description className="max-w-[36ch] text-sm leading-6 text-muted-foreground">
          {description}
        </Description>
        <p
          id={destinationId}
          className="text-sm font-medium tracking-[-0.01em] text-foreground"
        >
          {destination}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <fieldset className="m-0 grid justify-items-center gap-2 border-0 p-0">
          <Label htmlFor={`${digitId}-0`} className="sr-only">
            {codeLabel}
          </Label>
          <div className="flex justify-center gap-2">
            {digits.map((digit, index) => (
              <Input
                key={`${digitId}-${index.toString()}`}
                ref={(node) => {
                  inputRefs.current[index] = node;
                }}
                id={`${digitId}-${index}`}
                name={index === 0 ? "code" : undefined}
                inputMode="numeric"
                autoComplete={index === 0 ? "one-time-code" : "off"}
                maxLength={index === 0 ? length : 1}
                required
                disabled={status === "success"}
                aria-invalid={invalid || undefined}
                aria-describedby={`${destinationId} ${statusId}`}
                aria-label={`Digit ${index + 1} of ${length}`}
                value={digit}
                onChange={(event) =>
                  handleDigitChange(index, event.currentTarget.value)
                }
                onKeyDown={(event) => handleDigitKeyDown(index, event)}
                onPaste={(event) => handleDigitPaste(index, event)}
                className="size-12 rounded-[--radius] p-0 text-center text-lg font-semibold tabular-nums sm:size-14"
              />
            ))}
          </div>
        </fieldset>

        <p
          id={statusId}
          role="status"
          aria-live="polite"
          className={cn(
            "min-h-5 text-center text-sm leading-5",
            status === "error" && "text-destructive",
            status === "success" && "text-success",
            status === "idle" && "text-muted-foreground",
          )}
        >
          {status === "error"
            ? errorMessage
            : status === "success"
              ? successMessage
              : remaining > 0
                ? formatWaitingLabel(resendWaitingLabel, remaining)
                : "\u00a0"}
        </p>

        <div className="grid gap-2">
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={!complete || status === "success"}
          >
            {verifyLabel}
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="w-full"
            disabled={remaining > 0 || status === "success"}
            onClick={handleResend}
          >
            {remaining > 0
              ? formatWaitingLabel(resendWaitingLabel, remaining)
              : resendLabel}
          </Button>
        </div>
      </form>
    </div>
  );
}

export function OtpDialog({
  className,
  triggerLabel = defaults.triggerLabel,
  title = defaults.title,
  description = defaults.description,
  destination = defaults.destination,
  codeLabel = defaults.codeLabel,
  verifyLabel = defaults.verifyLabel,
  resendLabel = defaults.resendLabel,
  resendWaitingLabel = defaults.resendWaitingLabel,
  successMessage = defaults.successMessage,
  errorMessage = defaults.errorMessage,
  codeLength = defaults.codeLength,
  defaultCode,
  expectedCode,
  resendCountdownSeconds = defaults.resendCountdownSeconds,
  defaultRemainingSeconds,
  defaultOpen = false,
  presentation = "dialog",
  status: statusProp = "idle",
  onVerify,
  onResend,
  ...props
}: OtpDialogProps) {
  const digitId = React.useId();
  const length = Math.max(4, Math.min(8, Math.trunc(codeLength) || 4));
  const cooldown = Math.max(0, Math.trunc(resendCountdownSeconds) || 0);
  const [digits, setDigits] = React.useState(() =>
    digitsFromCode(defaultCode, length),
  );
  const [status, setStatus] = React.useState<OtpDialogStatus>(statusProp);
  const [remaining, setRemaining] = React.useState(() =>
    Math.max(0, Math.trunc(defaultRemainingSeconds ?? cooldown)),
  );
  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([]);

  const focusAt = (index: number) => {
    const next = Math.max(0, Math.min(length - 1, index));
    inputRefs.current[next]?.focus();
    inputRefs.current[next]?.select();
  };

  const writeDigits = (next: string[], focusIndex?: number) => {
    setDigits(next);
    if (status !== "idle") setStatus("idle");
    if (focusIndex != null) {
      queueMicrotask(() => focusAt(focusIndex));
    }
  };

  React.useEffect(() => {
    if (remaining <= 0) return;
    const timer = window.setInterval(() => {
      setRemaining((value) => (value <= 1 ? 0 : value - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [remaining]);

  const handleDigitChange = (index: number, raw: string) => {
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

  const handleDigitKeyDown = (
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

  const handleDigitPaste = (
    index: number,
    event: React.ClipboardEvent<HTMLInputElement>,
  ) => {
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;
    event.preventDefault();
    const next = [...digits];
    pasted.split("").forEach((char, offset) => {
      if (index + offset < length) next[index + offset] = char;
    });
    writeDigits(next, Math.min(index + pasted.length, length) - 1);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const code = digits.join("");
    if (code.length !== length) return;
    const matches = expectedCode == null || expectedCode === code;
    if (!matches) {
      setStatus("error");
      return;
    }
    setStatus("success");
    onVerify?.({ code });
  };

  const handleResend = () => {
    if (remaining > 0) return;
    writeDigits(
      Array.from({ length }, () => ""),
      0,
    );
    setStatus("idle");
    setRemaining(cooldown);
    onResend?.();
  };

  const panel = (
    <OtpDialogPanel
      codeLabel={codeLabel}
      description={description}
      destination={destination}
      digitId={digitId}
      digits={digits}
      errorMessage={errorMessage}
      handleDigitChange={handleDigitChange}
      handleDigitKeyDown={handleDigitKeyDown}
      handleDigitPaste={handleDigitPaste}
      handleResend={handleResend}
      handleSubmit={handleSubmit}
      inDialog={presentation === "dialog"}
      inputRefs={inputRefs}
      length={length}
      remaining={remaining}
      resendLabel={resendLabel}
      resendWaitingLabel={resendWaitingLabel}
      status={status}
      successMessage={successMessage}
      title={title}
      verifyLabel={verifyLabel}
    />
  );

  return (
    <section
      data-slot="otp-dialog"
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto flex min-h-[28rem] max-w-3xl items-center justify-center px-5 py-16 sm:px-8 sm:py-20">
        {presentation === "inline" ? (
          <div className="w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+0.35rem)] border border-border bg-popover text-popover-foreground shadow-sm">
            {panel}
          </div>
        ) : (
          <Dialog defaultOpen={defaultOpen}>
            <DialogTrigger render={<Button>{triggerLabel}</Button>} />
            <DialogContent className="p-0 sm:max-w-sm" showCloseButton>
              {panel}
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
