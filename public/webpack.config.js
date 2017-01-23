"use strict";
const path = require("path");

module.exports = {
	entry: __dirname + "/main.js",
	output: {
		filename: "dist/bundle.js"
	},
	
	watch: true,
	devtool: "source-map", 

	module: {
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
	}
};