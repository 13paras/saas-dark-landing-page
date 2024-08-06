import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

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
        <div className="relative mt-9 overflow-hidden before:absolute before:h-full before:w-5 before:content-[''] after:absolute after:h-full after:w-5  after:content-[''] before:right-0 after:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <div className="flex gap-16 justify-center">
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="h-8 w-auto flex-none"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
