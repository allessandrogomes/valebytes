/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/images/background.jpg')",
        'work': "url('/images/work.jpg')",
        'round': "url('/images/round.png')",
        'fill': "url('/images/fill.png')",
        'waves': "url('/images/waves.png')"
      },
      colors: {
        'primary': "#213D99",
        'secondary': "#161C2D"
      }
    },
  },
  plugins: [],
}