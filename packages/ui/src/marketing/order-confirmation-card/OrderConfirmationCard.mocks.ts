import type { OrderConfirmationCardProps } from "./OrderConfirmationCard.types";

export const orderConfirmationCardMocks = {
  default: {
    eyebrow: "Checkout complete",
    heading: "Order on its way.",
    description:
      "A packed receipt for Harbor Atelier, with line items, ship-to, and the paid total on one card.",
    statusLabel: "Order confirmed",
    statusDetail: "We emailed this receipt to Mira Solano.",
    orderIdLabel: "Order",
    orderId: "HA-20418",
    itemsHeading: "Items",
    items: [
      {
        id: "overcoat",
        name: "Studio wool overcoat",
        detail: "Camel / M",
        quantity: 1,
        price: "$428.00",
        image: {
          src: "/assets/4ce360395e8f9d6e.webp",
          alt: "Camel wool overcoat on a hanger",
        },
      },
      {
        id: "knit",
        name: "Field knit",
        detail: "Bone / S",
        quantity: 1,
        price: "$148.00",
        image: {
          src: "/assets/5fa1d074c0baca15.webp",
          alt: "Cream knit sweater laid flat",
        },
      },
    ],
    quantityLabel: "Qty",
    shippingHeading: "Ship to",
    shippingLines: ["Mira Solano", "14 Pier Lane", "Harbor District, NY 10013"],
    summary: [
      { label: "Subtotal", value: "$576.00" },
      { label: "Shipping", value: "$18.00" },
      { label: "Arrives", value: "Wed 23 Sep" },
    ],
    totalLabel: "Paid",
    total: "$594.00",
    paymentMethodLabel: "Method",
    paymentMethod: "Visa 4418",
    primaryAction: { label: "Track order", href: "#track" },
    secondaryAction: { label: "Continue shopping", href: "#shop" },
  },
  alternate: {
    eyebrow: "Gift sent",
    heading: "Packed for Halden.",
    description:
      "A short gift order with one jacket and a note on the slip.",
    statusLabel: "Gift confirmed",
    statusDetail: "Receipt sent to Jonas Rhee. The jacket goes to Halden Quay.",
    orderIdLabel: "Order",
    orderId: "HA-G-7712",
    itemsHeading: "Items",
    items: [
      {
        id: "bomber",
        name: "Night bomber",
        detail: "Ink / L",
        quantity: 1,
        price: "$312.00",
        image: {
          src: "/assets/6baa48de9bbbdb4b.webp",
          alt: "Black bomber jacket on a studio background",
        },
      },
    ],
    quantityLabel: "Qty",
    shippingHeading: "Ship to",
    shippingLines: ["Jonas Rhee", "Halden Quay Dock 2", "Hold for pickup"],
    summary: [
      { label: "Subtotal", value: "$312.00" },
      { label: "Shipping", value: "Pickup" },
      { label: "Note", value: "Wear it on the night crossing." },
    ],
    totalLabel: "Paid",
    total: "$312.00",
    paymentMethodLabel: "Method",
    paymentMethod: "Mastercard 9021",
    primaryAction: { label: "View receipt", href: "#receipt" },
    secondaryAction: { label: "Shop again", href: "#shop" },
  },
} satisfies Record<"default" | "alternate", OrderConfirmationCardProps>;
