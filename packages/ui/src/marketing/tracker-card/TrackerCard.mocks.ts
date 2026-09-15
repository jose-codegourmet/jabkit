import type { TrackerCardProps } from "./TrackerCard.types";

export const trackerCardMocks = {
  default: {
    status: "Out for Delivery",
    packageNumber: "49029880150810129411",
    packageNumberLabel: "Package Number:",
    destination: "Poland",
    flagMark: "PL",
    date: "Poland - 01/06/25",
    qrCodeValue: "https://21st.dev/track/49029880150810129411",
    trackLabel: "Show full tracking",
    trackHref: "#track",
  },
  alternate: {
    status: "Delivered",
    packageNumber: "88210477390125501844",
    packageNumberLabel: "Package Number:",
    destination: "Japan",
    flagMark: "JP",
    date: "Osaka - 14/09/26",
    qrCodeValue: "https://21st.dev/track/88210477390125501844",
    trackLabel: "Show full tracking",
    trackHref: "#delivered",
  },
} satisfies Record<"default" | "alternate", TrackerCardProps>;
