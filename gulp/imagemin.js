'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({camelize: true}),
    files = require('./../gulp.filelist.js');

gulp.task('imagemin', function() {
  gulp.src(files.image_src())
    .pipe(plugins.imagemin())
    .pipe(plugins.flatten()) // put all of the images in the root dist/images directory
    //.pipe(gulp.dest('dist/images'))
    .pipe(gulp.dest('dist/img'))
    .pipe(plugins.duration('imagemin'));
});
