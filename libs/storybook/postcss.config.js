const { join } = require('path');

// Note: If you use library-specific PostCSS/Tailwind configuration then you should remove the `postcssConfig` build
// option from your application's configuration (i.e. project.json).
//
// See: https://nx.dev/guides/using-tailwind-css-in-react#step-4:-applying-configuration-to-libraries

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: join(__dirname, '../../apps/marketplace/tailwind.config.js'),
    },
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': false,
      },
    },
  },
};
