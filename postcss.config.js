module.exports = {
  plugins: {
    'postcss-import-ext-glob': {},
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions"
    },
    'tailwindcss': {},
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production',
    'postcss-utilities': {},
    'precss': {},
  }
};
