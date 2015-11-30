'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var del = require('del');

// Clean
gulp.task('clean', function (cb) {
    return del(['./dist'], cb);
});
