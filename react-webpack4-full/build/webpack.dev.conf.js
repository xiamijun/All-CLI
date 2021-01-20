const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

let devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: false
    })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热更新
  ],
  optimization: {
    splitChunks: {
      name: 'vendor'
    }
  }
});

//添加webpack html plugin
devWebpackConfig = utils.addHTMLPlugin(devWebpackConfig);

module.exports = devWebpackConfig;
