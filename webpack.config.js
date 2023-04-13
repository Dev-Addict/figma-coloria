const path = require('path');

module.exports = (env, argv) => ({
	mode: argv.mode === 'production' ? 'production' : 'development',
	devtool: argv.mode === 'production' ? false : 'inline-source-map',
	entry: {
		code: './src/main.ts',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
});
