"use strict";
const path = require("path");
// const sassLoader = require("node-sass");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname,
	entry: __dirname + "/main.js",
	output: {
		filename: "dist/bundle.js",
		library: "board"
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


	module: {
		// noParse: ['ws'],

		loaders: [
			{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },
		// {
    //             test: /\.scss$/,
    //             loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
    //         },
    //         {
    //             test: /\.css$/,
    //             loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    //         },
		]
	},
	//
	// plugins: [
	// 	new ExtractTextPlugin('styles.css', {
	// 			allChunks: true
	// 	})
  //   ]
	// externals: ['ws']
};
