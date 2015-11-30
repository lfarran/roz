'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({camelize: true}),
    files = require('./../gulp.filelist.js');
var runSequence = require('run-sequence');

gulp.task('fonts:fontawesome', function () {
  // fonts
  gulp.src([
    './bower_components/fontawesome/fonts/*.*'
  ])
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(plugins.duration('fonts:fontawesome'));
});


gulp.task('fonts:bootstrap', function() {
  return gulp.src([
    //config.bowerDir + '/bootstrap-sass/assets/fonts/**/*'
    //files.configPath().bowerDir + '/bootstrap-sass/assets/fonts/**/*'
    './bower_components/bootstrap-sass/assets/fonts/**/*'
  ])
    //.pipe(gulp.dest(config.publicDir + '/fonts'));
  //.pipe(gulp.dest(files.configPath().publicDir + '/fonts'));
  .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('fonts:all', function (cb) {
  runSequence(['fonts:fontawesome', 'fonts:bootstrap'], cb);
});
