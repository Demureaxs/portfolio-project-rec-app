/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primarylight: '#DD5577',
        primary: '#DA4167',
        primarydark: '#CC2851',
        secondarylight: '#094586',
        secondary: '#083D77',
        secondarydark: '#07325F',
        silversandlight: '#DDE0E4',
        silversand: '#C4CAD0',
        silversanddark: '#AFB7C0',
        lightcyan: '#DEFFFC',
        charcoallight: '#3F5878',
        charcoal: '#2E4057',
        charcoaldark: '#2A3A50',
        magnolia: '#FCF7FF',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
      },
    },
  },
  plugins: [],
};
