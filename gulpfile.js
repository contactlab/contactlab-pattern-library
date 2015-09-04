/* 
Configuration parameters
========================
*/
var conf = {
	scssSourcePath: './app/assets/scss/**/*.{scss,sass}',
	localPort: 5792,
	cssOutputPath: './dist/css/'
}


/* 
Imports
========================
*/
var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');


/* 
Taks definitions 
========================
*/

// Create a webserver and open browser on location
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      directoryListing:{
		    enable:true,
		    path: 'app/',
		    fallback: 'index.html'
		},
		host: '0.0.0.0',
		fallback: './app/index.html',
		open: true,
		port: conf.localPort
    }));
});

// Compiles SASS to CSS
gulp.task('sass', function () {
  gulp.src(conf.scssSourcePath)
  	.pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.cssOutputPath));
});

// Watch file changes
gulp.task('watch', function() {
  gulp.watch(conf.scssSourcePath, ['sass'])
})


/* 
Actions
========================
*/

// Launch a webserver and watch for *.scss, *.js, *.jsx changes and recompiles in plain .css or .js in the /dist folder
gulp.task('default', ['webserver', 'watch']); 
