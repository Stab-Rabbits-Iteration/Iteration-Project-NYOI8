const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name].[ext]'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    proxy: {
      '/dist': {
        target: 'http://localhost:8080',
        router: () => 'http://localhost:3000'
      },
      '/fetcher': {
        target: 'http://localhost:8080',
        router: () => 'http://localhost:3000'
      },
      '/login': {
        target: 'http://localhost:8080',
        router: () => 'http://localhost:3000'
      },
      '/signup': {
        target: 'http://localhost:8080',
        router: () => 'http://localhost:3000'
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'webpackDev', fileName: 'index.html', template: path.resolve(__dirname, 'index.html') })
  ]
};