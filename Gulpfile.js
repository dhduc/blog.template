/*
 * Gulpfile.js
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var input = 'scss/*.scss';
var output = 'css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// Sass compile
gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest(output));
});

// Sass watch
gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});