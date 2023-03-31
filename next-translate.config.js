module.exports = {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    loadLocaleFrom: (locale, namespace) =>
      import(`./translations/${namespace}.json`).then((m) => m[locale]),
    pages: {
      '*': ['common'],
      '/': ['home'],
      '/about': ['about'],
      '/projects': ['projects'],
      '/blog': ['blog'],
    },
  };
  