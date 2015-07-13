
'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({camelize: true});

// Automatically install npm and bower packages
//  if package.json or bower.json is found in the gulp file stream respectively
gulp.task('npmBower:install', function() {
  gulp.src(['bower.json', 'package.json'])
    .pipe(plugins.install());
});