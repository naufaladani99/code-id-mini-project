module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    ,
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
  ],
};
