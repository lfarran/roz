var gulp = require('gulp');
var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
//var uglify = require('gulp-uglifyjs');
var plugins = require('gulp-load-plugins')({camelize: true});
var files = require('./gulp.filelist.js');

require('require-dir')('./gulp');

gulp.task('default',
  function () {
    gulp.start('build');
  });
