import("tailwindcss").Config;
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      philosopher: ["Philosopher", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
