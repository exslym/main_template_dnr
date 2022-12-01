const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

let htmlPageNames = [];
const pages = fs.readdirSync('./src');
pages.forEach(page => {
	if (page.endsWith('.html')) {
		htmlPageNames.push(page.split('.html')[0]);
	}
});
const multipleHtmlPlugins = htmlPageNames.map(name => {
	return new HtmlWebpackPlugin({
		template: `./src/${name}.html`,
		filename: `${name}.html`,
		chunks: ['app'],
	});
});

module.exports = {
	entry: {
		app: Path.resolve(__dirname, '../src/scripts/index.js'),
	},
	output: {
		path: Path.join(__dirname, '../build'),
		filename: 'js/[name].js',
		assetModuleFilename: '[path][name][ext]',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false,
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [{ from: Path.resolve(__dirname, '../public'), to: 'public' }],
		}),
	].concat(multipleHtmlPlugins),
	resolve: {
		alias: {
			'~': Path.resolve(__dirname, '../src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto',
			},
			{
				test: /\.(mp4|ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				type: 'asset/resource',
			},
		],
	},
};
