/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "160%",
          fontWeight: "500",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "180%",
          fontWeight: "500",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "180%",
          fontWeight: "500",
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: "180%",
          fontWeight: "500",
        },
      ],
      xl: [
        "20px",
        {
          lineHeight: "180%",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      screens: {
        sm: "325px",
      },
      colors: {
        ...colors,
        contact: {
          "shades-bg": "var(--shades-bg)",
          "shades-black": "var(--shades-black)",
          "shades-white": "var(--shades-white)",
          "gray-100": "var(--gray-100)",
          "gray-200": "var(--gray-200)",
          "gray-400": "var(--gray-400)",
          "dark-teal-80": "var(--dark-teal-80)",
          "teal-80": "var(--teal-80)",
          "teal-100": "var(--teal-100)",
          "shades-gray-3": "var(--shades-gray-3)",
          "shades-gray-2.5": "var(--shades-gray-25)",
          "shades-gray-2": "var(--shades-gray-2)",
          "shades-gray-1": "var(--shades-gray-1)",
          "red-500": "var(--red-500)",
          "green-100": "var(--green-100)",
          "red-600": "var(--red-600)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
