/**
 * Embers Project Webpack Development Configuration
 */
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code Lakeland Example 2',
      template: 'src/template.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin({
      __API_HOST__: JSON.stringify('https://api.m2gen.com/'),
      __API_VERSION__: JSON.stringify('v1')
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: true
    }),
    new ExtractTextPlugin({
      filename: 'assets/styles/app.[chunkhash].css',
      allChunks: true
    })
  ],
  module: {
    rules: [
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }]
  }
});
