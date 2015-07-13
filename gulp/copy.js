
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({camelize: true});

/**
* Copies app Index.html file into dist/ build directory
*/
gulp.task('copy-index-html', function() {
  gulp.src(['./app/index.html'])
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-angular', function() {
  gulp.src(['./bower_components/angular/angular.min.js'])
    .pipe(gulp.dest('./dist/js'));
  gulp.src(['./bower_components/angular-animate/angular-animate.min.js'])
    .pipe(gulp.dest('./dist/js'));
  gulp.src(['./bower_components/angular-loading-bar/build/loading-bar.min.js'])
    .pipe(gulp.dest('./dist/js'));
  gulp.src(['./bower_components/angular-loading-bar/build/loading-bar.min.css'])
    .pipe(gulp.dest('./dist/css'));
});

/*gulp.task('copy-scripts', function() {
  gulp.src(['./app/scripts/*.js'])
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./dist/scripts'));
});*/

