import helix2 from "../assets/images/helix2.png";
import emojiStar from "../assets/images/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black py-[72px] text-white sm:py-24">
      <div className="container relative max-w-xl">
        <Image
          src={helix2}
          alt="Helix Image"
          height={"200"}
          width={"200"}
          className="left-[calc(100%-36px)] absolute top-6 hidden sm:inline"
        />
        <Image
          src={emojiStar}
          alt="Message Image"
          height={"200"}
          width={"200"}
          className="absolute -top-[120px] right-[calc(100%-24px)] hidden sm:inline"
        />
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
            className="h-12 sm:flex-1 rounded-lg bg-white/20 px-5 font-medium placeholder:text-[#9CA3AF]"
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
