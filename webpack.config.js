"use strict";
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    context: __dirname,
    entry: __dirname + "/public/main.js",
    output: {
        path: path.join(__dirname, 'public/build'),
        filename: 'bundle.js',
        publicPath: '/build/',
        library: 'board'
    },
    devServer: {
        headers: {"Access-Control-Allow-Origin": "*"}
    },

    // watch: true,
    devtool: "source-map",
    watch: true,


    module: {
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
        ],
    },
};
