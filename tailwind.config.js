/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#D4E7C5",
          "secondary": "#BFD8AF",
          "accent": "#99BC85",
          "neutral": "#EEE7DA",
          "base-100": "#F2F1EB",
        },
      },
      "light", "dark", "valentine"],
  },
}