export const Banner = () => {
  return (
    // Tailwind doesn't work with spaces that's why we have used _ in every color
    // Also w have the #dddd this type of color code but we also want the opacity of this color to be 70%
    // So for that we copy pasted it in css file and from there just changed the opacity
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))]">
      <div className="container">
        <p className="font-medium ">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -
          </span>
          <a href="#" className="underline pl-1 underline-offset-2 ">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};
