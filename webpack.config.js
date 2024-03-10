
const path = require('path')
let webpackMode = process.env.NODE_ENV ? 'develop' : 'production';
module.exports = {
	mode: webpackMode,
	entry: {
		main: './source/js/main.js',
		faq: './source/js/faq.js',
		scroll: './source/js/scroll.js',
		singIN:'./source/js/sing-in.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist/webpack'),
		filename: '[name].bundle.js',
	},
	// optimization: {
	// 	minimize: false,
	// }
};

