/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navOne: "#131921",
        navTwo: "#232f3e",
        bodyMain: "#e3e6e6",
        cardBg: "#fff",
        backTopBg: "#485769",
        footerOne: "#232f3e",
        footerTwo: "#131a22",
        signInBg: "#FEBD69",
        signInBgShade: "#e5aa5f",
        bestDealBg: "#cc0c39",
        selectBg: "#d4d4d4",

        textPrimary: "#0f1111",
        textLink: "#007185",
        textActive: "#da8c6b",
        textNavLight: "#cccccc",
        textFooterLight: "#ddd",
        textFooterDark: "#999",
        textWhite: "#fff",
        textBlue: "#0d788b",
        textLightGray: "#55555",

        btnPrimary: "#f7ca00",
        btnSecondary: "#fa8900",
        btnPrimaryDark: "#deb600",
        btnSecondaryDark: "#e17b00",
      },
      fontSize: {
        fontSizePrimary: "0.875rem",
        fontSizeSecondary: "0.75rem",
        fontSizeHeader: "1.313rem",
        fontSizeSecondaryHeader: "1.5rem",
      },
      fontFamily: {
        AmazonEmberReg: ["AmazonEmberReg", "Arial", "sans-serif"],
        AmazonEmberLg: ["AmazonEmberLg", "Arial", "sans-serif"],
        AmazonEmberbold: ["AmazonEmberbold", "Arial", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        semi: 500,
        bold: 700,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          "::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
