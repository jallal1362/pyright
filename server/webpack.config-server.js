/**
* webpack.config-server.js
* Copyright: Microsoft 2018
*
* Configuration for webpack to bundle the javascript into a single file
* for the VS Code Extension language server.
*/

const path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    entry: './src/server.ts',
    mode: 'production',
    target: 'node',
    devtool: 'source-map',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, '../client/server')
    },
    optimization: {
        usedExports: true,
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '.'),
            'node_modules'
        ],
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json'
                }
            }
        ]
    },
    node: {
        fs: 'empty',
        __dirname: false,
        __filename: false
    }
};
