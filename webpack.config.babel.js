const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const WebpackDevServer = require('webpack-dev-server')
const path = require('path');

module.exports = {
	entry: './js/main.js',
	output: {
		filename: './dist/bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: [ '.js' ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:	"./index.html",
			inject: 	"body",
			filename:	"index.html"
		})
	]
};
