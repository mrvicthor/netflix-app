module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};
