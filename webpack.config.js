let webpackMode = process.env.NODE_ENV ? 'develop' : 'production';

module.exports = {
	mode: webpackMode,
	entry: {
		main: './source/js/app.js',
		faq: './source/js/faq.js',
	},
	output: {
		filename: '[name].bundle.js',
	}
};


