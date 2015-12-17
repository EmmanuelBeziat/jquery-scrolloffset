/**
 * Gulp dependancies
 */
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

/**
 * Project & pathes
 */
var project = 'jquery-scrolloffset',
	path = {
		demo: './demo',
		css: './demo/css',
		src: './src',
		dist: './dist',
		stylus: './src/stylus',
		js: './src/js'
	};

/**
 * livereload
 */
gulp.task('reload', function() {
	plugins.livereload();
});

/**
 * Save and minify stylus files in one css file
 * Create sourcemap file
 **/
gulp.task('stylus', function() {
	return gulp.src(path.stylus + '/main.styl')
		.pipe(plugins.plumber())
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.stylus({
				compress: true
			}))
		.pipe(plugins.sourcemaps.write('../css'))
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(path.css))
		.pipe(plugins.livereload());
});

/**
 * Save and minify js files in one js file
 * Create sourcemap file
 **/
gulp.task('javascript', function() {
	return gulp.src(path.js + '/*.js')
		.pipe(plugins.plumber())
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.uglify({
				preserveComments: 'some'
			}))
			.pipe(plugins.rename(project + '.min.js'))
		.pipe(plugins.sourcemaps.write('../dist'))
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(path.dist))
		.pipe(plugins.livereload());
});

gulp.task('default', ['stylus', 'javascript'], function() {
});

gulp.task('watch', function() {
	plugins.livereload.listen();
	gulp.watch(path.stylus + '/*.styl', ['stylus']);
	gulp.watch(path.js + '/*.js', ['javascript']);
	gulp.watch('**/*.html', ['reload']);
});