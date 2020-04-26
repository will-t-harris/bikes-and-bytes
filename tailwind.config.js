module.exports = {
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
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
}
