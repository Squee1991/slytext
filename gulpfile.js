const {src, dest, parallel, watch, series} = require('gulp');
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

	webpack: {
		src: 'source/js/*.js',
		dest: 'dist/webpack/'
	},

	Pug: {
		src: 'source/pug/*.pug',
		watch: 'source/pug/includes/*.pug',
		dest: 'dist/'

	},


}

function webTaskJS(done) {
	src([PATHS.webpack.src])
	.pipe(webpackStream(webpackConfig, webpack))
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
	src([PATHS.Pug.src])
	.pipe(pug())
	.pipe(dest(PATHS.Pug.dest))
	done()
}


function watchTask(done) {
	watch(PATHS.style.watch, compiletoSass).on('change', browserSync.reload);
	watch(PATHS.Pug.watch, toPug).on('change', browserSync.reload);
	watch(PATHS.js.watch, getJS).on('change', browserSync.reload);
	done()
}

function startServe(done) {
	setTimeout(() => {
		browserSync.init({
			server: {
				baseDir: "./dist/",
				port: 3000,
				open: false
			}
		});
	}, 3000)
	done()
}

// привет всем


exports.develop = parallel(clean, compiletoSass, html, image, getJS, toPug, webTaskJS, startServe, watchTask);
exports.production = parallel(clean, compiletoSass, html, image, getJS, toPug, webTaskJS);
