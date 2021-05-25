/*
 * File: webpack.config.js                                                     *
 * Project: erp                                                                *
 * Created Date: Tu May yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Tue May 25 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ----------	---	---------------------------------------------------------  *
 */



const path = require('path');

module.exports = {
    entry: './src/main.ts',
    target: 'electron-renderer',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    node: {
        fs: false,
        path: false
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            path: false,
            fs: false,
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
};