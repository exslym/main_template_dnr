const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	output: {
		chunkFilename: 'js/[name].chunk.js',
	},
	devServer: {
		hot: true,
	},
	plugins: [
		new Webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		/* 		
		new Webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}), 
		*/
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				include: Path.resolve(__dirname, '../src'),
				loader: 'babel-loader',
			},
			{
				test: /\.js$/,
				include: Path.resolve(__dirname, '../src'),
				enforce: 'pre',
				loader: 'eslint-loader',
				options: {
					emitWarning: true,
				},
			},
		],
	},
	/* 	
	externals: {
			jquery: 'jQuery',
		}, 
	*/
});
