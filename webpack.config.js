const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: {
     PatternLibraryWebsite: './app/index.js'
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
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
    }]
  },
  resolve: {
    mainFields: ['browserify', 'browser', 'module', 'main']
  }
};
