module.exports = {
  plugins: {
    'postcss-import-ext-glob': {},
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions"
    },
    'tailwindcss': {},
    'postcss-utilities': {},
    'precss': {},
    'rucksack-css': {},
    // '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production',
  }
};
