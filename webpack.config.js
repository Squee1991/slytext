import {__dirname} from "node/globals";

const path = require('path')

let webpackMode = process.env.NODE_ENV ? 'develop' : 'production';

module.exports = {
	mode: webpackMode,
	entry: {
		main: './source/js/app.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist/webpack'),
	},
};