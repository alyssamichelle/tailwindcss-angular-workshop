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
        'charms': {
          'hearts': 'rgba(247, 172, 208, 1.000)',
          'stars': 'rgba(251, 221, 35, 1.000)',
          'shoes': 'rgba(190, 154, 195, 1.000)',
          'clovers': 'rgba(67, 180, 108, 1.000)',
          'moons': 'rgba(11, 169, 237, 1.000)',
          'gold': 'rgba(254, 203, 49, 1.000)',
          'rainbows': 'rgba(17, 167, 235, 1.000)',
          'balloons': 'rgba(240, 100, 130, 1.000)',
        },
        'hermajesty': {
          'mane': '#3A1772',
          'body': '#F8FFFD',
        },
        'trogdor': 'rgba(96, 178, 79, 1.000)',
        'blue': {
          '200': '#7F0799'
        }
      },
      backgroundColor: {
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