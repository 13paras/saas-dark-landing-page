"use client";

import Image from "next/image";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative overflow-clip bg-black bg-purple-gradient py-[72px] text-white sm:py-24">
      {/* Radial Gradient */}
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:top-[calc(100%-120px)] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px]"></div>

      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg border border-white/30 px-2 py-1"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent [-webkit-background-clip:text]">
              {/* [-webkit-background-clip:text] for all browser compatibility */}
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative inline-flex">
            <h1 className="inline-flex text-center text-7xl font-bold tracking-tighter sm:text-9xl">
              One Task <br /> at a Time
            </h1>
            <motion.div
              className="absolute right-[477px] top-[108px] hidden sm:inline"
              drag
              // also can comment dragsnaptoorigin remove, it will also give very cool effect
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                alt="Cursor Image"
                height={"200"}
                width={"200"}
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
            <motion.div
              className="absolute left-[498px] top-[56px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt="Message Image"
                height={"200"}
                width={"200"}
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="mt-8 max-w-md text-center text-xl">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="rounded-lg bg-white px-5 py-3 font-medium text-black"
          >
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
