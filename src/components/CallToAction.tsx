"use client";

import helix2 from "../assets/images/helix2.png";
import emojiStar from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div ref={containerRef} className="bg-black py-[72px] text-white sm:py-24">
      <div className="container relative max-w-xl">
        <motion.div style={{ translateY }}>
          <Image
            src={helix2}
            alt="Helix Image"
            height={"200"}
            width={"200"}
            className="absolute left-[calc(100%-36px)] top-6 hidden sm:inline"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojiStar}
            alt="Message Image"
            height={"200"}
            width={"200"}
            className="absolute -top-[120px] right-[calc(100%-24px)] hidden sm:inline"
          />
        </motion.div>
        <h2 className="mx-auto text-center text-5xl font-bold tracking-tighter sm:max-w-[648px] sm:text-6xl">
          Get instant access
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <form className="mx-auto mt-10 flex max-w-sm flex-col gap-2.5 sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 rounded-lg bg-white/20 px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button
            type="button"
            className="h-12 rounded-lg bg-white px-5 text-black"
          >
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
