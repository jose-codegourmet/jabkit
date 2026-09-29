export const contactSeo = {
  title: "Contact — Pillo",
  description:
    "Get in touch with Pillo Studio about getting started, plans, privacy, or your family's board.",
} as const;

export const contactIntro = {
  title: "Say hello",
  body: "Questions about Pillo, your plan, or your family's board? Send us a note.",
  emailLabel: "Contact email",
  email: "[Support email — client to confirm]",
  replyLabel: "Response time",
  reply: "[Reply time — client to confirm]",
  logoId: "cla-logo-symbol",
} as const;

export const contactTopics = [
  "Getting started",
  "Plans and billing",
  "Privacy",
  "Something else",
] as const;

export const contactFormCopy = {
  nameLabel: "Your name",
  nameError: "Add your name.",
  emailLabel: "Email",
  emailError: "Enter an email like name@example.com.",
  topicLabel: "Topic",
  messageLabel: "Message",
  messageHelp: "A few sentences is plenty.",
  messageError: "Write a short message.",
  submit: "Send message",
  loading: "Sending…",
  sendError: "That didn't send. Please try again.",
  showError: "Show error state",
  notice: "This is a demo. Messages are not sent.",
} as const;

export const contactFaq = {
  label: "Many answers are already in the FAQ.",
  href: "/faq",
} as const;

export function contactSuccess(name: string): string {
  return `Thanks, ${name}. Your message is on its way.`;
}
