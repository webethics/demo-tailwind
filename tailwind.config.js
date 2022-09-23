const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CA146",
        secondary: "#1F1E17",
        // ...
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
      },

      backgroundImage: {
        "dotted-pattren-top": "url('./assets/images/dotted-pattren-top.svg')",
        "dotted-pattren-bottom": "url('./assets/images/dotted-pattren-bottom.svg')",
      },

      height: { "50px": "50px" },
      maxWidth: {
        "144px": "144px",
        "1920px": "1920px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addComponents, addBase }) {
      addComponents({
        ".btn-primary": {
          padding: "0.59rem 1.2rem",
          borderRadius: "6px",
          backgroundColor: "#4CA146",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .3s cubic-bezier(.4,0,.2,1)",
          minWidth: "125px",
          "&:hover": {
            backgroundColor: "#2B8025",
          },
        },

        ".btn-secondary": {
          padding: "0.59rem 1.2rem",
          borderRadius: "6px",
          backgroundColor: "#1E1D17",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .3s cubic-bezier(.4,0,.2,1)",
          minWidth: "125px",
          "&:hover": {
            backgroundColor: "#2B8025",
          },
        },

        ".btn-outlined": {
          padding: "0.59rem 1.2rem",
          borderRadius: "6px",
          backgroundColor: "transparent",
          border: "1px solid #fff",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .3s cubic-bezier(.4,0,.2,1)",
          minWidth: "125px",
          "&:hover": {
            backgroundColor: "#2B8025",
          },
        },
      });

      addBase({
        body: { color: "#090C1E" },
        h1: {
          fontSize: "3.4rem",
          lineHeight: "1.2",
          color: "#1F1E17",
          fontWeight: "bold",
          "@media (max-width: 1199px)": {
            fontSize: "2.8rem",
          },
          "@media (max-width: 991px)": {
            fontSize: "2rem",
          },
          "@media (max-width: 767px)": {
            fontSize: "1.7rem",
          },
        },
        h2: {
          fontSize: "2.5rem",
          lineHeight: "1.2",
          color: "#1F1E17",
          fontWeight: "bold",
          "@media (max-width: 1199px)": {
            fontSize: "2rem",
          },
          "@media (max-width: 991px)": {
            fontSize: "1.8rem",
          },
          "@media (max-width: 767px)": {
            fontSize: "1.5rem",
          },
        },
        h3: { fontSize: "fontSize.lg" },
        p: {
          fontSize: "18px",
          "@media (max-width: 1199px)": {
            fontSize: "16px",
            lineHeight: "1.6",
          },
          "@media (max-width: 767px)": {
            fontSize: "15px",
          },
        },
      });
    }),
  ],
};
