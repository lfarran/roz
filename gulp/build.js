'use strict';

var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({camelize: true}),
  files = require('./../gulp.filelist.js');
var runSequence = require('run-sequence');

// Js-Libs
gulp.task('js:lib', function () {
  gulp.src(files.js_lib_src)
    .pipe(plugins.concat('lib.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js:app', ['js:lint'], function () {
  return gulp.src(files.app_files())
    .pipe(plugins.concat('app.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/js'));
});

/**
 * generates AngularJS modules, which pre-load your HTML code into the $templateCache.
 * This way AngularJS doesn't need to request the actual HTML files anymore
 */
gulp.task('js:html2js', function () {
  var htmlStream = gulp.src(files.template_src())
    .pipe(plugins.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      comments: true
    }))
    .pipe(plugins.ngHtml2js({
      moduleName: "lbf.templates",
      declareModule: false,
      rename: function (url) {
        var paths = url.split('/');
        var fileName = paths[paths.length - 1];
        return fileName;//.replace('.html', '');
      }
      //prefix: "/App/"
    }))
    .pipe(plugins.concat("templates.js"))
    .pipe(plugins.insert.prepend("angular.module('lbf.templates', []);"));

  return htmlStream.pipe(plugins.concat('templates.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(plugins.duration('js:app.min duration'))
    .pipe(gulp.dest("./dist/js"))
    .pipe(plugins.duration('js:html2js duration'));
});

gulp.task('js:all', function (cb) {
  runSequence(['js:lib', 'js:app', 'js:html2js'], cb);
});

gulp.task('build', ['clean'], function(cb) {
  runSequence('imagemin', [ 'copy-index-html',
                            'copy-jquery',
                            'copy-jquery-easing',
                            'copy-bootstrap-js',
                            'copy-fontawesome-css',
                            'copy-libraries-css',
                            'copy-libraries-js',
                            'copy-app-js',
                            //'js:all',
                            'styles:all',
                            'fonts:all'], cb);
});

gulp.task('build-deploy', function(cb) {
  // compress CSS & JavaScipt files
  runSequence(['css-gzip', 'js-gzip', 'deploy-image-copy', 'deploy-fonts-copy', 'deploy-index'], cb);
});

// Gzip files
gulp.task('css-gzip', function(){
  return gulp.src('./dist/css/*.css')
    .pipe(plugins.gzip({ append: false }))
    .pipe(gulp.dest('./www/css'))
});

gulp.task('js-gzip', function(){
  return gulp.src('./dist/js/**/*.js')
    .pipe(plugins.gzip({ append: false }))
    .pipe(plugins.duration('js-gzip duration'))
    .pipe(gulp.dest("./www/js"));
});

gulp.task('deploy-image-copy', function() {
  gulp.src(['./dist/images/**/'])
    .pipe(plugins.duration('deploy-image-copy duration'))
    .pipe(gulp.dest('./www/images'));
});

gulp.task('deploy-fonts-copy', function() {
  gulp.src(['./dist/fonts/**/'])
    .pipe(plugins.duration('deploy-fonts-copy duration'))
    .pipe(gulp.dest('./www/fonts'));
});

gulp.task('deploy-index', function() {
  gulp.src(['./dist/index.html'])
    .pipe(plugins.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      comments: true
    }))
    .pipe(plugins.duration('deploy-index duration'))
    .pipe(gulp.dest('./www/'));
});

