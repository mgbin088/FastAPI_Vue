
let path = require('path');
let glob = require('glob');

function resolve(dir) {
  return path.join(__dirname, dir);
}


function getEntry(pagePath) {
  let entries = {}, basename, tmp, pathname;
  
  glob.sync(pagePath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    
    tmp = entry.split('/').splice(-3);
    pathname = basename;
    let fileIs = glob.sync(entry + tmp[1] + ".html");
    entries[pathname] = {
      entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] +'.js',
      template: fileIs.length? 'src/' + tmp[0] + '/' + tmp[1] + '/'+ tmp[1] + '.html': 'public/index.html',
      title: "",
      filename: tmp[1] + ".html",
      chunk: ['chunk-vendors', 'chunk-common', pathname]
    };
  });
  return entries
}

let pages = getEntry('./src/pages/**?/');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'?'./' : './',
  outputDir: '../../output/client',
  assetsDir: 'static',
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
        .set('@pages', resolve('src/pages'))
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
  pages: pages
};
