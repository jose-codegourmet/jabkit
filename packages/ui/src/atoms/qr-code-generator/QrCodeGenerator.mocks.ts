export const qrCodeGeneratorMocks = {
  default: {
    defaultValue: "https://jabkit.dev",
    title: "QR code",
    description: "Type a link or short note. The mark updates as you type.",
  },
  event: {
    defaultValue: "https://jabkit.dev/events/opening-night",
    title: "Door code",
    description: "Guests scan this at the desk. Download a PNG for print.",
    inputLabel: "Event URL",
    downloadFileName: "opening-night-qr.png",
  },
} as const;
