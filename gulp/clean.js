
'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({camelize: true}),
    rimraf = require('rimraf');

// Clean
gulp.task('clean', function (cb) {
    rimraf('./dist', cb);
});
