const HtmlWebpackPlugin = require( "html-webpack-plugin" );

module.exports = {
	entry: './index.js',
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
			template:	"./html.html",
			inject: 	"body",
			filename:	"index.html"
		})
	]
};
