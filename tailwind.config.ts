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
      black: "#000",
      "dark-blue": "#0A2640",
      "light-blue": "#1c3d5b",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#65e4a3",
      "gray-dark": "#273444",
      gray: "#777",
      "gray-light": "#d3dce6",
      white: "#ffffff",
      highlight: "#e31b6d",
      error: "#ff4c4c",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      serif: ["Open Sans", "serif"],
    },
    extend: {
      padding: {
        "container-descktop": "10px 0 10px 0",
      },
      inset: {
        "100-20": "calc(100% + 20px)",
        "100-240": "calc(100% - 240px);",
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
        silver: "#C4C4C4",
        white: "#fff",
        green: "#65e4a3",
        "gray-light": "#d3dce6",
        "dark-blue": "#0A2640",
        "light-blue": "#1c3d5b",
        blue: "#0DBBFC",
      },
      backgroundImage: {
        ellipse: "url('../assets/images/ellipse.png')",
      },
      boxShadow: {
        simle: "0px 4px 32px 0px rgba(0, 0, 0, 0.08);",
        primary: "0px 4px 15px 0px rgba(10, 38, 64, 0.4)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xsm: "0",
        sm: "2rem",
      },
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
