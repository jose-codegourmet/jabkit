import { notFound } from "next/navigation";

/** Unknown /demo/* paths render app/demo/not-found.tsx inside the portal shell. */
export default function UnknownDemoPage() {
  notFound();
}
