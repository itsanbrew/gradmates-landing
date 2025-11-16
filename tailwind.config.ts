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
        'dark-navy': '#1B1F3B',
        'sky-blue': '#66B2FF',
        'anchor': '#0072CE',
        'accent': '#FF6F61',
        'orange': '#FD9E09',
        'cool-grey': '#F5F6FA',
      },
    },
  },
  plugins: [],
}
export default config






