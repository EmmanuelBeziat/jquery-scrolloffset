/**
 * Dépendances gulp
 */
var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	stylus = require('gulp-stylus'),
	stylish = require('jshint-stylish');

/**
 * Chemins
 */
var pathDemo = './demo',
	pathCSS = './demo/css'
	pathSrc = './src',
	pathDist = './dist',
	pathStylus = './src/stylus',
	pathJS = './src/js';

/**
 * Sauvegarde et compresse les fichiers stylus dans un unique fichier style.css
 * Garde le comportement @require de stylus
 * Crée un fichier sourcemap
 **/
gulp.task('stylus', function() {
	return gulp.src(pathStylus + '/main.styl')
		.pipe(sourcemaps.init())
			.pipe(stylus({
				compress: true
			}))
		.pipe(sourcemaps.write('../css'))
		.pipe(gulp.dest(pathCSS));
});

/**
 * Linter JS
 */
gulp.task('jshint', function() {
	return gulp.src(pathJS + '/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

/**
 * Sauvegarde et compresse les fichiers JS dans un fichier minifié
 * Crée un fichier sourcemap
 **/
gulp.task('javascript', function() {
	return gulp.src(pathJS + '/*.js')
		.pipe(sourcemaps.init())
			.pipe(uglify({
				preserveComments: 'some'
			}))
			.pipe(rename('jquery-scrolloffset.min.js'))
		.pipe(sourcemaps.write('../dist'))
		.pipe(gulp.dest(pathDist));
});

gulp.task('default', ['stylus', 'jshint', 'javascript'], function() {
});

gulp.task('watch', function() {
	gulp.watch(pathStylus + '/*.styl', ['stylus']);
	gulp.watch(pathJS + '/*.js', ['javascript']);
});