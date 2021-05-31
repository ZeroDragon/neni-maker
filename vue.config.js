module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/neni-maker/' : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Neni Maker'
        return args
      })
  }
}
