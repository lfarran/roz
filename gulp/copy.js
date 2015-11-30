var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});

/**
* Copies app Index.html file into dist/ build directory
*/
gulp.task('copy-index-html', function() {
  gulp.src(['./app/index.html'])
    // Perform minification tasks, etc here
    .pipe(plugins.minifyHtml())
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-jquery', function () {
  gulp.src([
      //'./app/js/jquery.js',
      './bower_components/jquery/dist/jquery.min.js',
      './bower_components/jquery/dist/jquery.min.map'
      //'./app/js/bootstrap.min.js'
    ])
    .pipe(gulp.dest('./dist/js'))
    .pipe(plugins.duration('copy-jquery'));
});

gulp.task('copy-jquery-easing', function () {
  gulp.src([
      './bower_components/jquery.easing/js/jquery.easing.min.js'
    ])
    .pipe(gulp.dest('./dist/js'))
    .pipe(plugins.duration('copy-jquery-easing'));
});

gulp.task('copy-bootstrap-js', function () {
  gulp.src([
      './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'
    ])
    .pipe(gulp.dest('./dist/js'))
    .pipe(plugins.duration('copy-bootstrap-js'));
});

gulp.task('copy-fontawesome-css', function () {
  gulp.src([
      './bower_components/fontawesome/css/font-awesome.min.css'
    ])
    .pipe(gulp.dest('./dist/css'))
    .pipe(plugins.duration('copy-fontawesome-css'));
});

gulp.task('copy-libraries-css', function () {
  gulp.src([
      './app/styles/css/libraries.css'
    ])
    .pipe(gulp.dest('./dist/css'))
    .pipe(plugins.duration('copy-libraries-css'));
});

gulp.task('copy-libraries-js', function () {
  gulp.src([
      './app/js/libraries.js'
    ])
    .pipe(gulp.dest('./dist/js'))
    .pipe(plugins.duration('copy-libraries-js'));
});

gulp.task('copy-app-js', function () {
  gulp.src([
      './app/js/app.js'
    ])
  // TODO: LBF 11/20/15 minify
    .pipe(gulp.dest('./dist/js'))
    .pipe(plugins.duration('copy-app-js'));
});


