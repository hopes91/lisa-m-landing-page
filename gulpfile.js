'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uglifycss = require('gulp-uglifycss');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const cache = require('gulp-cached');
const remember = require('gulp-remember');
const del = require('del');
const browserSync = require('browser-sync').create();

gulp.task('css', function() {
  return gulp.src('./dev/sass/**/*.scss')
    .pipe(cache('css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(remember('css'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
  return gulp.src('./dev/js/**/*.js')
    .pipe(webpackStream(require('./webpack.config.js')))
    .pipe(gulp.dest('./public'));
});

gulp.task('assets', function() {
  return gulp.src('./dev/assets/**/*.*', {since: gulp.lastRun('assets')})
    .pipe(gulp.dest('./public'));
});

gulp.task('clean', function() {
  return del('./public');
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('css', 'js', 'assets'))
);

gulp.task('watch', function() {
  const cssWatcher = gulp.watch('./dev/sass/**/*.scss', gulp.series('css'));

  cssWatcher.on('unlink', function(event) {
    delete cache.caches['css'][event.path];
    remember.forget('css', event.path);
  });

  const jsWatcher = gulp.watch('./dev/js/**/*.js', gulp.series('js'));

  jsWatcher.on('unlink', function(event) {
    delete cache.caches['js'][event.path];
    remember.forget('js', event.path);
  });

  gulp.watch('./dev/assets/**/*.*', gulp.series('assets'));
});

gulp.task('server', function() {
  browserSync.init({
    server: './public'
  });

  browserSync.watch('./public/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
  'build',
  gulp.parallel('watch', 'server'))
);
