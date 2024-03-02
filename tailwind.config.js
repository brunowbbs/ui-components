import { COLORS } from "./utils";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ...COLORS, transparent: "transparent" },
    },
    fontSize: {
      xsm: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
    },
  },
  plugins: [],
};
