/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "text-placeholder": "#706D9E",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
