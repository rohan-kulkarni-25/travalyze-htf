/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      // xl: { max: "1350px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1700px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "900px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "750px" },
      //
    },
    extend: {},
  },
  plugins: [],
};
