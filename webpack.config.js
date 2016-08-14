'use strict';

const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'app': './src/client'
    },
    output: {
        path: path.join(__dirname, 'public', 'js'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src/client'],
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /node_modules/,

                query: {
                    cacheDirectory: true,
                    presets: ['es2015'],
                    plugins: ['syntax-async-functions', 'transform-regenerator']
                },
                include: path.resolve('..', __dirname)
            },
            {
                test: /\.json/,
                loader: 'json'
            }
        ]
    }
};
