module.exports = {
  content: ['site/layouts/**/*.html'],
  whitelist: ['loading', 'yeah', 'nav-active', 'subnav-active'],
  extractors: [
    {
      extensions: ['html', 'svg', 'js'],
      extractor: class TailwindExtractor {
        static extract (content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },
    },
  ],
}