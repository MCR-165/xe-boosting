/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Change 'montserrat' to 'title' (optional, but cleaner)
        title: ["var(--font-montserrat)", "sans-serif"],
        // Assign rajdhani to 'sans' to make it the site-wide default
        sans: ["var(--font-rajdhani)", "sans-serif"],
      },
    },
  },
  plugins: [],
};