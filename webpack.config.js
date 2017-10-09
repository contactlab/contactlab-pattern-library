'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: {
     main: './src/index.js',
     polyfills: './src/polyfills.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
		new WebpackNotifierPlugin({
			title: 'Pattern Library Website',
			alwaysNotify: true
		})
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: ['node_modules','app/assets/bower','app/bundle.js'],
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }, {
      test: /\.html$/,
      loaders: ['babel-loader?presets[]=es2015', 'wc-loader?minify=true']
    }, {
      test: /\.(png|jpg|gif|svg)$/, // handles assets. eg <img src="path.png">
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }]
    }]
  },
  resolve: {
    mainFields: ['browserify', 'browser', 'module', 'main']
  }
};
