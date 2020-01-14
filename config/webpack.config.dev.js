const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

module.exports = merge(webpackConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    inline: true,
    open: true,
    host: 'localhost',
    port: 8080,

    // SSR用設定
    // Devの場合、webpack-dev-serverで転送する
    proxy: {
      // /contact配下を全て3000に転送する場合は、
      // '/contact/**'と記述する
      '/contact': {
        target: 'http://localhost:3000',
        secure: false,
        logLevel: 'debug'
      }
    },
  }
})