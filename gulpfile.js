/*
Configuration parameters
========================
*/
var conf = {
  scssSourcePath: './app/assets/scss/**/*.{scss,sass}',
  cssOutputPath: './app/assets/css/',
  cssMinifyPAth: './app/assets/css/*.css',
  jsMinifyPath: './app/modules/library/src/*.js',
  jsOutputPath: './app/modules/library/',
  polymerSourcePath: './app/components/**/*.html',
  dist: './app/dist'
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
    ghPages = require('gulp-gh-pages'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    merge = require('merge2'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemap = require('gulp-sourcemaps'),
    es = require('event-stream'),
    uglify =require('gulp-uglify'),
    vulcanize = require('gulp-vulcanize');


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

// Added build-sass task to watch-sass task, css will be built every time a sass file has been changed
gulp.task('watch-sass', function() {
  gulp.watch([conf.scssSourcePath], ['sass'], ['build-sass']);
});

// Watch every .js file for changes except bundle.js and run the Webpack action, plus it prints out on the terminal which files has changed
gulp.task('watch-js', function(){
  gulp.watch(['./app/**/*.js','!./app/bundle.js'], ['webpack']);
  gulp.watch(['./app/**/*.js','!./app/bundle.js'], function(arg){
    console.log('something changend', arg)
  });
});

// Compile every SASS and SCSS files into in build min css
gulp.task('build-sass', function() {
    var vendorFiles = gulp.src(conf.cssOutputPath);
    var appFiles = gulp.src(conf.scssSourcePath)
        .pipe(sass({ style: 'compressed' }).on('error', gutil.log));

    return es.concat(vendorFiles, appFiles)
        .pipe(concat('build.css'))
        .pipe(autoprefixer('last 10 version'))
        .pipe(gulp.dest(conf.cssOutputPath))
        .pipe(minifyCSS(conf.cssMinifyPAth))
        .pipe(gulp.dest(conf.cssOutputPath));
});

// Concatnates all global js files to 1 compiled-build file
gulp.task('build-scripts', function() {
  gulp.src([conf.jsMinifyPath])
    .pipe(concat('compiled-build.js'))
    .pipe(gulp.dest(conf.jsOutputPath))
});

// Vulcanizes all of the Polymer components in the directory
gulp.task('build-vulcanize', function () {
    return gulp.src(conf.polymerSourcePath)
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripExcludes: false
        }))
        .pipe(gulp.dest(conf.dist));
});

gulp.task('deploy', function() {
  return gulp.src(['./app/**/*', 'CNAME'])
    .pipe(ghPages());
});


/*
Actions
========================
*/

// Launch a webserver and watch for *.scss, *.js, *.jsx changes and recompiles in plain .css or .js in the /dist folder
gulp.task('default', ['connect']);
gulp.task('ux', ['connect', 'watch-sass']);
gulp.task('dev', ['connect', 'watch-js']);
gulp.task('update',['build-sass','build-scripts','build-vulcanize','connect'])
