/*
Configuration parameters
========================
*/
var conf = {
  scssSourcePath: './app/assets/scss/**/*.{scss,sass}',
  cssOutputPath: './app/assets/css/'
}


/*
Imports
========================
*/
// var gulp = require('gulp'),
var gulp = require('gulp-param')(require('gulp'), process.argv),
    sass = require('gulp-sass'),
    gutil = require("gulp-util"),
    notify = require("gulp-notify"),
    webpack = require("gulp-webpack"),
    webpackConfig = require('./webpack.config.js'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    ghPages = require('gulp-gh-pages');


/*
Taks definitions
========================
*/

// Server
gulp.task('connect', function (port) {
  !port ? port = 3000 : port;
  console.log(port);
  connect.server({
    root: 'app',
    port: port,
  });
});

// Load the configuration file and execute Webpack using `./app/index.js` as entry point
gulp.task('webpack', function() {
  var config = Object.assign({}, webpackConfig);
  return gulp.src('./app/index.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('app'))
    .pipe(notify("Webpack build completed!"))
    .on('error', function() {
      notify("Webpack build failed!")
    });
});

// Compiles SASS to CSS
gulp.task('sass', function () {
  return gulp.src(conf.scssSourcePath)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(conf.cssOutputPath));
});

gulp.task('watch-sass', function() {
  gulp.watch([conf.scssSourcePath], ['sass']);
});


gulp.task('deploy', function() {
  return gulp.src('./app/**/*')
    .pipe(ghPages());
});


/*
Actions
========================
*/

// Launch a webserver and watch for *.scss, *.js, *.jsx changes and recompiles in plain .css or .js in the /dist folder
gulp.task('default', ['connect']);
gulp.task('ux', ['connect', 'watch-sass']);
gulp.task('dev', ['connect', 'watch-es6']);
