import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cmykRed: '#ed1c24',
        cmykBlue: '#0054a6'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config