module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: { blue_gray_100: "#d6cdce", white_A700: "#ffffff" },
      fontFamily: { helvetica: "Helvetica", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
