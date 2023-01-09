/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "767px",
      laptop: "1024px",
      phone: "486px",
      "smallest-phone": "375px",
    },
    extend: {
      borderStyle: ["hover"],
      fontFamily: {
        sevillana: ['"Sevillana"', "cursive"],
      },
      colors: {
        pinky: " #efb3f9 ",
        bluePastel: "#caeef5",
        blueGray: "#3b8c9c",
        dividers:"#286673"
      },
    },
  },
  plugins: [],
};
