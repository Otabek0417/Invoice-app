/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-slate-blue": "#7C5DFA",
        periwinkle: "#9277FF",
        "con-color": "#1E2139",
        "royal-curtsy": "#252945",
        "STOIC-WHITE": "#DFE3FA",
        "PAPILIO-ARGEOTUS": "#888EB0",
        "TRUE-LAVENDER": "#7E88C3",
        "RUINED-SMORES": "#0C0E16",
        "KHMER-CURRY": "#EC5757",
        "AMERICAN-PINK": "#FF9797",
        "PEARL-WHITE": "#F8F8FB",
        "RIVER-STYX": "#141625",
        "CARBON-BLUE": "#373B53",
      },
      backgroundImage: {
        "logo-bg": "url('./assets/logo-bg.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
