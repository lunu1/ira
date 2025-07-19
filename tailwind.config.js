// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     fontFamily: {
        libre: ['"Libre Baskerville"', 'serif'],
      },
      colors: {
        primary: "red", //#C78A3B
      },
    },
  },
  plugins: [],
};
