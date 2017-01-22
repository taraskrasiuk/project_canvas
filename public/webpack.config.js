"use strict";

module.exports = {
	entry: "./bundle",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},

	watchOptions : {
		aggregateTimeout: 200
	}
};