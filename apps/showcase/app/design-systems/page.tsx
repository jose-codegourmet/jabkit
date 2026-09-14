import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Design systems - JabKit",
  description: "Website style directions for JabKit sample sites.",
};

export default function DesignSystemsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <h1 className="text-5xl font-semibold tracking-[-0.06em]">
          Design systems
        </h1>
      </main>
      <SiteFooter />
    </>
  );
}
