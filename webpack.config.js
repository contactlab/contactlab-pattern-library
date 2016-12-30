module.exports = {
  entry: {
     PatternLibraryWebsite: "./app/index.js"
  },
  output: {
     filename: "./app/bundle.js",
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: ['node_modules','app/assets/bower','app/bundle.js'],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
