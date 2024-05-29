/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          primaryLight: "#FFFFFF",
          primaryDark: "#EDEDF4",
          textColor: "#FFFFFF",
          ctaTint: "#0035BD",
          cta: "#3B45C3",
          ctaDeep: "#000073",
        },
        dark: {
          primaryLight: "#FFFFFF",
          primaryDark: "#EDEDF4",
          textColor: "#FFFFFF",
          ctaDeep: "#0035BD",
        },
      },
    },
  },
  plugins: [],
});
