var gulp = require('gulp');
var minicss = require('gulp-minify-css');
var minihtml = require('gulp-minify-html');

gulp.task('hello',function() {
	console.log('hello');
});

gulp.task('minicss',function() {
	gulp.src('css/*.css').pipe(minicss()).pipe(gulp.dest('css'))
});

gulp.task('minihtml',function() {
	gulp.src('*.html').pipe(minihtml()).pipe(gulp.dest('gulphtml'))
});
