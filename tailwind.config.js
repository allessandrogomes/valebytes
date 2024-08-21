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
        'home': "url('/images/lines.webp')",
        'about': "url('/images/lines-2.webp')",
        'contact': "url('/images/lines-3.webp')"
      },
      colors: {
        'primary': "#213D99",
        'secondary': "#FFFFFF",
        'tertiary': "#3D60D6"
      }
    },
  },
  plugins: [],
}