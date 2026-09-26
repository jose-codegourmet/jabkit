import Link from "next/link";
import { Rays } from "../Rays";
import { HeroArt } from "./HeroArt";
import { HeroInstall } from "./HeroInstall";

export function HeroSection({ installName }: { installName: string }) {
  return (
    <section className="vd-stage relative overflow-hidden">
      <Rays x="75%" y="45%" width="6deg" />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-14 tab:px-8 tab:py-20 desk:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <p className="vd-kicker mb-5">Source-owned UI</p>
          <h1 className="vd-h1 text-cream">
            Components that leave the nest with you.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-cream">
            Describe what you need, copy the source, and own every line in your
            tree.
          </p>
          <HeroInstall name={installName} />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/components" className="vd-btn vd-btn-primary">
              Browse components →
            </Link>
            <Link href="/how-it-works" className="vd-btn">
              See how it works
            </Link>
          </div>
        </div>
        <HeroArt tag={`#${installName.replace(/\d+$/, "")}`} />
      </div>
    </section>
  );
}
