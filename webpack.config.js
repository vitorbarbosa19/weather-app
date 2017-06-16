const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
	entry: './app/index.js',
	
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/' //React-Router configuration
	},
	
	module: {
		rules: [
			{ test: /\.jsx?$/, loader: 'babel-loader', query: {presets: ['react']} },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
		]
	},

	devServer: {
		historyApiFallback: true //React-Router configuration
	},

	plugins: [
		new HtmlWebpackPlugin ({
			template: './app/index.html'
		})
	]
};

module.exports = config;
