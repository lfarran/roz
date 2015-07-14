'use strict';

var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({camelize: true}),
  files = require('./../gulp.filelist.js');

// Js-Libs
gulp.task('js:lib', function () {

  gulp.src(files.js_lib_src())
    .pipe(plugins.uglifyjs('lib.min.js', {
      outSourceMap: true,
      output: {
        source_map: {
          file: "lib.min.js",
          root: "/"
        }
      }
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js:app', ['js:lint'], function () {


  //gulp.src(files.app_files())
  //  .pipe(plugins.ngAnnotate())
  //  .pipe(plugins.concatSourcemap("app.js", {
  //    sourceRoot: "/"
  //  }))
  //  //.pipe(gulp.dest('dist/js'));

  gulp.src(files.app_files())
    .pipe(plugins.uglifyjs('app.min.js', {
      outSourceMap: "app.min.js.map",
      output: {
        source_map: {
          file: "app.min.js",
          root: "/"
        }
      }
    }))
    .pipe(plugins.duration('js:app duration'))
    .pipe(gulp.dest('dist/js'));
});

/**
 * generates AngularJS modules, which pre-load your HTML code into the $templateCache.
 * This way AngularJS doesn't need to request the actual HTML files anymore
 */
//gulp.task('js:html2js', function () {
//
//  gulp.src(['dist/js/templates.js, dist/js/templates.min.js'], { read: false })
//  //.pipe(plugins.clean());
//
//  var htmlStream = gulp.src(files.template_src())
//    .pipe(plugins.minifyHtml({
//      empty: true,
//      spare: true,
//      quotes: true
//    }))
//    .pipe(plugins.ngHtml2js({
//      moduleName: "lbf.templates",
//      declareModule: false,
//      rename: function (url) {
//        var paths = url.split('/');
//        var fileName = paths[paths.length - 1];
//        return fileName;//.replace('.html', '');
//      }
//      //prefix: "/App/"
//    }))
//    .pipe(plugins.concat("templates.js"))
//    .pipe(plugins.insert.prepend("angular.module('lbf.templates', []);"));
//
//
//  //htmlStream.pipe(gulp.dest("./dist/js"));
//
//  htmlStream.pipe(plugins.uglifyjs('templates.min.js', {
//    outSourceMap: true,
//    output: {
//      source_map: {
//        file: "templates.min.js",
//        root: "/"
//      }
//    }
//  }))
//    .pipe(plugins.duration('js:html2js duration'))
//    .pipe(gulp.dest("./dist/js"));
//});

// TODO: LBF 4/4/15
gulp.task('copy-jquery-bandaid', function () {
  // fonts
  gulp.src([
    //'./app/js/jquery.js',
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/jquery/dist/jquery.min.map'
    //'./app/js/bootstrap.min.js'
  ])
    .pipe(gulp.dest('./dist/js'))
    .pipe(plugins.duration('copy-jquery-bandaid'));
});

gulp.task('js:all', function () {
  gulp.start('js:lib');
  gulp.start('js:app');
  //gulp.start('js:html2js');
});

gulp.task('build', ['clean'], function() {
  gulp.start('npmBower:install');
  gulp.start('copy-index-html');
  //gulp.start('copy-angular');
  //gulp.start('copy-scripts');
  gulp.start('copy-jquery-bandaid');

  gulp.start('js:all');
  gulp.start('styles:all');
  gulp.start('fonts:all');
  gulp.start('imagemin');
});

