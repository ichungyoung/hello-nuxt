export default {
    router: {
        middleware: 'i18n'
      },
      plugins: [
        {src: '~/plugins/i18n.js'},
        {src: '~/plugins/vflagicon.js'}
      ],
      generate: {
        routes: ['/', '/about', '/zh', '/zh/about', '/en', '/en/about']
      }
}