const debug = process.env.NODE_ENV !== "production";
const webpack = require( "webpack" );
const path = require( "path" );

module.exports = {
    context: path.join( __dirname, "src" ),
    devtool: debug ? "inline-sourcemap" : false,
    entry: { app: "./js/App.js",
        lib: [ "react", "react-dom" ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: "pre",
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "eslint-loader",
                        options: {
                            failOnWarning: false,
                            failOnError: true,
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                /* query: {
                    presets: [ "react", "es2015", "stage-0" ],
                },*/
            },
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin( { mangle: false, sourcemap: false } ),
        new webpack.optimize.CommonsChunkPlugin( {
            name: "lib",
            minChunks: Infinity,
            filename: "[name].bundle.js",
        } ),
    ],
};
