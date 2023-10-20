import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main-purple": "#BA68C8",
        "accent-orange":  "#FFB74D",
        "background-grey": "#2C2D2D"
      },
    },
  },
  plugins: [],
}
export default config
