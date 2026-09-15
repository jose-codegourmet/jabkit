"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog";
import { sampleImage } from "../assets";
import { brand, navItems, rooms } from "../content";
import n from "../navigation.module.css";
import { useMotionPreference } from "./useMotionPreference";
export function SiteHeader() {
  const [active, setActive] = useState(0);
  const reduce = useMotionPreference();
  return (
    <header className={n.header}>
      <Dialog>
        <DialogTrigger className={n.menuTrigger}>
          <span className={n.bars} aria-hidden="true">
            <i />
            <i />
          </span>
          Explore
        </DialogTrigger>
        <DialogContent
          className={`${n.panel} top-0 left-0 translate-x-0 translate-y-0`}
          showCloseButton={false}
        >
          <div className={n.menuPhotos}>
            {rooms.map((room, i) => (
              <motion.img
                key={room.slug}
                src={
                  sampleImage(room.imageIds.establishing, room.alt.establishing)
                    .src
                }
                alt=""
                width={900}
                height={1100}
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: active === i ? 1 : 1.08,
                }}
                transition={{ duration: reduce ? 0 : 0.8 }}
              />
            ))}
            <div className={n.photoCaption}>
              A room of your own.
              <br />A different pace.
            </div>
          </div>
          <div className={n.menuBody}>
            <div className={n.panelTop}>
              <DialogTitle>Stillwater House</DialogTitle>
              <DialogClose aria-label="Close menu" className={n.close}>
                Close <span aria-hidden="true">×</span>
              </DialogClose>
            </div>
            <DialogDescription className={n.description}>
              Make yourself at home.
            </DialogDescription>
            <nav aria-label="Primary" className={n.largeLinks}>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onHoverStart={() => setActive(i % 3)}
                  onFocus={() => setActive(i % 3)}
                  initial={reduce ? false : { y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: reduce ? 0 : 0.7,
                    delay: reduce ? 0 : 0.1 + i * 0.07,
                  }}
                  whileHover={reduce ? {} : { x: 12 }}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">↗</span>
                </motion.a>
              ))}
            </nav>
            <div className={n.roomLinks}>
              <p>Find your room</p>
              {rooms.map((room, i) => (
                <a
                  href={`/rooms/${room.slug}`}
                  key={room.slug}
                  onFocus={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                >
                  {room.title}
                </a>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <a href="/" className={n.logo}>
        <img
          src="/assets/design-systems/luxury/lux-logo-wordmark.webp"
          alt={brand.name}
          width={1200}
          height={220}
        />
      </a>
      <motion.a
        href="/inquire"
        className={n.reserve}
        whileHover={reduce ? {} : { y: -2 }}
        whileTap={reduce ? {} : { scale: 0.97 }}
      >
        Inquire <span aria-hidden="true">↗</span>
      </motion.a>
    </header>
  );
}
