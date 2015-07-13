
'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({camelize: true}),
    files = require('./../gulp.filelist.js');

/*gulp.task('styles:sass', ['styles:sass:layout', 'styles:sass:themes'], function () {
});*/
gulp.task('styles:sass', ['styles:sass:layout'], function () {
});

/**
 * Convert SASS layout files (styling for sizes, locations, layout, etc.)
 * into an minified app.min.css files for the dist/css build directory
 */
gulp.task('styles:sass:layout', function () {
  gulp.src(files.sass_src())
    // convert SASS into app.css file
    .pipe(plugins.sass({ style: 'compressed' }))
    .pipe(plugins.concatSourcemap("app.css", {
      sourceRoot: "/"
    }))
    // minify app.css file
    .pipe(plugins.concat("app.min.css"))
    .pipe(plugins.minifyCss({ keepBreaks: false }))

    // time how long it takes
    .pipe(plugins.duration('styles:sass:layout duration'))

    // move the output to the dist/css build directory
    .pipe(gulp.dest('dist/css'));
});

/**
 * Convert SASS theme files related to colors, borders, etc.
 * into a minified theme.min.css file for the dist/css build directory
 */
gulp.task('styles:sass:themes', function () {

  var themes = ['default', 'light'];

  for (var i = 0; i < themes.length; i++) {
    gulp.src(files.sass_theme_src(themes[i]))
      // Convert SASS to {themeName}.theme.css file
      .pipe(plugins.sass({ style: 'compressed' }))
      .pipe(plugins.concatSourcemap(themes[i] + ".theme.css", {
        sourceRoot: "/"
      }))
      // minify theme.css file
      .pipe(plugins.concat(themes[i] + ".theme.min.css"))
      .pipe(plugins.minifyCss({ keepBreaks: false }))

      // time how long it takes to do this process
      .pipe(plugins.duration('styles:sass:themes duration'))

      // move the output to the dist/css build directory
      .pipe(gulp.dest('dist/css'));
  }
});


/**
 * Convert 3rd party styles into lib.min.css file
 */
gulp.task('styles:lib', function () {
  gulp.src(files.css_lib_files())
    .pipe(plugins.concat("lib.min.css"))
    .pipe(plugins.minifyCss({ keepBreaks: false }))
    .pipe(plugins.duration('styles:lib duration'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('styles:all', function () {
  gulp.start('styles:sass');
  gulp.start('styles:lib');
  //gulp.start('copy-bootstrap-bandaid');
});
