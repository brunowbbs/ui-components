/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        "primary-lighter": "#7ab6e0",
        "primary-darker": "#1f6ab6",

        secondary: "#95a5a6",
        "secondary-lighter": "#bfc6c7",
        "secondary-darker": "#6b7a7b",

        danger: "#e74c3c",
        "danger-lighter": "#ff8272",
        "danger-darker": "#b73a29",

        success: "#2ecc71",
        "success-lighter": "#6deea1",
        "success-darker": "#1e995d",

        warning: "#f1c40f",
        "warning-lighter": "#f9da6c",
        "warning-darker": "#b89a0b",
      },
    },
    fontSize: {
      xsm: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
    },
  },
  plugins: [],
};
