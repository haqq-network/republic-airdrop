const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, '../../libs/**/*!(*.spec).{ts,tsx,html}'),
  ],
  theme: {
    extend: {
      colors: {
        'default-green': '#74F051',
        'light-green': '#B6EAA7',
        graphite: '#3A3A3A',
        'light-graphite': '#AAABB2',
        'dark-graphite': '#252528',
        'main-yellow': '#E3A13F',
        'main-red': '#FF5454',
        'modal-overlay': 'rgba(19, 19, 19, 0.9)',
        'modal-background': '#1B1B1B',
        'header-background': '#0D0D0E33',
        'haqq-black': '#0D0D0E',
        'haqq-green': '#01B26E',
        'haqq-border': '#FFFFFF3D',
      },
      fontFamily: {
        inconsolata: 'var(--font-inconsolata)',
        clash: ['var(--font-clash)'],
        guise: ['var(--font-guise)'],
      },
      fontSize: {
        lg: ['18px', '26px'],
      },
      boxShadow: {
        'modal-shadow': '0px 24px 24px rgba(0, 0, 0, 0.05)',
        'dropdown-shadow': '0 10px 30px -10px rgba(0, 0, 0, 0.15)',
      },
      dropShadow: {
        'tooltip-drop-shadow': '0 2px 8px rgba(0, 0, 0, 0.4)',
        'modal-drop-shadow': '0px 24px 24px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        md: '744px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      backgroundImage: {
        'rapid-gradient':
          'linear-gradient(to right, transparent, #131313 50%, #131313)',
      },
      backdropBlur: {
        none: '0',
        blur: '20px',
      },
    },
  },
  plugins: [],
};
