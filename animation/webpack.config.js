const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "reviews.js",
        path: path.resolve(__dirname, 'dist')
    }
}