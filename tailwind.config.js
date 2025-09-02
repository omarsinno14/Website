// tailwind.config.js at project root
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#06B6D4",   // blue
          secondary: "#22C55E", // purple
        },
      },
    },
  },
  plugins: [],
};
