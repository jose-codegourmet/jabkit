import Link from "next/link";
import { Rays } from "../Rays";

/** Closing CTA: JabKit bowing inside a marquee-bulb frame. */
export function CurtainCall() {
  return (
    <section className="relative overflow-hidden bg-curtain bg-[radial-gradient(ellipse_at_50%_110%,oklch(0.55_0.19_28),transparent_70%)] text-cream">
      <Rays x="50%" y="110%" width="4deg" />
      <div className="relative mx-auto grid max-w-[1100px] items-center gap-12 px-5 py-14 tab:px-8 tab:py-[104px] desk:grid-cols-[7fr_5fr] desk:gap-14">
        <div className="vd-bulbs rounded-[20px] border-3 border-ink p-[22px] shadow-[10px_10px_0_oklch(0.15_0.05_25)]">
          <img
            src="/art/jk-bow.webp"
            alt="JabKit taking a bow on a vaudeville stage"
            width={900}
            height={502}
            loading="lazy"
            decoding="async"
            className="block aspect-[16/10] w-full rounded-[10px] border-3 border-ink object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="vd-script text-[26px] text-mustard">curtain call</p>
          <h2 className="vd-h2 mt-1.5 desk:text-[52px]">
            Own the files. Ship the interface.
          </h2>
          <p className="mt-[18px] leading-7 opacity-90">
            Browse the catalogue, copy a component, and keep building without a
            locked dependency.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/components"
              className="vd-btn vd-btn-primary bg-mustard text-ink"
            >
              Browse components →
            </Link>
            <Link
              href="/how-it-works"
              className="vd-btn border-cream bg-transparent text-cream"
            >
              See how it works
            </Link>
          </div>
          <p className="mt-7 font-mono text-[13px] opacity-80">
            $ npx jabkit init
          </p>
        </div>
      </div>
    </section>
  );
}
