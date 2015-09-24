/* 
Configuration parameters
========================
*/
var conf = {
  scssSourcePath: './app/assets/scss/**/*.{scss,sass}',
  jsSourcePath: './app/**/*.{js,jsx}',
  localPort: 5792,
  cssOutputPath: './app/assets/css/',
  distCSS: './dist/css/'
}


/* 
Imports
========================
*/
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps')
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    connect = require('gulp-connect'),
    compass = require('gulp-compass');


/* 
Taks definitions 
========================
*/

gulp.task('compass', function() {
 gulp.src('./app/assets/scss/*.scss')
   .pipe(sourcemaps.init())
   .pipe(compass({
     config_file: './config.rb',
     css: './app/assets/css',
     sass:'./app/assets/scss'
   }))
   .pipe(gulp.dest('./app/assets/css'));
});


// Webpack actions
gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        entry: './app/app.js',
      output: {
          filename: './app/assets/js/bundle.js',
      },
      module: {
          loaders: [
              {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
              },{
                test: /masonry-layout/,
                loader: 'imports?define=>false&this=>window'
              }
          ]
      },
      /*externals: {
          //don't bundle the 'react' npm package with our bundle.js
          //but get it from a global 'React' variable
          'react': 'React'
      },*/
      resolve: {
          extensions: ['', '.js', '.jsx']
      }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

// Server
gulp.task('connect', function () {
  connect.server({
    root: 'app',
    port: 3000,
    livereload: true
  });
});

// Compiles SASS to CSS
gulp.task('sass', function () {
  gulp.src(conf.scssSourcePath)
  	.pipe(sourcemaps.init())
    .pipe(sass({
      compass: true,
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.cssOutputPath));
});

// Watch file changes
gulp.task('watch', function() {
  gulp.watch([conf.scssSourcePath, conf.jsSourcePath], ['compass'])
})


/* 
Actions
========================
*/

// Launch a webserver and watch for *.scss, *.js, *.jsx changes and recompiles in plain .css or .js in the /dist folder
gulp.task('default', ['connect', 'watch']); 
