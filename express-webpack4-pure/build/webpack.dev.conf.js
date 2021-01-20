const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    new ExtractTextPlugin({
      filename: utils.assetsPath('styles/[name].[md5:contenthash:hex:8].css'),
      allChunks: false
    }),
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
