module.exports = {
  entry: {
     page1: "./app/index.js"
  },
  output: {
     // Make sure to use [name] or [id] in output.filename
     //  when using multiple entry points
     filename: "bundle.js",
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // exclude: /(node_modules|bower_components)/,
        exclude: ['node_modules','app/assets/bower','app/bundle.js'],
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          // presets: ['es2015']
          // plugins: ["lodash"]
        }
      }
    ]
  }
};
