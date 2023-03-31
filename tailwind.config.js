module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        "lemon-milk": ["Lemon Milk", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        hero: "url('/assets/images/hero-bg.webp')",
      }),
      backgroundColor: {
        primary: "#700B2D",
        secondary: "#686868",
        tertiary: "#D6D6D6",
        quaternary: "#ffffff",
        fallback: "#151515",
      },
      textColor: {
        primary: "#700B2D",
        secondary: "#686868",
        tertiary: "#D6D6D6",
        quaternary: "#ffffff",
      },
      borderColor: {
        primary: "#700B2D",
        secondary: "#686868",
        tertiary: "#D6D6D6",
        quaternary: "#ffffff",
      },
    },
  },
  plugins: [],
};
