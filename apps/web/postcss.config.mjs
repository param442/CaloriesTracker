// apps/web/tailwind.config.js
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
