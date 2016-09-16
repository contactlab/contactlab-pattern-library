/*
Configuration parameters
========================
*/
var conf = {
  scssSourcePath: './app/assets/scss/**/*.{scss,sass}',
  jsSourcePath: './app/**/*.{js,jsx}',
  localPort: 5792,
  es6SourcePath: './app/**/*es6.js',
  cssOutputPath: './app/assets/css/',
  distCSS: './dist/css/'
}


/*
Imports
========================
*/
// var gulp = require('gulp'),
var gulp = require('gulp-param')(require('gulp'), process.argv),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps')
    gutil = require("gulp-util"),
    // webpack = require("webpack"),
    connect = require('gulp-connect'),
    compass = require('gulp-compass'),
    path = require("path"),
    babel = require("gulp-babel"),
    watch = require('gulp-watch'),
    rename = require("gulp-rename"),
    ghPages = require('gulp-gh-pages')
    plumber = require('gulp-plumber');


/*
Taks definitions
========================
*/

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
gulp.task('connect', function (port) {
  !port ? port = 3000 : port;
  console.log(port);
  connect.server({
    root: 'app',
    port: port,
    // livereload: true
  });
});

// Compiles SASS to CSS
// gulp.task('sass', function () {
//   gulp.src(conf.scssSourcePath)
//   	.pipe(sourcemaps.init())
//     .pipe(sass({
//       compass: true,
//       errLogToConsole: true
//     }))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(conf.cssOutputPath));
// });
gulp.task('sass', function () {
  return gulp.src(conf.scssSourcePath)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(conf.cssOutputPath));
});

gulp.task('compass', function() {
 gulp.src('./app/assets/scss/*.scss')
   .pipe(sourcemaps.init())
   .pipe(compass({
     config_file: './config.rb',
     css: './app/assets/css',
     sass:'./app/assets/scss'
   }))
   .pipe(gulp.dest(conf.cssOutputPath));
});




gulp.task('watch-sass', function() {
  gulp.watch([conf.scssSourcePath], ['sass']);
});

gulp.task('watch-es6', function() {
  return gulp.src(conf.es6SourcePath)
    .pipe(plumber())
    .pipe(watch(conf.es6SourcePath))
    .pipe(babel())
    .pipe(rename(function(path){
        path.basename = path.basename.replace(/.es6$/, '');
        console.log('updated: '+path.basename);
    }))
    .pipe(gulp.dest('./app'));
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
