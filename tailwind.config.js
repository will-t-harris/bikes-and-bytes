const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "blueGray-900": "#102a43",
        "blueGray-800": "#243b53",
        "blueGray-700": "#334e68",
        "blueGray-600": "#486581",
        "blueGray-500": "#627d98",
        "blueGray-400": "#829ab1",
        "blueGray-300": "#9fb3c8",
        "blueGray-200": "#bcccdc",
        "blueGray-100": "#d9e2ec",
        bodyBackground: "#333030",
        navBackground: "#2B2728",
        primary: "#19D938",
        secondary: "#FF7D05",
        accent: "#FF0545",
      },
      spacing: {
        "52": "13rem",
      },
      fontFamily: {
        "roboto-slab": ["roboto slab", ...defaultTheme.fontFamily.sans],
        "open-sans": ["open sans", ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        87: "0.87",
      },
    },
  },
  variants: {},
  plugins: [],
}
