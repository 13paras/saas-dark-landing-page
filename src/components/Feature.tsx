"use client";

import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type PropTypes = {
  title: string;
  description: string;
};

const Feature = ({ title, description }: PropTypes) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      //e.x
      // e.y
      if (!borderRef.current) return;
      const borderRect = borderRef?.current?.getBoundingClientRect();

      offsetX.set(e.x - borderRect?.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <div className="relative rounded-xl border border-white/30 px-5 py-10 text-center sm:flex-1">
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-purple-400"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={borderRef}
      ></motion.div>
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white text-black">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold"> {title} </h3>
      <p className="mt-2 text-white/70"> {description} </p>
    </div>
  );
};

export default Feature;
