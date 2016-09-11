/// <binding Clean='clean' AfterBuild='postbuild' />

var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    pathinfo: true,
    path: helpers.root('dist','client'),
    publicPath: 'http://localhost:8000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
      contentBase: ".",
      host: "localhost",
      port: 9000
  }
});