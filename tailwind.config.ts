module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      lap: "1200px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      black: "#000",
      "dark-blue": "#0A2640",
      "light-blue": "#1c3d5b",
      pink: "#ff49db",
      orange: "#F38173",
      green: "#436F65",
      "gray-dark": "#273444",
      gray: "#777",
      grey: "#f2f2f2",
      "gray-light": "#d3dce6",
      white: "#ffffff",
      highlight: "#e31b6d",
      error: "#ff4c4c",
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
        grey: "#f2f2f2",
        orange: "#F38173",
        "orange-dark": "#FF5D49",
        white: "#fff",
        green: "#436F65",
        "gray-light": "#d3dce6",
        "dark-blue": "#0A2640",
        "light-blue": "#1c3d5b",
        blue: "#0DBBFC",
        "light-beige": "#FAF7F4",
        transparent: "transparent",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #444B8C, #26264F)",
        ellipse: "url('../assets/images/ellipse.png')",
        "hero-img-1": "url('../assets/icons/hero-banner-img-1.svg')",
        "hero-img-2": "url('../assets/icons/hero-banner-img-2.svg')",
      },
      boxShadow: {
        simle: "0px 4px 32px 0px rgba(0, 0, 0, 0.08);",
        primary: "0px 4px 15px 0px rgba(10, 38, 64, 0.4)",
      },
    },
    fontFamily: {
      Figtree: ["Figtree", "sans-serif"],
      Fraunces: ["Fraunces", "serif"],
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
