
'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({camelize: true}),
    files = require('./../gulp.filelist.js');

gulp.task('js:lint', function () {

  // laxcomma
  var packageJSON = require('./../package');
  var jshintConfig = packageJSON.jshintConfig;

  return gulp.src(files.app_files())
    .pipe(plugins.jshint(jshintConfig))
    .pipe(plugins.jshint.reporter(plugins.stylish))
    .pipe(plugins.duration('js:lint duration'));
});