/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      blackColor: "#000",
      whiteColor: "#fff",
      navBarLowOpacityColor: "rgba(0,0,0,0.5)",
      lowBorderColor: "rgba(0,0,0,0.105)",
      primaryColor: "rgb(255,61,0)",
      navBarActiveColor: "#cccccc7a",
      navBarDeActiveColor: "#f2f2f2",
      toolLinksBgColor: "rgba(255,171,145,1)",
      searchColorIconColor: "red",
      mainPageSliderBg: "#EFEBED",
      mainBgColor: "#f6f6f6",
    },
  },
  plugins: [],
};
