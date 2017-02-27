"use strict";
const path = require("path");
// const sassLoader = require("node-sass");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	context: __dirname,
	entry: __dirname + "/scripts/main.js",
	// output: {
	// 	filename: "dist/bundle.js",
	// 	library: "board"
	// },
	output: {
			path: path.join(__dirname, 'public/build'),
			filename: 'bundle.js',
			publicPath: '/build/',
			library: 'board'
	},
	devServer: {
		headers: { "Access-Control-Allow-Origin": "*" }
	},
	// context: __dirname,
  //   entry: {
  //       bundle: './main.js',
  //       styles: './scss/*.scss'
  //   },
  //   output: {
  //       filename: 'bundle.js',
  //       path: './dist',
  //       library: 'board'
  //   },

	// watch: true,
	devtool: "source-map",
	watch: true,


	module: {
		// noParse: ['ws'],

		loaders: [
			{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }

    },
		{
				test: /\.(scss)$/,
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
		},
		{
				test: /\.(css)$/,
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[local]!postcss')
		}
		// {
    //             test: /\.scss$/,
    //             loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
    //         },
    //         {
    //             test: /\.css$/,
    //             loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    //         },
	],


	},

	//
	// plugins: [
	// 	new ExtractTextPlugin('styles.css', {
	// 			allChunks: true
	// 	})
  //   ]
	// externals: ['ws']
};
