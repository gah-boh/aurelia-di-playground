var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    watch: true,
    devtool: 'source-map',
    plugins: [
        new WebpackNotifierPlugin()
    ]
};
