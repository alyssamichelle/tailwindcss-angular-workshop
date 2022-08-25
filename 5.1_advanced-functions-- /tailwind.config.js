/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'anchor': '0px 1px 0px 0px rgba(125,211,252,1)',
        'anchor-hover': '0px 2px 0px 0px rgba(125,211,252,1)',
      },
      colors: {
        'blue': {
          '200': '#7F0799'
        }
      },
      spacing: {
        '5': '1px'
      }
    },
  },
  plugins: [],
}