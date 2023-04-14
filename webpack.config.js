const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

module.exports = (env, argv) => ({
	mode: argv.mode === 'production' ? 'production' : 'development',
	devtool: argv.mode === 'production' ? false : 'inline-source-map',
	entry: {
		main: './src/main.ts',
		'user-interface': './src/user-interface.tsx',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader'},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			chunks: ['user-interface'],
			cache: false,
		}),
		new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/user-interface/]),
	],
});
