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
        'color1': "#3D60D6",
        'color2': "#FFFFFF",
        'color3': "#3D60D6",
        'color4': "#021526",
        'color5': "#FAFAFA"
      }
    },
  },
  plugins: [],
}