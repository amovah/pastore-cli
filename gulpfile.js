var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var rm = require('gulp-rimraf');

gulp.task('clean', function() {
  return gulp.src('build', { read: false })
        .pipe(rm());
});

gulp.task('babel', ['clean'], function() {
  return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build'));
});

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('prod', ['lint', 'babel']);

gulp.task('dev', ['babel']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['dev']);
});
