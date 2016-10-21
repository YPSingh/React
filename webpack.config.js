var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'inline-source-map', //'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    
    devServer: {
        inline: true,
        contentBase: './src',
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.png$/, loader: "file-loader"},
            {test: /\.jpg$/, loader: "file-loader"}
        ]
    },
    output:{
        path:'src',
        filename:'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
}

module.exports = config;