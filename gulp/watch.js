'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({camelize: true});
var files = require('./../gulp.filelist.js');

gulp.task('watch', ['default'], function () {

  // Watchfiles
  gulp.watch('bower_components/**/*.js', ['js:lib']);
  gulp.watch(files.app_files(), ['js:app']);
  gulp.watch(files.css_lib_files(), ['sass:lib']);
  gulp.watch('app/**/*.scss', ['styles:sass']);
  //gulp.watch('app/**/*.html', ['js:html2js']);
  gulp.watch('app/*.html', ['copy-index-html']);
  gulp.watch('Gulpfile.js', ['js:all', 'styles:all']);


  //// Watch image files
  gulp.watch('app/images/**/*', ['images']);

});

gulp.task('connect', function () {
  plugins.connect.server({
    root: './dist',
    port: 8889,
    livereload: true
  });
});

gulp.task('dev', ['watch', 'connect'],
  function () {
    //
  });
