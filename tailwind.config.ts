module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "340px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      lap: "1200px",
      xl: "1440px",
    },
    colors: {
      "primary-orange": "#F38173",
      "primary-green": "#436F65",
      "orange-dark": "#F38185",
      "green-dark": "#436F75",
      white: "#fff",
      balack: "#000",
      "border-color": "#E8E2DC",
      "light-gray": "#FAF7F4",
      gray: "#E8E2DC",
    },
    extend: {
      padding: {
        "container-descktop": "10px 0 10px 0",
      },
      inset: {},
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {},
      backgroundColor: {
        "bg-primary-orange": "#F38173",
        "bg-orange-dark": "#F38185",
        "bg-primary-green": "#436F65",
        "bg-green-dark": "#436F75",
        "bg-white": "#fff",
        "bg-balack": "#000",
        "bg-light-gray": "#FAF7F4",
        "bg-gray": "#E8E2DC",
      },
      backgroundImage: {},
      boxShadow: {},
    },
    fontFamily: {
      Figtree: ["Figtree", "sans-serif"],
      Fraunces: ["Fraunces", "serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
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
