"use strict";
const path = require("path");

module.exports = {
	entry: __dirname + "/main.js",
	output: {
		filename: "dist/bundle.js",
		library: "board"
	},
	
	watch: true,
	devtool: "source-map", 

	module: {
		noParse: ['ws'],

		loaders: [
			{
                test: /\.ts$/,
                loaders: ['babel-loader'],
                exclude: [/(node_modules)/]
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/(node_modules)/]
            }
		]
	},
	externals: ['ws']
};