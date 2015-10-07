/**
 * Gulp dependancies
 */
var gulp = require('gulp'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	stylus = require('gulp-stylus'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer');

/**
 * Project
 */
var project = 'jquery-scrolloffset';

/**
 * Paths
 */
var path = {
		demo: './demo',
		css: './demo/css',
		src: './src',
		dist: './dist',
		stylus: './src/stylus',
		js: './src/js'
	};

/**
 * Save and minify stylus files in one css file
 * Create sourcemap file
 **/
gulp.task('stylus', function() {
	return gulp.src(path.stylus + '/main.styl')
		.pipe(plumber())
		.pipe(sourcemaps.init())
			.pipe(stylus({
				compress: true
			}))
		.pipe(sourcemaps.write('../css'))
		.pipe(plumber.stop())
		.pipe(gulp.dest(path.css));
});

/**
 * Save and minify js files in one js file
 * Create sourcemap file
 **/
gulp.task('javascript', function() {
	return gulp.src(path.js + '/*.js')
		.pipe(plumber())
		.pipe(sourcemaps.init())
			.pipe(uglify({
				preserveComments: 'some'
			}))
			.pipe(rename(project + '.min.js'))
		.pipe(sourcemaps.write('../dist'))
		.pipe(plumber.stop())
		.pipe(gulp.dest(path.dist));
});

gulp.task('default', ['stylus', 'javascript'], function() {
});

gulp.task('watch', function() {
	gulp.watch(path.stylus + '/*.styl', ['stylus']);
	gulp.watch(path.js + '/*.js', ['javascript']);
});