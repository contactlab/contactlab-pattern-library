'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './polymer.html'
  ],
  output: {
    path: path.join(__dirname, './'),
    filename: 'polymer.js',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.html$/,
      loaders: ['wc-loader']
    }]
  }
}