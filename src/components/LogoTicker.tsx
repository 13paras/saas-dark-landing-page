"use client";

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-xl text-white/70">
          Trusted by the world&apos; most innovative teams
        </h2>
        <div className="relative mt-9 flex overflow-hidden before:absolute before:right-0 before:top-0 before:z-10 before:h-full before:w-5 before:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] before:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-5 after:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:content-['']">
          <motion.div
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex flex-none gap-16 pr-16"
          >
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="h-8 w-auto flex-none"
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="h-8 w-auto flex-none"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
