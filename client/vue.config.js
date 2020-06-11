
let path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'?'./' : './',
  outputDir: '../../output/client',
  assetsDir: 'assets',
  productionSourceMap: false,
  lintOnSave: false,
  
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8887,
  },
  chainWebpack: (config) => {
    config.resolve.alias
        .set('@', resolve('src'))
        .set('@utils', resolve('src/utils'))
        .set('@plugins', resolve('src/plugins'));
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({symbolId: 'icon-[name]'})
        .end()
  },
};
