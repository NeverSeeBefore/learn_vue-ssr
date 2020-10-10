const path = require('path');
const VueLoaderPlugin = require('vue-loader/dist/plugin');
module.exports = {
    mode: 'development',
    target: 'node',
    entry: './entry/server-entry.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}