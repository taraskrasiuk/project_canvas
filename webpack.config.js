"use strict";
const path = require("path");
const webpack = require('webpack');




console.log("DIRNAME " + __dirname);
module.exports = {
    context: __dirname + "/public",
    entry: "./main.js",
    output: {
        path: path.join(__dirname, 'public/build'),
        filename: 'bundle.js',
        publicPath: '/build/',
        library: 'board'
    },
    // output: {
    //     path: "/build",
    //     filename: 'bundle.js',
    //     library: 'board'
    // },
    // watch: true,
    devtool: "source-map",
    watch: true,


    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }

            }

        ],
    },
};
