/* 
Configuration parameters
========================
*/
var conf = {
	localPort: 3972,
	cssOutputPath: './dist/css/',
	scssSourcePath: './app/assets/scss/'
}

/* 
Imports
========================
*/
var gulp = require('gulp'),
	webserver = require('gulp-webserver');

/* 
Taks definitions 
========================
*/
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      directoryListing: true,
      host: '0.0.0.0',
      open: true,
      port: conf.localPort
    }));
});

/* 
Actions
========================
*/
gulp.task('default', ['webserver']); 
