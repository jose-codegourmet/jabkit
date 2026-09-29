export const catalogueUrl = (
  process.env.NEXT_PUBLIC_JABKIT_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://jabkit.joseadrianbuctuanon.dev")
).replace(/\/$/, "");
