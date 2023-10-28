module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      lap: "1280px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      "dark-blue": "#0A2640",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#777",
      "gray-light": "#d3dce6",
      white: "#ffffff",
      highlight: "#e31b6d",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      padding: {
        'container-descktop': '10px 0 10px 0',
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundColor: {
        black: "#000",
        "dark-blue": "#0A2640",
      },
      boxShadow: {
        simle: "0px 4px 32px 0px rgba(0, 0, 0, 0.08);",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    {
      cssnano: {},
    },
  ],
};
