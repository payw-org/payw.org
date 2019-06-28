export default {
  globalName: 'payw',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  build: {
    publicPath: '/dist/'
  },
  css: [
    {
      src: 'assets/scss/globalstyle.scss',
      lang: 'scss'
    },
    {
      src: 'assets/css/fonts_new.css'
    }
  ]
}