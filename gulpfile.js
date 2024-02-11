const {src, dest, parallel, watch} = require('gulp');
const gulpSass = require('gulp-sass');
const defaulSass = require('sass');
const sass = gulpSass(defaulSass);
const del = require('delete');
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create();
const sassGlob = require('gulp-sass-glob')
const include = require('gulp-file-include')
const pug = require('gulp-pug')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('./webpack.config.js');

const PATHS = {
	style: {
		src: 'source/styles/main.scss',
		watch: 'source/styles/**/*.scss',
		dest: 'dist/css'
	},
	html: {
		src: 'source/html/*',
		watch: 'source/html/*',
		dest: 'dist/'
	},
	js: {
		src: 'source/js/*.js',
		watch: 'source/js/*.js',
		dest: 'dist/js'
	},
	img: {
		src: 'source/img/*',
		dest: 'dist/img'
	},

	toPug: {
		src: 'source/pug/*.pug',
		watch: 'source/html/*',
		dest: 'dist/'

	},

	webpack: {
		dest: 'dist/webpack/'
	}
}

function webTaskJS(done) {
	src([PATHS.js.src])
		.pipe(webpackStream(webpackConfig , webpack))
		.pipe(dest(PATHS.webpack.dest))
	done()
}

function getJS(done) {
	src([PATHS.js.src])
		.pipe(dest(PATHS.js.dest))
	done()
}

function image(done) {
	src([PATHS.img.src])
		.pipe(dest(PATHS.img.dest))
	done()
}

function compiletoSass(done) {
	src([PATHS.style.src])
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename('style.min.css'))
		.pipe(dest(PATHS.style.dest));
	done()
}

function clean(done) {
	del(['dist']);
	done()
}

function html(done) {
	src([PATHS.html.src])
		.pipe(include({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(dest(PATHS.html.dest));
	done();
}

function toPug(done) {
	src([PATHS.toPug.src])
		.pipe(pug())
		.pipe(dest(PATHS.toPug.dest))
	done()
}


function watchTask() {
	watch(PATHS.style.watch, compiletoSass).on('change', browserSync.reload);
	watch(PATHS.html.watch, html).on('change', browserSync.reload);
	watch(PATHS.html.watch)
	watch(PATHS.toPug.watch)
	watch(PATHS.js.watch).on('change', browserSync.reload);
}

function startServe(done) {
	browserSync.init({
		server: {
			baseDir: "./dist/",
			port: 3000,
			open: false
		}
	});
	done();
}

// привет всем

exports.develop = parallel(clean, compiletoSass, html, watchTask, startServe, image, getJS, toPug, webTaskJS);
exports.production = parallel(clean, compiletoSass, html, image, getJS, toPug, webTaskJS);
