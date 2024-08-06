import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(to bottom, #000, #200D42 34%, #4F21A1 65%, #A46EDB 82%)",
      },
    },
  },
  plugins: [],
};
export default config;
