const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};