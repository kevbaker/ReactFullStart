const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = 'build';

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, BUILD_DIR),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      { 
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build/'
  },
  plugins: [
      new CopyWebpackPlugin([
        { from: 'src/index.html' },
        { from: 'src/static.html' },
        { from: 'src/styles', to: 'styles' },
        { from: 'src/images', to: 'images' },
    ],{
      ignore: [
        '*.scss',
        '*.jsx'
      ]
    })
  ]
};
