/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '600px'}
    }
  },
  plugins: [],
  color: {
    "grayishBlue": "hsl(217, 19%, 38%)",
    "darkGrayishBlue": "",
    "darkBlue": "hsl(218, 23%, 16%)"
  },
}

