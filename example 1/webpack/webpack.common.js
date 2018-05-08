/**
 * Embers Project Webpack Common Configuration
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    filename: 'assets/js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'assets/js/[name]-[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, '../dist'), {
      root: __dirname,
      verbose: true,
      allowExternal: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: { fix: true }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader?name=assets/images/[name].[ext]'
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=assets/icons/[name].[ext]'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
